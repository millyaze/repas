// ============================================================
// RECETTES : cuisine turque, reprises de Wikilivres (1 recette, pour 2 personnes)
// Source : fr.wikibooks.org (Livre de cuisine), licence CC BY-SA : chaque recette garde
// le lien vers sa page d'origine (lienSource), affiché en bas de la recette.
// Textes adaptés par Claude. Même format que recettes/espagnole.js (+ lienSource).
// « ou » = remplaçant accepté quand l'ingrédient d'origine manque.
// ============================================================
ajouterRecettes([
  {
    id: "ali-nazik-kebabi", nom: "Ali nazik kebabi (aubergines fumées au yaourt, viande hachée)", cuisine: "turque", type: "plat",
    difficulte: "moyen", tempsMinutes: 55, portions: 2,
    source: "Wikilivres", idSource: "Aubergines à la viande hachée et au yoghourt (ali nazik kebabi)",
    lienSource: "https://fr.wikibooks.org/wiki/Livre_de_cuisine%2FAubergines_%C3%A0_la_viande_hach%C3%A9e_et_au_yoghourt_(ali_nazik_kebabi)",
    ingredients: [
      { id: "agneau-hache", quantite: 200, unite: "g", ou: { id: "boeuf-hache", quantite: 200, unite: "g" } },
      { id: "margarine", quantite: 10, unite: "g" },
      { id: "paprika", quantite: 1, unite: "g" },
      { id: "aubergine", quantite: 2, unite: "pièce" },
      { id: "ail", quantite: 1, unite: "gousse" },
      { id: "yaourt-nature", quantite: 3, unite: "pièce" },
      { id: "poivron", quantite: 1, unite: "pièce" },
      { id: "huile-de-tournesol", quantite: 10, unite: "ml" },
      { id: "sel", quantite: 2, unite: "g" },
      { id: "poivre", quantite: 1, unite: "g" }
    ],
    etapes: ["Mettre la margarine et la viande hachée dans une casserole, couvrir et cuire 20 à 25 minutes à feu doux, en remuant de temps en temps, jusqu'à ce que la viande ait absorbé son jus.", "Ajouter la moitié du sel, le poivre et le paprika, puis mélanger.", "Laver et essuyer les aubergines, les cuire directement sur la flamme du feu (ou sous le grill du four) en les retournant, jusqu'à ce que la peau noircisse.", "Retirer la peau noircie, équeuter les aubergines et les hacher finement.", "Chauffer l'huile dans une sauteuse, y faire revenir les aubergines 2 à 3 minutes.", "Éplucher et écraser l'ail, puis l'ajouter aux aubergines avec le yaourt et le reste du sel. Mélanger pour obtenir une purée homogène.", "Disposer la purée dans un plat et faire un léger creux au milieu, y placer la viande hachée.", "Décorer avec le petit poivron vert épépiné et haché finement. Servir avec du pain plat (pide)."]
  }
]);
