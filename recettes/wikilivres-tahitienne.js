// ============================================================
// RECETTES : cuisine tahitienne, reprises de Wikilivres (2 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "poulet-fafa", nom: "Poulet fafa (poulet, épinards et lait de coco)", cuisine: "tahitienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Poulet fafa",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoulet_fafa",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 3, unite: "pièce" },
      { id: "epinards", quantite: 350, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "lait-de-coco", quantite: 100, unite: "ml" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "huile-d-arachide", quantite: 30, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 50, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Désosser les cuisses de poulet et les couper en gros morceaux.", "Éplucher et émincer l'oignon, hacher l'ail, râper le gingembre et la muscade, laver et équeuter les épinards.", "Faire chauffer la moitié de l'huile dans une sauteuse et y faire fondre l'oignon 5 minutes à feu moyen. Le retirer et le réserver.", "Ajouter le reste d'huile et faire dorer le poulet avec l'ail 5 minutes à feu vif, en le retournant.", "Remettre l'oignon, ajouter le gingembre, la muscade et le cube de bouillon émietté. Bien mélanger, mouiller avec l'eau, saler, poivrer et cuire 7 minutes à feu vif.", "Ajouter les épinards et cuire encore 5 minutes à feu vif, en remuant.", "Verser le lait de coco et cuire jusqu'au premier frémissement. Servir avec du riz (à l'ananas, selon la tradition)."]
  },
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
