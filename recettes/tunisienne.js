// ============================================================
// RECETTES : cuisine tunisienne (7 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// (La chakchouka de TheMealDB n'est pas reprise : elle existe déjà
// dans recettes/mediterraneenne.js.)
// ============================================================
ajouterRecettes([
  {
    id: "gateau-tunisien-a-l-orange", nom: "Gâteau tunisien à l'orange entière et à l'huile d'olive", cuisine: "tunisienne",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "TheMealDB", idSource: "52970",
    ingredients: [
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 140, unite: "g" },
      { id: "sucre", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "levure-chimique", quantite: 8, unite: "g" },
      { id: "extrait-de-vanille", quantite: 5, unite: "ml", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 190 °C et huiler un petit moule rond (18 cm environ).", "Couper les deux bouts de l'orange, la couper en tranches et retirer les pépins. La mixer entière, avec la peau, en purée.", "Ajouter un tiers du sucre et l'huile d'olive, et mixer encore jusqu'à ce que ce soit bien mélangé.", "Tamiser ensemble la farine et la levure. Fouetter les œufs avec le reste du sucre au moins 5 min au batteur, jusqu'à ce que le mélange blanchisse et double de volume.", "Incorporer délicatement la moitié de la farine, puis la purée d'orange et la vanille, puis le reste de la farine, sans trop mélanger.", "Verser dans le moule et cuire 20 min, puis baisser le four à 160 °C et cuire encore 20 à 25 min, jusqu'à ce que le gâteau soit doré et qu'une pique en ressorte sèche. Laisser refroidir sur une grille."]
  },
  {
    id: "kafteji", nom: "Kafteji (légumes frits hachés aux œufs)", cuisine: "tunisienne",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52971",
    ingredients: [
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "potiron", quantite: 200, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "ras-el-hanout", quantite: 3, unite: "g", ou: { id: "curry-en-poudre", quantite: 3, unite: "g" } },
      { id: "huile-d-olive", quantite: 80, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre et les couper en cubes de 3 cm. Les faire frire dans 1 cm d'huile bien chaude environ 20 min, en les retournant, jusqu'à ce qu'elles soient dorées. Égoutter sur du papier absorbant.", "Couper le poivron (vert de préférence) en deux, l'épépiner, le frotter d'un peu d'huile et le passer sous le gril du four, côté peau vers le haut, jusqu'à ce que la peau noircisse. L'enfermer 15 min dans un sac, puis le peler.", "Dans une autre poêle, faire dorer les oignons en fines rondelles dans un peu d'huile 15 min en remuant souvent. Ajouter le ras el hanout à la fin.", "Faire frire le potiron en cubes dans la poêle des pommes de terre 10 à 15 min, jusqu'à ce qu'il soit tendre et un peu doré. Égoutter.", "Vider l'huile de la poêle, y remettre tous les légumes, verser les œufs battus par-dessus et couvrir quelques minutes, le temps que les œufs prennent.", "Verser le tout sur une grande planche, saler, poivrer et hacher grossièrement au couteau en mélangeant. Servir avec du pain."]
  },
  {
    id: "soupe-tunisienne-agneau-pois-chiches", nom: "Soupe tunisienne à l'agneau, pois chiches et pâtes", cuisine: "tunisienne",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52972",
    ingredients: [
      { id: "agneau-hache", quantite: 200, unite: "g", ou: { id: "boeuf-hache", quantite: 200, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "epinards", quantite: 120, unite: "g" },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "pates", quantite: 60, unite: "g" },
      { id: "concentre-de-tomate", quantite: 40, unite: "g", ou: { id: "sauce-tomate", quantite: 80, unite: "g" } },
      { id: "harissa", quantite: 15, unite: "g" },
      { id: "cumin", quantite: 4, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une cocotte, faire dorer la viande hachée à feu vif. La retirer et garder 1 cuillère à soupe de gras dans la cocotte.", "À feu moyen, faire revenir l'ail et l'oignon hachés avec les épinards environ 5 min, jusqu'à ce que l'oignon soit translucide et les épinards fondus.", "Remettre la viande, puis ajouter le concentré de tomate, le cumin, la harissa, l'eau avec le bouillon cube, les pois chiches égouttés, le jus d'un demi-citron, le sel et le poivre. Laisser mijoter 20 min à feu doux.", "Ajouter les pâtes (des macaronis) et cuire environ 15 min, jusqu'à ce qu'elles soient cuites. Ajouter un peu d'eau si la soupe épaissit trop."]
  },
  {
    id: "lablabi-soupe-de-pois-chiches", nom: "Lablabi (soupe de pois chiches à l'ail et au cumin)", cuisine: "tunisienne",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52973",
    ingredients: [
      { id: "pois-chiches-secs", quantite: 125, unite: "g", ou: { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "harissa", quantite: 5, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "citron-vert", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "pain", quantite: 2, unite: "tranche", optionnel: true },
      { id: "eau", quantite: 700, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille, faire tremper les pois chiches secs dans beaucoup d'eau froide.", "Dans une casserole, faire revenir l'oignon haché dans l'huile jusqu'à ce qu'il soit translucide.", "Ajouter les pois chiches égouttés, l'eau et le bouillon cube. Porter à ébullition, puis couvrir et laisser frémir 30 min (15 min avec des pois chiches en boîte).", "Pendant ce temps, faire griller le cumin quelques secondes dans une petite poêle sans matière grasse, puis l'écraser au mortier avec l'ail et le sel pour faire une pâte.", "Ajouter cette pâte et la harissa à la soupe et laisser frémir encore 30 min, jusqu'à ce que les pois chiches soient tendres.", "Assaisonner avec le poivre, le jus de citron vert et du sel si besoin. Servir bien chaud, versé sur des morceaux de pain rassis si on aime, avec un filet d'huile d'olive."]
  },
  {
    id: "kalia-zaara-agneau-au-safran", nom: "Kalia zaara (agneau au safran et au persil)", cuisine: "tunisienne",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "52974",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 375, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "safran", quantite: 1, unite: "sachet", ou: { id: "curcuma", quantite: 2, unite: "g" } },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper l'agneau en petits cubes. Le faire dorer dans l'huile chaude à feu moyen-vif, environ 5 min, sur toutes les faces.", "Assaisonner avec le safran, le sel et le poivre. Ajouter l'oignon haché, en gardant 1 cuillère à soupe pour la fin, puis l'eau.", "Porter à ébullition, couvrir et laisser mijoter à feu moyen-doux 30 à 40 min, jusqu'à ce que l'agneau soit tendre (ajouter un peu d'eau si besoin).", "Découvrir, ajouter le beurre et laisser réduire la sauce 5 à 10 min.", "Rectifier l'assaisonnement, verser dans un plat, parsemer de l'oignon gardé et du persil haché, et servir avec des quartiers de citron."]
  },
  {
    id: "briks-au-thon-et-epinards", nom: "Briks au thon, aux épinards et à l'œuf", cuisine: "tunisienne",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52975",
    ingredients: [
      { id: "pate-filo", quantite: 60, unite: "g" },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "epinards", quantite: 100, unite: "g" },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sauce-sriracha", quantite: 5, unite: "ml", optionnel: true, ou: { id: "harissa", quantite: 5, unite: "g" } },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "confiture", quantite: 40, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir les oignons nouveaux émincés dans 1 cuillère à café d'huile, à feu doux, 3 min. Ajouter les épinards, couvrir et cuire 2 à 3 min jusqu'à ce qu'ils soient fondus. Égoutter et laisser refroidir.", "Découper dans la pâte filo 12 disques d'environ 12 cm (une soucoupe sert de modèle) et les garder sous un film pour qu'ils ne sèchent pas.", "Bien presser les épinards refroidis pour retirer l'eau, puis les mélanger avec le thon égoutté, l'œuf battu, la sauce piquante, du sel et du poivre.", "Préchauffer le four à 200 °C. Superposer 3 disques de filo en badigeonnant chacun d'un peu d'huile. Mettre une grosse cuillerée de farce au centre, replier en demi-lune et pincer les bords en les tordant pour fermer. Faire 4 briks.", "Les poser sur une plaque, les badigeonner du reste d'huile et cuire 12 à 15 min, jusqu'à ce qu'ils soient croustillants et dorés.", "Pendant ce temps, couper les tomates et un morceau de concombre en dés, arroser de jus de citron, saler et poivrer. Servir les briks chauds avec cette salade et la confiture d'abricots."]
  },
  {
    id: "ghriba-aux-noix-de-cajou", nom: "Ghriba aux noix de cajou (biscuits tunisiens)", cuisine: "tunisienne",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "52976",
    ingredients: [
      { id: "noix-de-cajou", quantite: 125, unite: "g" },
      { id: "sucre-glace", quantite: 70, unite: "g", ou: { id: "sucre", quantite: 70, unite: "g" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "eau-de-fleur-d-oranger", quantite: 15, unite: "ml" },
      { id: "amandes", quantite: 25, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C et couvrir une plaque de papier cuisson.", "Mixer finement les noix de cajou. Garder un peu de sucre glace pour l'enrobage (avec du sucre ordinaire, le mixer d'abord en poudre très fine).", "Mélanger les noix de cajou et le sucre glace, ajouter le jaune d'œuf et l'eau de fleur d'oranger, et mélanger jusqu'à obtenir une pâte lisse.", "Former de petites boules, les rouler dans le sucre gardé et les poser sur la plaque. Enfoncer une amande au centre de chacune.", "Cuire environ 20 min, jusqu'à ce que les biscuits soient légèrement dorés. Surveiller : ils brûlent vite."]
  }
]);
