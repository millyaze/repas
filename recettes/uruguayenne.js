// ============================================================
// RECETTES : cuisine uruguayenne (9 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// La « confiture de lait » est le dulce de leche (rayon sucré ou épicerie latino).
// ============================================================
ajouterRecettes([
  {
    id: "empanadas-de-boeuf", nom: "Empanadas de bœuf (et sauce chimichurri)", cuisine: "uruguayenne", type: "plat",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53317",
    ingredients: [
      { id: "saindoux", quantite: 25, unite: "g", ou: { id: "beurre", quantite: 25, unite: "g" } },
      { id: "eau", quantite: 140, unite: "ml" },
      { id: "farine", quantite: 250, unite: "g" },
      { id: "origan", quantite: 3, unite: "g", ou: { id: "herbes-de-provence", quantite: 3, unite: "g" } },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "steak-de-boeuf", quantite: 300, unite: "g", ou: { id: "boeuf-hache", quantite: 300, unite: "g" } },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "vinaigre", quantite: 10, unite: "ml", optionnel: true },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Pâte : mélanger le saindoux fondu (ou du beurre), l'eau tiède et une pincée de sel. Ajouter la farine et 1 g d'origan, et pétrir 5 min. Couvrir et laisser reposer au moins 30 min (ou une nuit au frais).", "Garniture : plonger la tomate 30 secondes dans l'eau bouillante, la peler et la couper en dés. Faire fondre 1 gousse d'ail écrasée et l'oignon rouge en dés dans un peu d'huile, puis les retirer.", "Dans la même poêle à feu vif, dorer la viande coupée en petits dés (ou hachée). Ajouter 1 g d'origan, le paprika, le piment, un peu de persil, puis remettre l'oignon, l'ail, les oignons nouveaux émincés et la tomate. Laisser mijoter quelques minutes, saler, poivrer. Cuire 1 œuf dur, le couper en dés et l'ajouter.", "Préchauffer le four à 200 °C. Étaler la pâte finement et découper des disques de 12 cm. Mettre 2 à 3 cuillères à café de garniture au centre, mouiller le bord, replier en demi-lune et souder à la fourchette.", "Poser sur une plaque avec du papier cuisson, badigeonner avec l'autre œuf battu et cuire environ 25 min, jusqu'à ce que ce soit doré.", "Chimichurri : mélanger le reste du persil haché, la dernière gousse d'ail hachée, le reste d'origan, le vinaigre, le reste d'huile, une pincée de sel et de piment. Servir les empanadas tièdes avec cette sauce."]
  },
  {
    id: "chivito-pain-brioche-maison", nom: "Chivito au pain brioché maison (sandwich steak, jambon, œuf)", cuisine: "uruguayenne", type: "plat",
    difficulte: "difficile", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "53319",
    ingredients: [
      { id: "lait", quantite: 40, unite: "ml" },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "melasse", quantite: 8, unite: "g", ou: { id: "miel", quantite: 8, unite: "g" } },
      { id: "eau", quantite: 110, unite: "ml" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "farine", quantite: 250, unite: "g" },
      { id: "levure-de-boulanger", quantite: 5, unite: "g" },
      { id: "graines-de-sesame", quantite: 5, unite: "g", optionnel: true },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "steak-de-boeuf", quantite: 250, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "bacon", quantite: 2, unite: "tranche", ou: { id: "lardons", quantite: 60, unite: "g" } },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "mozzarella", quantite: 60, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "moutarde", quantite: 10, unite: "g" },
      { id: "persil", quantite: 10, unite: "g", optionnel: true },
      { id: "sel", quantite: 6, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille, pains : chauffer le lait avec 30 g de beurre et la mélasse jusqu'à ce que le beurre fonde. Ajouter l'eau froide et 1 œuf battu.", "Dans un saladier, mélanger la farine, 5 g de sel et la levure, verser le mélange au lait et remuer à la cuillère en bois jusqu'à ce que ce soit homogène (pas besoin de pétrir). Couvrir d'un torchon humide et mettre une nuit au réfrigérateur.", "Le lendemain, pétrir un peu la pâte sur un plan bien fariné et la partager en 4 boules. Les poser sur une plaque avec du papier cuisson, couvrir et laisser lever environ 1 h, jusqu'à ce qu'elles doublent.", "Préchauffer le four à 220 °C. Badigeonner les pains de lait (ou d'œuf battu), parsemer de sésame et cuire 15 à 20 min jusqu'à ce qu'ils soient dorés. Laisser refroidir (2 pains suffisent pour 2, les autres se congèlent).", "Garniture : faire caraméliser l'oignon émincé dans le reste du beurre 10 à 15 min en remuant de temps en temps. Frotter les steaks avec l'ail, puis les griller avec le bacon (ou les lardons). Cuire 2 œufs au plat. Saler, poivrer.", "Couper 2 pains en deux et les toaster. Tartiner de moutarde, puis empiler le steak, le jambon, la mozzarella en tranches, le bacon, une tranche de tomate et de la salade. Finir par l'œuf au plat, les oignons et un peu de persil haché (ou de chimichurri)."]
  },
  {
    id: "chivito-uruguayo", nom: "Chivito uruguayo (sandwich au steak, jambon, bacon et œuf)", cuisine: "uruguayenne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53063",
    ingredients: [
      { id: "poitrine-de-boeuf", quantite: 250, unite: "g", ou: { id: "steak-de-boeuf", quantite: 250, unite: "g" } },
      { id: "pain-a-burger", quantite: 2, unite: "pièce", ou: { id: "baguette", quantite: 1, unite: "pièce" } },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "mozzarella", quantite: 100, unite: "g" },
      { id: "bacon", quantite: 4, unite: "tranche", ou: { id: "lardons", quantite: 100, unite: "g" } },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce", optionnel: true },
      { id: "poivron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper la poitrine de bœuf en 2 tranches fines (ou prendre 2 steaks) et les aplatir au rouleau entre deux feuilles de papier cuisson pour qu'ils soient très fins, puis les saisir sur une plaque ou une poêle très chaude, 1 à 2 min de chaque côté. Saler, poivrer.", "Dans une autre poêle, faire revenir l'oignon et le poivron en lamelles avec un peu d'huile, puis cuire le bacon (ou les lardons), le jambon et les œufs au plat.", "Couper les pains en deux. Garnir avec le steak, l'œuf, le bacon, le jambon, la mozzarella en tranches, l'oignon et le poivron, la tomate en rondelles et la salade.", "Refermer avec l'autre moitié du pain et servir aussitôt."]
  },
  {
    id: "alfajores-au-chocolat", nom: "Alfajores au chocolat (biscuits fourrés à la confiture de lait)", cuisine: "uruguayenne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "53320",
    ingredients: [
      { id: "beurre", quantite: 125, unite: "g" },
      { id: "sucre", quantite: 35, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "miel", quantite: 12, unite: "g" },
      { id: "farine", quantite: 90, unite: "g" },
      { id: "fecule", quantite: 40, unite: "g" },
      { id: "cacao-en-poudre", quantite: 15, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "bicarbonate-de-soude", quantite: 2, unite: "g", optionnel: true },
      { id: "confiture-de-lait", quantite: 200, unite: "g" },
      { id: "chocolat-au-lait", quantite: 250, unite: "g", ou: { id: "chocolat-noir", quantite: 250, unite: "g" } },
      { id: "orange", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Biscuits : travailler 75 g de beurre mou avec le sucre quelques minutes. Ajouter l'œuf et le miel, bien mélanger, puis la farine, la fécule, le cacao, la levure et le bicarbonate, jusqu'à obtenir une pâte. Filmer et mettre au frais au moins 30 min.", "Préchauffer le four à 200 °C et couvrir deux plaques de papier cuisson.", "Étaler la pâte à 2 mm d'épaisseur et découper des ronds de 5 à 6 cm (avec un verre). On obtient une vingtaine de biscuits. Cuire 8 à 10 min, une plaque à la fois, et laisser refroidir.", "Assembler les biscuits deux par deux avec une cuillère à café de confiture de lait.", "Faire fondre doucement le chocolat haché avec le reste du beurre (50 g) et le zeste d'orange. Tremper chaque biscuit fourré dans le chocolat et laisser durcir sur du papier cuisson. Environ 5 alfajores par personne, ils se gardent quelques jours dans une boîte."]
  },
  {
    id: "empanadas-chocolat-confiture-de-lait", nom: "Empanadas au chocolat et à la confiture de lait", cuisine: "uruguayenne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 220, portions: 2,
    source: "TheMealDB", idSource: "53324",
    ingredients: [
      { id: "lait-concentre-sucre", quantite: 200, unite: "g", ou: { id: "confiture-de-lait", quantite: 200, unite: "g" } },
      { id: "farine", quantite: 125, unite: "g" },
      { id: "cacao-en-poudre", quantite: 12, unite: "g" },
      { id: "beurre", quantite: 80, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 25, unite: "ml" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Garniture : poser une boîte fermée de lait concentré sucré dans une grande casserole, la couvrir entièrement d'eau et faire bouillir 2 h 30 en rajoutant de l'eau de temps en temps. La laisser refroidir complètement avant de l'ouvrir : le lait est devenu de la confiture de lait (on en utilise la moitié). Plus rapide : prendre de la confiture de lait toute prête.", "Pâte : mélanger la farine, le cacao et le sel. Ajouter 65 g de beurre froid en petits morceaux et sabler du bout des doigts. Ajouter la moitié de l'œuf battu et former une pâte, en ajoutant du lait cuillère par cuillère si elle est trop sèche. Filmer et mettre au frais au moins 30 min.", "Préchauffer le four à 180 °C et couvrir une plaque de papier cuisson.", "Étaler la pâte finement sur le plan légèrement fariné et découper des disques de 12 cm. Mettre 2 à 3 cuillères à café de confiture de lait au centre, mouiller le bord avec un peu de lait, plier en demi-lune et souder à la fourchette.", "Poser sur la plaque, badigeonner avec le reste d'œuf battu et cuire 20 à 25 min.", "À la sortie du four, badigeonner aussitôt avec le reste du beurre fondu et saupoudrer du sucre mélangé à la cannelle. À déguster tiède (attention, la garniture est brûlante) ou froid."]
  },
  {
    id: "flan-au-caramel", nom: "Flan au caramel (et confiture de lait)", cuisine: "uruguayenne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "TheMealDB", idSource: "53322",
    ingredients: [
      { id: "sucre", quantite: 75, unite: "g" },
      { id: "lait", quantite: 175, unite: "ml" },
      { id: "gousse-de-vanille", quantite: 1, unite: "pièce", optionnel: true, ou: { id: "extrait-de-vanille", quantite: 3, unite: "ml" } },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "confiture-de-lait", quantite: 40, unite: "g", optionnel: true }
    ],
    etapes: ["Caramel : faire fondre 50 g de sucre à sec dans une poêle à feu moyen, sans remuer à la cuillère mais en faisant tourner la poêle. Quand il est ambré et entièrement fondu, le verser vite au fond de 2 ramequins (il durcit tout de suite).", "Préchauffer le four à 150 °C et prendre un plat dans lequel les ramequins tiennent.", "Chauffer le lait avec le reste du sucre et la gousse de vanille fendue et grattée (la retirer après quelques minutes), sans le faire bouillir. Mélanger doucement 1 œuf entier et 2 jaunes sans faire de mousse, puis verser le lait dessus en remuant doucement.", "Verser dans les ramequins, les poser dans le plat et verser de l'eau bouillante dans le plat jusqu'à mi-hauteur des ramequins, sans en mettre dans les flans.", "Cuire 35 à 40 min au milieu du four : la pointe d'un couteau doit ressortir propre. Laisser refroidir 1 h, puis mettre une nuit au réfrigérateur.", "Passer un couteau sur le bord et retourner sur une assiette. Servir avec un peu de confiture de lait à côté."]
  },
  {
    id: "postre-chaja", nom: "Postre chajá (gâteau meringué aux pêches, crème et confiture de lait)", cuisine: "uruguayenne", type: "dessert",
    difficulte: "difficile", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "53323",
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "sucre", quantite: 120, unite: "g" },
      { id: "farine", quantite: 40, unite: "g" },
      { id: "fecule", quantite: 18, unite: "g" },
      { id: "confiture-de-lait", quantite: 100, unite: "g" },
      { id: "creme-fraiche", quantite: 200, unite: "ml" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true },
      { id: "peches-au-sirop", quantite: 1, unite: "boîte" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Génoise : préchauffer le four à 180 °C et chemiser de papier cuisson un moule de 15 à 18 cm. Séparer 3 œufs. Monter les blancs en neige souple avec une pincée de sel. Fouetter les jaunes avec 50 g de sucre plusieurs minutes, jusqu'à ce qu'ils blanchissent et soient crémeux.", "Verser un tiers des blancs sur les jaunes, tamiser dessus 40 g de farine et 15 g de fécule, et mélanger délicatement à la spatule. Ajouter le reste des blancs sans les casser. Verser dans le moule et enfourner aussitôt pour 25 min. Laisser refroidir avant de démouler.", "Meringue : monter le blanc du 4e œuf en neige avec une pincée de sel, puis ajouter 50 g de sucre en continuant de battre 3 min, jusqu'à ce qu'il soit brillant. Former des petits tas sur du papier cuisson et les sécher 45 min au four à 100 °C.", "Garniture : fouetter la crème bien froide (liquide entière) avec 20 g de sucre et la vanille en chantilly ferme. Égoutter les pêches en gardant 50 ml de sirop, et les couper en fines lamelles.", "Couper la génoise froide en 2 disques. Imbiber le premier d'un peu de sirop, étaler une couche de chantilly, la confiture de lait et la moitié des pêches. Poser le second disque, l'imbiber, couvrir de chantilly sur le dessus et les côtés, et disposer le reste des pêches.", "Chauffer le reste du sirop, y ajouter 3 g de fécule délayée dans un peu d'eau et remuer jusqu'à ce que ça épaississe : napper les pêches du dessus. Émietter la meringue et la coller sur les côtés. Servir aussitôt."]
  },
  {
    id: "torta-de-fiambre", nom: "Torta de fiambre (gâteau salé jambon-fromage)", cuisine: "uruguayenne", type: "plat",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53318",
    ingredients: [
      { id: "cheddar", quantite: 80, unite: "g", ou: { id: "fromage-rape", quantite: 80, unite: "g" } },
      { id: "jambon", quantite: 3, unite: "tranche" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 50, unite: "ml" },
      { id: "lait", quantite: 120, unite: "ml" },
      { id: "farine", quantite: 60, unite: "g" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "origan", quantite: 1, unite: "g", optionnel: true, ou: { id: "herbes-de-provence", quantite: 1, unite: "g" } },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 220 °C. Chemiser de papier cuisson un petit moule de 15 à 18 cm, en laissant dépasser le papier (la pâte est très liquide).", "Râper le fromage et couper le jambon en morceaux.", "Mélanger 1 à 2 min les œufs, l'huile, le lait, la farine, la levure, le sel et l'origan.", "Verser la moitié de la pâte dans le moule, répartir dessus le jambon et le fromage, puis verser le reste de la pâte.", "Cuire 20 à 25 min, jusqu'à ce que le dessus soit doré. Attendre quelques minutes avant de démouler. Se mange chaud ou froid, avec des herbes fraîches et une salade."]
  },
  {
    id: "alfajores-vanille-et-coco", nom: "Alfajores à la vanille et à la noix de coco", cuisine: "uruguayenne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53321",
    ingredients: [
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "fecule", quantite: 100, unite: "g" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true },
      { id: "confiture-de-lait", quantite: 150, unite: "g" },
      { id: "noix-de-coco-rapee", quantite: 50, unite: "g" }
    ],
    etapes: ["Travailler le beurre mou 1 min, ajouter le sucre et battre encore 2 min. Incorporer l'œuf, puis la fécule, la farine, la levure et la vanille. Former une boule, filmer et mettre au frais au moins 30 min.", "Préchauffer le four à 180 °C et couvrir deux plaques de papier cuisson.", "Étaler la pâte assez épaisse (5 mm) sur le plan légèrement fariné et découper des ronds de 6 cm environ (avec un verre).", "Cuire 8 à 10 min : les biscuits doivent rester très pâles. Laisser refroidir.", "Mettre une cuillère à café de confiture de lait sur la moitié des biscuits, couvrir avec les autres en appuyant pour que la confiture arrive au bord, puis rouler la tranche dans la noix de coco râpée. Environ 5 alfajores par personne."]
  }
]);
