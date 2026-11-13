// ============================================================
// RECETTES : affiche les recettes comparées au stock.
// Le calcul (comparer une recette au stock) est dans js/analyse.js : ce fichier ne fait qu'afficher.
// - « Réalisables maintenant » : tout est dans le stock.
// - « Presque réalisables » : au moins seuilCompletion % des ingrédients
//   (réglé par le curseur « Complétion minimum », retenu sur l'appareil).
// - Champ « Rechercher » : nom ou ingrédient ; pendant une recherche, le curseur est ignoré.
// Les favoris (étoile) sont enregistrés et synchronisés avec le stock.
// « Cuisiner » et l'historique sont dans js/cuisiner.js, la liste de courses dans js/courses.js
// (tous deux chargés avant ce fichier).
// Utilise : stock, favoris, sauvegarder, element (js/stock.js),
//           creerId, ecrireQuantite (js/ingredient.js),
//           preparerIndexStock, analyserRecette, nomIngredient, ecrireDelai (js/analyse.js),
//           RECETTES (recettes/toutes.js).
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
// Nom sous lequel le régime choisi est retenu dans la mémoire du navigateur
const CLE_REGIME = "repas-regime";
// Types de plat, dans l'ordre du menu (le « type » écrit dans chaque recette)
const TYPES_DE_PLAT = [
  { id: "entree", nom: "Entrée", icone: "🥗" },
  { id: "soupe", nom: "Soupe", icone: "🍲" },
  { id: "plat", nom: "Plat", icone: "🍽️" },
  { id: "accompagnement", nom: "Accompagnement", icone: "🥔" },
  { id: "dessert", nom: "Dessert", icone: "🍰" },
  { id: "petit-dejeuner", nom: "Petit-déjeuner", icone: "🥐" },
  { id: "boisson", nom: "Boisson", icone: "🥤" },
  { id: "sauce", nom: "Sauce", icone: "🥫" }
];
// Petit dessin d'un type, affiché dans la pastille ronde de chaque recette
function iconeDuType(id) {
  const type = TYPES_DE_PLAT.filter(function (t) { return t.id === id; })[0];
  return type ? type.icone : "🍽️";
}
// Nom affiché d'un type : « petit-dejeuner » -> « Petit-déjeuner »
function nomDuType(id) {
  const type = TYPES_DE_PLAT.filter(function (t) { return t.id === id; })[0];
  return type ? type.nom : "Plat";
}
// Choix proposés dans le filtre « Temps » (en minutes)
const TEMPS_PROPOSES = [15, 20, 30, 45, 60];

// Recettes actuellement dépliées (pour les garder ouvertes quand la liste se rafraîchit)
const recettesOuvertes = {};

// ---------- Filtres ----------

function ajouterOption(liste, valeur, texte) {
  const option = document.createElement("option");
  option.value = valeur;
  option.textContent = texte;
  liste.appendChild(option);
}

// Met une majuscule au début : « italienne » -> « Italienne »
function majuscule(texte) { return texte.charAt(0).toUpperCase() + texte.slice(1); }

// Remplit les listes de filtres à partir des recettes
function preparerFiltres() {
  const cuisines = [];
  const difficultes = [];
  RECETTES.forEach(function (recette) {
    if (cuisines.indexOf(recette.cuisine) === -1) cuisines.push(recette.cuisine);
    if (difficultes.indexOf(recette.difficulte) === -1) difficultes.push(recette.difficulte);
  });

  // Type de plat : seuls les types qui ont au moins une recette sont proposés, avec leur nombre
  ajouterOption(element("filtre-type"), "", "Tous");
  TYPES_DE_PLAT.forEach(function (type) {
    const nombre = RECETTES.filter(function (r) { return r.type === type.id; }).length;
    if (nombre) ajouterOption(element("filtre-type"), type.id, type.nom + " (" + nombre + ")");
  });
  // Régime : calculé d'après les ingrédients (js/regime.js)
  ajouterOption(element("filtre-regime"), "", "Aucun");
  REGIMES.forEach(function (regime) { ajouterOption(element("filtre-regime"), regime.id, regime.nom); });
  // Le régime choisi est retenu sur cet appareil (pas synchronisé, comme le curseur de complétion)
  try {
    const regimeRetenu = localStorage.getItem(CLE_REGIME);
    if (REGIMES.some(function (r) { return r.id === regimeRetenu; })) element("filtre-regime").value = regimeRetenu;
  } catch (erreur) { /* sans gravité */ }
  element("filtre-regime").addEventListener("change", function () {
    try { localStorage.setItem(CLE_REGIME, element("filtre-regime").value); } catch (erreur) { /* sans gravité */ }
  });

  ajouterOption(element("filtre-cuisine"), "", "Toutes");
  // Ordre alphabétique français (les accents sont bien rangés : « égyptienne » avec les E)
  cuisines.sort(function (a, b) { return a.localeCompare(b, "fr"); });
  cuisines.forEach(function (c) { ajouterOption(element("filtre-cuisine"), c, majuscule(c)); });
  ajouterOption(element("filtre-difficulte"), "", "Toutes");
  difficultes.forEach(function (d) { ajouterOption(element("filtre-difficulte"), d, majuscule(d)); });
  element("filtre-favoris").addEventListener("change", changerFiltre);
  ajouterOption(element("filtre-temps"), "", "Peu importe");
  TEMPS_PROPOSES.forEach(function (t) { ajouterOption(element("filtre-temps"), String(t), t + " min ou moins"); });

  ["filtre-type", "filtre-regime", "filtre-cuisine", "filtre-difficulte", "filtre-temps"].forEach(function (id) {
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

  // Bloc « Mon matériel » : cases à cocher (js/materiel.js)
  preparerMateriel(changerFiltre);

  // Bloc « Plus de filtres » : ouvert d'office si un de ses filtres est déjà réglé
  // (ex. curseur retenu à 30 %), pour ne pas cacher un filtre oublié
  const filtreActif = element("filtre-type").value || element("filtre-regime").value ||
    element("filtre-cuisine").value || element("filtre-difficulte").value ||
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
  const type = element("filtre-type").value;
  const regime = element("filtre-regime").value;
  if (type && recette.type !== type) return false;
  if (regime && !recetteConvientAuRegime(recette, regime)) return false;
  const cuisine = element("filtre-cuisine").value;
  const difficulte = element("filtre-difficulte").value;
  const temps = element("filtre-temps").value;
  if (cuisine && recette.cuisine !== cuisine) return false;
  if (difficulte && recette.difficulte !== difficulte) return false;
  if (temps && recette.tempsMinutes > Number(temps)) return false;
  if (element("filtre-favoris").checked && favoris.indexOf(recette.id) === -1) return false;
  // Matériel que je n'ai pas (js/materiel.js)
  if (cacheeParMateriel(recette)) return false;
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

// Jours avant la péremption la plus proche, sans compter les ingrédients déjà périmés (Infinity = rien d'urgent)
function joursAvantPeremption(analyse) {
  const bientot = analyse.urgents.filter(function (u) { return u.jours >= 0; });
  return bientot.length ? bientot[0].jours : Infinity;
}

// Rafraîchit les deux listes (appelé au démarrage, quand un filtre ou le stock change)
function afficherRecettes() {
  preparerIndexStock(stock); // le stock a pu changer : on refait son index avant le calcul
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
      // Seuls les ingrédients pas encore périmés font monter une recette (un périmé est à vérifier, pas à utiliser en priorité)
      const urgenceA = joursAvantPeremption(a);
      const urgenceB = joursAvantPeremption(b);
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
  // Phrase d'accueil en haut de l'onglet
  element("accueil-texte").textContent = realisables.length === 0
    ? "Aucune recette possible pour l'instant avec ton stock."
    : realisables.length + (realisables.length > 1 ? " recettes possibles" : " recette possible") + " avec ton stock";
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
// Ligne « Source : Wikilivres (texte adapté, licence CC BY-SA) », avec le lien vers la page d'origine.
// Seulement pour les recettes qui ont un « lienSource » vers Wikilivres (sinon : rien).
function creerLigneSource(recette) {
  const lien = recette.lienSource;
  if (typeof lien !== "string" || lien.indexOf("https://fr.wikibooks.org/") !== 0) return null;
  const ligne = creer("p", "recette-source", "Source : ");
  const a = creer("a", "", "Wikilivres");
  a.href = lien;
  a.target = "_blank";
  a.rel = "noopener";
  ligne.appendChild(a);
  ligne.appendChild(document.createTextNode(" (texte adapté, licence CC BY-SA)"));
  return ligne;
}

function creerCarteRecette(analyse) {
  const recette = analyse.recette;
  const estFavori = favoris.indexOf(recette.id) !== -1;
  const carte = creer("details", "recette");
  carte.open = recettesOuvertes[recette.id] === true;
  carte.addEventListener("toggle", function () { recettesOuvertes[recette.id] = carte.open; });

  // --- Partie toujours visible ---
  const resume = creer("summary", "recette-resume");
  const pastille = creer("span", "pastille", iconeDuType(recette.type));
  pastille.setAttribute("aria-hidden", "true");
  resume.appendChild(pastille);
  resume.appendChild(creer("span", "recette-nom", (estFavori ? "★ " : "") + recette.nom));
  resume.appendChild(creer("span", "recette-infos",
    nomDuType(recette.type) + " · " + majuscule(recette.cuisine) + " · " + recette.difficulte + " · " + recette.tempsMinutes + " min"));

  // Recette cuisinée récemment (js/cuisiner.js)
  if (cuisineeRecemment(recette.id)) {
    resume.appendChild(creer("span", "recette-infos", "Cuisinée " + ecrireDepuis(joursDepuisCuisine(recette.id))));
  }

  // Péremption : « à utiliser vite » (pas encore périmé) et « périmé : à vérifier » séparés
  const bientot = analyse.urgents.filter(function (u) { return u.jours >= 0; });
  const perimes = analyse.urgents.filter(function (u) { return u.jours < 0; });
  if (bientot.length > 0) {
    const noms = bientot.map(function (u) { return u.nom.toLowerCase() + " (" + ecrireDelai(u.jours) + ")"; });
    resume.appendChild(creer("span", "etiquette bientot", "À utiliser vite : " + noms.join(", ")));
  }
  if (perimes.length > 0) {
    const noms = perimes.map(function (u) { return u.nom.toLowerCase(); });
    resume.appendChild(creer("span", "etiquette bientot", "Périmé, à vérifier : " + noms.join(", ")));
  }

  // Matériel que je n'ai pas (recette montrée « quand même » : js/materiel.js)
  const sansMateriel = materielManquant(recette);
  if (sansMateriel.length > 0) {
    resume.appendChild(creer("span", "etiquette bientot", "Matériel manquant : " + sansMateriel.join(", ").toLowerCase()));
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
  // Recette incomplète : bouton pour mettre ce qui manque dans la liste de courses (js/courses.js),
  // en premier, juste sous « Manque : … »
  if (analyse.pourcent < 100) contenu.appendChild(creerBoutonCourses(analyse));
  const boutonFavori = creer("button", "bouton-favori", estFavori ? "★ Retirer des favoris" : "☆ Ajouter aux favoris");
  boutonFavori.type = "button";
  boutonFavori.addEventListener("click", function () { basculerFavori(recette.id); });
  contenu.appendChild(boutonFavori);
  contenu.appendChild(creer("h3", "", "Ingrédients (pour " + recette.portions + " personnes)"));
  const ingredients = creer("ul", "recette-ingredients");
  analyse.lignes.forEach(function (info) {
    const manque = info.etat === "manque";
    const ligne = creer("li", manque ? "manquant" : "");
    // Signe en couleur au début de la ligne : ✓ vert (présent), ✗ rouge (manque), – (facultatif absent)
    const signe = manque ? "manque" : info.etat === "optionnel-absent" ? "" : "ok";
    let texte = info.nom + " : " + ecrireQuantite(info.quantite, info.unite);
    // Remplaçant : proposé entre parenthèses, ou signalé quand c'est lui qui sert (celui du stock)
    if (info.ou && info.remplace) texte += " — ou " + info.ou + " (dans ton stock)";
    else if (info.ou) texte += " (ou " + info.ou + ")";
    if (info.etat === "optionnel") texte += " (facultatif)";
    if (info.etat === "optionnel-absent") texte += " (facultatif, pas dans le stock)";
    if (info.note) texte += " — " + info.note;
    ligne.appendChild(creer("span", "signe " + signe, manque ? "✗ " : signe === "ok" ? "✓ " : "– "));
    ligne.appendChild(document.createTextNode(texte));
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
  }

  // Recette reprise d'une source libre (Wikilivres) : la licence oblige à citer la page d'origine
  const source = creerLigneSource(recette);
  if (source) contenu.appendChild(source);
  carte.appendChild(contenu);

  return carte;
}

// ---------- Démarrage ----------
preparerFiltres();
demarrerCourses();
afficherRecettes();
