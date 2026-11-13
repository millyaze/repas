// ============================================================
// RECETTES : cuisine portugaise (8 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "fofos-de-poisson", nom: "Fofos de poisson (croquettes épicées panées)", cuisine: "portugaise", type: "entree",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53043",
    ingredients: [
      { id: "eglefin", quantite: 300, unite: "g", ou: { id: "poisson-blanc", quantite: 300, unite: "g" } },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "coriandre", quantite: 15, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "chapelure", quantite: 40, unite: "g" },
      { id: "huile-de-tournesol", quantite: 150, unite: "ml" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "chutney-de-mangue", quantite: 40, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre épluchées à l'eau salée et les écraser. Mettre l'églefin dans une casserole, le couvrir d'eau, porter à frémissement et le pocher 10 min à couvert à feu doux. Égoutter et l'émietter.", "Dans un saladier, mélanger le poisson, les pommes de terre, le piment haché, les deux tiers de la coriandre hachée, le cumin, le poivre, l'ail et le gingembre râpés. Saler, ajouter la farine et 1 œuf, et bien mélanger.", "Partager en 8 petits boudins. Battre l'autre œuf dans une assiette creuse, mettre la chapelure dans une autre. Passer chaque fofo dans l'œuf puis dans la chapelure. Mettre 20 min au frais.", "Chauffer 1 cm d'huile dans une grande poêle à feu moyen. Frire les fofos en plusieurs fois, 2 min de chaque côté, en les tournant doucement pour qu'ils dorent partout. Égoutter sur du papier absorbant.", "Salade : mélanger l'oignon rouge en fines lamelles, le reste de coriandre, le jus de citron et une pincée de sel. Servir avec les fofos et le chutney de mangue."]
  },
  {
    id: "sardines-grillees-a-la-portugaise", nom: "Sardines grillées à la portugaise", cuisine: "portugaise", type: "plat",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53041",
    ingredients: [
      { id: "sardines", quantite: 6, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "paprika", quantite: 6, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "romarin", quantite: 2, unite: "g", ou: { id: "thym", quantite: 2, unite: "g" } },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans un plat, mélanger 2 cuillères à soupe d'huile, l'ail haché, presque tout le paprika, le jus d'un demi-citron, le romarin, le piment émincé, le sel et le poivre.", "Ajouter les sardines (vidées) et bien les enrober. Couvrir et laisser mariner au frais au moins 30 min (quelques heures, c'est encore mieux).", "Chauffer très fort un barbecue ou une poêle-gril. Cuire les sardines 4 à 5 min de chaque côté, jusqu'à ce qu'elles soient bien dorées et légèrement grillées.", "Servir arrosé d'un filet d'huile, saupoudré du reste de paprika, avec le reste du citron en quartiers."]
  },
  {
    id: "poulet-piri-piri-et-salade-de-chou", nom: "Poulet piri-piri et salade de chou", cuisine: "portugaise", type: "plat",
    difficulte: "facile", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53039",
    ingredients: [
      { id: "poulet-entier", quantite: 1, unite: "pièce", ou: { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "piment-frais", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre", quantite: 3, unite: "g" },
      { id: "origan", quantite: 1, unite: "g", ou: { id: "herbes-de-provence", quantite: 1, unite: "g" } },
      { id: "graines-de-coriandre", quantite: 2, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "vinaigre-de-vin-rouge", quantite: 30, unite: "ml", ou: { id: "vinaigre", quantite: 30, unite: "ml" } },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "chou", quantite: 120, unite: "g" },
      { id: "betterave", quantite: 75, unite: "g", optionnel: true },
      { id: "mayonnaise", quantite: 20, unite: "g" },
      { id: "yaourt-grec", quantite: 30, unite: "g" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Marinade : mixer les piments, l'ail, le gingembre, l'origan, la coriandre moulue, le paprika, la moitié du vinaigre, l'huile et une pincée de sel. En frotter le poulet (un petit poulet d'environ 1 kg, les restes se mangent froids) et laisser 1 h à température ambiante.", "Préchauffer le four à 190 °C. Cuire le poulet dans un plat 1 h à 1 h 20 (45 min seulement avec des cuisses), jusqu'à ce qu'il soit bien doré et que le jus soit clair. Laisser reposer 10 min sous une feuille d'aluminium.", "Salade de chou : pendant ce temps, mélanger l'oignon rouge en fines lamelles, la carotte râpée, le chou très finement émincé et la betterave crue râpée avec la mayonnaise, le yaourt, le reste du vinaigre et le cumin. Saler et poivrer.", "Servir le poulet avec la salade de chou (et des frites si on veut)."]
  },
  {
    id: "febras-assadas-porc-et-frites", nom: "Febras assadas (escalopes de porc marinées au vin blanc et frites)", cuisine: "portugaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53044",
    ingredients: [
      { id: "filet-mignon-de-porc", quantite: 350, unite: "g" },
      { id: "vin-blanc", quantite: 100, unite: "ml" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "huile-de-tournesol", quantite: 750, unite: "ml" },
      { id: "mayonnaise", quantite: 30, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper le filet mignon en 4 morceaux. Glisser chaque morceau dans un sac de congélation et l'aplatir au rouleau à pâtisserie en une grande escalope fine.", "Mélanger le vin blanc, le paprika, le sel, le poivre et le jus d'un demi-citron, y mettre le porc et laisser mariner 20 à 30 min.", "Frites : couper les pommes de terre en bâtonnets de 1 cm, les laisser tremper 10 min dans l'eau froide (changer l'eau à mi-temps), puis bien les sécher dans un torchon.", "Chauffer l'huile à 130 °C dans une casserole profonde et y précuire les frites 8 à 10 min, en plusieurs fois. Égoutter. Monter l'huile à 180 °C et les refrire 3 min, jusqu'à ce qu'elles soient bien dorées et croustillantes. Égoutter et saler.", "Sortir le porc de la marinade, le frotter d'huile d'olive et le cuire 1 min de chaque côté sur un barbecue, une poêle-gril ou une poêle très chaude (en 2 fois).", "Servir les frites avec le porc par-dessus en versant le jus de cuisson sur les frites. Ajouter une cuillerée de mayonnaise et un quartier de citron."]
  },
  {
    id: "pasteis-de-nata", nom: "Pastéis de nata (petits flans pâtissiers portugais)", cuisine: "portugaise", type: "dessert",
    difficulte: "difficile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53046",
    ingredients: [
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 10, unite: "g" },
      { id: "sucre", quantite: 125, unite: "g" },
      { id: "sucre-glace", quantite: 15, unite: "g", ou: { id: "sucre", quantite: 15, unite: "g" } },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "fecule", quantite: 25, unite: "g" },
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "gousse-de-vanille", quantite: 1, unite: "pièce", optionnel: true, ou: { id: "extrait-de-vanille", quantite: 3, unite: "ml" } }
    ],
    etapes: ["Pâte : saupoudrer le plan de travail de farine mélangée à la moitié du sucre glace. Étaler la pâte feuilletée en rectangle, puis la rouler sur elle-même dans la longueur en un long boudin. Le couper en 12 rondelles de 1 à 2 cm.", "Aplatir légèrement chaque rondelle au rouleau, puis la presser avec les doigts dans un moule à muffins ou à tartelettes (12 empreintes) pour former des fonds très fins. Mettre au frais.", "Sirop : préchauffer le four à 220 °C. Porter à ébullition le sucre avec l'eau, 2 zestes de citron et la cannelle (un bâton si possible). Laisser réduire jusqu'à obtenir un sirop, puis laisser tiédir et retirer zestes et cannelle.", "Crème : dans une casserole, fouetter 1 œuf entier, 2 jaunes d'œufs et la fécule jusqu'à ce que ce soit lisse. Chauffer le lait avec les graines de la gousse de vanille jusqu'à frémissement, le verser petit à petit sur les œufs en fouettant, puis cuire à feu doux sans cesser de fouetter.", "Ajouter le sirop tiède et fouetter jusqu'à ce que la crème épaississe légèrement. La passer au tamis et la verser dans les fonds de pâte.", "Cuire 15 min, jusqu'à ce que la pâte soit dorée et la crème tachée de brun. Laisser refroidir dans le moule, puis saupoudrer du reste de sucre glace et d'un peu de cannelle. Environ 6 tartelettes par personne."]
  },
  {
    id: "caldeirada-ragout-de-poissons", nom: "Caldeirada (ragoût portugais de poissons et fruits de mer)", cuisine: "portugaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "53045",
    ingredients: [
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "vin-blanc", quantite: 150, unite: "ml" },
      { id: "safran", quantite: 1, unite: "sachet", optionnel: true },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "eau", quantite: 120, unite: "ml" },
      { id: "cabillaud", quantite: 220, unite: "g", ou: { id: "poisson-blanc", quantite: 220, unite: "g" } },
      { id: "calmar", quantite: 100, unite: "g", optionnel: true },
      { id: "crevettes", quantite: 100, unite: "g" },
      { id: "moules", quantite: 200, unite: "g", ou: { id: "fruits-de-mer-surgeles", quantite: 200, unite: "g" } },
      { id: "palourdes", quantite: 150, unite: "g", optionnel: true },
      { id: "baguette", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une grande sauteuse profonde, faire revenir l'oignon haché et le poivron (rouge de préférence) en dés dans un filet d'huile, à feu moyen, jusqu'à ce qu'ils soient tendres sans colorer.", "Hacher finement les tiges de coriandre (garder les feuilles pour la fin) et les ajouter avec le piment et 1 gousse d'ail hachés. Cuire quelques minutes. Verser le vin, ajouter le safran et le laurier, et laisser réduire de moitié.", "Ajouter les pommes de terre en petits morceaux, les tomates coupées et l'eau. Porter à petite ébullition et cuire 20 à 25 min en écrasant les tomates, jusqu'à ce que les pommes de terre soient juste tendres.", "Saler et poivrer. Enfoncer le cabillaud en gros morceaux dans la sauce, puis poser dessus le calmar en anneaux, les crevettes, les moules et les palourdes. Couvrir et cuire 6 à 8 min, jusqu'à ce que les coquillages s'ouvrent (jeter ceux qui restent fermés).", "Pendant ce temps, faire griller des tranches de baguette, les frotter avec la gousse d'ail restante coupée en deux et les arroser d'un filet d'huile.", "Servir le ragoût parsemé de feuilles de coriandre, avec les tartines pour tremper."]
  },
  {
    id: "prego-sandwich-steak-piri-piri-vert", nom: "Prego (sandwich au steak) et sauce piri-piri verte", cuisine: "portugaise", type: "plat",
    difficulte: "facile", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "53042",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 250, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "vinaigre", quantite: 30, unite: "ml" },
      { id: "persil", quantite: 20, unite: "g" },
      { id: "ciabatta", quantite: 2, unite: "pièce", ou: { id: "baguette", quantite: 1, unite: "pièce" } },
      { id: "roquette", quantite: 40, unite: "g" },
      { id: "basilic", quantite: 15, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 2, unite: "g" },
      { id: "eau", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Frotter les 2 steaks avec 1 gousse d'ail coupée en deux, puis les mettre dans un sac de congélation avec l'huile, 1 cuillère à soupe de vinaigre (de xérès si possible) et les tiges de persil. Bien mélanger, taper quelques coups de rouleau sur les steaks pour les aplatir et laisser mariner 1 à 2 h.", "Sauce piri-piri verte : mixer les feuilles de persil, le basilic, le piment (type jalapeño), les oignons nouveaux, la moitié de l'autre gousse d'ail, le reste du vinaigre, le sucre et l'eau jusqu'à ce que ce soit le plus lisse possible. (Elle se garde une semaine au frais dans un bocal.)", "Chauffer très fort une poêle ou une poêle-gril. Retirer l'ail et le persil des steaks, saler, poivrer et les saisir 2 min de chaque côté. Les laisser reposer sur une assiette.", "Couper les ciabattas en deux (ou 2 morceaux de baguette), les faire griller côté mie, puis le poser mie en dessous sur l'assiette pour qu'il absorbe le jus.", "Trancher les steaks et les glisser dans le pain avec la sauce verte et la roquette."]
  },
  {
    id: "empanadas-crevettes-oignons-nouveaux", nom: "Empanadas aux crevettes, oignons nouveaux et feta", cuisine: "portugaise", type: "plat",
    difficulte: "moyen", tempsMinutes: 85, portions: 2,
    source: "TheMealDB", idSource: "53040",
    ingredients: [
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "farine", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "vinaigre", quantite: 3, unite: "ml" },
      { id: "eau", quantite: 90, unite: "ml" },
      { id: "oignon-nouveau", quantite: 6, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "crevettes", quantite: 250, unite: "g" },
      { id: "feta", quantite: 75, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Pâte : sabler le beurre avec la farine du bout des doigts. Séparer l'œuf, ajouter le blanc et la moitié du jaune (garder le reste), le vinaigre (de vin blanc), une pincée de sel et assez d'eau froide pour obtenir une pâte souple. Pétrir jusqu'à ce qu'elle soit lisse, filmer et laisser reposer 30 min.", "Préchauffer le four à 180 °C. Émincer finement les oignons nouveaux (sans le bout vert) et les faire fondre doucement dans l'huile sans colorer. Ajouter le piment émincé et l'ail haché, puis les crevettes décortiquées, et cuire jusqu'à ce qu'elles deviennent opaques. Saler, poivrer.", "Retirer les crevettes, faire réduire le jus jusqu'à ce qu'il épaississe, puis remettre les crevettes.", "Partager la pâte en 8 boules et les étaler finement en disques sur le plan fariné. Mettre un peu de garniture sur une moitié, parsemer de feta émiettée et replier. Souder les bords en les pinçant et en les roulant pour bien fermer.", "Poser les empanadas sur une plaque huilée. Mélanger le reste du jaune avec un peu d'eau et en badigeonner le dessus.", "Cuire 30 min, jusqu'à ce qu'elles soient dorées et un peu croustillantes sur les bords."]
  }
]);
