// ============================================================
// RECETTES : cuisine tahitienne, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "thon-cru-a-la-tahitienne", nom: "Thon cru à la tahitienne (poisson cru au citron vert et lait de coco)", cuisine: "tahitienne", type: "plat",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Thon cru à la tahitienne",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FThon_cru_%C3%A0_la_tahitienne",
    ingredients: [
      { id: "thon-frais", quantite: 330, unite: "g" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "sel", quantite: 5, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "citron-vert", quantite: 3, unite: "pièce" },
      { id: "oignon-nouveau", quantite: 1, unite: "pièce" },
      { id: "lait-de-coco", quantite: 130, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper le thon frais (rouge, blanc ou bonite, sans peau ni arêtes) en dés et le rincer à l'eau salée.", "Le laisser tremper 30 min au réfrigérateur dans 500 ml d'eau salée avec l'ail haché.", "Pendant ce temps, râper la carotte, couper la tomate en petits morceaux, émincer l'oignon nouveau et couper le concombre (garder un peu de concombre en julienne pour servir).", "Égoutter le poisson et le laisser « cuire » 15 min dans le jus des citrons verts, puis jeter le jus restant.", "Ajouter les légumes et le lait de coco, saler, poivrer, bien mélanger et servir très frais avec la julienne de concombre."]
  }
]);
