// ============================================================
// RECETTES : cuisine belge, reprises de Wikilivres (3 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "carbonade-flamande", nom: "Carbonade flamande (bœuf à la bière)", cuisine: "belge", type: "plat",
    difficulte: "moyen", tempsMinutes: 135, portions: 2,
    source: "Wikilivres", idSource: "Carbonade flamande",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCarbonade_flamande",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 330, unite: "g", ou: { id: "epaule-de-porc", quantite: 330, unite: "g" } },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "saindoux", quantite: 15, unite: "g", ou: { id: "beurre", quantite: 15, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "biere", quantite: 110, unite: "ml" },
      { id: "sucre-roux", quantite: 10, unite: "g", ou: { id: "cassonade", quantite: 10, unite: "g" } },
      { id: "pain-d-epices", quantite: 35, unite: "g" },
      { id: "moutarde", quantite: 10, unite: "g" }
    ],
    etapes: ["Couper la viande (joue ou paleron de bœuf, ou porc à braiser) en gros cubes et les rouler dans la farine.", "Chauffer le saindoux (ou le beurre) dans une cocotte et y dorer les morceaux de viande.", "Ajouter l'oignon haché, le thym et le laurier (en petit bouquet), saler et poivrer. Couvrir avec 110 ml de bière brune et ajouter le sucre roux (idéalement de la cassonade blonde).", "Couvrir et laisser mijoter à feu doux 1 h 30 (plus longtemps si vous avez le temps, en rallongeant avec un peu d'eau ou de bière).", "Tartiner le pain d'épices de moutarde, l'émietter dans la sauce pour l'épaissir et cuire encore quelques minutes.", "Servir avec des frites ou des pommes de terre vapeur."]
  },
  {
    id: "salade-liegeoise", nom: "Salade liégeoise (haricots verts, pommes de terre et lard fumé)", cuisine: "belge", type: "plat",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Salade liégeoise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSalade_li%C3%A9geoise",
    ingredients: [
      { id: "haricots-verts", quantite: 500, unite: "g" },
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "poitrine-fumee", quantite: 125, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "vinaigre", quantite: 30, unite: "ml" },
      { id: "moutarde-a-l-ancienne", quantite: 8, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire 500 g de pommes de terre nouvelles (rattes de préférence) avec la peau dans l'eau salée. Séparément, cuire 500 g de haricots verts fins (ou haricots princesse) dans l'eau salée en les gardant fermes.", "Frotter un grand saladier avec la gousse d'ail. Y mettre les haricots égouttés, puis les pommes de terre épluchées et coupées en cubes ou en rondelles.", "Couper 125 g de lard fumé en dés, les faire revenir à la poêle et les ajouter au saladier.", "Parsemer de persil haché et d'oignon coupé en fines rondelles (ou faire d'abord blondir l'oignon dans le gras du lard).", "Déglacer la poêle avec 2 cuillères à soupe de vinaigre (et, si on le souhaite, la moutarde à l'ancienne), laisser réduire 2 à 3 min. Verser ce vinaigre chaud dans le saladier, saler, poivrer et bien mélanger."]
  },
  {
    id: "tourteline", nom: "Tourteline (tarte aux poireaux et à la truite)", cuisine: "belge", type: "plat",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Tourteline",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTourteline",
    ingredients: [
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "truite", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 200, unite: "ml" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Étaler la pâte feuilletée dans un petit moule à tarte (environ 22 cm), la piquer et faire cuire le fond à blanc.", "Pendant ce temps, émincer le poireau et le faire cuire doucement avec le beurre, du sel et du poivre.", "Pocher la truite (environ 250 g) dans un court-bouillon. Quand elle est cuite, retirer la peau et les arêtes, puis la couper en petits morceaux.", "Répartir le poireau et la truite sur le fond de tarte cuit. Battre 2 œufs avec 200 ml de lait, du sel et du poivre, puis verser sur la garniture.", "Cuire au four 15 à 20 min."]
  }
]);
