// ============================================================
// RECETTES : cuisine japonaise, reprises de Wikilivres (4 recettes, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "black-samurai", nom: "Black Samurai (shooter de saké et de sauce soja)", cuisine: "japonaise", type: "boisson",
    difficulte: "facile", tempsMinutes: 5, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Black Samurai",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FBlack_Samurai",
    ingredients: [
      { id: "sake", quantite: 40, unite: "ml" },
      { id: "sauce-soja", quantite: 40, unite: "ml" }
    ],
    etapes: ["Versez dans chacun de deux shooters 2 cl de saké et 2 cl de sauce soja.", "Servez aussitôt."]
  },
  {
    id: "dorayaki", nom: "Dorayaki (pancakes japonais fourrés aux haricots rouges)", cuisine: "japonaise", type: "dessert",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Dorayaki",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FDorayaki",
    ingredients: [
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "farine", quantite: 90, unite: "g" },
      { id: "sucre", quantite: 20, unite: "g" },
      { id: "miel", quantite: 20, unite: "g" },
      { id: "eau", quantite: 30, unite: "ml" },
      { id: "levure-chimique", quantite: 3, unite: "g" },
      { id: "puree-de-haricots-rouges", quantite: 100, unite: "g" }
    ],
    etapes: ["Mélanger les œufs, le sucre, le miel et l'eau (ou du mirin à la place).", "Ajouter la levure chimique, puis la farine.", "Faire chauffer une grande poêle plate.", "Y déposer des ronds de pâte d'environ 9 cm, par paires.", "Dès que des bulles se forment sur toute la surface, retourner les pancakes quelques secondes.", "Poser deux pancakes côte à côte, déposer sur l'un d'eux une grosse noix de purée de haricots rouges sucrée, puis refermer avec le second en pressant légèrement les bords."]
  },
  {
    id: "magret-de-canard-mode-nipponne", nom: "Magret de canard à la japonaise (soja, gingembre et vin doux)", cuisine: "japonaise", type: "plat",
    difficulte: "facile", tempsMinutes: 25, portions: 2,
    source: "Wikilivres", idSource: "Magret de canard mode nipponne",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FMagret_de_canard_mode_nipponne",
    ingredients: [
      { id: "magret-de-canard", quantite: 1, unite: "pièce" },
      { id: "sauce-soja", quantite: 45, unite: "ml" },
      { id: "vin-doux-muscat", quantite: 20, unite: "ml", ou: { id: "mirin", quantite: 20, unite: "ml" } },
      { id: "gingembre", quantite: 10, unite: "g" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "ciboulette", quantite: 3, unite: "g" },
      { id: "eau", quantite: 30, unite: "ml" }
    ],
    etapes: ["Préparer la marinade : mélanger la sauce soja, le vin doux, le gingembre émincé et l'ail écrasé.", "Retirer la peau du magret en en gardant un morceau de côté. Couper la viande en gros dés et la laisser mariner un quart d'heure.", "Faire fondre à feu vif, quelques minutes, le morceau de peau gardé.", "Le retirer, mettre les dés de magret dans la graisse et les cuire 3 à 4 minutes à feu vif. Les déposer dans le plat de service.", "Faire chauffer le reste de marinade avec l'eau, la filtrer à la passoire et en napper les dés de magret.", "Parsemer de ciboulette ciselée et servir chaud."]
  },
  {
    id: "tamagozake", nom: "Tamagozake (saké chaud à l'œuf et au miel)", cuisine: "japonaise", type: "boisson",
    difficulte: "facile", tempsMinutes: 10, portions: 2,
    source: "Wikilivres", idSource: "Boissons/Cocktails/Tamagozake",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FBoissons%2FCocktails%2FTamagozake",
    ingredients: [
      { id: "sake", quantite: 80, unite: "ml" },
      { id: "oeuf", quantite: 2, unite: "pièce" },
      { id: "miel", quantite: 55, unite: "g" }
    ],
    etapes: ["Dans une petite casserole, mettez le saké (4 cl par verre), les œufs et le miel (environ 2 cl par verre).", "Chauffez doucement en remuant sans cesse au fouet, sans laisser cuire l'œuf en omelette.", "Versez dans deux verres à grog et servez chaud."]
  }
]);
