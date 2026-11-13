// ============================================================
// RECETTES : cuisine japonaise, reprises de Wikilivres (2 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "black-samurai", nom: "Black Samurai (shooter de saké et de sauce soja)", cuisine: "japonaise", type: "boisson",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Black Samurai",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FBlack_Samurai",
    ingredients: [
      { id: "sake", quantite: 40, unite: "ml" },
      { id: "sauce-soja", quantite: 40, unite: "ml" }
    ],
    etapes: ["Versez dans chacun de deux shooters 2 cl de saké et 2 cl de sauce soja.", "Servez aussitôt."]
  },
  {
    id: "tamagozake", nom: "Tamagozake (saké chaud à l'œuf et au miel)", cuisine: "japonaise", type: "boisson",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Tamagozake",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FTamagozake",
    ingredients: [
      { id: "sake", quantite: 80, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "miel", quantite: 55, unite: "g" }
    ],
    etapes: ["Dans une petite casserole, mettez le saké (4 cl par verre), les œufs et le miel (environ 2 cl par verre).", "Chauffez doucement en remuant sans cesse au fouet, sans laisser cuire l'œuf en omelette.", "Versez dans deux verres à grog et servez chaud."]
  }
]);
