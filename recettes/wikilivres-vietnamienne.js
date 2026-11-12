// ============================================================
// RECETTES : cuisine vietnamienne, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "cabillaud-au-nuoc-mam", nom: "Cabillaud au nuoc-mâm", cuisine: "vietnamienne",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Cabillaud au Nước mắm",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCabillaud_au_N%C6%B0%E1%BB%9Bc_m%E1%BA%AFm",
    ingredients: [
      { id: "cabillaud", quantite: 300, unite: "g", ou: { id: "poisson-blanc", quantite: 300, unite: "g" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "huile-d-arachide", quantite: 15, unite: "ml" },
      { id: "sauce-poisson", quantite: 35, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "persil", quantite: 5, unite: "g", ou: { id: "coriandre", quantite: 5, unite: "g" } }
    ],
    etapes: ["Pocher les filets de cabillaud (ou de colin) environ 25 min dans 500 ml de bouillon (eau et bouillon cube).", "Les égoutter et les écraser jusqu'à obtenir une sorte de pâte.", "Chauffer l'huile d'arachide dans une poêle, y mettre le poisson et le cuire à feu moyen en remuant.", "Après 5 min, ajouter le nuoc-mâm et le poivre, et poursuivre la cuisson 10 min.", "Au moment de servir, parsemer de persil ou de coriandre hachés. Servir avec du riz nature ou du pain."]
  }
]);
