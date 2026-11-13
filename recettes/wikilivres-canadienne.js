// ============================================================
// RECETTES : cuisine canadienne, reprises de Wikilivres (4 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "cretons-quebecois-porc-hache", nom: "Cretons (tartinade de porc haché aux épices douces)", cuisine: "canadienne", type: "entree",
    difficulte: "facile", tempsMinutes: 80, portions: 2,
    source: "Wikilivres", idSource: "Cretons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCretons",
    ingredients: [
      { id: "pain", quantite: 1, unite: "tranche" },
      { id: "lait", quantite: 125, unite: "ml" },
      { id: "porc-hache", quantite: 225, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper la mie de pain en cubes et les faire tremper dans le lait.", "Hacher finement l'oignon et l'ail.", "Dans une casserole, faire revenir l'oignon et l'ail.", "Ajouter le porc haché et le cuire jusqu'à ce qu'il ne soit plus rosé.", "Ajouter la mie de pain avec son lait, la cannelle, la muscade, le sel et le poivre.", "Laisser cuire à feu très doux 1 heure en remuant régulièrement.", "Servir tiède ou froid, en tartinade sur du pain."]
  },
  {
    id: "ploye", nom: "Ploye (galettes acadiennes au sarrasin)", cuisine: "canadienne", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Ploye",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPloye",
    ingredients: [
      { id: "farine-de-sarrasin", quantite: 100, unite: "g" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "levure-chimique", quantite: 8, unite: "g" },
      { id: "eau", quantite: 150, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Mélanger les ingrédients secs : farine de sarrasin, farine, levure et sel.", "Ajouter 100 ml d'eau froide et mélanger. Laisser reposer 5 minutes.", "Ajouter 50 ml d'eau bouillante et brasser. Si la pâte est trop épaisse, ajouter un peu d'eau froide.", "Cuire les galettes dans une poêle bien chaude."]
  },
  {
    id: "tarte-aux-corn-flakes", nom: "Tarte aux corn flakes (croûte de céréales, crème et meringue)", cuisine: "canadienne", type: "dessert",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Tarte aux corn flakes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTarte_aux_corn_flakes",
    ingredients: [
      { id: "corn-flakes", quantite: 55, unite: "g", ou: { id: "riz-souffle", quantite: 55, unite: "g" } },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "sucre", quantite: 130, unite: "g" },
      { id: "lait", quantite: 300, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "fecule", quantite: 15, unite: "g" },
      { id: "extrait-de-vanille", quantite: 2, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Huiler légèrement un petit moule (environ 18 à 20 cm). La recette d'origine est prévue pour un grand moule : ici, on la divise par deux.", "Émietter les corn flakes avec les mains. Les mélanger avec 40 g de sucre et le beurre fondu.", "Presser ce mélange au fond du moule et cuire 10 minutes. Laisser refroidir.", "Chauffer le lait avec 75 g de sucre. Séparer les œufs.", "Mélanger les 2 jaunes avec la fécule et la vanille, puis y verser peu à peu un peu de lait chaud pour ne pas cuire les jaunes.", "Reverser le tout dans la casserole et cuire en remuant jusqu'à épaississement. Verser sur la croûte refroidie et laisser refroidir.", "Monter les 2 blancs en neige avec les 15 g de sucre restants, puis les étaler sur la crème.", "Faire dorer 5 minutes au four à 180 °C, en surveillant bien."]
  },
  {
    id: "tire-de-la-sainte-catherine", nom: "Tire de la Sainte-Catherine (bonbons québécois à la mélasse)", cuisine: "canadienne", type: "dessert",
    difficulte: "difficile", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Tire de la Sainte-Catherine",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTire_de_la_Sainte-Catherine",
    ingredients: [
      { id: "melasse", quantite: 85, unite: "g" },
      { id: "sirop-de-mais", quantite: 85, unite: "g", ou: { id: "glucose", quantite: 85, unite: "g" } },
      { id: "cassonade", quantite: 100, unite: "g" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "vinaigre", quantite: 8, unite: "ml" },
      { id: "bicarbonate-de-soude", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une casserole, mettre la mélasse, le sirop de maïs, la cassonade, le sucre, le vinaigre et la moitié du beurre (15 g). Garder le bicarbonate de côté.", "Faire bouillir à feu doux jusqu'à 140 °C. Sans thermomètre de confiserie, tester : une goutte versée dans un bol d'eau froide doit former une boule. Compter 5 à 10 minutes de cuisson en remuant.", "À 140 °C, ajouter le bicarbonate. Attention : le mélange triple de volume.", "Verser dans un bol beurré et laisser refroidir jusqu'à pouvoir toucher la tire sans se brûler.", "Se beurrer les mains avec le beurre restant, puis pétrir : étirer la pâte, la plier en deux, et recommencer jusqu'à ce qu'elle soit dorée, presque blanche.", "Étirer et tordre la tire en bandes, puis la couper en petits morceaux aux ciseaux.", "Poser sur une assiette beurrée ou emballer dans du papier ciré."]
  }
]);
