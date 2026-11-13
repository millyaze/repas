// ============================================================
// RECETTES : cuisine italienne, reprises de Wikilivres (17 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "calzone-aux-aubergines", nom: "Calzone aux aubergines", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Pizza Calzone aux aubergines",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_Calzone_aux_aubergines",
    ingredients: [
      { id: "aubergine", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "tomates-sechees", quantite: 50, unite: "g" },
      { id: "origan", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Couper l'aubergine en petits dés, les mettre dans une passoire, les saupoudrer de sel et les laisser dégorger 20 min. Les rincer.", "Faire revenir l'oignon émincé et l'ail haché dans l'huile d'olive. Ajouter l'aubergine, les tomates séchées en lamelles, l'origan et le poivre, et laisser mijoter une vingtaine de minutes.", "Préchauffer le four à 235 °C. Couper la pâte (environ 250 g de pâte à pain) en deux et étaler chaque morceau en cercle au rouleau.", "Mettre la garniture sur une moitié de chaque cercle, rabattre la pâte et souder les bords en appuyant.", "Poser les calzones sur une plaque huilée et cuire 20 min."]
  },
  {
    id: "gnocchi-de-pommes-de-terre", nom: "Gnocchi de pommes de terre", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "Wikilivres", idSource: "Gnocchi",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGnocchi",
    ingredients: [
      { id: "pomme-de-terre", quantite: 700, unite: "g" },
      { id: "farine", quantite: 140, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 5, unite: "ml" },
      { id: "sel", quantite: 5, unite: "g" },
      { id: "eau", quantite: 2000, unite: "ml" }
    ],
    etapes: ["Cuire 700 g de pommes de terre avec la peau dans l'eau bouillante (ou au four, pour une pâte moins humide et moins collante), puis les éplucher et les écraser au presse-purée.", "Mélanger la purée avec 140 g de farine (1/5 du poids des pommes de terre), l'œuf et un filet d'huile d'olive.", "Former une grosse boule, puis façonner de petits cylindres d'environ 2 cm de long et les poser côte à côte.", "Écraser légèrement chaque cylindre avec une fourchette pour lui donner sa forme.", "Cuire les gnocchis dans une grande casserole d'eau salée : ils sont cuits quand ils remontent à la surface."]
  },
  {
    id: "pates-au-thon-a-la-tomate", nom: "Pâtes au thon à la tomate", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Pâtes au thon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2tes_au_thon",
    ingredients: [
      { id: "pates", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "thon-en-boite", quantite: 1, unite: "boîte" },
      { id: "piment-de-cayenne", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "parmesan", quantite: 30, unite: "g" }
    ],
    etapes: ["Émincer finement l'oignon. Le faire fondre à feu doux dans l'huile d'olive jusqu'à ce qu'il soit transparent.", "Ajouter le piment de Cayenne émietté, puis le thon (à l'huile d'olive de préférence). Cuire 3 min, puis ajouter la sauce tomate et laisser mijoter à feu doux.", "Pendant ce temps, cuire les pâtes (penne de préférence) selon le paquet et les égoutter.", "Mélanger les pâtes et la sauce, assaisonner de sel, de poivre du moulin et de parmesan. Servir aussitôt."]
  },
  {
    id: "pates-aux-poivrons", nom: "Pâtes aux poivrons", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Pâtes aux poivrons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FP%C3%A2tes_aux_poivrons",
    ingredients: [
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "pates", quantite: 200, unite: "g" }
    ],
    etapes: ["Faire revenir l'ail haché dans l'huile d'olive, ajouter les poivrons (jaune, orange, rouge) en fines lamelles, saler et poivrer.", "Laisser mijoter à couvert pour garder le jus des poivrons.", "Pendant ce temps, cuire les pâtes selon le paquet, les égoutter et les mélanger aux poivrons. Servir aussitôt."]
  },
  {
    id: "pizza-au-chevre-et-aux-lardons", nom: "Pizza au chèvre et aux lardons", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Pizza au chèvre et aux lardons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_au_ch%C3%A8vre_et_aux_lardons",
    ingredients: [
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 400, unite: "g" },
      { id: "lardons", quantite: 100, unite: "g" },
      { id: "fromage-de-chevre", quantite: 180, unite: "g" },
      { id: "parmesan", quantite: 50, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C.", "Étaler la pâte à pizza et la couvrir de tomates concassées.", "Répartir les lardons crus.", "Couper la bûche de chèvre en rondelles et les répartir régulièrement (environ 3 rondelles par quart de pizza). Râper le parmesan par-dessus.", "Cuire environ 15 min au four."]
  },
  {
    id: "pizza-au-thon-et-au-comte", nom: "Pizza au thon et au comté", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "Wikilivres", idSource: "Pizza au thon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_au_thon",
    ingredients: [
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 400, unite: "g" },
      { id: "thon-en-boite", quantite: 2, unite: "boîte" },
      { id: "comte", quantite: 100, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C.", "Étaler la pâte dans un plat et la garnir de tomates concassées.", "Émietter le thon égoutté à la fourchette et le répartir sur la pizza.", "Râper le comté et en saupoudrer la pizza.", "Cuire 20 min au four."]
  },
  {
    id: "pizza-au-tofu-et-aux-champignons", nom: "Pizza au tofu et aux champignons", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "Wikilivres", idSource: "Pizza au tofu et aux champignons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_au_tofu_et_aux_champignons",
    ingredients: [
      { id: "farine", quantite: 200, unite: "g" },
      { id: "huile-d-olive", quantite: 30, unite: "ml" },
      { id: "eau", quantite: 100, unite: "ml" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "tomates-concassees", quantite: 200, unite: "g" },
      { id: "tofu", quantite: 100, unite: "g" },
      { id: "champignons", quantite: 230, unite: "g" },
      { id: "tomates-sechees", quantite: 30, unite: "g" },
      { id: "origan", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Quelques heures à l'avance, faire mariner le tofu écrasé avec les tomates en morceaux et un peu d'origan.", "Pâte : mélanger la farine, 20 ml d'huile d'olive, 100 ml d'eau tiède, la levure et une pincée de sel. Pétrir jusqu'à obtenir une pâte lisse et élastique. Laisser lever 1 h au chaud sous un torchon.", "Faire revenir les champignons hachés dans le reste de l'huile d'olive. Saler, poivrer et réserver.", "Étaler la pâte dans un moule à pizza huilé, la napper des tomates au tofu, puis répartir les champignons et les tomates séchées (à l'huile) coupées en morceaux.", "Saupoudrer d'origan et cuire 15 min dans le four préchauffé à 220 °C."]
  },
  {
    id: "pizza-aux-moules-et-au-curry", nom: "Pizza aux moules et au curry", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 50, portions: 2,
    source: "Wikilivres", idSource: "Pizza aux moules",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_aux_moules",
    ingredients: [
      { id: "moules", quantite: 1000, unite: "g" },
      { id: "echalote", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "curry-en-poudre", quantite: 2, unite: "g" },
      { id: "creme-fraiche", quantite: 100, unite: "ml" },
      { id: "fecule", quantite: 5, unite: "g", optionnel: true },
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "mozzarella", quantite: 120, unite: "g" }
    ],
    etapes: ["Gratter les moules et les laver à grande eau.", "Les cuire dans une casserole avec l'échalote ciselée, le persil haché, le vin blanc et le curry, jusqu'à ce qu'elles s'ouvrent. Les décortiquer.", "Faire une sauce avec le jus de cuisson et la crème. Elle doit être épaisse : ajouter un peu de maïzena si besoin. Y verser les moules.", "Étaler la pâte dans une tourtière, répartir la sauce aux moules et ajouter la mozzarella en dés.", "Cuire 15 à 20 min au four à 220 °C."]
  },
  {
    id: "pizza-aux-poivrons-et-au-chorizo", nom: "Pizza aux poivrons et au chorizo", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Pizza aux poivrons",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_aux_poivrons",
    ingredients: [
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 400, unite: "g" },
      { id: "mozzarella", quantite: 120, unite: "g" },
      { id: "comte", quantite: 50, unite: "g" },
      { id: "chorizo", quantite: 50, unite: "g" }
    ],
    etapes: ["Couper les poivrons (un rouge, un jaune) et l'oignon en lanières. Garder 4 lanières de poivron jaune de côté.", "Faire mijoter le reste des poivrons et l'oignon 30 min à feu doux avec l'huile.", "Étaler la pâte à pizza dans un plat et la couvrir de tomates concassées et des légumes cuits.", "Ajouter la mozzarella en dés, le comté râpé et les 4 lanières de poivron gardées.", "Cuire 15 min au four à 220 °C. Au bout de 10 min, sortir la pizza pour y poser les 10 tranches de chorizo, puis finir la cuisson."]
  },
  {
    id: "pizza-aux-poivrons-et-au-pesto", nom: "Pizza aux poivrons et au pesto", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Pizza aux poivrons et au pesto",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_aux_poivrons_et_au_pesto",
    ingredients: [
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "poivron", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "pesto", quantite: 45, unite: "g", ou: { id: "basilic", quantite: 20, unite: "g" } },
      { id: "origan", quantite: 3, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 235 °C. Étaler la pâte (environ 250 g de pâte à pain) dans un moule à pizza huilé.", "Couper les poivrons (de plusieurs couleurs) en lanières et les faire revenir dans l'huile d'olive.", "Étaler le pesto sur la pâte (ou, à défaut, du basilic mixé avec de l'huile d'olive et de l'ail), répartir les poivrons et saupoudrer largement d'origan.", "Cuire 20 min au four."]
  },
  {
    id: "pizza-campagnarde", nom: "Pizza campagnarde (jambon, champignons, comté)", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Pizza campagnarde",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPizza_campagnarde",
    ingredients: [
      { id: "champignons", quantite: 200, unite: "g" },
      { id: "jambon", quantite: 2, unite: "tranche" },
      { id: "comte", quantite: 100, unite: "g" },
      { id: "farine", quantite: 5, unite: "g" },
      { id: "pate-a-pizza", quantite: 1, unite: "pièce" },
      { id: "tomates-concassees", quantite: 400, unite: "g" }
    ],
    etapes: ["Nettoyer les champignons, les couper en lamelles dans la longueur et les faire revenir 10 min dans une casserole pour qu'ils rendent leur eau.", "Couper le jambon en carrés et râper le comté.", "Fariner un plat, y étaler la pâte et la couvrir de tomates concassées, de jambon, de champignons et de comté.", "Cuire 10 à 15 min au four à 210 °C."]
  },
  {
    id: "poisson-au-guazzetto", nom: "Poisson au guazzetto (poêlé au vin blanc et au citron)", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Poisson au guazzetto",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoisson_au_guazzetto",
    ingredients: [
      { id: "poisson-blanc", quantite: 500, unite: "g" },
      { id: "romarin", quantite: 1, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "vin-blanc", quantite: 40, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Vider et nettoyer le poisson entier. Garnir l'intérieur d'un brin de romarin, d'une demi-gousse d'ail coupée dans la longueur, de sel et de poivre.", "Dans une poêle (ovale de préférence), faire revenir l'autre gousse d'ail et le persil hachés dans l'huile d'olive.", "Avant que l'ail ne dore, mettre le poisson dans la poêle et le saisir rapidement des deux côtés en salant et poivrant légèrement. Verser un quart de verre de vin blanc sec.", "Couvrir et cuire à feu doux 15 à 20 min selon la taille du poisson, pour garder le jus de cuisson (le « guazzetto ») ; ajouter un tout petit peu d'eau si besoin.", "Ajouter le jus de citron juste avant de retirer du feu."]
  },
  {
    id: "risotto-au-parmesan", nom: "Risotto au parmesan (risotto blanc)", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Risotto",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRisotto",
    ingredients: [
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "vin-blanc", quantite: 50, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "beurre", quantite: 10, unite: "g" },
      { id: "parmesan", quantite: 15, unite: "g" }
    ],
    etapes: ["Préparer 500 ml de bouillon chaud avec l'eau et le bouillon cube.", "Émincer l'oignon et le faire fondre dans l'huile d'olive.", "Ajouter 150 g de riz à risotto et le faire revenir jusqu'à ce qu'il soit translucide, puis arroser avec 50 ml de vin blanc sec.", "Quand le vin est réduit, ajouter le bouillon chaud louche par louche, en attendant que chaque louche soit absorbée. La cuisson prend environ 18 min.", "Hors du feu, incorporer la noix de beurre et le parmesan râpé, puis couvrir 2 min avant de servir : le risotto devient bien crémeux."]
  },
  {
    id: "risotto-au-poulet", nom: "Risotto au poulet", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Risotto au poulet",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRisotto_au_poulet",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "tomates-concassees", quantite: 125, unite: "g", ou: { id: "tomate", quantite: 1, unite: "pièce" } },
      { id: "oignon", quantite: 1, unite: "pièce", ou: { id: "echalote", quantite: 1, unite: "pièce" } },
      { id: "vin-blanc", quantite: 125, unite: "ml" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préparer 500 ml de bouillon de volaille chaud avec l'eau et le bouillon cube. Couper le blanc de poulet en fines lanières.", "Dans une casserole à fond épais, faire revenir l'oignon (ou l'échalote) haché dans l'huile. Dès qu'il commence à blondir, ajouter le poulet et le faire rissoler.", "Ajouter 125 ml de vin blanc et les tomates pelées coupées en morceaux, puis laisser cuire 10 min à feu doux.", "Ajouter 150 g de riz à risotto (arborio, carnaroli ou vialone nano), mélanger et cuire 2 min. Incorporer ensuite le bouillon chaud petit à petit, jusqu'à ce que le riz n'absorbe plus de liquide. Saler et poivrer.", "Servir dans un plat, saupoudré de persil haché."]
  },
  {
    id: "risotto-au-saumon-et-au-parmesan", nom: "Risotto au saumon et au parmesan", cuisine: "italienne", type: "plat",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Risotto de saumon",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FRisotto_de_saumon",
    ingredients: [
      { id: "huile-d-olive", quantite: 10, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "riz", quantite: 160, unite: "g" },
      { id: "vin-blanc", quantite: 120, unite: "ml" },
      { id: "fumet-de-poisson", quantite: 400, unite: "ml" },
      { id: "saumon", quantite: 240, unite: "g" },
      { id: "parmesan", quantite: 30, unite: "g" }
    ],
    etapes: ["Éplucher et hacher l'oignon, le faire revenir 5 min dans une poêle avec l'huile.", "Ajouter le riz (rond) et remuer jusqu'à ce qu'il devienne nacré.", "Verser le vin blanc et mélanger.", "Ajouter environ 100 ml de fumet de poisson chaud et remuer. Quand le riz a tout absorbé, en remettre, et ainsi de suite jusqu'à ce que le riz soit cuit.", "Ajouter la chair de saumon coupée en dés et cuire 5 min.", "Ajouter le parmesan râpé, laisser reposer quelques minutes et servir."]
  },
  {
    id: "spaghetti-au-jambon-de-parme", nom: "Spaghetti au jambon de Parme", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Spaghetti au jambon de Parme",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSpaghetti_au_jambon_de_Parme",
    ingredients: [
      { id: "oignon", quantite: 2, unite: "pièce" },
      { id: "huile-d-olive", quantite: 15, unite: "ml" },
      { id: "pates", quantite: 200, unite: "g" },
      { id: "jambon", quantite: 1, unite: "tranche" },
      { id: "parmesan", quantite: 50, unite: "g" },
      { id: "jambon-cru", quantite: 2, unite: "tranche" }
    ],
    etapes: ["Émincer les petits oignons et les faire roussir dans l'huile d'olive.", "Cuire les spaghettis dans une casserole d'eau bouillante.", "Couper le jambon blanc en dés, l'ajouter aux oignons et cuire 5 min.", "Ajouter les pâtes égouttées et le parmesan en copeaux, mélanger et couvrir avec les tranches de jambon de Parme. Mettre un couvercle et laisser 5 min hors du feu avant de servir."]
  },
  {
    id: "spaghettis-au-basilic", nom: "Spaghettis au basilic", cuisine: "italienne", type: "plat",
    difficulte: "facile", tempsMinutes: 135, portions: 2,
    source: "Wikilivres", idSource: "Spaghettis au basilic",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSpaghettis_au_basilic",
    ingredients: [
      { id: "basilic", quantite: 20, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "pates", quantite: 230, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Effeuiller, laver et sécher le basilic. Garder quelques feuilles pour le décor.", "Hacher l'ail avec le basilic, arroser avec l'huile d'olive (fruitée de préférence) et poivrer.", "Couvrir et laisser reposer 2 h.", "Cuire les spaghettis al dente dans de l'eau salée et les égoutter.", "Les arroser de l'huile au basilic, mélanger et décorer avec les feuilles gardées."]
  }
]);
