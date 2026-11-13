// ============================================================
// RECETTES : cuisine australienne (13 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "biscuits-anzac", nom: "Biscuits Anzac (avoine et noix de coco)", cuisine: "australienne", type: "dessert",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53111",
    ingredients: [
      { id: "flocons-d-avoine", quantite: 45, unite: "g" },
      { id: "noix-de-coco-rapee", quantite: 45, unite: "g" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "golden-syrup", quantite: 10, unite: "g", ou: { id: "miel", quantite: 10, unite: "g" } },
      { id: "bicarbonate", quantite: 3, unite: "g", ou: { id: "levure-chimique", quantite: 3, unite: "g" } },
      { id: "eau", quantite: 15, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Mélanger dans un saladier les flocons d'avoine, la noix de coco, la farine et le sucre.", "Faire fondre le beurre dans une petite casserole et y mélanger le golden syrup (ou le miel). Délayer le bicarbonate dans 1 cuillère à soupe d'eau bouillante et l'ajouter au beurre.", "Creuser un puits dans les ingrédients secs, verser le mélange au beurre et remuer doucement pour tout lier.", "Déposer des petits tas (1 cuillère à dessert) sur une plaque beurrée, espacés de 3 cm car ils s'étalent. Cuire 8 à 10 min jusqu'à ce qu'ils soient dorés, puis laisser refroidir sur une grille (environ 8 biscuits)."]
  },
  {
    id: "burgers-australiens-betterave", nom: "Burgers australiens à la betterave et roquette", cuisine: "australienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53099",
    ingredients: [
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "betterave-cuite", quantite: 50, unite: "g" },
      { id: "pain-naan", quantite: 1, unite: "pièce", ou: { id: "pain-pita", quantite: 1, unite: "pièce" } },
      { id: "roquette", quantite: 25, unite: "g", ou: { id: "salade-verte", quantite: 1, unite: "pièce" } },
      { id: "creme-aigre", quantite: 30, unite: "ml", ou: { id: "creme-fraiche", quantite: 30, unite: "ml" } },
      { id: "ciboulette", quantite: 3, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Saler et poivrer la viande, la mélanger avec les mains mouillées et former 2 steaks (ils se congèlent à ce stade).", "Trancher la betterave. Mélanger la crème aigre avec la ciboulette ciselée. Ouvrir le pain naan en deux dans l'épaisseur.", "Griller le pain des deux côtés dans une poêle-gril bien chaude, puis cuire les steaks 2 à 3 min de chaque côté.", "Dresser : une moitié de pain par assiette, un tas de roquette, le steak, quelques tranches de betterave et une cuillerée de crème. Saler, poivrer et servir tout de suite, avec une salade verte ou des frites."]
  },
  {
    id: "dip-avocat-pommes-de-terre-rotie", nom: "Dip à l'avocat et pommes de terre rôties au cumin", cuisine: "australienne", type: "entree",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53107",
    ingredients: [
      { id: "avocat", quantite: 1, unite: "pièce" },
      { id: "yaourt-nature", quantite: 1, unite: "pièce", ou: { id: "yaourt-grec", quantite: 70, unite: "g" } },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "chips-de-tortilla", quantite: 70, unite: "g", optionnel: true, ou: { id: "tortilla-de-ble", quantite: 2, unite: "pièce" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dip : mixer la moitié de l'avocat avec le yaourt, le jus du citron vert, un filet de jus de citron, du sel et du poivre. Couper le reste de l'avocat en dés et l'incorporer avec la moitié du zeste de citron vert. Couvrir et garder au frais.", "Cuire les pommes de terre (petites, ou coupées en morceaux) 6 min dans l'eau bouillante, bien les égoutter et les mélanger avec l'huile, le piment et le cumin (en graines de préférence).", "Les rôtir environ 30 min au four à 200 °C en secouant la plaque à mi-cuisson, jusqu'à ce qu'elles soient dorées.", "Parsemer le dip du reste de zeste et servir avec les pommes de terre chaudes et les chips de tortilla pour tremper (à défaut, des tortillas coupées en triangles et passées 5 min au four)."]
  },
  {
    id: "poisson-aux-epices-marocaines", nom: "Poisson rôti aux épices marocaines (barramundi)", cuisine: "australienne", type: "plat",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53103",
    ingredients: [
      { id: "poisson-blanc", quantite: 400, unite: "g", ou: { id: "truite", quantite: 400, unite: "g" } },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "graines-de-coriandre", quantite: 1, unite: "g" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "coriandre", quantite: 15, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Mixer le cumin, la coriandre en graines (moulue), le paprika, le piment, l'ail, le jus du citron, l'huile, la coriandre fraîche et une pincée de sel pour obtenir une sauce.", "Le barramundi est un poisson australien presque introuvable en France : le remplacer par un poisson blanc entier (bar, daurade) ou une truite. Entailler le poisson 3 fois de chaque côté, l'enrober de la moitié de la sauce et laisser mariner 30 min.", "Préchauffer le four à 220 °C. Cuire le poisson sur une plaque 20 min (10 à 12 min pour des filets), jusqu'à ce que la chair soit ferme.", "Servir avec le reste de sauce, et de la semoule ou du riz."]
  },
  {
    id: "friands-citron-myrtilles", nom: "Friands au citron et aux myrtilles", cuisine: "australienne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53100",
    ingredients: [
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "sucre-glace", quantite: 60, unite: "g", ou: { id: "sucre", quantite: 60, unite: "g" } },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "poudre-d-amandes", quantite: 45, unite: "g", ou: { id: "amandes", quantite: 45, unite: "g" } },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "myrtilles", quantite: 45, unite: "g", ou: { id: "fruits-rouges-surgeles", quantite: 45, unite: "g" } }
    ],
    etapes: ["Préchauffer le four à 200 °C (180 °C chaleur tournante). Bien beurrer 3 ou 4 moules à muffins. Faire fondre le beurre et le laisser tiédir.", "Tamiser le sucre glace et la farine dans un saladier, ajouter la poudre d'amandes (ou des amandes mixées finement) et mélanger du bout des doigts.", "Séparer les blancs des jaunes (garder les jaunes pour une autre recette). Battre les blancs en mousse légère, juste mousseuse. Les verser au centre des ingrédients secs avec le zeste du citron, puis incorporer doucement le beurre fondu.", "Répartir la pâte dans les moules, parsemer de myrtilles (ou de mûres) et cuire 15 à 20 min jusqu'à ce que les gâteaux soient dorés et juste fermes.", "Laisser 5 min dans les moules, démouler et laisser refroidir sur une grille. Saupoudrer d'un peu de sucre glace."]
  },
  {
    id: "carres-chocolat-coco", nom: "Carrés au chocolat et à la noix de coco", cuisine: "australienne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53101",
    ingredients: [
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 70, unite: "g" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "cacao-en-poudre", quantite: 10, unite: "g" },
      { id: "lait", quantite: 15, unite: "ml" },
      { id: "chocolat-noir", quantite: 50, unite: "g" },
      { id: "sucre-glace", quantite: 50, unite: "g" },
      { id: "noix-de-coco-rapee", quantite: 50, unite: "g" },
      { id: "eau", quantite: 30, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Beurrer un petit moule carré (environ 15 cm) et en tapisser le fond de papier cuisson.", "Battre 50 g de beurre avec le sucre jusqu'à ce que le mélange blanchisse, puis ajouter l'œuf.", "Tamiser la farine, la levure et le cacao, les incorporer à la cuillère puis ajouter le lait. Verser dans le moule, lisser et cuire 15 à 18 min, jusqu'à ce que le gâteau reprenne sa forme quand on appuie dessus. Laisser refroidir dans le moule.", "Glaçage : faire fondre doucement le chocolat avec le reste du beurre et 2 cuillères à soupe d'eau. Laisser tiédir, puis y fouetter le sucre glace.", "Démouler le gâteau et le couper en 8 carrés. Tremper chaque carré dans le glaçage, puis le rouler dans la noix de coco. Laisser prendre sur une grille."]
  },
  {
    id: "lamingtons", nom: "Lamingtons (carrés de génoise chocolat-coco)", cuisine: "australienne", type: "dessert",
    difficulte: "difficile", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53104",
    ingredients: [
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "sucre", quantite: 85, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 85, unite: "g" },
      { id: "levure-chimique", quantite: 4, unite: "g" },
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "creme-liquide", quantite: 80, unite: "ml", ou: { id: "creme-fraiche", quantite: 80, unite: "ml" } },
      { id: "sucre-glace", quantite: 110, unite: "g" },
      { id: "confiture", quantite: 60, unite: "g" },
      { id: "noix-de-coco-rapee", quantite: 120, unite: "g" },
      { id: "cacao-en-poudre", quantite: 15, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C (180 °C chaleur tournante). Beurrer et tapisser de papier cuisson un petit moule rectangulaire (environ 15 x 20 cm).", "Battre 25 g de beurre avec le sucre jusqu'à ce que ce soit pâle et mousseux. Ajouter l'œuf, puis la farine, la levure, 1 cuillère à soupe de lait et le sel. Verser dans le moule et cuire 20 à 25 min jusqu'à ce que le gâteau soit doré et ferme. Laisser refroidir complètement.", "Couper la génoise en deux dans l'épaisseur. Fouetter la crème avec 1 cuillère à soupe de sucre glace en chantilly souple. Tartiner une moitié de confiture de framboise puis de crème, et refermer. Couper en 6 carrés et mettre au frais.", "Glaçage : faire fondre le reste du beurre avec le reste du lait. Mélanger le cacao et le reste du sucre glace, puis l'ajouter petit à petit en fouettant pour éviter les grumeaux.", "Mettre la noix de coco dans une assiette creuse. Tremper chaque carré dans le glaçage pour bien le couvrir, puis le rouler dans la noix de coco. Poser sur une grille et laisser au frais au moins 1 h."]
  },
  {
    id: "mini-tourtes-boeuf-chili", nom: "Mini-tourtes au chili de bœuf et purée", cuisine: "australienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "TheMealDB", idSource: "53109",
    ingredients: [
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 3, unite: "g" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "boeuf-hache", quantite: 150, unite: "g" },
      { id: "concentre-de-tomate", quantite: 50, unite: "g", ou: { id: "sauce-tomate", quantite: 100, unite: "g" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "creme-aigre", quantite: 30, unite: "ml", ou: { id: "creme-fraiche", quantite: 30, unite: "ml" } },
      { id: "ciboulette", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chili : faire revenir l'oignon haché dans l'huile 5 min. Ajouter le piment et le cumin, cuire 1 min, puis la viande quelques minutes. Ajouter le concentré de tomate, le bouillon cube délayé dans l'eau et une pincée de cannelle. Porter à ébullition puis laisser mijoter 15 à 20 min jusqu'à ce qu'il reste très peu de liquide. Ajouter la moitié des haricots égouttés 5 min avant la fin (garder le reste pour une autre fois). Rectifier l'assaisonnement et laisser refroidir.", "Préchauffer le four à 200 °C. Découper des disques de pâte de 7 cm, en garnir un moule à mini-muffins (environ 12), piquer le fond et cuire 10 min. Laisser refroidir.", "Pendant ce temps, cuire la pomme de terre à l'eau, l'écraser avec la crème aigre, du sel et du poivre, puis ajouter la ciboulette ciselée.", "Remplir chaque fond de pâte avec 1 à 2 cuillères à café de chili, couvrir d'une cuillère à café de purée, la strier à la fourchette et remettre 15 min au four jusqu'à ce que ce soit doré."]
  },
  {
    id: "calmar-grille-sel-poivre-cinq-epices", nom: "Calmar grillé sel, poivre et cinq-épices", cuisine: "australienne", type: "entree",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53108",
    ingredients: [
      { id: "calmar", quantite: 400, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "cinq-epices", quantite: 1, unite: "g" },
      { id: "huile-de-sesame", quantite: 5, unite: "ml" },
      { id: "coriandre", quantite: 5, unite: "g" },
      { id: "sauce-chili-douce", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 8, unite: "g" },
      { id: "poivre", quantite: 4, unite: "g" }
    ],
    etapes: ["Ouvrir les calmars nettoyés aux ciseaux, bien les laver et les sécher. Couper les gros en 4 carrés, ouvrir simplement les petits.", "Quadriller le dessus avec la pointe d'un couteau bien aiguisé et badigeonner d'huile.", "Mélanger le sel (gros sel de préférence), le cinq-épices et le poivre moulu. En saupoudrer les deux faces des calmars juste avant la cuisson (on n'utilise pas forcément tout).", "Cuire environ 1 min de chaque côté dans une poêle-gril (ou au barbecue) très chaude, jusqu'à ce qu'ils s'enroulent. Arroser d'un filet d'huile de sésame, parsemer de coriandre et servir avec la sauce chili douce pour tremper."]
  },
  {
    id: "poulet-grille-epice-et-fume", nom: "Poulet grillé épicé et fumé aux herbes", cuisine: "australienne", type: "plat",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53105",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 4, unite: "pièce", ou: { id: "pilons-de-poulet", quantite: 6, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "curry-en-poudre", quantite: 8, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "romarin", quantite: 10, unite: "g", ou: { id: "herbes-de-provence", quantite: 3, unite: "g" } },
      { id: "thym", quantite: 10, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Marinade : écraser l'ail avec un peu de sel, ajouter le zeste et le jus du citron, le curry, le piment (en flocons de préférence), l'huile et du poivre. Mélanger en pâte.", "Enrober le poulet de marinade et laisser reposer pendant que le barbecue chauffe.", "Quand il est bien chaud, poser les bouquets de romarin, de thym et le laurier sur la grille, et le poulet par-dessus, peau vers le haut. Fermer le couvercle si possible et cuire environ 10 min sur les herbes qui fument.", "Retourner le poulet et poursuivre 20 à 30 min en le retournant si besoin, jusqu'à ce qu'il soit légèrement grillé et cuit jusqu'à l'os. Sans barbecue : 40 min au four à 200 °C sur un lit d'herbes."]
  },
  {
    id: "salade-calmar-pois-chiches-chorizo", nom: "Salade de calmar, pois chiches et chorizo", cuisine: "australienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53102",
    ingredients: [
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "calmar", quantite: 300, unite: "g" },
      { id: "chorizo", quantite: 100, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Griller les poivrons rouges entiers sous le gril du four (ou au barbecue) jusqu'à ce que la peau soit noire. Les mettre dans un saladier couvert d'une assiette, puis les peler, les épépiner et les émincer finement.", "Dans un grand saladier, mélanger les poivrons et leur jus avec les pois chiches égouttés, le persil haché, le piment et l'ail hachés.", "Chauffer une grande poêle jusqu'à ce qu'elle fume. Ajouter un filet d'huile puis le calmar coupé en anneaux, sauter 30 secondes. Ajouter le chorizo en rondelles et cuire encore 30 secondes.", "Verser dans le saladier, saler, poivrer, arroser du reste d'huile, du jus et du zeste du citron. Mélanger et servir."]
  },
  {
    id: "pilons-de-poulet-collants-soja-miel", nom: "Pilons de poulet collants soja-miel", cuisine: "australienne", type: "plat",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53110",
    ingredients: [
      { id: "pilons-de-poulet", quantite: 4, unite: "pièce", ou: { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "miel", quantite: 10, unite: "g" },
      { id: "huile-d-olive", quantite: 8, unite: "ml" },
      { id: "concentre-de-tomate", quantite: 3, unite: "g", ou: { id: "sauce-tomate", quantite: 10, unite: "g" } },
      { id: "moutarde", quantite: 8, unite: "g" }
    ],
    etapes: ["Faire 3 entailles dans chaque pilon. Mélanger la sauce soja, le miel, l'huile, le concentré de tomate et la moutarde (de Dijon).", "Verser sur le poulet et bien l'enrober. Laisser mariner 30 min à température ambiante (ou une nuit au frais).", "Préchauffer le four à 200 °C. Mettre le poulet dans un plat peu profond et cuire 35 min en le retournant de temps en temps, jusqu'à ce qu'il soit tendre et brillant de marinade."]
  },
  {
    id: "salade-tiede-asperges-roties", nom: "Salade tiède d'asperges rôties, tomates et bacon", cuisine: "australienne", type: "entree",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53106",
    ingredients: [
      { id: "asperges", quantite: 250, unite: "g" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "bacon", quantite: 6, unite: "tranche", ou: { id: "lardons", quantite: 100, unite: "g" } },
      { id: "miel", quantite: 3, unite: "g" },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "moutarde", quantite: 3, unite: "g" },
      { id: "roquette", quantite: 50, unite: "g", ou: { id: "epinards", quantite: 50, unite: "g" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Casser le bout dur des asperges et les étaler en une couche dans un plat. Couper les tomates en deux, les caler entre les asperges, saler, poivrer et arroser d'un filet d'huile.", "Rouler chaque tranche de bacon bien serrée (la couper en deux si elle est longue) et ajouter les rouleaux dans le plat. Les arroser du miel et cuire 20 min, jusqu'à ce que les tomates soient fondantes et le bacon croustillant.", "Pendant ce temps, cuire les pommes de terre (petites pommes de terre nouvelles, type grenaille) à l'eau. Fouetter le vinaigre (de vin rouge de préférence), le reste de l'huile, la moutarde, du sel et du poivre dans un saladier.", "Mélanger la roquette avec la moitié de la sauce et la mettre sur un plat. Couper les pommes de terre en deux, les mélanger au reste de sauce et les disposer avec les asperges, les tomates et le bacon."]
  }
]);
