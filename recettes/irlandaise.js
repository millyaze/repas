// ============================================================
// RECETTES : cuisine irlandaise (8 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "boxty-bacon-oeufs-tomates", nom: "Boxty (galettes de pommes de terre), bacon, œufs et tomates", cuisine: "irlandaise",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53036",
    ingredients: [
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "lait", quantite: 75, unite: "ml" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "tomates-cerises", quantite: 100, unite: "g" },
      { id: "lardons", quantite: 120, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Allumer le four sur la température la plus basse pour garder les galettes au chaud. Éplucher les pommes de terre. En râper la moitié, couper l'autre moitié en gros morceaux et la cuire 10 à 15 min à l'eau bouillante salée.", "Pendant ce temps, presser les pommes de terre râpées dans un torchon propre pour enlever le plus de jus possible. Écraser les pommes de terre cuites, puis les mélanger avec les pommes de terre râpées, les oignons nouveaux émincés, la farine, le sel et le poivre.", "Battre 1 blanc d'œuf en neige souple (garder le jaune pour une autre recette). Y incorporer délicatement le lait, puis la levure, et mélanger le tout avec la préparation aux pommes de terre.", "Chauffer une poêle antiadhésive à feu moyen avec un peu de beurre et d'huile. Y déposer 3 ou 4 cuillerées de pâte et cuire 3 à 5 min de chaque côté, jusqu'à ce qu'elles soient dorées et croustillantes. Garder au four et continuer avec le reste (on obtient environ 8 petites galettes).", "Faire revenir les tomates cerises 5 min dans une poêle avec une noix de beurre. Faire griller le bacon (ou les lardons), puis cuire les 2 œufs restants au plat.", "Servir les galettes en pile avec le bacon et l'œuf, les tomates à côté."]
  },
  {
    id: "cotes-de-porc-mijotees-au-cidre", nom: "Côtes de porc mijotées au cidre et aux légumes", cuisine: "irlandaise",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53037",
    ingredients: [
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "cote-de-porc", quantite: 2, unite: "pièce" },
      { id: "lardons", quantite: 60, unite: "g" },
      { id: "pomme-de-terre", quantite: 350, unite: "g" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "chou", quantite: 250, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "cidre", quantite: 100, unite: "ml", ou: { id: "vin-blanc", quantite: 100, unite: "ml" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire chauffer le beurre dans une cocotte jusqu'à ce qu'il grésille, puis dorer les côtes de porc 2 à 3 min de chaque côté. Les retirer.", "Mettre dans la cocotte les lardons, les carottes en rondelles et les pommes de terre en morceaux, et les faire revenir doucement jusqu'à ce qu'ils colorent un peu.", "Ajouter le chou émincé, reposer les côtes de porc dessus, ajouter le laurier, puis verser le cidre et l'eau avec le bouillon cube émietté. Saler et poivrer légèrement.", "Couvrir et laisser mijoter doucement 20 min, jusqu'à ce que le porc soit cuit et les légumes tendres. Servir directement dans la cocotte."]
  },
  {
    id: "boeuf-mijote-au-chou-facon-corned-beef", nom: "Bœuf mijoté au chou, pommes de terre et carottes (façon corned-beef)", cuisine: "irlandaise",
    difficulte: "facile", tempsMinutes: 180, portions: 2,
    source: "TheMealDB", idSource: "52998",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 500, unite: "g" },
      { id: "laurier", quantite: 2, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 1500, unite: "ml" },
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "carotte", quantite: 3, unite: "pièce" },
      { id: "chou", quantite: 400, unite: "g" },
      { id: "moutarde", quantite: 20, unite: "g", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 2, unite: "g" }
    ],
    etapes: ["Mettre le bœuf dans une grande cocotte, le couvrir d'eau et ajouter le laurier, le bouillon cube, le sel et le poivre (quelques grains de poivre et un clou de girofle si on en a). Si on a acheté du vrai corned-beef cru (bœuf saumuré), utiliser son sachet d'épices et ne pas saler.", "Porter à ébullition, couvrir puis laisser frémir 2 h à 2 h 30, jusqu'à ce que la viande soit très tendre.", "Ajouter les petites pommes de terre entières et les carottes épluchées et coupées en tronçons, et cuire jusqu'à ce qu'elles soient presque tendres (environ 15 min).", "Ajouter le chou coupé en quartiers et cuire encore 15 min.", "Sortir la viande et la laisser reposer 15 min. Pendant ce temps, mettre les légumes dans un plat avec un peu de bouillon et couvrir.", "Couper la viande en tranches, dans le sens contraire des fibres. Servir avec les légumes, un peu de bouillon et de la moutarde."]
  },
  {
    id: "saucisses-croustillantes-chou-et-kale", nom: "Saucisses croustillantes, chou et kale au four", cuisine: "irlandaise",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "TheMealDB", idSource: "52999",
    ingredients: [
      { id: "chou-kale", quantite: 150, unite: "g", ou: { id: "epinards", quantite: 150, unite: "g" } },
      { id: "chou", quantite: 300, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce", optionnel: true },
      { id: "champignons-shiitake", quantite: 80, unite: "g", optionnel: true, ou: { id: "champignons", quantite: 80, unite: "g" } },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 120, unite: "ml" },
      { id: "saucisse", quantite: 4, unite: "pièce" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 175 °C. Retirer les tiges du kale et déchirer les feuilles en morceaux. Hacher grossièrement le chou. Mettre le tout dans un grand plat avec l'ail émincé.", "Si on en a, faire d'abord revenir l'oignon émincé et les champignons en lamelles quelques minutes dans un peu d'huile, puis les ajouter dans le plat.", "Arroser les légumes d'huile d'olive et verser le bouillon (bouillon cube dissous dans l'eau chaude). Couvrir de papier aluminium et cuire 15 min, jusqu'à ce que les feuilles soient tombées.", "Retirer l'aluminium, saler, poivrer et poursuivre la cuisson 20 à 25 min, jusqu'à ce que le chou soit tendre.", "Pendant ce temps, piquer les saucisses à la fourchette et les dorer de tous les côtés dans une poêle avec un filet d'huile, 10 à 12 min, jusqu'à ce qu'elles soient bien cuites.", "Couper les saucisses en rondelles, les mélanger aux légumes avec le vinaigre (de vin ou de xérès) et servir."]
  },
  {
    id: "colcannon-jambon-oeuf-au-plat", nom: "Colcannon (purée au chou) au jambon et œuf au plat", cuisine: "irlandaise",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53035",
    ingredients: [
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "chou", quantite: 250, unite: "g" },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "moutarde", quantite: 15, unite: "g" },
      { id: "jambon", quantite: 3, unite: "tranche" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre (farineuses de préférence), les couper en morceaux réguliers et les cuire 10 à 15 min dans l'eau froide salée portée à ébullition, jusqu'à ce que la lame d'un couteau s'enfonce facilement.", "Pendant ce temps, faire fondre le beurre dans une sauteuse à feu moyen. Ajouter l'ail haché, le chou émincé, les oignons nouveaux en rondelles, du sel et du poivre. Remuer de temps en temps jusqu'à ce que le chou soit tombé mais encore un peu croquant.", "Égoutter les pommes de terre, les laisser sécher 2 min, puis les écraser dans la casserole avec la crème, la moutarde, du sel et du poivre. Ajouter le chou et le jambon coupé en morceaux. Garder au chaud à feu très doux.", "Dans la sauteuse du chou, ajouter l'huile et cuire les œufs au plat.", "Servir le colcannon en bols, un œuf au plat sur chaque."]
  },
  {
    id: "irish-stew-ragout-d-agneau", nom: "Irish stew (ragoût d'agneau aux légumes)", cuisine: "irlandaise",
    difficulte: "moyen", tempsMinutes: 135, portions: 2,
    source: "TheMealDB", idSource: "52781",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 500, unite: "g", ou: { id: "boeuf-a-braiser", quantite: 500, unite: "g" } },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "echalote", quantite: 6, unite: "pièce" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "sucre", quantite: 2, unite: "g" },
      { id: "thym", quantite: 2, unite: "g", ou: { id: "herbes-de-provence", quantite: 2, unite: "g" } },
      { id: "origan", quantite: 1, unite: "g", optionnel: true },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Couper l'agneau en cubes de 3 cm, saler et poivrer.", "Chauffer 1 cuillère à soupe d'huile dans une cocotte qui va au four, à feu moyen-vif. Saisir l'agneau en plusieurs fois (sans trop en mettre à la fois) 4 min sur toutes les faces, puis le réserver dans un saladier.", "Baisser le feu, ajouter un peu d'huile et faire dorer les échalotes entières 4 min. Les mettre avec l'agneau. Faire de même avec les carottes en gros tronçons, puis les pommes de terre en morceaux (garder la peau si ce sont des grenailles).", "Verser dans la cocotte vide le vin blanc, le sucre, le thym, l'origan, une pincée de sel et de poivre. Faire bouillir 3 min à feu vif en grattant le fond.", "Remettre la viande et les légumes, ajouter l'eau et le bouillon cube émietté. Couvrir, porter à ébullition 5 min, puis enfourner 1 h 30.", "Sortir la cocotte : s'il reste beaucoup de liquide, faire bouillir quelques minutes sans couvercle pour le réduire. (On peut aussi y ajouter du navet ou du céleri-rave avec les autres légumes.)"]
  },
  {
    id: "champ-a-la-moutarde", nom: "Champ à la moutarde (purée aux oignons nouveaux)", cuisine: "irlandaise",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53038",
    ingredients: [
      { id: "pomme-de-terre", quantite: 450, unite: "g" },
      { id: "lait", quantite: 80, unite: "ml" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "moutarde", quantite: 15, unite: "g" },
      { id: "oignon-nouveau", quantite: 4, unite: "pièce" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre et les cuire 15 min à l'eau bouillante salée, jusqu'à ce qu'elles soient tendres. Égoutter et écraser.", "Chauffer le lait avec la moitié du beurre dans un coin de la casserole, puis l'incorporer à la purée avec la moutarde (à l'ancienne de préférence). Saler et poivrer.", "Faire revenir doucement les oignons nouveaux émincés 2 min dans le reste du beurre : ils doivent être juste tendres et encore bien verts.", "Les mélanger à la purée et servir. Parfait avec du jambon grillé ou du poisson."]
  },
  {
    id: "shepherds-pie-vegetarien-lentilles", nom: "Shepherd's pie végétarien (lentilles, légumes rôtis et purée)", cuisine: "irlandaise",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53000",
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "lait", quantite: 60, unite: "ml" },
      { id: "lentilles", quantite: 70, unite: "g" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "sauce-tomate", quantite: 30, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "vin-blanc", quantite: 100, unite: "ml", optionnel: true },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 800, unite: "ml" },
      { id: "fecule", quantite: 8, unite: "g" },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce", optionnel: true },
      { id: "champignons", quantite: 120, unite: "g" },
      { id: "romarin", quantite: 1, unite: "g", optionnel: true, ou: { id: "thym", quantite: 1, unite: "g" } },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "ciboulette", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Purée : cuire les pommes de terre à l'eau salée (ou 45 min au four à 230 °C), les éplucher et les écraser avec le beurre et le lait. Saler.", "Lentilles : les cuire 15 à 20 min dans 400 ml d'eau avec 1 gousse d'ail et une pincée de sel, jusqu'à ce qu'elles soient tendres mais pas en purée. Égoutter et retirer l'ail.", "Sauce : faire revenir l'oignon haché dans 1 cuillère à soupe d'huile 10 min, ajouter 1 gousse d'ail hachée puis la sauce tomate, et cuire 2 à 3 min. Ajouter le laurier et le vin blanc, réduire de moitié, puis ajouter le reste de l'eau et le bouillon cube et laisser réduire de moitié (20 à 30 min).", "Retirer le laurier. Délayer la fécule dans 2 cuillères à soupe d'eau froide, l'ajouter à la sauce et cuire 5 min jusqu'à ce qu'elle épaississe. Ajouter la sauce soja, saler et poivrer.", "Légumes : préchauffer le four à 230 °C. Couper les carottes (et la courgette) en dés, les mélanger avec le reste d'huile, la dernière gousse d'ail écrasée et le romarin, et les rôtir 20 à 25 min.", "Dans un plat à gratin, étaler les lentilles, puis les légumes rôtis mélangés aux champignons émincés et aux herbes hachées. Verser la sauce, couvrir de purée.", "Cuire 30 min au four, jusqu'à ce que le dessus soit doré et que ça bouillonne. Laisser reposer 10 min avant de servir."]
  }
]);
