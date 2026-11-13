// ============================================================
// RECETTES : cuisine marocaine, reprises de Wikilivres (5 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "batbout", nom: "Batbouts (petits pains marocains cuits à la poêle)", cuisine: "marocaine", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Batbout",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBatbout",
    ingredients: [
      { id: "farine", quantite: 50, unite: "g" },
      { id: "semoule", quantite: 125, unite: "g" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "sucre", quantite: 5, unite: "g" }
    ],
    etapes: ["Pour environ 6 batbouts. Dans un bol, délayer la levure et le sucre avec un peu d'eau tiède et laisser gonfler 5 minutes.", "Dans un plat, mélanger la farine, la semoule, le sel et la levure activée.", "Ajouter le reste de l'eau petit à petit en pétrissant, puis laisser reposer 30 minutes.", "Dégazer la pâte, former des boules de même taille et les aplatir.", "Laisser reposer 1 heure.", "Cuire à feu moyen dans une poêle, environ 5 minutes de chaque côté."]
  },
  {
    id: "bouches-de-dames", nom: "Bouches de dames (gâteau moelleux aux amandes et à l'orange)", cuisine: "marocaine", type: "dessert",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Bouches de dames",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBouches_de_dames",
    ingredients: [
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 65, unite: "g" },
      { id: "poudre-d-amandes", quantite: 65, unite: "g" },
      { id: "farine", quantite: 10, unite: "g" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "sucre-glace", quantite: 10, unite: "g", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 200 °C. Séparer les blancs des jaunes.", "Battre les jaunes avec le sucre environ 5 minutes, puis ajouter le zeste râpé de l'orange.", "Incorporer la poudre d'amandes et la farine.", "Monter les blancs en neige avec une pincée de sel et les incorporer délicatement.", "Verser dans un petit moule rond (environ 18 cm) et cuire 25 à 30 minutes.", "Laisser refroidir, saupoudrer de sucre glace et couper en petits carrés."]
  },
  {
    id: "briouats-au-boeuf-et-a-la-coriandre", nom: "Briouats au bœuf et à la coriandre", cuisine: "marocaine", type: "entree",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Briouats de boeuf à la coriandre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBriouats_de_boeuf_%C3%A0_la_coriandre",
    ingredients: [
      { id: "feuille-de-brick", quantite: 4, unite: "pièce" },
      { id: "boeuf-hache", quantite: 170, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "coriandre", quantite: 10, unite: "g" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 200, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Peler et hacher l'ail et l'oignon. Rincer la coriandre, la sécher dans du papier absorbant et la ciseler.", "Dans une poêle, chauffer l'huile d'olive et faire revenir l'ail et l'oignon.", "Quand ils colorent, ajouter la coriandre puis les œufs un par un, sans cesser de mélanger.", "Ajouter la viande et le cumin. Saler, poivrer et cuire encore 10 min en mélangeant bien.", "Couper les feuilles de brick en deux. Déposer une cuillerée de farce sur chaque moitié et rouler en forme de gros cigare.", "Chauffer l'huile de friture dans une poêle et frire les briouats jusqu'à ce qu'ils soient bien dorés. Les égoutter sur du papier absorbant avant de servir."]
  },
  {
    id: "feves-au-cumin", nom: "Fèves au cumin", cuisine: "marocaine", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 120, portions: 2,
    source: "Wikilivres", idSource: "Fèves au cumin",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FF%C3%A8ves_au_cumin",
    ingredients: [
      { id: "feves", quantite: 250, unite: "g" },
      { id: "cumin", quantite: 4, unite: "g" },
      { id: "piment-de-cayenne", quantite: 1, unite: "g" },
      { id: "paprika", quantite: 2, unite: "g", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "eau", quantite: 1000, unite: "ml" }
    ],
    etapes: ["La veille : faire tremper les fèves sèches 24 h dans un grand volume d'eau.", "Égoutter, mettre les fèves dans une cocotte, les couvrir d'eau froide et cuire jusqu'à ce qu'elles soient tendres à cœur (vérifier avec une fourchette).", "Ajouter le sel, la moitié du cumin (en grains de préférence), le piment de Cayenne et 2 cuillères à café d'huile d'olive. Laisser cuire à petit feu au moins 45 min.", "Égoutter les fèves, les saupoudrer de paprika (doux ou piquant), du reste du cumin (en poudre) et d'un filet d'huile d'olive.", "Laisser refroidir et servir en petites coupelles, à l'apéritif."]
  },
  {
    id: "maakouda", nom: "Maâkouda (beignets de pommes de terre aux herbes)", cuisine: "marocaine", type: "entree",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Maâkouda",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMa%C3%A2kouda",
    ingredients: [
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "persil", quantite: 4, unite: "g" },
      { id: "coriandre", quantite: 4, unite: "g" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "farine", quantite: 30, unite: "g" },
      { id: "huile-de-tournesol", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher 300 g de pommes de terre, les cuire dans l'eau salée puis les écraser en purée.", "Dans un saladier, mélanger la purée avec 1 œuf, le persil et la coriandre hachés, le cumin et l'ail écrasé. Saler, poivrer et bien mélanger.", "Former des boulettes et les aplatir légèrement avec les doigts. Les tremper une à une dans le second œuf battu, puis les fariner des deux côtés en tapotant pour retirer l'excédent de farine.", "Plonger les maâkoudas dans l'huile de friture bien chaude et les faire dorer des deux côtés. Égoutter sur du papier absorbant."]
  }
]);
