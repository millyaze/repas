// ============================================================
// RECETTES : cuisine marocaine (6 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/indienne.js
// ============================================================
ajouterRecettes([
  {
    id: "couscous-au-poulet", nom: "Couscous au poulet", cuisine: "marocaine", type: "plat",
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
    id: "soupe-de-carottes-au-cumin", nom: "Soupe de carottes au cumin", cuisine: "marocaine", type: "soupe",
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
    id: "salade-de-pommes-de-terre-a-la-harissa", nom: "Salade de pommes de terre à la harissa", cuisine: "marocaine", type: "accompagnement",
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
    id: "lentilles-au-tahini", nom: "Lentilles au tahini", cuisine: "marocaine", type: "plat",
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
  },
  // --- Ajoutées pour : afrique-nord ---
  {
    id: "feuilles-de-vigne-farcies-agneau", nom: "Feuilles de vigne farcies à l'agneau, sauce tomate au gingembre", cuisine: "marocaine", type: "plat",
    difficulte: "difficile", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "52782",
    ingredients: [
      { id: "feuilles-de-vigne", quantite: 25, unite: "pièce", ou: { id: "chou", quantite: 300, unite: "g" } },
      { id: "agneau-hache", quantite: 200, unite: "g", ou: { id: "boeuf-hache", quantite: 200, unite: "g" } },
      { id: "tomate", quantite: 5, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "fenouil", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 50, unite: "g" },
      { id: "riz", quantite: 15, unite: "g" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "clous-de-girofle", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sucre", quantite: 3, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Feuilles de vigne en saumure : les égoutter, les plonger 10 min dans l'eau bouillante, puis les laisser sécher sur un torchon. Retirer les queues ; recouper les grandes feuilles à environ 12 cm. (Sans feuilles de vigne : utiliser des feuilles de chou blanchies 3 min.)", "Farce : mélanger la viande, l'oignon haché, la pomme de terre râpée, le riz, la moitié du persil et de la coriandre hachés, 1 gousse d'ail écrasée, la cannelle, le clou de girofle écrasé et 1 cuillère à soupe de jus de citron. Râper 1 tomate dans le bol (jeter la peau), saler, poivrer et mélanger. Avant de l'utiliser, presser la farce et jeter le jus.", "Sauce : chauffer l'huile, faire revenir le gingembre haché et l'autre gousse d'ail 1 à 2 min sans brûler, puis ajouter les 4 autres tomates pelées et hachées, 2 cuillères à soupe de jus de citron et le sucre. Saler, poivrer et laisser mijoter 20 min.", "Tapisser le fond d'une large casserole des feuilles abîmées, puis de tranches de fenouil de 5 mm pour couvrir tout le fond.", "Poser une feuille, nervures vers le haut, mettre 2 cuillères à café de farce en bas, rabattre les côtés et rouler serré en cigare. Ranger les rouleaux serrés les uns contre les autres dans la casserole, fermeture en dessous.", "Verser la sauce par-dessus (ajouter de l'eau juste à hauteur si besoin), poser une assiette dessus pour les maintenir, couvrir et cuire 70 min à très petit frémissement : presque tout le liquide doit s'évaporer.", "Laisser tiédir un peu et servir avec des tranches de fenouil, le jus de cuisson et le reste de coriandre, avec du riz ou de la semoule."]
  },
  {
    id: "tajine-d-agneau-abricots-courge", nom: "Tajine d'agneau aux abricots et à la courge", cuisine: "marocaine", type: "plat",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "52843",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 250, unite: "g" },
      { id: "courge-butternut", quantite: 300, unite: "g", ou: { id: "potiron", quantite: 300, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "abricots-secs", quantite: 50, unite: "g" },
      { id: "miel", quantite: 10, unite: "g" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "gingembre-en-poudre", quantite: 1, unite: "g", ou: { id: "gingembre", quantite: 3, unite: "g" } },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "safran", quantite: 1, unite: "sachet" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "semoule", quantite: 150, unite: "g" },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "pignons-de-pin", quantite: 10, unite: "g", optionnel: true },
      { id: "eau", quantite: 400, unite: "ml" }
    ],
    etapes: ["Dans une cocotte à fond épais, chauffer l'huile et faire revenir l'oignon émincé et la carotte en morceaux 3 à 4 min, jusqu'à ce qu'ils ramollissent.", "Ajouter l'agneau en cubes et le faire dorer sur toutes les faces.", "Ajouter l'ail écrasé, le cumin, le gingembre en poudre, le safran et la cannelle, et cuire encore quelques minutes jusqu'à ce que les épices sentent bon.", "Ajouter le miel et les abricots, émietter le bouillon cube et verser 250 ml d'eau bouillante (la viande doit être couverte). Bien mélanger et porter à ébullition.", "Couvrir et laisser mijoter 1 h à feu doux, puis découvrir et cuire encore 30 min.", "Ajouter la courge (butternut ou potiron) en cubes et cuire 20 à 30 min, jusqu'à ce qu'elle soit fondante et l'agneau tendre.", "Préparer la semoule : la couvrir avec 150 ml d'eau bouillante salée, couvrir 5 min puis l'égrener à la fourchette. Servir le tajine sur la semoule, parsemé de persil et de pignons grillés."]
  }
]);
