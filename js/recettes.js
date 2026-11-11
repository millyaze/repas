// ============================================================
// RECETTES : compare les recettes au stock et les affiche.
// - « Réalisables maintenant » : tout est dans le stock.
// - « Presque réalisables » : au moins seuilCompletion % des ingrédients
//   (réglé par le curseur « Complétion minimum », retenu sur l'appareil).
// - Champ « Rechercher » : nom ou ingrédient ; pendant une recherche, le curseur est ignoré.
// Les favoris (étoile) sont enregistrés et synchronisés avec le stock.
// « Cuisiner » et l'historique sont dans js/cuisiner.js, la liste de courses dans js/courses.js
// (tous deux chargés avant ce fichier).
// Utilise : stock, favoris, sauvegarder, element, joursRestants, JOURS_ALERTE, arrondir, creerId (js/stock.js),
//           INGREDIENTS (data/ingredients.js), RECETTES (recettes/toutes.js).
// ============================================================

// % minimum pour qu'une recette incomplète soit proposée : valeur de départ du curseur
const SEUIL_INCOMPLET = 50;
// Nom sous lequel le réglage du curseur est retenu dans le navigateur (propre à chaque appareil)
const CLE_COMPLETION = "repas-completion";
// Réglage actuel du curseur « Complétion minimum » (de 0 à 100)
let seuilCompletion = lireSeuilCompletion();

// Relit le réglage retenu ; s'il est absent ou abîmé, on repart de la valeur de départ
function lireSeuilCompletion() {
  let texte = null;
  try { texte = localStorage.getItem(CLE_COMPLETION); } catch (erreur) { /* sans gravité */ }
  const valeur = Number(texte);
  if (texte === null || texte === "" || isNaN(valeur) || valeur < 0 || valeur > 100) return SEUIL_INCOMPLET;
  return Math.round(valeur);
}
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

// ---------- Index rapides ----------
// Comme l'index au dos d'un livre : on retrouve un ingrédient d'un coup, sans parcourir toute la liste.
// Indispensable quand il y a beaucoup de recettes (1 000 recettes : 160 ms -> moins de 2 ms).

// Index de la liste de référence (fixe : préparé une seule fois)
const indexIngredients = new Map();
INGREDIENTS.forEach(function (ingredient) { indexIngredients.set(ingredient.id, ingredient); });

// Index du stock : refait par preparerIndexStock() avant chaque calcul (le stock change souvent)
let indexStock = new Map();
function preparerIndexStock() {
  indexStock = new Map();
  stock.forEach(function (l) {
    // Une ligne se retrouve par son identifiant ET par son nom simplifié (la première ligne gagne)
    [l.id, creerId(l.nom)].forEach(function (cle) {
      if (!indexStock.has(cle)) indexStock.set(cle, l);
    });
  });
}

// Retrouve un ingrédient de la liste de référence
function ingredientDeReference(id) {
  return indexIngredients.get(id);
}

// Retrouve la ligne du stock correspondant à un ingrédient de recette (null si absente ou à zéro).
// Attention : appeler preparerIndexStock() avant, si le stock a pu changer.
function ligneDuStock(id) {
  const ligne = indexStock.get(id);
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
  element("filtre-favoris").addEventListener("change", changerFiltre);
  ajouterOption(element("filtre-temps"), "", "Peu importe");
  TEMPS_PROPOSES.forEach(function (t) { ajouterOption(element("filtre-temps"), String(t), t + " min ou moins"); });

  ["filtre-cuisine", "filtre-difficulte", "filtre-temps"].forEach(function (id) {
    element(id).addEventListener("change", changerFiltre);
  });
  // Recherche : les listes suivent pendant la frappe
  element("filtre-recherche").addEventListener("input", changerFiltre);

  // Curseur « Complétion minimum » : les listes suivent pendant qu'on le glisse
  element("filtre-completion").value = seuilCompletion;
  element("filtre-completion").addEventListener("input", function () {
    seuilCompletion = Number(element("filtre-completion").value);
    try { localStorage.setItem(CLE_COMPLETION, String(seuilCompletion)); } catch (erreur) { /* sans gravité */ }
    changerFiltre();
  });

  // Bloc « Plus de filtres » : ouvert d'office si un de ses filtres est déjà réglé
  // (ex. curseur retenu à 30 %), pour ne pas cacher un filtre oublié
  const filtreActif = element("filtre-cuisine").value || element("filtre-difficulte").value ||
    element("filtre-temps").value || element("filtre-favoris").checked ||
    seuilCompletion !== SEUIL_INCOMPLET;
  if (filtreActif) element("plus-filtres").open = true;
}

// ---------- Recherche ----------
// Un seul champ : cherche dans le nom de la recette et le nom de ses ingrédients
// (remplaçants compris). Accents et majuscules ignorés (même règle que le stock : creerId).
// Plusieurs mots = tous obligatoires. Les mots de 1 ou 2 lettres (« de », « au »…) sont ignorés.

// Texte où chercher, préparé une seule fois par recette
const textesRecherche = {};
function texteRecherche(recette) {
  if (!textesRecherche[recette.id]) {
    const morceaux = [recette.nom];
    recette.ingredients.forEach(function (b) {
      morceaux.push(nomIngredient(b.id));
      if (b.ou) morceaux.push(nomIngredient(b.ou.id));
    });
    textesRecherche[recette.id] = morceaux.map(creerId).join(" ");
  }
  return textesRecherche[recette.id];
}

// Mots tapés dans le champ « Rechercher » (liste vide = pas de recherche)
function motsRecherches() {
  return creerId(element("filtre-recherche").value).split("-").filter(function (mot) { return mot.length >= 3; });
}

// Dit si une recette passe les filtres choisis
function passeLesFiltres(recette) {
  const mots = motsRecherches();
  if (mots.length && !mots.every(function (mot) { return texteRecherche(recette).indexOf(mot) !== -1; })) return false;
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
  preparerIndexStock(); // le stock a pu changer : on refait son index avant le calcul
  const analyses = RECETTES.filter(passeLesFiltres).map(analyserRecette);
  // Pendant une recherche, le curseur est mis de côté : toutes les recettes trouvées s'affichent
  const enRecherche = motsRecherches().length > 0;
  const seuil = enRecherche ? 0 : seuilCompletion;

  // Réalisables : ce qui périme le plus tôt d'abord, puis les plus rapides
  const realisables = analyses
    .filter(function (a) { return a.pourcent === 100; })
    .sort(function (a, b) {
      const recent = cuisineeRecemment(a.recette.id) - cuisineeRecemment(b.recette.id);
      if (recent !== 0) return recent; // cuisinées récemment : en bas de la liste
      const urgenceA =a.urgents.length ? a.urgents[0].jours : Infinity;
      const urgenceB = b.urgents.length ? b.urgents[0].jours : Infinity;
      if (urgenceA !== urgenceB) return urgenceA - urgenceB;
      return a.recette.tempsMinutes - b.recette.tempsMinutes;
    });

  // Presque réalisables : de la plus complète à la moins complète
  const incompletes = analyses
    .filter(function (a) { return a.pourcent < 100 && a.pourcent >= seuil; })
    .sort(function (a, b) {
      const recent = cuisineeRecemment(a.recette.id) - cuisineeRecemment(b.recette.id);
      if (recent !== 0) return recent; // cuisinées récemment : en bas de la liste
      if (a.pourcent !== b.pourcent) return b.pourcent - a.pourcent;
      return a.manquants.length - b.manquants.length;
    });

  remplirListe("liste-realisables", "vide-realisables", realisables, enRecherche
    ? "Aucune recette réalisable ne correspond à cette recherche."
    : "Aucune recette réalisable avec le stock actuel et ces filtres.");
  element("aide-favoris").hidden = !(element("filtre-favoris").checked && favoris.length === 0);
  remplirListe("liste-incompletes", "vide-incompletes", incompletes, enRecherche
    ? "Aucune autre recette ne correspond à cette recherche et à ces filtres."
    : "Aucune recette presque réalisable avec ces filtres.");
  element("titre-realisables").textContent = "Réalisables maintenant (" + realisables.length + ")";
  element("titre-incompletes").textContent = "Presque réalisables (" + incompletes.length + ")";
  element("valeur-completion").textContent = "Complétion minimum : " + seuilCompletion + " %";
  element("aide-incompletes").textContent = enRecherche
    ? "Recherche en cours : toutes les recettes trouvées sont affichées, quel que soit le curseur."
    : seuilCompletion === 100
    ? "Curseur à 100 % : seules les recettes réalisables sont affichées."
    : "Tu as au moins " + seuilCompletion + " % des ingrédients.";
  afficherHistorique(); // bloc « Dernières recettes cuisinées » (js/cuisiner.js)
  afficherCourses();    // onglet « Courses » (js/courses.js)
}

// ---------- « Afficher plus » ----------
// Chaque liste montre d'abord PAR_PAGE recettes, puis un bouton pour en voir PAR_PAGE de plus.
// (Utile quand il y a des centaines de recettes : la page reste rapide et lisible.)
const PAR_PAGE = 30;
const nombreAffiche = { "liste-realisables": PAR_PAGE, "liste-incompletes": PAR_PAGE };

// Quand un filtre, la recherche ou le curseur change : on repart des PAR_PAGE premières
function revenirAuDebut() {
  Object.keys(nombreAffiche).forEach(function (id) { nombreAffiche[id] = PAR_PAGE; });
}
function changerFiltre() {
  revenirAuDebut();
  afficherRecettes();
}

function remplirListe(idListe, idVide, analyses, texteVide) {
  const liste = element(idListe);
  liste.textContent = "";
  const nombre = nombreAffiche[idListe] || PAR_PAGE;
  analyses.slice(0, nombre).forEach(function (analyse) { liste.appendChild(creerCarteRecette(analyse)); });
  const reste = analyses.length - nombre;
  if (reste > 0) {
    const bouton = creer("button", "afficher-plus", "Afficher plus (" + reste + " autre" + (reste > 1 ? "s" : "") + ")");
    bouton.type = "button";
    bouton.addEventListener("click", function () {
      nombreAffiche[idListe] = nombre + PAR_PAGE;
      afficherRecettes();
    });
    liste.appendChild(bouton);
  }
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

  // Recette cuisinée récemment (js/cuisiner.js)
  if (cuisineeRecemment(recette.id)) {
    resume.appendChild(creer("span", "recette-infos", "Cuisinée " + ecrireDepuis(joursDepuisCuisine(recette.id))));
  }

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

    const noms = analyse.manquants.map(function (m) { return m.nom.toLowerCase() + " (" + ecrireQuantite(m.quantite, m.unite) + ")" + (m.ou ? " ou " + m.ou : ""); });
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
    // Remplaçant : proposé entre parenthèses, ou signalé quand c'est lui qui sert
    if (info.ou && info.remplace) texte += " — remplacé par " + info.ou;
    else if (info.ou) texte += " (ou " + info.ou + ")";
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

  // Recette réalisable : bouton « J'ai cuisiné », ou son récapitulatif s'il est ouvert (js/cuisiner.js)
  if (analyse.pourcent === 100) {
    contenu.appendChild(idEnCuisine === recette.id ? creerPanneauCuisiner(recette) : creerBoutonCuisiner(recette));
  } else {
    // Recette incomplète : bouton pour mettre ce qui manque dans la liste de courses (js/courses.js)
    contenu.appendChild(creerBoutonCourses(analyse));
  }
  carte.appendChild(contenu);

  return carte;
}

// ---------- Démarrage ----------
preparerFiltres();
demarrerCourses();
afficherRecettes();
