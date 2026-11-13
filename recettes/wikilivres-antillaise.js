// ============================================================
// RECETTES : cuisine antillaise, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "acras-de-rouget", nom: "Acras de rouget barbet (beignets de poisson)", cuisine: "antillaise", type: "entree",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Acras de rouget",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FAcras_de_rouget",
    ingredients: [
      { id: "rouget-barbet", quantite: 200, unite: "g", ou: { id: "poisson-blanc", quantite: 200, unite: "g" } },
      { id: "pomme-de-terre", quantite: 50, unite: "g" },
      { id: "farine", quantite: 80, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 40, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-de-cayenne", quantite: 1, unite: "g" },
      { id: "huile-de-tournesol", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "sauce-tomate", quantite: 100, unite: "g", optionnel: true }
    ],
    etapes: ["Mélanger 70 g de farine avec l'œuf, puis ajouter peu à peu le lait pour obtenir une pâte molle. Saler, poivrer et laisser reposer au moins 2 heures.", "Éplucher la pomme de terre, la cuire dans de l'eau salée, l'égoutter et l'écraser à la fourchette.", "Effeuiller le poisson. Le mélanger avec la pomme de terre, l'oignon haché, l'ail écrasé et le piment de Cayenne, puis incorporer le tout à la pâte.", "Fariner les mains et former de petites boules avec la préparation.", "Les plonger dans l'huile bien chaude et les retirer dès qu'elles sont dorées.", "Servir bien chaud avec une sauce tomate tiède ou froide."]
  }
]);
