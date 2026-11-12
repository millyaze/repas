// ============================================================
// INGRÉDIENT : le seul endroit qui sait
//   - reconnaître un ingrédient (même ingrédient, autres noms),
//   - convertir les unités (g <-> kg, ml <-> l),
//   - ajouter une quantité à une ligne en gardant la date la plus proche.
// Les mots utilisés sont définis dans docs/GLOSSARY.md.
// Chargé juste après data/ingredients.js, avant tous les autres fichiers.
// Ne touche jamais à la page : tout se vérifie avec docs/tester-ingredient.html.
// Utilise : INGREDIENTS (data/ingredients.js).
//
// Ce que ce fichier offre aux autres :
//   UNITES                                  unités proposées dans les formulaires
//   creerId(nom)                            « Crème fraîche » -> « creme-fraiche »
//   arrondir(nombre)                        arrondi unique (3 chiffres après la virgule)
//   convertir(quantite, de, vers)           nombre, ou null si unités pas de la même famille
//   ecrireQuantite(quantite, unite)         « 100 g », « 2 pièces »
//   ingredientDeReference(id)               ingrédient de référence, ou undefined
//   reconnaitre(nom)                        ingrédient de référence pour un nom tapé en entier, ou null
//   reconnaitreDansTexte(texte)             pareil, mais cherche à l'intérieur d'un texte (scan)
//   cleIngredient(nomOuId)                  ce qui dit « même ingrédient »
//   trouverLigne(liste, nomOuId, unite)     la ligne (stock ou courses) du même ingrédient
//   indexerLignes(liste)                    pareil, préparé d'avance pour beaucoup de recherches
//   ajouterQuantite(ligne, quantite, unite, date)  true si ajouté, false si unités incompatibles
// ============================================================

// Unités proposées dans les formulaires
const UNITES = ["g", "kg", "ml", "l", "pièce", "tranche", "gousse", "boîte", "sachet"];

// Familles d'unités : chaque unité ramenée à une unité commune.
// Les unités comptées (pièce, tranche…) ne se convertissent en rien d'autre.
const CONVERSIONS = {
  g: { famille: "poids", facteur: 1 },
  kg: { famille: "poids", facteur: 1000 },
  ml: { famille: "volume", facteur: 1 },
  l: { famille: "volume", facteur: 1000 }
};

// Unités qui prennent un « s » au pluriel
const UNITES_AU_PLURIEL = ["pièce", "tranche", "gousse", "boîte", "sachet"];

// Autres noms : un nom différent pour EXACTEMENT le même ingrédient de référence.
// Jamais un ingrédient seulement proche (« oignon rouge » n'est pas un autre nom d'« oignon »).
// Pour en ajouter : "autre nom": "id de data/ingredients.js"
const AUTRES_NOMS = {
  "spaghetti": "pates", "penne": "pates", "coquillettes": "pates", "fusilli": "pates",
  "tagliatelles": "pates", "macaroni": "pates", "torsades": "pates", "pâtes alimentaires": "pates",
  "thon": "thon-en-boite", "maïs doux": "mais-en-boite", "pois chiches": "pois-chiches-en-boite",
  "haricots rouges": "haricots-rouges-en-boite", "emmental râpé": "fromage-rape", "gruyère râpé": "fromage-rape",
  "nouilles": "nouilles-chinoises", "tortillas": "tortilla-de-ble", "coulis de tomate": "sauce-tomate",
  "tomates pelées": "sauce-tomate", "purée de tomate": "sauce-tomate",
  "steak haché": "boeuf-hache", "filet de poulet": "blanc-de-poulet",
  "crème entière": "creme-fraiche", "crème légère": "creme-fraiche", "champignon de paris": "champignons",
  // Ajoutés pour les recettes de Wikilivres (validés par moi)
  "muscade": "noix-de-muscade", "branche de céleri": "celeri-branche",
  "sauce soya": "sauce-soja", "sauce de soja": "sauce-soja",
  "nuoc-mâm": "sauce-poisson", "nuoc mam": "sauce-poisson", "sauce de poisson": "sauce-poisson",
  "cube de bouillon": "bouillon-cube", "cube d'assaisonnement": "bouillon-cube", "tablette de bouillon": "bouillon-cube",
  "maïzena": "fecule", "curry": "curry-en-poudre", "poudre de curry": "curry-en-poudre",
  "laitue": "salade-verte", "arachides": "cacahuetes", "fleur d'oranger": "eau-de-fleur-d-oranger",
  "lime": "citron-vert", "escalope de poulet": "blanc-de-poulet", "lard fumé": "poitrine-fumee"
};

// ---------- Outils de base ----------

// Transforme un nom en identifiant simple : « Crème fraîche » -> « creme-fraiche »
function creerId(nom) {
  return String(nom || "").toLowerCase()
    .replace(/œ/g, "oe").replace(/æ/g, "ae")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Arrondi unique : 3 chiffres après la virgule, pour ne pas perdre de grammes en kg ou en l
// (et éviter les nombres du genre 0.30000000000000004)
function arrondir(nombre) { return Math.round(nombre * 1000) / 1000; }

// Comme creerId, mais retire aussi les pluriels simples : « Tomates pelées » -> « tomate-pelee »
function simplifier(texte) {
  return creerId(texte).split("-").map(function (mot) {
    // « pâtes » garde son s : sinon « pâte à tartiner » serait pris pour des pâtes
    if (mot === "pates") return mot;
    return mot.length > 3 ? mot.replace(/[sx]$/, "") : mot;
  }).join("-");
}

// ---------- Unités ----------

// Convertit une quantité d'une unité à une autre.
// Renvoie null si les deux unités ne sont pas de la même famille (ex. « pièce » et « g »).
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

// ---------- Reconnaître un ingrédient ----------

// Index de la liste de référence, par identifiant
const indexIngredients = new Map();
INGREDIENTS.forEach(function (ingredient) { indexIngredients.set(ingredient.id, ingredient); });

// Tous les noms reconnus (simplifiés) -> ingrédient de référence.
// Les noms de référence passent avant les autres noms.
const indexNoms = new Map();
INGREDIENTS.forEach(function (ingredient) {
  const mot = simplifier(ingredient.nom);
  if (!indexNoms.has(mot)) indexNoms.set(mot, ingredient);
});
Object.keys(AUTRES_NOMS).forEach(function (autreNom) {
  const ingredient = indexIngredients.get(AUTRES_NOMS[autreNom]);
  const mot = simplifier(autreNom);
  if (ingredient && !indexNoms.has(mot)) indexNoms.set(mot, ingredient);
});

// Ingrédient de référence d'après son identifiant (undefined si inconnu)
function ingredientDeReference(id) {
  return indexIngredients.get(id);
}

// Ingrédient de référence pour un nom tapé EN ENTIER (accents, majuscules et pluriels ignorés,
// autres noms compris). « spaghetti » -> Pâtes ; « crème fraîche épaisse » -> null.
// Marche aussi avec un identifiant (« creme-fraiche »).
function reconnaitre(nom) {
  // Le nom exact d'un ingrédient de référence passe toujours en premier
  // (« Concentré de tomate » et « Concentré de tomates » sont deux ingrédients de la liste)
  return indexIngredients.get(creerId(nom)) || indexNoms.get(simplifier(nom)) || null;
}

// Pour le scan : cherche un nom reconnu À L'INTÉRIEUR d'un texte (nom d'un produit).
// Si plusieurs conviennent, le plus long gagne. « Spaghetti Barilla 500 g » -> Pâtes.
function reconnaitreDansTexte(texte) {
  const cherche = "-" + simplifier(texte) + "-";
  let meilleurMot = "";
  let meilleur = null;
  indexNoms.forEach(function (ingredient, mot) {
    if (mot.length > meilleurMot.length && cherche.indexOf("-" + mot + "-") !== -1) {
      meilleurMot = mot;
      meilleur = ingredient;
    }
  });
  return meilleur;
}

// Ce qui dit « même ingrédient » : deux noms (ou identifiants) ont la même clé
// s'ils désignent le même ingrédient.
function cleIngredient(nomOuId) {
  const reference = reconnaitre(nomOuId);
  return reference ? reference.id : simplifier(nomOuId);
}

// Unités compatibles : identiques, ou de la même famille
function unitesCompatibles(a, b) {
  return convertir(1, a, b) !== null;
}

// Retrouve dans une liste (stock ou courses) la ligne du même ingrédient.
// Si « unite » est donnée, seulement une ligne dont l'unité est compatible.
// Renvoie la ligne, ou undefined.
function trouverLigne(liste, nomOuId, unite) {
  const cle = cleIngredient(nomOuId);
  return liste.find(function (ligne) {
    return cleIngredient(ligne.nom) === cle && (!unite || unitesCompatibles(unite, ligne.unite));
  });
}

// Comme l'index au dos d'un livre : prépare d'un coup clé -> ligne, pour retrouver très vite
// beaucoup d'ingrédients (calcul des recettes). Si deux lignes ont la même clé, la première gagne.
function indexerLignes(liste) {
  const index = new Map();
  liste.forEach(function (ligne) {
    const cle = cleIngredient(ligne.nom);
    if (!index.has(cle)) index.set(cle, ligne);
  });
  return index;
}

// ---------- Ajouter une quantité ----------

// Ajoute une quantité à une ligne (stock), dans n'importe quelle unité de la même famille.
// Date : si la ligne était à zéro, la nouvelle date remplace l'ancienne ;
// sinon la ligne garde la date la plus proche des deux.
// Renvoie false (et ne change rien) si les unités ne sont pas de la même famille.
function ajouterQuantite(ligne, quantite, unite, date) {
  const enPlus = convertir(quantite, unite, ligne.unite);
  if (enPlus === null) return false;
  if (ligne.quantite === 0) ligne.peremption = date || null;
  else if (date && (!ligne.peremption || date < ligne.peremption)) ligne.peremption = date;
  ligne.quantite = arrondir(ligne.quantite + enPlus);
  return true;
}
