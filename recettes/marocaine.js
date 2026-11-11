// ============================================================
// RECETTES : cuisine marocaine (4 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/indienne.js
// ============================================================
ajouterRecettes([
  {
    id: "couscous-au-poulet", nom: "Couscous au poulet", cuisine: "marocaine",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "52850",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "semoule", quantite: 200, unite: "g" },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "abricots-secs", quantite: 60, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "harissa", quantite: 30, unite: "g" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "coriandre", quantite: 10, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon haché 2 min dans l'huile.", "Ajouter le poulet coupé en morceaux et le cuire 7 à 10 min, jusqu'à ce qu'il soit doré et bien cuit.", "Ajouter le gingembre râpé et la harissa, mélanger et cuire 1 min.", "Ajouter les abricots, les pois chiches égouttés et la semoule, verser le bouillon cube dissous dans l'eau bouillante et remuer une fois.", "Couvrir et laisser gonfler 5 min hors du feu.", "Égrener la semoule à la fourchette et parsemer de coriandre."]
  },
  {
    id: "soupe-de-carottes-au-cumin", nom: "Soupe de carottes au cumin", cuisine: "marocaine",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53047",
    ingredients: [
      { id: "carotte", quantite: 6, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "garam-masala", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "graines-de-coriandre", quantite: 2, unite: "g", optionnel: true, ou: { id: "coriandre", quantite: 2, unite: "g" } },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C.", "Mélanger les carottes en rondelles, l'oignon émincé, l'ail, le cumin, les graines de coriandre, le sel et l'huile, puis étaler sur une plaque.", "Rôtir 10 à 12 min au four, jusqu'à ce que les carottes soient tendres.", "Mixer avec un peu d'eau jusqu'à obtenir une purée lisse.", "Verser dans une casserole avec le reste de l'eau, porter à ébullition et ajouter le garam masala.", "Hors du feu, ajouter un peu de jus de citron et servir chaud."]
  },
  {
    id: "salade-de-pommes-de-terre-a-la-harissa", nom: "Salade de pommes de terre à la harissa", cuisine: "marocaine",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "52797",
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "roquette", quantite: 100, unite: "g", ou: { id: "salade-verte", quantite: 1, unite: "pièce" } },
      { id: "feta", quantite: 80, unite: "g" },
      { id: "oignon-nouveau", quantite: 3, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "harissa", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "pignons-de-pin", quantite: 20, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre 20 min dans l'eau bouillante, jusqu'à ce qu'un couteau les traverse facilement.", "Fouetter la harissa, l'huile, le jus d'un demi-citron, le sel et le poivre.", "Égoutter les pommes de terre, les couper en deux, les mélanger avec la sauce et les oignons nouveaux émincés.", "Disposer la roquette dans un saladier, ajouter les pommes de terre et mélanger.", "Ajouter la feta émiettée, la menthe ciselée et les pignons de pin."]
  },
  {
    id: "lentilles-au-tahini", nom: "Lentilles au tahini", cuisine: "marocaine",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "52869",
    ingredients: [
      { id: "lentilles", quantite: 120, unite: "g" },
      { id: "tahini", quantite: 50, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "haricots-verts", quantite: 200, unite: "g" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "chou-kale", quantite: 100, unite: "g", ou: { id: "epinards", quantite: 100, unite: "g" } },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 50, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire les lentilles 20 à 25 min dans l'eau bouillante, puis les égoutter.", "Mélanger le tahini avec le zeste et le jus du citron et les 50 ml d'eau froide pour faire une sauce fluide. Saler.", "Faire revenir l'oignon émincé 2 min dans l'huile avec une pincée de sel.", "Ajouter l'ail écrasé, le poivron en lamelles, les haricots verts et la courgette en rondelles, cuire 5 min en remuant souvent.", "Ajouter le chou kale en lanières, les lentilles et la sauce au tahini, remuer 2 min sur le feu jusqu'à ce que le chou soit tombé."]
  }
]);
