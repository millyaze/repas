// ============================================================
// RECETTES : cuisine portugaise, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "caldo-verde", nom: "Caldo verde (soupe portugaise au chou et au chorizo)", cuisine: "portugaise",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Caldo Verde",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCaldo_Verde",
    ingredients: [
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "chou", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "chorizo", quantite: 100, unite: "g", ou: { id: "saucisse", quantite: 1, unite: "pièce" } },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 750, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Dans un faitout, mettre 750 ml d'eau et 2 cuillères à soupe d'huile. Y cuire 20 min à feu moyen le chorizo entier, les pommes de terre épluchées, l'oignon et l'ail pelés.", "Pendant ce temps, laver le chou vert et le couper en fines lanières.", "Retirer le chorizo. Écraser ou mixer les pommes de terre, l'oignon et l'ail, et les remettre dans le bouillon. Ajouter le chou et saler.", "Cuire encore 20 min. Couper le chorizo en rondelles.", "Dans chaque bol, mettre quelques rondelles de chorizo et un filet d'huile, puis verser la soupe bouillante par-dessus."]
  }
]);
