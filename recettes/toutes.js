// ============================================================
// TOUTES LES RECETTES réunies dans une seule liste : RECETTES
// Ce fichier est chargé AVANT les fichiers de cuisine : chacun
// d'eux appelle ajouterRecettes([...]) pour y ranger ses recettes.
// Pour ajouter une cuisine : voir la liste CUISINES dans index.html.
// ============================================================
const RECETTES = [];

// Ajoute les recettes d'un fichier de cuisine à la liste commune
function ajouterRecettes(liste) {
  liste.forEach(function (recette) { RECETTES.push(recette); });
}
