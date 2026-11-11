// ============================================================
// RECETTES : cuisine saoudienne (9 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "shawarma-de-poulet-sauce-yaourt-ail", nom: "Shawarma de poulet, sauce yaourt à l'ail et aux herbes", cuisine: "saoudienne",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53218",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "graines-de-coriandre", quantite: 3, unite: "g" },
      { id: "cumin", quantite: 4, unite: "g" },
      { id: "cardamome", quantite: 2, unite: "g", optionnel: true },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "paprika", quantite: 4, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "yaourt-grec", quantite: 120, unite: "g", ou: { id: "yaourt-nature", quantite: 1, unite: "pièce" } },
      { id: "menthe", quantite: 5, unite: "g", optionnel: true },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "pain-pita", quantite: 2, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 2, unite: "pièce" } },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "salade-verte", quantite: 1, unite: "pièce", optionnel: true },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "feta", quantite: 50, unite: "g", optionnel: true },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper le poulet en fines lamelles. Le mélanger dans un saladier avec 1 gousse d'ail écrasée, la coriandre moulue, 3 g de cumin, la cardamome, le piment, le paprika, le jus d'un demi-citron, 2 cuillères à soupe d'huile, le sel et le poivre. Laisser mariner au frais au moins 1 h (une nuit, c'est encore mieux).", "Frites : couper les pommes de terre en bâtonnets, les mélanger avec 1 cuillère à soupe d'huile et une pincée de sel, et les cuire 25 à 30 min au four à 220 °C en les retournant à mi-cuisson.", "Sauce : mélanger le yaourt avec la deuxième gousse d'ail écrasée, la menthe et le persil hachés, le reste du cumin, un filet de jus de citron et une pincée de sel.", "Faire chauffer une poêle à feu vif avec un filet d'huile et y saisir le poulet en 2 fois, 5 à 8 min, jusqu'à ce qu'il soit bien doré et cuit à cœur.", "Réchauffer les pains pita à la poêle. Les tartiner de sauce, garnir de salade, d'oignon et de tomate en lamelles, de frites, de poulet et de feta émiettée, puis remettre un peu de sauce. Servir tout de suite."]
  },
  {
    id: "kabsa-au-poulet", nom: "Kabsa (riz épicé au poulet et aux légumes)", cuisine: "saoudienne",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53220",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "riz", quantite: 180, unite: "g" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "champignons", quantite: 60, unite: "g" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte", optionnel: true },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "raisins-secs", quantite: 30, unite: "g" },
      { id: "curcuma", quantite: 2, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 1000, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une cocotte, faire dorer le poulet dans 1 cuillère à soupe d'huile, puis le couvrir d'environ 500 ml d'eau, ajouter le bouillon cube et laisser cuire 30 min à petits bouillons.", "Pendant ce temps, dans une autre cocotte, faire revenir dans le reste d'huile les poivrons, les carottes et les champignons coupés en petits morceaux, 10 min, jusqu'à ce qu'ils soient tendres et un peu dorés.", "Ajouter aux légumes le riz rincé, les raisins secs, le maïs égoutté, le curcuma, le cumin, la cannelle (ces épices remplacent le mélange « kabsa »), le sel et le poivre. Remuer 1 min.", "Verser 450 ml du bouillon de cuisson du poulet (compléter avec de l'eau si besoin), couvrir et cuire 15 min à feu doux, jusqu'à ce que le riz ait tout absorbé.", "Poser le poulet sur le riz et passer le tout 10 min au four à 200 °C pour dorer la peau. Servir dans un grand plat."]
  },
  {
    id: "knafeh", nom: "Knafeh (gâteau de cheveux d'ange au fromage et au sirop)", cuisine: "saoudienne",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53216",
    ingredients: [
      { id: "pate-kadaif", quantite: 100, unite: "g", ou: { id: "pate-filo", quantite: 100, unite: "g" } },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "mozzarella", quantite: 60, unite: "g" },
      { id: "ricotta", quantite: 30, unite: "g" },
      { id: "lait", quantite: 90, unite: "ml" },
      { id: "fecule", quantite: 8, unite: "g" },
      { id: "sucre", quantite: 75, unite: "g" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "eau-de-rose", quantite: 2, unite: "ml", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Couper grossièrement la pâte kadaïf (ou la pâte filo en fines lanières) et la mélanger avec le beurre fondu, à la main.", "Crème au fromage : dans une casserole, mélanger le lait, la ricotta, 15 g de sucre et la fécule. Faire chauffer en remuant jusqu'à ce que ça épaississe, couper le feu, laisser tiédir puis ajouter la mozzarella coupée en petits morceaux.", "Tasser la moitié de la pâte au fond d'un petit plat, étaler la crème au fromage par-dessus, puis couvrir avec le reste de pâte en appuyant doucement.", "Cuire 20 à 25 min au four, jusqu'à ce que le dessus soit doré et croustillant.", "Sirop : pendant la cuisson, faire bouillir l'eau avec le reste du sucre 4 à 5 min, jusqu'à ce qu'il épaississe un peu. Ajouter quelques gouttes de jus de citron et l'eau de rose.", "Verser le sirop sur le knafeh dès la sortie du four et servir tiède."]
  },
  {
    id: "maamoul-biscuits-aux-dattes", nom: "Maamoul (biscuits de l'Aïd fourrés aux dattes)", cuisine: "saoudienne",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53221",
    ingredients: [
      { id: "farine", quantite: 75, unite: "g" },
      { id: "semoule", quantite: 50, unite: "g" },
      { id: "huile-de-tournesol", quantite: 6, unite: "ml" },
      { id: "beurre", quantite: 70, unite: "g" },
      { id: "lait", quantite: 15, unite: "ml" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "dattes", quantite: 100, unite: "g" },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "eau", quantite: 15, unite: "ml" }
    ],
    etapes: ["Pâte : travailler 60 g de beurre mou avec le sucre jusqu'à ce que ce soit crémeux. Ajouter l'huile, la farine et la semoule et mélanger, puis le lait tiède, sans trop pétrir. Couvrir et laisser reposer jusqu'à 1 h.", "Farce : dénoyauter les dattes et les écraser en pâte. Faire griller les graines de sésame à sec dans une poêle, ajouter le reste du beurre puis la pâte de dattes, et mélanger avec un peu d'eau jusqu'à obtenir une pâte souple (pas trop molle).", "Laisser refroidir la farce, la façonner en petites boules d'environ 15 g et les mettre 30 min au frais.", "Préchauffer le four à 180 °C. Façonner la pâte en boules de 30 g, les creuser, y mettre une boule de dattes et refermer. Aplatir légèrement (dessiner des stries à la fourchette si on n'a pas de moule à maamoul).", "Cuire 20 min, jusqu'à ce que le dessous soit doré et le dessus à peine coloré. Laisser refroidir avant de les manipuler."]
  },
  {
    id: "mutabbaq", nom: "Mutabbaq (chaussons croustillants à la viande hachée)", cuisine: "saoudienne",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53223",
    ingredients: [
      { id: "boeuf-hache", quantite: 250, unite: "g", ou: { id: "agneau-hache", quantite: 250, unite: "g" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "pate-filo", quantite: 120, unite: "g" },
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 2, unite: "g", ou: { id: "cannelle", quantite: 1, unite: "g" } },
      { id: "curcuma", quantite: 2, unite: "g" },
      { id: "sucre", quantite: 2, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire chauffer un peu d'huile dans une poêle, y faire revenir l'ail et le gingembre écrasés 1 min, puis ajouter la viande et toutes les épices (paprika, cumin, piment de la Jamaïque, curcuma, sucre, sel, poivre). Cuire jusqu'à ce que la viande soit bien cuite, puis laisser refroidir.", "Dans un saladier, mélanger la viande refroidie avec l'œuf battu, la tomate et les oignons nouveaux hachés.", "Superposer 2 feuilles de pâte filo badigeonnées de beurre fondu, mettre une portion de farce au centre et replier en carré bien fermé. Beurrer la soudure. Recommencer avec le reste (4 chaussons environ).", "Cuire les chaussons à la poêle dans un peu d'huile, sur les deux faces et les bords, jusqu'à ce qu'ils soient bien dorés (ou les badigeonner de beurre et les cuire 10 à 15 min au four à 180 °C). Servir chaud."]
  },
  {
    id: "chakchouka-feta-epinards", nom: "Chakchouka à la feta et aux épinards", cuisine: "saoudienne",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53219",
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "sauce-tomate", quantite: 50, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "echalote", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "celeri-branche", quantite: 1, unite: "pièce", optionnel: true },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "epinards", quantite: 30, unite: "g" },
      { id: "feta", quantite: 70, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "pain", quantite: 4, unite: "tranche", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire chauffer l'huile dans une poêle à feu moyen-vif. Ajouter l'échalote, l'ail, le céleri et le poivron hachés, et faire revenir 5 min en remuant.", "Ajouter le cumin, le sel, le poivre et la sauce tomate, et laisser cuire encore 7 min.", "Creuser 4 trous dans la sauce, y casser les œufs, couvrir et laisser cuire 8 min.", "À la fin, ajouter les épinards frais et la feta émiettée. Servir avec du pain frais."]
  },
  {
    id: "pain-a-shawarma", nom: "Pain à shawarma (galettes à la poêle)", cuisine: "saoudienne",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53226",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 2, unite: "g" },
      { id: "sucre", quantite: 2, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 70, unite: "ml" },
      { id: "sel", quantite: 5, unite: "g" }
    ],
    etapes: ["Tamiser la farine et la mélanger avec la levure chimique, le sel, le sucre et l'huile.", "Ajouter l'eau petit à petit et pétrir 10 min, jusqu'à obtenir une pâte souple.", "Couvrir et laisser reposer 20 min.", "Partager la pâte en 2 ou 3 boules et les étaler en disques fins (on peut s'aider d'une assiette pour faire un beau rond).", "Cuire chaque galette dans une poêle bien chaude, sans matière grasse : quand elle gonfle, la retourner et cuire l'autre face 1 à 2 min. Garder les galettes au chaud dans un torchon : elles restent souples et forment une poche."]
  },
  {
    id: "wrap-shawarma-de-boeuf-confit", nom: "Wraps shawarma au bœuf confit aux épices", cuisine: "saoudienne",
    difficulte: "facile", tempsMinutes: 210, portions: 2,
    source: "TheMealDB", idSource: "53217",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 500, unite: "g", ou: { id: "steak-de-boeuf", quantite: 400, unite: "g" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "cumin", quantite: 4, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "curcuma", quantite: 2, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "graines-de-coriandre", quantite: 1, unite: "g" },
      { id: "pain-pita", quantite: 2, unite: "pièce", ou: { id: "tortilla-de-ble", quantite: 2, unite: "pièce" } },
      { id: "yaourt-grec", quantite: 80, unite: "g", ou: { id: "yaourt-nature", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "tomate", quantite: 1, unite: "pièce", optionnel: true },
      { id: "salade-verte", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Dans une cocotte, mélanger toutes les épices (cumin, paprika, gingembre râpé, curcuma, piment, cannelle, coriandre moulue), le sel, l'eau, le bouillon cube émietté et le jus du citron.", "Ajouter le bœuf en gros morceaux et bien l'enrober de sauce. Couvrir et cuire 3 h au four à 150 °C (ou 8 h à la mijoteuse en position douce), jusqu'à ce que la viande s'effiloche toute seule.", "Sortir la viande, l'effilocher avec deux fourchettes en retirant le gras. Dégraisser le jus de cuisson et y remettre la viande effilochée. Garder au chaud.", "Sauce à l'ail : mélanger le yaourt avec l'ail écrasé et une pincée de sel.", "Tartiner les pains de sauce, garnir de bœuf, de tomate et de salade, rouler comme un burrito puis faire griller le wrap 1 à 2 min de chaque côté dans une poêle chaude."]
  },
  {
    id: "lahsa-yemenite", nom: "Lahsa yéménite (œufs brouillés à la tomate et au fromage)", cuisine: "saoudienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53225",
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "piment-de-la-jamaique", quantite: 1, unite: "g", ou: { id: "cannelle", quantite: 1, unite: "g" } },
      { id: "fromage-rape", quantite: 40, unite: "g" },
      { id: "olives-noires", quantite: 30, unite: "g", optionnel: true },
      { id: "feta", quantite: 50, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire chauffer l'huile à feu moyen et y faire fondre l'oignon en dés jusqu'à ce qu'il soit tendre.", "Ajouter la tomate en dés et cuire 4 à 5 min, puis le piment de la Jamaïque, le sel et le poivre.", "Ajouter les œufs et mélanger 2 min, puis couvrir et laisser cuire 5 à 6 min, jusqu'à ce que le dessus soit pris.", "Parsemer de fromage (fromage fondu à tartiner dans la recette d'origine), couvrir encore 1 min pour qu'il fonde. Servir avec des olives et de la feta si on en a."]
  }
]);
