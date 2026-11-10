// ============================================================
// RECETTES : compare les recettes au stock et les affiche.
// - « Réalisables maintenant » : tout est dans le stock.
// - « Presque réalisables » : au moins SEUIL_INCOMPLET % des ingrédients.
// Les favoris (étoile) sont enregistrés et synchronisés avec le stock.
// Utilise : stock, favoris, sauvegarder, element, joursRestants, JOURS_ALERTE, arrondir, creerId (js/stock.js),
//           INGREDIENTS (data/ingredients.js), RECETTES (recettes/toutes.js).
// ============================================================

// % minimum pour qu'une recette incomplète soit proposée
const SEUIL_INCOMPLET = 50;
// Choix proposés dans le filtre « Temps » (en minutes)
const TEMPS_PROPOSES = [15, 20, 30, 45, 60];
// Conversions discrètes : chaque unité ramenée à une unité commune
const CONVERSIONS = {
  g: { famille: "poids", facteur: 1 },
  kg: { famille: "poids", facteur: 1000 },
  ml: { famille: "volume", facteur: 1 },
  l: { famille: "volume", facteur: 1000 }
};
// Unités qui prennent un « s » au pluriel
const UNITES_AU_PLURIEL = ["pièce", "tranche", "gousse", "boîte", "sachet"];

// Recettes actuellement dépliées (pour les garder ouvertes quand la liste se rafraîchit)
const recettesOuvertes = {};

// ---------- Outils ----------

// Retrouve un ingrédient de la liste de référence
function ingredientDeReference(id) {
  return INGREDIENTS.find(function (ingredient) { return ingredient.id === id; });
}

// Retrouve la ligne du stock correspondant à un ingrédient de recette (null si absente ou à zéro)
function ligneDuStock(id) {
  const ligne = stock.find(function (l) { return l.id === id || creerId(l.nom) === id; });
  return ligne && ligne.quantite > 0 ? ligne : null;
}

// Convertit une quantité du stock dans l'unité de la recette.
// Renvoie null si les deux unités ne sont pas comparables (ex. « pièce » et « g »).
function convertir(quantite, uniteDepart, uniteArrivee) {
  if (uniteDepart === uniteArrivee) return quantite;
  const depart = CONVERSIONS[uniteDepart];
  const arrivee = CONVERSIONS[uniteArrivee];
  if (!depart || !arrivee || depart.famille !== arrivee.famille) return null;
  return quantite * depart.facteur / arrivee.facteur;
}

// Écrit une quantité : « 100 g », « 2 pièces »
function ecrireQuantite(quantite, unite) {
  const pluriel = quantite > 1 && UNITES_AU_PLURIEL.indexOf(unite) !== -1 ? "s" : "";
  return arrondir(quantite) + " " + unite + pluriel;
}

// Écrit un délai de péremption : « demain », « dans 2 jours »
function ecrireDelai(jours) {
  if (jours < 0) return "périmé";
  if (jours === 0) return "aujourd'hui";
  if (jours === 1) return "demain";
  return "dans " + jours + " jours";
}

// ---------- Calcul ----------

// Compare une recette au stock.
// Renvoie : pourcent, lignes (détail par ingrédient), manquants, urgents (à utiliser vite), aVerifier.
function analyserRecette(recette) {
  let obligatoires = 0;
  let disponibles = 0;
  const lignes = [];
  const manquants = [];
  const urgents = [];
  let aVerifier = false;

  recette.ingredients.forEach(function (besoin) {
    const reference = ingredientDeReference(besoin.id);
    const nom = reference ? reference.nom : besoin.id;
    const info = { nom: nom, quantite: besoin.quantite, unite: besoin.unite, etat: "ok", note: "" };
    lignes.push(info);

    // Sel, poivre, eau : toujours considérés comme présents
    if (reference && reference.base) {
      info.etat = "base";
      return;
    }

    const enStock = ligneDuStock(besoin.id);
    let manque = 0; // quantité qui manque, dans l'unité de la recette
    if (!enStock) {
      manque = besoin.quantite;
    } else {
      const quantiteEnStock = convertir(enStock.quantite, enStock.unite, besoin.unite);
      if (quantiteEnStock === null) {
        // Unités non comparables : on fait confiance, mais on le signale
        info.note = "quantité à vérifier (stock : " + ecrireQuantite(enStock.quantite, enStock.unite) + ")";
        aVerifier = true;
      } else if (quantiteEnStock < besoin.quantite) {
        manque = besoin.quantite - quantiteEnStock;
      }
    }

    if (besoin.optionnel) {
      // Un ingrédient optionnel ne rend jamais la recette incomplète
      info.etat = manque > 0 ? "optionnel-absent" : "optionnel";
    } else {
      obligatoires++;
      if (manque > 0) {
        info.etat = "manque";
        info.note = enStock ? "il manque " + ecrireQuantite(manque, besoin.unite) : "pas dans le stock";
        manquants.push({ nom: nom, quantite: manque, unite: besoin.unite });
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
        urgents.push({ nom: nom, jours: jours });
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

// ---------- Filtres ----------

function ajouterOption(liste, valeur, texte) {
  const option = document.createElement("option");
  option.value = valeur;
  option.textContent = texte;
  liste.appendChild(option);
}

// Met une majuscule au début : « italienne » -> « Italienne »
function majuscule(texte) { return texte.charAt(0).toUpperCase() + texte.slice(1); }

// Remplit les trois listes de filtres à partir des recettes
function preparerFiltres() {
  const cuisines = [];
  const difficultes = [];
  RECETTES.forEach(function (recette) {
    if (cuisines.indexOf(recette.cuisine) === -1) cuisines.push(recette.cuisine);
    if (difficultes.indexOf(recette.difficulte) === -1) difficultes.push(recette.difficulte);
  });

  ajouterOption(element("filtre-cuisine"), "", "Toutes");
  cuisines.forEach(function (c) { ajouterOption(element("filtre-cuisine"), c, majuscule(c)); });
  ajouterOption(element("filtre-difficulte"), "", "Toutes");
  difficultes.forEach(function (d) { ajouterOption(element("filtre-difficulte"), d, majuscule(d)); });
  element("filtre-favoris").addEventListener("change", afficherRecettes);
  ajouterOption(element("filtre-temps"), "", "Peu importe");
  TEMPS_PROPOSES.forEach(function (t) { ajouterOption(element("filtre-temps"), String(t), t + " min ou moins"); });

  ["filtre-cuisine", "filtre-difficulte", "filtre-temps"].forEach(function (id) {
    element(id).addEventListener("change", afficherRecettes);
  });
}

// Dit si une recette passe les filtres choisis
function passeLesFiltres(recette) {
  const cuisine = element("filtre-cuisine").value;
  const difficulte = element("filtre-difficulte").value;
  const temps = element("filtre-temps").value;
  if (cuisine && recette.cuisine !== cuisine) return false;
  if (difficulte && recette.difficulte !== difficulte) return false;
  if (temps && recette.tempsMinutes > Number(temps)) return false;
  if (element("filtre-favoris").checked && favoris.indexOf(recette.id) === -1) return false;
  return true;
}

// ---------- Favoris ----------

// Ajoute ou retire l'étoile d'une recette, puis enregistre (et synchronise)
function basculerFavori(id) {
  const position = favoris.indexOf(id);
  if (position === -1) favoris.push(id);
  else favoris.splice(position, 1);
  sauvegarder();
  afficherRecettes();
}

// ---------- Affichage ----------

// Rafraîchit les deux listes (appelé au démarrage, quand un filtre ou le stock change)
function afficherRecettes() {
  const analyses = RECETTES.filter(passeLesFiltres).map(analyserRecette);

  // Réalisables : ce qui périme le plus tôt d'abord, puis les plus rapides
  const realisables = analyses
    .filter(function (a) { return a.pourcent === 100; })
    .sort(function (a, b) {
      const urgenceA = a.urgents.length ? a.urgents[0].jours : Infinity;
      const urgenceB = b.urgents.length ? b.urgents[0].jours : Infinity;
      if (urgenceA !== urgenceB) return urgenceA - urgenceB;
      return a.recette.tempsMinutes - b.recette.tempsMinutes;
    });

  // Presque réalisables : de la plus complète à la moins complète
  const incompletes = analyses
    .filter(function (a) { return a.pourcent < 100 && a.pourcent >= SEUIL_INCOMPLET; })
    .sort(function (a, b) {
      if (a.pourcent !== b.pourcent) return b.pourcent - a.pourcent;
      return a.manquants.length - b.manquants.length;
    });

  remplirListe("liste-realisables", "vide-realisables", realisables,
    "Aucune recette réalisable avec le stock actuel et ces filtres.");
  element("aide-favoris").hidden = !(element("filtre-favoris").checked && favoris.length === 0);
  remplirListe("liste-incompletes", "vide-incompletes", incompletes,
    "Aucune recette presque réalisable avec ces filtres.");
  element("titre-realisables").textContent = "Réalisables maintenant (" + realisables.length + ")";
  element("titre-incompletes").textContent = "Presque réalisables (" + incompletes.length + ")";
}

function remplirListe(idListe, idVide, analyses, texteVide) {
  const liste = element(idListe);
  liste.textContent = "";
  analyses.forEach(function (analyse) { liste.appendChild(creerCarteRecette(analyse)); });
  element(idVide).hidden = analyses.length > 0;
  element(idVide).textContent = texteVide;
}

// Petit raccourci pour créer un élément avec une classe et un texte
function creer(balise, classe, texte) {
  const e = document.createElement(balise);
  if (classe) e.className = classe;
  if (texte) e.textContent = texte;
  return e;
}

// Fabrique la carte dépliable d'une recette
function creerCarteRecette(analyse) {
  const recette = analyse.recette;
  const estFavori = favoris.indexOf(recette.id) !== -1;
  const carte = creer("details", "recette");
  carte.open = recettesOuvertes[recette.id] === true;
  carte.addEventListener("toggle", function () { recettesOuvertes[recette.id] = carte.open; });

  // --- Partie toujours visible ---
  const resume = creer("summary", "recette-resume");
  resume.appendChild(creer("span", "recette-nom", (estFavori ? "★ " : "") + recette.nom));
  resume.appendChild(creer("span", "recette-infos",
    majuscule(recette.cuisine) + " · " + recette.difficulte + " · " + recette.tempsMinutes + " min"));

  if (analyse.urgents.length > 0) {
    const noms = analyse.urgents.map(function (u) { return u.nom.toLowerCase() + " (" + ecrireDelai(u.jours) + ")"; });
    const perime = analyse.urgents[0].jours < 0;
    resume.appendChild(creer("span", "etiquette " + (perime ? "perime" : "bientot"), "Utilise : " + noms.join(", ")));
  }

  if (analyse.pourcent < 100) {
    const barre = creer("span", "barre");
    barre.setAttribute("role", "img");
    barre.setAttribute("aria-label", "Complète à " + analyse.pourcent + " %");
    const remplissage = creer("span", "barre-remplie");
    remplissage.style.width = analyse.pourcent + "%";
    barre.appendChild(remplissage);
    const ligneBarre = creer("span", "ligne-barre");
    ligneBarre.appendChild(barre);
    ligneBarre.appendChild(creer("span", "pourcent", analyse.pourcent + " %"));
    resume.appendChild(ligneBarre);

    const noms = analyse.manquants.map(function (m) { return m.nom.toLowerCase() + " (" + ecrireQuantite(m.quantite, m.unite) + ")"; });
    resume.appendChild(creer("span", "manque", "Manque : " + noms.join(", ")));
  }
  carte.appendChild(resume);

  // --- Partie dépliée : ingrédients et étapes ---
  const contenu = creer("div", "recette-contenu");
  const boutonFavori = creer("button", "bouton-favori", estFavori ? "★ Retirer des favoris" : "☆ Ajouter aux favoris");
  boutonFavori.type = "button";
  boutonFavori.addEventListener("click", function () { basculerFavori(recette.id); });
  contenu.appendChild(boutonFavori);
  contenu.appendChild(creer("h3", "", "Ingrédients (pour " + recette.portions + " personnes)"));
  const ingredients = creer("ul", "recette-ingredients");
  analyse.lignes.forEach(function (info) {
    const manque = info.etat === "manque";
    const ligne = creer("li", manque ? "manquant" : "");
    let texte = (manque ? "✗ " : info.etat === "optionnel-absent" ? "– " : "✓ ")
      + info.nom + " : " + ecrireQuantite(info.quantite, info.unite);
    if (info.etat === "optionnel") texte += " (facultatif)";
    if (info.etat === "optionnel-absent") texte += " (facultatif, pas dans le stock)";
    if (info.note) texte += " — " + info.note;
    ligne.textContent = texte;
    if (info.peremption) {
      ligne.appendChild(document.createTextNode(" "));
      ligne.appendChild(creer("span", "etiquette " + info.peremption,
        info.peremption === "perime" ? "périmé" : "périme " + info.delai));
    }
    ingredients.appendChild(ligne);
  });
  contenu.appendChild(ingredients);

  contenu.appendChild(creer("h3", "", "Préparation"));
  const etapes = creer("ol", "recette-etapes");
  recette.etapes.forEach(function (etape) { etapes.appendChild(creer("li", "", etape)); });
  contenu.appendChild(etapes);
  carte.appendChild(contenu);

  return carte;
}

// ---------- Démarrage ----------
preparerFiltres();
afficherRecettes();
