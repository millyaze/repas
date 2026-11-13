// ============================================================
// RECETTES : cuisine autrichienne, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "apfelstrudel-feuillete", nom: "Apfelstrudel (feuilleté aux pommes râpées et raisins secs)", cuisine: "autrichienne", type: "dessert",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Apfelstrudel",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FApfelstrudel",
    ingredients: [
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "pomme", quantite: 3, unite: "pièce" },
      { id: "raisins-secs", quantite: 75, unite: "g" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "sucre", quantite: 40, unite: "g" },
      { id: "poudre-d-amandes", quantite: 8, unite: "g" },
      { id: "chapelure", quantite: 8, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "sucre-glace", quantite: 10, unite: "g", optionnel: true }
    ],
    etapes: ["Faire tremper les raisins secs dans de l'eau chaude. Préchauffer le four à 200 °C.", "Couper la pâte en deux. Poser une moitié sur une plaque ou dans un petit plat beurré, étaler la crème dessus en laissant 2 cm de bord.", "Mélanger les pommes râpées, les raisins égouttés, le sucre, la poudre d'amandes, la chapelure et la cannelle.", "Étaler ce mélange sur la pâte, humidifier les bords, recouvrir avec l'autre moitié et bien souder.", "Badigeonner de beurre fondu, enfourner et recommencer à beurrer le dessus toutes les 20 minutes pendant la cuisson (environ 40 à 60 minutes).", "Saupoudrer de sucre glace si on veut."]
  }
]);
