// ============================================================
// RECETTES : cuisine canadienne (20 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "queues-de-castor", nom: "Queues de castor (beignets plats cannelle-sucre)", cuisine: "canadienne",
    difficulte: "moyen", tempsMinutes: 130, portions: 2,
    source: "TheMealDB", idSource: "52928",
    ingredients: [
      { id: "farine", quantite: 160, unite: "g" },
      { id: "levure-de-boulanger", quantite: 4, unite: "g" },
      { id: "eau", quantite: 60, unite: "ml" },
      { id: "lait", quantite: 60, unite: "ml" },
      { id: "sucre", quantite: 80, unite: "g" },
      { id: "beurre", quantite: 40, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 500, unite: "ml" },
      { id: "cannelle", quantite: 3, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Dans un grand saladier, mélanger l'eau tiède, une pincée de sucre et la levure. Laisser reposer 5 à 10 min, jusqu'à ce que ça mousse.", "Ajouter 50 g de sucre, le lait tiède, le beurre fondu, l'œuf et le sel, et fouetter. Ajouter la farine petit à petit en mélangeant jusqu'à obtenir une pâte lisse, un peu collante.", "Couvrir et laisser lever 1 h 30 dans un endroit tiède.", "Couper la pâte en 6 morceaux et étaler chacun en ovale allongé de 5 mm d'épaisseur (la forme d'une queue de castor).", "Chauffer l'huile à 175 °C dans une casserole profonde (un petit morceau de pâte doit dorer en 30 secondes). Cuire les queues de castor une par une, 30 à 45 secondes de chaque côté, jusqu'à ce qu'elles soient dorées. Égoutter sur du papier absorbant.", "Mélanger le reste du sucre avec la cannelle et y rouler les beignets encore chauds. Servir avec un filet de citron si on aime (ou de la pâte à tartiner et des amandes grillées)."]
  },
  {
    id: "pommes-de-terre-sautees-bacon-erable", nom: "Pommes de terre sautées au bacon et au sirop d'érable", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "52965",
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "huile-d-olive", quantite: 20, unite: "ml" },
      { id: "lardons", quantite: 80, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "sirop-d-erable", quantite: 15, unite: "ml", ou: { id: "miel", quantite: 15, unite: "g" } },
      { id: "paprika", quantite: 1, unite: "g", optionnel: true },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "oeuf", quantite: 2, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Laver les pommes de terre et les couper en dés moyens. Les garder dans un bol d'eau froide le temps de chauffer la poêle.", "Chauffer l'huile dans une grande poêle à feu moyen-vif. Égoutter les pommes de terre, les mettre dans la poêle, saler, poivrer et ajouter le paprika. Cuire 10 min en remuant souvent, jusqu'à ce qu'elles dorent.", "Ajouter les lardons : leur gras finit de cuire les pommes de terre. Cuire 5 à 6 min, jusqu'à ce qu'ils soient croustillants.", "Baisser le feu, ajouter l'ail haché et le persil, et cuire 1 min.", "Juste avant de servir, arroser de sirop d'érable et remuer 1 min pour caraméliser. Servir chaud avec un œuf au plat par personne."]
  },
  {
    id: "tartelettes-au-beurre", nom: "Tartelettes au beurre (butter tarts)", cuisine: "canadienne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52923",
    ingredients: [
      { id: "pate-brisee", quantite: 1, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "cassonade", quantite: 90, unite: "g", ou: { id: "sucre", quantite: 90, unite: "g" } },
      { id: "raisins-secs", quantite: 50, unite: "g" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "creme-fraiche", quantite: 10, unite: "ml" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true },
      { id: "noix", quantite: 25, unite: "g", optionnel: true }
    ],
    etapes: ["Préchauffer le four à 190 °C (170 °C chaleur tournante).", "Étaler la pâte un peu plus finement, y découper une dizaine de ronds de 7 à 8 cm et en garnir un moule à tartelettes (ou à muffins, sans trop remonter sur les bords).", "Dans une casserole, battre l'œuf puis ajouter la cassonade, les raisins, le beurre, la crème et la vanille. Cuire 3 à 4 min à feu doux en remuant sans arrêt, jusqu'à ce que le beurre fonde et que le mélange épaississe et nappe la cuillère (attention, ça brûle vite).", "Retirer du feu et ajouter les noix concassées. Remplir les fonds de tarte à ras bord.", "Cuire 15 à 18 min, jusqu'à ce que la garniture soit prise et dorée. Laisser tiédir quelques minutes avant de démouler. Se mangent tièdes ou froides (une dizaine de tartelettes, pour plusieurs goûters)."]
  },
  {
    id: "tourtiere", nom: "Tourtière (tourte à la viande du Québec)", cuisine: "canadienne",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53343",
    ingredients: [
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "boeuf-hache", quantite: 225, unite: "g" },
      { id: "porc-hache", quantite: 225, unite: "g" },
      { id: "thym", quantite: 1, unite: "g", ou: { id: "herbes-de-provence", quantite: 1, unite: "g" } },
      { id: "noix-de-muscade", quantite: 1, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g", optionnel: true },
      { id: "laurier", quantite: 1, unite: "pièce", optionnel: true },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 125, unite: "ml" },
      { id: "pomme-de-terre", quantite: 100, unite: "g" },
      { id: "pate-brisee", quantite: 2, unite: "pièce" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans une grande poêle, chauffer l'huile et faire revenir l'oignon et l'ail hachés 5 min.", "Ajouter le bœuf, le porc (sans porc : 450 g de bœuf en tout), le thym (il remplace la sarriette), la muscade, la cannelle et le laurier. Cuire jusqu'à ce que la viande soit dorée.", "Ajouter l'eau et le bouillon cube émietté, porter à frémissement puis baisser le feu. Râper la pomme de terre directement dans la poêle et mélanger. Cuire environ 15 min, jusqu'à ce que le liquide soit presque absorbé.", "Retirer le laurier, saler, poivrer et laisser refroidir complètement (la garniture froide donne une pâte plus croustillante).", "Préchauffer le four à 190 °C. Garnir un moule à tarte de 20 cm avec une pâte, ajouter la viande et l'étaler. Couvrir avec la seconde pâte, souder les bords en les pinçant et faire un trou au centre pour la vapeur.", "Badigeonner d'œuf battu et cuire environ 45 min, jusqu'à ce que la pâte soit bien dorée. Laisser reposer 15 min avant de couper (4 parts : les restes se mangent froids le lendemain)."]
  },
  {
    id: "carres-aux-dattes", nom: "Carrés aux dattes", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "53338",
    ingredients: [
      { id: "dattes", quantite: 200, unite: "g", ou: { id: "figues-seches", quantite: 200, unite: "g" } },
      { id: "eau", quantite: 125, unite: "ml" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true },
      { id: "flocons-d-avoine", quantite: 90, unite: "g" },
      { id: "farine", quantite: 65, unite: "g" },
      { id: "cassonade", quantite: 100, unite: "g", ou: { id: "sucre", quantite: 100, unite: "g" } },
      { id: "levure-chimique", quantite: 2, unite: "g" },
      { id: "beurre", quantite: 115, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C et beurrer un petit plat carré (environ 15 cm) ou un moule à cake.", "Garniture : dans une casserole, porter à ébullition les dattes dénoyautées coupées et l'eau, puis cuire 6 à 8 min à feu doux en remuant, jusqu'à obtenir une purée épaisse. Ajouter la vanille et laisser tiédir.", "Pâte : mélanger les flocons d'avoine, la farine, la cassonade, la levure et le sel. Ajouter le beurre mou en morceaux et l'écraser du bout des doigts jusqu'à obtenir des miettes de la taille de petits pois.", "Tasser la moitié des miettes au fond du plat, étaler la purée de dattes par-dessus, puis couvrir avec le reste des miettes en appuyant légèrement.", "Cuire 30 à 35 min, jusqu'à ce que le dessus soit doré. Laisser refroidir complètement dans le plat avant de couper en carrés (se gardent une semaine au frais)."]
  },
  {
    id: "figgy-duff", nom: "Figgy duff (pudding aux raisins et à la mélasse)", cuisine: "canadienne",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53342",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "cassonade", quantite: 50, unite: "g", ou: { id: "sucre", quantite: 50, unite: "g" } },
      { id: "levure-chimique", quantite: 5, unite: "g" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "gingembre", quantite: 2, unite: "g", optionnel: true },
      { id: "noix-de-muscade", quantite: 1, unite: "g", optionnel: true },
      { id: "raisins-secs", quantite: 80, unite: "g" },
      { id: "beurre", quantite: 35, unite: "g" },
      { id: "melasse", quantite: 85, unite: "g", ou: { id: "miel", quantite: 85, unite: "g" } },
      { id: "eau", quantite: 10, unite: "ml" }
    ],
    etapes: ["Dans un saladier, mélanger la farine, la cassonade, la levure et les épices (cannelle, gingembre en poudre ou râpé, muscade : ils remplacent le piment de la Jamaïque). Ajouter les raisins et bien les enrober de farine.", "Ajouter le beurre fondu, la mélasse et l'eau, et mélanger à la cuillère en bois jusqu'à former une boule.", "Mettre la boule dans un torchon propre fariné, fermer avec une ficelle en laissant 2 à 3 cm de jeu pour qu'elle gonfle (ou la mettre dans un bol beurré couvert de papier aluminium bien serré).", "Plonger dans une grande casserole d'eau frémissante (le bol, lui, à mi-hauteur d'eau, couvercle posé) et cuire 1 h 15 à 1 h 30, en rajoutant de l'eau chaude si besoin, jusqu'à ce que le pudding soit ferme.", "Laisser tiédir avant de retirer le torchon. Couper en tranches comme un gâteau et servir chaud, nappé de mélasse tiède ou d'une sauce beurre-mélasse (mélasse, beurre et un peu d'eau chauffés ensemble)."]
  },
  {
    id: "tarte-flapper", nom: "Tarte flapper (crème vanille et meringue)", cuisine: "canadienne",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "TheMealDB", idSource: "53341",
    ingredients: [
      { id: "biscuits-secs", quantite: 90, unite: "g" },
      { id: "beurre", quantite: 45, unite: "g" },
      { id: "sucre", quantite: 125, unite: "g" },
      { id: "cannelle", quantite: 1, unite: "g" },
      { id: "lait", quantite: 300, unite: "ml" },
      { id: "fecule", quantite: 15, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true },
      { id: "citron", quantite: 1, unite: "pièce", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C. Fond : écraser les biscuits en miettes fines et les mélanger avec le beurre fondu, 25 g de sucre et la cannelle. Garder 2 cuillères à soupe de miettes de côté et tasser le reste au fond et sur les bords d'un petit moule à tarte (18 cm). Cuire 10 min.", "Crème : séparer les blancs des jaunes. Dans une casserole, mélanger le lait, 70 g de sucre, la fécule, les jaunes, la vanille et le sel. Cuire à feu moyen en remuant sans arrêt jusqu'à ce que ça bouillonne et épaississe comme un flan. Laisser tiédir.", "Meringue : monter les blancs en neige ferme avec quelques gouttes de jus de citron, puis ajouter le reste du sucre petit à petit en battant jusqu'à ce qu'elle soit brillante.", "Verser la crème sur le fond, couvrir d'une épaisse couche de meringue en formant des petites pointes, et parsemer des miettes gardées de côté.", "Cuire environ 10 min en surveillant, jusqu'à ce que la meringue soit dorée. Mettre au frais et manger dans les heures qui suivent (la meringue ramollit ensuite)."]
  },
  {
    id: "hodge-podge", nom: "Hodge podge (légumes nouveaux mijotés au lait)", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "TheMealDB", idSource: "53340",
    ingredients: [
      { id: "pomme-de-terre", quantite: 250, unite: "g" },
      { id: "carotte", quantite: 3, unite: "pièce" },
      { id: "haricots-verts", quantite: 80, unite: "g" },
      { id: "petits-pois", quantite: 50, unite: "g" },
      { id: "beurre", quantite: 50, unite: "g" },
      { id: "lait", quantite: 350, unite: "ml" },
      { id: "creme-fraiche", quantite: 60, unite: "ml" },
      { id: "ciboulette", quantite: 5, unite: "g" },
      { id: "aneth", quantite: 3, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Couper les pommes de terre (des nouvelles, si possible) et les carottes en morceaux.", "Les cuire 5 min dans une grande casserole d'eau salée bouillante, jusqu'à ce qu'elles soient juste tendres. Ajouter les haricots verts coupés et les petits pois pour 1 min, puis égoutter.", "Dans une cocotte, faire fondre le beurre à feu moyen, ajouter les légumes et les réchauffer en remuant.", "Ajouter le lait et la crème et porter à ébullition, puis baisser le feu. Saler, poivrer, ajouter la ciboulette et l'aneth ciselés et laisser mijoter au moins 10 min. Servir chaud, en assiette creuse."]
  },
  {
    id: "biscuits-jam-jam", nom: "Biscuits jam-jam (biscuits à la mélasse fourrés à la confiture)", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 45, portions: 2,
    source: "TheMealDB", idSource: "53339",
    ingredients: [
      { id: "beurre", quantite: 115, unite: "g" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "melasse", quantite: 85, unite: "g", ou: { id: "miel", quantite: 85, unite: "g" } },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true },
      { id: "levure-chimique", quantite: 10, unite: "g" },
      { id: "eau", quantite: 20, unite: "ml" },
      { id: "cannelle", quantite: 2, unite: "g" },
      { id: "farine", quantite: 250, unite: "g" },
      { id: "confiture", quantite: 150, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 180 °C et couvrir une plaque de papier cuisson.", "Battre le beurre mou, le sucre et l'œuf jusqu'à ce que ce soit homogène, puis ajouter la mélasse et la vanille. Ajouter l'eau et mélanger encore 1 min.", "Dans un autre bol, mélanger la farine, la levure, la cannelle et le sel. Les ajouter petit à petit à la préparation : la pâte doit se façonner facilement.", "Former des petites boules, les poser sur la plaque et les aplatir avec un verre fariné. Cuire 10 à 12 min, puis laisser refroidir au moins 10 min.", "Assembler les biscuits deux par deux avec 2 cuillères à café de confiture au milieu. Parfait avec une tasse de thé (une douzaine de biscuits)."]
  },
  {
    id: "jiggs-dinner", nom: "Jiggs dinner (bœuf bouilli, purée de pois cassés et légumes)", cuisine: "canadienne",
    difficulte: "moyen", tempsMinutes: 170, portions: 2,
    source: "TheMealDB", idSource: "53335",
    ingredients: [
      { id: "boeuf-a-bouillir", quantite: 400, unite: "g", ou: { id: "poitrine-de-porc", quantite: 400, unite: "g" } },
      { id: "pois-casses", quantite: 100, unite: "g", ou: { id: "lentilles", quantite: 100, unite: "g" } },
      { id: "chou", quantite: 500, unite: "g" },
      { id: "carotte", quantite: 2, unite: "pièce" },
      { id: "navet", quantite: 1, unite: "pièce", optionnel: true },
      { id: "pomme-de-terre", quantite: 400, unite: "g" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "eau", quantite: 2500, unite: "ml" },
      { id: "sel", quantite: 10, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["À Terre-Neuve, on utilise du bœuf salé qu'on dessale une nuit dans l'eau froide. Avec du bœuf demi-sel (ou du petit salé), le faire tremper aussi ; avec du bœuf frais, saler simplement l'eau de cuisson. Les pois cassés n'ont pas besoin de trempage.", "Mettre la viande en gros morceaux dans une grande marmite, couvrir largement d'eau, porter à ébullition puis laisser frémir 2 h.", "Pendant ce temps, cuire les pois cassés à part 45 min dans une petite casserole, couverts d'une louche de bouillon de la marmite et d'eau, jusqu'à ce qu'ils se défassent. Égoutter et écraser avec le beurre et du poivre : c'est le « pease pudding ».", "Ajouter le chou coupé en quartiers dans la marmite et cuire 20 min. Ajouter les carottes, le navet et les pommes de terre en morceaux et cuire encore 20 min, jusqu'à ce que les légumes soient tendres.", "Servir la viande tranchée avec les légumes et la purée de pois. Le bouillon se boit tel quel ou se fait réduire en sauce pour napper l'assiette."]
  },
  {
    id: "feves-au-lard-a-la-melasse", nom: "Fèves au lard à la mélasse", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 110, portions: 2,
    source: "TheMealDB", idSource: "53336",
    ingredients: [
      { id: "haricots-blancs-en-boite", quantite: 2, unite: "boîte" },
      { id: "lardons", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "melasse", quantite: 50, unite: "g", ou: { id: "miel", quantite: 40, unite: "g" } },
      { id: "cassonade", quantite: 25, unite: "g", ou: { id: "sucre", quantite: 25, unite: "g" } },
      { id: "vinaigre", quantite: 15, unite: "ml" },
      { id: "moutarde-en-poudre", quantite: 2, unite: "g", ou: { id: "moutarde", quantite: 10, unite: "g" } },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 160 °C. Rincer et égoutter les haricots (la recette d'origine part de haricots secs trempés une nuit et cuits 30 min : ici, des haricots en boîte déjà cuits).", "Dans une cocotte qui va au four, faire dorer les lardons à feu moyen-vif jusqu'à ce qu'ils rendent leur gras, puis ajouter l'oignon émincé et cuire jusqu'à ce qu'il soit tendre.", "Ajouter les haricots, la mélasse, la cassonade, le vinaigre (de cidre si possible), la moutarde, le sel, le poivre et l'eau. Bien mélanger.", "Enfourner sans couvercle 1 h 30, en remuant de temps en temps, jusqu'à ce que la sauce soit épaisse et caramélisée sur les bords. Rajouter un peu d'eau si ça sèche."]
  },
  {
    id: "barres-nanaimo", nom: "Barres Nanaimo (chocolat, coco et crème vanillée)", cuisine: "canadienne",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52924",
    ingredients: [
      { id: "beurre", quantite: 140, unite: "g" },
      { id: "sucre", quantite: 25, unite: "g" },
      { id: "cacao-en-poudre", quantite: 20, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "biscuits-secs", quantite: 100, unite: "g" },
      { id: "noix-de-coco-rapee", quantite: 50, unite: "g" },
      { id: "amandes", quantite: 25, unite: "g", optionnel: true },
      { id: "creme-fraiche", quantite: 30, unite: "ml" },
      { id: "fecule", quantite: 12, unite: "g" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true },
      { id: "sucre-glace", quantite: 125, unite: "g" },
      { id: "chocolat-noir", quantite: 75, unite: "g" }
    ],
    etapes: ["Couche du bas : au bain-marie, faire fondre 65 g de beurre avec le sucre et le cacao en remuant. Ajouter l'œuf battu et fouetter 2 à 3 min jusqu'à ce que ça épaississe. Hors du feu, ajouter les biscuits écrasés en miettes, la noix de coco et les amandes hachées. Tasser dans un petit moule carré (15 cm) ou un moule à cake chemisé de papier cuisson. 10 min au frais.", "Couche du milieu : fouetter 50 g de beurre mou avec la crème, la fécule et la vanille (ils remplacent la poudre à crème anglaise « custard »), puis ajouter le sucre glace petit à petit jusqu'à obtenir une crème légère. L'étaler sur la première couche et remettre au frais au moins 10 min.", "Couche du dessus : faire fondre le chocolat avec le reste du beurre (au micro-ondes ou au bain-marie) et l'étaler sur la crème.", "Laisser prendre au frais environ 2 h, puis démouler et couper en carrés (pour plusieurs goûters)."]
  },
  {
    id: "pate-chinois", nom: "Pâté chinois (bœuf, maïs et purée gratinés)", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52930",
    ingredients: [
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "lait", quantite: 90, unite: "ml" },
      { id: "boeuf-hache", quantite: 250, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "mais-en-boite", quantite: 1, unite: "boîte" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "persil", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 3, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire les pommes de terre épluchées dans de l'eau salée jusqu'à ce qu'elles soient très tendres. Égoutter et écraser avec 15 g de beurre, puis ajouter 60 ml de lait pour faire une purée. Saler, poivrer.", "Préchauffer le four à 190 °C.", "Dans une poêle, faire dorer l'oignon haché dans le reste du beurre, ajouter la viande et cuire jusqu'à ce qu'elle soit dorée. Saler, poivrer.", "Égoutter le maïs et en mixer ou écraser la moitié avec le reste du lait (cela remplace le maïs en crème), puis mélanger avec le reste des grains.", "Dans un petit plat à gratin, tasser la viande, couvrir avec le maïs, puis avec la purée. Saupoudrer de paprika et de persil.", "Cuire environ 30 min, puis 2 à 3 min sous le gril pour dorer le dessus. Laisser reposer 10 min avant de servir."]
  },
  {
    id: "pouding-chomeur", nom: "Pouding chômeur (gâteau au sirop d'érable)", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 50, portions: 2,
    source: "TheMealDB", idSource: "52932",
    ingredients: [
      { id: "beurre", quantite: 95, unite: "g" },
      { id: "sucre", quantite: 100, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true },
      { id: "farine", quantite: 125, unite: "g" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "lait", quantite: 150, unite: "ml" },
      { id: "sirop-d-erable", quantite: 180, unite: "ml" },
      { id: "cassonade", quantite: 150, unite: "g" },
      { id: "creme-fraiche", quantite: 180, unite: "ml" }
    ],
    etapes: ["Préchauffer le four à 160 °C et beurrer un plat d'environ 20 cm.", "Pâte : battre 55 g de beurre mou avec le sucre jusqu'à ce que ce soit léger, puis ajouter l'œuf et la vanille. Mélanger la farine et la levure, puis les ajouter en alternant avec le lait. Verser dans le plat.", "Sauce : dans une casserole, porter à ébullition le sirop d'érable, la cassonade, la crème et le reste du beurre en remuant sans arrêt. Baisser le feu et cuire 2 min, jusqu'à ce que la sauce réduise un peu.", "Verser doucement la sauce chaude sur la pâte (elle va passer dessous en cuisant).", "Cuire environ 35 min, jusqu'à ce que le gâteau soit doré et qu'un cure-dent planté dans la partie gâteau ressorte propre. Servir tiède, avec la sauce au fond."]
  },
  {
    id: "poutine", nom: "Poutine (frites, fromage et sauce brune)", cuisine: "canadienne",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52804",
    ingredients: [
      { id: "pomme-de-terre", quantite: 600, unite: "g" },
      { id: "huile-de-tournesol", quantite: 750, unite: "ml" },
      { id: "cheddar", quantite: 150, unite: "g", ou: { id: "mozzarella", quantite: 150, unite: "g" } },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "farine", quantite: 20, unite: "g" },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 300, unite: "ml" },
      { id: "sauce-worcestershire", quantite: 5, unite: "ml", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Sauce brune (elle remplace la sauce en boîte) : faire fondre le beurre dans une casserole, ajouter la farine et remuer 2 à 3 min jusqu'à ce qu'elle prenne une couleur noisette. Verser l'eau chaude avec le bouillon cube (de bœuf de préférence) émietté en fouettant, ajouter la sauce Worcestershire et du poivre, et laisser épaissir 5 min à feu doux. Garder au chaud.", "Éplucher les pommes de terre, les couper en frites fines, les rincer et bien les sécher.", "Chauffer l'huile à 185 °C dans une casserole profonde ou une friteuse. Cuire les frites en deux fois, environ 5 min, jusqu'à ce qu'elles soient dorées. Égoutter sur du papier absorbant et saler.", "Mettre les frites dans les assiettes, parsemer le fromage en petits morceaux (en grains au Québec ; ici cheddar ou mozzarella), puis napper de sauce bien chaude pour qu'il fonde un peu. Servir aussitôt."]
  },
  {
    id: "rapure-acadienne", nom: "Râpure acadienne (gratin de pommes de terre râpées au poulet)", cuisine: "canadienne",
    difficulte: "difficile", tempsMinutes: 120, portions: 2,
    source: "TheMealDB", idSource: "52933",
    ingredients: [
      { id: "pomme-de-terre", quantite: 1000, unite: "g" },
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "beurre", quantite: 20, unite: "g" },
      { id: "bouillon-cube", quantite: 2, unite: "pièce" },
      { id: "eau", quantite: 1200, unite: "ml" },
      { id: "sel", quantite: 4, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Faire fondre le beurre dans une poêle et y cuire l'oignon émincé 5 min, puis 30 min à feu doux en remuant de temps en temps, jusqu'à ce qu'il soit bien tendre et brun.", "Porter l'eau à ébullition avec les bouillons cubes, y plonger les blancs de poulet et les cuire 20 min à petit feu. Les retirer et garder le bouillon.", "Préchauffer le four à 200 °C et beurrer un plat à gratin.", "Éplucher et râper très finement les pommes de terre, puis les presser fort dans un torchon propre pour retirer le plus d'eau possible. Mettre la pulpe dans un saladier, saler, poivrer, et ajouter du bouillon chaud petit à petit en mélangeant jusqu'à obtenir la consistance d'un porridge épais.", "Étaler la moitié des pommes de terre dans le plat, couvrir avec le poulet coupé en morceaux et l'oignon, puis avec le reste des pommes de terre.", "Cuire environ 1 h, jusqu'à ce que le dessus soit bien doré et croustillant. Servir avec le reste du bouillon réchauffé, à verser dans l'assiette."]
  },
  {
    id: "tarte-aux-petits-fruits-saskatoon", nom: "Tarte aux petits fruits (façon tarte aux baies de Saskatoon)", cuisine: "canadienne",
    difficulte: "moyen", tempsMinutes: 80, portions: 2,
    source: "TheMealDB", idSource: "53337",
    ingredients: [
      { id: "pate-brisee", quantite: 2, unite: "pièce" },
      { id: "myrtilles", quantite: 500, unite: "g" },
      { id: "sucre", quantite: 80, unite: "g" },
      { id: "fecule", quantite: 20, unite: "g" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Préchauffer le four à 180 °C, grille dans le bas du four, et poser une feuille de papier aluminium sur la plaque pour récupérer le jus. (La recette d'origine fait sa pâte maison avec farine, beurre, graisse végétale, œuf et vinaigre : ici, de la pâte brisée toute prête.)", "Garnir un moule à tarte de 20 cm avec une pâte, en la laissant dépasser des bords.", "Mélanger les myrtilles (fraîches ou surgelées, elles remplacent les baies de Saskatoon, introuvables en France) avec 70 g de sucre et la fécule. Verser dans le fond de tarte et parsemer de petits morceaux de beurre.", "Découper la seconde pâte en larges bandes et les tresser en croisillons sur les fruits. Replier les bords de la pâte du fond par-dessus pour enfermer le jus.", "Badigeonner d'œuf battu, saupoudrer du reste du sucre et cuire environ 1 h, jusqu'à ce que la pâte soit dorée et que le jus bouillonne. Servir tiède ou froid, avec de la crème fouettée ou une glace (6 parts : se garde 4 jours au frais)."]
  },
  {
    id: "soupe-aux-pois-casses-et-jambon", nom: "Soupe aux pois cassés et au jambon", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "52925",
    ingredients: [
      { id: "poitrine-de-porc", quantite: 250, unite: "g", ou: { id: "lardons", quantite: 150, unite: "g" } },
      { id: "pois-casses", quantite: 100, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "carotte", quantite: 1, unite: "pièce" },
      { id: "celeri-branche", quantite: 1, unite: "pièce", optionnel: true },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "petits-pois", quantite: 150, unite: "g" },
      { id: "eau", quantite: 1000, unite: "ml" },
      { id: "pain", quantite: 2, unite: "tranche", optionnel: true },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["La recette d'origine fait cuire un jarret de jambon entier dans la soupe : ici, un morceau de poitrine de porc (demi-sel si possible) ou des lardons. Si la viande est salée, la mettre dans une casserole d'eau froide, porter à ébullition et jeter cette eau.", "Mettre dans une grande casserole la viande, l'eau, les pois cassés rincés, l'oignon, la carotte et le céleri hachés, et le laurier. Porter à ébullition puis laisser mijoter 1 h 15 à 1 h 30, en rajoutant de l'eau si besoin, jusqu'à ce que la viande soit tendre.", "Sortir la viande, retirer la couenne et l'effilocher à la fourchette.", "Retirer le laurier, ajouter les petits pois et cuire 1 min, puis mixer la soupe jusqu'à ce qu'elle soit lisse (ajouter un peu d'eau si elle est trop épaisse). Goûter avant de saler : la viande apporte déjà du sel.", "Mélanger la soupe avec presque toute la viande, garder le reste pour le dessus. Servir avec du pain beurré."]
  },
  {
    id: "tarte-au-sucre", nom: "Tarte au sucre (sans pâte)", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 60, portions: 2,
    source: "TheMealDB", idSource: "52931",
    ingredients: [
      { id: "cassonade", quantite: 200, unite: "g" },
      { id: "beurre", quantite: 30, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "extrait-de-vanille", quantite: 3, unite: "ml", optionnel: true },
      { id: "farine", quantite: 35, unite: "g" },
      { id: "lait", quantite: 180, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 175 °C et beurrer un petit moule à tarte (environ 18 cm).", "Battre la cassonade et le beurre mou jusqu'à obtenir un mélange crémeux, sans grumeaux. Ajouter l'œuf, puis la vanille et le sel.", "Ajouter la farine petit à petit, puis le lait, pour obtenir une pâte crémeuse et liquide. Verser dans le moule.", "Cuire 30 min, puis couvrir le bord d'aluminium pour qu'il ne brûle pas et cuire encore 10 à 15 min, jusqu'à ce que le centre soit pris et que le dessus forme une croûte.", "Laisser refroidir, puis mettre au moins 1 h au frais avant de servir."]
  },
  {
    id: "trous-de-beignes", nom: "Trous de beignes (petits beignets ronds au sucre)", cuisine: "canadienne",
    difficulte: "facile", tempsMinutes: 30, portions: 2,
    source: "TheMealDB", idSource: "52929",
    ingredients: [
      { id: "farine", quantite: 125, unite: "g" },
      { id: "sucre", quantite: 65, unite: "g" },
      { id: "levure-chimique", quantite: 8, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 90, unite: "ml" },
      { id: "huile-de-tournesol", quantite: 520, unite: "ml" },
      { id: "cannelle", quantite: 2, unite: "g", optionnel: true },
      { id: "sucre-glace", quantite: 20, unite: "g", optionnel: true },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Dans un saladier, mélanger la farine, 35 g de sucre, la levure et le sel.", "Dans un bol, battre l'œuf avec le lait et 20 ml d'huile, puis verser sur les ingrédients secs et mélanger jusqu'à ce que la pâte soit lisse.", "Chauffer le reste de l'huile à 185 °C (pas plus) dans une casserole profonde. Y faire tomber la pâte par petites cuillères à café (pas plus grosses), en retournant les beignets jusqu'à ce qu'ils soient dorés de tous les côtés. Égoutter sur du papier absorbant.", "Rouler les beignets encore chauds dans le reste du sucre mélangé à la cannelle, ou les saupoudrer de sucre glace."]
  }
]);
