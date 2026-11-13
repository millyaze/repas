// ============================================================
// RECETTES : cuisine arménienne, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "taboule-armenien", nom: "Taboulé arménien (boulgour fin, tomates et menthe)", cuisine: "arménienne", type: "entree",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Taboulé arménien",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTaboul%C3%A9_arm%C3%A9nien",
    ingredients: [
      { id: "boulgour", quantite: 70, unite: "g" },
      { id: "citron-vert", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 50, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce", ou: { id: "echalote", quantite: 2, unite: "pièce" } },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "menthe", quantite: 5, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Verser le boulgour fin dans un saladier. Ajouter le jus de citron vert et l'huile d'olive.", "Mélanger et laisser gonfler 10 minutes.", "Hacher très fin l'oignon (ou les échalotes), les tomates, le concombre (une moitié suffit pour une petite quantité) et quelques feuilles de salade (4 ou 5). Les incorporer.", "Hacher très fin la menthe et le persil, les ajouter.", "Saler et mélanger."]
  }
]);
