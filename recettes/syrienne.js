// ============================================================
// RECETTES : cuisine syrienne (6 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "baba-ganoush", nom: "Baba ganoush (caviar d'aubergine au tahini)", cuisine: "syrienne", type: "entree",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53094",
    ingredients: [
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "tahini", quantite: 25, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "yaourt-grec", quantite: 15, unite: "g", ou: { id: "yaourt-nature", quantite: 1, unite: "pièce" } },
      { id: "piment-de-cayenne", quantite: 1, unite: "g", ou: { id: "piment-en-poudre", quantite: 1, unite: "g" } },
      { id: "menthe", quantite: 1, unite: "g" },
      { id: "persil", quantite: 5, unite: "g" },
      { id: "pain-pita", quantite: 2, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 4, unite: "g" }
    ],
    etapes: ["Piquer la peau des aubergines à plusieurs endroits avec la pointe d'un couteau. Les griller au barbecue, sous le gril du four ou directement sur la flamme du gaz, en les retournant souvent, 25 à 30 min, jusqu'à ce que la peau soit noircie et la chair très molle.", "Les mettre dans un saladier, couvrir de papier aluminium et laisser tiédir 15 min.", "Couper les aubergines en deux, racler la chair à la cuillère et la laisser égoutter 5 à 10 min dans une passoire.", "Écraser la chair avec l'ail écrasé et le sel, en gardant un peu de texture. Incorporer le jus de citron, le tahini, l'huile et le piment de Cayenne, puis le yaourt.", "Couvrir et mettre au frais jusqu'à ce que ce soit bien froid. Ajouter la menthe et le persil hachés, goûter et rectifier l'assaisonnement. Servir avec du pain pita."]
  },
  {
    id: "sandwich-falafel-sauce-tahini", nom: "Sandwich pita aux falafels, sauce tahini", cuisine: "syrienne", type: "plat",
    difficulte: "facile", tempsMinutes: 20, portions: 2,
    source: "TheMealDB", idSource: "53091",
    ingredients: [
      { id: "falafels", quantite: 8, unite: "pièce" },
      { id: "tahini", quantite: 30, unite: "g" },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "citron", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "pain-pita", quantite: 4, unite: "pièce" },
      { id: "salade-verte", quantite: 1, unite: "pièce" },
      { id: "tomate", quantite: 1, unite: "pièce" },
      { id: "concombre", quantite: 1, unite: "pièce" },
      { id: "cornichons", quantite: 30, unite: "g", optionnel: true },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", optionnel: true },
      { id: "harissa", quantite: 10, unite: "g", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 230 °C. Poser les falafels sur une plaque et les réchauffer 8 à 10 min.", "Pendant ce temps, fouetter le tahini avec l'eau, 2 cuillères à soupe de jus de citron, l'ail écrasé et le paprika.", "Couper le haut des pains pita pour former une poche.", "Garnir chaque pain de 2 falafels, de salade, de tomate, de concombre, de cornichon et d'oignon rouge en lamelles.", "Arroser d'environ 1 cuillère à soupe de sauce tahini et d'un peu de harissa."]
  },
  {
    id: "fasoliyyeh-haricots-verts-huile-olive", nom: "Fasoliyyeh (haricots verts à l'huile d'olive, ail et coriandre)", cuisine: "syrienne", type: "accompagnement",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "53092",
    ingredients: [
      { id: "haricots-verts", quantite: 450, unite: "g" },
      { id: "huile-d-olive", quantite: 40, unite: "ml" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "coriandre", quantite: 15, unite: "g" },
      { id: "pain-pita", quantite: 2, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Mettre les haricots verts (surgelés, c'est l'idéal) dans une grande cocotte et les arroser d'huile d'olive. Saler et mettre le couvercle.", "Cuire à feu moyen-vif en remuant de temps en temps, jusqu'à la cuisson voulue : en Syrie, on aime les laisser cuire jusqu'à ce qu'ils commencent à brunir. Ils ne doivent pas frire mais cuire à la vapeur de leur propre eau.", "Ajouter la coriandre hachée et l'ail écrasé, et cuire juste le temps que la coriandre flétrisse.", "Manger en plat principal avec du pain pita chaud pour attraper les haricots, ou en accompagnement."]
  },
  {
    id: "pain-syrien", nom: "Pain syrien (galettes fines au four)", cuisine: "syrienne", type: "accompagnement",
    difficulte: "moyen", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "53089",
    ingredients: [
      { id: "farine", quantite: 190, unite: "g" },
      { id: "eau", quantite: 135, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sucre", quantite: 1, unite: "g" },
      { id: "levure-de-boulanger", quantite: 2, unite: "g" },
      { id: "sel", quantite: 4, unite: "g" }
    ],
    etapes: ["Mélanger la farine, le sel, le sucre et la levure, puis ajouter l'eau tiède et l'huile. Pétrir 10 min jusqu'à obtenir une pâte souple (ou utiliser le programme « pâte » d'une machine à pain).", "Couvrir et laisser lever 1 h au chaud, jusqu'à ce que la pâte double de volume.", "Préchauffer le four à 245 °C avec une plaque à l'intérieur.", "Partager la pâte en 4 boules, les couvrir d'un torchon humide et laisser reposer 10 min. Les étaler en disques fins d'environ 20 cm.", "Cuire les galettes 2 par 2 sur la plaque chaude, environ 5 min, jusqu'à ce qu'elles gonflent et dorent."]
  },
  {
    id: "riz-syrien-a-la-viande", nom: "Riz syrien à la viande hachée et aux pignons", cuisine: "syrienne", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53095",
    ingredients: [
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "boeuf-hache", quantite: 250, unite: "g", ou: { id: "agneau-hache", quantite: 250, unite: "g" } },
      { id: "piment-de-la-jamaique", quantite: 1, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "riz", quantite: 150, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "pignons-de-pin", quantite: 25, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire fondre 30 g de beurre dans une casserole à feu moyen-vif. Ajouter la viande, le sel, le piment de la Jamaïque, la cannelle et le poivre, et cuire en remuant 7 à 10 min, jusqu'à ce que la viande soit dorée et bien émiettée.", "Ajouter le riz, l'eau et le bouillon cube émietté, et porter à ébullition.", "Baisser le feu, couvrir et cuire environ 20 min, jusqu'à ce que tout le liquide soit absorbé.", "Pendant ce temps, faire dorer les pignons 3 à 5 min dans le reste du beurre, dans une petite poêle.", "Mélanger les pignons au riz juste avant de servir."]
  },
  {
    id: "spaghetti-syriens-a-la-cannelle", nom: "Spaghetti syriens à la tomate et à la cannelle, gratinés au four", cuisine: "syrienne", type: "plat",
    difficulte: "facile", tempsMinutes: 75, portions: 2,
    source: "TheMealDB", idSource: "53093",
    ingredients: [
      { id: "pates", quantite: 200, unite: "g" },
      { id: "sauce-tomate", quantite: 100, unite: "g" },
      { id: "concentre-de-tomate", quantite: 75, unite: "g", ou: { id: "sauce-tomate", quantite: 100, unite: "g" } },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "huile-de-tournesol", quantite: 30, unite: "ml" },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 175 °C et huiler un petit plat à gratin.", "Cuire les spaghetti 8 à 10 min dans une grande casserole d'eau salée, jusqu'à ce qu'ils soient al dente, et les égoutter.", "Les mélanger avec la sauce tomate, le concentré de tomate, la cannelle, l'huile, le sel et le poivre.", "Verser dans le plat et cuire 1 h au four, jusqu'à ce que le dessus soit croustillant."]
  }
]);
