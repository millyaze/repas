// ============================================================
// RECETTES : cuisine française, reprises de Wikilivres (172 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "aiga-bolhida", nom: "Aïga bolhida (soupe à l'ail et à la sauge)", cuisine: "française", type: "soupe",
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
    id: "anchois-aux-pommes-reinettes", nom: "Anchois aux pommes reinettes", cuisine: "française", type: "entree",
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
    id: "aubergines-farcies-a-la-tomate", nom: "Aubergines farcies à la tomate", cuisine: "française", type: "plat",
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
    id: "bechamel", nom: "Béchamel (sauce blanche au lait)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Béchamel",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FB%C3%A9chamel",
    ingredients: [
      { id: "beurre", quantite: 18, unite: "g" },
      { id: "farine", quantite: 18, unite: "g" },
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "piment-de-cayenne", quantite: 1, unite: "g", optionnel: true },
      { id: "oignon", quantite: 1, unite: "pièce", optionnel: true },
      { id: "clous-de-girofle", quantite: 1, unite: "pièce", optionnel: true },
      { id: "laurier", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Faites fondre le beurre dans une casserole et ajoutez la farine en la délayant : c'est le roux. Laissez cuire 3 minutes au plus, à feu vif ; il doit rester clair.", "Hors du feu, délayez le roux avec environ 25 ml de lait, en remuant avec une cuillère en bois.", "Versez le reste du lait en remuant, puis ajoutez le sel, une pointe de piment de Cayenne, la muscade râpée, le laurier et, si vous voulez, un morceau d'oignon piqué d'un clou de girofle.", "Laissez mijoter à feu très doux en remuant constamment jusqu'à ce que la sauce épaississe (la consistance d'une crème pâtissière).", "Retirez l'oignon et le laurier, et passez la sauce si besoin : elle doit être lisse, homogène et onctueuse."]
  },
  {
    id: "beignets-aux-pommes", nom: "Beignets aux pommes", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Beignet aux pommes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBeignet_aux_pommes",
    ingredients: [
      { id: "farine", quantite: 60, unite: "g" },
      { id: "huile-de-tournesol", quantite: 200, unite: "ml" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "pomme", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 25, unite: "g" }
    ],
    etapes: ["Délayer la levure dans l'eau. Mélanger la farine avec 15 ml d'huile et l'eau à la levure pour obtenir une pâte liquide. Couvrir et laisser reposer 1 heure.", "Éplucher les pommes, retirer le cœur et les couper en tranches épaisses. Les saupoudrer de la moitié du sucre (et de cannelle) et laisser macérer.", "Monter le blanc d'œuf en neige (garder le jaune pour une autre recette) et l'incorporer délicatement à la pâte.", "Chauffer le reste d'huile dans une casserole. Tremper les tranches de pomme dans la pâte et les plonger dans l'huile chaude, sans surcharger.", "Les retourner pour qu'elles soient dorées, égoutter sur du papier absorbant et saupoudrer du reste de sucre. Servir tiède."]
  },
  {
    id: "beignets-de-fleurs-de-courgettes", nom: "Beignets de fleurs de courgettes", cuisine: "française", type: "entree",
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
    id: "beignets-de-pommes-de-terre-ciboulette", nom: "Beignets de pommes de terre à la ciboulette", cuisine: "française", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Beignets de pommes de terre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBeignets_de_pommes_de_terre",
    ingredients: [
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "farine", quantite: 8, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "ciboulette", quantite: 5, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse", optionnel: true },
      { id: "huile-de-tournesol", quantite: 60, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher et râper finement les pommes de terre, puis les égoutter en les pressant bien.", "Les lier avec la farine et l'œuf battu, ajouter la ciboulette ciselée (et un peu d'ail haché si on veut), saler et poivrer.", "Faire frire des petits tas de pâte dans l'huile chaude, des deux côtés, jusqu'à ce qu'ils soient dorés.", "Servir avec une salade verte."]
  },
  {
    id: "beurre-blanc", nom: "Beurre blanc (sauce à l'échalote et au vin blanc)", cuisine: "française", type: "sauce",
    difficulte: "moyen", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Beurre blanc",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBeurre_blanc",
    ingredients: [
      { id: "echalote", quantite: 1, unite: "pièce" },
      { id: "vin-blanc", quantite: 40, unite: "ml" },
      { id: "beurre", quantite: 80, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "vinaigre", quantite: 5, unite: "ml", optionnel: true }
    ],
    etapes: ["Couper le beurre (de préférence demi-sel) en petits morceaux et le garder bien froid.", "Éplucher et hacher finement l'échalote.", "La mettre dans une casserole avec le vin (et le vinaigre si on veut), porter à ébullition et laisser réduire de moitié.", "Baisser le feu au minimum et ajouter le beurre en fouettant sans arrêt.", "Poivrer et servir tout de suite, par exemple avec du poisson."]
  },
  {
    id: "beurre-d-escargot", nom: "Beurre d'escargot (beurre à l'ail et au persil)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Beurre d'escargot",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBeurre_d'escargot",
    ingredients: [
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "echalote", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Travailler le beurre ramolli à la fourchette pour le rendre souple.", "Éplucher l'ail et l'échalote, puis les hacher finement avec le persil.", "Mélanger le tout avec le beurre, saler et poivrer.", "Garder au frais en petit rouleau ou en pot."]
  },
  {
    id: "beurre-monte", nom: "Beurre monté (sauce émulsionnée au beurre)", cuisine: "française", type: "sauce",
    difficulte: "moyen", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Beurre monté",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBeurre_mont%C3%A9",
    ingredients: [
      { id: "beurre", quantite: 100, unite: "g" },
      { id: "eau", quantite: 30, unite: "ml" }
    ],
    etapes: ["Pour environ 120 g de sauce (la page d'origine ne donne pas de quantité, la dose de beurre se règle selon l'usage). Faire bouillir 30 ml d'eau dans une petite casserole.", "Dès qu'elle bout, baisser le feu et incorporer le beurre froid en petits morceaux au fouet, un ou deux à la fois. N'en rajouter que lorsque les morceaux ont fondu.", "Quand l'émulsion commence à se former, on peut ajouter davantage de beurre à la fois.", "Continuer à fouetter en ajoutant du beurre jusqu'à obtenir la quantité voulue."]
  },
  {
    id: "biscuits-a-la-noix-de-coco", nom: "Biscuits à la noix de coco (petites boules)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Biscuits à la noix de coco",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBiscuits_%C3%A0_la_noix_de_coco",
    ingredients: [
      { id: "farine", quantite: 90, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "beurre", quantite: 22, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "noix-de-coco-rapee", quantite: 190, unite: "g" },
      { id: "sucre", quantite: 38, unite: "g" },
      { id: "lait", quantite: 8, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Mélanger la farine et la levure, faire un puits.", "Y ajouter le beurre fondu, la moitié de la noix de coco et le sucre, et malaxer du bout des doigts.", "Ajouter la moitié de l'œuf battu (garder le reste pour une autre utilisation), puis le lait, et pétrir en une pâte.", "Former environ 10 petites boules, les rouler dans le reste de noix de coco et les poser sur une plaque beurrée.", "Cuire environ 15 minutes."]
  },
  {
    id: "blancs-de-poulet-farcis-aux-herbes", nom: "Blancs de poulet farcis aux herbes", cuisine: "française", type: "plat",
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
    id: "boulettes-de-lentilles-corail", nom: "Boulettes de lentilles corail", cuisine: "française", type: "plat",
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
    id: "bretzels", nom: "Bretzels (pains alsaciens)", cuisine: "française", type: "accompagnement",
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
    id: "buche-de-noel-au-chocolat", nom: "Bûche de Noël au chocolat (petite bûche)", cuisine: "française", type: "dessert",
    difficulte: "difficile", tempsMinutes: 65, portions: 2,
    source: "Wikilivres", idSource: "Bûche de Noël",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FB%C3%BBche_de_No%C3%ABl",
    ingredients: [
      { id: "farine", quantite: 50, unite: "g" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 4, unite: "pièce" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "chocolat-noir", quantite: 175, unite: "g" },
      { id: "beurre", quantite: 40, unite: "g" }
    ],
    etapes: ["Biscuit : préchauffer le four à 210 °C. Séparer 2 œufs, fouetter les jaunes avec le sucre, la cannelle et le sel jusqu'à ce que le mélange blanchisse, puis ajouter la farine.", "Monter les 2 blancs en neige et les incorporer délicatement. Étaler sur une plaque tapissée de papier sulfurisé et cuire 10 à 12 minutes.", "Poser un torchon humide essoré sur le biscuit, retirer le papier et rouler le tout ensemble. Laisser refroidir.", "Mousse : faire fondre le chocolat au bain-marie, puis hors du feu ajouter 2 jaunes et le beurre en morceaux. Incorporer 2 blancs battus en neige ferme. Mettre 2 heures au frais.", "Dérouler le biscuit, étaler la mousse en en gardant un quart, puis rouler. Envelopper de film et laisser prendre 2 heures au frais.", "Poser la bûche sur un plat, étaler la mousse restante dessus en dessinant des traits de branche, et remettre 6 heures au frais. (Petite bûche d'environ 20 cm.)"]
  },
  {
    id: "buche-de-noel-facile", nom: "Bûche de Noël facile (biscuit roulé au chocolat)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Bûche de Noël facile",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FB%C3%BBche_de_No%C3%ABl_facile",
    ingredients: [
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 70, unite: "g" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "chocolat-noir", quantite: 125, unite: "g" },
      { id: "beurre", quantite: 100, unite: "g" },
      { id: "eau", quantite: 20, unite: "ml" }
    ],
    etapes: ["Pour une petite bûche d'environ 15 cm. Préchauffer le four à 180 °C et séparer les blancs des jaunes.", "Fouetter les jaunes avec le sucre et l'eau tiède jusqu'à ce que le mélange blanchisse.", "Ajouter la farine et la levure en les saupoudrant petit à petit, et bien mélanger.", "Monter les blancs en neige et les incorporer délicatement.", "Étaler la pâte sur une plaque couverte de papier sulfurisé (ou beurrée) et cuire 10 à 12 minutes.", "Poser un torchon humide sur le biscuit, retourner et retirer la plaque. Enrouler le biscuit avec le torchon et laisser refroidir.", "Faire fondre le chocolat au bain-marie, puis ajouter le beurre en petits morceaux en remuant jusqu'à obtenir un mélange homogène.", "Dérouler le biscuit, l'étaler avec la moitié du chocolat et le réenrouler. Le poser sur un plat de service.", "Napper du reste de chocolat et ajouter les décorations tant qu'il est mou. Laisser durcir un peu, puis tracer des stries à la fourchette pour évoquer une branche d'arbre, et saupoudrer de sucre glace.", "Conserver au frais."]
  },
  {
    id: "cade-toulonnaise", nom: "Cade toulonnaise (galette de farine de pois chiches)", cuisine: "française", type: "entree",
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
    id: "cake-a-la-banane-vegetal", nom: "Cake à la banane (sans œuf ni lait)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Cake nature",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCake_nature",
    ingredients: [
      { id: "farine", quantite: 120, unite: "g" },
      { id: "levure-chimique", quantite: 4, unite: "g" },
      { id: "margarine", quantite: 120, unite: "g", ou: { id: "huile-d-arachide", quantite: 130, unite: "ml" } },
      { id: "sucre-roux", quantite: 120, unite: "g" },
      { id: "fecule", quantite: 5, unite: "g" },
      { id: "eau", quantite: 15, unite: "ml" },
      { id: "banane", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Préchauffer le four à 180 °C et huiler puis fariner un petit moule à cake.", "Mélanger la margarine fondue (ou l'huile) avec le sucre.", "Ajouter la banane écrasée en purée, puis la farine et la levure petit à petit.", "Délayer la fécule dans l'eau et l'ajouter à la pâte (un peu d'eau en plus si elle est trop sèche).", "Verser dans le moule et cuire 35 à 40 minutes. On peut ajouter des raisins secs, des pépites de chocolat ou des dés de pomme."]
  },
  {
    id: "cake-au-yaourt-rhum", nom: "Cake au yaourt et au rhum", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Cake au yaourt",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCake_au_yaourt",
    ingredients: [
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "yaourt-nature", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 120, unite: "ml" },
      { id: "farine", quantite: 135, unite: "g" },
      { id: "levure-chimique", quantite: 8, unite: "g" },
      { id: "extrait-de-vanille", quantite: 5, unite: "ml" },
      { id: "rhum", quantite: 10, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 180 °C et beurrer un petit moule à cake.", "Battre les œufs avec le sucre et la vanille.", "Ajouter le yaourt et l'huile (le même volume que le yaourt), puis battre à nouveau.", "Incorporer petit à petit la farine et la levure, puis le rhum.", "Verser dans le moule et cuire environ 40 minutes."]
  },
  {
    id: "cake-aux-olives-et-au-tofu", nom: "Cake salé aux olives et au tofu", cuisine: "française", type: "entree",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "cake aux olives",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2Fcake_aux_olives",
    ingredients: [
      { id: "farine", quantite: 90, unite: "g" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "fecule", quantite: 15, unite: "g" },
      { id: "bicarbonate", quantite: 3, unite: "g" },
      { id: "tofu", quantite: 75, unite: "g" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "lait-de-soja", quantite: 50, unite: "ml" },
      { id: "olives-vertes", quantite: 50, unite: "g" },
      { id: "olives-noires", quantite: 50, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Huiler et fariner un petit moule à cake.", "Mélanger la farine, la levure, la fécule, le bicarbonate, le sel et le poivre.", "Ajouter l'huile d'olive, le lait de soja, le tofu émietté et les olives dénoyautées.", "Verser dans le moule et cuire environ 40 minutes : la lame d'un couteau doit ressortir sèche.", "Laisser tiédir avant de démouler."]
  },
  {
    id: "caramel", nom: "Caramel (sirop de sucre caramélisé)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Caramel",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCaramel",
    ingredients: [
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "eau", quantite: 45, unite: "ml" }
    ],
    etapes: ["Pour environ 4 cuillerées de caramel. Mélanger l'eau et le sucre dans une casserole à fond épais.", "Chauffer en remuant la casserole de temps en temps. Le sucre doit être bien imbibé d'eau pour cuire de façon régulière.", "Dès que l'eau bout, le sirop s'éclaircit puis se colore. Choisir la couleur selon l'usage : blond clair pour décorer, brun foncé pour parfumer des préparations.", "Stopper la cuisson en plongeant le fond de la casserole dans un bain d'eau froide."]
  },
  {
    id: "caramel-au-beurre-sale", nom: "Caramel au beurre salé", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Caramel au beurre salé",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCaramel_au_beurre_sal%C3%A9",
    ingredients: [
      { id: "sucre", quantite: 80, unite: "g" },
      { id: "beurre", quantite: 35, unite: "g" },
      { id: "creme-liquide", quantite: 70, unite: "ml" },
      { id: "eau", quantite: 25, unite: "ml" }
    ],
    etapes: ["Pour un petit pot. Utiliser du beurre salé, ou du beurre doux avec une pincée de sel.", "Porter à ébullition le sucre, le beurre et l'eau dans une casserole, en remuant bien, jusqu'à obtenir une couleur de caramel.", "Ajouter alors la crème liquide (attention aux projections).", "Continuer à remuer et cuire encore quelques minutes selon la consistance voulue."]
  },
  {
    id: "caramels-durs-a-la-creme", nom: "Caramels durs à la crème (confiseries maison)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Caramel dur à la crème",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCaramel_dur_%C3%A0_la_cr%C3%A8me",
    ingredients: [
      { id: "sucre", quantite: 60, unite: "g" },
      { id: "creme-fraiche", quantite: 60, unite: "ml" }
    ],
    etapes: ["Pour une dizaine de caramels. Chauffer le sucre et la crème ensemble dans une petite casserole, sans remuer à la spatule : secouer simplement la casserole. On peut ajouter une pincée de sel ou un peu de vanille en poudre.", "Quand la préparation prend une couleur blond foncé, la verser dans un moule à caramel (ou un petit moule en silicone).", "Laisser refroidir, puis ranger les caramels dans une boîte hermétique."]
  },
  {
    id: "carottes-roties-au-four-thym-et-romarin", nom: "Carottes rôties au four, thym et romarin", cuisine: "française", type: "accompagnement",
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
    id: "chocolat-chaud", nom: "Chocolat chaud", cuisine: "française", type: "boisson",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Chocolat chaud",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FChocolat_chaud",
    ingredients: [
      { id: "chocolat-au-lait", quantite: 100, unite: "g", ou: { id: "chocolat-noir", quantite: 100, unite: "g" } },
      { id: "lait", quantite: 500, unite: "ml" }
    ],
    etapes: ["Faire bouillir le lait, puis retirer du feu.", "Ajouter le chocolat (au lait, noir ou blanc selon les goûts) coupé en petits morceaux et remuer jusqu'à ce qu'il soit entièrement fondu.", "Laisser infuser une ou deux minutes hors du feu.", "Réchauffer doucement en fouettant pour obtenir une belle mousse."]
  },
  {
    id: "chocolat-chaud-a-la-cannelle", nom: "Chocolat chaud à la cannelle", cuisine: "française", type: "boisson",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Chocolat chaud à la cannelle",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FChocolat_chaud_%C3%A0_la_cannelle",
    ingredients: [
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "creme-liquide", quantite: 50, unite: "ml" },
      { id: "sucre-roux", quantite: 50, unite: "g" },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "chocolat-noir", quantite: 75, unite: "g" }
    ],
    etapes: ["Faire fondre le chocolat au bain-marie dans une petite casserole.", "Chauffer le lait avec le sucre roux et la crème, ajouter le bâton de cannelle et laisser infuser 20 minutes.", "Retirer la cannelle, ramener à ébullition puis verser sur le chocolat fondu en remuant bien.", "Remettre sur feu doux 10 minutes et servir chaud, avec un peu de chocolat râpé si on veut."]
  },
  {
    id: "chou-fleur-a-la-creme", nom: "Chou-fleur à la crème", cuisine: "française", type: "accompagnement",
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
    id: "chouquettes", nom: "Chouquettes (petits choux sucrés)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Chouquette",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FChouquette",
    ingredients: [
      { id: "farine", quantite: 75, unite: "g" },
      { id: "eau", quantite: 125, unite: "ml" },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "sucre", quantite: 10, unite: "g" }
    ],
    etapes: ["Pour environ 15 chouquettes. Porter à ébullition l'eau, le sel, le sucre et le beurre dans une casserole.", "Hors du feu, verser la farine d'un seul coup et mélanger vite jusqu'à obtenir une boule de pâte lisse et ferme. Si la pâte est humide, la dessécher quelques minutes sur le feu.", "Incorporer les œufs un par un en remuant bien, en battant le dernier à part pour l'ajouter petit à petit. Arrêter quand la pâte forme une pointe en retombant de la spatule.", "Déposer des petits tas de pâte à la cuillère (ou à la poche) sur une plaque bien beurrée.", "Cuire 15 à 20 minutes à 200 °C, au milieu du four.", "Quand les choux sont gonflés et dorés, entrouvrir le four pour les dessécher."]
  },
  {
    id: "compote-de-pommes-maison", nom: "Compote de pommes maison", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Compote de pommes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCompote_de_pommes",
    ingredients: [
      { id: "pomme", quantite: 4, unite: "pièce" },
      { id: "sucre", quantite: 40, unite: "g" }
    ],
    etapes: ["Éplucher les pommes, les couper en quatre et les mettre dans l'eau froide pour qu'elles ne noircissent pas.", "Les cuire dans une casserole à feu moyen, avec le sucre, environ 30 minutes en remuant de temps en temps, jusqu'à ce qu'elles soient très tendres.", "Mixer jusqu'à obtenir une texture lisse (ou écraser à la fourchette).", "Laisser refroidir puis garder au frais."]
  },
  {
    id: "concasse-de-tomates", nom: "Concassé de tomates (sauce tomate mijotée)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Concassé de tomates",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FConcass%C3%A9_de_tomates",
    ingredients: [
      { id: "tomates-concassees", quantite: 200, unite: "g" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "origan", quantite: 1, unite: "g" },
      { id: "thym", quantite: 1, unite: "g" }
    ],
    etapes: ["Épluchez et coupez l'oignon, puis faites-le revenir dans un peu d'huile d'olive.", "Ajoutez l'ail finement coupé, l'origan et le thym.", "Versez les tomates pelées concassées et le coulis de tomate, mélangez et laissez cuire à feu doux une demi-heure."]
  },
  {
    id: "rochers-congolais-noix-de-coco", nom: "Congolais (rochers à la noix de coco)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Biscuit congolais",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBiscuit_congolais",
    ingredients: [
      { id: "noix-de-coco-rapee", quantite: 60, unite: "g" },
      { id: "sucre", quantite: 75, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Préchauffer le four à 175 °C.", "Mélanger le blanc d'œuf et le sucre dans un récipient et chauffer au bain-marie.", "Quand le mélange est bien chaud, ajouter la noix de coco et parfumer à votre goût.", "Déposer des petits tas sur une plaque beurrée (environ 10 rochers).", "Cuire environ 20 minutes, jusqu'à ce qu'ils soient dorés."]
  },
  {
    id: "coq-au-vin", nom: "Coq au vin", cuisine: "française", type: "plat",
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
    id: "creme-citron-vert-crumble-speculoos", nom: "Crème au citron vert et crumble de spéculoos", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 75, portions: 2,
    source: "Wikilivres", idSource: "Crumble au citron",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCrumble_au_citron",
    ingredients: [
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "creme-liquide", quantite: 85, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "fecule", quantite: 35, unite: "g" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 17, unite: "g" },
      { id: "speculoos", quantite: 33, unite: "g", ou: { id: "biscuits-secs", quantite: 33, unite: "g" } },
      { id: "sucre-roux", quantite: 17, unite: "g" },
      { id: "beurre", quantite: 33, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Chauffer le lait avec la crème sans les faire bouillir. Râper le zeste du citron vert.", "Fouetter les œufs avec le sucre jusqu'à ce que le mélange blanchisse, puis ajouter la fécule et le zeste.", "Verser le lait chaud en filet en remuant, remettre dans la casserole et cuire à feu doux en remuant jusqu'à ce que la crème épaississe.", "Répartir dans 2 ramequins beurrés.", "Mixer les biscuits avec le beurre, le sucre roux et la farine, par à-coups, jusqu'à obtenir un sable. Répartir sur la crème.", "Cuire environ 50 minutes (surveiller le dessus). Laisser refroidir et servir tiède ou froid."]
  },
  {
    id: "creme-chantilly", nom: "Crème Chantilly (maison, à la crème fraîche)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Crème Chantilly",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCr%C3%A8me_Chantilly",
    ingredients: [
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "lait", quantite: 15, unite: "ml" }
    ],
    etapes: ["Dans un saladier, mélangez le lait et la crème fraîche bien froide pour obtenir une crème épaisse.", "Ajoutez le sucre.", "Battez à la main avec un fouet jusqu'à obtenir une mousse ferme."]
  },
  {
    id: "creme-d-amande", nom: "Crème d'amande (garniture pour tartes et galettes)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Crème d'amande",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCr%C3%A8me_d'amande",
    ingredients: [
      { id: "sucre", quantite: 60, unite: "g" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "poudre-d-amandes", quantite: 60, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Pour environ 200 g de crème, de quoi garnir une petite tarte. Sortir le beurre à l'avance pour qu'il soit tempéré.", "Le travailler vigoureusement au fouet avec le sucre dans un saladier.", "Ajouter l'œuf en fouettant énergiquement jusqu'à obtenir un mélange lisse.", "Incorporer la poudre d'amandes en une seule fois et mélanger à la spatule en bois."]
  },
  {
    id: "creme-de-chou-fleur", nom: "Crème de chou-fleur", cuisine: "française", type: "soupe",
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
    id: "creme-dessert-au-chocolat", nom: "Crème dessert au chocolat", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Crème dessert au chocolat",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCr%C3%A8me_dessert_au_chocolat",
    ingredients: [
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "chocolat-noir", quantite: 50, unite: "g" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "beurre", quantite: 12, unite: "g" },
      { id: "farine", quantite: 10, unite: "g" }
    ],
    etapes: ["Pour 2 ramequins. Faire fondre le beurre dans une casserole, puis le mélanger avec la farine pour obtenir un roux blanc.", "Ajouter le lait peu à peu en mélangeant bien, et cuire en remuant.", "Ajouter le sucre une fois le lait cuit, puis le chocolat cassé en morceaux.", "Laisser chauffer 5 à 10 minutes en remuant à la cuillère.", "Verser dans des ramequins et laisser refroidir au frais avant de servir."]
  },
  {
    id: "creme-patissiere", nom: "Crème pâtissière (environ 300 ml)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Crème Pâtissière",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCr%C3%A8me_P%C3%A2tissi%C3%A8re",
    ingredients: [
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "farine", quantite: 25, unite: "g" }
    ],
    etapes: ["Faites chauffer le lait.", "Séparez les œufs (gardez les blancs pour une autre recette) et travaillez les jaunes avec le sucre jusqu'à ce que le mélange blanchisse.", "Ajoutez la farine, puis versez le lait bouillant petit à petit en mélangeant.", "Remettez sur feu doux et portez à ébullition en remuant.", "Refroidissez la crème dans un évier rempli d'eau froide."]
  },
  {
    id: "pate-a-crepes-simple", nom: "Crêpes sucrées (pâte à crêpes simple)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Pâte à crêpe",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2te_%C3%A0_cr%C3%AApe",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "lait", quantite: 300, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "sucre", quantite: 25, unite: "g", optionnel: true }
    ],
    etapes: ["Mettre la farine, le sel et le sucre (facultatif) dans un saladier et creuser un puits.", "Casser les œufs dans le puits, puis verser peu à peu les deux tiers du lait en mélangeant pour éviter les grumeaux.", "Ajouter le beurre fondu. Laisser reposer au moins 1 heure.", "Incorporer le reste du lait en douceur, sans faire de bulles.", "Cuire dans une poêle chaude beurrée : 2 minutes d'un côté, 1 minute de l'autre. Ça fait environ 8 crêpes."]
  },
  {
    id: "des-de-saumon-marine-au-citron", nom: "Dés de saumon mariné au citron", cuisine: "française", type: "entree",
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
    id: "eclairs-au-chocolat", nom: "Éclairs au chocolat (pâte à choux, crème et glaçage)", cuisine: "française", type: "dessert",
    difficulte: "difficile", tempsMinutes: 90, portions: 2,
    source: "Wikilivres", idSource: "Desserts/Éclair",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FDesserts%2F%C3%89clair",
    ingredients: [
      { id: "eau", quantite: 165, unite: "ml" },
      { id: "farine", quantite: 105, unite: "g" },
      { id: "beurre", quantite: 78, unite: "g" },
      { id: "sucre", quantite: 48, unite: "g" },
      { id: "oeuf", quantite: 5, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "chocolat-noir", quantite: 80, unite: "g" }
    ],
    etapes: ["Pâte à choux : porter à ébullition 125 ml d'eau avec 38 g de beurre, 10 g de sucre et une pincée de sel. Hors du feu, verser 75 g de farine d'un coup en remuant.", "Remettre sur feu doux en remuant jusqu'à ce que la pâte se décolle des parois. Hors du feu, ajouter 2 œufs un par un en travaillant bien après chaque œuf.", "Former 3 boudins sur une plaque beurrée et cuire environ 25 minutes à 210 °C. Laisser refroidir.", "Crème : faire fondre 50 g de chocolat dans 40 ml d'eau à feu doux, puis ajouter 30 g de farine, 2 œufs et 38 g de sucre. Verser le lait bouillant en filet, cuire en remuant jusqu'au premier bouillon et laisser refroidir.", "Fendre les éclairs sur la longueur et les garnir de crème.", "Glaçage : travailler 30 g de chocolat fondu avec 30 g de beurre ramolli, ajouter le jaune puis le blanc d'un œuf battu en neige molle. Napper les éclairs et mettre au frais jusqu'à ce que le glaçage durcisse. Ça fait 3 éclairs."]
  },
  {
    id: "epinards-a-la-creme-et-aux-champignons", nom: "Épinards à la crème et aux champignons", cuisine: "française", type: "accompagnement",
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
    id: "escalopes-de-poulet-aux-aubergines", nom: "Escalopes de poulet aux aubergines", cuisine: "française", type: "plat",
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
    id: "escalopes-de-veau-panees-parmesan-amandes", nom: "Escalopes de veau panées parmesan-amandes", cuisine: "française", type: "plat",
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
    id: "flamusse-bourguignonne", nom: "Flamusse bourguignonne (gâteau aux pommes entre clafoutis et flan)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Flamusse bourguignonne",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFlamusse_bourguignonne",
    ingredients: [
      { id: "pomme", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 25, unite: "g" },
      { id: "lait", quantite: 100, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Pour un petit plat de 2 portions. Mélanger dans un saladier la farine, le sucre et une pincée de sel.", "Casser l'œuf dans un puits au centre et fouetter en incorporant peu à peu le mélange de farine.", "Ajouter le lait en mélangeant jusqu'à obtenir une pâte homogène.", "Peler la pomme et la couper en quartiers. Les faire dorer 5 minutes au beurre dans une poêle.", "Beurrer un petit moule, disposer les quartiers au fond, puis verser la pâte.", "Cuire environ 30 minutes à 180 °C en vérifiant la cuisson. Laisser tiédir avant de démouler.", "Saupoudrer de sucre ou de cannelle avant de déguster."]
  },
  {
    id: "flan-a-la-chataigne", nom: "Flan à la farine de châtaignes (au caramel)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Flan à la châtaigne",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFlan_%C3%A0_la_ch%C3%A2taigne",
    ingredients: [
      { id: "farine-de-chataignes", quantite: 20, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "sucre", quantite: 60, unite: "g" },
      { id: "eau", quantite: 50, unite: "ml" }
    ],
    etapes: ["Dans un saladier, délayez la farine de châtaignes avec environ 100 ml de lait froid. Mettez le reste du lait à chauffer dans une casserole, à feu doux.", "Versez la farine délayée dans la casserole en mélangeant sans cesse jusqu'à l'ébullition. Ajoutez 20 g de sucre (environ 1 cuillerée à soupe et demie) et retirez du feu.", "Dans un bol, battez l'œuf comme pour une omelette et incorporez-le au mélange précédent.", "Dans un petit moule à flan, versez les 40 g de sucre restants avec l'eau. Portez sur feu vif en remuant jusqu'à obtenir un caramel, puis retirez du feu.", "Versez la préparation dans le moule et faites cuire au bain-marie, dans le four préchauffé à 200-220 °C (thermostat 6-7), pendant 40 minutes. Laissez refroidir avant de servir."]
  },
  {
    id: "flan-aux-oeufs", nom: "Flan aux œufs (petits flans au four, pris au bain-marie)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Flan aux œufs",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFlan_aux_%C5%93ufs",
    ingredients: [
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 300, unite: "ml" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "sucre-vanille", quantite: 4, unite: "g", ou: { id: "gousse-de-vanille", quantite: 1, unite: "pièce" } }
    ],
    etapes: ["Faites chauffer le lait avec le sucre vanillé jusqu'à ébullition (ou avec la gousse de vanille fendue).", "Dans un saladier, fouettez les œufs avec le sucre.", "Versez le lait bouillant petit à petit sur le mélange œufs-sucre en remuant, jusqu'à obtenir un mélange homogène. Si possible, passez-le au tamis et laissez reposer 5 minutes.", "Répartissez dans 2 ramequins ou un petit plat allant au four, et posez-les dans un plat rempli d'eau chaude (bain-marie).", "Enfournez 30 à 35 minutes à 120 °C (thermostat 4), jusqu'à ce que les flans soient pris ; prolongez de quelques minutes si besoin.", "Laissez refroidir à l'air libre (jamais au frais tant que c'est chaud), puis couvrez et placez au moins 2 heures au réfrigérateur. À déguster dans les 24 heures, avec un nappage au caramel si vous voulez."]
  },
  {
    id: "flan-de-courgettes", nom: "Flan de courgettes au gruyère", cuisine: "française", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 65, portions: 2,
    source: "Wikilivres", idSource: "Flan de courgettes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFlan_de_courgettes",
    ingredients: [
      { id: "courgette", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "gruyere", quantite: 75, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "persil", quantite: 3, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "beurre", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Coupez les courgettes en rondelles de 1 cm d'épaisseur.", "Faites-les revenir 5 minutes dans l'huile d'olive, salez, poivrez, puis saisissez-les encore 5 minutes en les retournant, jusqu'à ce qu'elles soient bien dorées.", "Dans un saladier, battez les œufs avec le lait, du sel, du poivre, la muscade râpée, le persil haché et la moitié du gruyère râpé.", "Disposez les courgettes dans un petit plat à gratin beurré (environ 18 cm), versez la préparation et saupoudrez du reste de gruyère.", "Enfournez 40 minutes à four chaud, à 230 °C comme dans la recette d'origine (surveillez le dessus et baissez un peu le four s'il brunit trop vite)."]
  },
  {
    id: "fondant-aux-marrons", nom: "Fondant aux marrons (gâteau à la crème de marrons et au chocolat)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Fondant aux marrons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFondant_aux_marrons",
    ingredients: [
      { id: "creme-de-marrons", quantite: 200, unite: "g" },
      { id: "chocolat-noir", quantite: 40, unite: "g" },
      { id: "beurre", quantite: 45, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Préchauffez le four à 150 °C et beurrez bien un petit moule (environ 14 cm).", "Faites fondre 40 g de beurre et le chocolat au bain-marie. Pendant ce temps, battez l'œuf en omelette dans un bol.", "Quand le chocolat et le beurre sont fondus, lissez le mélange et retirez-le du feu.", "Incorporez la crème de marrons petit à petit en remuant jusqu'à obtenir un mélange bien homogène, puis ajoutez l'œuf peu à peu.", "Versez dans le moule et enfournez 35 à 45 minutes à 150 °C (45 minutes pour un moule plus grand).", "Servez froid ou tiède (le démoulage tiède est délicat), avec de la crème anglaise, des brisures de marrons glacés ou une boule de glace à la vanille."]
  },
  {
    id: "fondant-patissier", nom: "Fondant pâtissier (sucre glaçage pour gâteaux)", cuisine: "française", type: "dessert",
    difficulte: "difficile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Fondant (pâtisserie)",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFondant_(p%C3%A2tisserie)",
    ingredients: [
      { id: "sucre", quantite: 200, unite: "g" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "glucose", quantite: 10, unite: "g" }
    ],
    etapes: ["Pour environ 250 g de fondant. Faire cuire ensemble le sucre, l'eau et le glucose dans une casserole jusqu'à 117 °C (prévoir un thermomètre de cuisine).", "Verser sur une plaque à rebords et laisser refroidir jusqu'à 37 °C.", "Travailler la masse à la spatule, puis la pétrir à la main jusqu'à obtenir une pâte blanche, lisse, souple et homogène.", "Laisser maturer 3 jours dans une boîte en plastique fermée.", "Pour l'utiliser, en réchauffer un peu dans une casserole, entre 30 et 37 °C.", "Si besoin, l'assouplir avec un peu de sirop préparé avec de l'eau et du sucre."]
  },
  {
    id: "fondue-de-poireaux", nom: "Fondue de poireaux", cuisine: "française", type: "accompagnement",
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
    id: "fouace-de-l-aveyron", nom: "Fouace de l'Aveyron (brioche à la fleur d'oranger)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Fouace (Aveyron)",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFouace_(Aveyron)",
    ingredients: [
      { id: "farine", quantite: 150, unite: "g" },
      { id: "beurre", quantite: 45, unite: "g" },
      { id: "sucre", quantite: 45, unite: "g" },
      { id: "levure-de-boulanger", quantite: 7, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "eau-de-fleur-d-oranger", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préparer un sirop avec 5 g de sucre et un peu d'eau. Délayer la levure dans l'eau tiède.", "Faire un puits dans la farine, y casser 1 œuf et y verser la levure délayée. Ajouter le beurre mou, le sel, 35 g de sucre et le second œuf (en gardant un peu pour dorer).", "Ajouter l'eau de fleur d'oranger et pétrir jusqu'à ce que la pâte ne colle plus aux doigts.", "Laisser lever au moins 6 heures dans un saladier couvert d'un linge humide, puis la pétrir un peu.", "Former une boule, laisser lever 1 heure, puis faire un trou au centre pour former une couronne. Laisser encore lever.", "Dorer, inciser légèrement le dessus et cuire 25 à 30 minutes à 250 °C, jusqu'à ce qu'elle soit dorée. À la sortie du four, badigeonner de sirop et saupoudrer un peu de sucre."]
  },
  {
    id: "fouee", nom: "Fouée (petites galettes de pain angevines)", cuisine: "française", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Fouée",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFou%C3%A9e",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "sel", quantite: 5, unite: "g" },
      { id: "levure-de-boulanger", quantite: 8, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" }
    ],
    etapes: ["Mettez la farine et le sel dans un saladier.", "Délayez la levure dans un peu d'eau tiède, dans une tasse.", "Versez la levure dans la farine en brassant.", "Ajoutez peu à peu le reste de l'eau tiède (150 ml en tout) en brassant sans arrêt, jusqu'à ce que la pâte soit homogène.", "Laissez reposer la pâte 4 heures.", "Formez des boules, aplatissez-les à la paume de la main puis au rouleau. Cette quantité donne une dizaine de fouées.", "Enfournez à 220 °C pendant 35 minutes comme dans la recette d'origine (surveillez : des galettes fines peuvent dorer plus tôt). Servez chaud."]
  },
  {
    id: "fougasse", nom: "Fougasse (pain provençal entaillé, à l'huile d'olive)", cuisine: "française", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Fougasse",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFougasse",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "levure-de-boulanger", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "citron-vert", quantite: 1, unite: "pièce", optionnel: true }
    ],
    etapes: ["Dans un bol, mélangez une poignée de farine, la levure et juste assez d'eau tiède pour obtenir une bouillie lisse. Laissez reposer 1 heure.", "Mélangez le sel au reste de farine et versez-la en tas sur le plan de travail (la tiédir un peu au four la rend plus facile à travailler). Creusez un puits et versez-y le levain.", "Ajoutez l'huile d'olive, le jaune d'œuf (gardez le blanc pour une autre recette), quelques gouttes de jus de citron vert si vous en avez, et assez d'eau tiède (environ 150 ml en tout) pour obtenir une pâte souple.", "Pétrissez 10 minutes, mettez la pâte dans une grande terrine farinée, couvrez d'un torchon et laissez lever jusqu'à ce qu'elle ait doublé de volume.", "Formez une boule et laissez-la lever une seconde fois.", "Aplatissez la pâte sur le plan de travail et entaillez-la de 9 ou 10 incisions bien nettes de 2 cm, en oblique (3 d'un côté, 3 de l'autre, 3 au milieu). Écartez légèrement les ouvertures pour qu'elles ne se referment pas à la cuisson. Cette quantité donne 1 fougasse.", "Préchauffez le four à 220 °C avec la plaque dedans. Posez la fougasse sur la plaque bien chaude, glissez un bol d'eau dans le four et cuisez 35 minutes, jusqu'à ce qu'elle soit dorée et croustillante."]
  },
  {
    id: "fritade-de-courgettes", nom: "Fritade de courgettes", cuisine: "française", type: "accompagnement",
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
    id: "galette-des-rois-frangipane", nom: "Galette des rois à la frangipane (crème d'amandes, petite galette de 15 cm)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Frangipane",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFrangipane",
    ingredients: [
      { id: "poudre-d-amandes", quantite: 75, unite: "g" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "extrait-de-vanille", quantite: 8, unite: "ml" },
      { id: "pate-feuilletee", quantite: 2, unite: "pièce" }
    ],
    etapes: ["Dans un saladier, écrasez le beurre mou au fouet. Ajoutez le sucre et travaillez à la main pour obtenir une consistance sableuse.", "Ajoutez l'œuf (gardez-en une cuillerée pour dorer) et la vanille, puis mélangez vigoureusement au fouet.", "Quand le mélange est homogène, ajoutez la poudre d'amandes et mélangez bien.", "Étalez une première pâte feuilletée, répartissez la crème dessus en laissant un bord libre, posez la fève sur le bord, puis recouvrez de la seconde pâte et soudez les bords.", "Dorez le dessus avec l'œuf mis de côté.", "Enfournez environ 20 minutes à 210 °C (thermostat 7), jusqu'à ce que la pâte soit dorée."]
  },
  {
    id: "galettes-aux-noix-et-aux-flocons-d-avoine", nom: "Galettes aux noix et aux flocons d'avoine", cuisine: "française", type: "plat",
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
    id: "galettes-de-sarrasin", nom: "Galettes de sarrasin", cuisine: "française", type: "plat",
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
    id: "gateau-au-vin-blanc", nom: "Gâteau au vin blanc (cake moelleux)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Gâteau au vin blanc",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FG%C3%A2teau_au_vin_blanc",
    ingredients: [
      { id: "farine", quantite: 135, unite: "g" },
      { id: "sucre", quantite: 135, unite: "g" },
      { id: "levure-chimique", quantite: 7, unite: "g" },
      { id: "extrait-de-vanille", quantite: 2, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 65, unite: "ml" },
      { id: "vin-blanc", quantite: 130, unite: "ml" }
    ],
    etapes: ["Pour un petit moule à cake d'environ 18 cm. Mélanger les œufs avec le sucre.", "Incorporer la farine, la levure et la vanille, puis le vin blanc sec et l'huile.", "Verser dans un moule à cake beurré et cuire environ 35 à 40 minutes à 180 °C. Surveiller avec la pointe d'un couteau, qui doit ressortir sèche.", "Laisser refroidir, démouler et saupoudrer de sucre glace.", "Se déguste avec une crème anglaise, ou simplement avec un café ou un thé."]
  },
  {
    id: "gateau-aux-noix-de-dame-batilde", nom: "Gâteau aux noix de Dame Batilde (cake aux noix, pomme et raisins secs)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Recettes de villages qui bougent/Maine-et-Loire/Gâteau aux noix de Dame Batilde d'Erceville",
    lienSource: "https://fr.wikibooks.org/wiki/Recettes_de_villages_qui_bougent%2FMaine-et-Loire%2FG%C3%A2teau_aux_noix_de_Dame_Batilde_d'Erceville",
    ingredients: [
      { id: "farine", quantite: 60, unite: "g" },
      { id: "noix", quantite: 30, unite: "g", ou: { id: "noisettes", quantite: 30, unite: "g" } },
      { id: "sucre-roux", quantite: 85, unite: "g" },
      { id: "beurre", quantite: 75, unite: "g" },
      { id: "pomme", quantite: 1, unite: "pièce" },
      { id: "raisins-secs", quantite: 30, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g", ou: { id: "bicarbonate-de-soude", quantite: 3, unite: "g" } },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" }
    ],
    etapes: ["Pour un petit moule à cake d'environ 18 cm. Préchauffer le four à 180 °C.", "Faire fondre le beurre et le laisser tiédir. Fouetter le sucre et les œufs jusqu'à obtenir un mélange onctueux, puis incorporer le beurre en fouettant fort.", "Dans une jatte à part, mélanger la farine, les noix en poudre (ou des noisettes en poudre), la levure (ou le bicarbonate) et la cannelle. Les ajouter à la préparation en remuant doucement.", "À la fin, incorporer les raisins secs et environ un quart de pomme râpée (10 g, le reste de la pomme se croque).", "Verser dans le moule à cake et cuire environ 40 minutes. Laisser refroidir avant de démouler."]
  },
  {
    id: "gateau-aux-noix-et-au-miel", nom: "Gâteau aux noix et au miel", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Gâteau aux noix et au miel",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FG%C3%A2teau_aux_noix_et_au_miel",
    ingredients: [
      { id: "farine", quantite: 115, unite: "g" },
      { id: "beurre", quantite: 90, unite: "g" },
      { id: "sucre", quantite: 35, unite: "g" },
      { id: "noix", quantite: 30, unite: "g" },
      { id: "miel", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C et beurrer un petit moule (environ 16 cm).", "Séparer les blancs des jaunes. Travailler le beurre ramolli avec le sucre, puis ajouter les jaunes.", "Incorporer le miel, la farine, les noix et le sel.", "Monter les blancs en neige ferme avec une pincée de sel et les incorporer délicatement.", "Verser dans le moule et cuire environ 30 à 40 minutes : la pointe d'un couteau doit ressortir sèche.", "Se déguste avec de la crème anglaise ou une glace à la cannelle ou à la vanille."]
  },
  {
    id: "gateau-aux-pommes", nom: "Gâteau aux pommes (moule de 20 cm, 4 à 6 parts)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 65, portions: 2,
    source: "Wikilivres", idSource: "Gâteau aux pommes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FG%C3%A2teau_aux_pommes",
    ingredients: [
      { id: "farine", quantite: 200, unite: "g" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "beurre", quantite: 80, unite: "g" },
      { id: "lait", quantite: 150, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "levure-chimique", quantite: 11, unite: "g" },
      { id: "pomme", quantite: 2, unite: "pièce" }
    ],
    etapes: ["Préchauffez le four à 180 °C (thermostat 6) et beurrez un moule d'environ 20 cm (avec 5 g du beurre).", "Séparez l'œuf. Dans un saladier, mélangez le sucre et 75 g de beurre ramolli, puis incorporez le jaune et mélangez jusqu'à obtenir une pâte homogène.", "Tout en mélangeant, ajoutez le lait, la farine, la levure et le sel.", "Montez le blanc en neige et incorporez-le délicatement à la pâte.", "Versez la préparation dans le moule et recouvrez-la de demi-rondelles de pommes épluchées. Enfournez 45 minutes à 180 °C."]
  },
  {
    id: "gateau-basque", nom: "Gâteau basque (crème et pâte sablée)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 65, portions: 2,
    source: "Wikilivres", idSource: "Gâteau basque",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FG%C3%A2teau_basque",
    ingredients: [
      { id: "farine", quantite: 140, unite: "g" },
      { id: "lait", quantite: 125, unite: "ml" },
      { id: "sucre", quantite: 80, unite: "g" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "poudre-d-amandes", quantite: 20, unite: "g" },
      { id: "rhum", quantite: 40, unite: "ml" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" },
      { id: "levure-chimique", quantite: 3, unite: "g" }
    ],
    etapes: ["Pâte : écraser le beurre avec 50 g de sucre, ajouter la moitié d'un œuf battu, le rhum, l'huile et un peu de vanille.", "Ajouter 125 g de farine et la levure, pétrir en une pâte homogène et laisser reposer au moins 2 heures au frais. Garder le reste de l'œuf battu pour dorer.", "Crème : chauffer le lait. Mélanger l'œuf restant, le reste de sucre, les amandes, le reste de farine, la vanille, le jus du citron et son zeste râpé.", "Verser le lait presque bouillant dans ce mélange en remuant, puis cuire jusqu'à la reprise de l'ébullition. Couper le feu et laisser refroidir.", "Couper la pâte en deux parts presque égales. Étaler la plus grosse dans un petit moule (environ 16 cm), verser la crème.", "Étaler l'autre part, recouvrir, dorer avec l'œuf mis de côté et cuire 20 minutes à 180 °C."]
  },
  {
    id: "gateau-creusois", nom: "Gâteau creusois (gâteau aux noisettes du Limousin, petit moule)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Gâteau creusois",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FG%C3%A2teau_creusois",
    ingredients: [
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "farine", quantite: 55, unite: "g" },
      { id: "noisettes", quantite: 50, unite: "g" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" }
    ],
    etapes: ["Préchauffez le four à température moyenne (thermostat 5-6). Beurrez un petit moule (environ 16 cm) avec un peu du beurre et saupoudrez-le de 2 pincées de farine pour un démoulage facile.", "Réduisez les noisettes en poudre grossière (moulin ou mixeur) et mélangez-les avec le sucre.", "Séparez les œufs (gardez les jaunes pour une autre recette) et montez les 2 blancs en neige ferme. Faites fondre 50 g de beurre.", "Ajoutez aux noisettes sucrées les blancs en neige, la farine et le beurre fondu, et mélangez délicatement.", "Versez dans le moule et faites cuire environ 30 minutes (40 minutes pour un grand gâteau)."]
  },
  {
    id: "gateau-d-elisabeth", nom: "Gâteau d'Élisabeth (fondant au chocolat)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Gâteau d'Élisabeth",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FG%C3%A2teau_d'%C3%89lisabeth",
    ingredients: [
      { id: "chocolat-noir", quantite: 100, unite: "g" },
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 160 °C. Faire fondre le beurre à feu très doux avec le chocolat, jusqu'à ce que ce soit lisse.", "Hors du feu, ajouter le sucre et la farine.", "Séparer les œufs. Ajouter les jaunes au chocolat et mélanger.", "Monter les blancs en neige très ferme avec une pincée de sel et les incorporer cuillère par cuillère.", "Verser dans un petit moule beurré et fariné (environ 18 cm) et cuire 30 à 35 minutes : plus ou moins fondant selon la cuisson.", "Démouler et laisser refroidir."]
  },
  {
    id: "gateau-des-rois-provencal", nom: "Gâteau des Rois (couronne briochée aux fruits confits, petite couronne de 3 à 4 parts)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Gâteau des Rois",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FG%C3%A2teau_des_Rois",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "beurre", quantite: 75, unite: "g" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "fruits-confits", quantite: 100, unite: "g" },
      { id: "levure-de-boulanger", quantite: 10, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Sortez le beurre du réfrigérateur pour qu'il ramollisse.", "Émiettez la levure et délayez-la dans un demi-verre d'eau tiède. Laissez 5 minutes à température ambiante.", "Versez la farine dans un saladier. Ajoutez 2 jaunes d'œufs (gardez les blancs pour une autre recette), 25 g de sucre et le sel, puis le beurre coupé en petits morceaux. Mélangez bien du bout des doigts.", "Ajoutez la levure et la moitié des fruits confits hachés grossièrement, et pétrissez longuement.", "Roulez la pâte en boule et laissez-la lever 8 heures.", "Roulez la boule en forme de baguette, puis en couronne en attachant les deux bouts. Décorez avec le reste des fruits confits entiers (on y glisse la fève).", "Délayez le 3e jaune d'œuf dans un peu d'eau et dorez la couronne au pinceau. Saupoudrez du reste de sucre.", "Posez la couronne sur du papier sulfurisé et enfournez 30 à 40 minutes, dans le four préchauffé à 150 °C (thermostat 5)."]
  },
  {
    id: "gateau-minute-vendeen", nom: "Gâteau minute vendéen (gâteau moelleux au beurre)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Recettes de villages qui bougent/Vendée/Gâteau Minute",
    lienSource: "https://fr.wikibooks.org/wiki/Recettes_de_villages_qui_bougent%2FVend%C3%A9e%2FG%C3%A2teau_Minute",
    ingredients: [
      { id: "sucre", quantite: 120, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 80, unite: "g" },
      { id: "farine", quantite: 80, unite: "g" },
      { id: "fecule", quantite: 40, unite: "g" },
      { id: "levure-chimique", quantite: 6, unite: "g" },
      { id: "extrait-de-vanille", quantite: 2, unite: "ml" }
    ],
    etapes: ["Pour un petit moule à manqué de 16 à 18 cm. Travailler le beurre en pommade.", "Blanchir 110 g de sucre avec les jaunes d'œufs, puis ajouter le beurre pommade et mélanger jusqu'à obtenir une préparation homogène.", "Verser alternativement la levure, la vanille, la farine tamisée et la fécule (ou maïzena). Bien mélanger.", "Monter les blancs en neige et les incorporer délicatement.", "Verser dans le moule beurré et saupoudrer de 10 g de sucre cristallisé, qui formera une croûte à la cuisson.", "Cuire 35 à 40 minutes à 170 °C (ou environ 25 minutes à 200 °C). Laisser refroidir avant de démouler."]
  },
  {
    id: "gateau-nantais", nom: "Gâteau nantais (petits biscuits aux amandes et au citron)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Gâteau nantais",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FG%C3%A2teau_nantais",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "sucre", quantite: 70, unite: "g" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "amandes", quantite: 30, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Pour une quinzaine de petits biscuits. Retirer la peau des amandes (les ébouillanter d'abord), puis les hacher très finement.", "Mettre la farine dans une terrine et creuser un puits. Y mettre 60 g de sucre, le beurre, 20 g d'amandes hachées, un peu de zeste de citron haché et l'œuf entier.", "Mélanger pour obtenir une pâte assez ferme.", "L'étaler au rouleau très finement, puis découper de petits ronds avec un verre ou un emporte-pièce.", "Garnir chaque rond d'un peu d'amandes hachées (10 g en tout) et saupoudrer de 10 g de sucre.", "Cuire à four doux, vers 150 °C, 15 à 20 minutes environ, jusqu'à ce qu'ils soient légèrement dorés."]
  },
  {
    id: "gateau-simple-au-chocolat", nom: "Gâteau simple au chocolat (petit moule de 14 cm)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Desserts/Gâteau simple au chocolat",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FDesserts%2FG%C3%A2teau_simple_au_chocolat",
    ingredients: [
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 90, unite: "g" },
      { id: "chocolat-noir", quantite: 65, unite: "g" },
      { id: "sucre", quantite: 85, unite: "g" },
      { id: "eau", quantite: 5, unite: "ml" }
    ],
    etapes: ["Préchauffez le four à 150 °C (thermostat 5) et beurrez un petit moule rond ou carré (environ 14 cm) avec un peu du beurre.", "Séparez les œufs. Dans un saladier, mélangez le sucre et 85 g de beurre ramolli. Faites fondre le chocolat au bain-marie.", "Tout en mélangeant, ajoutez le chocolat fondu, 1 cuillerée à café d'eau et les 2 jaunes.", "Montez les blancs en neige et incorporez-les délicatement.", "Versez dans le moule et laissez cuire 20 minutes. Ce gâteau est encore meilleur avec une crème anglaise ou une glace à la vanille ; on peut aussi le napper de chocolat et le décorer."]
  },
  {
    id: "glace-a-la-banane", nom: "Glace à la banane (à la sorbetière)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Glace à la banane",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGlace_%C3%A0_la_banane",
    ingredients: [
      { id: "banane", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 50, unite: "g" },
      { id: "lait", quantite: 175, unite: "ml" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" }
    ],
    etapes: ["Épluchez les bananes et mettez-les dans un mixeur avec le sucre, le lait et la crème.", "Mixez jusqu'à obtenir un appareil ayant la consistance d'une crème.", "Versez dans la sorbetière et turbinez 50 minutes au congélateur. Cela donne environ 4 boules de glace."]
  },
  {
    id: "glace-a-la-fraise", nom: "Glace à la fraise (à la sorbetière)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Glace à la fraise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGlace_%C3%A0_la_fraise",
    ingredients: [
      { id: "fraises", quantite: 400, unite: "g" },
      { id: "sucre", quantite: 80, unite: "g" },
      { id: "creme-fraiche", quantite: 80, unite: "ml" }
    ],
    etapes: ["Pour environ 4 boules de glace, avec une sorbetière. Laver et équeuter les fraises.", "Les mixer avec 60 g de sucre jusqu'à obtenir une texture de milk-shake.", "Fouetter la crème fraîche avec 20 g de sucre pendant 2 minutes.", "Mélanger les deux préparations.", "Verser dans la sorbetière placée au congélateur et turbiner. Elle durcit vite quand elle touche la paroi du congélateur.", "Quand les pales se relèvent, la glace est onctueuse : la servir ou la remettre au congélateur dans un récipient.", "Si la glace a durci après 24 heures, la sortir 30 minutes au réfrigérateur avant de servir."]
  },
  {
    id: "glace-a-la-framboise", nom: "Glace à la framboise (à la sorbetière)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Glace à la framboise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGlace_%C3%A0_la_framboise",
    ingredients: [
      { id: "framboises", quantite: 250, unite: "g" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "creme-fraiche", quantite: 70, unite: "ml" }
    ],
    etapes: ["Lavez les framboises, écrasez-les et passez-les dans une passoire fine pour retirer les pépins.", "Mixez la purée obtenue avec 80 g de sucre.", "Fouettez la crème bien froide avec les 20 g de sucre restants pour la faire monter.", "Réunissez délicatement les deux préparations.", "Versez dans la sorbetière et turbinez 40 minutes au congélateur. Cela donne environ 4 boules de glace."]
  },
  {
    id: "gougeres-au-comte", nom: "Gougères au comté", cuisine: "française", type: "entree",
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
    id: "gratin-de-chou-fleur", nom: "Gratin de chou-fleur", cuisine: "française", type: "accompagnement",
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
    id: "gratin-de-courgettes-a-la-feta", nom: "Gratin de courgettes à la feta", cuisine: "française", type: "plat",
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
    id: "gratin-de-pates-sauce-blanche-vegetale", nom: "Gratin de pâtes, sauce blanche végétale aux noix", cuisine: "française", type: "plat",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Gratin de pâtes sauce blanche",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGratin_de_p%C3%A2tes_sauce_blanche",
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "noix", quantite: 80, unite: "g" },
      { id: "lait-de-soja", quantite: 200, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-arachide", quantite: 35, unite: "ml" },
      { id: "farine", quantite: 35, unite: "g" },
      { id: "moutarde", quantite: 4, unite: "g" },
      { id: "levure-maltee", quantite: 16, unite: "g" },
      { id: "chapelure", quantite: 20, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pâtes selon le temps indiqué sur le paquet, puis les égoutter.", "Diluer le cube dans 200 ml d'eau chaude. Faire dorer les noix à sec dans une poêle.", "Chauffer l'huile, ajouter la farine et fouetter pour faire un roux. Verser en alternance le lait de soja et le bouillon en fouettant vivement.", "Ajouter la moutarde, la levure maltée, l'ail écrasé, le sel et le poivre, et laisser mijoter quelques minutes.", "Mélanger la sauce avec les pâtes et les noix, verser dans un plat à gratin et saupoudrer de chapelure.", "Faire dorer au four quelques minutes (environ 200 °C)."]
  },
  {
    id: "gratin-de-potiron", nom: "Gratin de potiron", cuisine: "française", type: "accompagnement",
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
    id: "gratin-de-tofu-aux-haricots-rouges", nom: "Gratin de tofu aux haricots rouges", cuisine: "française", type: "plat",
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
    id: "gratin-savoyard", nom: "Gratin savoyard", cuisine: "française", type: "accompagnement",
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
    id: "gratinee-a-la-biere", nom: "Gratinée à la bière (soupe à l'oignon)", cuisine: "française", type: "soupe",
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
    id: "kouign-crepes-bretonnes", nom: "Kouign (crêpes épaisses bretonnes au rhum)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Kouign",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKouign",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "sucre", quantite: 70, unite: "g" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml" },
      { id: "rhum", quantite: 8, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "levure-de-boulanger", quantite: 12, unite: "g" },
      { id: "lait", quantite: 250, unite: "ml" }
    ],
    etapes: ["Pour environ 8 crêpes épaisses. Dans un saladier, mélanger la farine, le sucre et l'extrait de vanille (à la place du sucre vanillé).", "Délayer la levure dans le lait tiède, puis verser dans le saladier.", "Ajouter les œufs, le sel gris ou une pincée de sel, puis le rhum (ou du lambig).", "Laisser reposer la pâte 2 heures dans un endroit chaud.", "Cuire comme des crêpes, mais plus épaisses, dans une poêle chaude, environ 2 à 3 minutes par face."]
  },
  {
    id: "kouign-amann", nom: "Kouign amann (gâteau breton feuilleté au beurre et au sucre)", cuisine: "française", type: "dessert",
    difficulte: "difficile", tempsMinutes: 70, portions: 2,
    source: "Wikilivres", idSource: "Kouign amann",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKouign_amann",
    ingredients: [
      { id: "farine", quantite: 90, unite: "g" },
      { id: "beurre", quantite: 90, unite: "g" },
      { id: "sucre", quantite: 90, unite: "g" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" }
    ],
    etapes: ["Pour un petit moule à manqué de 14 à 16 cm. Utiliser du beurre demi-sel, ou du beurre doux avec une pincée de sel en plus.", "Délayer la levure et le sel dans l'eau tiède.", "Verser sur la farine dans un saladier et pétrir à la main jusqu'à obtenir une pâte souple, élastique et peu collante. Former une boule et la réserver.", "Mélanger le beurre et le sucre jusqu'à une texture homogène, proche de celle de la pâte.", "Étaler la pâte sur un plan fariné, puis répartir le mélange beurre-sucre dessus (en tranches, c'est plus facile).", "Replier en trois dans la longueur, puis en trois dans la largeur, et aplatir pour chasser l'air.", "Étaler de nouveau, avec délicatesse pour ne pas percer la pâte, puis refaire le même pliage.", "Arrondir les angles pour s'adapter au moule, y déposer la pâte et cuire environ 20 minutes à 210 °C.", "À la sortie du four, laisser le gâteau reprendre son beurre quelques minutes, démouler et servir chaud ou tiède.", "Le feuilletage est délicat : si le beurre s'échappe, ce n'est pas grave, le gâteau sera bon quand même."]
  },
  {
    id: "le-temeraire", nom: "Le Téméraire (tarte franc-comtoise aux pommes et aux noisettes)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Le Téméraire",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FLe_T%C3%A9m%C3%A9raire",
    ingredients: [
      { id: "farine", quantite: 150, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sucre", quantite: 60, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 75, unite: "g" },
      { id: "noisettes", quantite: 75, unite: "g" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" },
      { id: "pomme", quantite: 2, unite: "pièce" },
      { id: "raisins-secs", quantite: 20, unite: "g" },
      { id: "cognac", quantite: 10, unite: "ml" }
    ],
    etapes: ["Pour une petite tarte couverte d'environ 16 cm. Faire dorer 75 g de noisettes dans une poêle avec 5 ml d'huile, puis les hacher finement.", "Préparer la pâte en mélangeant la farine, l'œuf battu (en garder une cuillerée pour dorer), le sucre, le sel, le beurre mou et les noisettes.", "Éplucher les pommes et les couper en petits cubes.", "Dans une poêle, flamber les raisins secs avec le cognac (ou du marc du Jura ou du calvados), puis ajouter le zeste de citron.", "Ajouter les pommes, remuer et retirer du feu.", "Étaler la pâte sur 5 mm d'épaisseur. En garnir un moule, répartir la garniture, puis recouvrir d'une seconde couche de pâte de même épaisseur.", "Dorer avec l'œuf réservé et rayer la surface à la fourchette.", "Cuire à four moyen, 180 °C, environ 30 minutes."]
  },
  {
    id: "lentilles-cuisinees-aux-lardons", nom: "Lentilles cuisinées aux lardons", cuisine: "française", type: "plat",
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
    id: "limonade-au-citron-vert", nom: "Limonade maison au citron vert", cuisine: "française", type: "boisson",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Limonade au citron vert",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FLimonade_au_citron_vert",
    ingredients: [
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "citron-vert", quantite: 1, unite: "pièce", ou: { id: "citron", quantite: 1, unite: "pièce" } },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "vinaigre", quantite: 20, unite: "ml" },
      { id: "sucre", quantite: 50, unite: "g" }
    ],
    etapes: ["Pour environ 500 ml. Presser le citron vert et l'orange : il faut environ 20 ml de chaque jus.", "Verser dans une bouteille l'eau, les deux jus, le vinaigre et le sucre, puis bien secouer.", "Laisser la bouteille au soleil en été (ou près d'une source de chaleur) jusqu'à ce qu'elle soit tiède, pour bien dissoudre le sucre.", "Secouer de nouveau et la mettre directement au réfrigérateur."]
  },
  {
    id: "macarons-d-amiens", nom: "Macarons d'Amiens (petits macarons moelleux aux amandes)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Macarons d'Amiens",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMacarons_d'Amiens",
    ingredients: [
      { id: "poudre-d-amandes", quantite: 125, unite: "g" },
      { id: "sucre-glace", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 18, unite: "g" },
      { id: "miel", quantite: 15, unite: "g" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 180 °C. Séparer les blancs des jaunes (garder les jaunes pour une autre recette).", "Mélanger la poudre d'amandes, le sucre glace, la farine et la vanille.", "Faire un puits, ajouter les blancs petit à petit puis le miel : la pâte doit rester souple.", "Déposer des boules de 3 cm sur une plaque couverte de papier cuisson (environ 15 petits macarons).", "Cuire 15 à 20 minutes jusqu'à ce qu'ils soient légèrement dorés. Conserver au sec."]
  },
  {
    id: "macarons-de-montmorillon", nom: "Macarons de Montmorillon (macarons moelleux aux amandes)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Macarons de Montmorillon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMacarons_de_Montmorillon",
    ingredients: [
      { id: "sucre-glace", quantite: 40, unite: "g" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "poudre-d-amandes", quantite: 100, unite: "g" }
    ],
    etapes: ["Pour environ 12 petits macarons. Mélanger le sucre glace et la poudre d'amandes, puis les tamiser dans un autre bol et réserver.", "Séparer les 2 œufs (garder les jaunes pour une autre recette). Ajouter le sucre en poudre peu à peu aux blancs en battant au fouet électrique, jusqu'à obtenir une meringue.", "Incorporer le mélange sucre glace et amandes en deux fois, en remuant sans cesse pour que la pâte soit homogène.", "Remplir une poche à douille et former de petites boules de pâte sur une plaque recouverte de papier sulfurisé.", "Cuire 12 minutes à 180 °C.", "Les macarons sont blanc pâle ; ils se mangent une fois refroidis à température ambiante."]
  },
  {
    id: "macarons-simples-chocolat-coco", nom: "Macarons simples au chocolat et à la noix de coco", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Macarons simples au chocolat",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMacarons_simples_au_chocolat",
    ingredients: [
      { id: "sucre-glace", quantite: 165, unite: "g" },
      { id: "poudre-d-amandes", quantite: 65, unite: "g" },
      { id: "noix-de-coco-rapee", quantite: 17, unite: "g" },
      { id: "cacao-en-poudre", quantite: 13, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 160 °C. Monter les blancs en neige bien ferme avec le sel.", "Mélanger ensemble le sucre glace, la poudre d'amandes, la noix de coco et le cacao.", "Incorporer délicatement les blancs en neige.", "Déposer de petits tas sur une plaque couverte de papier sulfurisé et laisser reposer 15 minutes.", "Cuire 15 minutes."]
  },
  {
    id: "madeleines", nom: "Madeleines (environ 10 madeleines)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Madeleine",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMadeleine",
    ingredients: [
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 70, unite: "g" },
      { id: "farine", quantite: 90, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "beurre", quantite: 70, unite: "g" }
    ],
    etapes: ["Dans un saladier, fouettez les œufs avec le sucre : le mélange doit être mousseux sans être trop ferme (parfumez-le avec l'arôme de votre choix, si vous voulez).", "Ajoutez 85 g de farine tamisée et la levure chimique, mélangez, puis ajoutez 60 g de beurre fondu.", "Facultatif : laissez reposer la pâte au moins 2 heures au réfrigérateur.", "Beurrez et farinez les moules à madeleines avec le beurre et la farine restants.", "Garnissez les moules aux trois quarts, à la cuillère à soupe ou avec un bol à bec verseur.", "Enfournez 8 à 10 minutes à 200 °C (moules en métal ou en papier) ou 12 à 15 minutes à 190 °C (moules en silicone). Démoulez aussitôt."]
  },
  {
    id: "magret-de-canard-au-miel", nom: "Magret de canard au miel, cumin et curry", cuisine: "française", type: "plat",
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
    id: "mannala", nom: "Mannala (petits bonshommes briochés de la Saint-Nicolas)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Mannala",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMannala",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 75, unite: "ml" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" },
      { id: "beurre", quantite: 75, unite: "g" },
      { id: "sucre-vanille", quantite: 4, unite: "g" },
      { id: "raisins-secs", quantite: 10, unite: "g", optionnel: true }
    ],
    etapes: ["Mélangez tous les ingrédients (sauf la décoration) jusqu'à obtenir une pâte élastique.", "Laissez reposer sous un chiffon dans une pièce à environ 25 °C (si possible assez humide) jusqu'à ce que la pâte ait doublé de volume, soit environ 2 heures.", "Prenez des morceaux de pâte et, avec un couteau, donnez-leur la forme de petits bonshommes. Cette quantité donne 3 ou 4 mannala.", "Décorez avec des raisins secs ou de petits morceaux de sucre (pour les yeux et le corps) ; mouillez un peu la pâte pour que le sucre tienne mieux.", "Laissez reposer au tiède jusqu'à ce que les bonshommes aient encore doublé de volume.", "Enfournez environ 15 minutes à 180 °C, jusqu'à ce qu'ils soient bien dorés.", "Mangez-les froids avec un chocolat chaud, comme pour la Saint-Nicolas (6 décembre)."]
  },
  {
    id: "mayonnaise-sans-oeufs", nom: "Mayonnaise sans œufs (au lait concentré non sucré)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Mayonnaise sans œufs",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMayonnaise_sans_%C5%93ufs",
    ingredients: [
      { id: "lait-concentre-non-sucre", quantite: 20, unite: "g" },
      { id: "moutarde", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "persil", quantite: 2, unite: "g", optionnel: true }
    ],
    etapes: ["Avec un mixeur plongeant, mélangez le lait concentré non sucré et la moutarde.", "Laissez reposer 10 minutes.", "Versez l'huile en filet fin en continuant de mixer.", "Une fois la mayonnaise prise, ajoutez le sel, le poivre et le persil haché."]
  },
  {
    id: "meringues-francaises", nom: "Meringues françaises (environ 12 petites meringues)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 135, portions: 2,
    source: "Wikilivres", idSource: "Meringue française",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMeringue_fran%C3%A7aise",
    ingredients: [
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre-glace", quantite: 100, unite: "g" }
    ],
    etapes: ["Séparez les blancs des jaunes (gardez les jaunes pour une crème, par exemple).", "Montez les blancs en neige ferme.", "Ajoutez le sucre glace : faites glisser les blancs sur le sucre, puis coupez les blancs avec une spatule et retournez-les, pour ne pas les faire retomber.", "Déposez de petits tas sur une plaque couverte de papier cuisson.", "Faites cuire 120 minutes à 70 °C."]
  },
  {
    id: "michon", nom: "Michon (galette au comté)", cuisine: "française", type: "plat",
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
    id: "mille-feuille-aux-anchois", nom: "Mille-feuille aux anchois", cuisine: "française", type: "entree",
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
    id: "moules-a-l-ail", nom: "Moules à l'ail (Vendée)", cuisine: "française", type: "plat",
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
    id: "mousse-au-chocolat-noir-et-orange", nom: "Mousse au chocolat noir et à l'orange", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Mousse au chocolat noir et à l'orange",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMousse_au_chocolat_noir_et_%C3%A0_l'orange",
    ingredients: [
      { id: "chocolat-noir", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 3, unite: "pièce" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Prélevez le zeste de l'orange et hachez-le finement, puis pressez l'orange (la mousse n'utilise que la moitié du jus : le reste se boit).", "Cassez le chocolat en carrés. Séparez les blancs des jaunes d'œufs.", "Salez légèrement les blancs et montez-les en neige ferme.", "Dans une casserole, mettez la moitié du zeste, le jus d'une demi-orange et le chocolat, et chauffez à feu doux en remuant avec une spatule jusqu'à obtenir un mélange soyeux.", "Hors du feu, versez les jaunes sur le chocolat fondu et mélangez.", "Versez ce mélange sur les blancs en neige et incorporez-les délicatement.", "Répartissez dans un saladier ou 2 verrines, décorez du reste de zeste et laissez reposer au moins 2 heures au frais."]
  },
  {
    id: "mousse-aux-fraises", nom: "Mousse aux fraises (fraises, mascarpone et crème fouettée)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Mousse aux fraises",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMousse_aux_fraises",
    ingredients: [
      { id: "creme-fraiche", quantite: 120, unite: "ml", ou: { id: "creme-liquide", quantite: 120, unite: "ml" } },
      { id: "fraises", quantite: 100, unite: "g" },
      { id: "mascarpone", quantite: 100, unite: "g" },
      { id: "sucre-glace", quantite: 15, unite: "g" }
    ],
    etapes: ["Pour 2 verrines. Laver, équeuter et sécher les fraises avec du papier absorbant. En réserver quelques-unes pour la décoration.", "Fouetter la crème très froide en chantilly avec 5 g de sucre glace.", "Mixer le reste des fraises, ajouter le reste du sucre glace et le mascarpone, puis mixer de nouveau.", "Incorporer délicatement la chantilly à cette préparation, à la spatule.", "Verser la moitié de la mousse dans les verrines, ajouter quelques morceaux de fraise, puis couvrir avec le reste de mousse.", "Réserver au frais au moins 2 heures. Décorer avec les fraises mises de côté."]
  },
  {
    id: "nappage-au-chocolat", nom: "Nappage au chocolat (ganache)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Nappage au chocolat",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FNappage_au_chocolat",
    ingredients: [
      { id: "creme-liquide", quantite: 100, unite: "ml" },
      { id: "lait", quantite: 50, unite: "ml" },
      { id: "chocolat-noir", quantite: 75, unite: "g", ou: { id: "chocolat-au-lait", quantite: 75, unite: "g" } }
    ],
    etapes: ["Casser le chocolat en petits morceaux dans un bol.", "Porter la crème et le lait à ébullition.", "Verser sur le chocolat et remuer jusqu'à ce que le mélange soit lisse.", "Laisser tiédir avant de napper un gâteau."]
  },
  {
    id: "oeufs-brouilles", nom: "Œufs brouillés", cuisine: "française", type: "plat",
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
    id: "omelette-angevine", nom: "Omelette angevine (lardons, poireau et pomme de terre)", cuisine: "française", type: "plat",
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
    id: "omelette-nature", nom: "Omelette nature", cuisine: "française", type: "plat",
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
    id: "paillassons-de-pommes-de-terre", nom: "Paillassons de pommes de terre", cuisine: "française", type: "accompagnement",
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
    id: "pain-complet", nom: "Pain complet (petit pain de 250 g de farine)", cuisine: "française", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Pain complet",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPain_complet",
    ingredients: [
      { id: "farine-complete", quantite: 250, unite: "g" },
      { id: "eau", quantite: 175, unite: "ml" },
      { id: "sel", quantite: 6, unite: "g" },
      { id: "levure-de-boulanger", quantite: 6, unite: "g" }
    ],
    etapes: ["Mettez tous les ingrédients dans le bol d'un robot pétrisseur (ou un grand saladier).", "Pétrissez 8 minutes à vitesse lente, puis 6 minutes à vitesse rapide (à la main, comptez une dizaine de minutes).", "Mettez la pâte dans un récipient et laissez-la reposer 30 minutes à température ambiante.", "Façonnez la pâte en boule ou en bâtard.", "Couvrez d'un linge humide et laissez fermenter 45 à 60 minutes à température ambiante.", "Enfournez à 240 °C. La recette d'origine compte 45 minutes pour 500 g de farine ; pour ce petit pain, comptez environ 35 minutes."]
  },
  {
    id: "pain-viennois", nom: "Pain viennois (petit pain moelleux au lait et au beurre)", cuisine: "française", type: "petit-dejeuner",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Pain viennois",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPain_viennois",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" },
      { id: "sucre", quantite: 15, unite: "g" },
      { id: "lait", quantite: 25, unite: "ml" },
      { id: "eau", quantite: 50, unite: "ml" },
      { id: "beurre", quantite: 20, unite: "g" }
    ],
    etapes: ["Pour un petit pain d'environ 200 g. Ramollir le beurre en pommade.", "Délayer la levure dans un peu d'eau tiède.", "Mettre dans un grand bol la farine, le sel, le sucre, le lait, le reste de l'eau et la levure délayée. Pétrir environ 10 minutes, à la main ou au robot, jusqu'à ce que la pâte se détache.", "Ajouter le beurre ramolli et pétrir encore 5 minutes.", "Mettre la pâte dans un récipient sous un linge humide et laisser reposer 30 minutes.", "Façonner en forme de petite baguette ou mettre dans un petit moule à pain brioché, et laisser lever jusqu'à ce que la pâte double de volume.", "Cuire 25 minutes à 220 °C, puis laisser refroidir. À déguster au petit déjeuner ou au goûter."]
  },
  {
    id: "palets-de-lentilles", nom: "Palets de lentilles", cuisine: "française", type: "plat",
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
    id: "pate-a-frire", nom: "Pâte à frire (pour beignets salés ou sucrés)", cuisine: "française", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Pâte à frire",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2te_%C3%A0_frire",
    ingredients: [
      { id: "farine", quantite: 60, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "huile-de-tournesol", quantite: 8, unite: "ml", ou: { id: "beurre", quantite: 8, unite: "g" } },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "oeuf", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Pour environ 150 ml de pâte. Mettre la farine tamisée dans un saladier et creuser un puits jusqu'à voir le fond.", "Y déposer le sel et l'huile (ou le beurre fondu clarifié), sans l'eau.", "Mélanger dans le puits à la cuillère en bois en y incorporant la farine peu à peu.", "Verser l'eau tiède très progressivement au centre en tournant, sans battre ni soulever la pâte. Elle doit napper complètement la cuillère comme une crème liquide.", "Si possible, laisser reposer 1 à 2 heures.", "Au moment de l'emploi, monter le blanc de l'œuf en neige (garder le jaune pour autre chose) et l'incorporer en tournant.", "Pour une pâte plus légère et plus parfumée, on peut remplacer l'eau par de la bière."]
  },
  {
    id: "pate-de-fruits-aux-pommes", nom: "Pâte de fruits aux pommes", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Pâte de fruits",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2te_de_fruits",
    ingredients: [
      { id: "pomme", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 220, unite: "g" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 5, unite: "ml" }
    ],
    etapes: ["Éplucher les pommes, les couper en morceaux et les cuire dans l'eau jusqu'à ce qu'elles soient très tendres.", "Passer au tamis pour obtenir une purée et la peser (environ 200 g) : ajouter le même poids de sucre.", "Cuire en remuant sans arrêt, jusqu'à ce que la pâte se détache de la casserole.", "Étaler sur une surface froide légèrement huilée, saupoudrer d'un peu de sucre.", "Laisser sécher 4 jours, puis découper en petits carrés."]
  },
  {
    id: "pates-a-la-flammekueche", nom: "Pâtes à la flammekueche (lardons, oignons, fromage blanc)", cuisine: "française", type: "plat",
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
    id: "piperade", nom: "Pipérade (poivrons, tomates et œufs brouillés)", cuisine: "française", type: "plat",
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
    id: "pistou", nom: "Pistou (basilic, ail et huile d'olive)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Pistou",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPistou",
    ingredients: [
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "basilic", quantite: 25, unite: "g" },
      { id: "huile-d-olive", quantite: 100, unite: "ml" }
    ],
    etapes: ["Éplucher l'ail et le piler dans un mortier avec les feuilles de basilic.", "Ajouter l'huile d'olive petit à petit en mélangeant bien.", "Servir sur du pain, des pâtes ou une soupe. Ça fait un petit bol de pistou."]
  },
  {
    id: "poelee-brestoise", nom: "Poêlée brestoise", cuisine: "française", type: "plat",
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
    id: "pommes-a-la-grivette", nom: "Pommes à la grivette (pommes râpées au lait caillé)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Pommes à la grivette",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPommes_%C3%A0_la_grivette",
    ingredients: [
      { id: "pomme", quantite: 3, unite: "pièce" },
      { id: "lait-caille", quantite: 250, unite: "ml", ou: { id: "yaourt-nature", quantite: 2, unite: "pièce" } },
      { id: "menthe", quantite: 2, unite: "g", optionnel: true }
    ],
    etapes: ["Laver 2 pommes, ôter le cœur et les pépins, puis les râper avec la peau.", "Mélanger avec le lait caillé et garder au frais.", "Répartir dans deux coupes, décorer de fines lamelles de la troisième pomme et de feuilles de menthe."]
  },
  {
    id: "pommes-de-terre-au-four-creme-aux-herbes", nom: "Pommes de terre au four, crème aux herbes", cuisine: "française", type: "accompagnement",
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
    id: "pompe-a-l-huile", nom: "Pompe à l'huile (galette provençale à l'orange et à la fleur d'oranger)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Pompe à l'huile",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPompe_%C3%A0_l'huile",
    ingredients: [
      { id: "farine", quantite: 200, unite: "g" },
      { id: "levure-de-boulanger", quantite: 8, unite: "g" },
      { id: "sucre", quantite: 30, unite: "g" },
      { id: "huile-d-olive", quantite: 80, unite: "ml" },
      { id: "eau-de-fleur-d-oranger", quantite: 15, unite: "ml" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 80, unite: "ml" }
    ],
    etapes: ["Pour 2 pompes. Préparer le levain : émietter la levure dans 40 ml d'eau tiède, mélanger avec 40 g de farine tamisée, couvrir et laisser lever 30 minutes au four éteint, jusqu'à l'apparition de bulles.", "Ajouter le reste de la farine au levain et creuser un puits. Y mettre le sucre et le zeste d'orange.", "Verser 40 ml d'eau pour dissoudre le sucre, puis l'eau de fleur d'oranger, et enfin l'huile d'olive.", "Pétrir jusqu'à obtenir une pâte souple, couvrir d'un torchon et laisser lever environ 2 h 30 au chaud (27 °C), jusqu'à ce que la pâte double.", "Partager en 2 pâtons, les reformer rapidement et les laisser reposer 20 minutes sous un torchon.", "Étaler chaque pâton en ovale d'environ 20 cm, puis faire des entailles franches et les écarter.", "Poser sur une plaque et laisser lever 2 h 30 à 3 h entre 25 et 30 °C, avec un bol d'eau à côté et une bassine retournée par-dessus. La pâte doit juste doubler.", "Cuire environ 10 minutes à 205 °C, la surface doit à peine dorer.", "À la sortie du four, passer un pinceau trempé dans l'eau fraîche pour faire briller."]
  },
  {
    id: "potage-aux-lentilles-corail", nom: "Potage aux lentilles corail", cuisine: "française", type: "soupe",
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
    id: "potage-aux-pois-casses", nom: "Potage aux pois cassés", cuisine: "française", type: "soupe",
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
    id: "potage-potiron-chataignes", nom: "Potage potiron-châtaignes (Vendée)", cuisine: "française", type: "soupe",
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
    id: "potee-de-chou-blanc-au-tofu-fume", nom: "Potée de chou blanc au tofu fumé", cuisine: "française", type: "plat",
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
    id: "poulet-basquaise", nom: "Poulet basquaise", cuisine: "française", type: "plat",
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
    id: "poulet-gaston-gerard", nom: "Poulet Gaston Gérard (poulet au comté, vin blanc et moutarde)", cuisine: "française", type: "plat",
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
    id: "pounti", nom: "Pounti (pain de viande auvergnat aux pruneaux)", cuisine: "française", type: "plat",
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
    id: "puree-de-carottes", nom: "Purée de carottes", cuisine: "française", type: "accompagnement",
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
    id: "puree-de-celeri-rave", nom: "Purée de céleri-rave", cuisine: "française", type: "accompagnement",
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
    id: "puree-de-courgettes", nom: "Purée de courgettes", cuisine: "française", type: "accompagnement",
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
    id: "puree-de-navets", nom: "Purée de navets", cuisine: "française", type: "accompagnement",
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
    id: "puree-de-pois-casses", nom: "Purée de pois cassés", cuisine: "française", type: "accompagnement",
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
    id: "puree-de-pommes-de-terre", nom: "Purée de pommes de terre", cuisine: "française", type: "accompagnement",
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
    id: "quatre-quarts-aux-pommes", nom: "Quatre-quarts aux pommes caramélisées", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Quatre-quarts aux pommes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FQuatre-quarts_aux_pommes",
    ingredients: [
      { id: "farine", quantite: 105, unite: "g" },
      { id: "sucre", quantite: 125, unite: "g" },
      { id: "beurre", quantite: 105, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "pomme", quantite: 2, unite: "pièce" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "eau", quantite: 20, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 160 °C. Éplucher les pommes et les couper en lamelles.", "Chauffer 20 ml d'eau avec 20 g de sucre et laisser cuire 5 minutes pour faire un sirop. Le verser dans un petit moule (environ 18 cm).", "Disposer les lamelles de pomme sur le sirop.", "Battre les œufs avec le reste du sucre, ajouter le beurre ramolli, puis la farine et la levure.", "Verser la pâte sur les pommes et cuire 40 minutes."]
  },
  {
    id: "ragout-de-boulettes-aux-noix", nom: "Ragoût de boulettes aux noix", cuisine: "française", type: "plat",
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
    id: "riz-au-lait-breton", nom: "Riz au lait à la bretonne", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Riz au lait à la bretonne",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRiz_au_lait_%C3%A0_la_bretonne",
    ingredients: [
      { id: "riz", quantite: 60, unite: "g" },
      { id: "sucre", quantite: 60, unite: "g" },
      { id: "lait", quantite: 500, unite: "ml" },
      { id: "gousse-de-vanille", quantite: 1, unite: "pièce", ou: { id: "extrait-de-vanille", quantite: 5, unite: "ml" } }
    ],
    etapes: ["Rincer le riz à l'eau froide.", "Verser le lait, le sucre et le riz dans une casserole et porter doucement à ébullition en remuant régulièrement.", "Laisser cuire à feu doux environ 20 minutes en remuant de temps en temps, jusqu'à ce que le riz soit bien cuit.", "Ajouter la vanille (gousse grattée ou extrait), remuer 1 minute et verser dans un plat allant au four.", "Cuire 15 minutes à 230 °C pour former une croûte dorée.", "Déguster tiède ou froid."]
  },
  {
    id: "riz-aux-noix-de-cajou-pomme-et-celeri", nom: "Riz aux noix de cajou, pomme et céleri", cuisine: "française", type: "plat",
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
    id: "salade-de-pommes-et-pois-chiches", nom: "Salade de pommes et pois chiches", cuisine: "française", type: "entree",
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
    id: "sandwich-a-l-avocat-et-a-la-sauce-soja", nom: "Sandwich à l'avocat et à la sauce soja", cuisine: "française", type: "plat",
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
    id: "sandwich-a-l-avocat-et-au-tofu", nom: "Sandwich à l'avocat et au tofu", cuisine: "française", type: "plat",
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
    id: "sauce-oignon-curry", nom: "Sauce à l'oignon et au curry", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Sauce à l’oignon et au curry",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_%C3%A0_l%E2%80%99oignon_et_au_curry",
    ingredients: [
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "curry-en-poudre", quantite: 5, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Hacher les oignons et les faire blondir doucement dans une cuillère d'huile d'olive pendant 30 minutes, en remuant de temps en temps.", "Délayer le cube de bouillon dans 250 ml d'eau chaude.", "Dans une casserole, chauffer le reste d'huile, ajouter la farine et mélanger pour faire un roux.", "Verser le bouillon petit à petit en fouettant sans arrêt, jusqu'à ce que la sauce épaississe.", "Ajouter le curry, le sel et le poivre, puis mélanger avec les oignons. Ça fait environ 2 portions de sauce."]
  },
  {
    id: "sauce-champignons-vegetale", nom: "Sauce aux champignons (à l'huile, sans lait)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Sauce aux champignons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_aux_champignons",
    ingredients: [
      { id: "champignons", quantite: 150, unite: "g" },
      { id: "huile-de-tournesol", quantite: 25, unite: "ml" },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les champignons en lamelles et les faire revenir à la poêle.", "Dans une casserole, chauffer doucement l'huile, ajouter la farine et mélanger jusqu'à une pâte lisse et épaisse.", "Verser l'eau petit à petit en remuant sans arrêt.", "Ajouter les champignons, saler, poivrer et laisser épaissir quelques minutes."]
  },
  {
    id: "sauce-blanche", nom: "Sauce blanche (roux au beurre et à l'eau)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Sauce blanche",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_blanche",
    ingredients: [
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faites chauffer l'eau (environ 250 ml ; plus ou moins selon l'épaisseur voulue pour la sauce).", "Faites fondre la moitié du beurre dans une casserole et ajoutez la farine en la délayant. Laissez cuire 3 minutes au plus, à feu vif : la préparation doit rester claire.", "Versez progressivement l'eau chaude en tournant, pour éviter les grumeaux.", "Laissez mijoter une dizaine de minutes, puis incorporez le reste du beurre coupé en petits morceaux.", "Retirez du feu, salez et poivrez."]
  },
  {
    id: "sauce-blanche-vegetale", nom: "Sauce blanche végétale (lait de soja)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Sauce blanche végétalienne",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_blanche_v%C3%A9g%C3%A9talienne",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "farine", quantite: 10, unite: "g" },
      { id: "lait-de-soja", quantite: 100, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "sauce-soja", quantite: 5, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Diluer le cube de bouillon dans 100 ml d'eau chaude.", "Chauffer l'huile dans une casserole, ajouter la farine et mélanger pour faire un roux.", "Verser en alternance le lait de soja et le bouillon en fouettant, jusqu'à obtenir une sauce lisse.", "Assaisonner avec la sauce soja, le poivre et la muscade."]
  },
  {
    id: "sauce-mayonnaise", nom: "Sauce mayonnaise (maison, au jaune d'œuf)", cuisine: "française", type: "sauce",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Sauce mayonnaise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_mayonnaise",
    ingredients: [
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "moutarde", quantite: 10, unite: "g" },
      { id: "huile-de-tournesol", quantite: 200, unite: "ml" },
      { id: "vinaigre", quantite: 20, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Séparez le jaune du blanc (gardez le blanc pour une autre recette). Dans un bol, fouettez le jaune avec la moutarde.", "Laissez reposer 15 minutes.", "Ajoutez le sel et le poivre, puis détendez avec le vinaigre.", "Ajoutez quelques gouttes d'huile en fouettant rapidement.", "Quand la mayonnaise commence à prendre, versez le reste de l'huile en mince filet, sans cesser de fouetter. Cela donne un petit pot d'environ 200 ml."]
  },
  {
    id: "sirop-de-citron", nom: "Sirop de citron maison", cuisine: "française", type: "boisson",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Sirop de citron",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FSirop_de_citron",
    ingredients: [
      { id: "citron", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 375, unite: "g" },
      { id: "eau", quantite: 375, unite: "ml" }
    ],
    etapes: ["Pour une petite bouteille (environ 600 ml de sirop). Utiliser des citrons non traités.", "Mélanger l'eau et le sucre dans une casserole et porter à ébullition.", "Prélever les zestes des citrons, les ajouter dans la casserole et laisser mijoter 5 minutes.", "Presser les citrons et verser le jus dans un récipient, puis y ajouter le sirop.", "Laisser macérer une journée, filtrer et mettre en bouteille. À diluer dans de l'eau fraîche."]
  },
  {
    id: "sirop-de-menthe", nom: "Sirop de menthe maison (environ 250 ml)", cuisine: "française", type: "boisson",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Sirop de menthe",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FSirop_de_menthe",
    ingredients: [
      { id: "menthe", quantite: 15, unite: "g" },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sucre", quantite: 125, unite: "g" }
    ],
    etapes: ["Nettoyez les feuilles de menthe fraîche et mettez-les dans un récipient.", "Portez l'eau à ébullition et versez-la sur la menthe. Couvrez et laissez infuser 12 heures.", "Retirez les feuilles et les résidus.", "Ajoutez le sucre petit à petit en mélangeant à la fourchette, jusqu'à ce qu'il ne reste plus aucun morceau.", "Faites chauffer à feu doux (la recette d'origine compte 1 heure pour 1 litre ; une demi-heure suffit pour cette petite quantité).", "Laissez refroidir, filtrez et mettez en bouteille."]
  },
  {
    id: "socca", nom: "Socca (galette niçoise aux pois chiches)", cuisine: "française", type: "entree",
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
    id: "soupe-a-la-tomate-et-aux-pommes-de-terre", nom: "Soupe à la tomate et aux pommes de terre", cuisine: "française", type: "soupe",
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
    id: "soupe-au-potiron", nom: "Soupe au potiron", cuisine: "française", type: "soupe",
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
    id: "soupe-aux-courgettes-et-aux-tomates", nom: "Soupe aux courgettes et aux tomates", cuisine: "française", type: "soupe",
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
    id: "soupe-de-potiron", nom: "Soupe de potiron", cuisine: "française", type: "soupe",
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
    id: "soupe-de-tomates-aux-poireaux-et-au-basilic", nom: "Soupe de tomates aux poireaux et au basilic", cuisine: "française", type: "soupe",
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
    id: "spritz", nom: "Spritz (petits biscuits alsaciens au beurre)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Spritz",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSpritz",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "sucre", quantite: 125, unite: "g" },
      { id: "beurre", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "poudre-d-amandes", quantite: 60, unite: "g", ou: { id: "noix-de-coco-rapee", quantite: 60, unite: "g" } }
    ],
    etapes: ["Pour environ 40 biscuits, qui se conservent très longtemps. Mélanger le beurre fondu avec le sucre, puis ajouter l'œuf entier.", "Incorporer la farine, puis la poudre d'amandes (ou la noix de coco râpée).", "Former une boule de pâte et la laisser reposer 1 heure. Variante : à la place des amandes, une cuillère à café bombée de cannelle, avec environ 40 g de farine et 25 g de sucre en plus.", "Former de longues bandes d'une trentaine de centimètres avec un hachoir à viande muni de l'embout à spritz (ou avec une poche à douille, moins pratique).", "Les disposer sur une plaque, elles peuvent être serrées car elles gonflent à peine. Cuire 20 minutes à 180 °C.", "Les retirer de la plaque tant qu'elles sont chaudes, sinon elles collent.", "Laisser refroidir dans une boîte en métal ouverte, puis la fermer, avec un morceau de sucre dedans. Les biscuits se gardent plusieurs mois."]
  },
  {
    id: "taboule-aux-oranges-et-aux-pruneaux", nom: "Taboulé aux oranges et aux pruneaux", cuisine: "française", type: "entree",
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
    id: "taboule-de-quinoa-aux-legumes", nom: "Taboulé de quinoa aux légumes", cuisine: "française", type: "entree",
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
    id: "tartare-de-loup-et-saumon", nom: "Tartare de loup (bar) et de saumon fumé", cuisine: "française", type: "entree",
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
    id: "tarte-a-la-rhubarbe", nom: "Tarte à la rhubarbe (crème aux œufs)", cuisine: "française", type: "dessert",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Desserts/Tarte à la rhubarbe",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FDesserts%2FTarte_%C3%A0_la_rhubarbe",
    ingredients: [
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "rhubarbe", quantite: 200, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "creme-fraiche", quantite: 80, unite: "ml" },
      { id: "sucre", quantite: 80, unite: "g" }
    ],
    etapes: ["Pour un moule à tarte d'environ 20 cm. Préchauffer le four à 200 °C.", "Graisser légèrement le moule et y déposer la pâte brisée.", "Laver les tiges de rhubarbe, les éplucher et les couper en petits cubes.", "Répartir les cubes sur la pâte, en occupant le maximum de place. S'il reste des trous, éplucher et couper un peu plus de rhubarbe.", "Mélanger l'œuf, le sucre et la crème fraîche jusqu'à obtenir un mélange homogène, puis le verser sur la rhubarbe.", "Cuire environ 30 à 40 minutes. La tarte se mange de préférence froide."]
  },
  {
    id: "tarte-a-la-tomate-et-a-la-moutarde", nom: "Tarte à la tomate et à la moutarde", cuisine: "française", type: "plat",
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
    id: "tarte-au-chevre-et-aux-tomates", nom: "Tarte au chèvre et aux tomates", cuisine: "française", type: "plat",
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
    id: "tarte-au-persil-et-aux-lardons", nom: "Tarte au persil et aux lardons", cuisine: "française", type: "plat",
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
    id: "tarte-au-saumon-et-aux-epinards", nom: "Tarte au saumon et aux épinards", cuisine: "française", type: "plat",
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
    id: "tarte-au-sucre-complet-cannelle", nom: "Tarte au sucre complet et à la cannelle (pâte levée)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Tarte au sucre complet et à la cannelle",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_au_sucre_complet_et_%C3%A0_la_cannelle",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "sucre-muscovado", quantite: 60, unite: "g", ou: { id: "sucre-roux", quantite: 60, unite: "g" } },
      { id: "beurre", quantite: 65, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "levure-de-boulanger", quantite: 5, unite: "g" },
      { id: "lait", quantite: 40, unite: "ml" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Délayer la levure dans 25 ml de lait tiède, ajouter un peu de farine pour former une boule. Couvrir et laisser doubler de volume (30 min à 1 h).", "Mélanger le sel, le reste de farine, les 10 g de sucre, 50 g de beurre ramolli et un œuf, puis incorporer le levain. Pétrir en ajoutant de la farine si besoin.", "Couvrir d'un torchon et laisser reposer au moins 3 heures.", "Étaler la pâte dans un petit moule beurré (environ 18 cm) et laisser reposer 1 heure.", "Battre le second œuf (ou seulement son jaune) avec le reste du lait et badigeonner la pâte.", "Saupoudrer de sucre complet et de cannelle, parsemer de noisettes de beurre, puis cuire 25 minutes à 150 °C. Déguster tiède."]
  },
  {
    id: "tarte-aux-brocolis-et-au-jambon", nom: "Tarte aux brocolis et au jambon", cuisine: "française", type: "plat",
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
    id: "tarte-aux-courgettes-et-aux-carottes", nom: "Tarte aux courgettes et aux carottes", cuisine: "française", type: "plat",
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
    id: "tarte-aux-tomates-et-au-gouda", nom: "Tarte aux tomates et au gouda", cuisine: "française", type: "plat",
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
    id: "tarte-feuilletee-aux-champignons", nom: "Tarte feuilletée aux champignons", cuisine: "française", type: "plat",
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
    id: "tarte-milanaise", nom: "Tarte milanaise (pâte sablée, gelée de groseilles et crème d'amande)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Milanaise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMilanaise",
    ingredients: [
      { id: "farine", quantite: 100, unite: "g" },
      { id: "sucre", quantite: 32, unite: "g" },
      { id: "extrait-de-vanille", quantite: 1, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "poudre-d-amandes", quantite: 65, unite: "g" },
      { id: "fecule", quantite: 15, unite: "g" },
      { id: "gelee-de-groseilles", quantite: 70, unite: "g", ou: { id: "confiture", quantite: 70, unite: "g" } },
      { id: "amandes", quantite: 15, unite: "g" }
    ],
    etapes: ["Pour un moule à tarte d'environ 18 cm. Pâte : mélanger la farine, 15 g de sucre, la vanille, une pincée de sel et un peu de zeste de citron.", "Creuser un puits, y mettre le beurre en morceaux et 1 œuf battu à la fourchette. Mélanger vite du bout des doigts, former une boule, la fariner et la laisser reposer 30 minutes au frais sous un linge.", "Mélanger la poudre d'amandes, 17 g de sucre et la fécule (maïzena).", "Étaler la pâte et en garnir un moule à tarte beurré. Étaler la gelée de groseilles sur le fond et mettre au frais.", "Séparer le second œuf. Incorporer le jaune au mélange d'amandes. Monter le blanc en neige ferme avec une pincée de sel et l'incorporer délicatement en soulevant la masse.", "Étaler cette garniture sur la gelée. Cuire 20 minutes à four chaud, 230 °C.", "Répartir les amandes effilées sur la tarte et poursuivre la cuisson 10 minutes."]
  },
  {
    id: "tarte-provencale", nom: "Tarte provençale (aubergine, poivrons et tomates)", cuisine: "française", type: "plat",
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
    id: "tarte-tatin", nom: "Tarte Tatin (tarte renversée aux pommes caramélisées)", cuisine: "française", type: "dessert",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Tarte Tatin",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_Tatin",
    ingredients: [
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "pomme", quantite: 3, unite: "pièce" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "sucre", quantite: 60, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "cannelle", quantite: 1, unite: "g", optionnel: true }
    ],
    etapes: ["Pour un petit moule à manqué d'environ 16 cm. Mettre 40 g de sucre et la moitié du beurre dans le moule et le poser sur le feu jusqu'à obtenir un caramel.", "Quand le caramel commence à brunir, retirer le moule du feu et le poser sur un fond d'eau froide pour arrêter la cuisson.", "Peler les pommes, les épépiner et les couper en quartiers. Les disposer au fond du moule en les faisant se chevaucher, en laissant un espace avec le bord.", "Saupoudrer de 20 g de sucre (et de cannelle si on veut), arroser de quelques gouttes de jus de citron et parsemer du reste de beurre en petits morceaux.", "Cuire un peu sur le feu, 5 minutes environ, pour que le jus des pommes et le caramel se mélangent : c'est ce qui donne ce goût si particulier.", "Étaler la pâte et la piquer à la fourchette. La poser sur les pommes, faire un ourlet sur les bords et percer une petite cheminée au centre.", "Cuire 30 minutes à 210 °C, puis attendre 5 à 10 minutes avant de démouler.", "Se déguste tiède, nature ou avec de la crème fouettée ou une boule de glace à la vanille."]
  },
  {
    id: "terrine-de-poivrons-au-chevre", nom: "Terrine de poivrons au chèvre", cuisine: "française", type: "entree",
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
    id: "ti-punch", nom: "Ti-punch (cocktail antillais au rhum et au citron vert)", cuisine: "française", type: "boisson",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Ti-punch",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FTi-punch",
    ingredients: [
      { id: "rhum", quantite: 120, unite: "ml" },
      { id: "sucre", quantite: 10, unite: "g" },
      { id: "citron-vert", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Versez le sucre au fond de deux verres (une petite cuillerée par verre).", "Coupez le citron vert en deux grosses rondelles et pressez-en une dans chaque verre.", "Ajoutez 6 cl de rhum blanc par verre.", "Mélangez bien, surtout avant d'ajouter de la glace (les glaçons empêchent le sucre de bien se dissoudre). La glace est facultative."]
  },
  {
    id: "tian-de-courgettes-au-riz", nom: "Tian de courgettes au riz", cuisine: "française", type: "plat",
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
    id: "tian-provencal", nom: "Tian provençal", cuisine: "française", type: "accompagnement",
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
    id: "tomates-a-la-provencale", nom: "Tomates à la provençale", cuisine: "française", type: "accompagnement",
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
    id: "veloute-de-champignons-aux-lardons", nom: "Velouté de champignons aux lardons", cuisine: "française", type: "soupe",
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
    id: "welsh-facon-nord", nom: "Welsh (cheddar fondu à la bière, façon Nord)", cuisine: "française", type: "plat",
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
