// ============================================================
// RECETTES : cuisine russe (7 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "boeuf-stroganoff", nom: "Bœuf Stroganoff (bœuf, champignons et crème)", cuisine: "russe",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52834",
    ingredients: [
      { id: "filet-de-boeuf", quantite: 250, unite: "g", ou: { id: "steak-de-boeuf", quantite: 250, unite: "g" } },
      { id: "champignons", quantite: 125, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "farine", quantite: 8, unite: "g" },
      { id: "creme-fraiche", quantite: 75, unite: "ml" },
      { id: "moutarde", quantite: 8, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 50, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Émincer l'oignon et le faire fondre dans l'huile à feu moyen environ 15 min, en ajoutant un filet d'eau s'il accroche.", "Ajouter l'ail écrasé et cuire 2 à 3 min, puis le beurre. Quand il mousse, ajouter les champignons émincés et cuire 5 min jusqu'à ce qu'ils soient tendres. Saler, poivrer et réserver sur une assiette.", "Couper la viande en lanières et les rouler dans la farine mélangée à une pincée de sel et de poivre. Les faire dorer 3 à 4 min dans la poêle (avec un filet d'huile si elle est sèche).", "Remettre les oignons et les champignons. Délayer le bouillon cube dans l'eau chaude, le mélanger à la crème et à la moutarde, et verser dans la poêle. Cuire 5 min à feu moyen.", "Parsemer de persil haché et servir avec des pâtes larges ou du riz."]
  },
  {
    id: "blinis-au-sarrasin", nom: "Blinis au sarrasin", cuisine: "russe",
    difficulte: "moyen", tempsMinutes: 110, portions: 2,
    source: "TheMealDB", idSource: "53080",
    ingredients: [
      { id: "farine-de-sarrasin", quantite: 60, unite: "g" },
      { id: "farine", quantite: 85, unite: "g" },
      { id: "levure-de-boulanger", quantite: 3, unite: "g" },
      { id: "lait", quantite: 240, unite: "ml" },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "creme-fraiche", quantite: 50, unite: "ml", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Dans un saladier, mélanger les deux farines (sans farine de sarrasin, mettre 145 g de farine de blé), le sel et la levure.", "Creuser un puits, verser le lait tiède et fouetter jusqu'à obtenir une pâte lisse. Couvrir et laisser lever environ 1 h, jusqu'à ce qu'elle double de volume.", "Faire fondre 30 g de beurre et l'incorporer à la pâte avec le jaune d'œuf.", "Battre le blanc en neige ferme et l'incorporer délicatement à la pâte. Couvrir et laisser reposer 20 min.", "Chauffer un peu de beurre dans une poêle antiadhésive à feu moyen. Déposer de petites cuillerées de pâte sans les serrer, cuire environ 1 min jusqu'à ce que des bulles se forment, retourner et cuire 30 secondes.", "Garder les blinis au chaud sous un torchon et recommencer avec le reste de la pâte en rajoutant un peu de beurre. Servir avec de la crème (et du saumon fumé si on en a)."]
  },
  {
    id: "chtchi-soupe-de-chou", nom: "Chtchi (soupe russe au chou)", cuisine: "russe",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53077",
    ingredients: [
      { id: "chou", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 750, unite: "ml" },
      { id: "creme-fraiche", quantite: 40, unite: "ml", optionnel: true },
      { id: "aneth", quantite: 5, unite: "g", optionnel: true, ou: { id: "persil", quantite: 5, unite: "g" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire fondre le beurre dans une grande casserole à feu moyen et y faire revenir l'oignon haché jusqu'à ce qu'il devienne translucide.", "Ajouter le chou émincé, la carotte et le céleri en dés. Faire revenir 3 min en remuant souvent.", "Ajouter le laurier, l'eau et le bouillon cube émietté. Porter à ébullition, puis couvrir et laisser frémir 15 min.", "Ajouter les pommes de terre en dés, refaire bouillir puis laisser frémir à couvert environ 10 min, jusqu'à ce qu'elles soient tendres.", "Ajouter la tomate en morceaux, refaire bouillir et laisser frémir 5 min sans couvercle. Saler, poivrer et retirer le laurier.", "Servir avec une cuillerée de crème et de l'aneth haché."]
  },
  {
    id: "oukha-soupe-de-poisson", nom: "Oukha (soupe de poisson russe)", cuisine: "russe",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53079",
    ingredients: [
      { id: "cabillaud", quantite: 150, unite: "g", ou: { id: "poisson-blanc", quantite: 150, unite: "g" } },
      { id: "millet", quantite: 30, unite: "g", optionnel: true },
      { id: "saumon", quantite: 150, unite: "g" },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 700, unite: "ml" },
      { id: "laurier", quantite: 2, unite: "pièce" },
      { id: "aneth", quantite: 5, unite: "g", optionnel: true, ou: { id: "persil", quantite: 5, unite: "g" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une casserole, chauffer l'huile à feu moyen-vif et faire revenir l'oignon émincé jusqu'à ce qu'il commence à dorer. Ajouter les carottes en rondelles et cuire 4 min.", "Ajouter l'eau, le bouillon cube émietté, les pommes de terre en dés, le laurier et quelques grains de poivre. Saler et porter à ébullition.", "Baisser le feu, couvrir et cuire 10 min. Ajouter le millet rincé et cuire encore 15 min, jusqu'à ce que le millet et les pommes de terre soient tendres.", "Ajouter le cabillaud et le saumon en cubes, remuer doucement et laisser frémir 3 à 5 min : le poisson est cuit quand il devient opaque et s'effeuille facilement.", "Parsemer d'aneth haché et servir."]
  },
  {
    id: "plov-pilaf-d-agneau-aux-pruneaux", nom: "Plov (pilaf d'agneau aux pruneaux et raisins)", cuisine: "russe",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53083",
    ingredients: [
      { id: "gigot-d-agneau", quantite: 250, unite: "g" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "pruneaux", quantite: 60, unite: "g" },
      { id: "raisins-secs", quantite: 25, unite: "g", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "safran", quantite: 1, unite: "sachet", optionnel: true, ou: { id: "curcuma", quantite: 1, unite: "g" } },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre les pruneaux et les raisins dans un bol, couvrir d'eau et ajouter une cuillère de jus de citron. Laisser tremper au moins 1 h, égoutter et hacher grossièrement les pruneaux.", "Pendant ce temps, faire fondre le beurre dans une cocotte et cuire l'oignon haché 5 min. Ajouter l'agneau en cubes et l'ail écrasé, faire dorer 5 min en remuant.", "Délayer le bouillon cube dans l'eau chaude. Verser 100 ml de ce bouillon sur la viande, porter à ébullition, puis couvrir et laisser mijoter 1 h à feu doux, jusqu'à ce que l'agneau soit tendre.", "Ajouter le reste du bouillon, porter à ébullition, puis ajouter le riz rincé et le safran. Remuer, couvrir et cuire 15 min à feu doux, jusqu'à ce que le riz soit tendre.", "Ajouter les pruneaux et les raisins, saler et poivrer. Réchauffer quelques minutes, puis servir parsemé de persil."]
  },
  {
    id: "salade-olivier", nom: "Salade Olivier (salade russe)", cuisine: "russe",
    difficulte: "facile", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "53081",
    ingredients: [
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "saucisse", quantite: 2, unite: "pièce", ou: { id: "jambon", quantite: 2, unite: "tranche" } },
      { id: "petits-pois", quantite: 80, unite: "g" },
      { id: "cornichons", quantite: 40, unite: "g", optionnel: true },
      { id: "oignon-nouveau", quantite: 2, unite: "pièce" },
      { id: "mayonnaise", quantite: 80, unite: "g" },
      { id: "vinaigre-de-vin-blanc", quantite: 5, unite: "ml", ou: { id: "vinaigre", quantite: 5, unite: "ml" } },
      { id: "aneth", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les pommes de terre et la carotte en petits dés réguliers. Les mettre dans une casserole, couvrir d'eau, ajouter le sel et le vinaigre.", "Porter à ébullition puis cuire environ 15 min à feu moyen, jusqu'à ce que les pommes de terre soient cuites. Égoutter et laisser refroidir. Cuire les petits pois 3 min dans de l'eau bouillante et les égoutter.", "Pendant ce temps, cuire les œufs 10 min dans l'eau bouillante, les refroidir, les écaler et les couper en petits dés.", "Couper la saucisse (type saucisse de Strasbourg, ou du jambon) et les cornichons en petits dés, et émincer les oignons nouveaux et l'aneth.", "Dans un saladier, mélanger tous les ingrédients avec la mayonnaise. Saler et poivrer.", "Couvrir et laisser au frais au moins 1 h avant de servir."]
  },
  {
    id: "fraises-romanoff", nom: "Fraises Romanoff (fraises à l'orange et crème fouettée)", cuisine: "russe",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53082",
    ingredients: [
      { id: "fraises", quantite: 300, unite: "g" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "sucre-glace", quantite: 15, unite: "g" },
      { id: "liqueur-d-orange", quantite: 30, unite: "ml", ou: { id: "orange", quantite: 1, unite: "pièce" } },
      { id: "creme-fraiche", quantite: 120, unite: "ml" }
    ],
    etapes: ["Équeuter les fraises et les couper en quatre. Les mélanger dans un bol avec le sucre et la liqueur d'orange (type Grand Marnier ; sans alcool : le zeste et 4 cuillères à soupe de jus d'orange). Couvrir et laisser au frais 1 à 2 h en remuant une ou deux fois.", "Juste avant de servir, fouetter 90 ml de crème bien froide avec le sucre glace jusqu'à ce qu'elle tienne, puis incorporer délicatement le reste de la crème (crème aigre à l'origine).", "Répartir les fraises et un peu de leur sirop dans 2 coupes et les couvrir de crème fouettée. Servir tout de suite, ou dans les 2 h en gardant au frais."]
  }
]);
