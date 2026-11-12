// ============================================================
// ANALYSE : compare une recette au stock, sans rien afficher.
// Dit, pour chaque ingrédient de la recette : présent, manquant (et combien),
// remplacé par son remplaçant, à vérifier (unités qui ne se comparent pas),
// à utiliser vite (péremption proche). Calcule le % de complétion.
// Utilisé par js/recettes.js (listes), js/cuisiner.js (ce qu'on retire du stock)
// et la page de test privée docs/tester-analyse.html.
// Chargé juste après js/ingredient.js, dont il utilise :
//   convertir, ecrireQuantite, ingredientDeReference, indexerLignes.
// Ne dépend d'aucun autre fichier : le stock lui est donné par preparerIndexStock(stock).
// ============================================================

// Nombre de jours avant péremption à partir duquel on alerte (orange)
const JOURS_ALERTE = 3;

// ---------- Dates ----------

// Nombre de jours entre aujourd'hui et une date AAAA-MM-JJ (négatif = dépassé)
function joursRestants(date) {
  const p = date.split("-");
  const cible = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  const maintenant = new Date();
  const aujourdhui = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate());
  return Math.round((cible - aujourdhui) / 86400000);
}

// Écrit un délai de péremption : « demain », « dans 2 jours »
function ecrireDelai(jours) {
  if (jours < 0) return "périmé";
  if (jours === 0) return "aujourd'hui";
  if (jours === 1) return "demain";
  return "dans " + jours + " jours";
}

// ---------- Index rapide du stock ----------
// Comme l'index au dos d'un livre : on retrouve un ingrédient d'un coup, sans parcourir tout le stock.
// Indispensable quand il y a beaucoup de recettes (1 000 recettes : 160 ms -> moins de 2 ms).
// À refaire avec preparerIndexStock(stock) avant chaque calcul (le stock change souvent).
let indexStock = new Map();
function preparerIndexStock(lignesDuStock) {
  indexStock = indexerLignes(lignesDuStock); // js/ingredient.js : même règle « même ingrédient » partout
}

// Retrouve la ligne du stock correspondant à un ingrédient de recette (null si absente ou à zéro).
// Attention : appeler preparerIndexStock(stock) avant, si le stock a pu changer.
function ligneDuStock(id) {
  const ligne = indexStock.get(id);
  return ligne && ligne.quantite > 0 ? ligne : null;
}

// ---------- Calcul ----------

// Nom d'un ingrédient à partir de son identifiant
function nomIngredient(id) {
  const reference = ingredientDeReference(id);
  return reference ? reference.nom : id;
}

// Regarde ce que le stock contient pour un ingrédient de recette.
// Renvoie : enStock (la ligne du stock, ou null), manque (quantité qui manque, dans l'unité
// de la recette), incomparable (vrai si les unités ne se comparent pas, ex. « sachet » et « g »).
function disponibilite(besoin) {
  const enStock = ligneDuStock(besoin.id);
  if (!enStock) return { enStock: null, manque: besoin.quantite, incomparable: false };
  const quantiteEnStock = convertir(enStock.quantite, enStock.unite, besoin.unite);
  if (quantiteEnStock === null) return { enStock: enStock, manque: 0, incomparable: true };
  return { enStock: enStock, manque: Math.max(0, besoin.quantite - quantiteEnStock), incomparable: false };
}

// Ingrédient avec remplaçant, écrit dans la recette avec « ou » :
//   { id: "sake", quantite: 15, unite: "ml", ou: { id: "vin-blanc", quantite: 15, unite: "ml" } }
// Renvoie celui des deux qui compte : l'ingrédient d'origine d'abord ; le remplaçant
// seulement si l'origine manque et que le stock a assez du remplaçant.
function besoinRetenu(besoin) {
  if (!besoin.ou) return besoin;
  if (disponibilite(besoin).manque === 0) return besoin;
  return disponibilite(besoin.ou).manque === 0 ? besoin.ou : besoin;
}

// Compare une recette au stock.
// Renvoie : pourcent, lignes (détail par ingrédient), manquants, urgents (à utiliser vite), aVerifier.
function analyserRecette(recette) {
  let obligatoires = 0;
  let disponibles = 0;
  const lignes = [];
  const manquants = [];
  const urgents = [];
  let aVerifier = false;

  recette.ingredients.forEach(function (origine) {
    // Ingrédient avec remplaçant : « besoin » est celui des deux qui compte (voir besoinRetenu)
    const besoin = besoinRetenu(origine);
    const reference = ingredientDeReference(origine.id);
    const nom = reference ? reference.nom : origine.id;
    const info = { nom: nom, quantite: origine.quantite, unite: origine.unite, etat: "ok", note: "" };
    if (origine.ou) {
      info.ou = nomIngredient(origine.ou.id).toLowerCase() + " : " + ecrireQuantite(origine.ou.quantite, origine.ou.unite);
      info.remplace = besoin !== origine; // vrai = c'est le remplaçant du stock qui sert
    }
    lignes.push(info);

    // Sel, poivre, eau : toujours considérés comme présents
    if (reference && reference.base) {
      info.etat = "base";
      return;
    }

    const dispo = disponibilite(besoin);
    const enStock = dispo.enStock;
    const manque = dispo.manque; // quantité qui manque, dans l'unité de la recette
    if (dispo.incomparable) {
      // Unités non comparables : on fait confiance, mais on le signale
      info.note = "quantité à vérifier (stock : " + ecrireQuantite(enStock.quantite, enStock.unite) + ")";
      aVerifier = true;
    }

    if (origine.optionnel) {
      // Un ingrédient optionnel ne rend jamais la recette incomplète
      info.etat = manque > 0 ? "optionnel-absent" : "optionnel";
    } else {
      obligatoires++;
      if (manque > 0) {
        info.etat = "manque";
        info.note = enStock ? "il manque " + ecrireQuantite(manque, besoin.unite) : "pas dans le stock";
        manquants.push({
          id: besoin.id, nom: nom, quantite: manque, unite: besoin.unite,
          ou: origine.ou ? nomIngredient(origine.ou.id).toLowerCase() : ""
        });
      } else {
        disponibles++;
      }
    }

    // Ingrédient du stock périmé ou qui périme bientôt
    if (enStock && enStock.peremption && info.etat !== "optionnel-absent") {
      const jours = joursRestants(enStock.peremption);
      if (jours <= JOURS_ALERTE) {
        info.peremption = jours < 0 ? "perime" : "bientot";
        info.delai = ecrireDelai(jours);
        urgents.push({ nom: nomIngredient(besoin.id), jours: jours });
      }
    }
  });

  urgents.sort(function (a, b) { return a.jours - b.jours; });
  return {
    recette: recette,
    pourcent: obligatoires === 0 ? 100 : Math.floor(disponibles / obligatoires * 100),
    lignes: lignes,
    manquants: manquants,
    urgents: urgents,
    aVerifier: aVerifier
  };
}
