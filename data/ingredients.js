// ============================================================
// LISTE DE RÉFÉRENCE DES INGRÉDIENTS
// Toutes les recettes ne piochent que dans cette liste.
// Chaque ligne : id (identifiant), nom, unité habituelle.
// Règle : l'id est toujours le nom simplifié (minuscules, sans accents,
// tirets), ex. « Crème fraîche » -> « creme-fraiche ». C'est aussi ce que
// fait la section Stock quand on tape un nom : les deux se retrouvent donc.
// base: true = ingrédient de base (sel, poivre, eau) : jamais compté comme
// manquant et jamais déduit du stock.
// Pour ajouter un ingrédient : copier une ligne et changer id, nom, unité.
// ============================================================
const INGREDIENTS = [
  // --- Frais : œufs, laitages, fromages ---
  { id: "oeuf",            nom: "Œuf",             unite: "pièce" },
  { id: "lait",            nom: "Lait",            unite: "ml" },
  { id: "beurre",          nom: "Beurre",          unite: "g" },
  { id: "creme-fraiche",   nom: "Crème fraîche",   unite: "ml" },
  { id: "yaourt-nature",   nom: "Yaourt nature",   unite: "pièce" },
  { id: "fromage-rape",    nom: "Fromage râpé",    unite: "g" },
  { id: "parmesan",        nom: "Parmesan",        unite: "g" },
  { id: "mozzarella",      nom: "Mozzarella",      unite: "g" },
  { id: "feta",            nom: "Feta",            unite: "g" },

  // --- Viandes, poissons, protéines ---
  { id: "jambon",          nom: "Jambon",          unite: "tranche" },
  { id: "lardons",         nom: "Lardons",         unite: "g" },
  { id: "blanc-de-poulet", nom: "Blanc de poulet", unite: "pièce" },
  { id: "boeuf-hache",     nom: "Bœuf haché",      unite: "g" },
  { id: "saucisse",        nom: "Saucisse",        unite: "pièce" },
  { id: "saumon",          nom: "Saumon",          unite: "g" },
  { id: "crevettes",       nom: "Crevettes",       unite: "g" },
  { id: "thon-en-boite",   nom: "Thon en boîte",   unite: "boîte" },
  { id: "tofu",            nom: "Tofu",            unite: "g" },
  { id: "anchois",         nom: "Anchois",         unite: "g" },
  { id: "cote-de-porc",    nom: "Côte de porc",    unite: "pièce" },

  // --- Légumes et fruits ---
  { id: "tomate",          nom: "Tomate",          unite: "pièce" },
  { id: "oignon",          nom: "Oignon",          unite: "pièce" },
  { id: "ail",             nom: "Ail",             unite: "gousse" },
  { id: "pomme-de-terre",  nom: "Pomme de terre",  unite: "g" },
  { id: "carotte",         nom: "Carotte",         unite: "pièce" },
  { id: "courgette",       nom: "Courgette",       unite: "pièce" },
  { id: "poivron",         nom: "Poivron",         unite: "pièce" },
  { id: "aubergine",       nom: "Aubergine",       unite: "pièce" },
  { id: "poireau",         nom: "Poireau",         unite: "pièce" },
  { id: "brocoli",         nom: "Brocoli",         unite: "pièce" },
  { id: "concombre",       nom: "Concombre",       unite: "pièce" },
  { id: "salade-verte",    nom: "Salade verte",    unite: "pièce" },
  { id: "avocat",          nom: "Avocat",          unite: "pièce" },
  { id: "citron",          nom: "Citron",          unite: "pièce" },
  { id: "citron-vert",     nom: "Citron vert",     unite: "pièce" },
  { id: "champignons",     nom: "Champignons",     unite: "g" },
  { id: "epinards",        nom: "Épinards",        unite: "g" },
  { id: "haricots-verts",  nom: "Haricots verts",  unite: "g" },
  { id: "petits-pois",     nom: "Petits pois",     unite: "g" },
  { id: "gingembre",       nom: "Gingembre",       unite: "g" },
  { id: "chou",            nom: "Chou",            unite: "g" },

  // --- Herbes fraîches ---
  { id: "basilic",         nom: "Basilic",         unite: "g" },
  { id: "persil",          nom: "Persil",          unite: "g" },
  { id: "coriandre",       nom: "Coriandre",       unite: "g" },
  { id: "menthe",          nom: "Menthe",          unite: "g" },
  { id: "laurier",         nom: "Laurier",         unite: "pièce" },

  // --- Féculents, pains ---
  { id: "pates",               nom: "Pâtes",               unite: "g" },
  { id: "feuilles-de-lasagne", nom: "Feuilles de lasagne", unite: "pièce" },
  { id: "riz",                 nom: "Riz",                 unite: "g" },
  { id: "nouilles-chinoises",  nom: "Nouilles chinoises",  unite: "g" },
  { id: "semoule",             nom: "Semoule",             unite: "g" },
  { id: "lentilles",           nom: "Lentilles",           unite: "g" },
  { id: "pain",                nom: "Pain",                unite: "tranche" },
  { id: "pain-de-mie",         nom: "Pain de mie",         unite: "tranche" },
  { id: "tortilla-de-ble",     nom: "Tortilla de blé",     unite: "pièce" },
  { id: "pain-a-burger",       nom: "Pain à burger",       unite: "pièce" },
  { id: "chapelure",           nom: "Chapelure",           unite: "g" },

  // --- Conserves ---
  { id: "sauce-tomate",             nom: "Sauce tomate",             unite: "g" },
  { id: "mais-en-boite",            nom: "Maïs en boîte",            unite: "boîte" },
  { id: "haricots-rouges-en-boite", nom: "Haricots rouges en boîte", unite: "boîte" },
  { id: "pois-chiches-en-boite",    nom: "Pois chiches en boîte",    unite: "boîte" },
  { id: "haricots-blancs-en-boite", nom: "Haricots blancs en boîte", unite: "boîte" },
  { id: "olives-noires",            nom: "Olives noires",            unite: "g" },
  { id: "cornichons",               nom: "Cornichons",               unite: "g" },
  { id: "lait-de-coco",             nom: "Lait de coco",             unite: "ml" },

  // --- Placard : huiles, sauces, épices ---
  { id: "farine",             nom: "Farine",             unite: "g" },
  { id: "sucre",              nom: "Sucre",              unite: "g" },
  { id: "miel",               nom: "Miel",               unite: "g" },
  { id: "huile-d-olive",      nom: "Huile d'olive",      unite: "ml" },
  { id: "huile-de-tournesol", nom: "Huile de tournesol", unite: "ml" },
  { id: "vinaigre",           nom: "Vinaigre",           unite: "ml" },
  { id: "vin-blanc",          nom: "Vin blanc",          unite: "ml" },
  { id: "moutarde",           nom: "Moutarde",           unite: "g" },
  { id: "sauce-soja",         nom: "Sauce soja",         unite: "ml" },
  { id: "pate-de-curry",      nom: "Pâte de curry",      unite: "g" },
  { id: "curry-en-poudre",    nom: "Curry en poudre",    unite: "g" },
  { id: "cumin",              nom: "Cumin",              unite: "g" },
  { id: "paprika",            nom: "Paprika",            unite: "g" },
  { id: "piment-en-poudre",   nom: "Piment en poudre",   unite: "g" },
  { id: "herbes-de-provence", nom: "Herbes de Provence", unite: "g" },
  { id: "bouillon-cube",      nom: "Bouillon cube",      unite: "pièce" },
  { id: "cacahuetes",         nom: "Cacahuètes",         unite: "g" },
  { id: "pignons-de-pin",     nom: "Pignons de pin",     unite: "g" },
  { id: "graines-de-sesame",  nom: "Graines de sésame",  unite: "g" },
  { id: "tahini",             nom: "Tahini",             unite: "g" },
  { id: "garam-masala",       nom: "Garam masala",       unite: "g" },
  { id: "noix-de-muscade",    nom: "Noix de muscade",    unite: "g" },
  { id: "harissa",            nom: "Harissa",            unite: "g" },
  { id: "ketchup",            nom: "Ketchup",            unite: "g" },
  { id: "mayonnaise",         nom: "Mayonnaise",         unite: "g" },
  { id: "abricots-secs",      nom: "Abricots secs",      unite: "g" },

  // --- Ingrédients de base : jamais comptés comme manquants ---
  { id: "sel",    nom: "Sel",    unite: "g",  base: true },
  { id: "poivre", nom: "Poivre", unite: "g",  base: true },
  { id: "eau",    nom: "Eau",    unite: "ml", base: true }
];
