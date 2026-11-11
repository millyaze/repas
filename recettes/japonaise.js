// ============================================================
// RECETTES : cuisine japonaise (4 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/indienne.js
// ============================================================
ajouterRecettes([
  {
    id: "poulet-pane-au-curry-katsu", nom: "Poulet pané au curry (katsu)", cuisine: "japonaise",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52820",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 30, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "chapelure", quantite: 50, unite: "g" },
      { id: "huile-de-tournesol", quantite: 130, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "curry-en-poudre", quantite: 5, unite: "g" },
      { id: "garam-masala", quantite: 2, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "miel", quantite: 7, unite: "g" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "laurier", quantite: 1, unite: "pièce", optionnel: true },
      { id: "riz", quantite: 150, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Sauce : faire revenir l'oignon et l'ail émincés dans 15 ml d'huile, ajouter la carotte en rondelles et cuire 10 min à feu doux.", "Ajouter la moitié de la farine et le curry, cuire 1 min, puis verser petit à petit le bouillon cube dissous dans l'eau chaude.", "Ajouter le miel, la sauce soja et le laurier, laisser mijoter 20 min jusqu'à ce que la sauce épaississe, puis ajouter le garam masala.", "Poulet : aplatir les blancs à 1 cm d'épaisseur, saler et poivrer, les passer dans le reste de farine, puis dans l'œuf battu, puis dans la chapelure.", "Les cuire dans le reste d'huile bien chaude, 3 à 4 min de chaque côté, puis les égoutter sur du papier absorbant.", "Napper le poulet de sauce et servir, avec du riz si on veut."]
  },
  {
    id: "poulet-frit-karaage", nom: "Poulet frit japonais (karaage)", cuisine: "japonaise",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "52831",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "sake", quantite: 15, unite: "ml", ou: { id: "vin-blanc", quantite: 15, unite: "ml" } },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "fecule", quantite: 40, unite: "g", ou: { id: "farine", quantite: 40, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 200, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Mélanger le gingembre râpé, l'ail écrasé, la sauce soja, le saké et le sucre.", "Ajouter le poulet coupé en morceaux, bien l'enrober, couvrir et laisser mariner 1 h au frais.", "Chauffer l'huile dans une casserole à fond épais (environ 180 °C).", "Rouler les morceaux de poulet dans la fécule.", "Les frire en plusieurs fois jusqu'à ce qu'ils soient bien dorés et cuits à cœur, puis les égoutter sur du papier absorbant.", "Servir avec des quartiers de citron."]
  },
  {
    id: "bol-de-riz-au-porc-pane-katsudon", nom: "Bol de riz au porc pané (katsudon)", cuisine: "japonaise",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53034",
    ingredients: [
      { id: "cote-de-porc", quantite: 2, unite: "pièce" },
      { id: "riz", quantite: 200, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "chapelure", quantite: 50, unite: "g" },
      { id: "huile-de-tournesol", quantite: 100, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "mirin", quantite: 5, unite: "ml", ou: { id: "vin-blanc", quantite: 5, unite: "ml" } },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "ciboulette", quantite: 3, unite: "g", optionnel: true, ou: { id: "persil", quantite: 3, unite: "g" } }
    ],
    etapes: ["Cuire le riz.", "Passer le porc (sans os) dans la farine, puis dans un œuf battu, puis dans la chapelure. Le frire dans l'huile chaude 3 à 4 min de chaque côté, l'égoutter et le couper en lanières.", "Dans une poêle avec un peu d'huile, faire dorer l'oignon émincé, puis poser le porc pané au milieu.", "Mélanger le bouillon cube dissous dans l'eau chaude, la sauce soja, le mirin et le sucre, en verser les trois quarts autour du porc et laisser frémir 2 min.", "Verser les 2 autres œufs battus autour du porc et cuire 2 à 3 min : l'œuf doit rester un peu coulant.", "Répartir le riz dans deux bols, poser dessus le porc et l'œuf, parsemer de ciboulette ciselée."]
  },
  {
    id: "nouilles-sautees-aux-legumes-yaki-udon", nom: "Nouilles sautées aux légumes (yaki udon)", cuisine: "japonaise",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "52871",
    ingredients: [
      { id: "nouilles-udon", quantite: 250, unite: "g", ou: { id: "nouilles-chinoises", quantite: 250, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "chou", quantite: 200, unite: "g" },
      { id: "champignons-shiitake", quantite: 150, unite: "g", ou: { id: "champignons", quantite: 150, unite: "g" } },
      { id: "huile-de-sesame", quantite: 30, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 30, unite: "ml" } },
      { id: "mirin", quantite: 60, unite: "ml", ou: { id: "vin-blanc", quantite: 60, unite: "ml" } },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "sauce-worcestershire", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "sucre", quantite: 15, unite: "g" }
    ],
    etapes: ["Cuire les nouilles dans l'eau bouillante le temps indiqué sur le paquet, puis les égoutter.", "Faire sauter 5 min dans la moitié de l'huile l'oignon émincé et le chou coupé en lanières.", "Ajouter les champignons émincés et la moitié des oignons nouveaux émincés, cuire 1 min.", "Ajouter le reste d'huile et les nouilles, puis le mirin, la sauce soja, la sauce Worcestershire et le sucre.", "Faire sauter jusqu'à ce que tout soit bien chaud et nappé de sauce, puis parsemer du reste d'oignons nouveaux."]
  }
]);
