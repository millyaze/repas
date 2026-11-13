// ============================================================
// RECETTES : cuisine vietnamienne (26 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/chinoise.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "salade-de-crevettes-sauce-cacahuete", nom: "Salade de crevettes sauce cacahuète (bang bang)", cuisine: "vietnamienne", type: "entree",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53239",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 140, unite: "g" },
      { id: "beurre-de-cacahuete", quantite: 45, unite: "g" },
      { id: "lait-de-coco", quantite: 60, unite: "ml" },
      { id: "sauce-chili-douce", quantite: 45, unite: "ml" },
      { id: "oignon-nouveau", quantite: 3, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "pousses-de-soja", quantite: 300, unite: "g" },
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "eau", quantite: 30, unite: "ml" }
    ],
    etapes: ["Cuire les nouilles comme indiqué sur le paquet, les passer sous l'eau froide et bien les égoutter.", "Dans une petite casserole, faire fondre ensemble le beurre de cacahuète, le lait de coco, la sauce chili douce et la moitié des oignons nouveaux émincés. Ajouter 1 à 2 cuillères à soupe d'eau pour obtenir une sauce qui coule.", "Mélanger dans un plat les nouilles, le concombre en tranches fines et les pousses de soja. Poser les crevettes (cuites) dessus, verser la sauce et parsemer du reste d'oignons nouveaux."]
  },
  {
    id: "petits-pains-au-porc-laque", nom: "Petits pains au porc laqué", cuisine: "vietnamienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53242",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "levure-de-boulanger", quantite: 5, unite: "g" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "lardons", quantite: 100, unite: "g" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "miel", quantite: 20, unite: "g" },
      { id: "sauce-tomate", quantite: 20, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Pâte : mélanger la farine, la levure, le sucre et une pincée de sel. Ajouter environ 150 ml d'eau tiède et pétrir 5 min jusqu'à ce que la pâte soit lisse. Couvrir et laisser lever dans un endroit tiède jusqu'à ce qu'elle double de volume (environ 1 h).", "Pendant ce temps, faire dorer les lardons dans l'huile (5 min). Ajouter le gingembre et l'ail hachés, cuire 1 min, puis la sauce soja, le miel et le concentré de tomate. Bien mélanger.", "Préchauffer le four à 200 °C. Pétrir rapidement la pâte et la partager en 6 boules. Les aplatir, mettre une cuillère à café de garniture au milieu, refermer en pinçant comme une bourse et poser le pain sur une plaque, fermeture en dessous.", "Couvrir et laisser lever encore 30 min. Badigeonner d'œuf battu et cuire 20 min jusqu'à ce que les pains soient dorés. Servir tiède."]
  },
  {
    id: "bol-banh-mi-au-boeuf", nom: "Bol bánh mì au bœuf, mayo sriracha et concombre mariné", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "52997",
    ingredients: [
      { id: "riz", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "boeuf-hache", quantite: 300, unite: "g" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "mayonnaise", quantite: 30, unite: "g" },
      { id: "sauce-sriracha", quantite: 10, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "beurre", quantite: 15, unite: "g", optionnel: true }
    ],
    etapes: ["Rincer le riz jusqu'à ce que l'eau soit claire, puis le cuire avec 250 ml d'eau et une pincée de sel, à couvert et à feu doux, 15 min. Laisser reposer 10 min hors du feu.", "Hacher l'ail. Râper le zeste du citron vert puis le couper en quartiers. Couper le concombre en demi-rondelles fines, l'oignon en dés et râper la carotte.", "Concombre mariné : le mélanger avec le jus d'un demi-citron vert, une pincée de sucre et une pincée de sel. Mayo sriracha : mélanger la mayonnaise, un peu d'ail, un filet de citron vert et de la sriracha selon votre goût.", "Faire revenir l'oignon dans l'huile 4 à 5 min. Ajouter le bœuf, le reste de l'ail et le sucre, et cuire en émiettant 4 à 5 min. Ajouter la sauce soja, saler et poivrer.", "Mélanger le riz avec le zeste de citron vert (et le beurre si on veut). Répartir dans les bols, ajouter le bœuf, la carotte râpée et le concombre mariné. Arroser de citron vert et de mayo sriracha."]
  },
  {
    id: "pho-au-boeuf", nom: "Phở au bœuf", cuisine: "vietnamienne", type: "soupe",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53238",
    ingredients: [
      { id: "bouillon-cube", quantite: 2, unite: "pièce" },
      { id: "eau", quantite: 1500, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "gingembre", quantite: 30, unite: "g" },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "anis-etoile", quantite: 2, unite: "pièce", ou: { id: "cinq-epices", quantite: 2, unite: "g" } },
      { id: "graines-de-coriandre", quantite: 3, unite: "g", optionnel: true },
      { id: "steak-de-boeuf", quantite: 225, unite: "g" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "sauce-poisson", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "nouilles-de-riz", quantite: 200, unite: "g" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "basilic", quantite: 10, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Préparer 1,5 litre de bouillon avec les bouillons cubes. Couper l'oignon et le gingembre en deux et les faire noircir de tous côtés dans une poêle très chaude (3 à 5 min), puis les mettre dans le bouillon.", "Dans la même poêle, faire griller 2 à 3 min la cannelle (1 bâton, ou ½ cuillère à café en poudre), l'anis étoilé, les graines de coriandre et 1 ou 2 clous de girofle si vous en avez. Les ajouter au bouillon. Porter à ébullition puis laisser frémir 30 min et filtrer.", "Pendant ce temps, enlever le gras du steak et le mettre 15 min au congélateur : il sera plus facile à couper. Le trancher très finement.", "Goûter le bouillon et l'assaisonner avec le sucre, la sauce poisson et la sauce soja. Cuire les nouilles comme indiqué sur le paquet et les répartir dans deux bols, avec le bœuf cru par-dessus.", "Verser le bouillon bouillant dans les bols : la chaleur cuit le bœuf. Ajouter les oignons nouveaux, le piment en rondelles, le basilic et la coriandre. Servir avec des quartiers de citron vert."]
  },
  {
    id: "salade-de-nouilles-au-saumon", nom: "Salade de nouilles au saumon", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53245",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 125, unite: "g" },
      { id: "pois-gourmands", quantite: 200, unite: "g", ou: { id: "haricots-verts", quantite: 200, unite: "g" } },
      { id: "huile-de-sesame", quantite: 10, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 10, unite: "ml" } },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "saumon", quantite: 150, unite: "g" },
      { id: "sauce-soja", quantite: 45, unite: "ml" },
      { id: "miel", quantite: 20, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" }
    ],
    etapes: ["Si le saumon est cru, le cuire 10 min à la poêle ou à la vapeur, puis l'émietter (à l'origine : saumon fumé à chaud, déjà cuit).", "Mettre les nouilles dans un grand saladier, les couvrir d'eau bouillante, ajouter les pois gourmands émincés et laisser 4 min. Égoutter, passer sous l'eau froide, égoutter encore et mélanger avec l'huile de sésame.", "Sauce : mélanger la sauce soja, le miel, 1 cuillère à soupe de jus de citron, l'huile, l'ail haché fin et le gingembre râpé.", "Ajouter aux nouilles les oignons nouveaux émincés, la coriandre et le saumon. Verser la sauce et mélanger. Servir avec un petit pain si on veut."]
  },
  {
    id: "salade-crevettes-nouilles-echalotes-croustillantes", nom: "Salade de crevettes et nouilles aux échalotes croustillantes", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53244",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 200, unite: "g" },
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "menthe", quantite: 10, unite: "g" },
      { id: "cacahuetes", quantite: 30, unite: "g" },
      { id: "citron-vert", quantite: 3, unite: "pièce" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "sauce-poisson", quantite: 10, unite: "ml", ou: { id: "sauce-soja", quantite: 10, unite: "ml" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "echalote", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "huile-de-tournesol", quantite: 150, unite: "ml" },
      { id: "farine", quantite: 15, unite: "g" }
    ],
    etapes: ["Échalotes croustillantes : chauffer environ 5 cm d'huile dans un wok. Elle est assez chaude quand un morceau d'échalote grésille aussitôt. Rouler les tranches d'échalote dans la farine, secouer et les faire frire environ 1 min jusqu'à ce qu'elles soient dorées. Égoutter sur du papier absorbant et saler.", "Sauce : mélanger le jus des citrons verts, le sucre, la sauce poisson et l'ail écrasé.", "Verser de l'eau bouillante sur les nouilles et laisser 2 min, ou jusqu'à ce qu'elles soient juste cuites. Les passer sous l'eau froide et bien les égoutter.", "Ajouter les crevettes (cuites), l'oignon rouge, le piment et le concombre en tranches, la coriandre et la menthe. Verser la sauce, mélanger, puis parsemer d'échalotes croustillantes et de cacahuètes."]
  },
  {
    id: "brocoli-en-tempura-nuoc-cham", nom: "Brocoli en tempura, sauce nuoc-cham", cuisine: "vietnamienne", type: "entree",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53230",
    ingredients: [
      { id: "fecule", quantite: 50, unite: "g" },
      { id: "farine", quantite: 100, unite: "g" },
      { id: "graines-de-sesame", quantite: 10, unite: "g", optionnel: true },
      { id: "huile-de-tournesol", quantite: 250, unite: "ml" },
      { id: "eau", quantite: 325, unite: "ml" },
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "sauce-poisson", quantite: 30, unite: "ml", ou: { id: "sauce-soja", quantite: 30, unite: "ml" } },
      { id: "citron-vert", quantite: 2, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "sucre", quantite: 30, unite: "g" }
    ],
    etapes: ["Sauce nuoc-cham : mélanger la sauce poisson, le jus des citrons verts, le piment haché, le sucre et 5 cuillères à soupe d'eau chaude. Réserver.", "Mélanger la fécule, la farine, les graines de sésame et une bonne pincée de sel. Remplir une casserole profonde d'huile (pas plus d'un tiers) et chauffer à 180 °C : un dé de pain doit y dorer en 20 secondes.", "Verser rapidement 250 ml d'eau gazeuse bien froide (ou d'eau très froide) dans la farine en fouettant à peine. Tremper les bouquets de brocoli dans la pâte et les faire frire 2 à 3 min jusqu'à ce qu'ils soient croustillants. Égoutter sur du papier absorbant et servir avec la sauce."]
  },
  {
    id: "raviolis-en-feuilles-de-riz", nom: "Raviolis en feuilles de riz", cuisine: "vietnamienne", type: "entree",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53227",
    ingredients: [
      { id: "chou", quantite: 150, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "champignons-shiitake", quantite: 50, unite: "g", ou: { id: "champignons", quantite: 50, unite: "g" } },
      { id: "porc-hache", quantite: 200, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "sauce-soja", quantite: 25, unite: "ml" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 5, unite: "ml" } },
      { id: "oignon-nouveau", quantite: 3, unite: "pièce" },
      { id: "feuilles-de-riz", quantite: 10, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 40, unite: "ml" },
      { id: "vinaigre-de-riz", quantite: 15, unite: "ml", ou: { id: "vinaigre", quantite: 15, unite: "ml" } },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true }
    ],
    etapes: ["Hacher finement le chou, le saler (¼ cuillère à café), mélanger et laisser 15 min. Le presser dans un torchon propre pour enlever le maximum d'eau.", "Mélanger le chou avec la carotte râpée, les champignons hachés, le porc, l'ail, le gingembre râpé, 2 cuillères à café de sauce soja, l'huile de sésame et 2 oignons nouveaux émincés. Poivrer et bien malaxer à la main.", "Tremper une feuille de riz quelques secondes dans de l'eau tiède et la poser sur une planche huilée. Mettre une bonne cuillère à soupe de farce au milieu, rabattre le bas, puis le haut, puis les côtés pour former un carré. Si la feuille est fragile, l'emballer dans une deuxième feuille. Continuer avec le reste.", "Chauffer l'huile dans une grande poêle antiadhésive à feu moyen-vif et dorer les raviolis 3 à 5 min. Les retourner, couvrir et cuire encore 3 à 4 min, puis 1 à 2 min sans couvercle.", "Sauce : mélanger le reste de la sauce soja, le vinaigre de riz, les graines de sésame et le dernier oignon nouveau émincé. Servir à côté des raviolis."]
  },
  {
    id: "soupe-de-nouilles-au-saumon", nom: "Soupe de nouilles au saumon", cuisine: "vietnamienne", type: "soupe",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53234",
    ingredients: [
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 750, unite: "ml" },
      { id: "pate-de-curry", quantite: 10, unite: "g" },
      { id: "nouilles-de-riz", quantite: 100, unite: "g" },
      { id: "champignons-shiitake", quantite: 100, unite: "g", ou: { id: "champignons", quantite: 100, unite: "g" } },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "saumon", quantite: 250, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "sucre", quantite: 2, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" }
    ],
    etapes: ["Préparer le bouillon de poulet (750 ml) avec le bouillon cube, porter à ébullition et ajouter la pâte de curry rouge. Ajouter les nouilles et cuire 8 min.", "Ajouter les champignons émincés et le maïs égoutté, et cuire encore 2 min.", "Ajouter le saumon en morceaux et cuire 3 min jusqu'à ce qu'il soit cuit. Hors du feu, ajouter le jus de citron vert, la sauce soja et une pincée de sucre. Servir dans des bols, parsemé de coriandre."]
  },
  {
    id: "papillotes-de-saumon-aux-nouilles", nom: "Papillotes de saumon aux nouilles, beurre piment-citron vert", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53248",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 100, unite: "g" },
      { id: "oignon-nouveau", quantite: 3, unite: "pièce" },
      { id: "petits-pois", quantite: 50, unite: "g" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "coriandre", quantite: 15, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "saumon", quantite: 300, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Beurre parfumé : écraser le beurre mou avec le piment haché, la coriandre hachée, le zeste et le jus du citron vert.", "Couvrir les nouilles d'eau bouillante et laisser 2 min : elles doivent être souples mais pas trop molles. Égoutter, puis mélanger avec les oignons nouveaux émincés, les petits pois, sel, poivre et un tiers du beurre parfumé.", "Répartir les nouilles sur deux grands carrés de papier cuisson et poser le saumon dessus. Couvrir du reste de beurre en tranches. Refermer le papier en pliant bien les bords pour qu'il n'y ait pas de trou.", "Cuire 15 à 20 min sur une plaque. Servir aussitôt."]
  },
  {
    id: "calmars-sel-et-poivre", nom: "Calmars sel et poivre", cuisine: "vietnamienne", type: "entree",
    difficulte: "moyen", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53233",
    ingredients: [
      { id: "fecule", quantite: 40, unite: "g" },
      { id: "farine", quantite: 40, unite: "g" },
      { id: "poivre", quantite: 5, unite: "g" },
      { id: "poivre-du-sichuan", quantite: 5, unite: "g", ou: { id: "poivre", quantite: 2, unite: "g" } },
      { id: "sel", quantite: 10, unite: "g" },
      { id: "huile-de-tournesol", quantite: 250, unite: "ml" },
      { id: "calmar", quantite: 200, unite: "g" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "piment-frais", quantite: 2, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 2, unite: "g" } },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "vinaigre-de-riz", quantite: 50, unite: "ml", ou: { id: "vinaigre", quantite: 50, unite: "ml" } },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "sauce-poisson", quantite: 5, unite: "ml", ou: { id: "sauce-soja", quantite: 5, unite: "ml" } }
    ],
    etapes: ["Sauce : mélanger un quart de concombre et un demi-oignon rouge hachés fin, un peu de piment, le vinaigre de riz, le sucre et la sauce poisson jusqu'à ce que le sucre soit fondu.", "Mélanger la fécule et la farine avec les deux poivres et 1 cuillère à café de gros sel. Préparer une assiette avec du papier absorbant.", "Chauffer l'huile à 180 °C dans une casserole profonde ou un wok (un dé de pain doit y dorer en 20 secondes). Couper les calmars en anneaux, bien les enrober du mélange de farine et les faire frire en plusieurs fois, environ 2 min, jusqu'à ce qu'ils soient croustillants.", "Égoutter sur le papier, saler un peu. Servir parsemé d'oignons nouveaux et de piment émincés, avec la sauce à côté."]
  },
  {
    id: "bar-au-gingembre-piment-et-oignons-nouveaux", nom: "Bar au gingembre, piment et oignons nouveaux grésillés", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53247",
    ingredients: [
      { id: "poisson-blanc", quantite: 300, unite: "g", ou: { id: "saumon", quantite: 300, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "gingembre", quantite: 15, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "oignon-nouveau", quantite: 3, unite: "pièce" },
      { id: "sauce-soja", quantite: 5, unite: "ml" }
    ],
    etapes: ["Saler et poivrer 2 filets de bar (ou un autre poisson blanc) et entailler la peau 3 fois.", "Chauffer une poêle avec 1 cuillère à soupe d'huile. Cuire les filets côté peau 5 min, jusqu'à ce que la peau soit bien croustillante. Les retourner, cuire 30 secondes à 1 min, puis les garder au chaud sur un plat.", "Chauffer le reste de l'huile et faire dorer 2 min le gingembre en bâtonnets, l'ail en lamelles et le piment émincé.", "Hors du feu, ajouter les oignons nouveaux émincés. Arroser le poisson de sauce soja et verser le contenu de la poêle par-dessus."]
  },
  {
    id: "salade-de-nouilles-au-steak", nom: "Salade de nouilles vietnamienne au steak", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53229",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 85, unite: "g" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" },
      { id: "steak-de-boeuf", quantite: 250, unite: "g" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "chou-chinois", quantite: 300, unite: "g", ou: { id: "chou", quantite: 300, unite: "g" } },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "vinaigre-de-riz", quantite: 5, unite: "ml", ou: { id: "vinaigre", quantite: 5, unite: "ml" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-poisson", quantite: 8, unite: "ml", ou: { id: "sauce-soja", quantite: 8, unite: "ml" } }
    ],
    etapes: ["Sauce : mélanger le piment émincé, le jus du citron vert, le sucre, le vinaigre de riz, l'ail haché, la sauce poisson et 1 cuillère à soupe d'eau jusqu'à ce que le sucre soit fondu.", "Cuire les nouilles comme indiqué sur le paquet et les plonger dans l'eau froide. Égoutter, puis mélanger avec les carottes râpées, le chou émincé, les oignons nouveaux et la sauce.", "Chauffer l'huile à feu vif. Saler le steak et le cuire selon votre goût (2 à 3 min de chaque côté pour saignant). Le laisser reposer 5 min puis le trancher.", "Répartir la salade dans les bols, poser le steak dessus et parsemer de coriandre."]
  },
  {
    id: "salade-acidulee-carotte-chou-oignon", nom: "Salade acidulée carotte, chou et oignon", cuisine: "vietnamienne", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53246",
    ingredients: [
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "chou", quantite: 300, unite: "g" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g" },
      { id: "cacahuetes", quantite: 20, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sucre", quantite: 8, unite: "g" }
    ],
    etapes: ["Mettre dans un saladier les carottes en fines lamelles, le chou (rouge de préférence) émincé et l'oignon rouge en fines tranches.", "Sauce : mélanger le jus du citron vert, l'huile, le piment haché et le sucre jusqu'à ce que le sucre soit fondu. Verser sur les légumes et mélanger.", "Ajouter la menthe et la coriandre, mélanger encore et parsemer de cacahuètes grillées."]
  },
  {
    id: "tofu-saute-legumes-verts-noix-de-cajou", nom: "Tofu sauté aux légumes verts et noix de cajou", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53240",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce" },
      { id: "petits-pois", quantite: 140, unite: "g" },
      { id: "pak-choi", quantite: 2, unite: "pièce", ou: { id: "epinards", quantite: 150, unite: "g" } },
      { id: "tofu", quantite: 300, unite: "g" },
      { id: "sauce-huitre", quantite: 25, unite: "ml", ou: { id: "sauce-soja", quantite: 25, unite: "ml" } },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "noix-de-cajou", quantite: 25, unite: "g", ou: { id: "cacahuetes", quantite: 25, unite: "g" } }
    ],
    etapes: ["Chauffer l'huile dans un wok antiadhésif. Faire sauter les bouquets de brocoli 5 min à feu vif, jusqu'à ce qu'ils soient juste tendres (ajouter un peu d'eau s'ils attachent).", "Ajouter l'ail et le piment émincés et cuire 1 min. Ajouter les oignons nouveaux, les petits pois (à l'origine : fèves de soja edamame), le pak choï et le tofu en dés. Faire sauter 2 à 3 min.", "Ajouter la sauce huître (à l'origine : sauce hoisin), la sauce soja et les noix de cajou, et laisser chauffer 1 min."]
  },
  {
    id: "banh-mi-a-la-dinde", nom: "Bánh mì à la dinde", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53249",
    ingredients: [
      { id: "baguette", quantite: 1, unite: "pièce", ou: { id: "pain", quantite: 4, unite: "tranche" } },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "blanc-de-dinde", quantite: 4, unite: "tranche", ou: { id: "jambon", quantite: 4, unite: "tranche" } },
      { id: "mayonnaise", quantite: 15, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "chou", quantite: 75, unite: "g" },
      { id: "gingembre", quantite: 3, unite: "g" },
      { id: "vinaigre-de-riz", quantite: 8, unite: "ml", ou: { id: "vinaigre", quantite: 8, unite: "ml" } },
      { id: "sucre", quantite: 3, unite: "g" }
    ],
    etapes: ["Légumes marinés : mettre les carottes et le chou (rouge de préférence) râpés dans un saladier. Mélanger le gingembre râpé, le vinaigre de riz, le sucre et quelques pincées de sel, verser sur les légumes et mélanger. Laisser au moins 15 min.", "Couper la baguette en deux morceaux, puis chacun en deux dans la longueur. Tartiner de pâté si vous en avez (à l'origine : pâté de foie de volaille).", "Garnir de légumes marinés, de tranches de concombre (un quart) et de dinde. Mélanger la mayonnaise avec un peu de piment haché et en mettre par-dessus. Ajouter la menthe et le reste du piment en rondelles, refermer et déguster."]
  },
  {
    id: "banh-mi-vegetarien", nom: "Bánh mì végétarien", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53250",
    ingredients: [
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "chou", quantite: 75, unite: "g" },
      { id: "vinaigre", quantite: 45, unite: "ml" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "baguette", quantite: 1, unite: "pièce", ou: { id: "pain", quantite: 4, unite: "tranche" } },
      { id: "houmous", quantite: 100, unite: "g", ou: { id: "mayonnaise", quantite: 50, unite: "g" } },
      { id: "tofu", quantite: 175, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "sauce-sriracha", quantite: 10, unite: "ml", optionnel: true }
    ],
    etapes: ["Mettre la carotte et le chou râpés dans un saladier avec le vinaigre, le sucre et 1 cuillère à café de sel. Mélanger et laisser mariner pendant la suite.", "Préchauffer le four à 180 °C. Couper la baguette en 4, puis chaque morceau en deux dans l'épaisseur. Faire griller 5 min au four.", "Si vous voulez, dorer le tofu en tranches 2 à 3 min de chaque côté à la poêle (à l'origine : tempeh).", "Tartiner chaque morceau de houmous. Sur la moitié des morceaux, poser le tofu et les légumes marinés, puis les herbes et un peu de sauce piquante. Refermer avec les autres morceaux."]
  },
  {
    id: "truite-au-caramel", nom: "Truite au caramel à la vietnamienne", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53228",
    ingredients: [
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "sauce-poisson", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "gingembre", quantite: 20, unite: "g" },
      { id: "truite", quantite: 300, unite: "g", ou: { id: "saumon", quantite: 300, unite: "g" } },
      { id: "pak-choi", quantite: 2, unite: "pièce", ou: { id: "epinards", quantite: 150, unite: "g" } },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Mettre le sucre dans une grande poêle avec un petit filet d'eau. Chauffer doucement en faisant tourner la poêle jusqu'à ce que le sucre fonde, puis plus fort jusqu'à obtenir un caramel brun foncé.", "Ajouter la sauce poisson, la plus grande partie du piment émincé et du gingembre en bâtonnets, puis 1 cuillère à soupe d'eau. Laisser bouillir jusqu'à ce que ce soit sirupeux. Poser les filets de truite côté peau et les pak choï coupés en deux, côté coupé en dessous.", "Couvrir et laisser frémir 4 à 5 min, jusqu'à ce que le poisson soit cuit. Hors du feu, arroser du jus d'un demi-citron et parsemer du reste de piment et de gingembre, et de coriandre. Servir avec le riz."]
  },
  {
    id: "salade-vietnamienne-au-poulet", nom: "Salade vietnamienne au poulet", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53232",
    ingredients: [
      { id: "nouilles-de-riz", quantite: 140, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "radis", quantite: 50, unite: "g", optionnel: true },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 10, unite: "g" },
      { id: "cacahuetes", quantite: 25, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "sauce-poisson", quantite: 20, unite: "ml", ou: { id: "sauce-soja", quantite: 20, unite: "ml" } },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "huile-de-sesame", quantite: 20, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 20, unite: "ml" } }
    ],
    etapes: ["Si le poulet est cru, le pocher 15 min dans de l'eau frémissante salée, le laisser tiédir et l'effilocher.", "Sauce : dans un grand saladier, fouetter le piment haché, le zeste et le jus du citron vert, la sauce poisson, la sauce soja et l'huile de sésame. Cuire les nouilles comme indiqué sur le paquet, les égoutter et les ajouter dans le saladier.", "Couper la carotte en longs rubans avec un économe, et un demi-concombre de la même façon jusqu'aux graines (les jeter). Les ajouter aux nouilles avec le poulet, les radis en rondelles, un demi-oignon rouge émincé et la menthe. Bien mélanger et parsemer de cacahuètes."]
  },
  {
    id: "bun-thit-nuong", nom: "Bún thịt nướng (porc grillé vietnamien)", cuisine: "vietnamienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "52828",
    ingredients: [
      { id: "filet-mignon-de-porc", quantite: 350, unite: "g", ou: { id: "poitrine-de-porc", quantite: 350, unite: "g" } },
      { id: "nouilles-de-riz", quantite: 150, unite: "g" },
      { id: "echalote", quantite: 2, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "sauce-poisson", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "sauce-soja", quantite: 8, unite: "ml" },
      { id: "poivre", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "cacahuetes", quantite: 20, unite: "g" }
    ],
    etapes: ["Couper le porc cru en tranches très fines (3 mm). C'est plus facile s'il a passé un moment au congélateur.", "Hacher l'ail et les échalotes. Les mélanger dans un saladier avec le sucre, la sauce poisson, la sauce soja, le poivre et l'huile, jusqu'à ce que le sucre soit fondu. Y faire mariner la viande 1 h (ou toute une nuit, c'est encore meilleur).", "Cuire le porc au four à 190 °C pendant 10 à 15 min, puis le faire dorer sous le gril en le retournant à mi-cuisson.", "Cuire les nouilles comme indiqué sur le paquet. Composer les bols : nouilles, concombre en tranches, porc grillé, menthe et cacahuètes concassées. Arroser d'un peu de sauce poisson (et ajouter des nems si vous en avez)."]
  },
  {
    id: "souris-d-agneau-vietnamiennes-patates-douces", nom: "Souris d'agneau vietnamiennes aux patates douces", cuisine: "vietnamienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 180, portions: 2,
    source: "TheMealDB", idSource: "53231",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "souris-d-agneau", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "gingembre", quantite: 15, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "anis-etoile", quantite: 2, unite: "pièce", ou: { id: "cinq-epices", quantite: 2, unite: "g" } },
      { id: "citronnelle", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sauce-tomate", quantite: 10, unite: "g" },
      { id: "patate-douce", quantite: 400, unite: "g" },
      { id: "sauce-poisson", quantite: 15, unite: "ml", ou: { id: "sauce-soja", quantite: 15, unite: "ml" } },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "basilic", quantite: 5, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 160 °C. Chauffer l'huile dans une cocotte, saler et poivrer les souris d'agneau et les dorer de tous côtés. Les retirer.", "Faire revenir l'oignon émincé 30 secondes à feu vif, ajouter le gingembre, l'ail et la moitié du piment hachés, baisser le feu et cuire 1 min.", "Ajouter les deux tiers du sucre, mélanger, puis l'anis étoilé, la citronnelle écrasée, 500 ml de bouillon (fait avec le bouillon cube, à l'origine : bouillon d'agneau) et le concentré de tomate. Remettre l'agneau et porter à ébullition.", "Couvrir et cuire au four 1 h 30, puis ajouter les patates douces en gros morceaux et cuire encore 1 h. La viande doit presque se détacher de l'os.", "Ajouter la sauce poisson, le jus du citron vert et le reste du sucre. Servir parsemé de menthe, de basilic et du reste du piment en rondelles."]
  },
  {
    id: "salade-de-porc-vietnamienne", nom: "Salade de porc vietnamienne", cuisine: "vietnamienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53237",
    ingredients: [
      { id: "sucre", quantite: 3, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "huile-de-sesame", quantite: 8, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 8, unite: "ml" } },
      { id: "sauce-poisson", quantite: 8, unite: "ml", ou: { id: "sauce-soja", quantite: 8, unite: "ml" } },
      { id: "sauce-soja", quantite: 8, unite: "ml" },
      { id: "graines-de-sesame", quantite: 3, unite: "g", optionnel: true },
      { id: "filet-mignon-de-porc", quantite: 250, unite: "g" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" },
      { id: "chou", quantite: 150, unite: "g" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 2, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "citronnelle", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "menthe", quantite: 5, unite: "g" }
    ],
    etapes: ["Sauce (la veille si possible) : chauffer le sucre avec le jus du citron vert et ½ cuillère à soupe d'eau jusqu'à ce que le sucre fonde. Ajouter la moitié du piment et la moitié de la coriandre, puis mixer. Ajouter l'huile de sésame, la sauce poisson, la sauce soja et les graines de sésame. Garder au frais.", "Préchauffer le four à 200 °C. Badigeonner le porc d'huile et le saisir de tous côtés dans une poêle très chaude, puis le cuire au four 10 à 12 min. Laisser refroidir, trancher finement et arroser de la moitié de la sauce.", "Mélanger le chou émincé, un demi-concombre et le céleri en morceaux, les oignons nouveaux, la citronnelle hachée très fin, le reste du piment, le zeste du citron vert, le reste de la coriandre et la menthe avec le reste de la sauce. Disposer sur un plat avec le porc par-dessus et son jus."]
  },
  {
    id: "rouleaux-crevettes-legumes-en-spirale", nom: "Rouleaux vietnamiens aux crevettes et légumes en spirale", cuisine: "vietnamienne", type: "entree",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53243",
    ingredients: [
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "vinaigre-de-riz", quantite: 30, unite: "ml", ou: { id: "vinaigre", quantite: 30, unite: "ml" } },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "sauce-poisson", quantite: 45, unite: "ml", ou: { id: "sauce-soja", quantite: 45, unite: "ml" } },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "eau", quantite: 50, unite: "ml" },
      { id: "feuilles-de-riz", quantite: 6, unite: "pièce" },
      { id: "menthe", quantite: 10, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Sauce : mélanger le jus d'un demi-citron vert, le vinaigre de riz, le sucre, la sauce poisson, le piment haché et 50 ml d'eau. Laisser le sucre fondre.", "Couper la carotte et la courgette en longs fils (avec un taille-légumes en spirale, ou râpées en gros).", "Remplir un grand bol d'eau tiède et poser un torchon propre humide sur le plan de travail. Tremper une feuille de riz quelques secondes jusqu'à ce qu'elle ramollisse et la poser sur le torchon.", "Mettre au centre quelques feuilles de menthe et de coriandre, deux crevettes (cuites) et une petite poignée de légumes. Rabattre les côtés sur la garniture puis rouler bien serré. Recommencer avec les autres feuilles. Couper en biais et servir avec la sauce."]
  },
  {
    id: "rouleaux-vietnamiens-poulet-legumes", nom: "Rouleaux vietnamiens au poulet et légumes", cuisine: "vietnamienne", type: "entree",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53241",
    ingredients: [
      { id: "feuilles-de-riz", quantite: 8, unite: "pièce" },
      { id: "nouilles-de-riz", quantite: 50, unite: "g" },
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "salade-verte", quantite: 1, unite: "pièce", optionnel: true },
      { id: "coriandre", quantite: 5, unite: "g" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "sauce-poisson", quantite: 45, unite: "ml", ou: { id: "sauce-soja", quantite: 45, unite: "ml" } },
      { id: "vinaigre-de-riz", quantite: 30, unite: "ml", ou: { id: "vinaigre", quantite: 30, unite: "ml" } },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } }
    ],
    etapes: ["Cuire le poulet (15 min à l'eau frémissante salée ou à la poêle) et le couper en lamelles. Couper la carotte, le concombre et le poivron (rouge de préférence) en bâtonnets fins.", "Tremper les feuilles de riz comme indiqué sur le paquet (ou 30 secondes dans l'eau chaude) et les poser sur du papier absorbant. Faire tremper les nouilles, les égoutter et les couper en morceaux de 2 cm.", "Sur une feuille de riz, poser un peu de nouilles, de poulet, de légumes et d'herbes au premier tiers, en laissant 1 cm de bord. Rabattre les côtés puis rouler en cigare. Continuer avec les autres feuilles. (Ils se gardent 1 jour au frais sous un papier absorbant humide.)", "Sauce : mélanger la sauce poisson, le vinaigre de riz, le jus d'un demi-citron vert et le piment émincé. Pour manger, envelopper chaque rouleau dans une feuille de salade avec un brin d'herbe et le tremper dans la sauce."]
  },
  {
    id: "porc-au-caramel", nom: "Porc au caramel à la vietnamienne", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53235",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "cote-de-porc", quantite: 2, unite: "pièce" },
      { id: "echalote", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "sauce-poisson", quantite: 10, unite: "ml", ou: { id: "sauce-soja", quantite: 10, unite: "ml" } },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "sauce-sriracha", quantite: 5, unite: "ml", optionnel: true },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "pak-choi", quantite: 2, unite: "pièce", optionnel: true }
    ],
    etapes: ["Cuire le riz. Couper les côtes de porc (échine de préférence) en morceaux, sans l'os.", "Chauffer la moitié de l'huile dans un wok à feu vif et dorer le porc en plusieurs fois. Le retirer.", "Baisser le feu, ajouter le reste de l'huile, l'échalote hachée, le gingembre râpé et le piment. Cuire doucement 2 min.", "Ajouter le sucre (roux de préférence), la sauce poisson et 100 ml d'eau. Porter à ébullition en remuant pour faire fondre le sucre, puis remettre le porc. Laisser bouillonner 8 à 10 min jusqu'à ce que la sauce épaississe et nappe la viande.", "Goûter, ajouter un peu de sauce poisson si besoin et la sauce pimentée. Parsemer d'oignons nouveaux et servir avec le riz et le pak choï cuit à la vapeur."]
  },
  {
    id: "mijote-de-legumes-a-la-vietnamienne", nom: "Mijoté de légumes à la vietnamienne", cuisine: "vietnamienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53236",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "gingembre", quantite: 20, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "potiron", quantite: 400, unite: "g", ou: { id: "patate-douce", quantite: 400, unite: "g" } },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "haricots-verts", quantite: 100, unite: "g" },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "riz", quantite: 150, unite: "g" }
    ],
    etapes: ["Cuire le riz.", "Chauffer l'huile dans une casserole avec couvercle. Faire revenir le gingembre et l'ail hachés fin pendant 5 min.", "Ajouter la courge (butternut ou potiron) en dés, la sauce soja, le sucre et 200 ml de bouillon de légumes. Couvrir et laisser mijoter 10 min.", "Retirer le couvercle, ajouter les haricots verts émincés et cuire 3 min de plus jusqu'à ce que tout soit tendre. Ajouter les oignons nouveaux émincés au dernier moment, parsemer de coriandre et servir avec le riz."]
  }
]);
