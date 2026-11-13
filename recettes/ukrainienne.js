// ============================================================
// RECETTES : cuisine ukrainienne (7 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "galettes-de-betterave-yaourt-menthe", nom: "Galettes de betterave, yaourt à la menthe", cuisine: "ukrainienne", type: "entree",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53313",
    ingredients: [
      { id: "betterave", quantite: 300, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "carvi", quantite: 2, unite: "g", optionnel: true },
      { id: "huile-de-colza", quantite: 15, unite: "ml", ou: { id: "huile-de-tournesol", quantite: 15, unite: "ml" } },
      { id: "yaourt-grec", quantite: 80, unite: "g" },
      { id: "menthe", quantite: 10, unite: "g" },
      { id: "roquette", quantite: 80, unite: "g", ou: { id: "salade-verte", quantite: 1, unite: "pièce" } },
      { id: "tomates-cerises", quantite: 130, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Éplucher et râper la betterave crue.", "Mélanger la betterave avec l'œuf battu, la farine, l'ail haché finement, le cumin, le carvi, le zeste du citron, le sel et le poivre.", "Chauffer l'huile dans une grande poêle antiadhésive. Y déposer le mélange en 6 galettes rondes et les cuire 4 à 5 min de chaque côté, puis les mettre sur une plaque et finir 10 min au four.", "Mélanger le yaourt avec la menthe hachée. Mélanger la roquette et les tomates cerises coupées en deux.", "Servir les galettes avec le yaourt à la menthe et la salade."]
  },
  {
    id: "pancakes-a-la-betterave-fruits-rouges", nom: "Pancakes à la betterave, compotée de fruits rouges", cuisine: "ukrainienne", type: "petit-dejeuner",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53316",
    ingredients: [
      { id: "betterave", quantite: 150, unite: "g" },
      { id: "lait", quantite: 30, unite: "ml" },
      { id: "farine", quantite: 100, unite: "g" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "sirop-d-erable", quantite: 15, unite: "ml", ou: { id: "miel", quantite: 15, unite: "g" } },
      { id: "extrait-de-vanille", quantite: 1, unite: "ml", optionnel: true },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "fruits-rouges-surgeles", quantite: 100, unite: "g" },
      { id: "confiture-de-cassis", quantite: 20, unite: "g", ou: { id: "confiture", quantite: 20, unite: "g" } },
      { id: "yaourt-grec", quantite: 60, unite: "g" }
    ],
    etapes: ["Mixer la betterave cuite (déjà cuite, sous vide) avec le lait jusqu'à ce que ce soit lisse.", "Verser dans un saladier avec la farine, la levure chimique, le sirop d'érable, la vanille et les œufs. Fouetter jusqu'à obtenir une pâte lisse, bien violette.", "Faire fondre une noix de beurre dans une grande poêle antiadhésive à feu moyen-doux. Faire 3 ou 4 pancakes de 2 cuillères à soupe de pâte chacun : cuire 2 à 3 min, retourner et cuire encore 1 min. Recommencer avec le reste de la pâte et garder au chaud au four, au plus bas.", "Compotée : faire chauffer les fruits rouges avec la moitié de la confiture 5 à 10 min, jusqu'à ce qu'ils bouillonnent et deviennent sirupeux.", "Mélanger le reste de la confiture avec le yaourt. Empiler les pancakes avec le yaourt et verser la compotée chaude par-dessus."]
  },
  {
    id: "bortsch-vegetarien-aux-haricots-blancs", nom: "Bortsch express végétarien aux haricots blancs", cuisine: "ukrainienne", type: "soupe",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53078",
    ingredients: [
      { id: "betterave", quantite: 300, unite: "g" },
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "haricots-blancs-en-boite", quantite: 1, unite: "boîte" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 800, unite: "ml" },
      { id: "aneth", quantite: 5, unite: "g", optionnel: true, ou: { id: "persil", quantite: 5, unite: "g" } },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Éplucher la betterave et la couper en dés. La mettre dans une casserole avec l'eau et le bouillon cube émietté, et cuire 15 min.", "Ajouter les pommes de terre en dés et l'huile, et cuire jusqu'à ce que tout soit tendre (environ 15 min).", "Ajouter les haricots égouttés et rincés, cuire encore 5 min. Saler, poivrer et servir parsemé d'aneth."]
  },
  {
    id: "bortsch-ukrainien-au-boeuf", nom: "Bortsch ukrainien au bœuf", cuisine: "ukrainienne", type: "soupe",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "53311",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 300, unite: "g", ou: { id: "steak-de-boeuf", quantite: 300, unite: "g" } },
      { id: "betterave", quantite: 150, unite: "g" },
      { id: "pomme-de-terre", quantite: 300, unite: "g" },
      { id: "chou", quantite: 150, unite: "g" },
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "tomates-concassees", quantite: 60, unite: "g", ou: { id: "tomate", quantite: 1, unite: "pièce" } },
      { id: "pruneaux", quantite: 20, unite: "g", optionnel: true },
      { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte", optionnel: true },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 800, unite: "ml" },
      { id: "creme-fraiche", quantite: 40, unite: "ml" },
      { id: "aneth", quantite: 10, unite: "g", optionnel: true, ou: { id: "persil", quantite: 10, unite: "g" } },
      { id: "pain", quantite: 2, unite: "tranche", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Bouillon : mettre la viande, 1 oignon entier épluché, le laurier et l'eau froide légèrement salée dans une grande casserole. Cuire à très petit feu 1 h 30 (jusqu'à 3 h), jusqu'à ce que la viande soit très tendre, en écumant de temps en temps. Effilocher les gros morceaux dans le bouillon et jeter l'oignon.", "Ajouter les pommes de terre en dés, saler, poivrer et cuire 10 à 15 min.", "Pendant ce temps, chauffer l'huile dans une grande poêle et y cuire l'autre oignon et la carotte en dés à feu moyen, jusqu'à ce que la carotte soit tendre et commence à dorer.", "Ajouter la betterave râpée et cuire 5 min, puis le poivron en dés et cuire 2 min. Ajouter les tomates concassées et les pruneaux hachés, faire bouillir à feu vif pour réduire un peu, puis verser le tout dans la casserole.", "Ajouter le chou émincé et la moitié des haricots rouges égouttés, cuire 7 à 10 min jusqu'à ce que le chou soit tendre.", "Servir avec une cuillerée de crème, beaucoup d'aneth haché et du bon pain."]
  },
  {
    id: "chou-rouge-braise-au-romarin-et-saucisses", nom: "Chou rouge braisé au romarin et saucisses fumées", cuisine: "ukrainienne", type: "plat",
    difficulte: "facile", tempsMinutes: 135, portions: 2,
    source: "TheMealDB", idSource: "53315",
    ingredients: [
      { id: "chou-rouge", quantite: 350, unite: "g", ou: { id: "chou", quantite: 350, unite: "g" } },
      { id: "kabanos", quantite: 100, unite: "g", ou: { id: "saucisse", quantite: 3, unite: "pièce" } },
      { id: "oignon-rouge", quantite: 1, unite: "pièce" },
      { id: "pomme", quantite: 1, unite: "pièce" },
      { id: "vinaigre-de-vin-rouge", quantite: 60, unite: "ml", ou: { id: "vinaigre", quantite: 60, unite: "ml" } },
      { id: "sucre-roux", quantite: 50, unite: "g", ou: { id: "sucre", quantite: 50, unite: "g" } },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "romarin", quantite: 2, unite: "g", ou: { id: "thym", quantite: 2, unite: "g" } },
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "eau", quantite: 200, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Retirer le trognon du chou et l'émincer finement. Le mettre dans une grande casserole avec tous les autres ingrédients sauf les saucisses : l'oignon émincé, la pomme acidulée en dés (une pomme à cuire, type Granny Smith), le vinaigre, le sucre roux, le piment haché, le romarin, l'huile, le beurre, l'eau, le sel et le poivre.", "Porter à frémissement, puis baisser le feu, couvrir et cuire doucement 1 h 30 en remuant souvent. Rajouter un peu d'eau si ça devient trop sec.", "Ajouter les kabanos (saucisses fumées fines), couvrir et laisser frémir 20 min, puis cuire encore 10 min sans couvercle.", "Servir avec une purée ou des pommes de terre à l'eau."]
  },
  {
    id: "pierogi-a-la-choucroute", nom: "Pierogi à la choucroute et échalotes croustillantes", cuisine: "ukrainienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 90, portions: 2,
    source: "TheMealDB", idSource: "53314",
    ingredients: [
      { id: "farine", quantite: 190, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 40, unite: "ml" },
      { id: "eau", quantite: 65, unite: "ml" },
      { id: "choucroute", quantite: 100, unite: "g" },
      { id: "chou", quantite: 100, unite: "g" },
      { id: "echalote", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "creme-fraiche", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Échalotes croustillantes : émincer 1 échalote, la rouler dans un peu de farine et la faire frire dans 2 à 3 cuillères à soupe d'huile bien chaude, jusqu'à ce qu'elle soit dorée et croustillante. Égoutter sur du papier absorbant.", "Farce : hacher l'autre échalote et la faire revenir doucement 10 min dans 1 cuillère à soupe d'huile, jusqu'à ce qu'elle commence à dorer. Ajouter la choucroute et le chou émincé, cuire 5 à 10 min jusqu'à ce que le chou soit tendre. Goûter (un peu de sel, ou une pincée de sucre si c'est trop acide) et laisser refroidir complètement.", "Pâte : mélanger l'œuf et 1 cuillère à café d'huile avec l'eau, puis ajouter peu à peu 175 g de farine en mélangeant à la main. Pétrir sur un plan fariné jusqu'à ce que la pâte ne colle plus et soit souple. L'emballer et la laisser au frais au moins 30 min.", "Fariner généreusement le plan de travail et étaler la pâte finement (2 à 3 mm). Découper une douzaine de disques de 9 cm avec un verre.", "Mettre 1 cuillère à café de farce au centre de chaque disque, plier en demi-lune et bien pincer les bords. Les poser sur un plateau fariné sans qu'ils se touchent.", "Plonger les pierogi dans une grande casserole d'eau salée bouillante et les cuire environ 2 min, jusqu'à ce qu'ils remontent. Égoutter et servir avec une noix de beurre, la crème et les échalotes croustillantes."]
  },
  {
    id: "salade-de-chou-acidulee-a-la-mayonnaise", nom: "Salade de chou acidulée à la mayonnaise (coleslaw)", cuisine: "ukrainienne", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53312",
    ingredients: [
      { id: "chou", quantite: 120, unite: "g" },
      { id: "chou-rouge", quantite: 120, unite: "g" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce" },
      { id: "mayonnaise", quantite: 60, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "vinaigre-de-cidre", quantite: 10, unite: "ml", ou: { id: "vinaigre", quantite: 10, unite: "ml" } },
      { id: "moutarde-a-l-ancienne", quantite: 10, unite: "g", ou: { id: "moutarde", quantite: 10, unite: "g" } },
      { id: "sel-de-celeri", quantite: 1, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans un petit bol, fouetter la mayonnaise avec le zeste et le jus d'un demi-citron, le vinaigre de cidre, la moutarde à l'ancienne, le sel de céleri, le sel et le poivre.", "Émincer finement les choux, râper la carotte, couper un demi-oignon en petits dés et le céleri en fines tranches.", "Mélanger les légumes avec la sauce et garder au frais. Se prépare jusqu'à la veille."]
  }
]);
