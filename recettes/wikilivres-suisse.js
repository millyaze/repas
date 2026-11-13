// ============================================================
// RECETTES : cuisine suisse, reprises de Wikilivres (3 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "basler-brunsli", nom: "Basler Brunsli (biscuits suisses au chocolat et aux amandes)", cuisine: "suisse", type: "dessert",
    difficulte: "moyen", tempsMinutes: 45, portions: 2,
    source: "Wikilivres", idSource: "Basler Brunsli",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBasler_Brunsli",
    ingredients: [
      { id: "sucre", quantite: 220, unite: "g" },
      { id: "poudre-d-amandes", quantite: 200, unite: "g", ou: { id: "noisettes", quantite: 200, unite: "g" } },
      { id: "chocolat-noir", quantite: 35, unite: "g" },
      { id: "cannelle", quantite: 4, unite: "g" },
      { id: "clous-de-girofle", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Râper le chocolat et le mélanger avec 200 g de sucre, la poudre d'amandes, la cannelle et le girofle moulu.", "Battre légèrement les blancs d'œufs avec un peu de jus de citron, les ajouter au mélange et travailler en pâte ferme.", "Sur une planche saupoudrée du reste de sucre, étaler la pâte sur 1 cm d'épaisseur, par petites quantités.", "Découper des petites formes à l'emporte-pièce (environ 20 biscuits) et les poser sur une plaque beurrée et légèrement farinée.", "Laisser reposer 3 heures, puis cuire environ 20 minutes à 150 °C : ils doivent rester un peu moelleux à l'intérieur."]
  },
  {
    id: "fondue-fribourgeoise", nom: "Fondue fribourgeoise (fondue au vacherin)", cuisine: "suisse", type: "plat",
    difficulte: "moyen", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Fondue fribourgeoise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FFondue_fribourgeoise",
    ingredients: [
      { id: "vacherin-fribourgeois", quantite: 500, unite: "g" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "pain", quantite: 6, unite: "tranche", ou: { id: "pomme-de-terre", quantite: 500, unite: "g" } }
    ],
    etapes: ["Couper le fromage en dés et les mettre dans un caquelon métallique ou une casserole (pas de caquelon en terre).", "Ajouter environ 50 ml d'eau tiède et l'ail écrasé, puis chauffer à feu doux, juste assez pour faire fondre le fromage.", "Remuer lentement et sans arrêt avec une spatule, en partant du fond. Ne jamais dépasser 50 °C, sinon la fondue « tranche » et se sépare.", "Ajouter un peu d'eau tiède au fur et à mesure que le fromage fond, pour obtenir une texture crémeuse (on peut remplacer une partie de l'eau par un peu de vin blanc ou de kirsch).", "Quand tout est fondu, poivrer et chauffer un tout petit peu plus fort, jusqu'à une très légère vapeur. Servir aussitôt sur un réchaud à bougie, avec des morceaux de pain ou des pommes de terre cuites à l'eau."]
  },
  {
    id: "papet-vaudois", nom: "Papet vaudois (poireaux, pommes de terre et saucisse aux choux)", cuisine: "suisse", type: "plat",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Papet vaudois",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPapet_vaudois",
    ingredients: [
      { id: "poireau", quantite: 3, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "vin-blanc", quantite: 400, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "saucisse-aux-choux", quantite: 2, unite: "pièce", ou: { id: "saucisse", quantite: 2, unite: "pièce" } },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "creme-liquide", quantite: 200, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper 600 g de poireaux (environ 3) en tronçons de 2 à 3 cm et les faire suer, sans les dorer, dans un peu d'huile d'olive.", "Ajouter 400 ml de vin blanc et le cube de bouillon. Saler, poivrer et laisser mijoter 10 min.", "Poser les saucisses aux choux sur les poireaux et laisser mijoter.", "Couper 300 g de pommes de terre farineuses en cubes, les ajouter et cuire 15 à 20 min à feu moyen.", "Ajouter 200 ml de crème et laisser mijoter encore 5 min.", "Écraser grossièrement les pommes de terre, sans les réduire tout à fait en purée, et servir avec les saucisses."]
  }
]);
