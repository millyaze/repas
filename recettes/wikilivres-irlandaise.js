// ============================================================
// RECETTES : cuisine irlandaise, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "coddle", nom: "Coddle (ragoût dublinois de saucisses, bacon et pommes de terre)", cuisine: "irlandaise",
    difficulte: "facile", tempsMinutes: 90, portions: 2,
    source: "Wikilivres", idSource: "Coddle",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCoddle",
    ingredients: [
      { id: "saucisse", quantite: 3, unite: "pièce" },
      { id: "bacon", quantite: 5, unite: "tranche", ou: { id: "poitrine-fumee", quantite: 125, unite: "g" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce", optionnel: true },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "pomme-de-terre", quantite: 450, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Porter à ébullition 150 ml de bouillon (eau et bouillon cube, ou simplement de l'eau). Couper le bacon en morceaux de 3 cm.", "Cuire le bacon et les saucisses 5 min dans le bouillon, puis les retirer en gardant le bouillon. Couper chaque saucisse en 4 morceaux.", "Éplucher 450 g de pommes de terre et l'oignon, et les couper en tranches épaisses.", "Dans une casserole à bords hauts, faire une couche de pommes de terre, une couche d'oignon et la moitié du bacon et des saucisses. Recommencer, puis finir par une couche de pommes de terre. Saler et poivrer.", "Verser le bouillon et laisser mijoter à couvert et à feu doux environ 1 h."]
  }
]);
