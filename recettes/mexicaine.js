// ============================================================
// RECETTES : cuisine mexicaine (16 recettes, pour 2 personnes)
// 10 écrites par Claude, puis 6 importées de TheMealDB (en fin de fichier).
// Même format que recettes/francaise.js
// ============================================================
ajouterRecettes([
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
  },
  // --- Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude ---
  // « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
  {
    id: "chili-de-boeuf-mijote-au-chorizo", nom: "Chili de bœuf mijoté au chorizo", cuisine: "mexicaine",
    difficulte: "moyen", tempsMinutes: 200, portions: 2,
    source: "TheMealDB", idSource: "52826",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 350, unite: "g", ou: { id: "steak-de-boeuf", quantite: 350, unite: "g" } },
      { id: "chorizo", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "origan", quantite: 1, unite: "g", ou: { id: "herbes-de-provence", quantite: 1, unite: "g" } },
      { id: "piment-en-poudre", quantite: 2, unite: "g" },
      { id: "vinaigre-balsamique", quantite: 15, unite: "ml", ou: { id: "vinaigre", quantite: 10, unite: "ml" } },
      { id: "sauce-tomate", quantite: 270, unite: "g" },
      { id: "ketchup", quantite: 10, unite: "g" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 120 °C. Sortir la viande du réfrigérateur et la couper en gros morceaux. Hacher finement l'oignon et l'ail.", "Dans une cocotte allant au four, dorer la viande de tous les côtés dans la moitié de l'huile, puis la réserver.", "Ajouter le reste d'huile et faire dorer le chorizo en rondelles, puis le réserver.", "Dans la même huile, faire revenir l'oignon, l'ail, le cumin, la cannelle, le laurier, l'origan et le piment jusqu'à ce que l'oignon soit tendre. Saler et poivrer.", "Ajouter le vinaigre, la sauce tomate, le ketchup et le sucre, remettre la viande et le chorizo, puis verser l'eau. Porter à frémissement, couvrir et enfourner 2 h.", "Ajouter les haricots égouttés et cuire encore 1 h au four. Juste avant de servir, effilocher la viande avec deux fourchettes."]
  },
  {
    id: "tacos-de-poisson-epices-cajun", nom: "Tacos de poisson aux épices cajun", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "52819",
    ingredients: [
      { id: "poisson-blanc", quantite: 250, unite: "g" },
      { id: "paprika", quantite: 4, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "ail-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "tortilla-de-ble", quantite: 4, unite: "pièce" },
      { id: "avocat", quantite: 1, unite: "pièce" },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce", ou: { id: "oignon-rouge", quantite: 1, unite: "pièce" } },
      { id: "sauce-salsa", quantite: 150, unite: "ml", ou: { id: "tomate", quantite: 2, unite: "pièce" } },
      { id: "creme-fraiche", quantite: 75, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélanger le paprika, le piment, l'ail en poudre, le sel et le poivre (ou utiliser 10 g d'épices cajun toutes prêtes), et en enrober le poisson.", "Cuire le poisson dans l'huile à feu moyen jusqu'à ce qu'il soit doré, puis baisser le feu et poursuivre environ 10 min, jusqu'à ce qu'il soit cuit à cœur.", "Pendant ce temps, préparer la sauce : mélanger la crème, le jus du citron et l'ail haché finement, saler et poivrer.", "Réchauffer les tortillas quelques secondes au micro-ondes ou à la poêle.", "Garnir les tortillas d'avocat en tranches, de salade et d'oignon nouveau émincés, d'une cuillerée de salsa (ou de tomates en dés), puis de gros morceaux de poisson. Arroser de sauce et servir."]
  },
  {
    id: "gratin-d-enchiladas-au-poulet", nom: "Gratin d'enchiladas au poulet", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "52765",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "sauce-tomate", quantite: 250, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "ail-en-poudre", quantite: 1, unite: "g", optionnel: true, ou: { id: "ail", quantite: 1, unite: "gousse" } },
      { id: "tortilla-de-mais", quantite: 4, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 4, unite: "pièce" } },
      { id: "fromage-rape", quantite: 150, unite: "g", ou: { id: "cheddar", quantite: 150, unite: "g" } },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Sauce enchilada : mélanger la sauce tomate avec le cumin, le piment, l'ail et le sel (ou utiliser 250 g de sauce enchilada toute prête).", "Couper chaque blanc de poulet en 3 morceaux, les mettre dans une petite casserole avec la sauce, couvrir et cuire 20 min à feu doux à moyen en remuant de temps en temps. Préchauffer le four à 190 °C.", "Sortir le poulet et l'effilocher avec deux fourchettes.", "Dans un plat à four, étaler un peu de sauce, poser 2 tortillas, puis la moitié du poulet, de la sauce et du fromage. Recommencer avec le reste.", "Cuire 20 à 30 min au four, jusqu'à ce que ça bouillonne et que le fromage soit doré. Servir chaud."]
  },
  {
    id: "fajitas-aux-pois-chiches-rotis", nom: "Fajitas aux pois chiches rôtis", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "52870",
    ingredients: [
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "avocat", quantite: 1, unite: "pièce" },
      { id: "citron-vert", quantite: 2, unite: "pièce" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "harissa", quantite: 10, unite: "g", ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "tortilla-de-mais", quantite: 4, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 4, unite: "pièce" } },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Égoutter les pois chiches, les sécher, les mélanger avec l'huile et le paprika sur une plaque couverte de papier aluminium et les rôtir 20 à 25 min en secouant à mi-cuisson.", "Pendant ce temps, mélanger les tomates en morceaux et l'oignon émincé finement avec le vinaigre et laisser mariner.", "Écraser l'avocat à la fourchette en laissant quelques morceaux, ajouter le jus d'un citron vert et saler.", "Mélanger la crème avec la harissa.", "Griller les tortillas une par une dans une poêle très chaude, de chaque côté.", "À table, chacun tartine sa tortilla de crème à la harissa, puis ajoute les pois chiches, l'avocat, les tomates marinées et la coriandre. Servir avec l'autre citron vert en quartiers."]
  },
  {
    id: "tacos-au-poulet-gratines-au-four", nom: "Tacos au poulet gratinés au four", cuisine: "mexicaine",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52830",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "cumin", quantite: 5, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "tortilla-de-mais", quantite: 6, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 6, unite: "pièce" } },
      { id: "fromage-rape", quantite: 100, unite: "g", ou: { id: "cheddar", quantite: 100, unite: "g" } },
      { id: "tomates-cerises", quantite: 100, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "avocat", quantite: 1, unite: "pièce" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "lait", quantite: 15, unite: "ml" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre le poulet dans une cocotte avec l'huile, le vinaigre, le cumin, le paprika, l'ail écrasé, le sel et l'eau. Couvrir et cuire 35 à 40 min à feu doux (ou 4 h en mijoteuse).", "Sortir le poulet, l'effilocher avec deux fourchettes et l'arroser de presque tout le jus de cuisson. Préchauffer le four à 230 °C.", "Égoutter les haricots et les écraser à la fourchette avec un peu de jus de cuisson.", "Plier les tortillas en deux (ou utiliser des coquilles à tacos), les ranger debout dans un plat à four et les garnir de haricots écrasés, de poulet et de fromage. Cuire 10 à 15 min, jusqu'à ce que le fromage bouillonne.", "Pendant ce temps, écraser l'avocat avec le jus du citron vert, et délayer la crème avec le lait.", "À la sortie du four, garnir les tacos de tomates cerises coupées en deux, de piment en rondelles et de coriandre, puis arroser de crème d'avocat et de crème."]
  },
  {
    id: "poivrons-farcis-quinoa-haricots-noirs", nom: "Poivrons farcis au quinoa et aux haricots noirs", cuisine: "mexicaine",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53067",
    ingredients: [
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "quinoa", quantite: 80, unite: "g", ou: { id: "riz", quantite: 80, unite: "g" } },
      { id: "haricots-noirs-en-boite", quantite: 1, unite: "boîte", ou: { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" } },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "fromage-rape", quantite: 90, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire le quinoa dans deux fois son volume d'eau salée, environ 12 min. Préchauffer le four à 190 °C et huiler légèrement un plat.", "Couper les poivrons en deux dans la longueur, retirer les graines, les poser dans le plat face coupée vers le haut et les cuire 15 à 20 min.", "Pendant ce temps, faire revenir l'oignon haché dans l'huile 3 à 4 min, ajouter l'ail haché et cuire 1 min.", "Ajouter le quinoa, la moitié des haricots égouttés et la moitié du maïs (garder le reste pour une autre fois), la sauce tomate, le cumin, le piment, le paprika, le sel et le poivre. Cuire 5 à 7 min, puis retirer du feu et ajouter les deux tiers du fromage.", "Garnir les demi-poivrons de farce, parsemer du reste de fromage et remettre 15 à 20 min au four.", "Laisser reposer 5 min et servir parsemé de coriandre."]
  }
]);
