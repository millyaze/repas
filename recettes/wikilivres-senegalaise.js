// ============================================================
// RECETTES : cuisine sénégalaise, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "poulet-yassa", nom: "Poulet yassa (poulet aux oignons et à la moutarde)", cuisine: "sénégalaise",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "Wikilivres", idSource: "Poulet yassa",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoulet_yassa",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "moutarde", quantite: 80, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "huile-d-arachide", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les 2 cuisses de poulet en morceaux.", "Dans une casserole, mélanger le poulet avec l'ail haché, ½ cube de bouillon émietté, la moitié de la moutarde (40 g), du sel, du poivre et un peu de noix de muscade. Laisser mariner 30 min.", "Poser le poulet sur une plaque allant au four et le faire griller environ 30 min sous le gril du four.", "Pendant ce temps, émincer 2 gros oignons et les faire suer quelques minutes dans l'huile d'arachide, puis baisser le feu pour qu'ils ne colorent pas.", "Ajouter le poulet grillé et le reste de la moutarde, et mélanger. Couvrir d'eau froide juste à hauteur du poulet (environ 300 ml) et laisser mijoter 15 min.", "Ajouter le reste du cube de bouillon et cuire encore 30 min à petit frémissement. Rectifier l'assaisonnement.", "Servir avec du riz blanc, de la banane plantain ou de l'igname bouillie."]
  }
]);
