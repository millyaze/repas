// ============================================================
// RECETTES : cuisine égyptienne (7 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// (La shakshuka de TheMealDB n'est pas reprise : c'est la chakchouka
// déjà présente dans recettes/mediterraneenne.js.)
// ============================================================
ajouterRecettes([
  {
    id: "ful-medames", nom: "Foul medames (purée de fèves à l'ail et au citron)", cuisine: "égyptienne", type: "entree",
    difficulte: "facile", tempsMinutes: 160, portions: 2,
    source: "TheMealDB", idSource: "53025",
    ingredients: [
      { id: "feves", quantite: 200, unite: "g", ou: { id: "haricots-rouges-en-boite", quantite: 1, unite: "boîte" } },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "cumin", quantite: 2, unite: "g" },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g", optionnel: true },
      { id: "oeuf", quantite: 2, unite: "pièce", optionnel: true },
      { id: "tomate", quantite: 1, unite: "pièce", optionnel: true },
      { id: "pain-pita", quantite: 2, unite: "pièce", optionnel: true },
      { id: "eau", quantite: 1000, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille, mettre les fèves sèches à tremper dans un grand volume d'eau.", "Les égoutter et les cuire à couvert dans de l'eau non salée, à petits frémissements, 2 h à 2 h 30 jusqu'à ce qu'elles soient tendres, en rajoutant de l'eau pour qu'elles restent couvertes. Saler en fin de cuisson. (Avec des fèves ou des haricots en boîte : simplement les réchauffer 10 min dans un peu d'eau.)", "Laisser réduire le liquide. Écraser une louche de fèves avec un peu de jus et la remettre dans la casserole pour épaissir.", "Servir dans des bols, parsemé de persil haché. Chacun assaisonne à table avec l'huile d'olive, le jus de citron, l'ail écrasé, le cumin, le piment, le sel et le poivre, en écrasant un peu les fèves à la fourchette.", "Si on aime : ajouter un œuf dur coupé en morceaux et des dés de tomate, et manger avec du pain pita."]
  },
  {
    id: "taamiya-falafels-de-feves", nom: "Taamiya (falafels égyptiens aux fèves)", cuisine: "égyptienne", type: "entree",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "53026",
    ingredients: [
      { id: "feves", quantite: 250, unite: "g", ou: { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" } },
      { id: "oignon-nouveau", quantite: 3, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "persil", quantite: 15, unite: "g" },
      { id: "coriandre", quantite: 10, unite: "g", optionnel: true },
      { id: "cumin", quantite: 4, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "huile-de-tournesol", quantite: 250, unite: "ml" },
      { id: "pain-pita", quantite: 2, unite: "pièce", optionnel: true },
      { id: "tahini", quantite: 30, unite: "g", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La veille, faire tremper les fèves sèches (sans peau de préférence) dans de l'eau. Les égoutter ; si elles ont encore leur peau, les frotter pour la retirer. Bien les sécher dans un torchon.", "Mixer les fèves par à-coups, juste assez pour obtenir une pâte un peu granuleuse (trop mixée, elle se défait à la cuisson).", "Ajouter les oignons nouveaux, l'ail, le persil et la coriandre hachés, le cumin, la levure, le piment, le sel et le poivre. Bien mélanger et laisser au moins 30 min au frais.", "Former des boules de 3 cm, les aplatir légèrement et les rouler dans la farine.", "Faire chauffer au moins 3 cm d'huile dans une petite casserole à feu moyen (un morceau de pâte doit grésiller tout de suite). Frire les taamiya par petites quantités, environ 5 min en les retournant, jusqu'à ce qu'elles soient bien dorées. Égoutter sur du papier absorbant.", "Servir dans du pain pita avec une salade tomate-concombre et une sauce au tahini (tahini, citron, eau, sel)."]
  },
  {
    id: "koshari", nom: "Koshari (riz, lentilles, pâtes et oignons frits)", cuisine: "égyptienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53027",
    ingredients: [
      { id: "lentilles", quantite: 100, unite: "g" },
      { id: "riz", quantite: 100, unite: "g" },
      { id: "pates", quantite: 100, unite: "g" },
      { id: "pois-chiches-en-boite", quantite: 1, unite: "boîte" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 10, unite: "g" },
      { id: "graines-de-coriandre", quantite: 1, unite: "g", ou: { id: "cumin", quantite: 1, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 60, unite: "ml" },
      { id: "sauce-tomate", quantite: 200, unite: "g", optionnel: true },
      { id: "ail", quantite: 1, unite: "gousse", optionnel: true },
      { id: "vinaigre", quantite: 10, unite: "ml", optionnel: true },
      { id: "eau", quantite: 1200, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Lentilles (brunes ou vertes) : les cuire dans 500 ml d'eau 15 min : elles doivent rester un peu fermes. Égoutter et saler légèrement.", "Rincer le riz. Le mettre dans la casserole avec les lentilles, 1 cuillère à soupe d'huile, du sel, du poivre et la coriandre moulue, et remuer 3 min à feu moyen-vif.", "Couvrir d'eau chaude (environ 2 cm au-dessus, à peu près 300 ml), porter à ébullition, puis couvrir et cuire à feu doux environ 20 min jusqu'à ce que l'eau soit absorbée. Laisser reposer 5 min à couvert.", "Pendant ce temps, cuire les pâtes (des coquillettes) dans l'eau bouillante salée, et réchauffer les pois chiches égouttés.", "Oignons frits : couper l'oignon en fines rondelles, les saler, les rouler dans la farine et les faire frire dans le reste de l'huile à feu moyen-vif 15 à 20 min en remuant souvent, jusqu'à ce qu'ils soient bruns et croustillants, sans brûler.", "Si on veut la sauce tomate habituelle : faire revenir l'ail écrasé 30 secondes dans un peu d'huile, ajouter la sauce tomate, une pincée de cumin et de piment, laisser frémir 10 min et finir avec le vinaigre.", "Servir en couches : riz aux lentilles, pâtes, pois chiches, sauce tomate, et les oignons frits par-dessus."]
  },
  {
    id: "chawarma-de-poulet", nom: "Chawarma de poulet, sauce au yaourt", cuisine: "égyptienne", type: "plat",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "53028",
    ingredients: [
      { id: "cuisse-de-poulet", quantite: 3, unite: "pièce", ou: { id: "blanc-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "graines-de-coriandre", quantite: 4, unite: "g" },
      { id: "cumin", quantite: 6, unite: "g" },
      { id: "cardamome", quantite: 2, unite: "g" },
      { id: "paprika", quantite: 3, unite: "g" },
      { id: "piment-en-poudre", quantite: 1, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "yaourt-grec", quantite: 120, unite: "g", ou: { id: "yaourt-nature", quantite: 1, unite: "pièce" } },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "pain-pita", quantite: 2, unite: "pièce" },
      { id: "salade-verte", quantite: 1, unite: "pièce", optionnel: true },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Marinade : mélanger la coriandre moulue, 5 g de cumin, le paprika, le piment, la cardamome, 2 cuillères à soupe de jus de citron, l'huile, le sel et le poivre. Enrober les cuisses de poulet désossées et laisser mariner au frais au moins 2 h, idéalement une nuit.", "Sauce : mélanger le yaourt avec l'ail écrasé, le reste du cumin et un filet de citron. Garder au frais.", "Faire chauffer une grande poêle épaisse (ou le barbecue) à feu moyen-vif. Cuire le poulet 4 à 5 min d'un côté jusqu'à ce qu'il soit bien grillé, puis 3 à 4 min de l'autre.", "Laisser reposer 5 min sous une feuille d'aluminium, puis couper en lamelles.", "Tartiner chaque pain pita de sauce au yaourt, ajouter de la salade et des tranches de tomate, puis le poulet. Rouler et servir."]
  },
  {
    id: "mloukhia-au-boeuf", nom: "Mloukhia (soupe verte de corète au bœuf et à l'ail)", cuisine: "égyptienne", type: "soupe",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53029",
    ingredients: [
      { id: "mloukhia-corete", quantite: 400, unite: "g", ou: { id: "epinards", quantite: 400, unite: "g" } },
      { id: "boeuf-a-braiser", quantite: 200, unite: "g", ou: { id: "cuisse-de-poulet", quantite: 2, unite: "pièce" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 150, unite: "g", optionnel: true },
      { id: "eau", quantite: 600, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Faire revenir l'oignon haché dans 2 cuillères à soupe d'huile d'olive.", "Ajouter la viande en cubes et la saisir 3 à 4 min de chaque côté.", "Verser l'eau, juste assez pour couvrir la viande, et cuire à feu moyen jusqu'à ce qu'elle soit tendre, environ 45 min.", "Ajouter la mloukhia surgelée (corète hachée, en épicerie orientale) et remuer jusqu'à ce qu'elle soit décongelée, puis porter à ébullition.", "Dans une petite poêle, chauffer doucement le reste de l'huile avec l'ail écrasé, juste jusqu'à ce qu'il sente bon (sans le laisser dorer, il deviendrait amer).", "Verser l'huile à l'ail dans la soupe, baisser le feu et laisser frémir 5 à 10 min. Saler.", "Servir avec beaucoup de jus de citron, et du riz ou du pain pita."]
  },
  {
    id: "feteer-meshaltet", nom: "Feteer meshaltet (feuilleté égyptien au beurre)", cuisine: "égyptienne", type: "accompagnement",
    difficulte: "difficile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53030",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "beurre", quantite: 120, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 180, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Mélanger la farine et le sel, verser 120 ml d'eau et pétrir. Ajouter le reste de l'eau petit à petit jusqu'à obtenir une pâte très élastique, qui s'étire sans se déchirer. Laisser reposer 10 min.", "Partager la pâte en 4 boules. Faire fondre le beurre avec l'huile, verser dans un bol creux et y plonger les boules. Laisser reposer 15 à 20 min.", "Préchauffer le four au maximum (250 °C).", "Étirer la première boule à la main sur le plan de travail, aussi finement que possible (on doit voir le plan de travail à travers). La replier sur elle-même en carré, en badigeonnant de beurre entre chaque pli.", "Étirer la deuxième boule de la même façon, poser le premier carré au centre, pliure en dessous, et replier la pâte autour en badigeonnant de beurre. Faire de même avec la troisième et la quatrième boule.", "Poser le feteer dans un moule à tarte de 25 cm, pliure en dessous, badigeonner de beurre et l'aplatir doucement à la main pour qu'il remplisse le moule.", "Cuire 10 min, puis passer sous le gril quand il gonfle pour dorer le dessus. À la sortie du four, mettre un peu de beurre dessus et couvrir pour qu'il ne sèche pas. Se mange avec du miel, du fromage ou nature."]
  },
  {
    id: "fatteh-egyptienne", nom: "Fatteh égyptienne (pain, riz et bœuf, sauce tomate à l'ail)", cuisine: "égyptienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 150, portions: 2,
    source: "TheMealDB", idSource: "53031",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 250, unite: "g", ou: { id: "steak-de-boeuf", quantite: 250, unite: "g" } },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "pates", quantite: 20, unite: "g" },
      { id: "pain-pita", quantite: 1, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "concentre-de-tomate", quantite: 20, unite: "g", ou: { id: "sauce-tomate", quantite: 40, unite: "g" } },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "cumin", quantite: 3, unite: "g" },
      { id: "vinaigre", quantite: 30, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 900, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Viande : dorer la viande en gros cubes dans un peu de beurre, ajouter l'oignon coupé en quatre, sel, poivre, le bouillon cube et de l'eau à hauteur (environ 600 ml). Porter à ébullition, puis couvrir et laisser mijoter environ 1 h 30 jusqu'à ce qu'elle soit tendre. Retirer la viande et garder le bouillon.", "Pain : déchirer le pain pita en morceaux et les faire dorer dans un peu de beurre. Ajouter une gousse d'ail écrasée, 1 g de cumin et du sel, mélanger et étaler au fond d'un plat creux.", "Riz : faire dorer les pâtes (vermicelles cassés) dans un peu de beurre en remuant, ajouter le riz et remuer jusqu'à ce qu'il devienne opaque. Ajouter 250 ml d'eau salée, couvrir et cuire à feu doux jusqu'à ce que le riz soit tendre.", "Arroser le pain de bouillon, couvrir de riz, puis verser du bouillon doucement jusqu'à arriver juste à hauteur du riz.", "Sauce : dans une poêle, chauffer l'huile, ajouter les tomates écrasées, la moitié du concentré de tomate, 2 gousses d'ail écrasées, 1 g de cumin, sel, poivre et le vinaigre. Cuire jusqu'à ce que ce soit un peu épais, puis l'étaler sur le riz.", "Faire dorer la viande dans un peu de beurre avec le reste de concentré de tomate, d'ail et de cumin, la poser sur le riz et servir."]
  }
]);
