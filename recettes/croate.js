// ============================================================
// RECETTES : cuisine croate (8 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "burek-a-la-viande", nom: "Burek à la viande (feuilleté de pâte filo)", cuisine: "croate",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53060",
    ingredients: [
      { id: "pate-filo", quantite: 125, unite: "g" },
      { id: "boeuf-hache", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 40, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Faire revenir l'oignon haché finement et la viande dans un peu d'huile jusqu'à ce qu'elle soit cuite. Saler et poivrer.", "Huiler un petit moule rond et y poser une feuille de filo. Couvrir d'une fine couche de farce, puis d'une autre feuille bien badigeonnée d'huile.", "Recommencer jusqu'à avoir 5 ou 6 couches, et finir par une feuille de filo huilée.", "Cuire 30 min au four, jusqu'à ce que ce soit bien doré. Couper en quartiers et servir."]
  },
  {
    id: "cevapi", nom: "Ćevapi (petites saucisses grillées de viande hachée)", cuisine: "croate",
    difficulte: "facile", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53055",
    ingredients: [
      { id: "boeuf-hache", quantite: 200, unite: "g" },
      { id: "porc-hache", quantite: 100, unite: "g", ou: { id: "agneau-hache", quantite: 100, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "paprika", quantite: 4, unite: "g" },
      { id: "levure-chimique", quantite: 1, unite: "g" },
      { id: "chapelure", quantite: 10, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 15, unite: "ml" },
      { id: "pain-pita", quantite: 2, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre la viande dans un saladier. Ajouter l'oignon haché très finement, l'ail râpé, le persil haché, le paprika, la levure chimique, la chapelure, l'eau, le bouillon cube émietté, le sel et le poivre.", "Bien pétrir à la main ou au batteur (crochets à pâte). Couvrir et laisser reposer 1 à 2 h au réfrigérateur.", "Former des petits boudins d'environ 50 g, de l'épaisseur d'un pouce et de 7 à 10 cm de long.", "Les cuire 12 à 14 min dans une poêle-gril bien chaude ou au barbecue, en les retournant plusieurs fois, jusqu'à ce qu'ils soient dorés et cuits à cœur.", "Servir chaud, dans du pain pita avec de l'oignon cru si on aime."]
  },
  {
    id: "ragout-croate-haricots-blancs-saucisse", nom: "Ragoût croate de haricots blancs à la saucisse", cuisine: "croate",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53058",
    ingredients: [
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "chorizo", quantite: 150, unite: "g", ou: { id: "saucisse", quantite: 2, unite: "pièce" } },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "echalote", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer l'huile dans une poêle et y faire revenir les échalotes, l'ail et les tomates hachés jusqu'à ce qu'ils soient tendres.", "Dans une casserole, mettre les haricots avec leur jus, les légumes et la saucisse en rondelles. Cuire 20 min à feu doux (ou 30 min au four à 180 °C).", "Saler, poivrer et parsemer de persil. Encore meilleur réchauffé le lendemain."]
  },
  {
    id: "peka-d-agneau-aux-legumes", nom: "Peka d'agneau aux légumes (cocotte au four)", cuisine: "croate",
    difficulte: "moyen", tempsMinutes: 140, portions: 2,
    source: "TheMealDB", idSource: "53056",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 400, unite: "g" },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-tomate", quantite: 15, unite: "g" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "vin-blanc", quantite: 125, unite: "ml" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "romarin", quantite: 2, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 220 °C (200 °C chaleur tournante). Couper l'agneau (épaule ou gigot) en gros morceaux.", "Marinade : mélanger 40 ml d'huile avec l'ail écrasé, la sauce tomate, le sel et le poivre.", "Couper les pommes de terre et les légumes en morceaux et les mettre dans une grande cocotte avec couvercle.", "Poser l'agneau sur les légumes, verser la marinade et le vin par-dessus. Ajouter le thym et le romarin en branches, sur le dessus.", "Couvrir (ou fermer avec du papier aluminium) et cuire 1 h 30.", "Retirer le couvercle et les tiges d'herbes, ajouter le reste de l'huile et cuire encore 20 à 30 min. Servir avec du pain pour saucer."]
  },
  {
    id: "goulash-croate", nom: "Goulash croate (bœuf mijoté au vin rouge)", cuisine: "croate",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "53057",
    ingredients: [
      { id: "boeuf-a-mijoter", quantite: 250, unite: "g", ou: { id: "steak-de-boeuf", quantite: 250, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "vin-rouge", quantite: 100, unite: "ml", ou: { id: "vin-blanc", quantite: 100, unite: "ml" } },
      { id: "moutarde", quantite: 20, unite: "g" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "eau", quantite: 600, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 5, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper la viande en cubes de 3 cm. La mélanger avec la moutarde, le paprika, le sel et le poivre, et laisser mariner 1 h au réfrigérateur.", "Chauffer la moitié de l'huile dans une cocotte et faire dorer la viande sur toutes les faces. La réserver sur une assiette et ajouter le reste de l'huile.", "Hacher finement l'oignon et râper la carotte. Les cuire 15 min à feu doux, avec une pincée de sel, jusqu'à ce qu'ils soient fondants et légèrement dorés.", "Remettre la viande, ajouter le laurier et l'ail écrasé. Verser le vin et laisser frémir 10 à 15 min, puis ajouter les deux tiers de l'eau.", "Couvrir et cuire 1 h à feu doux en remuant de temps en temps. Ajouter le reste de l'eau et cuire encore 30 à 45 min.", "Laisser tiédir un peu et servir parsemé de persil haché, avec quelques rondelles de piment frais si on aime, du pain frais et une salade."]
  },
  {
    id: "sardines-frites", nom: "Sardines frites", cuisine: "croate",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53061",
    ingredients: [
      { id: "sardines", quantite: 400, unite: "g", ou: { id: "poisson-blanc", quantite: 300, unite: "g" } },
      { id: "farine", quantite: 40, unite: "g" },
      { id: "huile-de-tournesol", quantite: 100, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Rincer les sardines (vidées) à l'eau froide et bien les sécher.", "Les rouler dans la farine salée et les faire frire dans l'huile bien chaude jusqu'à ce qu'elles soient croustillantes, en les retournant à mi-cuisson.", "Les égoutter sur du papier absorbant et servir chaudes ou froides, avec des quartiers de citron."]
  },
  {
    id: "soupe-aux-champignons-et-sarrasin", nom: "Soupe aux champignons et au sarrasin", cuisine: "croate",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53059",
    ingredients: [
      { id: "champignons", quantite: 150, unite: "g" },
      { id: "sarrasin", quantite: 50, unite: "g", ou: { id: "riz", quantite: 50, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 700, unite: "ml" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "farine", quantite: 5, unite: "g" },
      { id: "vinaigre", quantite: 5, unite: "ml", optionnel: true },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Hacher l'oignon et l'ail, émincer les champignons et rincer le sarrasin.", "Chauffer l'huile et faire revenir doucement l'oignon. Ajouter les champignons et l'ail et continuer à les faire revenir.", "Ajouter le sel, le bouillon cube émietté, le sarrasin et le laurier, puis couvrir avec l'eau. Laisser frémir environ 20 min.", "Juste avant la fin de la cuisson, ajouter le poivre, la crème mélangée à la farine, le persil haché et un trait de vinaigre selon le goût. Retirer le laurier et servir."]
  },
  {
    id: "guzvara-brioche-roulee-aux-noix", nom: "Gužvara (brioche roulée aux noix)", cuisine: "croate",
    difficulte: "moyen", tempsMinutes: 210, portions: 2,
    source: "TheMealDB", idSource: "53062",
    ingredients: [
      { id: "farine", quantite: 225, unite: "g" },
      { id: "sucre", quantite: 70, unite: "g" },
      { id: "levure-de-boulanger", quantite: 7, unite: "g" },
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "noix", quantite: 70, unite: "g" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Pâte : mélanger la farine, 25 g de sucre, la levure, le sel, 90 ml de lait tiède, l'œuf battu et 15 g de beurre fondu, et bien pétrir. Couvrir et laisser lever environ 2 h, jusqu'à ce qu'elle double de volume. Dégazer et pétrir légèrement.", "Garniture : mélanger les noix hachées avec le reste du beurre mou, le reste du sucre (cassonade si on en a) et la cannelle.", "Étaler la pâte en rectangle d'environ 30 × 20 cm, la couvrir de garniture et la rouler le plus serré possible. Poser le rouleau sur une plaque beurrée, couvrir et laisser lever 40 min.", "Préchauffer le four à 200 °C. Cuire 30 à 35 min, jusqu'à ce que la brioche soit bien gonflée et dorée (le dessous sonne creux).", "À la sortie du four, badigeonner le dessus avec le reste du lait et saupoudrer de sucre glace si on en a."]
  }
]);
