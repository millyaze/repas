// ============================================================
// RECETTES : cuisine thaïlandaise, reprises de Wikilivres (3 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "khao-soi", nom: "Khao soi (nouilles au curry jaune et lait de coco)", cuisine: "thaïlandaise", type: "soupe",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Khao soy",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FKhao_soy",
    ingredients: [
      { id: "nouilles-chinoises", quantite: 200, unite: "g" },
      { id: "ail", quantite: 4, unite: "gousse" },
      { id: "pate-de-curry", quantite: 30, unite: "g" },
      { id: "lait-de-coco", quantite: 250, unite: "ml" },
      { id: "porc-hache", quantite: 200, unite: "g", ou: { id: "blanc-de-poulet", quantite: 1, unite: "pièce" } },
      { id: "bouillon-cube", quantite: 1, unite: "pièce" },
      { id: "eau", quantite: 500, unite: "ml" },
      { id: "curcuma", quantite: 1, unite: "g" },
      { id: "oeuf", quantite: 1, unite: "pièce" },
      { id: "sauce-poisson", quantite: 30, unite: "ml" },
      { id: "citron-vert", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Cuire l'œuf 10 min pour qu'il soit dur, l'écaler. Cuire les nouilles aux œufs selon le paquet et les répartir dans 2 bols.", "Dans une casserole, chauffer le lait de coco à feu moyen et y délayer la pâte de curry jaune (ou massaman).", "Remuer doucement. Quand ça bout, ajouter l'ail haché, 500 ml de bouillon de poule (fait avec le cube), le curcuma, la sauce de poisson et 2 cuillères à café de jus de citron vert.", "Après 1 min, ajouter le porc haché (ou le poulet en petits morceaux) et cuire jusqu'à ce qu'il soit bien cuit.", "Verser la soupe sur les nouilles, ajouter un demi-œuf dur par bol et servir."]
  },
  {
    id: "nam-prik-kapi", nom: "Nam prik kapi (sauce pimentée thaïlandaise aux crevettes)", cuisine: "thaïlandaise", type: "sauce",
    difficulte: "facile", tempsMinutes: 15, portions: 2,
    source: "Wikilivres", idSource: "Nam Prik Kapi",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FNam_Prik_Kapi",
    ingredients: [
      { id: "crevettes-sechees", quantite: 15, unite: "g" },
      { id: "ail", quantite: 2, unite: "gousse" },
      { id: "piment-frais", quantite: 2, unite: "pièce" },
      { id: "pate-de-crevettes", quantite: 15, unite: "g" },
      { id: "sauce-poisson", quantite: 25, unite: "ml" },
      { id: "sucre-de-palme", quantite: 15, unite: "g", ou: { id: "cassonade", quantite: 15, unite: "g" } },
      { id: "citron", quantite: 1, unite: "pièce" }
    ],
    etapes: ["Pilez finement les crevettes séchées dans un mortier. Pelez l'ail.", "Lavez les piments, retirez les graines et les membranes.", "Pilez ensemble l'ail, les piments et la pâte de crevettes.", "Ajoutez les crevettes pilées, la sauce de poisson (nam pla), le sucre de palme et le jus du citron.", "Mélangez jusqu'à obtenir une pâte lisse."]
  },
  {
    id: "poulet-thai-lait-de-coco-citronnelle", nom: "Poulet thaï au lait de coco et à la citronnelle, riz parfumé", cuisine: "thaïlandaise", type: "plat",
    difficulte: "facile", tempsMinutes: 35, portions: 2,
    source: "Wikilivres", idSource: "Poulet thaï",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FPoulet_tha%C3%AF",
    ingredients: [
      { id: "blanc-de-poulet", quantite: 2, unite: "pièce" },
      { id: "riz", quantite: 160, unite: "g" },
      { id: "lait-de-coco", quantite: 400, unite: "ml" },
      { id: "citron-vert", quantite: 1, unite: "pièce" },
      { id: "citronnelle", quantite: 1, unite: "pièce" },
      { id: "piment-frais", quantite: 2, unite: "pièce" },
      { id: "gingembre", quantite: 5, unite: "g" },
      { id: "huile-de-tournesol", quantite: 15, unite: "ml" },
      { id: "sauce-soja", quantite: 15, unite: "ml" },
      { id: "eau", quantite: 250, unite: "ml" }
    ],
    etapes: ["Laver le riz 5 fois, jusqu'à ce que l'eau de rinçage soit claire. Le mettre dans une casserole avec 250 ml d'eau, à feu vif.", "Dès que l'eau bout, couvrir et laisser cuire à feu très doux, environ 10 minutes, jusqu'à ce que toute l'eau soit absorbée et que le riz soit légèrement collant. Couper le feu et laisser reposer sous un linge humide.", "Écraser les piments en purée, hacher le gingembre et émincer la citronnelle.", "Dans une poêle, chauffer un peu d'huile et y faire revenir le poulet coupé en petits bâtonnets.", "Quand il est doré, ajouter le jus de citron vert, le gingembre et la purée de piment. Laisser mijoter 2 minutes à feu moyen.", "Ajouter le lait de coco, la citronnelle et la sauce soja, puis laisser cuire 5 minutes à petit bouillon.", "Servir le poulet sur le riz. Si le riz n'est pas cuit quand il n'y a plus d'eau, en rajouter un peu et laisser sur feu très bas."]
  }
]);
