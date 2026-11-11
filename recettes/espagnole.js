// ============================================================
// RECETTES : cuisine espagnole (48 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/vietnamienne.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "patatas-bravas-friteuse-a-air", nom: "Patatas bravas à la friteuse à air (ou au four)", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53158",
    ingredients: [
      { id: "pomme-de-terre", quantite: 450, unite: "g" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "paprika", quantite: 5, unite: "g" },
      { id: "sauce-tomate", quantite: 130, unite: "g" },
      { id: "basilic", quantite: 5, unite: "g", optionnel: true }
    ],
    etapes: ["Couper les pommes de terre en gros dés, les laisser 30 min dans de l'eau tout juste bouillie, égoutter et laisser sécher 5 min.", "Mélanger les pommes de terre avec 1 cuillère à soupe d'huile, sel et poivre. Les cuire 20 à 30 min à 200 °C dans la friteuse à air (ou 40 min au four) jusqu'à ce qu'elles soient dorées et croustillantes.", "Sauce : faire fondre l'oignon haché dans le reste de l'huile 8 à 10 min sans le dorer. Ajouter l'ail écrasé 1 min, puis le paprika 30 secondes, puis 1 cuillère à soupe de concentré de tomate et les tomates concassées. Laisser épaissir 5 à 10 min.", "Verser la sauce sur les pommes de terre et parsemer de basilic."]
  },
  {
    id: "ajo-blanco", nom: "Ajo blanco (soupe froide aux amandes)", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53169",
    ingredients: [
      { id: "pain", quantite: 3, unite: "tranche" },
      { id: "amandes", quantite: 100, unite: "g" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "eau", quantite: 350, unite: "ml" }
    ],
    etapes: ["Mettre le pain (sans la croûte) dans un bol, le couvrir de 175 ml d'eau et laisser tremper 10 min.", "Mixer le pain et son eau avec les amandes (mondées de préférence), l'huile, l'ail, le vinaigre (de vin ou de xérès), 175 ml d'eau et ½ cuillère à café de sel, jusqu'à obtenir une soupe bien lisse.", "Mettre au frais 1 h environ. Servir avec un filet d'huile d'olive et du poivre."]
  },
  {
    id: "arroz-al-horno", nom: "Riz au four (arroz al horno)", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53156",
    ingredients: [
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "poitrine-de-porc", quantite: 250, unite: "g" },
      { id: "lardons", quantite: 50, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "paprika", quantite: 5, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "riz", quantite: 125, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Dans une sauteuse allant au four (environ 30 cm), dorer les tranches de poitrine de porc dans la moitié de l'huile, de chaque côté, puis les retirer.", "Ajouter le reste de l'huile et faire revenir les lardons (et du boudin noir en rondelles si vous en avez) quelques minutes. Les retirer.", "Faire fondre l'oignon et le poivron émincés 10 min, ajouter la tomate en dés et cuire jusqu'à ce qu'elle soit fondue. Ajouter l'ail, le paprika (fumé de préférence) et le piment, cuire 2 min, puis remettre la viande.", "Ajouter les haricots égouttés, 500 ml de bouillon (fait avec le bouillon cube) et le thym. Porter à ébullition. Répartir le riz (rond de préférence) autour de la viande en l'enfonçant dans le bouillon, laisser rebouillir et saler.", "Cuire au four sans couvrir ni remuer 20 min. Le riz doit être tendre et le bouillon absorbé ; sinon, remettre 5 min. Arroser de jus de citron et d'un filet d'huile d'olive avant de servir."]
  },
  {
    id: "riz-crevettes-calamars", nom: "Riz aux crevettes et calamars (arroz con gambas y calamar)", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53147",
    ingredients: [
      { id: "crevettes", quantite: 250, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "safran", quantite: 1, unite: "sachet", ou: { id: "curcuma", quantite: 2, unite: "g" } },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "sauce-tomate", quantite: 5, unite: "g" },
      { id: "vin-blanc", quantite: 70, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 270, unite: "ml" },
      { id: "calmar", quantite: 200, unite: "g" }
    ],
    etapes: ["Décortiquer la plupart des crevettes (crues de préférence) et en garder quelques-unes entières pour la décoration.", "Faire fondre l'oignon haché dans l'huile 5 min à feu moyen-doux. Ajouter le laurier, le safran, le riz (rond de préférence) et 1 cuillère à café de concentré de tomate, et cuire 1 à 2 min en remuant.", "Verser le vin et laisser bouillir 1 à 2 min, puis 220 ml de bouillon (fait avec le bouillon cube, de poisson de préférence) et 50 ml d'eau. Cuire 5 min, puis ajouter les calmars en morceaux, saler, poivrer et mélanger.", "Porter à ébullition, couvrir et laisser frémir 12 min, en ajoutant un peu d'eau si ça devient sec.", "Ajouter les crevettes décortiquées et poser les entières dessus. Couvrir et cuire encore 5 à 6 min jusqu'à ce qu'elles soient roses. Laisser reposer 2 min avant de servir."]
  },
  {
    id: "riz-au-poulet-et-chorizo", nom: "Cocotte de riz au poulet et chorizo", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 70, portions: 2,
    source: "TheMealDB", idSource: "53161",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "chorizo", quantite: 100, unite: "g", ou: { id: "lardons", quantite: 100, unite: "g" } },
      { id: "sauce-tomate", quantite: 10, unite: "g" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "vin-blanc", quantite: 75, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Couper les cuisses de poulet en deux (pilon et haut de cuisse). Les dorer de tous côtés dans l'huile, dans une cocotte, puis les retirer.", "Baisser le feu et faire fondre doucement l'oignon et le poivron hachés 10 min. Ajouter l'ail et le chorizo en rondelles et cuire 2 min, jusqu'à ce que le chorizo rende son huile. Ajouter le concentré de tomate et cuire 1 min.", "Remettre le poulet avec le thym, le vin blanc et 400 ml de bouillon (fait avec le bouillon cube). Porter à ébullition, couvrir et cuire 30 min à feu doux.", "Ajouter le riz, mélanger, couvrir et cuire encore 15 min à feu doux. Laisser reposer 10 min hors du feu, rectifier l'assaisonnement et parsemer de persil."]
  },
  {
    id: "poulet-safran-raisins-pignons", nom: "Poulet au safran, raisins secs et pignons", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53186",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "safran", quantite: 1, unite: "sachet", ou: { id: "curcuma", quantite: 2, unite: "g" } },
      { id: "vin-blanc", quantite: 60, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "raisins-secs", quantite: 25, unite: "g", ou: { id: "abricots-secs", quantite: 25, unite: "g" } },
      { id: "pignons-de-pin", quantite: 15, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Saler et poivrer le poulet. Le dorer dans l'huile à feu vif, environ 5 min de chaque côté, puis le retirer.", "Baisser à feu moyen. Faire revenir l'oignon émincé 3 min dans la graisse, puis l'ail et le safran 3 à 4 min. Verser le vin blanc (à l'origine : xérès sec) et laisser réduire 3 à 5 min jusqu'à ce que ce soit sirupeux.", "Remettre le poulet, ajouter 100 ml de bouillon (fait avec un peu du bouillon cube), le thym et les raisins secs. Couvrir et cuire 30 min à feu doux, jusqu'à ce que le poulet soit cuit et la sauce réduite.", "Pendant ce temps, faire griller les pignons à sec dans une poêle (ou 10 min au four à 200 °C). Rectifier l'assaisonnement, parsemer de pignons et de persil, et servir avec du riz."]
  },
  {
    id: "ragout-pois-chiches-chorizo-epinards", nom: "Ragoût de pois chiches, chorizo et épinards", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53166",
    ingredients: [
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "chorizo", quantite: 100, unite: "g", ou: { id: "lardons", quantite: 100, unite: "g" } },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 75, unite: "ml" },
      { id: "epinards", quantite: 200, unite: "g" },
      { id: "pain", quantite: 2, unite: "tranche", optionnel: true }
    ],
    etapes: ["Faire revenir doucement l'oignon haché dans l'huile 3 à 4 min. Ajouter la carotte et le céleri en dés, le thym et le laurier, saler, poivrer et cuire 2 à 3 min.", "Ajouter l'ail, le chorizo en dés, la cannelle et le paprika (fumé de préférence). Cuire doucement jusqu'à ce que les légumes soient tendres et que le chorizo devienne croustillant.", "Ajouter les pois chiches égouttés, le vinaigre (de xérès de préférence) et 75 ml d'eau, et laisser frémir 1 à 2 min.", "Ajouter les épinards et mélanger jusqu'à ce qu'ils tombent. Rectifier l'assaisonnement et servir chaud avec du pain."]
  },
  {
    id: "churros-cacao-chocolat-caramel", nom: "Churros au cacao, sauce chocolat et caramel salé", cuisine: "espagnole",
    difficulte: "difficile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53170",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 500, unite: "ml" },
      { id: "sucre", quantite: 110, unite: "g" },
      { id: "beurre", quantite: 55, unite: "g" },
      { id: "creme-fraiche", quantite: 125, unite: "ml" },
      { id: "chocolat-noir", quantite: 50, unite: "g" },
      { id: "cannelle", quantite: 5, unite: "g" },
      { id: "farine", quantite: 100, unite: "g" },
      { id: "cacao-en-poudre", quantite: 25, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" }
    ],
    etapes: ["Sauce : faire fondre 60 g de sucre (roux de préférence) avec 30 g de beurre jusqu'à ce que le sucre soit fondu. Ajouter la crème et laisser frémir 2 à 3 min. Hors du feu, ajouter une pincée de sel et le chocolat, et remuer jusqu'à ce qu'il soit fondu.", "Mélanger le reste du sucre avec la cannelle et une pincée de sel pour l'enrobage.", "Pâte : mélanger la farine, le cacao, la levure et une pincée de sel. Ajouter le reste du beurre fondu (et un peu de vanille si vous en avez), puis verser 125 à 150 ml d'eau bouillante en fouettant pour obtenir une pâte lisse et très épaisse. Laisser tiédir et mettre dans une poche à douille cannelée.", "Chauffer l'huile à 170 °C dans une casserole profonde (pas plus d'un tiers pleine) : un dé de pain doit y dorer en 30 secondes. Faire couler des bâtons de 12 à 15 cm en coupant avec des ciseaux, 4 ou 5 à la fois, et cuire environ 4 min en les retournant.", "Égoutter sur une grille, rouler dans le sucre à la cannelle et servir aussitôt avec la sauce tiède (et une boule de glace si on veut)."]
  },
  {
    id: "soupe-chorizo-pois-chiches", nom: "Soupe de chorizo et pois chiches", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53168",
    ingredients: [
      { id: "sauce-tomate", quantite: 400, unite: "g" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "chorizo", quantite: 110, unite: "g", ou: { id: "lardons", quantite: 110, unite: "g" } },
      { id: "chou", quantite: 140, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "pain", quantite: 2, unite: "tranche", optionnel: true }
    ],
    etapes: ["Mettre les tomates concassées dans une casserole avec la même quantité d'eau et chauffer. Pendant ce temps, couper le chorizo en gros morceaux (sans la peau) et émincer le chou (frisé de préférence).", "Ajouter le chorizo, le chou, le piment et les pois chiches égouttés, puis émietter le bouillon cube. Mélanger, couvrir et laisser bouillonner 6 min à feu vif, jusqu'à ce que le chou soit juste tendre.", "Servir dans des bols avec du pain (ou du pain à l'ail)."]
  },
  {
    id: "salade-chorizo-oeufs-mollets", nom: "Salade de pommes de terre, chorizo et œufs mollets", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53157",
    ingredients: [
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "haricots-verts", quantite: 110, unite: "g" },
      { id: "chorizo", quantite: 110, unite: "g", ou: { id: "lardons", quantite: 110, unite: "g" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Cuire les petites pommes de terre 12 min dans une grande casserole d'eau bouillante salée, en ajoutant les œufs au bout de 6 min et les haricots verts pour les 2 dernières minutes. Égoutter et passer les œufs sous l'eau froide.", "Pendant ce temps, faire griller les rondelles de chorizo 1 à 2 min à la poêle. Les retirer en laissant leur huile dans la poêle. Y cuire doucement l'ail émincé 1 min.", "Hors du feu, ajouter le vinaigre (de xérès de préférence) et le persil, puis mélanger avec les pommes de terre, les haricots, le chorizo, sel et poivre. Écaler les œufs, les couper en quatre et les poser sur la salade."]
  },
  {
    id: "salade-tomates-chorizo", nom: "Salade de tomates au chorizo", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53185",
    ingredients: [
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "chorizo", quantite: 100, unite: "g", ou: { id: "lardons", quantite: 100, unite: "g" } }
    ],
    etapes: ["Mettre dans un plat les tomates (grosses de préférence) en tranches, un demi-oignon rouge émincé et le thym. Saler, poivrer, arroser du vinaigre (de xérès de préférence) et de l'huile. Laisser les saveurs se mélanger.", "Dans une poêle chaude sans matière grasse, faire dorer les rondelles de chorizo des deux côtés. Les poser sur les tomates avec un peu de leur huile."]
  },
  {
    id: "omelette-chorizo-pomme-de-terre-fromage", nom: "Omelette au chorizo, pomme de terre et fromage", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53159",
    ingredients: [
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "chorizo", quantite: 100, unite: "g", ou: { id: "lardons", quantite: 100, unite: "g" } },
      { id: "oeuf", quantite: 6, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "cheddar", quantite: 50, unite: "g", ou: { id: "fromage-rape", quantite: 50, unite: "g" } }
    ],
    etapes: ["Cuire les pommes de terre en dés 8 à 10 min à l'eau bouillante, jusqu'à ce qu'elles soient tendres. Égoutter et laisser sécher.", "Chauffer l'huile dans une poêle, cuire le chorizo en dés 2 min, puis ajouter les pommes de terre et cuire 5 min jusqu'à ce qu'elles soient croustillantes. Les retirer et essuyer la poêle.", "Pour chaque personne : cuire une omelette de 3 œufs battus. Quand elle est presque prise, parsemer de la moitié du chorizo et des pommes de terre, du persil et du fromage râpé. Plier l'omelette et cuire encore 1 min pour faire fondre le fromage."]
  },
  {
    id: "churros-sauce-chocolat", nom: "Churros, sauce chocolat", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53153",
    ingredients: [
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "farine", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 500, unite: "ml" },
      { id: "chocolat-noir", quantite: 100, unite: "g" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "lait", quantite: 50, unite: "ml" },
      { id: "miel", quantite: 20, unite: "g" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "cannelle", quantite: 5, unite: "g" }
    ],
    etapes: ["Mettre 150 ml d'eau bouillante dans un bol avec le beurre fondu (et un peu de vanille si vous en avez). Tamiser la farine et la levure dans un saladier avec une bonne pincée de sel. Verser le liquide au centre et battre très vite à la cuillère en bois jusqu'à ce qu'il n'y ait plus de grumeaux. Laisser reposer 10 à 15 min.", "Sauce : faire fondre doucement ensemble le chocolat, la crème, le lait et le miel en remuant jusqu'à ce que la sauce soit lisse. Garder au chaud.", "Remplir une casserole profonde d'huile au tiers et la chauffer : un dé de pain doit y dorer en 45 secondes à 1 min. Mélanger le sucre et la cannelle. Mettre la pâte dans une poche à douille cannelée.", "Faire couler 2 ou 3 bandes de pâte dans l'huile en coupant avec des ciseaux, et les frire jusqu'à ce qu'elles soient dorées et croustillantes. Attention : l'huile chaude est dangereuse, tenir les enfants à l'écart.", "Égoutter sur du papier absorbant, rouler dans le sucre à la cannelle et servir avec la sauce chocolat."]
  },
  {
    id: "ragout-palourdes-chorizo-haricots", nom: "Ragoût de palourdes, chorizo et haricots blancs", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53154",
    ingredients: [
      { id: "chorizo", quantite: 50, unite: "g", ou: { id: "lardons", quantite: 50, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "sauce-tomate", quantite: 400, unite: "g" },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "vinaigre", quantite: 5, unite: "ml" },
      { id: "palourdes", quantite: 600, unite: "g", ou: { id: "moules", quantite: 600, unite: "g" } },
      { id: "pain", quantite: 2, unite: "tranche", optionnel: true }
    ],
    etapes: ["Faire griller le chorizo en dés à feu moyen dans une grande poêle avec couvercle, jusqu'à ce qu'il rende son huile. Ajouter l'oignon haché et cuire 5 min, puis l'ail et la moitié du persil hachés, 1 min.", "Verser 200 ml de bouillon (fait avec le bouillon cube, de légumes de préférence) et les tomates concassées. Porter à ébullition, baisser le feu, ajouter les haricots égouttés et le vinaigre (de xérès de préférence). Laisser frémir 10 min.", "Ajouter les palourdes bien rincées, couvrir et cuire 2 à 4 min en secouant la poêle, jusqu'à ce qu'elles s'ouvrent (jeter celles qui restent fermées). Goûter avant de saler : les palourdes sont salées. Parsemer du reste de persil et servir avec beaucoup de pain."]
  },
  {
    id: "creme-catalane", nom: "Crème catalane", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53148",
    ingredients: [
      { id: "lait", quantite: 135, unite: "ml" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "orange", quantite: 1, unite: "pièce", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "sucre", quantite: 65, unite: "g" },
      { id: "fecule", quantite: 15, unite: "g" }
    ],
    etapes: ["La veille : chauffer le lait, la crème, la cannelle (un bâton de préférence) et quelques zestes d'orange et de citron, en remuant, jusqu'à ce que ça fume sans bouillir (3 à 5 min). Couvrir hors du feu et laisser infuser au moins 30 min.", "Fouetter 3 jaunes d'œufs avec 35 g de sucre et la fécule 3 à 5 min, jusqu'à ce que le mélange blanchisse. Verser le lait infusé à travers une passoire en fouettant, puis remettre le tout dans la casserole.", "Fouetter à feu moyen-vif 10 à 12 min, jusqu'à ce que ça épaississe comme une crème anglaise épaisse : un trait de doigt sur le dos de la cuillère doit rester net.", "Répartir dans 2 ramequins, laisser prendre 1 h à température ambiante, puis une nuit au réfrigérateur.", "Au moment de servir, saupoudrer chaque ramequin d'une cuillère à soupe de sucre et le caraméliser au chalumeau, ou sous le gril très chaud du four. Servir aussitôt."]
  },
  {
    id: "poulet-espagnol-chorizo-olives", nom: "Poulet à l'espagnole (chorizo, poivrons, olives)", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53143",
    ingredients: [
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "chorizo", quantite: 75, unite: "g", ou: { id: "lardons", quantite: 75, unite: "g" } },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "olives-vertes", quantite: 75, unite: "g", ou: { id: "olives-noires", quantite: 75, unite: "g" } },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Dans une poêle allant au four, faire revenir à feu moyen l'oignon, le chorizo et le poivron émincés avec une pincée de sel et de poivre, 15 min, jusqu'à ce que les légumes soient tendres.", "Ajouter le paprika (fumé doux de préférence) et l'ail haché, et cuire quelques minutes.", "Ajouter les tomates concassées, les olives et les haricots égouttés, mélanger et assaisonner. Poser les cuisses de poulet dessus, côté peau vers le haut, et les saler.", "Cuire au four 40 min, jusqu'à ce que la peau soit croustillante et la viande bien cuite. Parsemer de persil."]
  },
  {
    id: "ensaimadas", nom: "Ensaimadas (brioches de Majorque)", cuisine: "espagnole",
    difficulte: "difficile", tempsMinutes: 840, portions: 2,
    source: "TheMealDB", idSource: "53149",
    ingredients: [
      { id: "levure-de-boulanger", quantite: 3, unite: "g" },
      { id: "eau", quantite: 115, unite: "ml" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 300, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "beurre", quantite: 50, unite: "g" }
    ],
    etapes: ["Verser 115 ml d'eau tiède dans un saladier avec la levure et laisser 3 min. Ajouter le sucre, l'œuf, la farine et ½ cuillère à café de sel. Pétrir 15 min à la main (10 min au robot) jusqu'à ce que la pâte soit très élastique. Couvrir et laisser reposer 30 min, puis la couper en 2 et laisser reposer encore 30 min sur du papier cuisson.", "Huiler le plan de travail et le rouleau. Étaler un morceau de pâte en un rectangle très fin, laisser reposer 2 min, puis le tartiner de la moitié du beurre mou (à l'origine : saindoux). Étirer la pâte délicatement dans tous les sens, le plus fin possible sans la déchirer.", "Rouler la pâte sur elle-même en un long boudin, l'étirer encore, puis l'enrouler en spirale en laissant 1 cm entre chaque tour. Aplatir un peu et poser sur une plaque avec du papier cuisson. Recommencer avec l'autre morceau.", "Laisser lever dans un endroit tiède au moins 12 h (idéalement 24 h).", "Préchauffer le four à 200 °C, enfourner en haut du four et baisser aussitôt à 180 °C. Cuire 18 min jusqu'à ce qu'elles soient bien dorées. Laisser refroidir sur une grille et saupoudrer de sucre glace si on veut."]
  },
  {
    id: "calamars-frits-mayo-ail", nom: "Calamars frits, mayonnaise à l'ail", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53178",
    ingredients: [
      { id: "calmar", quantite: 150, unite: "g" },
      { id: "farine", quantite: 100, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "mayonnaise", quantite: 40, unite: "g" },
      { id: "huile-de-tournesol", quantite: 400, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Couper les calamars en anneaux d'½ cm. Mettre la farine bien assaisonnée dans un sac de congélation (avec 1 cuillère à soupe de câpres hachées si vous en avez), ajouter les calamars et secouer pour bien les enrober.", "Mélanger l'ail écrasé avec la mayonnaise et mettre dans un petit bol.", "Verser l'huile dans une grande casserole (pas plus d'un tiers pleine) et la chauffer à feu moyen : un morceau de pain doit grésiller aussitôt.", "Frire les calamars par poignées, bien secoués, environ 3 min jusqu'à ce qu'ils soient croustillants. Égoutter sur du papier absorbant et servir aussitôt avec la mayonnaise et des quartiers de citron."]
  },
  {
    id: "gambas-al-ajillo", nom: "Gambas al ajillo (crevettes à l'ail)", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53144",
    ingredients: [
      { id: "crevettes", quantite: 250, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "huile-d-olive", quantite: 100, unite: "ml" },
      { id: "piment-en-poudre", quantite: 2, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Décortiquer les crevettes (crues de préférence) en gardant la queue, et retirer le filet noir. Saler légèrement.", "Mettre l'ail émincé, l'huile et le piment (ou 3 petits piments séchés) dans une poêle ou un plat en terre allant sur le feu, à feu vif.", "Quand l'ail commence à dorer, ajouter les crevettes et les cuire 1 à 2 min de chaque côté, jusqu'à ce qu'elles soient juste roses. Parsemer de persil haché et de poivre, et servir aussitôt, avec du pain pour saucer."]
  },
  {
    id: "crevettes-ail-xeres", nom: "Crevettes à l'ail et au xérès", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "TheMealDB", idSource: "53180",
    ingredients: [
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "vin-blanc", quantite: 15, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Chauffer l'huile dans une grande poêle. Ajouter l'ail émincé et le cuire quelques secondes, puis les crevettes, 2 min, jusqu'à ce qu'elles commencent à rosir.", "Verser le xérès sec (ou le vin blanc) et cuire encore quelques minutes, juste jusqu'à ce que les crevettes soient cuites. Parsemer de persil et servir."]
  },
  {
    id: "croquetas-au-jambon", nom: "Croquetas au jambon", cuisine: "espagnole",
    difficulte: "difficile", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53179",
    ingredients: [
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "jambon-cru", quantite: 2, unite: "tranche", ou: { id: "jambon", quantite: 2, unite: "tranche" } },
      { id: "farine", quantite: 70, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce", optionnel: true },
      { id: "eau", quantite: 40, unite: "ml" },
      { id: "lait", quantite: 165, unite: "ml" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "chapelure", quantite: 40, unite: "g" },
      { id: "huile-de-tournesol", quantite: 400, unite: "ml" }
    ],
    etapes: ["Garniture : chauffer l'huile d'olive et y faire fondre un quart de poireau émincé, sans le colorer. Ajouter le jambon haché, cuire 1 min, puis 30 g de farine. Cuire environ 5 min en remuant, jusqu'à ce que ce soit doré sans brûler.", "Chauffer ensemble le lait et 40 ml de bouillon (fait avec un peu de bouillon cube) sans faire bouillir, et ajouter un peu de muscade râpée. Les verser petit à petit dans la casserole en remuant sans arrêt.", "Cuire encore 10 min à feu moyen, jusqu'à ce que la pâte soit très épaisse et se détache des bords. Poivrer et goûter avant de saler (le jambon est salé).", "Étaler sur un plat, couvrir de film au contact et laisser refroidir, puis 1 h au réfrigérateur.", "Préparer trois assiettes : le reste de la farine, l'œuf battu, la chapelure. Avec les mains huilées, former des boules de la taille d'une noix, les passer dans la farine, l'œuf puis la chapelure. Laisser 30 min au réfrigérateur.", "Frire dans l'huile à 180 °C, 5 ou 6 à la fois, jusqu'à ce qu'elles soient dorées. Égoutter sur du papier absorbant et manger aussitôt."]
  },
  {
    id: "croquetas-jambon-ail-des-ours", nom: "Croquetas au jambon et aux herbes vertes", cuisine: "espagnole",
    difficulte: "difficile", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53145",
    ingredients: [
      { id: "epinards", quantite: 75, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "lait", quantite: 175, unite: "ml" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "farine", quantite: 35, unite: "g" },
      { id: "parmesan", quantite: 20, unite: "g" },
      { id: "jambon-cru", quantite: 2, unite: "tranche", ou: { id: "jambon", quantite: 2, unite: "tranche" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "chapelure", quantite: 40, unite: "g" },
      { id: "huile-de-tournesol", quantite: 400, unite: "ml" }
    ],
    etapes: ["Laver les épinards avec la gousse d'ail hachée (à l'origine : de l'ail des ours, à utiliser si vous en trouvez), les arroser d'eau bouillante jusqu'à ce qu'ils tombent, les rincer à l'eau froide, bien les presser et les hacher fin.", "Chauffer le lait sans le faire bouillir. Chauffer l'huile d'olive dans une autre casserole, ajouter la farine et cuire 2 min en remuant. Ajouter le lait chaud petit à petit pour obtenir une sauce épaisse et lisse. Laisser bouillonner 1 à 2 min et assaisonner.", "Ajouter le fromage râpé (à l'origine : manchego), le jambon haché et les épinards. Étaler sur un plat huilé, couvrir et mettre au frais au moins 1 h.", "Avec les mains huilées, former 9 ou 10 boules et les mettre 30 min au congélateur pour les raffermir.", "Les tremper dans l'œuf battu puis les rouler dans la chapelure. Frire par petites quantités 2 à 3 min dans l'huile à 170 °C, jusqu'à ce qu'elles soient bien dorées. Égoutter sur du papier absorbant et servir chaud."]
  },
  {
    id: "migas", nom: "Migas (pain frit à l'ail et aux lardons)", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53086",
    ingredients: [
      { id: "pain", quantite: 6, unite: "tranche" },
      { id: "huile-d-olive", quantite: 60, unite: "ml" },
      { id: "ail", quantite: 6, unite: "gousse" },
      { id: "lardons", quantite: 75, unite: "g", ou: { id: "chorizo", quantite: 75, unite: "g" } }
    ],
    etapes: ["Émietter le pain (rassis de préférence) en petits morceaux. L'asperger d'eau froide, couvrir d'un torchon humide et laisser 30 min.", "Chauffer un peu d'huile dans une poêle profonde. Ajouter les gousses d'ail non épluchées, juste entaillées, et les faire frire 5 min. Les retirer. Faire dorer les lardons (ou le chorizo) dans la même huile et les retirer aussi.", "Mettre le reste de l'huile et le pain dans la poêle et cuire 15 min en remuant sans arrêt. Poivrer.", "Remettre l'ail et les lardons et continuer de remuer environ 20 min, jusqu'à ce que le pain soit moelleux et doré."]
  },
  {
    id: "pimientos-de-padron", nom: "Pimientos de padrón (petits poivrons poêlés)", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "TheMealDB", idSource: "53150",
    ingredients: [
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "pimientos-de-padron", quantite: 250, unite: "g", ou: { id: "poivron", quantite: 2, unite: "pièce" } },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Chauffer l'huile d'olive à feu vif dans une grande poêle (ou la friteuse à air 3 min à 205 °C). Si vous utilisez de grands poivrons, les couper en larges lanières.", "Faire cuire les poivrons 5 min en remuant souvent, jusqu'à ce qu'ils soient cloqués, tendres et un peu noircis.", "Mettre sur un plat et saupoudrer de gros sel. Servir en tapas."]
  },
  {
    id: "paella-fruits-de-mer-chorizo", nom: "Paella aux fruits de mer et chorizo", cuisine: "espagnole",
    difficulte: "difficile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53151",
    ingredients: [
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "crevettes", quantite: 150, unite: "g" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "eau", quantite: 350, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce", optionnel: true },
      { id: "moules", quantite: 250, unite: "g", ou: { id: "crevettes", quantite: 100, unite: "g" } },
      { id: "safran", quantite: 1, unite: "sachet", ou: { id: "curcuma", quantite: 2, unite: "g" } },
      { id: "chorizo", quantite: 75, unite: "g", ou: { id: "lardons", quantite: 75, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "calmar", quantite: 100, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 125, unite: "g" },
      { id: "petits-pois", quantite: 50, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Bouillon : chauffer 1 cuillère à soupe d'huile dans une grande poêle large. Si les crevettes sont entières, y faire rougir les têtes avec les tiges de persil en les écrasant. Verser le vin blanc (ou du xérès) et 150 ml d'eau, saler et laisser frémir 10 min. (Sans têtes de crevettes : utiliser un peu de bouillon cube.)", "Ajouter les moules bien lavées, couvrir et chauffer à feu vif 3 à 4 min jusqu'à ce qu'elles s'ouvrent. Filtrer le jus au-dessus d'un bol contenant le safran. Il faut 350 ml de bouillon en tout : compléter avec de l'eau. Décortiquer la plupart des moules.", "Essuyer la poêle, ajouter le reste de l'huile et faire griller le chorizo en rondelles jusqu'à ce qu'il rende son huile. Ajouter l'oignon et l'ail hachés et les faire fondre, puis les calamars en anneaux jusqu'à ce qu'ils blanchissent, puis la tomate hachée 1 min.", "Verser presque tout le bouillon et porter à ébullition. Répartir le riz (rond de préférence), mélanger une seule fois et laisser bouillir fort 5 min. Baisser au minimum et laisser frémir 10 min sans remuer.", "Enfoncer les crevettes décortiquées dans le riz et cuire 5 min en les retournant. Ajouter les moules et les petits pois (à l'origine : des fèves). Si le riz est encore ferme et la poêle sèche, ajouter un peu de bouillon.", "Couvrir d'un torchon quelques minutes hors du feu. Parsemer de feuilles de persil et de zeste de citron, et servir dans la poêle avec des quartiers de citron."]
  },
  {
    id: "merlu-haricots-blancs-chorizo", nom: "Merlu poêlé, bouillon de haricots blancs et chorizo", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53152",
    ingredients: [
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g", ou: { id: "herbes-de-provence", quantite: 1, unite: "g" } },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "pain", quantite: 1, unite: "tranche" },
      { id: "chorizo", quantite: 40, unite: "g", ou: { id: "lardons", quantite: 40, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 350, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "poisson-blanc", quantite: 300, unite: "g" }
    ],
    etapes: ["Égoutter les haricots (à l'origine : haricots secs cuits 30 min) et les faire chauffer 10 min dans un peu d'eau avec une gousse d'ail entière, le laurier et le thym. Égoutter.", "Chauffer 1 cuillère à soupe d'huile dans une poêle et faire dorer le pain en petits cubes avec l'autre gousse d'ail. Égoutter sur du papier absorbant. Faire griller le chorizo en dés dans la poêle et le garder au chaud avec le pain.", "Ajouter 1 cuillère à soupe d'huile et l'oignon haché, cuire 5 min, puis ajouter le paprika. Ajouter les haricots, 350 ml de bouillon (fait avec le bouillon cube, de poulet de préférence) et une pincée de sel. Cuire 5 à 10 min, ajouter le persil et garder au chaud.", "Saler les filets de merlu (ou d'un autre poisson blanc). Chauffer le reste de l'huile et cuire le poisson côté peau 3 à 5 min à feu moyen-vif, puis le retourner et cuire encore 3 à 5 min.", "Servir les haricots dans des bols, poser le poisson dessus et parsemer de croûtons, de chorizo et d'un peu de thym."]
  },
  {
    id: "patatas-bravas-au-four", nom: "Patatas bravas au four", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53172",
    ingredients: [
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-tomate", quantite: 130, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "sucre", quantite: 1, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "pomme-de-terre", quantite: 450, unite: "g" }
    ],
    etapes: ["Sauce : faire fondre l'oignon haché fin dans la moitié de l'huile environ 5 min. Ajouter l'ail haché, les tomates concassées, 1 cuillère à soupe de concentré de tomate, le paprika doux, le piment, le sucre et une pincée de sel. Porter à ébullition, puis laisser cuire 10 min à feu doux.", "Préchauffer le four à 200 °C. Couper les pommes de terre en dés, bien les sécher, les mélanger avec le reste de l'huile, sel et poivre dans un plat.", "Rôtir 40 à 50 min jusqu'à ce qu'elles soient dorées et croustillantes. Verser la sauce dessus et parsemer de persil."]
  },
  {
    id: "pisto-aux-oeufs", nom: "Pisto aux œufs (ratatouille espagnole)", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53160",
    ingredients: [
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "herbes-de-provence", quantite: 2, unite: "g" },
      { id: "laurier", quantite: 2, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Chauffer l'huile à feu doux dans une cocotte ou une grande poêle. Ajouter l'oignon émincé et une pincée de sel, couvrir et cuire doucement 15 min en remuant de temps en temps. Ajouter l'ail haché et cuire 2 min.", "Ajouter les poivrons en morceaux, couvrir et cuire 5 min à feu moyen jusqu'à ce qu'ils soient juste tendres.", "Ajouter les herbes (origan et thym à l'origine), le laurier, du poivre, puis la courgette et l'aubergine en dés. Bien mélanger, couvrir et cuire 10 min. Ajouter les tomates hachées, couvrir et cuire 20 min en remuant de temps en temps.", "Casser délicatement les œufs sur le pisto sans crever les jaunes. Cuire 5 à 6 min à feu moyen, jusqu'à ce que les blancs soient pris et les jaunes encore un peu coulants. Parsemer de persil."]
  },
  {
    id: "pollo-en-pepitoria", nom: "Poulet en pepitoria (sauce aux amandes et au safran)", cuisine: "espagnole",
    difficulte: "difficile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53162",
    ingredients: [
      { id: "safran", quantite: 1, unite: "sachet", ou: { id: "curcuma", quantite: 2, unite: "g" } },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "amandes", quantite: 30, unite: "g" },
      { id: "pain", quantite: 1, unite: "tranche" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "vin-blanc", quantite: 125, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 175, unite: "ml" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Mettre le safran dans 40 ml d'eau tout juste bouillie. Cuire l'œuf dur (10 min dans l'eau bouillante) et le refroidir.", "Chauffer 1 cuillère à soupe d'huile dans une cocotte large. Faire dorer l'ail, puis ajouter les amandes (mondées de préférence, en garder quelques-unes) et le pain en morceaux, jusqu'à ce que tout soit doré. Mixer avec sel, poivre et la moitié du persil.", "Ajouter le reste de l'huile et dorer le poulet de tous côtés, en salant. Le retirer. Enlever l'excès de graisse et faire dorer l'oignon, la carotte et le céleri hachés.", "Verser le vin blanc (à l'origine : xérès sec) en grattant le fond, puis 175 ml de bouillon (fait avec le bouillon cube) et le safran avec son eau. Porter à ébullition, ajouter la cannelle (un bâton de préférence, et 1 clou de girofle si vous en avez), le laurier et le poulet. Couvrir et cuire 40 min à feu doux.", "Retirer le poulet et le garder au chaud. Écraser le jaune d'œuf avec 2 cuillères à soupe de sauce. Faire réduire un peu la sauce, retirer le laurier et la cannelle, puis ajouter le jaune et le mélange aux amandes : la sauce épaissit.", "Remettre le poulet 3 min en l'arrosant de sauce. Parsemer du reste de persil, des amandes concassées et du blanc d'œuf haché. Servir avec du riz."]
  },
  {
    id: "crevettes-sauce-romesco", nom: "Crevettes, sauce romesco", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53174",
    ingredients: [
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "amandes", quantite: 30, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "pain", quantite: 1, unite: "tranche" },
      { id: "huile-d-olive", quantite: 60, unite: "ml" },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "crevettes", quantite: 200, unite: "g" }
    ],
    etapes: ["Couper le poivron (rouge de préférence) en deux et l'épépiner. Le mettre sous le gril du four, peau vers le haut, avec les gousses d'ail entières, le piment et la tomate. Après 4 min, retirer la tomate, la peler, l'épépiner et la hacher.", "Continuer de griller le poivron, le piment et l'ail 4 à 5 min, jusqu'à ce que les peaux noircissent. Laisser tiédir, peler et épépiner le piment, peler le poivron et l'ail, et hacher le tout.", "Griller les amandes (à l'origine : moitié noisettes) puis les hacher fin avec le persil.", "Faire revenir le poivron, l'ail et le piment 3 min dans 3 cuillères à soupe d'huile. Ajouter le pain en morceaux et le dorer. Mixer grossièrement avec la tomate, une pincée de sel, le vinaigre (de vin rouge de préférence) et le reste de l'huile. Ajouter les amandes et le persil. (La sauce se garde 3 jours au frais.)", "Servir la sauce dans un bol avec les crevettes cuites décortiquées et des piques."]
  },
  {
    id: "gaspacho-express", nom: "Gaspacho express", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "TheMealDB", idSource: "53173",
    ingredients: [
      { id: "sauce-tomate", quantite: 250, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "vinaigre", quantite: 5, unite: "ml" },
      { id: "citron-vert", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Mixer ensemble le coulis de tomate, le poivron (rouge de préférence) et le piment hachés, l'ail écrasé, le vinaigre (de xérès de préférence) et le jus d'un demi-citron vert, jusqu'à ce que ce soit bien lisse.", "Saler, poivrer et servir avec des glaçons."]
  },
  {
    id: "paella-fenouil-aubergine", nom: "Paella végétale au fenouil et à l'aubergine", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52942",
    ingredients: [
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "fenouil", quantite: 2, unite: "pièce", ou: { id: "courgette", quantite: 1, unite: "pièce" } },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "safran", quantite: 1, unite: "sachet", ou: { id: "curcuma", quantite: 2, unite: "g" } },
      { id: "vin-blanc", quantite: 100, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 350, unite: "ml" },
      { id: "petits-pois", quantite: 50, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Mettre dans un plat l'aubergine et le fenouil en quartiers, le poivron en lanières et la courgette en morceaux. Arroser d'un filet d'huile, saler, poivrer et rôtir 20 min en remuant deux fois.", "Pendant ce temps, chauffer un filet d'huile dans une grande poêle à feu moyen-doux et faire fondre l'oignon haché 8 à 10 min. Passer à feu moyen, ajouter le riz (rond de préférence), le paprika et le safran, et cuire 1 min.", "Verser le vin blanc et laisser réduire de moitié. Ajouter les deux tiers des 350 ml de bouillon (fait avec le bouillon cube, de légumes de préférence) et laisser frémir 10 min sans couvrir, en remuant deux fois.", "Ajouter les petits pois, assaisonner, puis mélanger délicatement les légumes rôtis. Verser le reste du bouillon, poser le citron en quartiers dessus, couvrir et cuire encore 10 min.", "Pour la croûte de riz grillé au fond, monter à feu vif jusqu'à entendre un léger crépitement. Laisser reposer 5 min hors du feu et parsemer de persil."]
  },
  {
    id: "tortilla-a-la-morue", nom: "Tortilla à la morue", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53171",
    ingredients: [
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "poisson-blanc", quantite: 150, unite: "g" }
    ],
    etapes: ["Faire fondre l'oignon émincé dans la moitié de l'huile à feu moyen environ 8 min, jusqu'à ce qu'il soit tendre et blond. Le retirer.", "Cuire les pommes de terre en tranches fines dans la poêle, en les retournant délicatement et en couvrant de temps en temps, jusqu'à ce qu'elles soient tendres sans se défaire. Remettre l'oignon avec l'ail haché et cuire 4 min.", "Verser dans un saladier avec les œufs battus, le persil, sel et poivre. Laisser reposer 30 min.", "Pendant ce temps, mettre le poisson (morue dessalée à l'origine, ou cabillaud) dans une casserole d'eau froide et porter à frémissement. Retirer du feu, couvrir et laisser 10 min. Égoutter, enlever la peau et les arêtes, et effeuiller en gros morceaux dans le mélange aux œufs.", "Chauffer le reste de l'huile dans une poêle antiadhésive, verser le mélange et cuire à feu moyen-doux jusqu'à ce que les bords se décollent. Glisser la tortilla sur une assiette, la retourner dans la poêle et cuire l'autre face à feu doux. Laisser tiédir un peu avant de servir."]
  },
  {
    id: "fideua", nom: "Fideuà (vermicelles aux fruits de mer)", cuisine: "espagnole",
    difficulte: "difficile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52836",
    ingredients: [
      { id: "moules", quantite: 200, unite: "g", ou: { id: "crevettes", quantite: 100, unite: "g" } },
      { id: "crevettes", quantite: 120, unite: "g" },
      { id: "safran", quantite: 1, unite: "sachet", ou: { id: "curcuma", quantite: 2, unite: "g" } },
      { id: "pates", quantite: 175, unite: "g" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "paprika", quantite: 5, unite: "g" },
      { id: "poisson-blanc", quantite: 150, unite: "g" },
      { id: "calmar", quantite: 100, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 325, unite: "ml" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Rincer les moules à l'eau froide et jeter celles qui sont cassées ou restent ouvertes quand on les tape. Enlever les barbes. Décortiquer le corps des crevettes en laissant la tête et la queue si elles sont entières.", "Mettre le safran dans 25 ml d'eau chaude, 10 min. Casser les vermicelles (ou des spaghettis fins) en morceaux de 1 cm.", "Chauffer l'huile dans une grande poêle à bords hauts. Faire fondre l'oignon haché 5 min, ajouter l'ail 1 min, puis les vermicelles : les faire griller 5 min en remuant jusqu'à ce qu'ils soient bien dorés. Ajouter le paprika.", "À feu moyen, ajouter le poisson (à l'origine : de la lotte) et les calamars en morceaux, et le safran avec son eau. Saler, poivrer, étaler. Verser 300 ml de bouillon chaud (fait avec le bouillon cube, de poisson de préférence) et parsemer de tomate hachée. Couvrir hermétiquement (couvercle ou papier aluminium) et cuire 6 min.", "Découvrir et mélanger. Enfoncer les moules dans les pâtes, charnière en bas, poser les crevettes dessus, couvrir et cuire encore 6 min, jusqu'à ce que les moules soient ouvertes et les crevettes roses. Laisser réduire 2 à 3 min sans couvrir.", "Laisser reposer 2 à 3 min, arroser de jus de citron et parsemer de persil."]
  },
  {
    id: "riz-fruits-de-mer-chorizo-petits-pois", nom: "Riz aux fruits de mer, chorizo et petits pois", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53167",
    ingredients: [
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "chorizo", quantite: 55, unite: "g", ou: { id: "lardons", quantite: 55, unite: "g" } },
      { id: "curcuma", quantite: 2, unite: "g" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "petits-pois", quantite: 100, unite: "g" },
      { id: "fruits-de-mer-surgeles", quantite: 200, unite: "g", ou: { id: "crevettes", quantite: 200, unite: "g" } },
      { id: "citron", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Chauffer l'huile dans une sauteuse et faire fondre le poireau émincé 5 min sans le colorer. Ajouter le chorizo en dés et le faire revenir jusqu'à ce qu'il rende son huile.", "Ajouter le curcuma et le riz et bien les enrober d'huile. Verser 500 ml de bouillon (fait avec le bouillon cube, de poisson de préférence), porter à ébullition et laisser frémir 15 min en remuant de temps en temps.", "Ajouter les petits pois et cuire 5 min, puis les fruits de mer et les chauffer 1 à 2 min jusqu'à ce que le riz soit cuit. Rectifier l'assaisonnement et servir aussitôt avec des quartiers de citron."]
  },
  {
    id: "spaghettis-a-l-espagnole", nom: "Spaghettis à l'espagnole (chorizo et poivron)", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53177",
    ingredients: [
      { id: "chorizo", quantite: 80, unite: "g", ou: { id: "lardons", quantite: 80, unite: "g" } },
      { id: "pates", quantite: 250, unite: "g" },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "parmesan", quantite: 50, unite: "g" }
    ],
    etapes: ["Faire bouillir une grande casserole d'eau salée. Couper le chorizo en lanières, hacher le persil et couper le poivron (rouge de préférence, grillé en bocal si vous en avez) en petits morceaux.", "Cuire les spaghettis comme indiqué sur le paquet.", "Dans une grande poêle, chauffer l'huile, ajouter le chorizo, le poivron et beaucoup de poivre. Cuire 1 à 2 min, jusqu'à ce que l'huile soit rouge. Garder une demi-tasse d'eau de cuisson, égoutter les pâtes et les verser dans la poêle.", "Ajouter le persil et le parmesan, bien mélanger et ajouter un peu d'eau de cuisson pour lier. Servir avec du parmesan en plus."]
  },
  {
    id: "haricots-poulet-chorizo", nom: "Haricots à l'espagnole, poulet et chorizo", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 80, portions: 2,
    source: "TheMealDB", idSource: "53181",
    ingredients: [
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte", ou: { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "paprika", quantite: 5, unite: "g" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "eau", quantite: 750, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce", optionnel: true },
      { id: "pomme-de-terre", quantite: 125, unite: "g" },
      { id: "chorizo", quantite: 125, unite: "g", ou: { id: "lardons", quantite: 125, unite: "g" } },
      { id: "epinards", quantite: 50, unite: "g" }
    ],
    etapes: ["Mettre dans une cocotte le poulet, l'oignon haché, le paprika et un bouquet de thym, laurier et queues de persil. Couvrir d'eau (ou de bouillon fait avec le bouillon cube), porter à ébullition, couvrir et laisser frémir 45 min.", "Retirer le poulet. Ajouter les pommes de terre en morceaux, le chorizo en rondelles et les haricots égouttés (à l'origine : haricots pinto secs trempés une nuit). Cuire 20 à 30 min jusqu'à ce que les pommes de terre soient tendres.", "Enlever la peau et les os du poulet, l'effilocher en gros morceaux et le remettre dans la cocotte avec les épinards. Laisser frémir 5 min et parsemer de persil haché."]
  },
  {
    id: "poulet-paprika-citron-au-four", nom: "Poulet au paprika, oignons et citron au four", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53164",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 75, unite: "ml" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 190 °C. Mettre dans un grand plat le poulet, les oignons émincés finement, le paprika, le zeste et le jus du citron, le persil haché, 75 ml de bouillon (fait avec le bouillon cube) et l'huile. Mélanger avec les mains, saler et poivrer.", "Cuire 45 min, en remuant les oignons au bout de 20 min, jusqu'à ce que le poulet soit doré et les oignons fondants. Servir avec du riz."]
  },
  {
    id: "gratin-poulet-espagnol-puree-paprika", nom: "Gratin de poulet à l'espagnole, purée au paprika", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53155",
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "paprika", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-tomate", quantite: 400, unite: "g" },
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "olives-vertes", quantite: 30, unite: "g", ou: { id: "olives-noires", quantite: 30, unite: "g" } }
    ],
    etapes: ["Préchauffer le four à 200 °C. Si le poulet est cru, le cuire 10 min à la poêle et le couper en morceaux. Cuire les pommes de terre 15 à 20 min à l'eau bouillante, égoutter et les écraser en purée avec sel, poivre et les deux tiers du paprika.", "Pendant ce temps, faire revenir l'oignon émincé et l'ail haché dans l'huile quelques minutes. Ajouter le reste du paprika 1 min, puis les tomates concassées, et porter à frémissement.", "Verser dans un plat à gratin et ajouter le poulet, le poivron (grillé en bocal à l'origine, sinon cru en lanières), les olives, sel et poivre.", "Recouvrir de purée et cuire 15 min, jusqu'à ce que le dessus soit doré et que la sauce bouillonne."]
  },
  {
    id: "bouchees-figues-amandes", nom: "Bouchées aux figues et amandes", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53163",
    ingredients: [
      { id: "amandes", quantite: 50, unite: "g" },
      { id: "figues-seches", quantite: 250, unite: "g" },
      { id: "abricots-secs", quantite: 40, unite: "g" },
      { id: "raisins-secs", quantite: 25, unite: "g", optionnel: true },
      { id: "miel", quantite: 10, unite: "g" },
      { id: "graines-de-sesame", quantite: 50, unite: "g" }
    ],
    etapes: ["Mixer les amandes jusqu'à ce qu'elles soient presque toutes finement hachées, et les mettre dans un saladier.", "Hacher grossièrement les figues puis les mixer en une pâte lisse et collante. L'ajouter aux amandes et mélanger à la main avec les abricots et les raisins secs hachés (à l'origine : des cranberries), le miel (et un peu de cognac et de clou de girofle moulu si vous en avez).", "Former 3 boules et les rouler dans les graines de sésame. Les laisser sécher sous un torchon : elles sont meilleures après quelques jours et se gardent 2 mois au frais. Servir en tranches, avec du fromage par exemple."]
  },
  {
    id: "boulettes-palourdes-chorizo-calamars", nom: "Boulettes à l'espagnole, palourdes, chorizo et calamars", cuisine: "espagnole",
    difficulte: "difficile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53183",
    ingredients: [
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "echalote", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "vin-blanc", quantite: 45, unite: "ml" },
      { id: "chapelure", quantite: 20, unite: "g" },
      { id: "porc-hache", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "chorizo", quantite: 100, unite: "g", ou: { id: "lardons", quantite: 100, unite: "g" } },
      { id: "calmar", quantite: 100, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "palourdes", quantite: 150, unite: "g", ou: { id: "moules", quantite: 150, unite: "g" } },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "pain", quantite: 2, unite: "tranche", optionnel: true }
    ],
    etapes: ["Faire fondre le beurre dans une cocotte et y faire fondre l'échalote hachée 5 min. Ajouter le paprika (fumé de préférence) et la moitié de l'ail écrasé, 1 min. Verser 10 ml de vin blanc (à l'origine : xérès sec), puis mettre le tout dans un saladier avec la chapelure. Assaisonner et laisser refroidir.", "Ajouter le porc haché et le jaune d'œuf, bien mélanger et former 6 petites boulettes. Essuyer la cocotte, chauffer l'huile à feu moyen-vif et colorer les boulettes 5 min. Les retirer en laissant l'huile.", "Faire griller le chorizo en rondelles avec le reste de l'ail émincé. Ajouter les calamars en morceaux et les colorer un peu. Verser le reste du vin blanc et porter à ébullition en grattant le fond.", "Ajouter la tomate écrasée, porter à ébullition, puis les boulettes et les palourdes. Couvrir et cuire 5 min jusqu'à ce que les coquillages s'ouvrent (jeter ceux qui restent fermés). Parsemer de persil, arroser d'un filet d'huile d'olive et servir avec du pain."]
  },
  {
    id: "riz-crevettes-une-casserole", nom: "Riz aux crevettes et chorizo en une seule poêle", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53184",
    ingredients: [
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "chorizo", quantite: 30, unite: "g", ou: { id: "lardons", quantite: 30, unite: "g" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "riz", quantite: 125, unite: "g" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "crevettes", quantite: 150, unite: "g" }
    ],
    etapes: ["Faire bouillir de l'eau. Dans une poêle antiadhésive avec couvercle, faire revenir à feu vif l'oignon, le poivron et le chorizo émincés et l'ail haché dans l'huile, 3 min.", "Ajouter le riz (basmati à l'origine), les tomates concassées et 250 ml d'eau bouillante. Couvrir et cuire à feu vif 12 min.", "Découvrir et mélanger : le riz doit être presque tendre. Ajouter les crevettes (et un peu d'eau si c'est sec) et cuire encore 1 min, jusqu'à ce qu'elles soient roses et le riz tendre."]
  },
  {
    id: "riz-espagnol-fruits-de-mer-safran", nom: "Riz espagnol aux fruits de mer et au safran", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53182",
    ingredients: [
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "riz", quantite: 125, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "safran", quantite: 1, unite: "sachet", ou: { id: "curcuma", quantite: 2, unite: "g" } },
      { id: "fruits-de-mer-surgeles", quantite: 200, unite: "g", ou: { id: "crevettes", quantite: 200, unite: "g" } },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Chauffer l'huile dans une grande casserole et faire fondre l'oignon haché 6 à 7 min. Ajouter le poivron en morceaux et l'ail émincé, cuire 2 min, puis le riz (rond de préférence) 1 min en remuant.", "Verser 400 ml de bouillon (fait avec le bouillon cube, de légumes de préférence), ajouter le safran et porter à ébullition. Cuire sans couvrir à petits bouillons 20 min, en remuant de temps en temps, jusqu'à ce que le riz soit tendre.", "Ajouter les fruits de mer et le jus d'un demi-citron, et cuire 2 min jusqu'à ce que tout soit bien chaud. Servir parsemé de persil."]
  },
  {
    id: "pan-con-tomate-jambon-serrano", nom: "Pain à la tomate et jambon serrano", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53176",
    ingredients: [
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "baguette", quantite: 1, unite: "pièce", ou: { id: "pain", quantite: 4, unite: "tranche" } },
      { id: "jambon-cru", quantite: 3, unite: "tranche", ou: { id: "jambon", quantite: 3, unite: "tranche" } }
    ],
    etapes: ["Mélanger les tomates hachées, l'ail haché fin, l'huile d'olive, sel et poivre. Garder au frais jusqu'au moment de servir.", "Faire griller une dizaine de tranches de baguette. Mettre un peu de tomate sur chacune et poser dessus un morceau de jambon cru déchiré."]
  },
  {
    id: "tortilla-espagnole", nom: "Tortilla espagnole et pain à la tomate", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52872",
    ingredients: [
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "baguette", quantite: 1, unite: "pièce", optionnel: true },
      { id: "tomate", quantite: 2, unite: "pièce", optionnel: true }
    ],
    etapes: ["Dans une grande poêle antiadhésive à feu doux, faire fondre l'oignon émincé dans 30 ml d'huile et le beurre, sans le colorer, environ 15 min. Ajouter les pommes de terre en tranches fines, couvrir et cuire 15 à 20 min en remuant de temps en temps.", "Quand les pommes de terre sont tendres, ajouter 1 gousse d'ail écrasée, puis les œufs battus et assaisonnés.", "Couvrir et cuire doucement environ 20 min : les bords et le dessous doivent être dorés, le dessus pris et le centre encore un peu tremblant. Glisser sur une assiette, couvrir d'une autre assiette, retourner et remettre dans la poêle pour finir la cuisson. Servir tiède ou froid, parsemé de persil.", "Pain à la tomate (si on veut) : frotter des tranches de baguette chaudes avec le reste de l'ail, les couvrir de tomate râpée, saler et arroser d'un filet d'huile d'olive."]
  },
  {
    id: "agneau-confit-haricots-poivrons", nom: "Agneau confit à l'espagnole, haricots et poivrons", cuisine: "espagnole",
    difficulte: "moyen", tempsMinutes: 200, portions: 2,
    source: "TheMealDB", idSource: "53175",
    ingredients: [
      { id: "souris-d-agneau", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "olives-noires", quantite: 75, unite: "g" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "herbes-de-provence", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélange d'épices : mélanger 1 cuillère à soupe d'huile, 2 gousses d'ail écrasées, le paprika (fumé fort de préférence), les herbes (romarin à l'origine), un peu de persil et une bonne pincée de sel. Entailler la viande (souris d'agneau, ou 600 g d'épaule) et la frotter avec ce mélange. Laisser mariner jusqu'à 24 h si on a le temps.", "Préchauffer le four à 150 °C. Chauffer le reste de l'huile dans une cocotte et faire revenir 5 min l'oignon et la carotte hachés et le reste de l'ail. Verser 150 ml de bouillon (fait avec le bouillon cube) et porter à ébullition.", "Poser l'agneau dedans, couvrir et cuire au four 2 h.", "Retirer l'agneau, ajouter les haricots égouttés, le poivron (grillé en bocal à l'origine, sinon en lanières) et les olives, remettre l'agneau dessus et cuire encore 1 h sans couvercle, jusqu'à ce que la viande soit très tendre.", "Effilocher la viande avec deux fourchettes et mélanger le reste du persil aux haricots avant de servir."]
  },
  {
    id: "tortilla-epicee", nom: "Tortilla épicée aux tomates cerises", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53142",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "curry-en-poudre", quantite: 5, unite: "g" },
      { id: "tomates-cerises", quantite: 150, unite: "g" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "salade-verte", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Cuire les pommes de terre à l'eau, puis les couper en rondelles.", "Chauffer l'huile dans une grande poêle et faire revenir l'oignon émincé et la moitié du piment 5 min. Ajouter le curry, cuire 1 min, puis les tomates cerises, les pommes de terre et les tiges de coriandre hachées.", "Verser les œufs battus et bien assaisonnés sur les légumes et cuire doucement 8 à 10 min, jusqu'à ce que ce soit presque pris.", "Passer 1 à 2 min sous le gril du four pour faire prendre le dessus. Parsemer de feuilles de coriandre et du reste du piment, couper en parts et servir avec une salade verte."]
  },
  {
    id: "torrijas", nom: "Torrijas (pain perdu espagnol)", cuisine: "espagnole",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53165",
    ingredients: [
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "creme-fraiche", quantite: 30, unite: "ml" },
      { id: "lait", quantite: 30, unite: "ml" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "pain", quantite: 4, unite: "tranche" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" }
    ],
    etapes: ["Dans une assiette creuse, battre les œufs avec la crème, le lait, le sucre (et 3 cuillères à soupe de xérès doux si vous en avez). Couper chaque tranche de pain épaisse en deux et la tremper des deux côtés. Laisser imbiber 10 min en retournant de temps en temps, sans que le pain devienne trop mou.", "Chauffer 1 cuillère à soupe d'huile d'olive dans une grande poêle et cuire le pain environ 3 min de chaque côté, jusqu'à ce qu'il soit bien doré et croustillant sur les bords. Garder au chaud au four doux pendant la cuisson du reste.", "Saupoudrer de sucre glace et servir avec de la crème fraîche ou du yaourt grec."]
  }
]);
