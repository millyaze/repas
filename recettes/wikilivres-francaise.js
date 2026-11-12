// ============================================================
// RECETTES : cuisine française, reprises de Wikilivres (83 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "aiga-bolhida", nom: "Aïga bolhida (soupe à l'ail et à la sauge)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Aïga bolhida",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FA%C3%AFga_bolhida",
    ingredients: [
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "sauge", quantite: 1, unite: "g" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "pain", quantite: 2, unite: "tranche" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "eau", quantite: 500, unite: "ml" }
    ],
    etapes: ["Peler les gousses d'ail et les écraser grossièrement. Les mettre dans une casserole avec 500 ml d'eau et le sel, et laisser bouillir environ 10 min.", "Ajouter 3 feuilles de sauge, le thym et le laurier. Retirer du feu, couvrir et laisser infuser quelques minutes.", "Retirer les herbes avec une écumoire. Mettre le jaune d'œuf dans une soupière bien chaude et verser le bouillon dessus en fouettant vivement.", "Mettre une tranche de pain de campagne un peu rassis dans chaque assiette creuse et l'arroser d'un filet d'huile d'olive. Verser aussitôt le bouillon dessus, donner un tour de moulin à poivre et déguster tout de suite."]
  },
  {
    id: "anchois-aux-pommes-reinettes", nom: "Anchois aux pommes reinettes", cuisine: "française",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Anchois aux pommes reinettes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FAnchois_aux_pommes_reinettes",
    ingredients: [
      { id: "anchois", quantite: 20, unite: "g" },
      { id: "pomme", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Dessaler 5 filets d'anchois 15 min dans l'eau froide, les essuyer et retirer l'arête centrale.", "Éplucher les pommes (reinettes de préférence), les couper en quartiers puis en lamelles un peu épaisses.", "Chauffer le beurre dans une poêle, y mettre les pommes et les arroser du jus du citron.", "Quand les pommes sont dorées, ajouter les anchois coupés en morceaux et laisser quelques minutes pour que les saveurs se mélangent. Servir très chaud."]
  },
  {
    id: "aubergines-farcies-a-la-tomate", nom: "Aubergines farcies à la tomate", cuisine: "française",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "Wikilivres", idSource: "Purée d'aubergines",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPur%C3%A9e_d'aubergines",
    ingredients: [
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 75, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "romarin", quantite: 1, unite: "g" },
      { id: "herbes-de-provence", quantite: 1, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 75, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper l'aubergine en deux dans la longueur et retirer la chair en laissant environ 1 cm d'épaisseur dans les coques (la chair n'est pas utilisée dans la recette d'origine : on peut l'ajouter en dés avec les tomates).", "Saler l'intérieur des coques et les poser à l'envers sur une assiette pour qu'elles rendent leur jus.", "Chauffer la moitié de l'huile dans une sauteuse. Faire blondir l'oignon finement haché et l'ail écrasé, ajouter la tomate pelée et coupée, et cuire environ 15 min à feu moyen jusqu'à ce que le mélange soit ferme.", "Rincer et sécher les coques, les farcir avec ce mélange et les mettre dans un plat allant au four.", "Mélanger le reste de l'huile avec 75 ml de bouillon (fait avec le cube), le jus du citron, le thym, le romarin, les herbes de Provence, sel et poivre. En arroser les aubergines.", "Cuire 40 min au four à 180 °C : elles doivent rester tendres."]
  },
  {
    id: "beignets-de-fleurs-de-courgettes", nom: "Beignets de fleurs de courgettes", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Beignets de fleurs de courgettes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBeignets_de_fleurs_de_courgettes",
    ingredients: [
      { id: "fleurs-de-courgette", quantite: 12, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 80, unite: "ml" },
      { id: "huile-d-olive", quantite: 5, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Nettoyer les fleurs de courgettes, retirer la tige et le pistil au centre. Les réserver à l'envers sur un torchon.", "Dans un saladier, mettre la farine avec, au milieu, le jaune d'œuf, une pincée de sel et l'huile d'olive. Mélanger au fouet en ajoutant le lait peu à peu.", "Battre le blanc en neige et l'incorporer rapidement. Ajouter le persil haché, saler et poivrer.", "Tremper les fleurs une à une dans la pâte et les plonger dans l'huile de friture bien chaude. Quand elles sont dorées, les égoutter sur du papier absorbant.", "Servir tiède, avec de la sauce tomate si vous le souhaitez."]
  },
  {
    id: "blancs-de-poulet-farcis-aux-herbes", nom: "Blancs de poulet farcis aux herbes", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Blancs de poulet farcis aux herbes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBlancs_de_poulet_farcis_aux_herbes",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "ciboulette", quantite: 5, unite: "g" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "sauce-soja", quantite: 25, unite: "ml" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Hacher finement le persil et la ciboulette (ou d'autres herbes fraîches : menthe, aneth…), en gardant un peu pour la décoration.", "Dans un bol, mélanger l'ail pressé, les herbes et le jaune d'œuf. Saler et poivrer.", "Ouvrir les blancs de poulet en deux dans l'épaisseur sans séparer les morceaux, les garnir de farce, les rouler et les ficeler.", "Dorer les blancs dans l'huile d'olive dans une sauteuse, puis les réserver.", "Dans une petite casserole, tiédir le vin blanc, y faire fondre le miel puis ajouter la sauce soja. Verser dans la sauteuse et laisser bouillir 5 min.", "Remettre les blancs dans la sauteuse, couvrir et laisser mijoter 15 min.", "Pendant ce temps, éplucher la courgette et la couper en fines lanières avec un économe. Les cuire 5 min à la vapeur pour qu'elles restent croquantes.", "Couper les blancs farcis en tranches et les servir sur les lanières de courgette, arrosés du jus de cuisson et décorés d'herbes."]
  },
  {
    id: "boulettes-de-lentilles-corail", nom: "Boulettes de lentilles corail", cuisine: "française",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Boulettes de lentilles",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoulettes_de_lentilles",
    ingredients: [
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "lentilles-corail", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "chapelure", quantite: 20, unite: "g" },
      { id: "huile-de-tournesol", quantite: 100, unite: "ml" }
    ],
    etapes: ["Porter à ébullition 200 ml d'eau avec le bouillon cube. Y verser les lentilles rouges (corail) bien rincées et laisser mijoter 15 à 20 min en remuant souvent, jusqu'à ce qu'elles soient cuites.", "Laisser refroidir, puis ajouter l'oignon, le persil et l'ail hachés, le sel et le poivre. Ajouter de la chapelure si le mélange est trop humide.", "Former des boulettes et les faire dorer dans l'huile chaude.", "Servir avec une céréale (millet, boulgour…) nappée de sauce tomate."]
  },
  {
    id: "bretzels", nom: "Bretzels (pains alsaciens)", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 160, portions: 2,
    source: "Wikilivres", idSource: "Bretzel",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBretzel",
    ingredients: [
      { id: "farine", quantite: 150, unite: "g" },
      { id: "levure-de-boulanger", quantite: 8, unite: "g" },
      { id: "sel", quantite: 6, unite: "g" },
      { id: "eau", quantite: 1350, unite: "ml" },
      { id: "bicarbonate-de-soude", quantite: 8, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Mettre dans un saladier la farine, la levure de boulanger et 4 g de sel fin.", "Ajouter 100 ml d'eau tiède et mélanger avec une cuillère en bois jusqu'à obtenir une pâte homogène.", "Pétrir à la main 5 min, couvrir d'un linge humide et laisser reposer 2 h dans un endroit bien chaud (par exemple le four chauffé à 65 °C puis éteint).", "Faire 3 boules de pâte et les rouler en boudins d'environ 50 cm, plus épais au milieu qu'aux extrémités. Les nouer pour leur donner la forme des bretzels.", "Porter à ébullition 1,25 l d'eau avec le bicarbonate. Hors du feu, y plonger les bretzels un par un jusqu'à ce qu'ils remontent à la surface.", "Préchauffer le four à 240 °C. Poser les bretzels sur une plaque couverte de papier cuisson, les badigeonner de jaune d'œuf et les parsemer du reste du sel (gros sel).", "Cuire 10 à 12 min : ils doivent être dorés et croustillants dehors, moelleux dedans."]
  },
  {
    id: "cade-toulonnaise", nom: "Cade toulonnaise (galette de farine de pois chiches)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Cade toulonnaise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCade_toulonnaise",
    ingredients: [
      { id: "farine-de-pois-chiches", quantite: 125, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 240 °C. Mélanger au fouet 125 g de farine de pois chiches, 250 ml d'eau, 1 cuillère à soupe d'huile d'olive, du sel et du poivre.", "Verser sur une plaque graissée, sur environ 1 cm d'épaisseur.", "Cuire 10 min, puis passer en position gril jusqu'à ce que le dessus soit bien doré, en perçant les bulles qui se forment à la surface.", "Sortir la cade dès qu'elle dore, avant qu'elle ne durcisse. Servir chaud, salé et poivré."]
  },
  {
    id: "carottes-roties-au-four-thym-et-romarin", nom: "Carottes rôties au four, thym et romarin", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Carottes au four",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCarottes_au_four",
    ingredients: [
      { id: "carotte", quantite: 5, unite: "pièce" },
      { id: "echalote", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "thym", quantite: 2, unite: "g" },
      { id: "romarin", quantite: 1, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "sucre", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C.", "Brosser les carottes et les mettre entières dans un plat à four.", "Ajouter les échalotes coupées en 4 et les gousses d'ail épluchées.", "Arroser d'huile d'olive, parsemer de thym et de romarin émiettés, saler, sucrer et poivrer.", "Couvrir de papier aluminium et cuire environ 35 min. Servir avec une volaille ou du porc."]
  },
  {
    id: "chou-fleur-a-la-creme", nom: "Chou-fleur à la crème", cuisine: "française",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Chou-fleur à la crème",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FChou-fleur_%C3%A0_la_cr%C3%A8me",
    ingredients: [
      { id: "chou-fleur", quantite: 400, unite: "g" },
      { id: "creme-fraiche", quantite: 30, unite: "ml", ou: { id: "fromage-blanc", quantite: 30, unite: "g" } },
      { id: "fromage-rape", quantite: 100, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Cuire les bouquets de chou-fleur (frais ou surgelés) dans une casserole d'eau bouillante salée au gros sel.", "Égoutter puis écraser grossièrement le chou-fleur.", "Ajouter la crème et le fromage râpé, mélanger et rectifier l'assaisonnement."]
  },
  {
    id: "coq-au-vin", nom: "Coq au vin", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "Wikilivres", idSource: "Coq au vin",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCoq_au_vin",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 3, unite: "pièce" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "lardons", quantite: 70, unite: "g" },
      { id: "huile-d-olive", quantite: 5, unite: "ml" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "cognac", quantite: 15, unite: "ml" },
      { id: "vin-rouge", quantite: 350, unite: "ml" },
      { id: "bouquet-garni", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "champignons", quantite: 70, unite: "g" },
      { id: "farine", quantite: 5, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille ou le matin : faire mariner les morceaux de poulet 6 à 12 h dans le vin avec l'huile, du poivre, une demi-gousse d'ail écrasée, le persil haché, le laurier et le thym.", "Éplucher les oignons (idéalement 8 petits oignons blancs) et écraser le reste de l'ail. Les faire dorer avec les lardons dans une cocotte avec la moitié du beurre. Les retirer et faire dorer à la place les morceaux de poulet égouttés, de tous les côtés.", "Retirer le gras de la cocotte. Remettre oignons, ail et lardons avec le poulet. Chauffer le cognac, le verser dans la cocotte et le flamber.", "Ajouter le vin de la marinade, le bouquet garni et la carotte en rondelles. Couvrir et laisser mijoter 1 h.", "Pendant ce temps, laver et couper les champignons, les faire sauter dans la moitié du beurre restant. Les ajouter à la cocotte et laisser mijoter encore 20 min.", "Mélanger le reste du beurre avec la farine (beurre manié), le délayer avec un peu de jus de cuisson chaud, l'ajouter à la cocotte et laisser mijoter 5 min. Saler. Servir très chaud."]
  },
  {
    id: "creme-de-chou-fleur", nom: "Crème de chou-fleur", cuisine: "française",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Crème de chou-fleur",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCr%C3%A8me_de_chou-fleur",
    ingredients: [
      { id: "sel", quantite: 2, unite: "g" },
      { id: "chou-fleur", quantite: 400, unite: "g" },
      { id: "pomme-de-terre", quantite: 100, unite: "g" },
      { id: "pain", quantite: 1, unite: "tranche" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 330, unite: "ml" },
      { id: "lait", quantite: 70, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une casserole d'eau bouillante salée, mettre le chou-fleur en gros bouquets, la pomme de terre épluchée en quartiers et un croûton de pain rassis. Laisser frémir 25 min.", "Égoutter et retirer le pain. Mixer le chou-fleur et la pomme de terre (ou les passer au moulin à légumes).", "Délayer cette purée avec 330 ml de bouillon (eau et bouillon cube), ajouter le lait et faire chauffer. Rectifier l'assaisonnement.", "Mettre le beurre dans la soupière, verser la crème par-dessus et servir chaud."]
  },
  {
    id: "des-de-saumon-marine-au-citron", nom: "Dés de saumon mariné au citron", cuisine: "française",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Dés de saumon mariné au citron",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FD%C3%A9s_de_saumon_marin%C3%A9_au_citron",
    ingredients: [
      { id: "saumon", quantite: 200, unite: "g" },
      { id: "sel", quantite: 30, unite: "g" },
      { id: "citron", quantite: 2, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "aneth", quantite: 2, unite: "g" }
    ],
    etapes: ["Couper le saumon frais en dés et le saler abondamment au gros sel.", "Le laisser 24 h au réfrigérateur.", "Jeter le sel et rincer rapidement les dés de saumon.", "Presser les citrons et couvrir les dés de leur jus. Ajouter le thym et l'aneth.", "Remettre au réfrigérateur encore 24 h. Servir avec de petits pics."]
  },
  {
    id: "epinards-a-la-creme-et-aux-champignons", nom: "Épinards à la crème et aux champignons", cuisine: "française",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Épinards à la crème",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2F%C3%89pinards_%C3%A0_la_cr%C3%A8me",
    ingredients: [
      { id: "epinards", quantite: 400, unite: "g" },
      { id: "champignons", quantite: 200, unite: "g" },
      { id: "fromage-blanc", quantite: 30, unite: "g" },
      { id: "lait", quantite: 200, unite: "ml" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les épinards 5 min dans l'eau bouillante salée. Les égoutter, les plonger 5 min dans de l'eau glacée et les presser.", "Cuire les épinards 5 min avec le lait et rectifier l'assaisonnement.", "Faire sauter les champignons émincés à l'huile d'olive, saler et poivrer.", "Ajouter les épinards, mélanger et laisser réduire.", "Incorporer le fromage blanc et mélanger."]
  },
  {
    id: "escalopes-de-poulet-aux-aubergines", nom: "Escalopes de poulet aux aubergines", cuisine: "française",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Escalopes de poulet aux aubergines",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FEscalopes_de_poulet_aux_aubergines",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "echalote", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "curry-en-poudre", quantite: 1, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "creme-fraiche", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 50, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une sauteuse, chauffer l'huile d'olive à feu vif. Faire revenir l'échalote émincée, la tomate en quartiers et les aubergines en dés.", "Cuire 5 min à feu vif en remuant, puis ajouter l'ail écrasé et le citron coupé en quartiers. Saler et poivrer.", "Cuire encore 5 min à feu vif en remuant, ajouter le curry et laisser mijoter 10 min à feu moyen.", "Pendant ce temps, cuire les escalopes dans une autre poêle avec l'huile de tournesol et le beurre. Saler et poivrer.", "Disposer les escalopes cuites dans le plat de service. Déglacer la poêle avec un peu d'eau et verser ce jus sur les escalopes.", "Napper de la préparation aux aubergines et ajouter la crème."]
  },
  {
    id: "escalopes-de-veau-panees-parmesan-amandes", nom: "Escalopes de veau panées parmesan-amandes", cuisine: "française",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Escalopes de veau parmesan-amandes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FEscalopes_de_veau_parmesan-amandes",
    ingredients: [
      { id: "escalope-de-veau", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "amandes", quantite: 60, unite: "g", ou: { id: "poudre-d-amandes", quantite: 60, unite: "g" } },
      { id: "parmesan", quantite: 30, unite: "g" },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mixer les amandes (mondées) en semoule pas trop fine. Les mélanger dans un bol avec le parmesan râpé.", "Dans un autre bol, battre l'œuf en omelette, saler et poivrer.", "Fariner les escalopes des deux côtés, les passer dans l'œuf puis dans le mélange parmesan-amandes.", "Chauffer le beurre et l'huile dans une poêle antiadhésive.", "Quand le mélange mousse, dorer les escalopes à feu moyen 3 à 4 min de chaque côté, selon leur épaisseur."]
  },
  {
    id: "fondue-de-poireaux", nom: "Fondue de poireaux", cuisine: "française",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Fondue de poireaux à la crème",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFondue_de_poireaux_%C3%A0_la_cr%C3%A8me",
    ingredients: [
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "echalote", quantite: 1, unite: "pièce" },
      { id: "poireau", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "fromage-blanc", quantite: 15, unite: "g" }
    ],
    etapes: ["Faire fondre le beurre dans une sauteuse. Hacher l'échalote et la faire caraméliser doucement dans le beurre.", "Couper les poireaux en deux dans la longueur, les laver, les couper en tranches de 5 mm et les sécher.", "Quand l'échalote a coloré, ajouter les poireaux. Saler, poivrer (poivre blanc de préférence), mélanger et couvrir.", "Cuire 20 min à feu doux en remuant souvent : les poireaux cuisent dans leur eau ; en ajouter un peu s'il en manque.", "Retirer le couvercle pour faire évaporer le reste d'eau, ajouter le fromage blanc et mélanger."]
  },
  {
    id: "fritade-de-courgettes", nom: "Fritade de courgettes", cuisine: "française",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Fritade de courgettes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFritade_de_courgettes",
    ingredients: [
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" }
    ],
    etapes: ["Couper la courgette en rondelles et la cuire 20 min à l'eau salée.", "Couper l'oignon en quatre puis en tranches. Le faire revenir dans une bonne quantité d'huile d'olive jusqu'à ce qu'il caramélise.", "Égoutter la courgette, l'ajouter aux oignons avec un peu d'huile, mélanger et cuire 15 min à feu vif en remuant souvent.", "Battre les œufs en omelette avec sel et poivre, les verser sur les courgettes et mélanger.", "Dès que le dessous a pris, retourner la fritade pour cuire l'autre côté, puis finir 1 à 2 min à feu doux."]
  },
  {
    id: "galettes-aux-noix-et-aux-flocons-d-avoine", nom: "Galettes aux noix et aux flocons d'avoine", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Galettes aux noix et flocons d’avoine",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGalettes_aux_noix_et_flocons_d%E2%80%99avoine",
    ingredients: [
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "miso", quantite: 3, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "flocons-d-avoine", quantite: 100, unite: "g" },
      { id: "noix", quantite: 50, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "chapelure", quantite: 30, unite: "g" },
      { id: "huile-d-arachide", quantite: 20, unite: "ml" }
    ],
    etapes: ["Porter à ébullition 250 ml d'eau avec le bouillon cube, la sauce soja, le miso et l'ail haché. Y verser les flocons d'avoine, faire rebouillir puis laisser mijoter 20 min à petit feu.", "Laisser refroidir. Ajouter les noix pilées, la muscade, le sel, le poivre et assez de chapelure pour pouvoir former de petites galettes.", "Les faire dorer dans l'huile quelques minutes de chaque côté.", "Servir avec des pommes de terre nature ou des frites."]
  },
  {
    id: "galettes-de-sarrasin", nom: "Galettes de sarrasin", cuisine: "française",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Galettes de sarrasin",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGalettes_de_sarrasin",
    ingredients: [
      { id: "farine-de-sarrasin", quantite: 120, unite: "g" },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "eau", quantite: 350, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" }
    ],
    etapes: ["Mettre dans un saladier la farine de sarrasin et la farine de blé (la recette d'origine y ajoute 1 cuillère à café de farine de soja). Ajouter le sel, un peu de muscade et assez d'eau pour obtenir une pâte lisse, un peu plus épaisse qu'une pâte à crêpes.", "Huiler légèrement une poêle bien chaude. Verser une petite louche de pâte et cuire la galette des deux côtés. Bien remuer la pâte avant chaque galette.", "Garnir selon vos envies : champignons, oignons, aubergines, tomates, brocolis…"]
  },
  {
    id: "gougeres-au-comte", nom: "Gougères au comté", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Gougère",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGoug%C3%A8re",
    ingredients: [
      { id: "farine", quantite: 75, unite: "g" },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "eau", quantite: 125, unite: "ml" },
      { id: "comte", quantite: 60, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une casserole, porter à ébullition l'eau, le beurre et une pincée de sel.", "Retirer du feu et verser toute la farine d'un coup. Mélanger vivement avec une cuillère en bois jusqu'à obtenir une pâte homogène.", "Remettre sur feu doux en remuant jusqu'à ce que la pâte se détache des parois. Retirer du feu et laisser tiédir.", "Incorporer le comté râpé et le poivre, puis 2 œufs, un par un, en mélangeant bien.", "Préchauffer le four à 180 °C. Sur une plaque couverte de papier cuisson, déposer de petits tas de pâte avec deux cuillères à café, bien espacés (ils gonflent beaucoup). On peut aussi former une couronne.", "Délayer le jaune du dernier œuf avec un peu d'eau et en badigeonner la pâte.", "Cuire 25 min sans ouvrir le four."]
  },
  {
    id: "gratin-de-chou-fleur", nom: "Gratin de chou-fleur", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Gratin au chou",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGratin_au_chou",
    ingredients: [
      { id: "chou-fleur", quantite: 400, unite: "g" },
      { id: "fromage-rape", quantite: 50, unite: "g" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Laver le chou-fleur, le couper en bouquets et le cuire à la vapeur environ 25 min.", "Mélanger la crème et le fromage râpé, poivrer.", "Préchauffer le four à 210 °C.", "Beurrer un plat à gratin et y répartir le chou-fleur salé. Napper de sauce et parsemer de petits morceaux du reste du beurre.", "Gratiner 10 min au four et servir très chaud."]
  },
  {
    id: "gratin-de-courgettes-a-la-feta", nom: "Gratin de courgettes à la feta", cuisine: "française",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Gratin de courgettes et féta",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGratin_de_courgettes_et_f%C3%A9ta",
    ingredients: [
      { id: "courgette", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "feta", quantite: 100, unite: "g" }
    ],
    etapes: ["Laver et éplucher les courgettes, puis les couper en rondelles.", "Les cuire 15 min à feu doux dans l'huile d'olive.", "Préchauffer le four à 170 °C. Mettre la moitié des courgettes dans un plat à four, les couvrir de la moitié de la feta émiettée, puis ajouter le reste des courgettes et finir par le reste de feta.", "Faire gratiner 10 min au four."]
  },
  {
    id: "gratin-de-potiron", nom: "Gratin de potiron", cuisine: "française",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Gratin de potiron",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGratin_de_potiron",
    ingredients: [
      { id: "potiron", quantite: 400, unite: "g", ou: { id: "courge-butternut", quantite: 400, unite: "g" } },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "gruyere", quantite: 60, unite: "g", ou: { id: "comte", quantite: 60, unite: "g" } },
      { id: "beurre", quantite: 30, unite: "g", ou: { id: "huile-d-olive", quantite: 20, unite: "ml" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher 400 g de potiron (ou de courge musquée pour une version provençale), retirer les graines, le couper en dés et le cuire 20 min dans l'eau bouillante salée.", "Cuire 150 g de pommes de terre à l'eau et les éplucher.", "Égoutter et écraser le tout. Incorporer l'œuf battu, le beurre (ou un peu d'huile d'olive), du sel et du poivre.", "Verser dans un plat allant au four, saupoudrer de gruyère (ou de comté) râpé et faire gratiner 20 min au four chaud."]
  },
  {
    id: "gratin-de-tofu-aux-haricots-rouges", nom: "Gratin de tofu aux haricots rouges", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 110, portions: 2,
    source: "Wikilivres", idSource: "Gratin de tofu",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGratin_de_tofu",
    ingredients: [
      { id: "haricots-rouges-secs", quantite: 100, unite: "g", ou: { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" } },
      { id: "tofu", quantite: 150, unite: "g" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sauce-tomate", quantite: 400, unite: "g" },
      { id: "herbes-de-provence", quantite: 2, unite: "g" },
      { id: "chapelure", quantite: 20, unite: "g" },
      { id: "levure-maltee", quantite: 10, unite: "g" }
    ],
    etapes: ["La veille, mettre les haricots rouges secs à tremper dans de l'eau.", "Les cuire environ 1 h dans de l'eau bouillante. Pendant ce temps, faire mariner le tofu émietté avec la sauce soja, le paprika et le poivre.", "Faire revenir l'oignon et l'ail hachés dans un peu d'huile, ajouter les tomates pelées (1 boîte) et les herbes de Provence, et laisser mijoter 30 min.", "Ajouter le tofu et les haricots égouttés à la sauce et cuire quelques minutes.", "Verser dans un plat à four, saupoudrer de chapelure et de levure maltée, arroser d'un filet d'huile d'olive et faire dorer au four. Servir avec une céréale (riz, boulgour…)."]
  },
  {
    id: "gratin-savoyard", nom: "Gratin savoyard", cuisine: "française",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "Wikilivres", idSource: "Gratin savoyard",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGratin_savoyard",
    ingredients: [
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "gruyere", quantite: 75, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 170, unite: "ml" }
    ],
    etapes: ["Éplucher, laver et sécher les pommes de terre (à chair ferme, type charlotte), puis les couper en fines rondelles.", "Beurrer un plat allant au four.", "Y mettre une couche de pommes de terre, saler et poivrer, couvrir de gruyère râpé et de noisettes de beurre. Recommencer jusqu'à épuisement des ingrédients.", "Verser 170 ml de bouillon (eau et bouillon cube).", "Cuire 1 h au four préchauffé à 200 °C : le bouillon doit être entièrement absorbé. Servir avec une viande rôtie."]
  },
  {
    id: "gratinee-a-la-biere", nom: "Gratinée à la bière (soupe à l'oignon)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Gratinée à la bière",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGratin%C3%A9e_%C3%A0_la_bi%C3%A8re",
    ingredients: [
      { id: "gruyere", quantite: 50, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "biere", quantite: 375, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "pain", quantite: 2, unite: "tranche" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer le beurre dans une cocotte, ajouter l'oignon émincé et cuire 5 min.", "Verser 250 ml de bouillon de volaille (fait avec le cube) et la bière blonde. Saler, poivrer et cuire 30 min.", "Poser les tranches de pain de campagne sur une grille couverte de papier aluminium, les griller au four des deux côtés, les couvrir de gruyère râpé et faire gratiner.", "Répartir la soupe dans 2 assiettes creuses, poser les tartines gratinées dessus et servir."]
  },
  {
    id: "lentilles-cuisinees-aux-lardons", nom: "Lentilles cuisinées aux lardons", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Lentilles cuisinées",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FLentilles_cuisin%C3%A9es",
    ingredients: [
      { id: "lentilles", quantite: 125, unite: "g" },
      { id: "lardons", quantite: 50, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "echalote", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 400, unite: "ml" }
    ],
    etapes: ["Mettre les lentilles dans un autocuiseur, les couvrir de trois fois leur volume d'eau. Ajouter le cube de bouillon, le thym, le laurier et un peu de poivre noir. Cuire 20 min.", "Pendant ce temps, couper la carotte en cubes et la faire sauter à l'huile d'olive avec le paprika, la muscade et un peu de poivre blanc. Baisser le feu dès qu'elle colore et remuer souvent.", "Après 5 min, ajouter l'oignon et l'échalote émincés (et un peu d'huile si besoin). Cuire jusqu'à ce que l'oignon commence à colorer.", "Ajouter les lardons et cuire encore quelques minutes en remuant, jusqu'à ce qu'ils changent de couleur.", "Égoutter les lentilles en gardant un peu d'eau de cuisson pour qu'elles restent juteuses. Verser la garniture dessus, mélanger et saler."]
  },
  {
    id: "magret-de-canard-au-miel", nom: "Magret de canard au miel, cumin et curry", cuisine: "française",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Magret de canard au miel",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMagret_de_canard_au_miel",
    ingredients: [
      { id: "magret-de-canard", quantite: 1, unite: "pièce" },
      { id: "miel", quantite: 5, unite: "g" },
      { id: "vinaigre-balsamique", quantite: 15, unite: "ml" },
      { id: "cumin", quantite: 1, unite: "g" },
      { id: "curry-en-poudre", quantite: 1, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 175 °C (chaleur tournante) avec un plat à l'intérieur.", "Quadriller la peau du magret (environ 400 g) au couteau, puis saler et poivrer.", "Dans une cocotte, cuire le magret 3 min côté peau à feu vif. Le retirer, enlever le gras et les morceaux grillés, puis le cuire 2 min de l'autre côté.", "Mettre le magret 7 min au four dans le plat chaud.", "Pendant ce temps, faire revenir dans la cocotte le vinaigre balsamique, le miel, le curry et le cumin.", "Laisser reposer le magret quelques minutes, puis le servir avec son jus."]
  },
  {
    id: "michon", nom: "Michon (galette au comté)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Michon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMichon",
    ingredients: [
      { id: "comte", quantite: 100, unite: "g" },
      { id: "farine", quantite: 100, unite: "g" },
      { id: "lait", quantite: 50, unite: "ml" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" }
    ],
    etapes: ["Mélanger la farine et le comté râpé, assaisonner de sel, poivre et muscade. Ajouter le lait et l'eau.", "Lisser au fouet et laisser reposer la pâte 30 min à couvert.", "Faire fondre le beurre et l'huile dans une poêle. Verser la pâte et l'étaler sur tout le fond avec une cuillère humide.", "Baisser un peu le feu et laisser dorer doucement 5 à 6 min.", "Faire glisser la galette sur une feuille de papier cuisson, la retourner dans la poêle et dorer l'autre face 7 à 8 min. Elle doit être dorée, ferme et croustillante sur les bords.", "Couper en parts et servir chaud, à l'apéritif ou avec une salade."]
  },
  {
    id: "mille-feuille-aux-anchois", nom: "Mille-feuille aux anchois", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Mille-feuille aux anchois",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMille-feuille_aux_anchois",
    ingredients: [
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 100, unite: "g" },
      { id: "anchois", quantite: 25, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Couper la pâte feuilletée en 3 rectangles de même taille, les piquer et les cuire au four (environ 15 min à 200 °C) jusqu'à ce qu'ils soient dorés. Laisser refroidir.", "Faire durcir l'œuf 10 min dans l'eau bouillante, l'écaler et hacher séparément le jaune et le blanc. Hacher le persil.", "Écraser ou mixer les anchois et les mélanger au beurre ramolli.", "Tartiner les rectangles de beurre d'anchois et les superposer. Décorer le dessus en damier avec le jaune, le blanc et le persil hachés.", "Réchauffer quelques minutes au four au moment de servir."]
  },
  {
    id: "moules-a-l-ail", nom: "Moules à l'ail (Vendée)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Recettes de villages qui bougent/Vendée/Moules à l’ail",
    lienSource: "https://fr.wikibooks.org/wiki/Recettes_de_villages_qui_bougent%2FVend%C3%A9e%2FMoules_%C3%A0_l%E2%80%99ail",
    ingredients: [
      { id: "moules", quantite: 1000, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 100, unite: "ml" }
    ],
    etapes: ["Nettoyer et laver 1 kg de moules de bouchot.", "Mettre un peu d'eau dans une grande casserole avec le persil et le laurier. Ajouter les moules et les faire ouvrir à feu vif en remuant la casserole.", "Quand elles sont ouvertes, garder la casserole au chaud, hors du feu.", "Dans une petite casserole, faire fondre un bon morceau de beurre (50 g) et y faire dorer doucement 4 gousses d'ail coupées en tranches pas trop fines, en surveillant bien : l'ail brûlé devient amer.", "Filtrer le jus de cuisson des moules et le verser sur l'ail, hors du feu. Remettre sur feu doux, porter à ébullition et ajouter un bon filet de vinaigre d'alcool, selon votre goût.", "Servir les moules avec la casserole de sauce à côté : chacun se sert."]
  },
  {
    id: "oeufs-brouilles", nom: "Œufs brouillés", cuisine: "française",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Œufs brouillés",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2F%C5%92ufs_brouill%C3%A9s",
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Battre légèrement les œufs avec le sel et le poivre.", "Faire fondre le beurre dans une casserole au bain-marie (ou dans une poêle à feu moyen-doux).", "Verser les œufs et remuer sans arrêt avec une spatule en bois jusqu'à la texture souhaitée, crémeuse ou plus prise. Servir aussitôt."]
  },
  {
    id: "omelette-angevine", nom: "Omelette angevine (lardons, poireau et pomme de terre)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Omelette Angevine",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FOmelette_Angevine",
    ingredients: [
      { id: "beurre", quantite: 12, unite: "g" },
      { id: "lardons", quantite: 30, unite: "g" },
      { id: "jambon", quantite: 1, unite: "tranche" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 100, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "gruyere", quantite: 25, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" }
    ],
    etapes: ["Faire fondre le beurre (salé de préférence) à feu vif dans une poêle.", "Y faire revenir les lardons et le jambon en petits dés, puis les retirer et les garder dans une assiette.", "Faire revenir le blanc de poireau en petits cubes ; dès qu'il blondit, le retirer aussi.", "Faire cuire la pomme de terre en petits cubes dans la poêle. Quand elle est cuite, remettre les lardons, le jambon et le poireau. Saler, poivrer et remuer.", "Battre les œufs à la fourchette avec le gruyère râpé, les verser dans la poêle et remuer vivement.", "Laisser ensuite cuire sans toucher, en dorant rapidement les deux faces. Servir légèrement baveuse, parsemée de persil (ou de ciboulette)."]
  },
  {
    id: "omelette-nature", nom: "Omelette nature", cuisine: "française",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Omelette",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FOmelette",
    ingredients: [
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Casser 4 œufs dans un grand bol avec le sel et le poivre.", "Battre délicatement à la fourchette jusqu'à ce que le jaune et le blanc soient bien mélangés.", "Verser aussitôt dans une poêle bien chaude, légèrement beurrée.", "Cuire uniformément et servir au plus vite."]
  },
  {
    id: "paillassons-de-pommes-de-terre", nom: "Paillassons de pommes de terre", cuisine: "française",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Paillassons de pommes de terre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPaillassons_de_pommes_de_terre",
    ingredients: [
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" }
    ],
    etapes: ["Éplucher et râper les pommes de terre. Hacher l'oignon.", "Battre les œufs, saler, poivrer, ajouter le paprika et un peu de muscade.", "Ajouter les pommes de terre et l'oignon, et mélanger.", "Chauffer l'huile d'olive dans une poêle et y déposer la préparation en petits tas. Les aplatir avec une spatule à moins de 2 cm d'épaisseur.", "Cuire 2 à 3 min à feu vif, retourner et cuire 2 min, puis couvrir et cuire encore 5 min."]
  },
  {
    id: "palets-de-lentilles", nom: "Palets de lentilles", cuisine: "française",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Palet de lentille",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPalet_de_lentille",
    ingredients: [
      { id: "lentilles", quantite: 100, unite: "g" },
      { id: "chapelure", quantite: 40, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" }
    ],
    etapes: ["Cuire les lentilles à l'eau (ou utiliser une petite boîte de lentilles cuites au naturel). Les égoutter et les rincer.", "Les écraser à la fourchette ou au presse-purée (au mixeur, elles deviennent liquides et il faut beaucoup plus de chapelure).", "Mélanger avec la moitié de la chapelure. Former des boules et les aplatir en palets.", "Paner les palets avec le reste de la chapelure.", "Les cuire à la poêle dans l'huile chaude, comme des steaks hachés, quelques minutes de chaque côté."]
  },
  {
    id: "pates-a-la-flammekueche", nom: "Pâtes à la flammekueche (lardons, oignons, fromage blanc)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Pâtes à la flammenkuche",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2tes_%C3%A0_la_flammenkuche",
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "lardons", quantite: 60, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "fromage-blanc", quantite: 100, unite: "g" }
    ],
    etapes: ["Cuire les pâtes comme indiqué sur le paquet.", "Dans une casserole, faire revenir les lardons sans matière grasse, puis ajouter le gros oignon coupé en lamelles.", "Quand l'oignon est translucide, ajouter le fromage blanc et laisser 5 min à feu doux.", "Servir les pâtes nappées de cette sauce."]
  },
  {
    id: "piperade", nom: "Pipérade (poivrons, tomates et œufs brouillés)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Pipérade",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPip%C3%A9rade",
    ingredients: [
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "piment-d-espelette", quantite: 1, unite: "g" },
      { id: "oeuf", quantite: 5, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire dorer le poivron émincé (de préférence moitié rouge, moitié vert) dans une grande poêle avec l'huile d'olive.", "Ajouter l'oignon et l'ail émincés et les faire juste dorer.", "Ébouillanter les tomates, les peler et les émincer. Les ajouter dans la poêle avec une demi-cuillère à café de piment d'Espelette.", "Laisser réduire 15 min à feu doux.", "Battre les œufs dans un saladier, saler et les verser dans la poêle. Cuire en remuant régulièrement."]
  },
  {
    id: "poelee-brestoise", nom: "Poêlée brestoise", cuisine: "française",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Poêlée brestoise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPo%C3%AAl%C3%A9e_brestoise",
    ingredients: [
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "saucisse", quantite: 3, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "thon-a-la-catalane-en-boite", quantite: 1, unite: "boîte", ou: { id: "thon-en-boite", quantite: 1, unite: "boîte" } },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "fromage-rape", quantite: 100, unite: "g" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre, les couper en petits cubes et les faire revenir au beurre dans une poêle.", "Pendant ce temps, couper les saucisses (type knacki) en rondelles et l'oignon en demi-rondelles.", "Quand les pommes de terre ont pris un peu de couleur, ajouter l'oignon, puis les rondelles de saucisse avant la fin de la cuisson.", "Battre les œufs en omelette avec le thon à la catalane, le gruyère râpé, sel et poivre.", "Verser dans la poêle et laisser cuire comme une omelette."]
  },
  {
    id: "pommes-de-terre-au-four-creme-aux-herbes", nom: "Pommes de terre au four, crème aux herbes", cuisine: "française",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "Wikilivres", idSource: "Pomme de terre au four",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPomme_de_terre_au_four",
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "creme-fraiche", quantite: 125, unite: "ml" },
      { id: "ciboulette", quantite: 3, unite: "g" },
      { id: "basilic", quantite: 1, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Choisir 2 grosses pommes de terre de même taille, d'une variété qui convient au four (Samba, Manon, Nicola, Monalisa…).", "Les laver dans de l'eau légèrement salée et faire une incision dans la longueur.", "Envelopper chaque pomme de terre dans du papier aluminium (ou les poser sur un lit de gros sel) et cuire environ 1 h. Elles sont cuites quand la lame d'un couteau en ressort sans accrocher.", "Pendant ce temps, émincer 2 ou 3 brins de ciboulette et 1 feuille de basilic, hacher finement un petit morceau d'oignon (environ ⅛) et écraser un petit morceau de gousse d'ail.", "Mélanger le tout à 125 ml de crème fraîche épaisse et servir avec les pommes de terre."]
  },
  {
    id: "potage-aux-lentilles-corail", nom: "Potage aux lentilles corail", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Potage aux lentilles corail",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPotage_aux_lentilles_corail",
    ingredients: [
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "lentilles-corail", quantite: 100, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 700, unite: "ml" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir dans l'huile d'olive l'oignon émincé, l'ail écrasé et la carotte en rondelles.", "Ajouter les lentilles corail, 700 ml d'eau avec le bouillon cube, le thym, le sel et le poivre.", "Porter à ébullition et cuire 30 min à l'autocuiseur (ou environ 40 min à la casserole).", "Servir chaud, avec des croûtons de pain si vous en avez."]
  },
  {
    id: "potage-aux-pois-casses", nom: "Potage aux pois cassés", cuisine: "française",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "Wikilivres", idSource: "Potage aux pois cassés",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPotage_aux_pois_cass%C3%A9s",
    ingredients: [
      { id: "huile-d-arachide", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "pois-casses", quantite: 100, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 700, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir dans l'huile l'oignon émincé, le poireau coupé en biseaux et un tiers de concombre en rondelles.", "Ajouter les pois cassés, 700 ml d'eau avec le bouillon cube, le sel et le poivre.", "Porter à ébullition et cuire environ 1 h à l'autocuiseur.", "Mixer le potage (ou le passer au moulin à légumes) avant de servir."]
  },
  {
    id: "potage-potiron-chataignes", nom: "Potage potiron-châtaignes (Vendée)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Recettes de villages qui bougent/Vendée/Potage potiron-châtaignes",
    lienSource: "https://fr.wikibooks.org/wiki/Recettes_de_villages_qui_bougent%2FVend%C3%A9e%2FPotage_potiron-ch%C3%A2taignes",
    ingredients: [
      { id: "potiron", quantite: 350, unite: "g" },
      { id: "chataignes", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "eau", quantite: 600, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire 100 g de châtaignes à l'eau, puis les éplucher.", "Faire revenir l'oignon émincé dans le beurre, puis ajouter les châtaignes et 350 g de potiron coupé en morceaux.", "Couvrir d'eau (environ 600 ml), saler, poivrer et laisser cuire 20 min.", "Mixer le tout et rectifier l'assaisonnement. Ajouter selon votre goût un peu de crème fraîche, de muscade ou de coriandre."]
  },
  {
    id: "potee-de-chou-blanc-au-tofu-fume", nom: "Potée de chou blanc au tofu fumé", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 130, portions: 2,
    source: "Wikilivres", idSource: "Potée de chou blanc",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPot%C3%A9e_de_chou_blanc",
    ingredients: [
      { id: "chou", quantite: 600, unite: "g" },
      { id: "tofu-fume", quantite: 50, unite: "g", ou: { id: "tofu", quantite: 50, unite: "g" } },
      { id: "haricots-blancs-secs", quantite: 50, unite: "g" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "huile-d-arachide", quantite: 35, unite: "ml" },
      { id: "moutarde", quantite: 3, unite: "g" },
      { id: "bouquet-garni", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["La veille : faire tremper les haricots 12 h dans de l'eau.", "Égoutter, couvrir d'eau neuve et cuire 45 min avec du sel.", "Couper le chou blanc en gros quartiers, le cuire à l'eau salée et l'égoutter.", "Dans une cocotte, faire rissoler le tofu en gros dés dans l'huile d'arachide jusqu'à ce qu'il soit bien doré.", "Ajouter le chou et l'huile de tournesol, la moutarde (au poivre si possible), le sel et le bouquet garni. Laisser mijoter 45 min.", "Ajouter les haricots égouttés et cuire encore 15 min. Servir bien chaud."]
  },
  {
    id: "poulet-basquaise", nom: "Poulet basquaise", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    source: "Wikilivres", idSource: "Poulet basquaise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoulet_basquaise",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "lardons", quantite: 50, unite: "g" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "piment-d-espelette", quantite: 1, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les cuisses de poulet en morceaux (haut et bas de cuisse).", "Plonger les tomates quelques secondes dans l'eau bouillante pour les peler facilement.", "Dorer le poulet dans une sauteuse avec l'huile d'olive (ou de la graisse de canard), puis l'égoutter.", "Dans la même sauteuse, faire dorer légèrement les lardons. Pendant ce temps, peler et couper l'oignon, couper les poivrons (un rouge et un vert), peler et couper les tomates, hacher l'ail. Ajouter chaque légume dès qu'il est prêt.", "Saler, ajouter le piment d'Espelette et poivrer.", "Remettre le poulet, couvrir et laisser mijoter environ 1 h à la sauteuse (ou 10 à 15 min à l'autocuiseur après le sifflement).", "Servir avec du riz cuit à l'eau."]
  },
  {
    id: "poulet-gaston-gerard", nom: "Poulet Gaston Gérard (poulet au comté, vin blanc et moutarde)", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "Wikilivres", idSource: "Poulet à la Gaston Gérard",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoulet_%C3%A0_la_Gaston_G%C3%A9rard",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "vin-blanc", quantite: 200, unite: "ml" },
      { id: "moutarde", quantite: 10, unite: "g" },
      { id: "comte", quantite: 75, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "creme-fraiche", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Dans une cocotte, faire dorer les morceaux de poulet dans le beurre, saler et poivrer. Les mettre dans un plat allant au four.", "Dans la cocotte, faire dorer les oignons émincés, puis ajouter 200 ml de vin blanc (idéalement un bourgogne aligoté) et laisser un peu réduire.", "Ajouter la moutarde de Dijon, le comté râpé (en gardant une poignée pour la fin) et le paprika. Bien remuer et porter à ébullition.", "Ajouter 250 ml de crème fraîche épaisse et verser la sauce sur le poulet.", "Parsemer du reste de comté et cuire 30 min au four. Servir avec du riz ou des pommes de terre à l'eau."]
  },
  {
    id: "pounti", nom: "Pounti (pain de viande auvergnat aux pruneaux)", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 95, portions: 2,
    source: "Wikilivres", idSource: "Pounti",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPounti",
    ingredients: [
      { id: "persil", quantite: 15, unite: "g" },
      { id: "blettes", quantite: 60, unite: "g", ou: { id: "epinards", quantite: 60, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "porc-hache", quantite: 170, unite: "g" },
      { id: "farine", quantite: 85, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 70, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "pruneaux", quantite: 30, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Hacher la verdure (persil et feuilles de blettes) et l'oignon.", "Dans un saladier, mélanger la chair à saucisse (porc haché maigre et gras), la farine, les œufs, le lait, la verdure et l'oignon. Saler et poivrer.", "Verser la moitié du mélange dans un petit moule à cake.", "Aligner les pruneaux (d'Agen, dénoyautés de préférence) dans la longueur, puis couvrir avec le reste de la préparation.", "Cuire environ 1 h au four (75 min pour un grand moule)."]
  },
  {
    id: "puree-de-carottes", nom: "Purée de carottes", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Purée de carottes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPur%C3%A9e_de_carottes",
    ingredients: [
      { id: "carotte", quantite: 4, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 100, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Éplucher et couper les légumes. Cuire les carottes 20 min à l'eau salée.", "Ajouter la pomme de terre et cuire encore 30 min.", "Égoutter en gardant 200 ml d'eau de cuisson. Écraser les légumes, ajouter cette eau et le beurre, et saler."]
  },
  {
    id: "puree-de-celeri-rave", nom: "Purée de céleri-rave", cuisine: "française",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Purée de cèleris",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPur%C3%A9e_de_c%C3%A8leris",
    ingredients: [
      { id: "celeri-rave", quantite: 300, unite: "g" },
      { id: "pomme-de-terre", quantite: 150, unite: "g" },
      { id: "lait", quantite: 200, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "creme-fraiche", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Éplucher le céleri-rave (300 g) et les pommes de terre (150 g), les couper en morceaux et les cuire 40 min dans de l'eau salée.", "Égoutter et écraser les légumes, puis mélanger avec le beurre, la crème et le lait (200 ml).", "Rectifier l'assaisonnement et servir."]
  },
  {
    id: "puree-de-courgettes", nom: "Purée de courgettes", cuisine: "française",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Purée de courgettes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPur%C3%A9e_de_courgettes",
    ingredients: [
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "lait", quantite: 200, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "creme-fraiche", quantite: 20, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Épépiner la courgette (environ 200 g) et éplucher les pommes de terre (200 g), puis couper les légumes en morceaux.", "Les cuire 40 min dans de l'eau salée.", "Égoutter et écraser, puis ajouter le beurre, le lait (200 ml), la crème et le jus du citron (l'original en indique 10 cl : doser selon votre goût).", "Rectifier l'assaisonnement et servir."]
  },
  {
    id: "puree-de-navets", nom: "Purée de navets", cuisine: "française",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Purée de navets",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPur%C3%A9e_de_navets",
    ingredients: [
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "navet", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 200, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "creme-fraiche", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre (200 g) et les navets (environ 200 g), puis les couper en morceaux.", "Les cuire 40 min dans de l'eau salée.", "Égoutter et écraser, puis ajouter le beurre, le lait (200 ml) et la crème.", "Mélanger, rectifier l'assaisonnement et servir."]
  },
  {
    id: "puree-de-pois-casses", nom: "Purée de pois cassés", cuisine: "française",
    difficulte: "facile", tempsMinutes: 90, portions: 2,
    source: "Wikilivres", idSource: "Purée de pois cassés",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPur%C3%A9e_de_pois_cass%C3%A9s",
    ingredients: [
      { id: "pois-casses", quantite: 250, unite: "g" },
      { id: "eau", quantite: 1500, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "beurre", quantite: 10, unite: "g" }
    ],
    etapes: ["Première cuisson : mettre 250 g de pois cassés dans l'eau froide sans sel, porter à ébullition et faire bouillir 15 min. Égoutter et rincer à l'eau froide.", "Deuxième cuisson : remettre les pois cassés dans de l'eau froide, porter doucement à ébullition et faire bouillir à feu doux environ 30 min.", "Saler (au gros sel) et poursuivre la cuisson à feu doux environ 30 min.", "Égoutter, écraser les pois cassés en purée et ajouter une noisette de beurre."]
  },
  {
    id: "puree-de-pommes-de-terre", nom: "Purée de pommes de terre", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Purée de pommes de terre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPur%C3%A9e_de_pommes_de_terre",
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "lait", quantite: 200, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre et les couper en morceaux.", "Les cuire 35 min à l'eau.", "Égoutter, écraser et ajouter le lait chaud, le beurre et le sel."]
  },
  {
    id: "ragout-de-boulettes-aux-noix", nom: "Ragoût de boulettes aux noix", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "Wikilivres", idSource: "Boulettes de noix en ragoût",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoulettes_de_noix_en_rago%C3%BBt",
    ingredients: [
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "noix", quantite: 50, unite: "g" },
      { id: "farine", quantite: 45, unite: "g" },
      { id: "lait-de-soja", quantite: 25, unite: "ml" },
      { id: "fecule", quantite: 8, unite: "g" }
    ],
    etapes: ["Faire revenir le paprika dans 10 ml d'huile d'olive, puis y faire blondir l'oignon haché.", "Ajouter le poivron émincé et les pommes de terre en dés, et couvrir d'eau (ou de bouillon de légumes). Saler, poivrer, porter à ébullition puis laisser mijoter 30 min à feu doux.", "Dans un saladier, mélanger les noix grossièrement écrasées, la farine, le reste d'huile (de l'huile de noix si vous en avez) et le lait de soja non sucré. Pétrir pour obtenir une pâte homogène.", "Former de petites boulettes (2,5 cm) et les plonger dans le bouillon. Laisser cuire 30 min de plus à tout petit feu (le plat est encore meilleur réchauffé le lendemain).", "Au moment de servir, ajouter la fécule délayée dans un peu d'eau pour lier la sauce."]
  },
  {
    id: "riz-aux-noix-de-cajou-pomme-et-celeri", nom: "Riz aux noix de cajou, pomme et céleri", cuisine: "française",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Riz aux noix de Cajou",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRiz_aux_noix_de_Cajou",
    ingredients: [
      { id: "riz", quantite: 110, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "pomme", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "eau", quantite: 45, unite: "ml" },
      { id: "noix-de-cajou", quantite: 65, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire le riz à l'eau (il en faut environ 330 g une fois cuit).", "Couper l'oignon, la pomme (rouge de préférence) et le céleri en petits morceaux. Les faire revenir dans la poêle huilée.", "Ajouter 3 cuillères à soupe d'eau et laisser mijoter 10 min.", "Ajouter le riz et les noix de cajou, saler, poivrer et bien mélanger."]
  },
  {
    id: "salade-de-pommes-et-pois-chiches", nom: "Salade de pommes et pois chiches", cuisine: "française",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Salade de pommes et pois chiches",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSalade_de_pommes_et_pois_chiches",
    ingredients: [
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte", ou: { id: "pois-chiches-secs", quantite: 50, unite: "g" } },
      { id: "pomme", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "ciboulette", quantite: 3, unite: "g" },
      { id: "basilic", quantite: 3, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans un saladier, mettre les pois chiches cuits et égouttés (ou 50 g de pois chiches secs cuits à l'eau), les pommes en dés, les oignons émincés et le céleri haché.", "Mélanger 15 ml de jus de citron, l'huile d'olive, la ciboulette et le basilic hachés, le sel et le poivre.", "Verser cette sauce sur la salade, mélanger et laisser reposer au réfrigérateur au moins 30 min."]
  },
  {
    id: "sandwich-a-l-avocat-et-a-la-sauce-soja", nom: "Sandwich à l'avocat et à la sauce soja", cuisine: "française",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Sandwich végétalien",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSandwich_v%C3%A9g%C3%A9talien",
    ingredients: [
      { id: "avocat", quantite: 2, unite: "pièce" },
      { id: "sauce-soja", quantite: 10, unite: "ml" },
      { id: "pain", quantite: 4, unite: "tranche" }
    ],
    etapes: ["Retirer la chair des avocats et l'écraser à la fourchette avec la sauce soja.", "L'étaler sur 2 tranches de pain et recouvrir des 2 autres tranches."]
  },
  {
    id: "sandwich-a-l-avocat-et-au-tofu", nom: "Sandwich à l'avocat et au tofu", cuisine: "française",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Sandwich à l’avocat et au tofu",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSandwich_%C3%A0_l%E2%80%99avocat_et_au_tofu",
    ingredients: [
      { id: "pain", quantite: 4, unite: "tranche" },
      { id: "avocat", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 5, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "tofu", quantite: 150, unite: "g" }
    ],
    etapes: ["Faire griller les tranches de pain.", "Couper l'avocat en deux, le peler et couper chaque moitié en quarts. Poser un quart sur chaque tranche de pain et l'écraser à la fourchette avec un peu d'huile d'olive. Saler.", "Poser des rondelles de tomate sur 2 tranches et le tofu (aux fines herbes de préférence) en tranches sur les 2 autres.", "Saler et refermer les sandwichs."]
  },
  {
    id: "socca", nom: "Socca (galette niçoise aux pois chiches)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Socca",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSocca",
    ingredients: [
      { id: "farine-de-pois-chiches", quantite: 125, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "huile-d-olive", quantite: 25, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Verser l'eau froide dans un saladier. Ajouter la farine de pois chiches, 1 cuillère à soupe d'huile d'olive et le sel.", "Battre au fouet jusqu'à obtenir une pâte lisse.", "Préchauffer le four au maximum. Huiler une grande plaque avec le reste de l'huile et y verser 2 à 3 mm de pâte.", "Enfourner, allumer le gril et cuire environ 5 min en perçant les cloques.", "La socca est prête quand la croûte est dorée, voire un peu brûlée par endroits. Servir chaud, poivré."]
  },
  {
    id: "soupe-a-la-tomate-et-aux-pommes-de-terre", nom: "Soupe à la tomate et aux pommes de terre", cuisine: "française",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Soupe à la tomate",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSoupe_%C3%A0_la_tomate",
    ingredients: [
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "eau", quantite: 600, unite: "ml" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre à la vapeur (environ 20 min).", "Couper les tomates en dés et les cuire 4 à 5 min dans 600 ml d'eau avec le céleri et l'ail.", "Mixer avec les pommes de terre, ajouter le persil haché, saler et poivrer."]
  },
  {
    id: "soupe-au-potiron", nom: "Soupe au potiron", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Soupe au potiron",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSoupe_au_potiron",
    ingredients: [
      { id: "huile-d-arachide", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "potiron", quantite: 600, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer l'huile et y faire revenir l'oignon haché.", "Ajouter le potiron coupé en dés, 500 ml d'eau avec le bouillon cube, l'ail écrasé, le sel et le poivre.", "Cuire 30 min à l'autocuiseur (ou environ 40 min à la casserole), puis mixer si vous aimez une soupe lisse."]
  },
  {
    id: "soupe-aux-courgettes-et-aux-tomates", nom: "Soupe aux courgettes et aux tomates", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Soupe aux courgettes et aux tomates",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSoupe_aux_courgettes_et_aux_tomates",
    ingredients: [
      { id: "huile-d-arachide", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 3, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon haché dans l'huile.", "Ajouter la courgette et les tomates en dés, 500 ml d'eau avec le bouillon cube, l'ail écrasé et le thym. Saler et poivrer généreusement.", "Porter à ébullition (à l'autocuiseur ou à la casserole), puis cuire à feu doux 30 min."]
  },
  {
    id: "soupe-de-potiron", nom: "Soupe de potiron", cuisine: "française",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Soupe de potiron",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSoupe_de_potiron",
    ingredients: [
      { id: "potiron", quantite: 400, unite: "g" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "creme-fraiche", quantite: 20, unite: "ml", optionnel: true }
    ],
    etapes: ["Retirer la peau et les filaments du potiron, couper la chair en petits cubes.", "Éplucher et couper les pommes de terre.", "Cuire le potiron et les pommes de terre dans une cocotte avec l'eau, salée et poivrée, environ 25 min.", "Mixer le tout.", "Servir avec un peu de crème fraîche si vous le souhaitez."]
  },
  {
    id: "soupe-de-tomates-aux-poireaux-et-au-basilic", nom: "Soupe de tomates aux poireaux et au basilic", cuisine: "française",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Soupe méditerranéenne de tomates",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSoupe_m%C3%A9diterran%C3%A9enne_de_tomates",
    ingredients: [
      { id: "tomate", quantite: 4, unite: "pièce" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "bouquet-garni", quantite: 1, unite: "pièce" },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Peler, épépiner et couper les tomates en morceaux. Émincer finement le blanc du poireau.", "Dans une cocotte à fond épais, mettre le poireau, les tomates, le bouquet garni et l'ail. Saler, poivrer et chauffer à feu moyen jusqu'à ébullition.", "Ajouter 500 ml d'eau et laisser cuire 45 min à feu moyen.", "Retirer le bouquet garni, ajouter la plupart du basilic et l'huile d'olive, puis mixer.", "Laisser reposer au réfrigérateur au moins 12 h.", "Réchauffer et servir avec le reste du basilic ciselé (et des croûtons grillés frottés à l'ail si vous en avez)."]
  },
  {
    id: "taboule-aux-oranges-et-aux-pruneaux", nom: "Taboulé aux oranges et aux pruneaux", cuisine: "française",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Taboulé exotique aux oranges et aux pruneaux",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTaboul%C3%A9_exotique_aux_oranges_et_aux_pruneaux",
    ingredients: [
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "basilic", quantite: 5, unite: "g" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "semoule", quantite: 100, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "pruneaux", quantite: 25, unite: "g" },
      { id: "menthe", quantite: 15, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" }
    ],
    etapes: ["Porter à ébullition 300 ml d'eau avec le bouillon cube et le basilic, retirer du feu et y laisser infuser le zeste haché d'un quart d'orange.", "Couper en dés le poivron, la tomate, l'oignon et une moitié d'orange pelée.", "Dans un saladier, verser le bouillon tiède sur la semoule, ajouter la moitié de la menthe hachée, les pruneaux dénoyautés en morceaux et les légumes. La semoule doit rester ferme sans être croquante.", "Mettre au réfrigérateur au moins 30 min.", "Au moment de servir, ajouter l'huile d'olive, le reste de menthe et le jus de la demi-orange restante. Goûter et rectifier l'assaisonnement."]
  },
  {
    id: "taboule-de-quinoa-aux-legumes", nom: "Taboulé de quinoa aux légumes", cuisine: "française",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Taboulé au quinoa2",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTaboul%C3%A9_au_quinoa2",
    ingredients: [
      { id: "quinoa", quantite: 100, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "vinaigre", quantite: 10, unite: "ml" },
      { id: "ciboulette", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire le quinoa 10 min dans 2 fois son volume d'eau, puis le laisser refroidir.", "Couper la carotte et le poivron en allumettes et les plonger 3 min dans l'eau bouillante. Égoutter le maïs (la recette d'origine utilise 1 épi de maïs frais, égrené).", "Préparer une vinaigrette avec l'huile d'olive, le vinaigre et le sel. Y râper finement l'oignon.", "Mélanger délicatement le quinoa, les légumes et la vinaigrette, puis parsemer de ciboulette hachée."]
  },
  {
    id: "tartare-de-loup-et-saumon", nom: "Tartare de loup (bar) et de saumon fumé", cuisine: "française",
    difficulte: "facile", tempsMinutes: 140, portions: 2,
    source: "Wikilivres", idSource: "Tartare de loup et saumon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTartare_de_loup_et_saumon",
    ingredients: [
      { id: "bar", quantite: 250, unite: "g" },
      { id: "saumon-fume", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "vinaigre", quantite: 5, unite: "ml" },
      { id: "moutarde", quantite: 3, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "echalote", quantite: 2, unite: "pièce" },
      { id: "capres", quantite: 8, unite: "g" }
    ],
    etapes: ["Couper le filet de loup (bar) et le saumon fumé en petits dés, les mélanger dans un saladier et garder au réfrigérateur.", "Dans un bol, mélanger le jaune d'œuf, l'huile, le vinaigre, la moutarde et le jus du citron. Saler et poivrer.", "Ajouter les échalotes et les câpres hachées, bien mélanger et laisser reposer au moins 2 h au réfrigérateur, en goûtant de temps en temps.", "Au moment de servir, mélanger cette sauce au poisson et servir très frais."]
  },
  {
    id: "tarte-a-la-tomate-et-a-la-moutarde", nom: "Tarte à la tomate et à la moutarde", cuisine: "française",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Tarte à la tomate",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_%C3%A0_la_tomate",
    ingredients: [
      { id: "pate-brisee", quantite: 1, unite: "pièce", ou: { id: "pate-feuilletee", quantite: 1, unite: "pièce" } },
      { id: "moutarde", quantite: 60, unite: "g" },
      { id: "fromage-rape", quantite: 100, unite: "g" },
      { id: "tomate", quantite: 4, unite: "pièce" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Mettre la pâte brisée (ou feuilletée) dans un moule à tarte.", "Étaler une couche généreuse de moutarde (4 cuillères à soupe) sur la pâte, puis répartir 100 g de fromage râpé (emmental).", "Couper 4 tomates en fines tranches et les disposer sur le fromage, bien serrées.", "Cuire au four environ 25 min."]
  },
  {
    id: "tarte-au-chevre-et-aux-tomates", nom: "Tarte au chèvre et aux tomates", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Tarte au chèvre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_au_ch%C3%A8vre",
    ingredients: [
      { id: "huile-d-olive", quantite: 5, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "creme-fraiche", quantite: 200, unite: "ml" },
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "fromage-de-chevre", quantite: 90, unite: "g" },
      { id: "comte", quantite: 25, unite: "g" }
    ],
    etapes: ["Émincer l'oignon et le faire revenir 5 min dans une poêle avec un filet d'huile d'olive, puis le laisser refroidir.", "Épépiner les tomates et les couper en petits dés.", "Mélanger les œufs entiers, la crème fraîche, les tomates et l'oignon.", "Étaler la pâte brisée dans un petit moule (environ 20 cm) et y verser la préparation.", "Couper le chèvre (une demi-bûche) en rondelles, les poser sur la préparation et parsemer de comté râpé.", "Cuire 15 à 20 min au four à 180 °C."]
  },
  {
    id: "tarte-au-persil-et-aux-lardons", nom: "Tarte au persil et aux lardons", cuisine: "française",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Tarte au persil",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_au_persil",
    ingredients: [
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "fromage-rape", quantite: 70, unite: "g" },
      { id: "creme-liquide", quantite: 50, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lardons", quantite: 70, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 210 °C. Étaler la pâte brisée dans un petit moule à tarte.", "Dans un saladier, fouetter les œufs et la crème, puis ajouter le gruyère râpé, les lardons, l'ail haché et le persil haché. Poivrer.", "Verser sur la pâte et cuire 35 min.", "Servir tiède, avec des cornichons, des petits oignons au vinaigre et un peu de salade."]
  },
  {
    id: "tarte-au-saumon-et-aux-epinards", nom: "Tarte au saumon et aux épinards", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Tarte au saumon et aux épinards",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_au_saumon_et_aux_%C3%A9pinards",
    ingredients: [
      { id: "epinards", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "coriandre-moulue", quantite: 2, unite: "g" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "beurre", quantite: 5, unite: "g" },
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "saumon", quantite: 150, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 220 °C.", "Plonger les feuilles d'épinards dans une casserole d'eau bouillante, les égoutter puis les couper grossièrement au couteau.", "Dans un saladier, mélanger les œufs, la coriandre en poudre et la crème fraîche. Saler et poivrer.", "Beurrer un petit moule à tarte (ou le garnir de papier cuisson) et y dérouler la pâte feuilletée.", "Répartir sur la pâte le saumon frais coupé en fines lamelles et les épinards bien égouttés, puis verser la préparation à la crème.", "Cuire environ 25 min au four et servir chaud."]
  },
  {
    id: "tarte-aux-brocolis-et-au-jambon", nom: "Tarte aux brocolis et au jambon", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Tarte aux brocolis et au jambon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_aux_brocolis_et_au_jambon",
    ingredients: [
      { id: "brocoli", quantite: 1, unite: "pièce" },
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "fromage-rape", quantite: 50, unite: "g" },
      { id: "creme-fraiche", quantite: 50, unite: "ml", optionnel: true },
      { id: "jambon", quantite: 2, unite: "tranche" }
    ],
    etapes: ["Cuire le brocoli en petits bouquets à l'étouffée 15 à 20 min.", "Étaler la pâte brisée dans un petit moule huilé (ou sur du papier cuisson) et la piquer à la fourchette.", "Battre les œufs en omelette avec le fromage râpé (et la crème fraîche si vous en mettez). Couper le jambon en dés.", "Verser les œufs sur la pâte, puis ajouter le jambon et les brocolis.", "Préchauffer le four au maximum 10 min, enfourner, puis baisser la température et cuire 20 à 30 min, jusqu'à ce que les œufs soient pris et le dessus doré."]
  },
  {
    id: "tarte-aux-courgettes-et-aux-carottes", nom: "Tarte aux courgettes et aux carottes", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Tarte aux courgettes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_aux_courgettes",
    ingredients: [
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "comte", quantite: 30, unite: "g" }
    ],
    etapes: ["Éplucher la carotte, la courgette et l'oignon, puis les couper en morceaux.", "Cuire la carotte à la vapeur. Cuire la courgette et l'oignon à feu doux avec un peu d'huile, dans une casserole couverte. Laisser refroidir les légumes cuits.", "Préchauffer le four à 200 °C.", "Battre les œufs avec la crème fraîche dans un saladier, ajouter les légumes et mélanger.", "Étaler la pâte brisée dans un petit moule (environ 20 cm), verser la préparation et couvrir de comté râpé.", "Cuire environ 25 min au four."]
  },
  {
    id: "tarte-aux-tomates-et-au-gouda", nom: "Tarte aux tomates et au gouda", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Tarte aux tomates et au gouda",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_aux_tomates_et_au_gouda",
    ingredients: [
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "tomate", quantite: 4, unite: "pièce" },
      { id: "basilic", quantite: 3, unite: "g" },
      { id: "concentre-de-tomates", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "sauce-piquante", quantite: 1, unite: "ml" },
      { id: "sucre", quantite: 1, unite: "g" },
      { id: "lardons", quantite: 70, unite: "g" },
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "gouda", quantite: 70, unite: "g" },
      { id: "gruyere", quantite: 15, unite: "g" }
    ],
    etapes: ["Chauffer l'huile d'olive dans une sauteuse et y faire revenir l'ail haché. Ajouter 3 tomates coupées en morceaux, les deux tiers du basilic, le concentré de tomate, du sel, du poivre, quelques gouttes de Tabasco et une pincée de sucre.", "Laisser cuire ce coulis 10 min à feu doux. Pendant ce temps, faire revenir les lardons à sec.", "Préchauffer le four à 210 °C. Étaler la pâte brisée dans un petit moule à tarte et la couvrir de tranches fines de gouda.", "Ajouter les lardons, le coulis, puis la dernière tomate coupée en tranches épaisses. Saupoudrer de gruyère râpé.", "Cuire 30 min. Servir chaud ou tiède, parsemé du reste de basilic, avec un peu de salade."]
  },
  {
    id: "tarte-feuilletee-aux-champignons", nom: "Tarte feuilletée aux champignons", cuisine: "française",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Tarte aux champignons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_aux_champignons",
    ingredients: [
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "champignons", quantite: 300, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 125, unite: "ml" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Émincer les champignons et les cuire au beurre. Saler et poivrer.", "Étaler la pâte feuilletée dans un petit moule et y répartir les champignons.", "Battre l'œuf avec le lait, saler, poivrer et verser sur les champignons.", "Cuire 30 min au four à 250 °C."]
  },
  {
    id: "tarte-provencale", nom: "Tarte provençale (aubergine, poivrons et tomates)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Tarte provençale",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_proven%C3%A7ale",
    ingredients: [
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "tomate", quantite: 4, unite: "pièce" },
      { id: "olives-noires", quantite: 30, unite: "g" },
      { id: "herbes-de-provence", quantite: 3, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Couper l'aubergine et les tomates en fines rondelles, et les poivrons en lamelles.", "Faire revenir l'aubergine et les poivrons 5 min dans un peu d'huile d'olive.", "Mettre la pâte dans un moule à tarte et la piquer. Répartir les légumes en rosace ou en couches, au choix.", "Saler, poivrer et parsemer généreusement d'herbes de Provence. Disposer les olives sur le dessus et arroser d'un filet d'huile d'olive.", "Enfourner environ 40 min."]
  },
  {
    id: "terrine-de-poivrons-au-chevre", nom: "Terrine de poivrons au chèvre", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 190, portions: 2,
    source: "Wikilivres", idSource: "Terrine de poivrons au chèvre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTerrine_de_poivrons_au_ch%C3%A8vre",
    ingredients: [
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ciboulette", quantite: 5, unite: "g" },
      { id: "fecule", quantite: 5, unite: "g" },
      { id: "fromage-de-chevre", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 50, unite: "ml" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "parmesan", quantite: 10, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Épépiner le poivron et le couper en dés. Peler et émincer l'oignon. Les faire suer 10 min dans les deux tiers de l'huile. Saler, poivrer.", "Mélanger le chèvre frais avec le lait, l'œuf, la fécule de maïs et une pincée de sel.", "Huiler une petite terrine et y alterner des couches de préparation au chèvre et des couches de légumes.", "Cuire 50 min au four.", "Laisser refroidir puis mettre 2 h au réfrigérateur.", "Démouler, parsemer de copeaux de parmesan si vous le souhaitez et décorer de ciboulette. Servir avec un coulis de tomates frais."]
  },
  {
    id: "tian-de-courgettes-au-riz", nom: "Tian de courgettes au riz", cuisine: "française",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "Wikilivres", idSource: "Tian de courgettes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTian_de_courgettes",
    ingredients: [
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "chapelure", quantite: 40, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper la courgette, la cuire à l'eau salée et l'égoutter. Préchauffer le four à 180 °C.", "Cuire le riz en pilaf.", "Faire sauter les oignons et l'ail hachés dans un peu d'huile. Ajouter la courgette, saler, poivrer et cuire 5 min.", "Battre les œufs en omelette avec le persil haché. Ajouter la courgette et le riz, et mélanger.", "Verser dans un plat, saupoudrer de chapelure et arroser du reste d'huile d'olive.", "Cuire 30 min au four à 180 °C."]
  },
  {
    id: "tian-provencal", nom: "Tian provençal", cuisine: "française",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Tian provençal",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTian_proven%C3%A7al",
    ingredients: [
      { id: "courgette", quantite: 1, unite: "pièce" },
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "brousse", quantite: 35, unite: "g", ou: { id: "fromage-blanc", quantite: 35, unite: "g" } },
      { id: "gruyere", quantite: 35, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "herbes-de-provence", quantite: 1, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Peler et émincer l'oignon et le faire fondre à petit feu dans l'huile d'olive.", "Laver la courgette et l'aubergine (les peler si vous voulez) et les couper en dés. Les ajouter dans la poêle, augmenter le feu et faire revenir.", "Battre l'œuf avec la brousse, saler, poivrer, ajouter quelques herbes de Provence et l'ail écrasé.", "Mettre les légumes revenus dans un plat à gratin avec la tomate coupée en dés.", "Verser la préparation à l'œuf par-dessus et râper le gruyère (ou l'emmental) sur le dessus.", "Cuire environ 20 min au four à 180 °C, puis quelques minutes sous le gril pour dorer le fromage."]
  },
  {
    id: "tomates-a-la-provencale", nom: "Tomates à la provençale", cuisine: "française",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Tomate à la provençale",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTomate_%C3%A0_la_proven%C3%A7ale",
    ingredients: [
      { id: "tomate", quantite: 4, unite: "pièce" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "persil", quantite: 3, unite: "g" },
      { id: "chapelure", quantite: 15, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200-220 °C. Laver 4 tomates, retirer le pédoncule et les couper en deux dans la largeur.", "Les faire dorer à feu doux dans une poêle avec un peu d'huile d'olive, 5 à 10 min, des deux côtés.", "Les disposer dans un plat. Hacher ensemble 4 gousses d'ail, le persil et la chapelure, répartir ce hachis sur les demi-tomates, saler, poivrer et arroser d'un filet d'huile d'olive.", "Enfourner 20 à 30 min : les tomates doivent être fondantes à cœur."]
  },
  {
    id: "veloute-de-champignons-aux-lardons", nom: "Velouté de champignons aux lardons", cuisine: "française",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Velouté de champignons aux lardons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FVelout%C3%A9_de_champignons_aux_lardons",
    ingredients: [
      { id: "champignons", quantite: 100, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "lardons", quantite: 50, unite: "g" },
      { id: "pomme-de-terre", quantite: 200, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 600, unite: "ml" },
      { id: "persil", quantite: 2, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" }
    ],
    etapes: ["Nettoyer et éplucher les champignons.", "Faire sauter les lardons (fumés) et quelques champignons dans un peu d'huile d'olive. Réserver.", "Couper en dés les pommes de terre, l'oignon et l'ail, et les faire revenir dans une cocotte avec le reste d'huile. Ajouter le reste des champignons.", "Verser 600 ml de bouillon chaud (eau et bouillon cube) et cuire 20 min. Ajouter le persil, mixer, saler et poivrer.", "Servir dans les assiettes avec les lardons et champignons réservés et un peu de crème fraîche."]
  },
  {
    id: "welsh-facon-nord", nom: "Welsh (cheddar fondu à la bière, façon Nord)", cuisine: "française",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Welsh",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FWelsh",
    ingredients: [
      { id: "cheddar", quantite: 200, unite: "g" },
      { id: "biere", quantite: 150, unite: "ml" },
      { id: "moutarde", quantite: 30, unite: "g" },
      { id: "pain", quantite: 2, unite: "tranche" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "oeuf", quantite: 2, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Dans une casserole ou un caquelon, faire fondre 200 g de cheddar avec 2 cuillères à soupe de bière (ambrée ou brune) et 2 cuillères à soupe de moutarde, jusqu'à obtenir une crème bien lisse. Saler et poivrer.", "Imbiber 2 tranches de pain (de campagne ou de mie) avec le reste de la bière (environ 125 ml) et les mettre dans 2 ramequins individuels.", "Poser une tranche de jambon sur chaque pain, puis napper généreusement de crème de cheddar.", "Enfourner 10 min. Pour les plus gourmands, ajouter un œuf sur le dessus."]
  }
]);
