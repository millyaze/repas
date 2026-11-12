// ============================================================
// RECETTES : cuisine grecque (8 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// (La salade grecque est déjà dans recettes/mediterraneenne.js.)
// ============================================================
ajouterRecettes([
  {
    id: "salade-grecque-poulet-quinoa", nom: "Salade grecque au poulet et au quinoa", cuisine: "grecque",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53011",
    ingredients: [
      { id: "quinoa", quantite: 110, unite: "g", ou: { id: "boulgour", quantite: 110, unite: "g" } },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "tomates-cerises", quantite: 150, unite: "g" },
      { id: "olives-noires", quantite: 30, unite: "g" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "feta", quantite: 100, unite: "g" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire le quinoa comme indiqué sur le paquet (environ 12 min à l'eau bouillante), le rincer à l'eau froide et bien l'égoutter.", "Pendant ce temps, écraser le beurre avec le piment et l'ail hachés pour faire un beurre épicé.", "Enrober les blancs de poulet de 2 cuillères à café d'huile, saler, poivrer, et les cuire 3 à 4 min de chaque côté dans une poêle-gril bien chaude, jusqu'à ce qu'ils soient cuits à cœur. Les poser sur une assiette, les parsemer de beurre épicé et laisser fondre.", "Dans un saladier, mettre les tomates cerises coupées en deux, les olives, l'oignon rouge haché, la feta en dés et la menthe hachée. Ajouter le quinoa, le reste de l'huile, le jus et le zeste d'un demi-citron, saler, poivrer et mélanger.", "Servir la salade avec le poulet par-dessus, arrosé de son jus au beurre."]
  },
  {
    id: "garides-saganaki", nom: "Garides saganaki (crevettes à la tomate et à la feta)", cuisine: "grecque",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52764",
    ingredients: [
      { id: "crevettes", quantite: 250, unite: "g" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "vin-blanc", quantite: 120, unite: "ml" },
      { id: "tomates-concassees", quantite: 200, unite: "g", ou: { id: "tomate", quantite: 3, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "feta", quantite: 100, unite: "g" },
      { id: "pain", quantite: 4, unite: "tranche", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Si les crevettes sont crues et entières : les plonger 5 min dans l'eau bouillante, les égoutter et les laisser tiédir, puis retirer les pattes et la carapace en gardant la tête et la queue. (Des crevettes déjà cuites et décortiquées marchent aussi.)", "Faire chauffer 1 cuillère à soupe d'huile dans une sauteuse et y faire fondre l'oignon haché en remuant.", "Ajouter le persil haché, le vin blanc, les tomates concassées, l'ail écrasé et le reste de l'huile. Laisser mijoter environ 30 min en remuant de temps en temps, jusqu'à ce que la sauce épaississe. Saler et poivrer.", "Ajouter les crevettes et laisser frémir 5 min.", "Ajouter la feta en dés, retirer du feu et laisser reposer jusqu'à ce que le fromage commence à fondre. Servir chaud avec des tranches de pain croustillant (ou mélangé à des pâtes)."]
  },
  {
    id: "gigantes-plaki", nom: "Gigantes plaki (haricots blancs au four à la tomate)", cuisine: "grecque",
    difficulte: "facile", tempsMinutes: 125, portions: 2,
    source: "TheMealDB", idSource: "53012",
    ingredients: [
      { id: "haricots-blancs-secs", quantite: 200, unite: "g", ou: { id: "haricots-blancs-en-boite", quantite: 2, unite: "boîte" } },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "concentre-de-tomate", quantite: 15, unite: "g", ou: { id: "sauce-tomate", quantite: 30, unite: "g" } },
      { id: "tomate", quantite: 4, unite: "pièce" },
      { id: "sucre", quantite: 6, unite: "g" },
      { id: "origan", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille, faire tremper les haricots secs (des gros, type « gigantes », si possible) dans beaucoup d'eau. Les égoutter, les rincer, les couvrir d'eau froide, porter à ébullition et laisser frémir environ 50 min : ils doivent être un peu tendres mais pas mous. Égoutter. (Avec des haricots en boîte : juste les égoutter et les rincer.)", "Préchauffer le four à 180 °C. Faire chauffer l'huile dans une grande poêle et y faire fondre l'oignon et l'ail hachés 10 min à feu moyen, sans qu'ils brunissent.", "Ajouter le concentré de tomate et cuire 1 min, puis les tomates en dés, le sucre, l'origan et la cannelle. Laisser mijoter 2 à 3 min, saler, poivrer généreusement et ajouter les haricots.", "Verser dans un plat à four et cuire environ 45 min sans couvrir et sans remuer : les haricots s'imprègnent de la sauce, qui épaissit.", "Laisser tiédir, parsemer de persil haché et arroser d'un filet d'huile d'olive avant de servir."]
  },
  {
    id: "cheesecake-au-yaourt-et-au-miel", nom: "Cheesecake grec au yaourt et au miel", cuisine: "grecque",
    difficulte: "moyen", tempsMinutes: 80, portions: 2,
    source: "TheMealDB", idSource: "53007",
    ingredients: [
      { id: "biscuits-secs", quantite: 30, unite: "g" },
      { id: "amandes", quantite: 25, unite: "g" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "yaourt-grec", quantite: 65, unite: "g" },
      { id: "mascarpone", quantite: 190, unite: "g", ou: { id: "ricotta", quantite: 190, unite: "g" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "orange", quantite: 1, unite: "pièce", optionnel: true },
      { id: "miel", quantite: 90, unite: "g" },
      { id: "fruits-rouges-surgeles", quantite: 100, unite: "g", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 160 °C (140 °C en chaleur tournante). Écraser les biscuits et la plupart des amandes dans un sac congélation avec un rouleau à pâtisserie.", "Mélanger avec le beurre fondu et tasser au fond de 2 grands ramequins (ou d'un petit plat). Cuire 10 min jusqu'à ce que le fond soit croustillant.", "Mélanger le yaourt et le mascarpone, puis ajouter l'œuf en fouettant. Ajouter les zestes du citron et de l'orange, puis les deux tiers du miel.", "Verser sur le fond de biscuits, couvrir de papier aluminium sans serrer et cuire 35 min. Retirer l'aluminium et cuire encore 10 min, jusqu'à ce que le dessus soit légèrement doré et ferme, avec juste un léger tremblement au centre.", "Laisser refroidir (se garde 2 jours au frais). Servir parsemé du reste des amandes, arrosé du reste de miel, avec des fruits frais."]
  },
  {
    id: "souvlaki-d-agneau-au-citron", nom: "Souvlaki d'agneau au citron (brochettes en pain pita)", cuisine: "grecque",
    difficulte: "facile", tempsMinutes: 140, portions: 2,
    source: "TheMealDB", idSource: "53009",
    ingredients: [
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "aneth", quantite: 3, unite: "g", ou: { id: "origan", quantite: 1, unite: "g" } },
      { id: "gigot-d-agneau", quantite: 350, unite: "g" },
      { id: "pain-pita", quantite: 2, unite: "pièce" }
    ],
    etapes: ["Piler l'ail avec le sel jusqu'à obtenir une pâte (ou l'écraser au presse-ail puis avec le plat d'un couteau).", "Fouetter l'huile avec le jus et le zeste du citron, l'aneth haché et la pâte d'ail. Ajouter l'agneau coupé en cubes et bien mélanger. Couvrir et laisser mariner au frais au moins 2 h (ou toute une nuit ; dans ce cas, sortir la viande 30 min avant la cuisson). Si les piques sont en bois, les faire tremper dans l'eau froide.", "Enfiler la viande sur les piques. Faire chauffer le gril du four, une poêle-gril ou le barbecue.", "Cuire les brochettes 2 à 3 min de chaque côté en les badigeonnant avec le reste de marinade.", "Réchauffer rapidement les pains pita et les garnir de souvlaki. Servir avec une salade grecque et du tzatziki si on veut."]
  },
  {
    id: "burgers-d-agneau-au-tzatziki", nom: "Burgers d'agneau au boulgour et tzatziki", cuisine: "grecque",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53010",
    ingredients: [
      { id: "boulgour", quantite: 15, unite: "g", ou: { id: "semoule", quantite: 15, unite: "g" } },
      { id: "agneau-hache", quantite: 250, unite: "g", ou: { id: "boeuf-hache", quantite: 250, unite: "g" } },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "coriandre-moulue", quantite: 1, unite: "g", ou: { id: "graines-de-coriandre", quantite: 1, unite: "g" } },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse", optionnel: true },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "pain-a-burger", quantite: 2, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "yaourt-grec", quantite: 100, unite: "g", ou: { id: "yaourt-nature", quantite: 1, unite: "pièce" } },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce", optionnel: true },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre le boulgour dans une casserole, le couvrir d'eau et le faire bouillir 10 min. L'égoutter dans une passoire en pressant bien pour enlever l'eau.", "Tzatziki : râper un demi-concombre, le presser pour enlever son jus, puis le mélanger au yaourt avec la menthe hachée et une pincée de sel.", "Mélanger le boulgour avec l'agneau, le cumin, la coriandre moulue, le paprika, l'ail haché, le sel et le poivre, puis former 2 burgers.", "Les badigeonner d'un peu d'huile et les cuire à la poêle ou au barbecue environ 5 min de chaque côté, jusqu'à ce qu'ils soient bien cuits à cœur.", "Servir dans les pains (grillés si on veut) avec le tzatziki, des rondelles de tomate et d'oignon rouge et quelques feuilles de menthe."]
  },
  {
    id: "moussaka-express", nom: "Moussaka express (bœuf, pommes de terre, aubergine et crème au yaourt)", cuisine: "grecque",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53006",
    ingredients: [
      { id: "boeuf-hache", quantite: 250, unite: "g", ou: { id: "agneau-hache", quantite: 250, unite: "g" } },
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "yaourt-grec", quantite: 75, unite: "g", ou: { id: "yaourt-nature", quantite: 1, unite: "pièce" } },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "parmesan", quantite: 20, unite: "g", ou: { id: "fromage-rape", quantite: 20, unite: "g" } },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "concentre-de-tomate", quantite: 30, unite: "g", ou: { id: "sauce-tomate", quantite: 60, unite: "g" } },
      { id: "pomme-de-terre", quantite: 175, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre en dés 10 min à l'eau bouillante salée (la recette d'origine utilise des pommes de terre déjà cuites), puis les égoutter. Allumer le gril du four.", "Faire dorer le bœuf 5 min à feu vif dans une poêle profonde qui va au four.", "Pendant ce temps, piquer l'aubergine à la fourchette et la cuire 3 à 5 min au micro-ondes à pleine puissance, jusqu'à ce qu'elle soit tendre.", "Mélanger le yaourt, l'œuf et le parmesan, saler et poivrer légèrement.", "Ajouter au bœuf les tomates en dés, le concentré de tomate et les pommes de terre, saler, poivrer et bien réchauffer. Lisser la surface avec le dos d'une cuillère.", "Couper l'aubergine en tranches et les disposer sur la viande. Verser la crème au yaourt par-dessus, l'étaler, puis passer sous le gril jusqu'à ce que le dessus soit pris et doré."]
  },
  {
    id: "tomates-farcies-a-l-agneau", nom: "Tomates farcies à l'agneau, au riz et aux herbes", cuisine: "grecque",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53008",
    ingredients: [
      { id: "tomate", quantite: 4, unite: "pièce" },
      { id: "sucre", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 60, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "agneau-hache", quantite: 200, unite: "g", ou: { id: "boeuf-hache", quantite: 200, unite: "g" } },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "concentre-de-tomate", quantite: 30, unite: "g", ou: { id: "sauce-tomate", quantite: 60, unite: "g" } },
      { id: "riz", quantite: 50, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 145, unite: "ml" },
      { id: "aneth", quantite: 10, unite: "g" },
      { id: "persil", quantite: 8, unite: "g" },
      { id: "menthe", quantite: 4, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Choisir 4 grosses tomates, couper leur chapeau et le garder. Les vider à la petite cuillère sans percer la peau ; hacher finement la pulpe en gardant le jus.", "Saupoudrer l'intérieur des tomates d'un peu de sucre (pour enlever l'acidité) et les poser sur une plaque.", "Faire chauffer 2 cuillères à soupe d'huile dans une grande poêle et y faire fondre doucement l'oignon et l'ail hachés environ 10 min, sans qu'ils colorent.", "Ajouter l'agneau, la cannelle et le concentré de tomate, monter le feu et faire dorer la viande. Ajouter la pulpe et le jus des tomates, le riz, 100 ml d'eau et le bouillon cube émietté. Saler et poivrer généreusement.", "Porter à ébullition puis laisser mijoter 15 min, jusqu'à ce que le riz soit tendre et le liquide absorbé. Laisser tiédir un peu et ajouter l'aneth, le persil et la menthe hachés.", "Remplir les tomates à ras bord, remettre les chapeaux, arroser du reste d'huile et verser 3 cuillères à soupe d'eau dans la plaque. Cuire 35 min. Servir chaud ou froid, avec une salade et du pain croustillant."]
  }
]);
