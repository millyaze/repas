// ============================================================
// RECETTES : cuisine américaine, reprises de Wikilivres (13 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "brownies-noix-de-pecan", nom: "Brownies aux noix de pécan", cuisine: "américaine", type: "dessert",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Brownies",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBrownies",
    ingredients: [
      { id: "chocolat-noir", quantite: 120, unite: "g" },
      { id: "beurre", quantite: 125, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre", quantite: 125, unite: "g" },
      { id: "farine", quantite: 60, unite: "g" },
      { id: "noix-de-pecan", quantite: 50, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 170 °C. Faire fondre le chocolat avec le beurre au bain-marie.", "Fouetter les œufs avec le sucre, puis incorporer le chocolat fondu.", "Ajouter la farine et les noix de pécan hachées, et mélanger.", "Verser dans un petit moule (environ 18 cm) tapissé de papier sulfurisé.", "Cuire 10 à 15 minutes. À mi-cuisson, couper en carrés (environ 8 brownies)."]
  },
  {
    id: "chicken-supreme", nom: "Chicken supreme (poulet au miel, à la moutarde et au curry)", cuisine: "américaine", type: "plat",
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
    id: "cookies-flocons-d-avoine-raisins-secs", nom: "Cookies flocons d'avoine, mélasse et raisins secs", cuisine: "américaine", type: "dessert",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Cookies flocons d'avoine et raisins secs",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCookies_flocons_d'avoine_et_raisins_secs",
    ingredients: [
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "melasse", quantite: 85, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "farine", quantite: 50, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "bicarbonate-de-soude", quantite: 3, unite: "g" },
      { id: "flocons-d-avoine", quantite: 90, unite: "g" },
      { id: "raisins-secs", quantite: 40, unite: "g" }
    ],
    etapes: ["Dans un grand bol, mélangez le beurre mou, le sucre, la mélasse et l'œuf. (Sans mélasse, remplacez-la par environ 75 g de cassonade ou de vergeoise.)", "Quand le tout est bien mélangé, saupoudrez la farine, le sel et le bicarbonate en mélangeant au fur et à mesure.", "Ajoutez enfin les flocons d'avoine et les raisins secs, bien répartis.", "Préchauffez le four à 160 °C (thermostat 5-6). Sur une plaque couverte de papier cuisson, déposez des cuillerées de pâte en les espaçant de 5 cm. Cela donne environ 12 cookies.", "Enfournez 10 à 12 minutes et sortez-les dès qu'ils commencent à colorer.", "Laissez refroidir sur le papier, puis détachez les cookies. Bien froids, ils se gardent plusieurs jours dans une boîte étanche."]
  },
  {
    id: "donuts-maison", nom: "Donuts maison à la cannelle", cuisine: "américaine", type: "dessert",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Donut",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FDonut",
    ingredients: [
      { id: "farine", quantite: 175, unite: "g" },
      { id: "lait", quantite: 75, unite: "ml" },
      { id: "beurre", quantite: 12, unite: "g" },
      { id: "cassonade", quantite: 40, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "huile-d-arachide", quantite: 400, unite: "ml" },
      { id: "sucre", quantite: 30, unite: "g" }
    ],
    etapes: ["Tiédir le lait, y délayer la levure avec 5 g de sucre et laisser gonfler 10 minutes.", "Mettre la farine dans un saladier, faire un puits, ajouter le sel et la levure, puis pétrir en boule souple. Laisser doubler 30 minutes.", "Faire fondre le beurre et le laisser refroidir. Incorporer à la pâte le beurre, l'œuf battu, la cannelle, la cassonade et un peu de farine. Couvrir et laisser lever 3 heures.", "Dégazer la pâte, la diviser en 6 boules, puis percer chacune au centre pour former un anneau.", "Faire chauffer l'huile, plonger les donuts par trois : cuire 2 minutes d'un côté, 1 minute de l'autre. Égoutter sur du papier absorbant.", "Rouler dans le sucre cristallisé avant de servir."]
  },
  {
    id: "galettes-de-tofu", nom: "Galettes de tofu (hamburger végétal)", cuisine: "américaine", type: "plat",
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
    id: "limonade-americaine", nom: "Limonade à l'américaine (citron pressé, environ 90 cl)", cuisine: "américaine", type: "boisson",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Limonade recette américaine",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FLimonade_recette_am%C3%A9ricaine",
    ingredients: [
      { id: "citron", quantite: 4, unite: "pièce" },
      { id: "eau", quantite: 700, unite: "ml" },
      { id: "sucre", quantite: 20, unite: "g" }
    ],
    etapes: ["Pressez les citrons : il faut environ 20 cl de jus.", "Dissolvez le sucre dans l'eau.", "Mélangez le jus de citron à l'eau sucrée. Goûtez et ajoutez un peu de sucre si vous la préférez plus douce.", "Servez avec des glaçons."]
  },
  {
    id: "milk-shake-banane-chocolat", nom: "Milk-shake banane-chocolat", cuisine: "américaine", type: "boisson",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Milk-shake",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMilk-shake",
    ingredients: [
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "banane", quantite: 1, unite: "pièce" },
      { id: "cacao-en-poudre", quantite: 30, unite: "g" },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "extrait-de-vanille", quantite: 2, unite: "ml", optionnel: true }
    ],
    etapes: ["Éplucher la banane et la couper en morceaux.", "Mettre le lait, la banane, le cacao et le sucre (avec la vanille si on en a) dans un mixeur.", "Mixer jusqu'à obtenir un mélange bien lisse.", "Servir tout de suite, bien frais, dans deux verres."]
  },
  {
    id: "muffins-aux-pommes", nom: "Muffins aux pommes", cuisine: "américaine", type: "dessert",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Muffins aux pommes",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMuffins_aux_pommes",
    ingredients: [
      { id: "farine", quantite: 150, unite: "g" },
      { id: "pomme", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "lait", quantite: 60, unite: "ml" },
      { id: "sucre", quantite: 60, unite: "g" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Mélanger la farine, le sucre, la levure, la cannelle, la muscade et le sel.", "Faire fondre le beurre. Éplucher la pomme et la hacher.", "Mélanger l'œuf, le beurre fondu, le lait et la pomme, puis verser sur les ingrédients secs (un peu de lait en plus si la pâte est trop compacte).", "Beurrer des moules à muffins et les remplir de pâte (environ 5 petits muffins).", "Cuire 20 minutes."]
  },
  {
    id: "pancakes-simples", nom: "Pancakes simples", cuisine: "américaine", type: "petit-dejeuner",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Pancake",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPancake",
    ingredients: [
      { id: "farine", quantite: 150, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "bicarbonate", quantite: 3, unite: "g", ou: { id: "levure-chimique", quantite: 8, unite: "g" } },
      { id: "sucre", quantite: 8, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 250, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" }
    ],
    etapes: ["Mélanger la farine, le sel, le bicarbonate (ou la levure) et le sucre.", "Ajouter les œufs et le lait et mélanger jusqu'à obtenir une pâte onctueuse. Laisser reposer un peu.", "Faire chauffer un peu de beurre dans une poêle.", "Verser de petits cercles de pâte (5 à 10 cm), cuire 2 minutes, retourner et cuire encore 2 minutes. Ça fait environ 8 pancakes."]
  },
  {
    id: "sake-bomb", nom: "Sake Bomb (shooter de saké plongé dans la bière)", cuisine: "américaine", type: "boisson",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Sake Bomb",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FSake_Bomb",
    ingredients: [
      { id: "sake", quantite: 160, unite: "ml" },
      { id: "biere", quantite: 500, unite: "ml" }
    ],
    etapes: ["Remplissez deux petits verres (shooters) de 8 cl de saké chacun.", "Versez 25 cl de bière dans chacun de deux grands verres à bière (33 cl).", "Glissez doucement un shooter rempli de saké dans chaque verre de bière."]
  },
  {
    id: "sandwich-au-beurre-de-cacahuete-et-a-la-banane", nom: "Sandwich au beurre de cacahuète et à la banane", cuisine: "américaine", type: "petit-dejeuner",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Sandwich au beurre d’arachide et à la banane",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSandwich_au_beurre_d%E2%80%99arachide_et_%C3%A0_la_banane",
    ingredients: [
      { id: "beurre-de-cacahuete", quantite: 30, unite: "g" },
      { id: "pain", quantite: 2, unite: "tranche" },
      { id: "banane", quantite: 2, unite: "pièce" }
    ],
    etapes: ["Étaler le beurre de cacahuète sur les 2 tranches de pain épaisses.", "Couper les bananes en rondelles et les poser sur le beurre de cacahuète.", "Couper chaque tartine en deux ou en quatre."]
  },
  {
    id: "sauce-epicee-cacahuete", nom: "Sauce épicée (ketchup, orange et beurre de cacahuète)", cuisine: "américaine", type: "sauce",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "Wikilivres", idSource: "Sauce épicée",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSauce_%C3%A9pic%C3%A9e",
    ingredients: [
      { id: "ketchup", quantite: 65, unite: "g" },
      { id: "orange", quantite: 1, unite: "pièce" },
      { id: "beurre-de-cacahuete", quantite: 65, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "moutarde", quantite: 12, unite: "g" },
      { id: "sauce-soja", quantite: 12, unite: "ml" },
      { id: "sauce-piquante", quantite: 1, unite: "ml" }
    ],
    etapes: ["Presser l'orange et éplucher l'oignon (un petit oignon suffit, ou la moitié d'un gros).", "Mixer tous les ingrédients jusqu'à obtenir une sauce lisse.", "Verser dans une petite casserole, porter à ébullition puis laisser frémir 5 à 10 minutes.", "Retirer du feu et laisser refroidir à température ambiante. Ça fait un petit pot de sauce pour accompagner viandes ou légumes."]
  },
  {
    id: "stinger", nom: "Stinger (cocktail cognac et menthe)", cuisine: "américaine", type: "boisson",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Stinger",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FStinger",
    ingredients: [
      { id: "cognac", quantite: 80, unite: "ml" },
      { id: "creme-de-menthe-blanche", quantite: 40, unite: "ml" }
    ],
    etapes: ["Dans un shaker rempli de glaçons, versez le cognac (4 cl par verre) et la crème de menthe blanche (2 cl par verre).", "Frappez vivement, puis servez dans deux verres à digestif."]
  }
]);
