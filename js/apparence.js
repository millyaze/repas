// ============================================================
// APPARENCE : mode clair ou sombre.
// Choix dans l'onglet Réglages : « Automatique » (suit le réglage du téléphone
// ou de l'ordinateur), « Toujours clair » ou « Toujours sombre ».
// Le choix est retenu sur chaque appareil (pas synchronisé).
// Ce fichier est chargé tout en haut de la page (index.html) pour que
// les couleurs soient bonnes dès l'ouverture, sans éclair blanc.
// Les couleurs elles-mêmes sont dans style.css (bloc « MODE SOMBRE »).
// ============================================================

// Nom sous lequel le choix est gardé dans le navigateur
const CLE_APPARENCE = "repas-apparence";
// Réglage clair/sombre du téléphone ou de l'ordinateur
const REGLAGE_APPAREIL = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

// "auto", "clair" ou "sombre"
function lireApparence() {
  let choix = null;
  try { choix = localStorage.getItem(CLE_APPARENCE); } catch (erreur) { /* sans gravité */ }
  return (choix === "clair" || choix === "sombre") ? choix : "auto";
}

// Met la page en clair ou en sombre selon le choix
function appliquerApparence() {
  let choix = lireApparence();
  if (choix === "auto") choix = (REGLAGE_APPAREIL && REGLAGE_APPAREIL.matches) ? "sombre" : "clair";
  document.documentElement.setAttribute("data-theme", choix);
}

// Liste « Apparence » de l'onglet Réglages
function demarrerApparence() {
  const liste = document.getElementById("choix-apparence");
  if (!liste) return;
  liste.value = lireApparence();
  liste.addEventListener("change", function () {
    try { localStorage.setItem(CLE_APPARENCE, liste.value); } catch (erreur) { /* sans gravité */ }
    appliquerApparence();
  });
}

appliquerApparence();
// En « Automatique », suit le téléphone s'il passe en sombre le soir (sans recharger la page)
if (REGLAGE_APPAREIL && REGLAGE_APPAREIL.addEventListener) REGLAGE_APPAREIL.addEventListener("change", appliquerApparence);
document.addEventListener("DOMContentLoaded", demarrerApparence);
