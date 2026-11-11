// ============================================================
// SYNCHRO AUTOMATIQUE entre appareils (ordinateur, iPhone).
// Le stock est rangé dans un fichier d'un dépôt PRIVÉ GitHub.
// Chaque appareil a besoin d'une « clé d'accès » GitHub, collée une
// seule fois dans la page ; elle reste dans le navigateur de l'appareil.
// Fonctionnement :
//  - à l'ouverture de la page (et quand on y revient) : on regarde si
//    l'autre appareil a changé le stock, et on le récupère ;
//  - après chaque changement ici : on envoie le stock.
//  - si les deux appareils ont changé en même temps : le plus récent gagne.
// Utilise : stock, codes, remplacerDonnees, montrerMessage (js/stock.js),
//           donneesValides, VERSION_DONNEES (js/memoire.js).
// ============================================================

// Dépôt privé et fichier où le stock est rangé
const DEPOT_DONNEES = "millyaze/repas-donnees";
const FICHIER_DONNEES = "donnees.json";
const ADRESSE_GITHUB = "https://api.github.com/repos/" + DEPOT_DONNEES;
// Nom sous lequel les réglages de synchro sont gardés dans le navigateur
const CLE_SYNCHRO = "repas-synchro";
// Temps entre deux vérifications automatiques quand la page reste ouverte (en millisecondes)
const DELAI_VERIFICATION = 30000;
// Numéro de version de la page (VERSION, écrit en haut de index.html)
const VERSION_PAGE = (typeof VERSION === "number") ? VERSION : 0;

// Réglages de cet appareil :
//  jeton     = la clé d'accès GitHub
//  sha       = « empreinte » de la dernière version connue du fichier en ligne
//  enAttente = true s'il y a ici des changements pas encore envoyés
//  modifie   = date du dernier changement fait ici
//  derniere  = date de la dernière synchro réussie
let reglagesSynchro = lireReglagesSynchro();
let synchroEnCours = false;
let synchroARelancer = false;
let minuterieSynchro = null;
let essaisConflit = 0;

function lireReglagesSynchro() {
  try { return JSON.parse(localStorage.getItem(CLE_SYNCHRO)) || {}; }
  catch (erreur) { return {}; }
}
function garderReglagesSynchro() {
  try { localStorage.setItem(CLE_SYNCHRO, JSON.stringify(reglagesSynchro)); } catch (erreur) { /* tant pis */ }
}

function demarrerSynchro() {
  element("formulaire-synchro").addEventListener("submit", activerSynchro);
  element("bouton-synchroniser").addEventListener("click", synchroniser);
  element("bouton-desactiver-synchro").addEventListener("click", desactiverSynchro);
  // Quand on revient sur la page (ex. on rouvre Safari) ou que la connexion revient
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") synchroniser();
  });
  window.addEventListener("online", synchroniser);
  // Tant que la page est ouverte et visible, on vérifie régulièrement
  // si l'autre appareil a changé quelque chose (sans rien afficher s'il n'y a rien de neuf)
  setInterval(function () {
    if (document.visibilityState === "visible" && !synchroEnCours) synchroniser(true);
  }, DELAI_VERIFICATION);

  // Nouvelle version de la page sur cet appareil : on retélécharge tout depuis la version en ligne,
  // car l'ancienne version a pu recevoir des données qu'elle ne connaissait pas (et donc les ignorer).
  if (reglagesSynchro.jeton && reglagesSynchro.version !== VERSION_PAGE) {
    if (!reglagesSynchro.enAttente) delete reglagesSynchro.sha;
    reglagesSynchro.version = VERSION_PAGE;
    garderReglagesSynchro();
  }
  afficherSynchro();
  synchroniser();
}

// ---------- Échanges avec GitHub ----------

function appelGitHub(adresse, methode, corps) {
  return fetch(adresse, {
    method: methode,
    cache: "no-store",
    headers: {
      "Authorization": "Bearer " + reglagesSynchro.jeton,
      "Accept": "application/vnd.github+json"
    },
    body: corps ? JSON.stringify(corps) : undefined
  });
}

// Texte <-> base64 (format demandé par GitHub), accents compris
function versBase64(texte) {
  const octets = new TextEncoder().encode(texte);
  let binaire = "";
  octets.forEach(function (octet) { binaire += String.fromCharCode(octet); });
  return btoa(binaire);
}
function depuisBase64(base64) {
  const binaire = atob(base64.replace(/\s/g, ""));
  const octets = new Uint8Array(binaire.length);
  for (let i = 0; i < binaire.length; i++) octets[i] = binaire.charCodeAt(i);
  return new TextDecoder().decode(octets);
}

// Lit le fichier en ligne. Renvoie { existe, sha, donnees }.
function lireEnLigne() {
  return appelGitHub(ADRESSE_GITHUB + "/contents/" + FICHIER_DONNEES, "GET").then(function (reponse) {
    if (reponse.status === 404) return { existe: false };
    if (reponse.status === 401 || reponse.status === 403) throw new Error("cle");
    if (!reponse.ok) throw new Error("reseau");
    return reponse.json().then(function (fichier) {
      const donnees = JSON.parse(depuisBase64(fichier.content));
      if (!donneesValides(donnees)) throw new Error("fichier");
      return { existe: true, sha: fichier.sha, donnees: donnees };
    });
  });
}

// Envoie le stock de cet appareil. shaConnu = version en ligne que l'on remplace (null = création).
function envoyerEnLigne(shaConnu) {
  const modifieEnvoye = reglagesSynchro.modifie || new Date().toISOString();
  const donnees = { version: VERSION_DONNEES, stock: stock, codes: codes, favoris: favoris, historique: historique, courses: courses, modifie: modifieEnvoye, versionPage: VERSION_PAGE };
  const corps = { message: "Mise à jour du stock", content: versBase64(JSON.stringify(donnees, null, 1)) };
  if (shaConnu) corps.sha = shaConnu;
  return appelGitHub(ADRESSE_GITHUB + "/contents/" + FICHIER_DONNEES, "PUT", corps).then(function (reponse) {
    if (reponse.status === 409 || reponse.status === 422) throw new Error("conflit"); // l'autre appareil vient d'écrire
    if (reponse.status === 401 || reponse.status === 403 || reponse.status === 404) throw new Error("cle");
    if (!reponse.ok) throw new Error("reseau");
    return reponse.json().then(function (resultat) {
      reglagesSynchro.sha = resultat.content.sha;
      // S'il y a eu un nouveau changement pendant l'envoi, il reste à envoyer
      reglagesSynchro.enAttente = (reglagesSynchro.modifie || modifieEnvoye) !== modifieEnvoye;
      reglagesSynchro.modifie = reglagesSynchro.modifie || modifieEnvoye;
    });
  });
}

// ---------- La synchro elle-même ----------

// discret = true pour la vérification automatique : pas de texte « en cours » à l'écran
function synchroniser(discret) {
  if (!reglagesSynchro.jeton) return;
  if (synchroEnCours) { synchroARelancer = true; return; }
  synchroEnCours = true;
  clearTimeout(minuterieSynchro);
  if (discret !== true) afficherSynchro("Synchronisation en cours…");

  lireEnLigne().then(function (enLigne) {
    // 1) Rien en ligne : premier envoi
    if (!enLigne.existe) return envoyerEnLigne(null);
    // L'autre appareil a une version plus récente de la page : on ne touche à rien,
    // sinon cet appareil effacerait les données qu'il ne connaît pas encore.
    if ((enLigne.donnees.versionPage || 0) > VERSION_PAGE) throw new Error("version");
    // 2) Rien de neuf en ligne : on envoie nos changements s'il y en a
    if (enLigne.sha === reglagesSynchro.sha) {
      return reglagesSynchro.enAttente ? envoyerEnLigne(enLigne.sha) : null;
    }
    // 3) L'autre appareil a changé le stock
    const iciPlusRecent = reglagesSynchro.enAttente
      && (reglagesSynchro.modifie || "") > (enLigne.donnees.modifie || "");
    if (iciPlusRecent) return envoyerEnLigne(enLigne.sha);
    remplacerDonnees(enLigne.donnees.stock, enLigne.donnees.codes || {}, enLigne.donnees.favoris || [], enLigne.donnees.historique || [], enLigne.donnees.courses || []);
    reglagesSynchro.sha = enLigne.sha;
    reglagesSynchro.enAttente = false;
    reglagesSynchro.modifie = enLigne.donnees.modifie || "";
    montrerMessage("Stock mis à jour depuis l'autre appareil.");
  }).then(function () {
    reglagesSynchro.derniere = new Date().toISOString();
    garderReglagesSynchro();
    synchroEnCours = false;
    essaisConflit = 0;
    afficherSynchro();
    if (synchroARelancer || reglagesSynchro.enAttente) relancerSynchro(500);
  }).catch(function (erreur) {
    garderReglagesSynchro();
    synchroEnCours = false;
    // L'autre appareil a écrit au même moment : on recommence (3 essais au plus)
    if (erreur.message === "conflit" && essaisConflit < 3) { essaisConflit++; relancerSynchro(500); return; }
    essaisConflit = 0;
    synchroARelancer = false;
    const textes = {
      cle: "Clé d'accès refusée ou expirée : désactive puis réactive la synchro avec une nouvelle clé.",
      fichier: "Le fichier en ligne est illisible. Rien n'a été modifié ici.",
      version: "Une nouvelle version de la page existe : recharge la page pour reprendre la synchro.",
    };
    afficherSynchro(textes[erreur.message] || "Pas de connexion : la synchro reprendra plus tard.", true);
  });
}

function relancerSynchro(delai) {
  synchroARelancer = false;
  clearTimeout(minuterieSynchro);
  minuterieSynchro = setTimeout(synchroniser, delai);
}

// Appelé par js/stock.js après chaque changement du stock
function signalerChangement() {
  if (!reglagesSynchro.jeton) return;
  reglagesSynchro.enAttente = true;
  reglagesSynchro.modifie = new Date().toISOString();
  garderReglagesSynchro();
  relancerSynchro(1500); // on attend un peu : plusieurs clics de suite = un seul envoi
}

// ---------- Activer / désactiver sur cet appareil ----------

function activerSynchro(evenement) {
  evenement.preventDefault();
  const jeton = element("champ-cle-synchro").value.trim();
  if (!jeton) return;
  reglagesSynchro = { jeton: jeton, version: VERSION_PAGE };
  afficherSynchro("Vérification de la clé…");
  // On vérifie que la clé ouvre bien le dépôt privé
  appelGitHub(ADRESSE_GITHUB, "GET").then(function (reponse) {
    if (!reponse.ok) throw new Error("cle");
    element("champ-cle-synchro").value = "";
    garderReglagesSynchro();
    montrerMessage("Synchro automatique activée sur cet appareil.");
    synchroniser();
  }).catch(function (erreur) {
    reglagesSynchro = {};
    afficherSynchro(erreur.message === "cle"
      ? "Cette clé ne donne pas accès au dépôt « " + DEPOT_DONNEES + " ». Vérifie-la et réessaie."
      : "Pas de connexion : impossible de vérifier la clé.", true);
  });
}

function desactiverSynchro() {
  if (!confirm("Désactiver la synchro automatique sur cet appareil ? Le stock reste ici, mais ne sera plus envoyé ni mis à jour.")) return;
  clearTimeout(minuterieSynchro);
  reglagesSynchro = {};
  try { localStorage.removeItem(CLE_SYNCHRO); } catch (erreur) { /* tant pis */ }
  afficherSynchro();
}

// ---------- Affichage de l'état ----------

function afficherSynchro(texte, estErreur) {
  const active = Boolean(reglagesSynchro.jeton);
  element("formulaire-synchro").hidden = active;
  element("boutons-synchro").hidden = !active;
  const etat = element("etat-synchro");
  etat.className = estErreur ? "etat-synchro erreur" : "etat-synchro";
  if (texte) { etat.textContent = texte; return; }
  if (!active) { etat.textContent = "Non activée sur cet appareil."; return; }
  if (reglagesSynchro.derniere) {
    const date = new Date(reglagesSynchro.derniere);
    etat.textContent = "Activée. Dernière synchro : " + date.toLocaleDateString("fr-FR") + " à "
      + date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) + ".";
  } else {
    etat.textContent = "Activée.";
  }
}

demarrerSynchro();
