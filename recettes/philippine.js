// ============================================================
// RECETTES : cuisine philippine (8 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "beef-asado", nom: "Beef asado (bœuf mijoté soja-tomate, pommes de terre et carottes)", cuisine: "philippine",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53071",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 400, unite: "g" },
      { id: "sauce-soja", quantite: 45, unite: "ml" },
      { id: "vinaigre", quantite: 5, unite: "ml" },
      { id: "laurier", quantite: 2, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 80, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 40, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "poivre", quantite: 3, unite: "g" }
    ],
    etapes: ["Couper le bœuf (à braiser) en gros cubes. Le mélanger avec le poivre concassé, la sauce soja, le vinaigre, le laurier, le jus d'un demi-citron et 1 cuillère à soupe de sauce tomate. Laisser mariner au moins 30 min.", "Mettre la viande et sa marinade dans une cocotte avec l'eau, porter à ébullition, ajouter le bouillon cube, couvrir et cuire 40 min à feu doux.", "Retourner la viande, ajouter le reste de la sauce tomate et poursuivre la cuisson jusqu'à ce que le bœuf soit tendre (30 à 45 min). Réserver.", "Pendant ce temps, faire dorer dans une poêle avec l'huile les pommes de terre en quartiers des deux côtés, puis les carottes en tronçons. Réserver.", "Garder 2 cuillères à soupe d'huile dans la poêle et y faire revenir l'oignon et l'ail hachés jusqu'à ce que l'oignon soit tendre.", "Verser la sauce de la viande, porter à ébullition, ajouter le bœuf et cuire 2 min. Ajouter le beurre et laisser réduire la sauce de moitié. Servir avec les pommes de terre, les carottes et du riz."]
  },
  {
    id: "beef-caldereta", nom: "Beef caldereta (ragoût de bœuf à la tomate et aux cacahuètes)", cuisine: "philippine",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53070",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 400, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "sauce-tomate", quantite: 120, unite: "g" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "beurre-de-cacahuete", quantite: 25, unite: "g" },
      { id: "piment-en-poudre", quantite: 2, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une cocotte, faire revenir l'oignon et l'ail hachés dans l'huile jusqu'à ce que l'oignon soit tendre. Ajouter le bœuf (à braiser) en cubes et le faire dorer.", "Ajouter la sauce soja, la sauce tomate et l'eau, porter à ébullition puis ajouter le bouillon cube. Couvrir et cuire 1 h à 1 h 15 à feu doux (30 min en autocuiseur), jusqu'à ce que la viande soit tendre.", "Pendant ce temps, faire dorer à la poêle les pommes de terre et la carotte en morceaux. Réserver.", "Ajouter dans la cocotte le piment et le beurre de cacahuète (à l'origine aussi du pâté de foie), bien remuer.", "Ajouter le poivron en lanières (rouge et vert si possible), les pommes de terre et la carotte. Couvrir et cuire encore 5 à 7 min. Saler, poivrer et servir avec du riz."]
  },
  {
    id: "beef-mechado", nom: "Beef mechado (bœuf braisé à la tomate et au soja)", cuisine: "philippine",
    difficulte: "moyen", tempsMinutes: 110, portions: 2,
    source: "TheMealDB", idSource: "53068",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 450, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 120, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "sauce-soja", quantite: 40, unite: "ml" },
      { id: "laurier", quantite: 2, unite: "pièce" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Couper le bœuf (à braiser) en cubes. Le faire mariner 30 min avec la sauce soja et le jus d'une tranche de citron.", "Dans une cocotte, faire revenir l'ail puis l'oignon émincé dans l'huile. Égoutter la viande (garder la marinade) et la faire dorer de tous les côtés.", "Ajouter la marinade, la sauce tomate, l'eau, le laurier et le poivre. Porter à ébullition, couvrir et laisser mijoter 1 h à 1 h 15, jusqu'à ce que la viande soit tendre (ajouter un peu d'eau si besoin).", "Ajouter la pomme de terre en cubes et cuire encore 15 min jusqu'à ce qu'elle soit tendre et la sauce épaissie. Saler et servir avec du riz."]
  },
  {
    id: "bistek-tagalog", nom: "Bistek (bœuf mariné soja-citron aux oignons)", cuisine: "philippine",
    difficulte: "facile", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "53069",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 300, unite: "g" },
      { id: "sauce-soja", quantite: 50, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce", ou: { id: "citron-vert", quantite: 2, unite: "pièce" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 2, unite: "g" }
    ],
    etapes: ["Couper le bœuf en tranches fines et le faire mariner au moins 1 h (idéalement une nuit) dans la sauce soja, le jus du citron et le poivre.", "Couper les oignons en rondelles. Faire revenir la moitié dans l'huile jusqu'à ce qu'ils soient tendres et réserver.", "Égoutter la viande en gardant la marinade. La saisir 1 min de chaque côté dans la même poêle, puis réserver.", "Ajouter un peu d'huile si besoin, faire revenir l'ail haché et le reste des oignons jusqu'à ce qu'ils soient tendres.", "Verser la marinade et l'eau, porter à ébullition, remettre la viande, couvrir et laisser mijoter jusqu'à ce qu'elle soit tendre (ajouter de l'eau si besoin).", "Saler, poivrer, garnir avec les oignons revenus et servir chaud avec du riz."]
  },
  {
    id: "aubergines-panees-au-sesame", nom: "Aubergines croustillantes panées au sésame", cuisine: "philippine",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53072",
    ingredients: [
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "chapelure", quantite: 60, unite: "g" },
      { id: "graines-de-sesame", quantite: 25, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper l'aubergine en tranches de 1 cm, les saler et les laisser 30 min pour qu'elles rendent leur eau et leur amertume.", "Rincer les tranches et bien les sécher dans un torchon.", "Mélanger la chapelure et le sésame dans une assiette. Battre les œufs avec une pincée de sel et de poivre dans une autre.", "Chauffer l'huile dans une grande poêle à feu vif. Passer les tranches dans l'œuf puis dans la chapelure et les frire 2 à 3 min de chaque côté jusqu'à ce qu'elles soient dorées. Égoutter sur du papier absorbant."]
  },
  {
    id: "adobo-d-aubergines-au-porc", nom: "Adobo d'aubergines au porc haché", cuisine: "philippine",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53073",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "ail", quantite: 8, unite: "gousse" },
      { id: "huile-de-tournesol", quantite: 45, unite: "ml" },
      { id: "porc-hache", quantite: 120, unite: "g", ou: { id: "boeuf-hache", quantite: 120, unite: "g" } },
      { id: "vinaigre-de-riz", quantite: 45, unite: "ml", ou: { id: "vinaigre", quantite: 30, unite: "ml" } },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "laurier", quantite: 2, unite: "pièce" },
      { id: "eau", quantite: 350, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 3, unite: "g" }
    ],
    etapes: ["Couper les aubergines en quatre dans la longueur puis en morceaux de 5 cm. Les mélanger avec 1 cuillère à soupe de sucre, 3 g de sel et un peu de poivre, et laisser reposer au moins 20 min.", "Émincer finement l'ail. Faire dorer la moitié dans l'huile, à feu moyen-vif en remuant, environ 5 min jusqu'à ce qu'il soit croustillant. Le retirer avec une écumoire et le saler légèrement.", "Dans la même cocotte, faire dorer le porc haché émietté, sans trop remuer, environ 5 min. Le retirer avec l'écumoire en laissant le gras.", "Sécher les aubergines dans un torchon et les faire dorer en plusieurs fois, environ 3 min de chaque côté (ajouter de l'huile si besoin). Les mettre avec le porc.", "Verser l'eau dans la cocotte en grattant les sucs. Ajouter le reste de l'ail, le vinaigre, la sauce soja, le laurier, 1 cuillère à café de poivre et le reste du sucre. Porter à frémissement, remettre le porc et les aubergines.", "Laisser mijoter à feu moyen-doux, à moitié couvert, 20 à 25 min jusqu'à ce que les aubergines soient fondantes et la sauce réduite de moitié. Goûter, rectifier, parsemer de l'ail croustillant et servir avec du riz blanc."]
  },
  {
    id: "aubergines-grillees-au-lait-de-coco", nom: "Aubergines grillées au lait de coco", cuisine: "philippine",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53074",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "lait-de-coco", quantite: 200, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Piquer les aubergines partout à la fourchette pour qu'elles n'éclatent pas.", "Les griller (barbecue, gril du four ou directement sur la flamme) en les retournant souvent, jusqu'à ce que la peau soit noire et la chair très tendre.", "Les plonger dans un bol d'eau froide pour les refroidir, puis retirer la peau. Les mettre dans un plat creux, entières ou en morceaux.", "Mélanger le lait de coco, 1 cuillère à soupe de jus de citron, le sel et le piment. Goûter et ajuster, puis verser sur les aubergines. Parsemer d'oignons nouveaux émincés et mélanger doucement."]
  },
  {
    id: "tortang-talong", nom: "Tortang talong (omelette d'aubergine grillée)", cuisine: "philippine",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53075",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Griller les aubergines (longues et fines de préférence) jusqu'à ce que la peau soit presque noire.", "Les laisser tiédir puis retirer la peau en gardant la queue.", "Battre les œufs avec le sel dans une assiette creuse. Poser chaque aubergine à plat et l'écraser à la fourchette en éventail.", "Tremper les aubergines écrasées dans l'œuf battu.", "Chauffer l'huile dans une poêle et cuire les aubergines 3 à 4 min de chaque côté à feu moyen, en versant le reste de l'œuf dessus. Servir avec du riz et du ketchup."]
  }
]);
