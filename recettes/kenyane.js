// ============================================================
// RECETTES : cuisine kényane (5 recettes, pour 2 personnes)
// Importées de TheMealDB (themealdb.com), traduites et adaptées par Claude.
// Même format que recettes/turque.js
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "mandazi-beignets-kenyans", nom: "Mandazi (beignets kényans)", cuisine: "kényane",
    difficulte: "moyen", tempsMinutes: 40, portions: 2,
    source: "TheMealDB", idSource: "52967",
    ingredients: [
      { id: "farine-a-levure-incorporee", quantite: 200, unite: "g", ou: { id: "farine", quantite: 200, unite: "g" } },
      { id: "levure-chimique", quantite: 8, unite: "g", optionnel: true },
      { id: "sucre", quantite: 20, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "lait", quantite: 70, unite: "ml", ou: { id: "lait-de-coco", quantite: 70, unite: "ml" } },
      { id: "cannelle", quantite: 1, unite: "g", optionnel: true },
      { id: "huile-de-tournesol", quantite: 300, unite: "ml" }
    ],
    etapes: ["Mélanger la farine à levure incorporée (ou la farine ordinaire avec la levure chimique), le sucre et la cannelle dans un saladier.", "Dans un bol, battre l'œuf avec le lait.", "Creuser un puits dans la farine, y verser le mélange œuf-lait et mélanger doucement jusqu'à former une pâte (ajouter un peu de lait si elle est trop sèche).", "Pétrir 3 à 4 min jusqu'à ce que la pâte soit lisse et ne colle plus. Couvrir d'un torchon humide et laisser reposer 15 min.", "Étaler la pâte sur 1 cm d'épaisseur sur le plan de travail fariné et la couper en triangles ou en carrés.", "Chauffer l'huile dans une casserole et y cuire les morceaux quelques-uns à la fois, jusqu'à ce qu'ils soient dorés d'un côté, puis de l'autre. Égoutter sur du papier absorbant et servir tiède ou froid."]
  },
  {
    id: "curry-de-boeuf-kenyan", nom: "Curry de bœuf kényan", cuisine: "kényane",
    difficulte: "moyen", tempsMinutes: 100, portions: 2,
    source: "TheMealDB", idSource: "53112",
    ingredients: [
      { id: "steak-de-boeuf", quantite: 400, unite: "g", ou: { id: "boeuf-a-braiser", quantite: 400, unite: "g" } },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "gingembre-en-poudre", quantite: 2, unite: "g", ou: { id: "gingembre", quantite: 5, unite: "g" } },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "paprika", quantite: 8, unite: "g" },
      { id: "curry-en-poudre", quantite: 3, unite: "g" },
      { id: "concentre-de-tomate", quantite: 30, unite: "g", ou: { id: "sauce-tomate", quantite: 60, unite: "g" } },
      { id: "piment-frais", quantite: 1, unite: "pièce", optionnel: true },
      { id: "coriandre", quantite: 5, unite: "g", optionnel: true },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Porter l'eau à ébullition dans une cocotte, ajouter le bœuf en cubes, l'ail écrasé et le gingembre. Couvrir et cuire 20 min à petit frémissement, en retirant l'écume si besoin.", "Égoutter la viande en gardant l'eau de cuisson.", "Dans la cocotte, chauffer l'huile et faire revenir l'oignon émincé 5 à 7 min. Ajouter les tomates en morceaux et cuire 3 à 5 min, jusqu'à ce qu'elles se défassent.", "Ajouter la viande et cuire 5 min en remuant, puis le paprika, le poivre, le curry, le concentré de tomate et le sel.", "Verser l'eau de cuisson gardée (et un peu plus si besoin pour couvrir), porter à ébullition, puis laisser mijoter à découvert environ 1 h, jusqu'à ce que la viande soit tendre et la sauce épaisse. Rajouter de l'eau si ça attache.", "Goûter, rectifier l'assaisonnement et servir parsemé de piment frais et de coriandre."]
  },
  {
    id: "mbuzi-choma-ugali-kachumbari", nom: "Mbuzi choma (chèvre grillée, ugali et kachumbari)", cuisine: "kényane",
    difficulte: "moyen", tempsMinutes: 70, portions: 2,
    source: "TheMealDB", idSource: "52968",
    ingredients: [
      { id: "viande-de-chevre", quantite: 400, unite: "g", ou: { id: "gigot-d-agneau", quantite: 400, unite: "g" } },
      { id: "farine-de-mais", quantite: 150, unite: "g", ou: { id: "semoule-de-mais", quantite: 150, unite: "g" } },
      { id: "eau", quantite: 400, unite: "ml" },
      { id: "tomate", quantite: 2, unite: "pièce" },
      { id: "oignon", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 1, unite: "pièce" },
      { id: "coriandre", quantite: 15, unite: "g" },
      { id: "sel", quantite: 3, unite: "g" }
    ],
    etapes: ["Viande de chèvre (ou d'agneau, plus facile à trouver) : la couper en gros morceaux et la griller environ 50 min à feu moyen (barbecue ou four en position gril), en la retournant et en la salant à chaque fois.", "Ugali : porter l'eau salée à ébullition dans une casserole à fond épais. Verser la farine de maïs en pluie en remuant.", "Baisser le feu et remuer sans arrêt en écrasant les grumeaux, environ 10 min, jusqu'à ce que la pâte soit très épaisse et se détache des bords.", "Retirer du feu, laisser tiédir, puis former une boule avec les mains mouillées.", "Kachumbari : mélanger les tomates en dés, l'oignon émincé finement, le piment haché et la coriandre ciselée, saler.", "Servir la viande avec l'ugali et le kachumbari."]
  },
  {
    id: "sukuma-wiki-chou-kale-a-la-creme", nom: "Sukuma wiki (chou kale à la crème)", cuisine: "kényane",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "TheMealDB", idSource: "53113",
    ingredients: [
      { id: "chou-kale", quantite: 250, unite: "g", ou: { id: "epinards", quantite: 250, unite: "g" } },
      { id: "oignon-rouge", quantite: 1, unite: "pièce", ou: { id: "oignon", quantite: 1, unite: "pièce" } },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "creme-liquide", quantite: 120, unite: "ml", ou: { id: "creme-fraiche", quantite: 120, unite: "ml" } },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Chauffer l'huile dans une grande poêle à feu moyen et faire revenir l'oignon émincé 5 à 7 min, jusqu'à ce qu'il soit tendre.", "Ajouter le chou kale coupé en fines lanières, bien mélanger, baisser le feu, couvrir et cuire 5 min.", "Retirer le couvercle, saler, ajouter la crème et cuire encore 5 min à découvert en remuant de temps en temps : la crème épaissit légèrement.", "Servir avec un ragoût kényan et de l'ugali."]
  },
  {
    id: "ugali-pate-de-mais", nom: "Ugali (pâte de maïs kényane)", cuisine: "kényane",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "TheMealDB", idSource: "53114",
    ingredients: [
      { id: "farine-de-mais", quantite: 120, unite: "g", ou: { id: "semoule-de-mais", quantite: 120, unite: "g" } },
      { id: "eau", quantite: 250, unite: "ml" },
      { id: "sel", quantite: 1, unite: "g" }
    ],
    etapes: ["Porter l'eau salée à ébullition dans une casserole moyenne.", "Baisser le feu et verser la farine de maïs petit à petit en fouettant sans arrêt : la pâte épaissit très vite.", "Continuer à cuire à feu doux en remuant avec une cuillère en bois solide, jusqu'à ce que la pâte se détache des bords, se tienne et sente le maïs grillé.", "La retourner aussitôt sur un plat et lui donner la forme d'un disque épais. En refroidissant, elle durcit et se coupe au couteau, comme une polenta ferme."]
  }
]);
