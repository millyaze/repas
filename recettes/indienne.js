// ============================================================
// RECETTES : cuisine indienne (4 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/francaise.js, avec en plus :
// source : d'où vient la recette ; idSource : son numéro chez TheMealDB
// (sert à ne pas importer deux fois la même).
// ============================================================
const RECETTES_INDIENNE = [
  {
    id: "poulet-tandoori", nom: "Poulet tandoori", cuisine: "indienne",
    difficulte: "facile", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "52806",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "yaourt-nature", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "paprika", quantite: 5, unite: "g" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "garam-masala", quantite: 2, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "curry-en-poudre", quantite: 1, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" }
    ],
    etapes: ["Entailler le poulet, le mélanger avec le jus du citron, le paprika et l'oignon haché, laisser reposer 10 min.", "Mélanger le yaourt, le gingembre râpé, l'ail écrasé, le garam masala, le cumin, le piment et le curry, puis en enrober le poulet.", "Couvrir et laisser mariner 1 h au frais.", "Poser le poulet sur une grille, le badigeonner d'huile et le cuire sous le gril du four 8 min de chaque côté, jusqu'à ce qu'il soit bien cuit."]
  },
  {
    id: "curry-de-haricots-rouges", nom: "Curry de haricots rouges", cuisine: "indienne",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "52868",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "garam-masala", quantite: 5, unite: "g" },
      { id: "sauce-tomate", quantite: 400, unite: "g" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir doucement l'oignon haché dans l'huile avec le sel, jusqu'à ce qu'il soit tendre.", "Ajouter l'ail, le gingembre râpé et les tiges de coriandre hachées, cuire 2 min.", "Ajouter le cumin, le paprika et le garam masala, cuire 1 min.", "Verser la sauce tomate et les haricots avec leur jus, porter à ébullition puis laisser mijoter 15 min.", "Pendant ce temps, cuire le riz. Servir le curry sur le riz avec les feuilles de coriandre."]
  },
  {
    id: "aubergine-epicee-baingan-bharta", nom: "Aubergine épicée (baingan bharta)", cuisine: "indienne",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52807",
    ingredients: [
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 6, unite: "gousse" },
      { id: "piment-en-poudre", quantite: 2, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "coriandre", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Huiler légèrement l'aubergine et la cuire entière sous le gril du four environ 30 min en la retournant, jusqu'à ce qu'elle soit très tendre.", "La laisser tiédir, retirer la peau et hacher ou écraser la chair.", "Faire revenir l'oignon et l'ail hachés dans l'huile sans les colorer.", "Ajouter les tomates coupées en dés et le piment, cuire jusqu'à obtenir une sauce épaisse.", "Ajouter l'aubergine et le sel, cuire encore 5 min en remuant, puis parsemer de coriandre. Servir avec du pain ou du riz."]
  },
  {
    id: "curry-de-poulet-aux-cacahuetes", nom: "Curry de poulet aux cacahuètes", cuisine: "indienne",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "52851",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "cacahuetes", quantite: 40, unite: "g" },
      { id: "yaourt-nature", quantite: 1, unite: "pièce" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "coriandre", quantite: 15, unite: "g" },
      { id: "piment-en-poudre", quantite: 2, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 75, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Mixer les cacahuètes, le gingembre, l'ail, le piment, les tiges et un tiers des feuilles de coriandre avec un peu d'eau, jusqu'à obtenir une pâte.", "Dorer 1 min le poulet coupé en morceaux dans l'huile, ajouter la pâte et cuire encore 1 min.", "Ajouter le bouillon cube dissous dans l'eau chaude et le yaourt.", "Laisser mijoter 10 min, jusqu'à ce que le poulet soit cuit et la sauce épaissie.", "Parsemer du reste de coriandre et servir, avec du riz si on veut."]
  }
];
