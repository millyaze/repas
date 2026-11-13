// ============================================================
// RECETTES : cuisine ivoirienne, reprises de Wikilivres (6 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "akpessi-igname", nom: "Akpessi (igname bouillie et sauce d'aubergines à la tomate)", cuisine: "ivoirienne", type: "plat",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Akpessi igname",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FAkpessi_igname",
    ingredients: [
      { id: "igname", quantite: 500, unite: "g" },
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "concentre-de-tomate", quantite: 5, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "huile-d-arachide", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher l'igname, la couper en morceaux et la cuire 15 à 20 minutes dans de l'eau salée. Vérifier la cuisson avec la pointe d'un couteau.", "Pendant ce temps, cuire l'aubergine à l'eau (20 à 30 minutes) dans une autre casserole. Ajouter la tomate fraîche, entaillée en petites croix pour pouvoir la peler ensuite.", "Égoutter les légumes cuits et retirer la peau de la tomate.", "Écraser l'ail et la moitié de l'oignon, et les mettre de côté. Écraser ensemble le piment, l'aubergine et la tomate.", "Dans une casserole, avec l'huile, faire revenir l'ail, le concentré de tomate et l'oignon écrasé pendant 5 minutes.", "Ajouter la purée d'aubergine et de tomate, 100 ml d'eau et l'autre moitié de l'oignon coupée en lamelles. Saler à son goût et laisser mijoter quelques minutes.", "Servir la sauce avec l'igname bouillie."]
  },
  {
    id: "claclo", nom: "Claclo (beignets de banane plantain)", cuisine: "ivoirienne", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Claclo",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FClaclo",
    ingredients: [
      { id: "banane-plantain", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "huile-de-tournesol", quantite: 200, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher 2 bananes plantain et les écraser au mortier, à la fourchette ou au mixeur.", "Ajouter 20 g de farine, un peu de sel, du piment en poudre si on le souhaite et environ 1 cuillère à café d'oignon haché, puis bien mélanger.", "Chauffer l'huile dans une poêle. Avec les doigts ou une cuillère à soupe, former de petites boules de pâte et les faire dorer de chaque côté, en les séparant à la fourchette pour qu'elles ne collent pas.", "Les retirer avec une écumoire en les pressant légèrement pour enlever l'excès d'huile, puis les égoutter sur du papier absorbant."]
  },
  {
    id: "guin-ivoirien", nom: "Gui'n (pâte de courge et jus de graines de palme)", cuisine: "ivoirienne", type: "plat",
    difficulte: "difficile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Gui'n",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGui'n",
    ingredients: [
      { id: "potiron", quantite: 700, unite: "g" },
      { id: "graines-de-palme", quantite: 200, unite: "g" },
      { id: "eau", quantite: 300, unite: "ml" }
    ],
    etapes: ["Nettoyer et fendre la courge. Retirer les grains, puis la couper en gros carrés.", "Nettoyer les graines de palme. Les mettre dans une casserole avec les morceaux de courge.", "Faire bouillir 20 minutes.", "Séparer la courge des graines et retirer sa peau.", "Écraser la courge dans un grand mortier, comme un foutou, jusqu'à obtenir une pâte compacte et homogène. La laisser dans le mortier, couvert.", "Piler les graines cuites dans un mortier. Récupérer la pulpe obtenue dans une casserole, ajouter l'eau et malaxer.", "Retirer les fibres et les noyaux. Bien filtrer le liquide dans une casserole propre.", "Verser ce liquide filtré sur la pâte de courge, mélanger avec une écumoire ou à la main.", "Le gui'n est prêt : il se mange à la main, de préférence directement dans le mortier."]
  },
  {
    id: "kedjenou-d-escargots", nom: "Kédjénou d'escargots (mijoté d'escargots aux tomates)", cuisine: "ivoirienne", type: "plat",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Kédjénou d'escargots",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FK%C3%A9dj%C3%A9nou_d'escargots",
    ingredients: [
      { id: "escargots", quantite: 5, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "gingembre-en-poudre", quantite: 2, unite: "g", optionnel: true },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Bien laver les escargots et les cuire 20 minutes à feu moyen dans une casserole avec 400 ml d'eau salée.", "Émincer l'oignon et le piment. Écraser une tomate et couper l'autre en morceaux.", "Ajouter un peu d'eau s'il n'y a plus de jus, puis les légumes.", "Ajouter le cube, un peu d'huile, une pincée de poivre et, si on en a, le gingembre en poudre.", "Cuire encore 20 minutes en secouant la casserole au moins 3 fois pour que le fond n'attache pas.", "Goûter une ou deux fois : rectifier l'assaisonnement et rajouter un demi-verre d'eau si besoin."]
  },
  {
    id: "riz-noir-ivoirien", nom: "Riz noir (riz aux champignons noirs, crevettes et poisson fumé)", cuisine: "ivoirienne", type: "plat",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Riz noir",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRiz_noir",
    ingredients: [
      { id: "champignons-noirs", quantite: 10, unite: "g" },
      { id: "riz", quantite: 125, unite: "g" },
      { id: "crevettes", quantite: 100, unite: "g" },
      { id: "haddock-fume", quantite: 100, unite: "g", ou: { id: "thon-en-boite", quantite: 1, unite: "boîte" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire tremper les champignons noirs dans de l'eau tiède. Garder l'eau de trempage.", "Chauffer un peu d'huile et de sel dans une casserole. Y faire revenir 5 minutes les crevettes et le poisson coupé en petits morceaux, avec un peu d'oignon, l'ail haché, du sel et la moitié du cube.", "Laisser mijoter 5 minutes, puis ajouter 200 ml d'eau pour que les crevettes parfument le liquide.", "Ajouter le riz lavé (et des légumes si on veut), puis l'eau des champignons et le complément d'eau nécessaire à la cuisson du riz.", "Rectifier l'assaisonnement avec du sel et, au besoin, l'autre moitié du cube.", "Laisser cuire 15 minutes à grand feu, puis 10 minutes à feu doux."]
  },
  {
    id: "sauce-pistache-pintade", nom: "Sauce pistache à la pintade (sauce ivoirienne à l'arachide)", cuisine: "ivoirienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 80, portions: 2,
    source: "Wikilivres", idSource: "Sauce pistache à la pintade",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_pistache_%C3%A0_la_pintade",
    ingredients: [
      { id: "pintade", quantite: 1, unite: "pièce" },
      { id: "cacahuetes", quantite: 75, unite: "g", ou: { id: "pistaches", quantite: 75, unite: "g" } },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 3, unite: "g" }
    ],
    etapes: ["Découper la pintade en morceaux. La faire bouillir 20 minutes avec 2 pincées de sel et 1 pincée de poivre dans 500 ml d'eau.", "Retirer les morceaux et garder le bouillon. Faire griller les morceaux de pintade dans un peu d'huile, puis les réserver en gardant l'huile.", "Dans une casserole, faire revenir les tomates coupées, l'oignon coupé, le persil, un peu de poivre, la moitié du cube et l'huile de grillade.", "Ajouter le piment frais et le bouillon. Verser peu à peu la poudre de « pistache » (en Côte d'Ivoire, ce mot désigne l'arachide) à la louche, en remuant doucement pour éviter les grumeaux.", "Ajouter l'ail écrasé en pâte et laisser mijoter 15 minutes à feu doux.", "Quand de l'huile apparaît à la surface de la sauce, ajouter l'autre moitié du cube, du sel et un peu d'eau. Laisser encore 10 minutes.", "Couper le feu, ajouter les morceaux de pintade grillés, et servir 5 minutes plus tard (avec du foutou d'igname ou de banane, par exemple)."]
  }
]);
