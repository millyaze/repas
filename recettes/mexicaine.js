// ============================================================
// RECETTES : cuisine mexicaine (10 recettes, pour 2 personnes)
// Même format que recettes/francaise.js
// ============================================================
const RECETTES_MEXICAINE = [
  {
    id: "chili-con-carne", nom: "Chili con carne", cuisine: "mexicaine",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    ingredients: [
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "sauce-tomate", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon, l'ail et le poivron hachés dans l'huile 5 min.", "Ajouter le bœuf et le dorer 5 min, puis le cumin, le piment et le sel.", "Ajouter la sauce tomate et les haricots égouttés, mijoter 25 min.", "Cuire le riz et servir avec le chili."]
  },
  {
    id: "quesadillas-au-fromage", nom: "Quesadillas au fromage", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "tortilla-de-ble", quantite: 4, unite: "pièce" },
      { id: "fromage-rape", quantite: 120, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" }
    ],
    etapes: ["Faire revenir le poivron et l'oignon émincés dans l'huile 5 min.", "Garnir deux tortillas de fromage et de légumes, couvrir avec les deux autres.", "Dorer chaque quesadilla 2 min par face dans une poêle sèche.", "Couper en quartiers."]
  },
  {
    id: "fajitas-au-poulet", nom: "Fajitas au poulet", cuisine: "mexicaine",
    difficulte: "moyen", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "tortilla-de-ble", quantite: 4, unite: "pièce" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "creme-fraiche", quantite: 50, unite: "ml", optionnel: true },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Couper le poulet en lamelles, le mélanger avec le paprika, le cumin, le sel et le jus du citron vert.", "Faire sauter les poivrons et l'oignon émincés dans l'huile 6 min. Réserver.", "Cuire le poulet 6 min à feu vif, remettre les légumes.", "Réchauffer les tortillas et les garnir (avec un peu de crème fraîche si tu en as)."]
  },
  {
    id: "guacamole-et-tortillas-grillees", nom: "Guacamole et tortillas grillées", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "avocat", quantite: 2, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "coriandre", quantite: 5, unite: "g" },
      { id: "tortilla-de-ble", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Écraser les avocats à la fourchette avec le jus du citron vert et le sel.", "Ajouter la tomate en petits dés, la moitié de l'oignon haché finement et la coriandre.", "Couper les tortillas en triangles et les griller 2 min à la poêle.", "Servir ensemble."]
  },
  {
    id: "tacos-au-boeuf", nom: "Tacos au bœuf", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    ingredients: [
      { id: "tortilla-de-ble", quantite: 4, unite: "pièce" },
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "fromage-rape", quantite: 40, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon haché dans l'huile, ajouter le bœuf, le cumin, le paprika et le sel, cuire 8 min.", "Couper la tomate en dés et quelques feuilles de salade en lanières.", "Réchauffer les tortillas.", "Les garnir de viande, salade, tomate et fromage."]
  },
  {
    id: "riz-a-la-mexicaine", nom: "Riz à la mexicaine", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "riz", quantite: 150, unite: "g" },
      { id: "sauce-tomate", quantite: 150, unite: "g" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon et le poivron en dés dans l'huile 4 min.", "Ajouter le riz et le cumin, remuer 1 min.", "Verser la sauce tomate, l'eau et le sel, couvrir et cuire 18 min à feu doux.", "Ajouter le maïs égoutté et mélanger."]
  },
  {
    id: "burritos-haricots-et-riz", nom: "Burritos haricots et riz", cuisine: "mexicaine",
    difficulte: "moyen", tempsMinutes: 30, portions: 2,
    ingredients: [
      { id: "tortilla-de-ble", quantite: 2, unite: "pièce" },
      { id: "riz", quantite: 100, unite: "g" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "fromage-rape", quantite: 60, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Réchauffer les haricots et le maïs égouttés avec la sauce tomate et le cumin 5 min.", "Répartir le riz, le mélange et le fromage au centre des tortillas.", "Rouler en repliant les bords et dorer 1 min par face à la poêle."]
  },
  {
    id: "huevos-rancheros", nom: "Huevos rancheros", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "tortilla-de-ble", quantite: 2, unite: "pièce" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon haché dans la moitié de l'huile, ajouter la sauce tomate, le piment et le sel, mijoter 8 min.", "Cuire les œufs au plat dans le reste de l'huile.", "Réchauffer les tortillas.", "Poser les œufs sur les tortillas, napper de sauce et parsemer de coriandre."]
  },
  {
    id: "salade-mexicaine", nom: "Salade mexicaine", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "avocat", quantite: 1, unite: "pièce" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Laver la salade et la couper en lanières.", "Égoutter et rincer le maïs et les haricots rouges.", "Couper les tomates et l'avocat en dés.", "Mélanger le tout avec le jus du citron vert, l'huile et le sel."]
  },
  {
    id: "soupe-mexicaine-au-poulet", nom: "Soupe mexicaine au poulet", cuisine: "mexicaine",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    ingredients: [
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "tortilla-de-ble", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "eau", quantite: 600, unite: "ml" }
    ],
    etapes: ["Faire revenir l'oignon et l'ail hachés dans l'huile avec le cumin.", "Ajouter l'eau, le bouillon cube, la sauce tomate et le poulet entier, cuire 20 min.", "Sortir le poulet, l'effilocher à la fourchette et le remettre avec le maïs égoutté.", "Griller la tortilla coupée en lanières à la poêle et la poser sur la soupe."]
  }
];
