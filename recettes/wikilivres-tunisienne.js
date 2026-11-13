// ============================================================
// RECETTES : cuisine tunisienne, reprises de Wikilivres (3 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "maaqouda", nom: "Maaqouda (galettes frites de pommes de terre)", cuisine: "tunisienne", type: "entree",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Maaqouda",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMaaqouda",
    ingredients: [
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "cumin", quantite: 3, unite: "g", ou: { id: "curry-en-poudre", quantite: 3, unite: "g" } },
      { id: "safran", quantite: 1, unite: "sachet", optionnel: true },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "farine", quantite: 30, unite: "g" },
      { id: "huile-de-tournesol", quantite: 150, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre et les cuire dans l'eau bouillante. Les égoutter, puis les écraser à la fourchette.", "Ajouter l'œuf, le persil haché, le cumin (ou le curry), le safran, le sel, le poivre et l'ail haché (ou le petit oignon).", "Bien mélanger, former des boules, puis les aplatir.", "Les rouler dans la farine et les faire frire dans l'huile chaude, jusqu'à ce qu'elles soient dorées des deux côtés.", "En Tunisie, on les fait plus grandes et plus épaisses, rondes comme une crêpe. On peut aussi ajouter de la viande hachée grossièrement."]
  },
  {
    id: "molokheya-tunisienne", nom: "Molokheya (ragoût de bœuf à la corète)", cuisine: "tunisienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 200, portions: 2,
    source: "Wikilivres", idSource: "Molokheya",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMolokheya",
    ingredients: [
      { id: "mloukhia-corete", quantite: 50, unite: "g" },
      { id: "boeuf-a-braiser", quantite: 300, unite: "g", ou: { id: "epaule-d-agneau", quantite: 300, unite: "g" } },
      { id: "huile-d-olive", quantite: 60, unite: "ml" },
      { id: "ail", quantite: 3, unite: "gousse" },
      { id: "ras-el-hanout", quantite: 8, unite: "g" },
      { id: "harissa", quantite: 3, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "eau", quantite: 750, unite: "ml" }
    ],
    etapes: ["Écraser l'ail et le mélanger avec la harissa, le sel, le ras el hanout et un peu d'huile d'olive.", "Enrober la viande de ce mélange et la laisser mariner au frais plusieurs heures.", "Faire revenir la viande dans une grande marmite avec de l'huile d'olive.", "Ajouter la poudre de corète, l'eau tiède, le reste de l'huile, un peu de sel, de ras el hanout et de harissa. Bien remuer.", "Porter à ébullition, puis laisser mijoter à feu doux plusieurs heures, jusqu'à ce que la sauce soit onctueuse (comme de la crème liquide).", "Se mange avec du pain que l'on trempe dans la sauce, ou avec du riz."]
  },
  {
    id: "salade-mechouia-pommes-de-terre", nom: "Salade mechouia aux pommes de terre (salade tunisienne de poivrons grillés)", cuisine: "tunisienne", type: "entree",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Salade mechouia aux pommes de terre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSalade_mechouia_aux_pommes_de_terre",
    ingredients: [
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "salade-mechouia", quantite: 60, unite: "g" },
      { id: "olives-noires", quantite: 20, unite: "g" }
    ],
    etapes: ["Éplucher les pommes de terre, les couper en cubes et les cuire 15 minutes à l'eau bouillante. Les égoutter et les laisser refroidir.", "Les mélanger avec la salade mechouia et les olives noires.", "Servir frais."]
  }
]);
