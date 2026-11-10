// ============================================================
// STOCK : affiche la liste, ajoute, modifie, supprime.
// Les données sont lues et enregistrées via js/memoire.js.
// ============================================================

// Unités proposées dans le formulaire
const UNITES = ["g", "kg", "ml", "l", "pièce", "tranche", "gousse", "boîte", "sachet"];
// De combien les boutons + et − changent la quantité, selon l'unité
const PAS_PAR_UNITE = { g: 50, ml: 50, kg: 0.5, l: 0.5 };
// Nombre de jours avant péremption à partir duquel on alerte (orange)
const JOURS_ALERTE = 3;

// Le stock affiché (liste d'ingrédients)
let stock = [];
// id de l'ingrédient en cours de modification (null = on est en mode ajout)
let idEnModification = null;
// Associations retenues après un scan : code-barre -> { nom, quantite, unite }
let codes = {};
// Code-barre du produit en cours d'ajout après un scan (null = saisie à la main)
let codeEnAttente = null;

// Raccourci pour retrouver un élément de la page
function element(id) { return document.getElementById(id); }

// ---------- Démarrage ----------
function demarrer() {
  // Remplit la liste des unités
  UNITES.forEach(function (unite) {
    const option = document.createElement("option");
    option.value = unite;
    option.textContent = unite;
    element("champ-unite").appendChild(option);
  });
  element("champ-unite").value = "pièce";

  // Remplit les suggestions de noms avec la liste de référence des ingrédients
  INGREDIENTS.forEach(function (ingredient) {
    const option = document.createElement("option");
    option.value = ingredient.nom;
    element("suggestions-noms").appendChild(option);
  });
  // Quand le nom tapé est un ingrédient connu, l'unité habituelle est choisie toute seule
  element("champ-nom").addEventListener("input", function () {
    const idTape = creerId(element("champ-nom").value);
    const connu = INGREDIENTS.find(function (ingredient) { return ingredient.id === idTape; });
    if (connu) element("champ-unite").value = connu.unite;
  });

  // Charge la mémoire ; au tout premier lancement, charge le stock de test
  const donnees = chargerDonnees();
  if (donnees) {
    stock = donnees.stock;
    codes = donnees.codes || {};
  } else {
    stock = STOCK_TEST.map(function (ligne) { return Object.assign({}, ligne); });
    sauvegarder();
  }

  element("formulaire").addEventListener("submit", validerFormulaire);
  element("bouton-annuler").addEventListener("click", quitterModification);
  element("recherche").addEventListener("input", afficher);
  element("bouton-exporter").addEventListener("click", function () {
    exporterFichier(stock, codes);
    montrerMessage("Fichier de sauvegarde créé (dossier Téléchargements).");
  });
  element("bouton-importer").addEventListener("click", function () { element("fichier-import").click(); });
  element("fichier-import").addEventListener("change", importer);
  element("bouton-vider").addEventListener("click", toutVider);

  afficher();
}

// ---------- Outils ----------

// Transforme un nom en identifiant simple : « Crème fraîche » -> « creme-fraiche »
function creerId(nom) {
  return nom.toLowerCase()
    .replace(/œ/g, "oe").replace(/æ/g, "ae")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Évite les nombres du genre 0.30000000000000004
function arrondir(nombre) { return Math.round(nombre * 100) / 100; }

// Nombre de jours entre aujourd'hui et une date AAAA-MM-JJ (négatif = dépassé)
function joursRestants(date) {
  const p = date.split("-");
  const cible = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  const maintenant = new Date();
  const aujourdhui = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate());
  return Math.round((cible - aujourdhui) / 86400000);
}

// Texte et couleur à afficher pour une date de péremption
function infoPeremption(date) {
  if (!date) return { texte: "Sans date", etat: "" };
  const jours = joursRestants(date);
  const p = date.split("-");
  const dateLisible = p[2] + "/" + p[1] + "/" + p[0];
  if (jours < 0) return { texte: "Périmé depuis le " + dateLisible, etat: "perime" };
  if (jours === 0) return { texte: "Périme aujourd'hui", etat: "bientot" };
  if (jours === 1) return { texte: "Périme demain", etat: "bientot" };
  if (jours <= JOURS_ALERTE) return { texte: "Périme dans " + jours + " jours", etat: "bientot" };
  return { texte: "Jusqu'au " + dateLisible, etat: "" };
}

function sauvegarder() {
  if (!enregistrerDonnees(stock, codes)) {
    montrerMessage("Attention : l'enregistrement dans le navigateur a échoué. Exporte un fichier pour ne rien perdre.", true);
  }
}

function montrerMessage(texte, estErreur) {
  const zone = element("message");
  zone.textContent = texte;
  zone.className = estErreur ? "message erreur" : "message";
  zone.hidden = false;
}

// Recherche une ligne du stock portant le même nom (accents et majuscules ignorés)
function trouverParNom(nom) {
  const idCherche = creerId(nom);
  return stock.find(function (ligne) {
    return ligne.id === idCherche || creerId(ligne.nom) === idCherche;
  });
}

// ---------- Affichage ----------
function afficher() {
  const recherche = creerId(element("recherche").value);

  // Tri : péremption la plus proche d'abord, les « sans date » à la fin, puis par nom
  const lignes = stock
    .filter(function (ligne) { return creerId(ligne.nom).indexOf(recherche) !== -1; })
    .sort(function (a, b) {
      if (a.peremption && b.peremption && a.peremption !== b.peremption) return a.peremption < b.peremption ? -1 : 1;
      if (a.peremption && !b.peremption) return -1;
      if (!a.peremption && b.peremption) return 1;
      return a.nom.localeCompare(b.nom, "fr");
    });

  const liste = element("liste");
  liste.textContent = "";
  lignes.forEach(function (ligne) { liste.appendChild(creerLigne(ligne)); });

  // Message si la liste est vide
  const vide = element("liste-vide");
  vide.hidden = lignes.length > 0;
  vide.textContent = stock.length === 0
    ? "Le stock est vide. Ajoute ton premier ingrédient ci-dessus."
    : "Aucun ingrédient ne correspond à la recherche.";

  // Petit résumé sous le titre
  const alertes = stock.filter(function (ligne) { return infoPeremption(ligne.peremption).etat !== ""; }).length;
  element("resume").textContent = stock.length + " ingrédient" + (stock.length > 1 ? "s" : "")
    + (alertes > 0 ? " · " + alertes + " à surveiller (périmé ou bientôt)" : "");
}

// Fabrique une ligne de la liste pour un ingrédient
function creerLigne(ligne) {
  const info = infoPeremption(ligne.peremption);
  const li = document.createElement("li");
  li.className = "ligne " + info.etat;

  // Nom + péremption
  const texte = document.createElement("div");
  texte.className = "ligne-texte";
  const nom = document.createElement("span");
  nom.className = "ligne-nom";
  nom.textContent = ligne.nom;
  const date = document.createElement("span");
  date.className = "ligne-date";
  date.textContent = info.texte;
  texte.appendChild(nom);
  texte.appendChild(date);

  // Quantité avec boutons − et +
  const quantite = document.createElement("div");
  quantite.className = "ligne-quantite";
  const moins = creerBouton("−", "Diminuer " + ligne.nom, function () { changerQuantite(ligne.id, -1); });
  moins.classList.add("rond");
  const valeur = document.createElement("span");
  valeur.className = "valeur";
  valeur.textContent = ligne.quantite.toLocaleString("fr-FR") + " " + ligne.unite;
  const plus = creerBouton("+", "Augmenter " + ligne.nom, function () { changerQuantite(ligne.id, 1); });
  plus.classList.add("rond");
  quantite.appendChild(moins);
  quantite.appendChild(valeur);
  quantite.appendChild(plus);

  // Boutons Modifier / Supprimer
  const actions = document.createElement("div");
  actions.className = "ligne-actions";
  actions.appendChild(creerBouton("Modifier", "Modifier " + ligne.nom, function () { ouvrirModification(ligne.id); }));
  const supprimer = creerBouton("Supprimer", "Supprimer " + ligne.nom, function () { supprimerLigne(ligne.id); });
  supprimer.classList.add("danger");
  actions.appendChild(supprimer);

  li.appendChild(texte);
  li.appendChild(quantite);
  li.appendChild(actions);
  return li;
}

function creerBouton(texte, description, action) {
  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.textContent = texte;
  bouton.setAttribute("aria-label", description);
  bouton.addEventListener("click", action);
  return bouton;
}

// ---------- Actions ----------

// Bouton « Ajouter » ou « Enregistrer » du formulaire
function validerFormulaire(evenement) {
  evenement.preventDefault();
  const nom = element("champ-nom").value.trim();
  const quantite = arrondir(Number(element("champ-quantite").value));
  const unite = element("champ-unite").value;
  const peremption = element("champ-peremption").value || null;

  if (!nom || !creerId(nom) || !(quantite >= 0)) {
    montrerMessage("Vérifie le nom et la quantité.", true);
    return;
  }

  if (idEnModification) {
    // --- Modification d'une ligne existante ---
    const ligne = stock.find(function (l) { return l.id === idEnModification; });
    const autre = trouverParNom(nom);
    if (autre && autre !== ligne) {
      montrerMessage("« " + autre.nom + " » existe déjà dans le stock.", true);
      return;
    }
    // L'identifiant ne change que si le nom change (pour que les recettes s'y retrouvent)
    if (creerId(nom) !== creerId(ligne.nom)) ligne.id = creerId(nom);
    ligne.nom = nom;
    ligne.quantite = quantite;
    ligne.unite = unite;
    ligne.peremption = peremption;
    montrerMessage("« " + nom + " » modifié.");
    quitterModification();
  } else {
    // --- Ajout ---
    const existante = trouverParNom(nom);
    if (existante && existante.unite !== unite) {
      montrerMessage("« " + existante.nom + " » existe déjà en « " + existante.unite + " ». Utilise la même unité ou modifie la ligne existante.", true);
      return;
    }
    if (existante) {
      // Même ingrédient : on additionne et on garde la date la plus proche
      existante.quantite = arrondir(existante.quantite + quantite);
      if (peremption && (!existante.peremption || peremption < existante.peremption)) existante.peremption = peremption;
      montrerMessage("Quantité ajoutée à « " + existante.nom + " » (total : " + existante.quantite.toLocaleString("fr-FR") + " " + existante.unite + ").");
    } else {
      stock.push({ id: creerId(nom), nom: nom, quantite: quantite, unite: unite, peremption: peremption });
      montrerMessage("« " + nom + " » ajouté.");
    }
    // Si l'ajout vient d'un scan, on retient à quoi correspond ce code-barre
    if (codeEnAttente) codes[codeEnAttente] = { nom: nom, quantite: quantite, unite: unite };
    viderFormulaire();
  }
  sauvegarder();
  afficher();
}

// Boutons + et − d'une ligne
function changerQuantite(id, sens) {
  const ligne = stock.find(function (l) { return l.id === id; });
  if (!ligne) return;
  const pas = PAS_PAR_UNITE[ligne.unite] || 1;
  ligne.quantite = Math.max(0, arrondir(ligne.quantite + sens * pas));
  sauvegarder();
  afficher();
}

// Bouton « Modifier » : remplit le formulaire avec la ligne choisie
function ouvrirModification(id) {
  const ligne = stock.find(function (l) { return l.id === id; });
  if (!ligne) return;
  idEnModification = id;
  codeEnAttente = null;
  element("champ-nom").value = ligne.nom;
  element("champ-quantite").value = ligne.quantite;
  choisirUnite(ligne.unite);
  element("champ-peremption").value = ligne.peremption || "";
  element("titre-formulaire").textContent = "Modifier « " + ligne.nom + " »";
  element("bouton-valider").textContent = "Enregistrer";
  element("bouton-annuler").hidden = false;
  element("titre-formulaire").scrollIntoView({ behavior: "smooth", block: "start" });
  element("champ-quantite").focus({ preventScroll: true });
}

// Revient au mode « Ajouter »
function quitterModification() {
  idEnModification = null;
  element("titre-formulaire").textContent = "Ajouter un ingrédient";
  element("bouton-valider").textContent = "Ajouter";
  element("bouton-annuler").hidden = true;
  viderFormulaire();
}

function viderFormulaire() {
  element("formulaire").reset();
  element("champ-unite").value = "pièce";
  codeEnAttente = null;
}

// Choisit une unité dans la liste ; si elle n'y est pas (fichier importé), on l'ajoute
function choisirUnite(unite) {
  const liste = element("champ-unite");
  const existe = Array.prototype.some.call(liste.options, function (option) { return option.value === unite; });
  if (!existe) {
    const option = document.createElement("option");
    option.value = unite;
    option.textContent = unite;
    liste.appendChild(option);
  }
  liste.value = unite;
}

// Utilisé par le scan (js/scan.js) : remplit le formulaire d'ajout avec une proposition.
// L'utilisateur vérifie, ajoute la date, puis clique « Ajouter ».
function preremplirFormulaire(nom, quantite, unite, code) {
  quitterModification();
  element("champ-nom").value = nom;
  element("champ-quantite").value = quantite;
  choisirUnite(unite);
  codeEnAttente = code;
  element("titre-formulaire").scrollIntoView({ behavior: "smooth", block: "start" });
  element("champ-peremption").focus({ preventScroll: true });
}

function supprimerLigne(id) {
  const ligne = stock.find(function (l) { return l.id === id; });
  if (!ligne || !confirm("Supprimer « " + ligne.nom + " » du stock ?")) return;
  stock = stock.filter(function (l) { return l.id !== id; });
  if (idEnModification === id) quitterModification();
  sauvegarder();
  afficher();
  montrerMessage("« " + ligne.nom + " » supprimé.");
}

function toutVider() {
  if (!confirm("Vider tout le stock ? Pense à exporter un fichier avant si tu veux le garder.")) return;
  stock = [];
  quitterModification();
  sauvegarder();
  afficher();
  montrerMessage("Stock vidé.");
}

// Lecture du fichier choisi avec « Importer »
function importer() {
  const fichier = element("fichier-import").files[0];
  element("fichier-import").value = ""; // permet de rechoisir le même fichier ensuite
  if (!fichier) return;
  importerFichier(fichier, function (nouveauStock, nouveauxCodes) {
    if (!confirm("Remplacer le stock actuel (" + stock.length + " ingrédients) par celui du fichier (" + nouveauStock.length + " ingrédients) ?")) return;
    stock = nouveauStock;
    // Les produits scannés déjà connus sont gardés, ceux du fichier s'y ajoutent
    codes = Object.assign({}, codes, nouveauxCodes);
    quitterModification();
    sauvegarder();
    afficher();
    montrerMessage("Stock importé : " + stock.length + " ingrédients.");
  }, function () {
    montrerMessage("Ce fichier n'est pas une sauvegarde de stock valide. Rien n'a été modifié.", true);
  });
}

demarrer();
