// ============================================================
// RECETTES : cuisine belge, reprises de Wikilivres (7 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "carbonade-flamande", nom: "Carbonade flamande (bœuf à la bière)", cuisine: "belge", type: "plat",
    difficulte: "moyen", tempsMinutes: 135, portions: 2,
    source: "Wikilivres", idSource: "Carbonade flamande",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FCarbonade_flamande",
    ingredients: [
      { id: "boeuf-a-braiser", quantite: 330, unite: "g", ou: { id: "epaule-de-porc", quantite: 330, unite: "g" } },
      { id: "farine", quantite: 15, unite: "g" },
      { id: "saindoux", quantite: 15, unite: "g", ou: { id: "beurre", quantite: 15, unite: "g" } },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "thym", quantite: 1, unite: "g" },
      { id: "laurier", quantite: 1, unite: "pièce" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" },
      { id: "biere", quantite: 110, unite: "ml" },
      { id: "sucre-roux", quantite: 10, unite: "g", ou: { id: "cassonade", quantite: 10, unite: "g" } },
      { id: "pain-d-epices", quantite: 35, unite: "g" },
      { id: "moutarde", quantite: 10, unite: "g" }
    ],
    etapes: ["Couper la viande (joue ou paleron de bœuf, ou porc à braiser) en gros cubes et les rouler dans la farine.", "Chauffer le saindoux (ou le beurre) dans une cocotte et y dorer les morceaux de viande.", "Ajouter l'oignon haché, le thym et le laurier (en petit bouquet), saler et poivrer. Couvrir avec 110 ml de bière brune et ajouter le sucre roux (idéalement de la cassonade blonde).", "Couvrir et laisser mijoter à feu doux 1 h 30 (plus longtemps si vous avez le temps, en rallongeant avec un peu d'eau ou de bière).", "Tartiner le pain d'épices de moutarde, l'émietter dans la sauce pour l'épaissir et cuire encore quelques minutes.", "Servir avec des frites ou des pommes de terre vapeur."]
  },
  {
    id: "gaufres-a-la-biere", nom: "Gaufres à la bière (pâte sans levure de boulanger, environ 5 gaufres)", cuisine: "belge", type: "dessert",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Gaufre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FGaufre",
    ingredients: [
      { id: "farine", quantite: 170, unite: "g" },
      { id: "sucre", quantite: 85, unite: "g" },
      { id: "levure-chimique", quantite: 7, unite: "g" },
      { id: "sel", quantite: 1, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "beurre", quantite: 85, unite: "g" },
      { id: "biere", quantite: 170, unite: "ml" },
      { id: "eau-de-fleur-d-oranger", quantite: 10, unite: "ml", ou: { id: "rhum", quantite: 10, unite: "ml" }, optionnel: true }
    ],
    etapes: ["Dans un saladier, mélangez d'abord les ingrédients secs (farine, sucre, sel, levure) au fouet.", "Ajoutez les œufs et le beurre fondu, puis mélangez doucement jusqu'à obtenir une pâte homogène, encore un peu grumeleuse.", "Ajoutez la bière en plusieurs fois pour éviter qu'elle mousse trop, en mélangeant à chaque fois, jusqu'à ce que la pâte ne contienne plus de grumeaux. Le choix de la bière change beaucoup le goût. Parfumez, si vous voulez, d'un peu d'eau de fleur d'oranger ou de rhum.", "Quand le gaufrier est bien chaud, versez la pâte et laissez cuire environ 5 minutes par gaufre. Elles deviennent croustillantes quelques minutes après la cuisson.", "Elles se gardent 1 à 2 jours dans une boîte hermétique ou du papier aluminium : elles ramollissent mais restent très bonnes."]
  },
  {
    id: "palets-de-dame", nom: "Palets de dame (biscuits belges aux raisins, glacés au citron)", cuisine: "belge", type: "dessert",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Palet de dame",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPalet_de_dame",
    ingredients: [
      { id: "beurre", quantite: 60, unite: "g" },
      { id: "sucre", quantite: 60, unite: "g" },
      { id: "farine", quantite: 75, unite: "g" },
      { id: "raisins-secs", quantite: 40, unite: "g" },
      { id: "rhum", quantite: 15, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "sucre-glace", quantite: 70, unite: "g" },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Préchauffez le four à 200 °C (thermostat 7).", "Lavez les raisins et laissez-les tremper dans le rhum.", "Dans un saladier, fouettez le beurre mou avec le sucre. Ajoutez 1 œuf entier (séparez le second : gardez-en le blanc pour le glaçage), la farine et les raisins avec leur rhum.", "Déposez la pâte en petits tas aplatis, en forme de macarons, sur une plaque beurrée et farinée ou sur du papier sulfurisé. Laissez de la place entre les palets : ils s'étalent à la cuisson. Cela donne environ 10 palets.", "Enfournez environ 10 minutes, jusqu'à ce que les biscuits soient dorés. À la sortie du four, laissez-les refroidir sur une grille.", "Glaçage : faites chauffer à feu très doux le sucre glace, le blanc d'œuf légèrement battu et le jus d'un demi-citron, pendant 5 minutes, en remuant vigoureusement pour éviter les grumeaux.", "Nappez les palets de glaçage et laissez refroidir jusqu'à ce qu'il durcisse."]
  },
  {
    id: "salade-liegeoise", nom: "Salade liégeoise (haricots verts, pommes de terre et lard fumé)", cuisine: "belge", type: "plat",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Salade liégeoise",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSalade_li%C3%A9geoise",
    ingredients: [
      { id: "haricots-verts", quantite: 500, unite: "g" },
      { id: "pomme-de-terre", quantite: 500, unite: "g" },
      { id: "poitrine-fumee", quantite: 125, unite: "g" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "persil", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "vinaigre", quantite: 30, unite: "ml" },
      { id: "moutarde-a-l-ancienne", quantite: 8, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Cuire 500 g de pommes de terre nouvelles (rattes de préférence) avec la peau dans l'eau salée. Séparément, cuire 500 g de haricots verts fins (ou haricots princesse) dans l'eau salée en les gardant fermes.", "Frotter un grand saladier avec la gousse d'ail. Y mettre les haricots égouttés, puis les pommes de terre épluchées et coupées en cubes ou en rondelles.", "Couper 125 g de lard fumé en dés, les faire revenir à la poêle et les ajouter au saladier.", "Parsemer de persil haché et d'oignon coupé en fines rondelles (ou faire d'abord blondir l'oignon dans le gras du lard).", "Déglacer la poêle avec 2 cuillères à soupe de vinaigre (et, si on le souhaite, la moutarde à l'ancienne), laisser réduire 2 à 3 min. Verser ce vinaigre chaud dans le saladier, saler, poivrer et bien mélanger."]
  },
  {
    id: "speculoos", nom: "Spéculoos (biscuits épicés belges, environ 25 biscuits)", cuisine: "belge", type: "dessert",
    difficulte: "facile", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Spéculoos",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FSp%C3%A9culoos",
    ingredients: [
      { id: "farine", quantite: 250, unite: "g" },
      { id: "beurre", quantite: 75, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "cassonade", quantite: 150, unite: "g" },
      { id: "quatre-epices", quantite: 3, unite: "g" }
    ],
    etapes: ["Dans un grand bol, mélangez la cassonade, le beurre mou, les épices (mélange cannelle, gingembre, anis, clou de girofle moulu) et l'œuf.", "Incorporez peu à peu la farine. Quand la pâte devient épaisse, partagez-la en plusieurs morceaux.", "Farinez un moule à spéculoos, remplissez-le de pâte et retirez l'excédent avec un petit couteau. D'un geste sec, retournez le moule sur une plaque de cuisson graissée. Recommencez avec le reste de pâte (sans moule, étalez la pâte et découpez des biscuits à l'emporte-pièce).", "Enfournez la plaque dans le four préchauffé à 175 °C (thermostat 6) et laissez cuire environ 10 minutes. Cela donne environ 25 biscuits.", "Laissez les biscuits reposer sur une grille environ 24 heures avant de les déguster."]
  },
  {
    id: "tarte-au-sucre-pate-levee", nom: "Tarte au sucre (pâte levée, crème et sucre)", cuisine: "belge", type: "dessert",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "Wikilivres", idSource: "Desserts/Tarte au sucre",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FDesserts%2FTarte_au_sucre",
    ingredients: [
      { id: "farine", quantite: 100, unite: "g" },
      { id: "levure-de-boulanger", quantite: 8, unite: "g" },
      { id: "lait", quantite: 50, unite: "ml" },
      { id: "beurre", quantite: 25, unite: "g" },
      { id: "sucre", quantite: 20, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "creme-fraiche", quantite: 50, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Délayer la levure dans le lait tiède.", "Mettre la farine et le sel dans un saladier, faire un puits et y verser la levure délayée, un œuf battu et la moitié du sucre.", "Ajouter le beurre fondu petit à petit, pétrir et laisser reposer 30 minutes.", "Étaler la pâte et garnir un petit moule beurré (environ 18 cm). Piquer à la fourchette et saupoudrer du reste de sucre.", "Battre le second œuf avec la crème et verser dessus. Ajouter quelques noisettes de beurre.", "Cuire 20 à 25 minutes à 190 °C."]
  },
  {
    id: "tourteline", nom: "Tourteline (tarte aux poireaux et à la truite)", cuisine: "belge", type: "plat",
    difficulte: "moyen", tempsMinutes: 60, portions: 2,
    source: "Wikilivres", idSource: "Tourteline",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FTourteline",
    ingredients: [
      { id: "pate-feuilletee", quantite: 1, unite: "pièce" },
      { id: "poireau", quantite: 1, unite: "pièce" },
      { id: "truite", quantite: 250, unite: "g" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "lait", quantite: 200, unite: "ml" },
      { id: "beurre", quantite: 15, unite: "g" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Préchauffer le four à 200 °C. Étaler la pâte feuilletée dans un petit moule à tarte (environ 22 cm), la piquer et faire cuire le fond à blanc.", "Pendant ce temps, émincer le poireau et le faire cuire doucement avec le beurre, du sel et du poivre.", "Pocher la truite (environ 250 g) dans un court-bouillon. Quand elle est cuite, retirer la peau et les arêtes, puis la couper en petits morceaux.", "Répartir le poireau et la truite sur le fond de tarte cuit. Battre 2 œufs avec 200 ml de lait, du sel et du poivre, puis verser sur la garniture.", "Cuire au four 15 à 20 min."]
  }
]);
