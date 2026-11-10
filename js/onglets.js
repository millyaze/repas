// ============================================================
// ONGLETS : passe d'une partie de la page à l'autre (Stock, Recettes).
// Pour ajouter un onglet : ajouter un bouton data-onglet="nom" dans la barre
// et un bloc id="vue-nom" dans index.html.
// ============================================================

// Nom sous lequel le dernier onglet ouvert est retenu dans le navigateur
const CLE_ONGLET = "repas-onglet";

function ouvrirOnglet(nom) {
  document.querySelectorAll(".onglet").forEach(function (bouton) {
    const actif = bouton.dataset.onglet === nom;
    bouton.classList.toggle("actif", actif);
    bouton.setAttribute("aria-pressed", actif ? "true" : "false");
    document.getElementById("vue-" + bouton.dataset.onglet).hidden = !actif;
  });
  try { localStorage.setItem(CLE_ONGLET, nom); } catch (erreur) { /* sans gravité */ }
}

function demarrerOnglets() {
  document.querySelectorAll(".onglet").forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      ouvrirOnglet(bouton.dataset.onglet);
      window.scrollTo(0, 0);
    });
  });
  // Rouvre le dernier onglet utilisé (Stock par défaut)
  let dernier = null;
  try { dernier = localStorage.getItem(CLE_ONGLET); } catch (erreur) { /* sans gravité */ }
  ouvrirOnglet(dernier && document.getElementById("vue-" + dernier) ? dernier : "stock");
}

demarrerOnglets();
