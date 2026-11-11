// ============================================================
// RECETTES : cuisine jamaïcaine (25 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "akee-et-morue-salee", nom: "Akee et morue salée, petits beignets frits", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52936",
    ingredients: [
      { id: "morue-salee", quantite: 200, unite: "g", ou: { id: "poisson-blanc", quantite: 250, unite: "g" } },
      { id: "akee", quantite: 200, unite: "g", ou: { id: "oeuf", quantite: 4, unite: "pièce" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "curry-en-poudre", quantite: 4, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "farine", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 4, unite: "g" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 100, unite: "ml" },
      { id: "eau", quantite: 125, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille : faire tremper la morue salée dans l'eau froide, en changeant l'eau 2 ou 3 fois (inutile avec du poisson blanc frais).", "Égoutter la morue, la couvrir d'eau fraîche et porter à ébullition. Égoutter, recommencer, puis laisser frémir 5 min. Égoutter et l'effeuiller en gros morceaux, sans peau ni arêtes.", "Pâte des beignets : mélanger la farine, la levure, le beurre émietté du bout des doigts, une pincée de sel et environ 125 ml d'eau pour obtenir une pâte souple. Laisser reposer au frais.", "Égoutter et rincer l'akee en boîte. Dans une poêle, faire revenir l'oignon émincé dans l'huile d'olive sans le colorer. Ajouter le paprika, le curry, le poivre, le piment haché (si on aime) et le poivron en lanières, et cuire jusqu'à ce que le poivron soit tendre.", "Ajouter les tomates en dés puis la morue et mélanger. Incorporer l'akee très délicatement (il est fragile) et laisser mijoter doucement jusqu'au service. Sans akee : verser à la place les œufs battus et remuer doucement comme des œufs brouillés.", "Chauffer 1 cm d'huile de tournesol dans une poêle. Former des boules de pâte de la taille d'une prune, les aplatir un peu et les faire frire jusqu'à ce qu'elles soient dorées. Égoutter sur du papier absorbant et servir avec l'akee à la morue."]
  },
  {
    id: "poulet-jerk-riz-et-pois", nom: "Poulet jerk, riz et pois (haricots rouges au coco)", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 80, portions: 2,
    source: "TheMealDB", idSource: "52937",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce", ou: { id: "pilons-de-poulet", quantite: 4, unite: "pièce" } },
      { id: "citron-vert", quantite: 2, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 2, unite: "pièce" },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sucre", quantite: 20, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 8, unite: "g", ou: { id: "noix-de-muscade", quantite: 3, unite: "g" } },
      { id: "riz", quantite: 100, unite: "g" },
      { id: "lait-de-coco", quantite: 200, unite: "ml" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" }
    ],
    etapes: ["Marinade jerk : mixer en pâte épaisse la moitié des oignons nouveaux, le gingembre, 2 gousses d'ail, l'oignon, les piments, la moitié du thym, le jus d'un citron vert, la sauce soja, l'huile, le sucre, les deux tiers du piment de la Jamaïque et 1 cuillère à café de sel (ne pas ajouter d'eau). Goûter : plus de piment si on aime fort, un peu de sucre si c'est trop salé ou acide.", "Entailler les cuisses de poulet, les enrober de marinade en la faisant bien pénétrer. Couvrir et laisser mariner au frais, idéalement toute une nuit.", "Préchauffer le four à 180 °C. Mettre le poulet dans un plat avec l'autre citron vert coupé en deux et cuire 45 min, jusqu'à ce qu'il soit tendre et bien cuit (ou au barbecue, à feu doux et indirect, 30 à 40 min).", "Pendant ce temps, riz et pois : rincer le riz, le mettre dans une casserole avec le lait de coco, le reste des oignons nouveaux, du thym, de l'ail haché et du piment de la Jamaïque, l'eau et une pincée de sel. Porter à ébullition, puis couvrir et cuire 10 min à feu moyen.", "Ajouter les haricots rouges égouttés, couvrir et laisser 5 min hors du feu, jusqu'à ce que tout le liquide soit absorbé.", "Presser le citron vert rôti sur le poulet et servir avec le riz et pois (et de la sauce piquante si on aime très épicé)."]
  },
  {
    id: "patties-jamaicains-au-boeuf", nom: "Patties jamaïcains (chaussons au bœuf épicé)", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "52938",
    ingredients: [
      { id: "farine", quantite: 170, unite: "g" },
      { id: "curry-en-poudre", quantite: 3, unite: "g" },
      { id: "beurre", quantite: 85, unite: "g" },
      { id: "boeuf-hache", quantite: 300, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 2, unite: "g", ou: { id: "noix-de-muscade", quantite: 1, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "ketchup", quantite: 15, unite: "g" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Pâte : mélanger la farine, le curry (il donne la couleur jaune) et une pincée de sel. Ajouter le beurre froid en dés et sabler du bout des doigts. Verser peu à peu environ 60 ml d'eau glacée, juste assez pour former une boule. Couper en 4, filmer et mettre 30 min au frais.", "Garniture : assaisonner le bœuf haché avec le piment de la Jamaïque et le poivre. Faire revenir l'oignon haché dans l'huile jusqu'à ce qu'il soit translucide, puis ajouter le piment haché (si on aime), l'ail et le thym, 1 min.", "Ajouter le bœuf et une pincée de sel, l'émietter et cuire jusqu'à ce qu'il ne soit plus rose. Ajouter le ketchup et 180 ml d'eau, porter à ébullition puis laisser mijoter jusqu'à obtenir une sauce épaisse. Ajouter les oignons nouveaux émincés et laisser refroidir complètement.", "Préchauffer le four à 180 °C. Battre l'œuf avec 1 cuillère à soupe d'eau.", "Étaler chaque morceau de pâte en disque d'environ 13 cm. Mettre 3 bonnes cuillerées de garniture sur une moitié, mouiller le bord avec un peu d'eau, replier et souder en appuyant avec une fourchette. Poser sur une plaque avec du papier cuisson.", "Badigeonner d'œuf battu et cuire 30 min, jusqu'à ce que les chaussons soient dorés. Laisser tiédir sur une grille et servir chaud."]
  },
  {
    id: "callaloo-chou-kale-et-banane-plantain", nom: "Callaloo à la jamaïcaine (chou kale) et bananes plantain poêlées", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "52939",
    ingredients: [
      { id: "chou-kale", quantite: 250, unite: "g", ou: { id: "epinards", quantite: 300, unite: "g" } },
      { id: "lardons", quantite: 50, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "banane-plantain", quantite: 2, unite: "pièce", ou: { id: "banane", quantite: 2, unite: "pièce" } },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Retirer les grosses côtes du chou kale, garder les feuilles et les tiges tendres, et les laisser tremper 5 à 10 min dans l'eau froide. Émincer l'oignon, hacher l'ail et couper la tomate en dés.", "Égoutter le chou et le couper en morceaux. Dans une sauteuse, faire griller les lardons jusqu'à ce qu'ils soient croustillants.", "Ajouter l'oignon, l'ail et le thym, remuer 1 à 2 min. Ajouter la tomate, le piment (si on aime) et le paprika, et cuire 2 à 3 min.", "Ajouter le chou et une pincée de sel, bien mélanger, couvrir et laisser cuire à l'étouffée 6 à 8 min jusqu'à ce que les feuilles soient tendres (ajouter un petit filet d'eau si besoin). Rectifier l'assaisonnement.", "Couper les bouts des bananes plantain, inciser la peau sur la longueur et la retirer. Couper les bananes en longues tranches.", "Les faire dorer à la poêle dans l'huile à feu moyen, en les retournant, avec sel et poivre, jusqu'à ce qu'elles soient bien colorées et fondantes. Servir avec le chou."]
  },
  {
    id: "brown-stew-chicken", nom: "Brown stew chicken (poulet mijoté au coco et au thym)", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "52940",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce", ou: { id: "pilons-de-poulet", quantite: 4, unite: "pièce" } },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce", optionnel: true },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 2, unite: "g", ou: { id: "noix-de-muscade", quantite: 1, unite: "g" } },
      { id: "sauce-soja", quantite: 20, unite: "ml" },
      { id: "fecule", quantite: 6, unite: "g" },
      { id: "lait-de-coco", quantite: 250, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les cuisses en deux à l'articulation. Les frotter avec le jus du citron vert, puis jeter l'excès de jus.", "Dans un saladier, mélanger le poulet avec la tomate, l'oignon nouveau, l'oignon, l'ail et le poivron hachés, le thym, le piment de la Jamaïque, la sauce soja, le sel et le poivre. Couvrir et laisser mariner au moins 1 h au frais.", "Chauffer l'huile dans une cocotte. Retirer les morceaux de poulet de la marinade en les secouant (garder la marinade) et les faire dorer à feu vif, quelques morceaux à la fois.", "Retirer l'excès de gras, remettre tout le poulet, verser la marinade et ajouter la carotte en rondelles. Cuire 10 min à feu moyen en remuant.", "Délayer la fécule dans le lait de coco et verser dans la cocotte en remuant sans arrêt. Baisser le feu au minimum et laisser mijoter 20 à 25 min, jusqu'à ce que le poulet soit tendre. Servir avec du riz."]
  },
  {
    id: "soupe-de-pois-rouges", nom: "Soupe de pois rouges (haricots rouges, bœuf et petites boulettes)", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 110, portions: 2,
    source: "TheMealDB", idSource: "52941",
    ingredients: [
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "steak-de-boeuf", quantite: 300, unite: "g" },
      { id: "lardons", quantite: 50, unite: "g", optionnel: true },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "piment-de-la-jamaique", quantite: 3, unite: "g", ou: { id: "noix-de-muscade", quantite: 1, unite: "g" } },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "lait-de-coco", quantite: 100, unite: "ml" },
      { id: "farine", quantite: 60, unite: "g" },
      { id: "eau", quantite: 1000, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper le bœuf en cubes. Dans une grande casserole, mettre le bœuf, les lardons (ils remplacent la queue de cochon salée de la recette d'origine), la carotte en rondelles, l'oignon et l'oignon nouveau hachés, l'ail écrasé, le thym, le piment entier (si on aime), le piment de la Jamaïque et le poivre.", "Couvrir avec l'eau, porter à ébullition en retirant l'écume, puis laisser cuire à petits bouillons 1 h, jusqu'à ce que le bœuf soit tendre.", "Ajouter les haricots rouges égouttés (en écraser une partie pour épaissir), les pommes de terre en morceaux et le lait de coco, et cuire 15 min.", "Pendant ce temps, mélanger la farine avec environ 30 ml d'eau et une pincée de sel pour obtenir une pâte souple. Laisser reposer 5 min, puis prélever des petits morceaux et les rouler entre les mains en forme de petits boudins.", "Les ajouter dans la soupe, bien remuer et cuire encore 15 min à bons bouillons. Goûter et saler seulement si besoin (les lardons salent déjà). Retirer le piment. La soupe épaissit en refroidissant ; elle se congèle bien."]
  },
  {
    id: "queue-de-boeuf-aux-haricots-blancs", nom: "Queue de bœuf braisée aux haricots blancs (oxtail)", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 180, portions: 2,
    source: "TheMealDB", idSource: "52943",
    ingredients: [
      { id: "queue-de-boeuf", quantite: 700, unite: "g", ou: { id: "steak-de-boeuf", quantite: 400, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 30, unite: "ml" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "piment-de-la-jamaique", quantite: 1, unite: "g", optionnel: true },
      { id: "fecule", quantite: 8, unite: "g" },
      { id: "eau", quantite: 700, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélanger la queue de bœuf avec l'oignon, l'oignon nouveau, l'ail et le gingembre hachés, le piment haché, la sauce soja, le thym, le sel et le poivre.", "Chauffer l'huile dans une cocotte à feu moyen-vif et faire dorer la viande sur toutes les faces, environ 10 min.", "Verser 650 ml d'eau, couvrir et laisser mijoter à feu doux 2 h 30, jusqu'à ce que la viande se détache de l'os (en remettant un peu d'eau si besoin). À l'autocuiseur : 350 ml d'eau et 25 à 30 min sous pression.", "Ajouter les haricots blancs égouttés et le piment de la Jamaïque, et reporter à frémissement.", "Délayer la fécule dans 2 cuillères à soupe d'eau, verser dans la cocotte et remuer quelques minutes jusqu'à ce que la sauce épaississe. Servir avec du riz."]
  },
  {
    id: "poisson-escovitch", nom: "Poisson escovitch (poisson frit, sauce vinaigrée aux légumes)", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52944",
    ingredients: [
      { id: "poisson-blanc", quantite: 400, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 100, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 3, unite: "g" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 1, unite: "g", optionnel: true },
      { id: "sauce-worcestershire", quantite: 5, unite: "ml", optionnel: true },
      { id: "vinaigre", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Rincer le poisson (vivaneau à l'origine ; daurade, bar ou filets de poisson blanc), le frotter de jus de citron vert, saler et poivrer.", "Chauffer l'huile dans une grande poêle à feu moyen et y faire frire le poisson 5 à 7 min de chaque côté (moins pour des filets) jusqu'à ce qu'il soit cuit et croustillant. Le réserver au chaud.", "Ne garder que 2 à 3 cuillères à soupe d'huile dans la poêle. Ajouter le laurier, l'ail écrasé et le gingembre râpé, et remuer 1 min sans laisser brûler l'ail.", "Ajouter l'oignon émincé, le poivron et la carotte en fines lanières, le thym, le piment émincé, le sucre et le piment de la Jamaïque, et remuer 2 à 3 min.", "Verser le vinaigre (et la sauce Worcestershire), saler, poivrer et laisser frémir 2 min. Retirer le laurier et le thym et napper le poisson de cette sauce. La sauce peut se préparer 2 jours à l'avance."]
  },
  {
    id: "pudding-de-patate-douce-au-coco", nom: "Pudding de patate douce au coco et aux épices", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53344",
    ingredients: [
      { id: "patate-douce", quantite: 450, unite: "g" },
      { id: "lait-de-coco", quantite: 270, unite: "ml" },
      { id: "sucre", quantite: 120, unite: "g" },
      { id: "farine", quantite: 35, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 2, unite: "g", optionnel: true },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "noix-de-muscade", quantite: 2, unite: "g" },
      { id: "gingembre", quantite: 3, unite: "g" },
      { id: "raisins-secs", quantite: 40, unite: "g", optionnel: true },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 175 °C. Beurrer un petit moule à cake et le chemiser de papier cuisson.", "Peler les patates douces et les râper finement (au robot ou à la râpe fine).", "Rouler les raisins secs dans 1 cuillère à café de farine prise sur le total.", "Dans un saladier, mélanger la patate douce râpée, 110 g de sucre, le reste de farine, la cannelle, la muscade et le piment de la Jamaïque (en garder une pincée de chaque pour le dessus), le gingembre râpé, le sel (et 1 cuillère à café de vanille si on en a). Ajouter 180 ml de lait de coco pour obtenir une pâte, puis les raisins.", "Verser dans le moule, lisser et cuire 1 h 10 à 1 h 20, jusqu'à ce que ce soit presque pris mais encore un peu tendre au centre.", "Mélanger le reste du lait de coco avec le reste du sucre et la pincée d'épices, verser sur le pudding à mi-cuisson (après 40 min). Laisser refroidir avant de couper ; il se tient mieux le lendemain."]
  },
  {
    id: "curry-de-poulet-jamaicain", nom: "Curry de poulet jamaïcain aux pommes de terre", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 110, portions: 2,
    source: "TheMealDB", idSource: "53345",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce", ou: { id: "pilons-de-poulet", quantite: 4, unite: "pièce" } },
      { id: "curry-en-poudre", quantite: 10, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les cuisses en deux à l'articulation. Les mélanger avec un tiers du curry, l'oignon, les oignons nouveaux et le poivron émincés, l'ail, le piment (si on aime) et le thym. Couvrir et laisser mariner au moins 1 h au frais (ou toute une nuit).", "Retirer les légumes du poulet et les mettre de côté. Chauffer l'huile dans une cocotte à feu moyen, ajouter le reste du curry et remuer 20 à 30 secondes.", "Ajouter les légumes de la marinade et remuer 3 à 5 min jusqu'à ce que l'oignon ramollisse (avec 1 cuillère d'eau s'ils attachent).", "Ajouter le poulet et l'eau, couvrir et cuire 30 à 35 min à feu moyen-doux en remuant de temps en temps.", "Ajouter les pommes de terre en cubes 15 min avant la fin et poursuivre la cuisson à couvert jusqu'à ce qu'elles soient tendres. Saler, poivrer et servir avec du riz."]
  },
  {
    id: "glace-rhum-raisins", nom: "Glace rhum-raisins sans sorbetière", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53347",
    ingredients: [
      { id: "rhum", quantite: 60, unite: "ml" },
      { id: "raisins-secs", quantite: 80, unite: "g" },
      { id: "lait-concentre-sucre", quantite: 200, unite: "g" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 1, unite: "g", optionnel: true },
      { id: "creme-fraiche", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer le rhum dans une petite casserole sans le faire bouillir. Hors du feu, ajouter les raisins secs (et 1/2 cuillère à café de vanille si on en a) et laisser gonfler au moins 30 min.", "Égoutter les raisins en gardant 2 cuillères à soupe de rhum.", "Dans un saladier, fouetter le lait concentré sucré, le sucre, la cannelle, le piment de la Jamaïque, une pincée de sel et le rhum gardé, jusqu'à ce que le sucre soit dissous.", "Dans un autre saladier, fouetter la crème bien froide (de la crème liquide entière de préférence) en chantilly ferme.", "Incorporer délicatement la chantilly au mélange au lait concentré sans la faire retomber, puis les raisins.", "Verser dans une boîte allant au congélateur, couvrir et congeler au moins 6 h. Sortir 5 à 10 min avant de servir. Se garde plusieurs semaines au congélateur."]
  },
  {
    id: "bun-jamaicain-aux-epices", nom: "Bun jamaïcain (cake épicé à la bière et aux raisins)", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "53348",
    ingredients: [
      { id: "farine", quantite: 190, unite: "g" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 75, unite: "g" },
      { id: "biere", quantite: 125, unite: "ml" },
      { id: "lait", quantite: 40, unite: "ml" },
      { id: "miel", quantite: 40, unite: "g" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "melasse", quantite: 10, unite: "g", optionnel: true },
      { id: "raisins-secs", quantite: 110, unite: "g" },
      { id: "cheddar", quantite: 60, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire tremper les raisins secs (et d'autres fruits secs si on en a : cranberries, cerises) dans la bière 30 min.", "Préchauffer le four à 165 °C et beurrer un petit moule à cake.", "Mélanger dans un saladier la farine, la levure, la cannelle et le sel. Retirer 1 cuillère à soupe de ce mélange et y rouler les fruits égouttés (garder la bière).", "Dans un autre bol, mélanger le sucre, l'œuf, le lait, le miel, le beurre fondu, la mélasse, la bière de trempage (et 1 cuillère à café de vanille si on en a).", "Creuser un puits dans les ingrédients secs, verser le mélange liquide et mélanger juste ce qu'il faut, puis ajouter les fruits.", "Verser dans le moule et cuire 40 à 50 min, jusqu'à ce qu'une pique ressorte sèche. Laisser 5 min dans le moule, puis refroidir sur une grille. À la jamaïcaine, servir en tranches avec une tranche de cheddar. Se garde une semaine emballé."]
  },
  {
    id: "crevettes-pimentees-jamaicaines", nom: "Crevettes pimentées à la jamaïcaine (pepper shrimp)", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53349",
    ingredients: [
      { id: "crevettes", quantite: 350, unite: "g" },
      { id: "piment-frais", quantite: 2, unite: "pièce" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 3, unite: "g", ou: { id: "noix-de-muscade", quantite: 1, unite: "g" } },
      { id: "ail-en-poudre", quantite: 2, unite: "g", optionnel: true },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "vinaigre", quantite: 30, unite: "ml" },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Mélanger les crevettes (de préférence avec leur carapace) avec les piments hachés, le paprika (il remplace le roucou de la recette d'origine pour la couleur), le piment de la Jamaïque et l'ail en poudre. Laisser mariner 10 min.", "Dans une grande poêle, porter doucement à frémissement l'eau avec le bouillon cube émietté.", "Ajouter l'oignon et l'ail hachés et cuire 2 min jusqu'à ce qu'ils ramollissent.", "Ajouter les crevettes et le thym en les étalant, couvrir et cuire 5 à 7 min en remuant de temps en temps, jusqu'à ce qu'elles deviennent bien orange et soient cuites.", "Ajouter le vinaigre, remuer et cuire encore 1 min. Goûter et saler. Servir chaud, arrosé d'un peu du jus de cuisson."]
  },
  {
    id: "corned-beef-au-chou", nom: "Corned-beef au chou à la jamaïcaine", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53350",
    ingredients: [
      { id: "corned-beef", quantite: 200, unite: "g", ou: { id: "boeuf-hache", quantite: 250, unite: "g" } },
      { id: "chou", quantite: 300, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "ketchup", quantite: 15, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer l'huile dans une sauteuse à feu moyen-vif. Ajouter l'oignon et le poivron hachés et faire revenir 3 à 5 min. Ajouter l'ail et remuer 1 min.", "Ajouter le chou émincé finement et cuire 3 à 5 min en remuant souvent, jusqu'à ce qu'il ramollisse.", "Ajouter le corned-beef émietté, les tomates en dés et le thym. (Avec du bœuf haché : le faire d'abord bien dorer à part, puis l'ajouter.)", "Ajouter le ketchup et le piment haché (si on aime), remuer et cuire 3 à 5 min à feu moyen, jusqu'à ce que tout soit bien chaud. Saler, poivrer et servir avec du riz blanc ou du pain."]
  },
  {
    id: "beignets-de-banane-jamaicains", nom: "Beignets de banane jamaïcains", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53351",
    ingredients: [
      { id: "banane", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g", optionnel: true },
      { id: "farine", quantite: 80, unite: "g" },
      { id: "huile-de-tournesol", quantite: 60, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Écraser les bananes bien mûres à la fourchette dans un saladier.", "Ajouter le sucre, la cannelle, la muscade, une pincée de sel (et 1/2 cuillère à café de vanille si on en a). Tamiser la farine par-dessus et mélanger juste ce qu'il faut.", "Chauffer l'huile dans une poêle à feu moyen-vif. Déposer la pâte par cuillerées.", "Quand le dessous est doré et que des bulles apparaissent sur le dessus, retourner et dorer l'autre face. Égoutter sur du papier absorbant et déguster tiède."]
  },
  {
    id: "dumplings-bouillis", nom: "Dumplings bouillis (galettes de pâte pochées)", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53353",
    ingredients: [
      { id: "farine", quantite: 150, unite: "g" },
      { id: "eau", quantite: 1600, unite: "ml" },
      { id: "sel", quantite: 10, unite: "g" }
    ],
    etapes: ["Porter à ébullition 1,5 litre d'eau avec 1 cuillère à soupe de sel.", "Dans un saladier, mélanger la farine avec 1/2 cuillère à café de sel. Ajouter peu à peu environ 80 ml d'eau en mélangeant à la main jusqu'à obtenir une pâte.", "Partager la pâte en 6 morceaux égaux, les rouler en boules lisses puis les aplatir avec la paume en disques épais.", "Les plonger un par un dans l'eau bouillante pour qu'ils ne collent pas, et cuire 15 à 20 min en remuant de temps en temps, jusqu'à ce qu'ils remontent et soient cuits à cœur.", "Les sortir à l'écumoire et servir en accompagnement d'un plat en sauce (akee et morue, ragoûts, soupe)."]
  },
  {
    id: "curry-de-chevre-jamaicain", nom: "Curry de chèvre jamaïcain (curry goat)", cuisine: "jamaïcaine",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "53354",
    ingredients: [
      { id: "viande-de-chevre", quantite: 500, unite: "g", ou: { id: "gigot-d-agneau", quantite: 500, unite: "g" } },
      { id: "curry-en-poudre", quantite: 12, unite: "g" },
      { id: "gingembre", quantite: 3, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 1, unite: "g", optionnel: true },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 600, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Rincer la viande en morceaux avec un peu de vinaigre et d'eau, puis l'éponger. La mélanger avec les deux tiers du curry, le gingembre râpé, le piment de la Jamaïque, l'oignon émincé, l'ail en lamelles, le thym, le sel et le poivre. Laisser mariner au moins 4 h (ou une nuit) au frais.", "Retirer l'oignon et l'ail de la viande et les garder. Chauffer la moitié de l'huile dans une cocotte et faire dorer la viande 2 à 3 min par face. La retirer.", "Ajouter le reste de l'huile et le reste du curry, remuer 10 secondes, puis ajouter l'oignon et l'ail et faire revenir 4 min (avec un peu d'eau s'ils attachent).", "Remettre la viande, verser 500 ml d'eau, couvrir et laisser mijoter à feu doux 1 h 45 à 2 h, jusqu'à ce que la viande soit très tendre (à l'autocuiseur : 300 ml d'eau, 40 min sous pression).", "Ajouter les pommes de terre en cubes et le piment entier, et cuire à découvert 15 à 20 min jusqu'à ce que les pommes de terre soient tendres et la sauce épaissie. Retirer le piment avant de servir, avec du riz."]
  },
  {
    id: "festival-beignets-sucres", nom: "Festival (beignets sucrés à la semoule de maïs)", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53355",
    ingredients: [
      { id: "farine", quantite: 95, unite: "g" },
      { id: "semoule-de-mais", quantite: 40, unite: "g", ou: { id: "semoule", quantite: 40, unite: "g" } },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "levure-chimique", quantite: 4, unite: "g" },
      { id: "lait", quantite: 90, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer l'huile dans une petite casserole à bords hauts (au moins 5 cm d'huile) à feu moyen, jusqu'à environ 175 °C (un morceau de pâte doit grésiller tout de suite).", "Mélanger dans un saladier la farine, la semoule de maïs, le sucre, la levure et le sel.", "Ajouter le lait (et 1/2 cuillère à café de vanille si on en a) et mélanger jusqu'à ce que la pâte se tienne. Former une boule sans trop la travailler.", "Prélever des morceaux de pâte et les rouler en ovales allongés (environ 6).", "Les faire frire 4 à 6 min en les retournant, jusqu'à ce qu'ils soient bien dorés. Égoutter sur du papier absorbant. Se servent avec le poisson escovitch ou le poulet jerk."]
  },
  {
    id: "dumplings-frits", nom: "Dumplings frits (petits pains frits)", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53356",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 4, unite: "g" },
      { id: "lait", quantite: 90, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 150, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Mélanger dans un saladier la farine, la levure et le sel.", "Verser le lait et mélanger, puis rassembler en boule et pétrir légèrement jusqu'à ce que la pâte se tienne.", "Partager en 6 morceaux, les rouler en boules et les aplatir légèrement.", "Chauffer l'huile dans une poêle à feu moyen (environ 175 °C). Faire frire les dumplings 2 à 3 min de chaque côté, jusqu'à ce qu'ils soient bien dorés.", "Égoutter sur du papier absorbant. Se servent au petit-déjeuner ou avec un plat en sauce."]
  },
  {
    id: "riz-et-pois-jamaicain", nom: "Riz et pois (riz aux haricots rouges et au lait de coco)", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53357",
    ingredients: [
      { id: "riz", quantite: 150, unite: "g" },
      { id: "lait-de-coco", quantite: 150, unite: "ml" },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" },
      { id: "piment-de-la-jamaique", quantite: 1, unite: "g", ou: { id: "noix-de-muscade", quantite: 1, unite: "g" } },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "eau", quantite: 120, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une casserole à fond épais, mélanger le riz, le lait de coco, les haricots rouges avec leur jus, l'eau, le sel, le piment de la Jamaïque et le poivre.", "Poser par-dessus les oignons nouveaux entiers, le thym et le piment entier (il parfume sans trop piquer s'il n'est pas percé).", "Porter à ébullition, puis baisser le feu au minimum, couvrir et cuire 18 min.", "Retirer du feu et laisser reposer 5 min sans ouvrir. Retirer les oignons nouveaux, le thym et le piment, égrener à la fourchette et servir."]
  },
  {
    id: "boules-de-tamarin", nom: "Boules de tamarin sucrées (friandise)", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53360",
    ingredients: [
      { id: "tamarin", quantite: 150, unite: "g" },
      { id: "sucre", quantite: 100, unite: "g" }
    ],
    etapes: ["Utiliser de la pulpe de tamarin en bloc (pas de concentré liquide) et retirer les graines s'il en reste.", "Écraser à la fourchette la pulpe avec les deux tiers du sucre jusqu'à ce que ce soit bien mélangé.", "Prélever de petites quantités et les rouler entre les mains en billes de la taille d'une grosse bille.", "Rouler les boules dans le reste du sucre étalé sur une assiette. Les manger tout de suite, ou les laisser sécher quelques heures pour qu'elles soient plus fermes et bien givrées."]
  },
  {
    id: "callaloo-et-morue-salee", nom: "Callaloo et morue salée (épinards sautés à la morue)", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53361",
    ingredients: [
      { id: "morue-salee", quantite: 150, unite: "g", ou: { id: "poisson-blanc", quantite: 200, unite: "g" } },
      { id: "lardons", quantite: 60, unite: "g" },
      { id: "epinards", quantite: 300, unite: "g", ou: { id: "chou-kale", quantite: 250, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille : faire tremper la morue salée dans l'eau froide (inutile avec du poisson blanc frais, qu'on fera simplement pocher 5 min).", "Mettre la morue dans une casserole d'eau froide et chauffer jusqu'à ébullition (une mousse se forme). Égoutter, laisser tiédir et l'effilocher.", "Faire griller les lardons dans une sauteuse à feu moyen jusqu'à ce qu'ils soient croustillants. Retirer le gras en n'en laissant qu'une cuillère à soupe.", "Ajouter l'oignon et les oignons nouveaux hachés, le piment (si on aime) et l'ail, et cuire 2 min jusqu'à ce que l'oignon ramollisse.", "Ajouter la morue et remuer 1 min, puis les épinards (le callaloo d'origine), les tomates en dés, le thym et le poivre. Mélanger et cuire 2 à 4 min, jusqu'à ce que les feuilles tombent et que tout soit chaud."]
  },
  {
    id: "curry-de-crevettes-jamaicain", nom: "Curry de crevettes jamaïcain au lait de coco", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53362",
    ingredients: [
      { id: "crevettes", quantite: 350, unite: "g" },
      { id: "curry-en-poudre", quantite: 12, unite: "g" },
      { id: "ail-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "lait-de-coco", quantite: 250, unite: "ml" },
      { id: "ketchup", quantite: 5, unite: "g" },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélanger les crevettes décortiquées avec un tiers du curry et l'ail en poudre, et laisser reposer 10 min pendant qu'on coupe les légumes.", "Chauffer l'huile dans une grande poêle à feu moyen. Ajouter l'oignon et le poivron émincés, le piment (si on aime) et l'ail haché, et remuer 5 min jusqu'à ce que le poivron ramollisse.", "Ajouter le reste du curry et remuer encore 1 min.", "Ajouter le lait de coco, les crevettes, le ketchup et le thym, en veillant à ce que les crevettes baignent dans la sauce.", "Laisser frémir à feu moyen 5 à 6 min en retournant les crevettes à mi-cuisson, jusqu'à ce qu'elles soient cuites. Saler, poivrer et servir avec du riz."]
  },
  {
    id: "porridge-de-mais-au-coco", nom: "Porridge de semoule de maïs au coco (petit-déjeuner)", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53363",
    ingredients: [
      { id: "semoule-de-mais", quantite: 70, unite: "g", ou: { id: "semoule", quantite: 70, unite: "g" } },
      { id: "lait-de-coco", quantite: 200, unite: "ml" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "piment-de-la-jamaique", quantite: 1, unite: "g", optionnel: true },
      { id: "lait-concentre-sucre", quantite: 60, unite: "g", ou: { id: "sucre", quantite: 30, unite: "g" } },
      { id: "eau", quantite: 500, unite: "ml" }
    ],
    etapes: ["Dans une casserole à fond épais, porter à ébullition 300 ml d'eau avec le lait de coco.", "Pendant ce temps, fouetter la semoule de maïs avec le reste de l'eau (200 ml) jusqu'à ce que ce soit lisse.", "Verser ce mélange dans la casserole en fouettant 1 min pour éviter les grumeaux. Baisser le feu au minimum, couvrir et cuire 15 à 20 min en remuant de temps en temps.", "5 min avant la fin, ajouter la cannelle, la muscade et le piment de la Jamaïque (et 1 cuillère à café de vanille si on en a).", "Retirer du feu et sucrer avec le lait concentré. Servir chaud."]
  },
  {
    id: "chou-etuve-jamaicain", nom: "Chou à l'étuvée à la jamaïcaine", cuisine: "jamaïcaine",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53364",
    ingredients: [
      { id: "chou", quantite: 400, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Émincer le chou, couper la carotte en fines rondelles, la tomate en dés, et hacher l'oignon, l'ail et les oignons nouveaux (le piment aussi, si on aime : un demi suffit).", "Tout mettre dans une grande sauteuse avec le thym, l'huile, le beurre, l'eau, le sel et le poivre. Couvrir.", "Cuire 10 min à feu moyen en remuant de temps en temps.", "Baisser le feu et cuire encore 5 min, jusqu'à ce que le chou soit tendre. Retirer les branches de thym et servir."]
  }
]);
