// ============================================================
// RÉGIMES ALIMENTAIRES : dit si une recette convient à un régime
// ============================================================
// Le régime n'est écrit dans aucune recette : il est calculé à partir
// de ses ingrédients. Pour corriger, il suffit de déplacer un
// identifiant d'ingrédient (ceux de data/ingredients.js) dans les
// listes ci-dessous. Un ingrédient absent de toutes les listes convient
// à tous les régimes.
//
// Règle : TOUS les ingrédients écrits dans la recette comptent, même
// les facultatifs. Les remplaçants (« ou ») ne comptent pas.
//
// Limites (c'est une aide, pas une garantie) :
// - halal et casher : seuls les ingrédients sont regardés, pas la
//   certification de la viande ni des produits tout prêts ;
// - sans gluten : le gluten peut se cacher dans un produit tout prêt
//   (bouillon cube, saucisses, sauces…) : lire l'étiquette ;
// - un ingrédient seulement cité dans les étapes n'est pas vu ;
// - le bouillon cube est compté comme végétal (en prendre un aux légumes).
//
// Utilise : rien d'autre. Utilisé par : js/recettes.js (filtre « Régime »).

const FAMILLES = {
  // Porc et produits qui en contiennent (la gélatine est le plus souvent du porc)
  porc: ["jambon", "lardons", "saucisse", "cote-de-porc", "poitrine-de-porc", "filet-mignon-de-porc",
    "porc-hache", "chorizo", "jambon-cru", "bacon", "boudin-noir", "saindoux", "jambonneau", "kabanos",
    "spam-jambon-en-boite", "epaule-de-porc", "travers-de-porc", "kielbasa", "poitrine-fumee",
    "saucisse-chinoise", "saucisse-aux-choux", "pied-de-porc", "mandu-raviolis-coreens", "feuille-de-gelatine",
    "pancetta", "pansette", "saucisson-a-cuire", "greubons"],

  // Autres viandes (volaille comprise)
  viande: ["blanc-de-poulet", "boeuf-hache", "cuisse-de-poulet", "steak-de-boeuf", "cotes-de-boeuf-galbi",
    "poulet-entier", "pilons-de-poulet", "souris-d-agneau", "blanc-de-dinde", "agneau-hache", "gigot-d-agneau",
    "cotelettes-d-agneau", "boeuf-a-braiser", "rognons", "corned-beef", "filet-de-boeuf", "roti-de-boeuf",
    "epaule-d-agneau", "dinde-hachee", "jarret-de-veau", "cuisse-de-canard", "queue-de-boeuf",
    "viande-de-chevre", "poitrine-de-boeuf", "lapin", "magret-de-canard", "escalope-de-veau",
    "mouton-hache", "canard-entier", "epaule-de-veau", "pintade", "collier-d-agneau", "caneton", "fond-de-veau"],

  // Poissons et produits qui en contiennent (le kimchi et la sauce Worcestershire en contiennent)
  poisson: ["saumon", "thon-en-boite", "anchois", "galettes-de-poisson", "anchois-seches", "poisson-blanc",
    "truite", "haddock-fume", "sardines", "cabillaud", "sardines-en-boite", "morue-salee", "vivaneau",
    "eglefin", "filets-de-hareng", "saumon-fume", "thon-frais", "bar", "thon-a-la-catalane-en-boite",
    "sauce-poisson", "fumet-de-poisson", "sauce-worcestershire", "kimchi",
    "rouget-barbet", "hareng-frais", "anguille"],

  // Coquillages, crustacés, calmars
  fruitsDeMer: ["crevettes", "calmar", "moules", "palourdes", "fruits-de-mer-surgeles", "huitres",
    "crevettes-sechees", "pate-de-crevettes", "sauce-huitre",
    "noix-de-saint-jacques", "escargots"],

  // Lait et produits qui en contiennent
  laitage: ["lait", "beurre", "creme-fraiche", "yaourt-nature", "fromage-rape", "parmesan", "mozzarella",
    "feta", "yaourt-grec", "cheddar", "fromage-de-chevre", "ricotta", "fromage-bleu", "fromage-frais",
    "creme-anglaise", "creme-aigre", "creme-liquide", "gouda", "mascarpone", "fromage-fondu",
    "confiture-de-lait", "lait-concentre-sucre", "pecorino", "comte", "gruyere", "fromage-blanc",
    "vacherin-fribourgeois", "brousse", "chocolat-au-lait", "glace-a-la-vanille", "barres-chocolatees",
    "pesto", "pain-naan", "pate-feuilletee", "pate-brisee", "biscuits-secs", "pudding-de-noel",
    "lait-concentre-non-sucre", "lait-caille", "speculoos",
    "maroilles", "gorgonzola", "tomme-fraiche", "munster", "cancoillotte", "bleu-de-gex", "beaufort", "creme-double", "creme-catalane"],

  // Œufs et produits qui en contiennent
  oeuf: ["oeuf", "mayonnaise", "meringues", "creme-anglaise", "glace-a-la-vanille", "pudding-de-noel",
    "creme-catalane", "pate-a-rouleaux-imperiaux"],

  // Miel
  miel: ["miel", "pain-d-epices"],

  // Alcools (les vinaigres ne sont pas comptés)
  alcool: ["vin-blanc", "sake", "mirin", "vin-de-shaoxing", "vin-rouge", "biere", "cognac", "xeres",
    "liqueur-d-orange", "rhum", "cidre", "pudding-de-noel", "biere-stout", "creme-de-menthe-blanche",
    "vin-doux-muscat"],

  // Blé, orge, seigle, avoine et produits qui en contiennent
  gluten: ["pates", "feuilles-de-lasagne", "nouilles-chinoises", "semoule", "pain", "pain-de-mie",
    "tortilla-de-ble", "pain-a-burger", "chapelure", "nouilles-udon", "farine", "sauce-soja",
    "nouilles-somen", "nouilles-ramyeon", "nouilles-de-sarrasin", "mandu-raviolis-coreens",
    "feuilles-de-wonton", "baguette", "pain-pita", "pate-filo", "pate-feuilletee", "pate-brisee",
    "biscuits-secs", "flocons-d-avoine", "boulgour", "frik", "ble", "melange-de-cereales", "pain-naan",
    "cannelloni", "ciabatta", "farine-de-seigle", "petit-pain", "pate-a-pizza", "feuille-de-brick",
    "pain-d-epices", "farine-a-levure-incorporee", "biere", "pudding-de-noel", "barres-chocolatees",
    "pate-kadaif", "levure-maltee", "sauce-hoisin", "gochujang", "pate-de-haricots-noirs-chunjang",
    "sauce-worcestershire", "galettes-de-poisson", "speculoos", "farine-complete", "biere-stout",
    "seitan", "poudre-de-gluten", "corn-flakes", "pate-a-rouleaux-imperiaux", "fond-de-veau"],

  // Viandes interdites en casher, en plus du porc
  nonCasher: ["lapin",
    "anguille"]
};

// Les régimes proposés dans le filtre, dans l'ordre du menu.
// « sans » = familles interdites. Casher a une règle en plus : pas de viande avec un laitage.
const REGIMES = [
  { id: "vegetarien",   nom: "Végétarien",  sans: ["porc", "viande", "poisson", "fruitsDeMer"] },
  { id: "vegan",        nom: "Végan",       sans: ["porc", "viande", "poisson", "fruitsDeMer", "laitage", "oeuf", "miel"] },
  { id: "halal",        nom: "Halal (sans porc ni alcool)", sans: ["porc", "alcool"] },
  { id: "casher",       nom: "Casher (ingrédients)",        sans: ["porc", "fruitsDeMer", "nonCasher"], sansViandeEtLaitage: true },
  { id: "sans-porc",    nom: "Sans porc",   sans: ["porc"] },
  { id: "sans-alcool",  nom: "Sans alcool", sans: ["alcool"] },
  { id: "sans-gluten",  nom: "Sans gluten", sans: ["gluten"] },
  { id: "sans-lactose", nom: "Sans lactose (sans laitage)", sans: ["laitage"] }
];

// Index rapide : identifiant d'ingrédient -> ses familles
const famillesParIngredient = {};
Object.keys(FAMILLES).forEach(function (famille) {
  FAMILLES[famille].forEach(function (id) {
    if (!famillesParIngredient[id]) famillesParIngredient[id] = {};
    famillesParIngredient[id][famille] = true;
  });
});

// Familles présentes dans une recette (calculé une seule fois par recette)
const famillesParRecette = {};
function famillesDeRecette(recette) {
  if (!famillesParRecette[recette.id]) {
    const presentes = {};
    recette.ingredients.forEach(function (besoin) {
      Object.keys(famillesParIngredient[besoin.id] || {}).forEach(function (famille) { presentes[famille] = true; });
    });
    famillesParRecette[recette.id] = presentes;
  }
  return famillesParRecette[recette.id];
}

// Dit si une recette convient au régime demandé (identifiant de REGIMES)
function recetteConvientAuRegime(recette, idRegime) {
  const regime = REGIMES.filter(function (r) { return r.id === idRegime; })[0];
  if (!regime) return true; // régime inconnu : on ne cache rien
  const presentes = famillesDeRecette(recette);
  if (regime.sans.some(function (famille) { return presentes[famille]; })) return false;
  if (regime.sansViandeEtLaitage && presentes.viande && presentes.laitage) return false;
  return true;
}
