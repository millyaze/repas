// ============================================================
// DONNÉES DE TEST : stock fictif (pas mon vrai stock)
// Sert uniquement à vérifier que l'outil fonctionne.
// Chaque ligne : id (identifiant), nom, quantité, unité, date de péremption
// (peremption: null = pas de date, ex. produits secs)
// ============================================================
const STOCK_TEST = [
  { id: "oeuf",          nom: "Œuf",               quantite: 6,    unite: "pièce", peremption: "2026-11-25" },
  { id: "lait",          nom: "Lait",              quantite: 1000, unite: "ml",    peremption: "2026-11-13" },
  { id: "beurre",        nom: "Beurre",            quantite: 250,  unite: "g",     peremption: "2026-12-10" },
  { id: "creme-fraiche",         nom: "Crème fraîche",     quantite: 200,  unite: "ml",    peremption: "2026-11-12" },
  { id: "fromage-rape",  nom: "Fromage râpé",      quantite: 150,  unite: "g",     peremption: "2026-11-30" },
  { id: "jambon",        nom: "Jambon",            quantite: 4,    unite: "tranche", peremption: "2026-11-11" },
  { id: "blanc-de-poulet",        nom: "Blanc de poulet",   quantite: 2,    unite: "pièce", peremption: "2026-11-12" },
  { id: "tomate",        nom: "Tomate",            quantite: 4,    unite: "pièce", peremption: "2026-11-16" },
  { id: "oignon",        nom: "Oignon",            quantite: 3,    unite: "pièce", peremption: "2026-12-05" },
  { id: "ail",           nom: "Ail",               quantite: 5,    unite: "gousse", peremption: "2026-12-01" },
  { id: "pomme-de-terre",nom: "Pomme de terre",    quantite: 1000, unite: "g",     peremption: "2026-12-15" },
  { id: "carotte",       nom: "Carotte",           quantite: 4,    unite: "pièce", peremption: "2026-11-24" },
  { id: "courgette",     nom: "Courgette",         quantite: 2,    unite: "pièce", peremption: "2026-11-14" },
  { id: "pates",         nom: "Pâtes",             quantite: 500,  unite: "g",     peremption: null },
  { id: "riz",           nom: "Riz",               quantite: 500,  unite: "g",     peremption: null },
  { id: "farine",        nom: "Farine",            quantite: 1000, unite: "g",     peremption: null },
  { id: "sucre",         nom: "Sucre",             quantite: 500,  unite: "g",     peremption: null },
  { id: "huile-d-olive",   nom: "Huile d'olive",     quantite: 500,  unite: "ml",    peremption: null },
  { id: "sel",           nom: "Sel",               quantite: 500,  unite: "g",     peremption: null },
  { id: "poivre",        nom: "Poivre",            quantite: 50,   unite: "g",     peremption: null },
  { id: "sauce-tomate",  nom: "Sauce tomate",      quantite: 400,  unite: "g",     peremption: "2027-03-01" },
  { id: "thon-en-boite",          nom: "Thon en boîte",     quantite: 2,    unite: "boîte", peremption: "2028-01-01" }
];
