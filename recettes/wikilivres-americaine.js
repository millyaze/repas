// ============================================================
// RECETTES : cuisine américaine, reprises de Wikilivres (3 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "chicken-supreme", nom: "Chicken supreme (poulet au miel, à la moutarde et au curry)", cuisine: "américaine",
    difficulte: "facile", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Chicken supreme",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FChicken_supreme",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "miel", quantite: 85, unite: "g" },
      { id: "moutarde", quantite: 30, unite: "g" },
      { id: "curry-en-poudre", quantite: 3, unite: "g" }
    ],
    etapes: ["Dans une poêle, mélanger le beurre fondu, le miel, la moutarde et le curry.", "Ajouter les blancs de poulet (ou de dinde) et bien les enrober de sauce.", "Cuire 45 min à feu moyen en arrosant régulièrement et en retournant la viande à mi-cuisson.", "Servir avec une salade et des pommes de terre sautées."]
  },
  {
    id: "galettes-de-tofu", nom: "Galettes de tofu (hamburger végétal)", cuisine: "américaine",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Hamburger au Tofu (2)",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FHamburger_au_Tofu_(2)",
    ingredients: [
      { id: "tofu", quantite: 200, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "pain", quantite: 4, unite: "tranche" },
      { id: "levure-maltee", quantite: 20, unite: "g" },
      { id: "concentre-de-tomates", quantite: 10, unite: "g" },
      { id: "curry-en-poudre", quantite: 2, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "huile-de-tournesol", quantite: 20, unite: "ml" }
    ],
    etapes: ["Cuire 2 pommes de terre (environ 300 g) à l'eau, puis les éplucher.", "Mixer ensemble le tofu (200 g), la gousse d'ail, 2 cl de jus de citron (environ ½ citron), l'oignon, les pommes de terre, les 4 tranches de pain, la levure maltée (20 g), le concentré de tomates (10 g), du sel, du poivre et du curry.", "Modeler de petites galettes avec la préparation.", "Les cuire quelques minutes de chaque côté dans l'huile chaude."]
  },
  {
    id: "sandwich-au-beurre-de-cacahuete-et-a-la-banane", nom: "Sandwich au beurre de cacahuète et à la banane", cuisine: "américaine",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Sandwich au beurre d’arachide et à la banane",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSandwich_au_beurre_d%E2%80%99arachide_et_%C3%A0_la_banane",
    ingredients: [
      { id: "beurre-de-cacahuete", quantite: 30, unite: "g" },
      { id: "pain", quantite: 2, unite: "tranche" },
      { id: "banane", quantite: 2, unite: "pièce" }
    ],
    etapes: ["Étaler le beurre de cacahuète sur les 2 tranches de pain épaisses.", "Couper les bananes en rondelles et les poser sur le beurre de cacahuète.", "Couper chaque tartine en deux ou en quatre."]
  }
]);
