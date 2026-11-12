// ============================================================
// RECETTES : cuisine italienne (26 recettes, pour 2 personnes)
// Les 10 premières sont écrites par Claude ; les 16 suivantes sont
// importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/espagnole.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "pates-a-la-carbonara", nom: "Pâtes à la carbonara", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "lardons", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "parmesan", quantite: 40, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans l'eau bouillante salée.", "Faire dorer les lardons à la poêle.", "Battre les œufs avec le parmesan râpé et le poivre.", "Égoutter les pâtes, les mélanger aux lardons hors du feu, puis ajouter les œufs en remuant."]
  },
  {
    id: "pates-a-la-bolognaise", nom: "Pâtes à la bolognaise", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "boeuf-hache", quantite: 200, unite: "g" },
      { id: "sauce-tomate", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Hacher l'oignon, l'ail et la carotte, les faire revenir dans l'huile 5 min.", "Ajouter le bœuf et le faire dorer 5 min.", "Verser la sauce tomate, saler, poivrer, mijoter 20 min.", "Cuire les pâtes et servir avec la sauce."]
  },
  {
    id: "risotto-aux-champignons", nom: "Risotto aux champignons", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    ingredients: [
      { id: "riz", quantite: 160, unite: "g" },
      { id: "champignons", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "parmesan", quantite: 40, unite: "g" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "eau", quantite: 600, unite: "ml" }
    ],
    etapes: ["Préparer le bouillon : eau chaude et bouillon cube.", "Faire revenir l'oignon haché et les champignons émincés dans la moitié du beurre.", "Ajouter le riz, remuer 1 min, verser le vin blanc.", "Ajouter le bouillon louche par louche en remuant, environ 18 min.", "Hors du feu, ajouter le reste du beurre et le parmesan."]
  },
  {
    id: "pates-a-l-arrabbiata", nom: "Pâtes à l'arrabbiata", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "sauce-tomate", quantite: 250, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans l'eau bouillante salée.", "Faire revenir l'ail haché et le piment dans l'huile 1 min.", "Ajouter la sauce tomate et mijoter 10 min.", "Mélanger les pâtes égouttées à la sauce."]
  },
  {
    id: "salade-caprese", nom: "Salade caprese", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    ingredients: [
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "mozzarella", quantite: 125, unite: "g" },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les tomates et la mozzarella en tranches.", "Les alterner sur une assiette avec les feuilles de basilic.", "Arroser d'huile d'olive, saler et poivrer."]
  },
  {
    id: "lasagnes-a-la-bolognaise", nom: "Lasagnes à la bolognaise", cuisine: "italienne",
    difficulte: "difficile", tempsMinutes: 75, portions: 2,
    ingredients: [
      { id: "feuilles-de-lasagne", quantite: 6, unite: "pièce" },
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "sauce-tomate", quantite: 300, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 300, unite: "ml" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "farine", quantite: 25, unite: "g" },
      { id: "fromage-rape", quantite: 60, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon haché et le bœuf, ajouter la sauce tomate, saler, poivrer, mijoter 15 min.", "Béchamel : fondre le beurre, ajouter la farine, puis le lait petit à petit en fouettant jusqu'à épaississement.", "Dans un plat, alterner sauce à la viande, feuilles de lasagne et béchamel (3 couches).", "Terminer par la béchamel et le fromage râpé.", "Cuire 35 min au four à 180 °C."]
  },
  {
    id: "pates-au-pesto-maison", nom: "Pâtes au pesto maison", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "basilic", quantite: 20, unite: "g" },
      { id: "parmesan", quantite: 30, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "pignons-de-pin", quantite: 20, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire les pâtes dans l'eau bouillante salée.", "Mixer le basilic, l'ail, le parmesan et l'huile d'olive (avec les pignons si tu en as).", "Mélanger les pâtes égouttées au pesto, avec une cuillère d'eau de cuisson."]
  },
  {
    id: "aubergines-a-la-parmesane", nom: "Aubergines à la parmesane", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "sauce-tomate", quantite: 250, unite: "g" },
      { id: "mozzarella", quantite: 125, unite: "g" },
      { id: "parmesan", quantite: 40, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Couper les aubergines en tranches, les huiler, les saler et les cuire 15 min au four à 200 °C.", "Dans un plat, alterner aubergines, sauce tomate, mozzarella en tranches et basilic.", "Terminer par le parmesan râpé.", "Cuire 25 min au four à 180 °C."]
  },
  {
    id: "bruschetta-tomate-basilic", nom: "Bruschetta tomate-basilic", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    ingredients: [
      { id: "pain", quantite: 4, unite: "tranche" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Griller les tranches de pain et les frotter avec l'ail.", "Couper les tomates en petits dés, mélanger avec le basilic ciselé, l'huile et le sel.", "Répartir sur le pain et servir aussitôt."]
  },
  {
    id: "minestrone", nom: "Minestrone", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    ingredients: [
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "pates", quantite: 60, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "parmesan", quantite: 20, unite: "g" },
      { id: "eau", quantite: 800, unite: "ml" }
    ],
    etapes: ["Couper tous les légumes en petits dés.", "Les faire revenir dans l'huile 5 min.", "Ajouter l'eau, le bouillon cube et la sauce tomate, cuire 20 min.", "Ajouter les pâtes et cuire encore 10 min.", "Servir avec le parmesan râpé."]
  },

  // ---------- Importées de TheMealDB ----------
  {
    id: "budino-di-ricotta", nom: "Budino di ricotta (petits gâteaux ricotta-citron)", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52961",
    ingredients: [
      { id: "ricotta", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "sucre", quantite: 75, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "rhum", quantite: 20, unite: "ml", optionnel: true },
      { id: "sucre-glace", quantite: 5, unite: "g", optionnel: true },
      { id: "beurre", quantite: 5, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Beurrer 2 ramequins et les fariner légèrement.", "Séparer le blanc du jaune d'œuf. Écraser la ricotta à la fourchette et la battre avec le jaune, puis ajouter le reste de farine, le sucre, la cannelle, le zeste râpé du citron et le rhum.", "Monter le blanc en neige ferme avec une pincée de sel et l'incorporer délicatement au mélange.", "Répartir dans les ramequins et cuire 25 à 30 min, jusqu'à ce que les gâteaux soient fermes et dorés.", "Servir tiède ou froid, saupoudré de sucre glace."]
  },
  {
    id: "pates-alfredo-au-poulet-et-aux-legumes", nom: "Pâtes Alfredo au poulet et aux légumes (primavera)", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52796",
    ingredients: [
      { id: "pates", quantite: 180, unite: "g" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "potiron", quantite: 150, unite: "g", ou: { id: "courgette", quantite: 1, unite: "pièce" } },
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "champignons", quantite: 100, unite: "g" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "lait", quantite: 50, unite: "ml" },
      { id: "creme-liquide", quantite: 50, unite: "ml", ou: { id: "creme-fraiche", quantite: 50, unite: "ml" } },
      { id: "parmesan", quantite: 40, unite: "g" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer la moitié du beurre et la moitié de l'huile dans une grande poêle. Saler et poivrer les blancs de poulet, puis les cuire 5 à 7 min de chaque côté. Les réserver sur une planche.", "Pendant ce temps, cuire les pâtes (des papillons à l'origine) dans l'eau bouillante salée. Garder un petit verre d'eau de cuisson avant de les égoutter.", "Dans la même poêle, ajouter le reste du beurre et de l'huile, puis les légumes coupés (courge en dés, brocoli en petits bouquets, champignons, poivron, oignon) et le piment. Cuire 5 min en remuant, jusqu'à ce qu'ils soient tendres.", "Ajouter l'ail haché, saler, poivrer et cuire 1 min. Verser le vin blanc et le laisser réduire de moitié (3 min).", "Ajouter le lait, la crème et l'eau de cuisson gardée, laisser frémir 2 à 3 min. Éteindre le feu, ajouter le parmesan et les pâtes, bien mélanger.", "Servir avec le poulet coupé en tranches, un peu de parmesan et de persil haché."]
  },
  {
    id: "linguine-aux-crevettes-pimentees", nom: "Linguine aux crevettes pimentées et pois gourmands", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "52839",
    ingredients: [
      { id: "pates", quantite: 180, unite: "g" },
      { id: "crevettes", quantite: 200, unite: "g" },
      { id: "pois-gourmands", quantite: 100, unite: "g", ou: { id: "petits-pois", quantite: 100, unite: "g" } },
      { id: "tomates-cerises", quantite: 100, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "basilic", quantite: 5, unite: "g", optionnel: true },
      { id: "salade-verte", quantite: 1, unite: "pièce", optionnel: true },
      { id: "fromage-frais", quantite: 30, unite: "g", optionnel: true, ou: { id: "yaourt-grec", quantite: 30, unite: "g" } },
      { id: "citron-vert", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sucre", quantite: 5, unite: "g", optionnel: true },
      { id: "pain", quantite: 2, unite: "tranche", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Sauce pour la salade : mélanger le fromage frais (ou du yaourt grec), le zeste du citron vert et le sucre, saler et poivrer.", "Cuire les pâtes dans l'eau bouillante salée, en ajoutant les pois gourmands pour la dernière minute de cuisson.", "Pendant ce temps, chauffer l'huile dans une grande poêle ou un wok et y faire revenir doucement 30 secondes l'ail haché et le piment émincé, sans laisser l'ail dorer.", "Ajouter les crevettes décortiquées et les cuire 3 min à feu vif en remuant, jusqu'à ce qu'elles soient roses. Ajouter les tomates cerises et cuire encore 3 min.", "Égoutter les pâtes et les pois, les mélanger aux crevettes, ajouter le basilic déchiré, saler et poivrer.", "Servir avec la salade arrosée de sauce et du pain chaud."]
  },
  {
    id: "fettuccine-alfredo", nom: "Fettuccine Alfredo (crème, beurre et parmesan)", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53064",
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "creme-liquide", quantite: 120, unite: "ml", ou: { id: "creme-fraiche", quantite: 120, unite: "ml" } },
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "parmesan", quantite: 50, unite: "g" },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes (des fettuccine, ou des tagliatelles) dans une grande casserole d'eau bouillante salée.", "Pendant ce temps, chauffer la crème et le beurre dans une grande poêle à feu moyen, jusqu'à ce que le beurre fonde et que la crème frémisse.", "Ajouter le parmesan râpé en fouettant, saler et poivrer, puis laisser épaissir un peu.", "Égoutter les pâtes, les verser dans la sauce et bien mélanger. Parsemer de persil haché et servir aussitôt."]
  },
  {
    id: "salade-de-pates-mediterraneenne", nom: "Salade de pâtes méditerranéenne (mozzarella, thon, olives)", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "52777",
    ingredients: [
      { id: "pates", quantite: 175, unite: "g" },
      { id: "mozzarella", quantite: 100, unite: "g" },
      { id: "tomates-cerises", quantite: 125, unite: "g", ou: { id: "tomate", quantite: 2, unite: "pièce" } },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "olives-vertes", quantite: 20, unite: "g", ou: { id: "olives-noires", quantite: 20, unite: "g" } },
      { id: "basilic", quantite: 10, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes (des papillons à l'origine) dans une grande casserole d'eau bouillante salée, environ 10 min.", "Pendant ce temps, couper les tomates en quartiers et les olives en rondelles. Mettre les tomates dans un saladier, y déchirer les feuilles de basilic, ajouter une cuillère à soupe d'huile et mélanger.", "Égoutter les pâtes et les passer sous l'eau froide pour les refroidir vite, puis les ajouter dans le saladier.", "Ajouter les olives, la mozzarella égouttée (en billes ou en dés) et le thon égoutté en morceaux. Bien mélanger et laisser reposer au moins 30 min pour que les saveurs se mélangent.", "Juste avant de servir, poivrer généreusement et arroser du reste d'huile."]
  },
  {
    id: "osso-buco-a-la-milanaise", nom: "Osso buco à la milanaise (jarret de veau braisé, gremolata)", cuisine: "italienne",
    difficulte: "difficile", tempsMinutes: 170, portions: 2,
    source: "TheMealDB", idSource: "52810",
    ingredients: [
      { id: "jarret-de-veau", quantite: 700, unite: "g", ou: { id: "souris-d-agneau", quantite: 2, unite: "pièce" } },
      { id: "farine", quantite: 30, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "fenouil", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "marjolaine", quantite: 1, unite: "g", ou: { id: "origan", quantite: 1, unite: "g" } },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "vin-blanc", quantite: 120, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce", ou: { id: "sauce-tomate", quantite: 150, unite: "g" } },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 150 °C. Saler et poivrer les tranches de jarret, les rouler dans la farine et les tapoter pour enlever l'excédent.", "Dans une cocotte allant au four, chauffer l'huile avec un tiers du beurre. Faire dorer la viande 5 min de chaque côté, puis la réserver. Jeter le gras de la cocotte sans enlever les sucs.", "Faire fondre le reste du beurre et cuire doucement 6 min l'oignon, la carotte, le céleri et le fenouil coupés en petits dés, sans les colorer. Ajouter 1 gousse d'ail hachée, 2 bandes de zeste d'orange, la marjolaine (ou de l'origan) et le laurier, et cuire 2 min.", "Verser le vin, porter à ébullition et réduire de moitié (5 min). Ajouter le bouillon cube dilué dans l'eau et les tomates hachées avec leur jus, puis réduire encore 10 min.", "Remettre la viande, os vers le haut, avec son jus. Couvrir d'une feuille de papier cuisson puis du couvercle et cuire au four environ 2 h, en retournant la viande à mi-cuisson, jusqu'à ce qu'elle se détache de l'os.", "Gremolata : mélanger le persil haché, l'autre gousse d'ail hachée finement et le zeste râpé du citron.", "Parsemer la viande de la moitié de la gremolata et remettre au four 15 min sans couvercle. Servir la viande nappée de sauce (dégraissée et réduite si besoin) et du reste de gremolata, avec du riz ou une purée."]
  },
  {
    id: "pates-puttanesca-aux-sardines", nom: "Pâtes à la puttanesca aux sardines", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "52837",
    ingredients: [
      { id: "pates", quantite: 180, unite: "g" },
      { id: "sardines-en-boite", quantite: 1, unite: "boîte", ou: { id: "thon-en-boite", quantite: 1, unite: "boîte" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-frais", quantite: 1, unite: "pièce", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "concentre-de-tomate", quantite: 15, unite: "g", ou: { id: "sauce-tomate", quantite: 60, unite: "g" } },
      { id: "olives-noires", quantite: 40, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "parmesan", quantite: 20, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire les pâtes (des spaghettis à l'origine) dans l'eau bouillante salée.", "Pendant ce temps, chauffer l'huile dans une poêle et faire revenir 3 à 4 min l'oignon haché, l'ail haché et le piment émincé.", "Ajouter le concentré de tomate et cuire 1 min, puis ajouter les sardines avec leur jus. Les émietter à la cuillère en bois, ajouter les olives et cuire encore quelques minutes.", "Égoutter les pâtes en gardant un peu d'eau de cuisson, les ajouter dans la poêle avec 2 ou 3 cuillères à soupe de cette eau et bien mélanger.", "Servir parsemé de copeaux de parmesan."]
  },
  {
    id: "pizza-margherita", nom: "Pizza Margherita (pâte maison)", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53014",
    ingredients: [
      { id: "farine", quantite: 225, unite: "g" },
      { id: "levure-de-boulanger", quantite: 15, unite: "g" },
      { id: "sucre", quantite: 5, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sauce-tomate", quantite: 80, unite: "g" },
      { id: "mozzarella", quantite: 70, unite: "g" },
      { id: "origan", quantite: 1, unite: "g", ou: { id: "herbes-de-provence", quantite: 1, unite: "g" } },
      { id: "basilic", quantite: 3, unite: "g", optionnel: true },
      { id: "sel", quantite: 6, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 230 °C. Délayer le sucre et la levure fraîche émiettée (ou 5 g de levure sèche) dans l'eau tiède et laisser reposer 10 à 15 min dans un endroit chaud, jusqu'à ce qu'une mousse se forme.", "Mettre la farine et le sel dans un saladier, creuser un puits, y verser la levure et un filet d'huile, puis mélanger jusqu'à former une boule.", "Fariner généreusement le plan de travail et pétrir la pâte 10 min, jusqu'à ce qu'elle soit lisse et souple.", "L'étaler dans une plaque huilée. Étaler la sauce tomate jusqu'au bord, répartir la mozzarella en tranches, parsemer d'origan, poivrer et arroser d'un filet d'huile.", "Cuire 10 à 12 min, jusqu'à ce que le fromage commence à dorer. Poser les feuilles de basilic à la sortie du four."]
  },
  {
    id: "gratin-de-pommes-de-terre-poulet-et-lardons", nom: "Gratin rapide de pommes de terre, poulet et bacon", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "52780",
    ingredients: [
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "parmesan", quantite: 30, unite: "g" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "bacon", quantite: 2, unite: "tranche", ou: { id: "lardons", quantite: 75, unite: "g" } },
      { id: "epinards", quantite: 100, unite: "g", optionnel: true },
      { id: "petits-pois", quantite: 100, unite: "g", optionnel: true },
      { id: "eau", quantite: 50, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher et couper finement les pommes de terre, puis les cuire 5 à 8 min dans l'eau bouillante salée : elles doivent rester un peu fermes.", "Pendant ce temps, émincer les oignons et les cuire dans un plat allant sur le feu (ou une poêle) avec l'huile et l'eau mélangée au bouillon cube, jusqu'à ce qu'ils soient tendres.", "Égoutter les pommes de terre et les étaler sur les oignons dans un plat à gratin. Saler, poivrer et napper de crème fraîche sans noyer. Râper le parmesan par-dessus et passer sous le gril du four jusqu'à ce que le dessus soit bien doré.", "Pendant le gratin, cuire les blancs de poulet à la poêle 5 à 7 min de chaque côté avec le bacon, et cuire les petits pois et les épinards quelques minutes à l'eau bouillante.", "Servir le gratin avec le poulet, le bacon et les légumes verts."]
  },
  {
    id: "ribollita", nom: "Ribollita (soupe toscane au chou kale et au pain)", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52811",
    ingredients: [
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "chou-kale", quantite: 225, unite: "g", ou: { id: "chou", quantite: 225, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sauce-tomate", quantite: 200, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce", optionnel: true },
      { id: "romarin", quantite: 1, unite: "g", ou: { id: "herbes-de-provence", quantite: 1, unite: "g" } },
      { id: "thym", quantite: 1, unite: "g", optionnel: true },
      { id: "pain", quantite: 2, unite: "tranche" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "parmesan", quantite: 30, unite: "g" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer 2 cuillères à soupe d'huile dans une cocotte allant au four. Ajouter l'oignon, la carotte, le céleri et l'ail hachés, saler, poivrer et cuire 5 à 10 min en remuant, jusqu'à ce que les légumes soient tendres.", "Préchauffer le four à 250 °C (ou le gril). Égoutter et rincer les haricots.", "Ajouter dans la cocotte les haricots, la sauce tomate, l'eau, le bouillon cube émietté, le romarin et le thym. Porter à ébullition puis laisser bouillonner doucement 15 à 20 min, à couvert.", "Retirer les tiges d'herbes, ajouter le chou kale émincé et rectifier l'assaisonnement.", "Couvrir la soupe avec les tranches de pain, parsemer d'oignon rouge en fines lamelles, arroser du reste d'huile et saupoudrer de parmesan.", "Enfourner 10 à 15 min, jusqu'à ce que le pain, l'oignon et le fromage soient dorés et croustillants. Servir dans des bols."]
  },
  {
    id: "rigatoni-sauce-saucisse-et-fenouil", nom: "Rigatoni, sauce saucisse-fenouil et pesto", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52783",
    ingredients: [
      { id: "pates", quantite: 170, unite: "g" },
      { id: "saucisse", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "fenouil", quantite: 1, unite: "pièce" },
      { id: "graines-de-fenouil", quantite: 2, unite: "g", optionnel: true },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "vin-rouge", quantite: 35, unite: "ml", ou: { id: "vin-blanc", quantite: 35, unite: "ml" } },
      { id: "sauce-tomate", quantite: 150, unite: "g" },
      { id: "sucre", quantite: 2, unite: "g" },
      { id: "olives-noires", quantite: 20, unite: "g" },
      { id: "basilic", quantite: 20, unite: "g" },
      { id: "pecorino", quantite: 10, unite: "g", ou: { id: "parmesan", quantite: 10, unite: "g" } },
      { id: "anchois", quantite: 5, unite: "g", optionnel: true },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "eau", quantite: 50, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Chauffer une cuillère d'huile dans une sauteuse avec couvercle. Ajouter les saucisses coupées en rondelles épaisses et les dorer 10 min à feu moyen-vif. Les réserver.", "Dans la même sauteuse, cuire l'oignon et le fenouil hachés 15 min en remuant de temps en temps, jusqu'à ce qu'ils soient tendres et caramélisés (garder les plumets verts du fenouil pour la fin).", "Ajouter le paprika (fumé à l'origine), 1 gousse d'ail émincée et la moitié des graines de fenouil grillées et écrasées, cuire 2 min, puis verser le vin et laisser bouillir 30 secondes.", "Ajouter la sauce tomate, le sucre, l'eau, les saucisses et une pincée de sel. Couvrir et mijoter 30 min, en enlevant le couvercle au bout de 10 min, jusqu'à ce que la sauce soit épaisse. Ajouter les olives coupées en deux et le reste des graines de fenouil.", "Pendant ce temps, cuire les pâtes dans l'eau bouillante salée. Pesto : mixer grossièrement le pecorino (ou du parmesan), l'anchois, l'autre gousse d'ail, le reste d'huile et une cuillère d'eau, puis ajouter le basilic et mixer juste quelques secondes.", "Égoutter les pâtes, les répartir dans les assiettes, napper de sauce et ajouter une cuillerée de pesto. Parsemer de plumets de fenouil hachés."]
  },
  {
    id: "risotto-saumon-et-crevettes", nom: "Risotto au saumon et aux crevettes", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52823",
    ingredients: [
      { id: "riz", quantite: 150, unite: "g" },
      { id: "saumon", quantite: 150, unite: "g" },
      { id: "crevettes", quantite: 240, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "vin-blanc", quantite: 125, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "asperges", quantite: 100, unite: "g", ou: { id: "haricots-verts", quantite: 100, unite: "g" } },
      { id: "parmesan", quantite: 50, unite: "g" },
      { id: "eau", quantite: 800, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire chauffer l'eau avec le bouillon cube et la garder frémissante. Blanchir les pointes d'asperges 2 min dans l'eau bouillante.", "Dans une casserole à fond épais, faire fondre le beurre et cuire doucement l'oignon haché sans le colorer, jusqu'à ce qu'il soit tendre.", "Ajouter le riz (rond, type arborio si possible) et remuer pour bien l'enrober de beurre. Verser le vin et remuer jusqu'à ce qu'il soit absorbé.", "Ajouter le bouillon chaud louche par louche, en remuant et en attendant que chaque louche soit absorbée, jusqu'à ce que le riz soit tendre (environ 18 min). Assaisonner avec le jus et le zeste du citron et du poivre (le saumon sale déjà assez).", "Pendant ce temps, griller le saumon à la poêle ou au four et cuire les crevettes 2 à 3 min à la poêle.", "Servir le risotto garni du saumon, des crevettes et des asperges, avec des copeaux de parmesan."]
  },
  {
    id: "cannelloni-epinards-ricotta", nom: "Cannelloni épinards-ricotta", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52849",
    ingredients: [
      { id: "cannelloni", quantite: 8, unite: "pièce", ou: { id: "feuilles-de-lasagne", quantite: 4, unite: "pièce" } },
      { id: "epinards", quantite: 250, unite: "g" },
      { id: "ricotta", quantite: 200, unite: "g" },
      { id: "parmesan", quantite: 50, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g", optionnel: true },
      { id: "sauce-tomate", quantite: 350, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "mascarpone", quantite: 130, unite: "g", ou: { id: "creme-fraiche", quantite: 130, unite: "ml" } },
      { id: "lait", quantite: 15, unite: "ml" },
      { id: "mozzarella", quantite: 60, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Sauce tomate : chauffer l'huile dans une casserole et faire revenir l'ail haché 1 min. Ajouter le sucre, le vinaigre (de vin rouge à l'origine), la sauce tomate, du sel et du poivre, et mijoter 20 min jusqu'à ce que la sauce épaississe. Ajouter le basilic et verser la sauce dans un plat à gratin.", "Battre le mascarpone (ou de la crème fraîche) avec le lait jusqu'à ce que ce soit lisse, saler, poivrer et réserver.", "Mettre les épinards dans une passoire et les arroser d'eau bouillante pour les faire tomber. Une fois tiédis, bien les presser pour enlever l'eau puis les hacher grossièrement.", "Mélanger les épinards avec la ricotta et la moitié du parmesan. Saler, poivrer et ajouter la muscade. Préchauffer le four à 200 °C.", "Remplir les cannelloni de farce (avec une poche ou un sac en plastique dont on coupe un coin ; avec des feuilles de lasagne précuites, poser la farce dessus et les rouler). Les poser côte à côte sur la sauce tomate et les napper de sauce à la crème.", "Parsemer du reste de parmesan et de la mozzarella en tranches. Cuire 30 à 35 min jusqu'à ce que ce soit doré et bouillonnant. Laisser reposer 5 min avant de servir."]
  },
  {
    id: "linguine-a-la-courge-rotie-et-sauge", nom: "Linguine à la courge rôtie et à la sauge", cuisine: "italienne",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52866",
    ingredients: [
      { id: "courge-butternut", quantite: 175, unite: "g", ou: { id: "potiron", quantite: 175, unite: "g" } },
      { id: "pates", quantite: 175, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "sauge", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Mettre la courge butternut (ou du potiron) en cubes et les gousses d'ail sur une plaque, arroser de 2 cuillères d'huile et rôtir 35 à 40 min, jusqu'à ce que ce soit tendre. Saler, poivrer.", "Cuire les pâtes dans l'eau bouillante salée et les égoutter en gardant environ 200 ml d'eau de cuisson.", "Mixer la courge et l'ail épluché avec l'eau de cuisson gardée pour obtenir une sauce.", "Chauffer le reste d'huile dans une poêle et y faire frire les feuilles de sauge jusqu'à ce qu'elles soient croustillantes, puis les égoutter sur du papier absorbant.", "Verser les pâtes et la sauce dans la poêle et réchauffer en mélangeant. Servir parsemé de sauge frite."]
  },
  {
    id: "ragu-de-canard-a-la-venitienne", nom: "Ragù de canard à la vénitienne", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 160, portions: 2,
    source: "TheMealDB", idSource: "52838",
    ingredients: [
      { id: "cuisse-de-canard", quantite: 2, unite: "pièce", ou: { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "pates", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "farine", quantite: 5, unite: "g" },
      { id: "vin-rouge", quantite: 100, unite: "ml", ou: { id: "vin-blanc", quantite: 100, unite: "ml" } },
      { id: "sauce-tomate", quantite: 300, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "romarin", quantite: 1, unite: "g", ou: { id: "thym", quantite: 1, unite: "g" } },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 2, unite: "g" },
      { id: "lait", quantite: 15, unite: "ml" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "parmesan", quantite: 20, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer l'huile dans une cocotte et dorer les cuisses de canard sur toutes les faces, environ 10 min. Les réserver.", "Cuire l'oignon haché 5 min dans la cocotte, ajouter l'ail haché et cuire 1 min, puis ajouter la cannelle et la farine et cuire encore 1 min en remuant.", "Remettre les cuisses, ajouter le vin, la sauce tomate, le bouillon cube émietté, le romarin, le laurier, le sucre, du sel et du poivre. Porter à frémissement, couvrir et cuire 2 h à feu doux en remuant de temps en temps (1 h suffit avec du poulet).", "Sortir les cuisses avec précaution, retirer la peau et le gras, effilocher la viande avec deux fourchettes et jeter les os.", "Remettre la viande dans la sauce avec le lait et laisser mijoter 10 à 15 min à découvert.", "Pendant ce temps, cuire les pâtes (des paccheri, de gros tubes, à l'origine). Les égoutter en gardant un peu d'eau, les mélanger au ragù 1 min en ajoutant de l'eau de cuisson si c'est trop sec. Servir avec du parmesan râpé."]
  },
  {
    id: "lasagnes-vegetales-aux-lentilles", nom: "Lasagnes végétales aux lentilles et aux épinards", cuisine: "italienne",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "52775",
    ingredients: [
      { id: "lentilles", quantite: 100, unite: "g" },
      { id: "feuilles-de-lasagne", quantite: 6, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "epinards", quantite: 100, unite: "g" },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "bouillon-cube", quantite: 1, unite: "pièce", optionnel: true },
      { id: "margarine", quantite: 20, unite: "g", ou: { id: "beurre", quantite: 20, unite: "g" } },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "lait-de-soja", quantite: 150, unite: "ml", ou: { id: "lait", quantite: 150, unite: "ml" } },
      { id: "moutarde", quantite: 5, unite: "g" },
      { id: "vinaigre", quantite: 5, unite: "ml" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C.", "Cuire 5 à 7 min dans l'eau bouillante la carotte, l'oignon et la courgette coupés en dés. Ajouter les lentilles rincées et le bouillon cube, et laisser cuire doucement environ 20 min en remuant, jusqu'à ce que les lentilles soient tendres. Saler, poivrer.", "Blanchir les épinards quelques minutes, les égoutter et réserver. Cuire ensuite les feuilles de lasagne dans l'eau bouillante, puis les égoutter.", "Sauce : faire fondre la margarine (ou du beurre, mais la recette n'est alors plus végane), ajouter la farine, puis verser le lait de soja (ou du lait) peu à peu avec la moutarde et le vinaigre. Cuire en remuant jusqu'à ce que la sauce soit lisse et épaisse.", "Dans un plat, alterner lentilles aux légumes, épinards, feuilles de lasagne et sauce, en finissant par la sauce. Parsemer de coriandre.", "Cuire au four environ 25 min."]
  }
]);
