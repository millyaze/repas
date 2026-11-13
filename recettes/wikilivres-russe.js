// ============================================================
// RECETTES : cuisine russe, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "bortsch-a-la-creme", nom: "Bortsch à la crème (soupe de bœuf, betterave et crème aigre)", cuisine: "russe", type: "soupe",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "Wikilivres", idSource: "Bortsch à la crème",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBortsch_%C3%A0_la_cr%C3%A8me",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 350, unite: "g" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "chou-rouge", quantite: 100, unite: "g" },
      { id: "champignons", quantite: 70, unite: "g" },
      { id: "betterave-cuite", quantite: 170, unite: "g" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "eau", quantite: 800, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Parer et émincer le céleri, laver et émincer le poireau, le chou rouge et les champignons, puis couper la viande en cubes.", "Verser l'eau dans une marmite, y mettre la viande et les légumes préparés, saler et poivrer. Porter à ébullition, écumer, puis baisser le feu.", "Couvrir et cuire 2 heures.", "Peler la betterave et la couper en petits dés, puis la mettre dans la marmite 30 minutes avant la fin de la cuisson.", "Fouetter ensemble la crème et un peu de jus de citron : c'est la crème aigre, à servir bien froide.", "Verser le bortsch dans une soupière, ajouter le persil haché et remuer. Servir avec la crème aigre."]
  }
]);
