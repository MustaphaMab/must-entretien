// netlify/functions/sendMail.js
// --------------------------------------------------
// Envoi d'email via Resend depuis le formulaire Vue
// - Nettoyage/validation côté serveur (robuste sur mobile)
// - Messages d'erreurs clairs pour le front
// - Compatible "mode test" Resend (to = ton adresse autorisée)
// --------------------------------------------------

import { Resend } from "resend";

// ✅ Petite regex email simple et efficace
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// ✅ Fonction utilitaire pour nettoyer une chaîne
// - supprime les caractères invisibles (zero-width space)
// - normalise les espaces et trim
const sanitize = (s = "") =>
  String(s)
    .replace(/\u200B/g, "")        // supprime zero-width spaces
    .replace(/[\r\n\t]+/g, " ")    // remplace tab/retours par un espace
    .replace(/\s{2,}/g, " ")       // condense espaces multiples
    .trim();

// ✅ Sécurise le HTML (évite l'injection dans l'email)
function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ✅ Helper pour renvoyer des réponses JSON propres
function resp(statusCode, bodyObj) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObj),
  };
}

export async function handler(event) {
  // 1) Méthode HTTP autorisée
  if (event.httpMethod !== "POST") {
    return resp(405, { success: false, error: "Method Not Allowed" });
  }

  // 2) Initialisation client Resend (la clé est fournie par Netlify Env Vars)
  //    - Dans Netlify: Site settings → Environment variables → RESEND_API_KEY
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // 3) Récupération + nettoyage des données envoyées par le front
    const payload = JSON.parse(event.body || "{}");

    const name    = sanitize(payload.name);
    const email   = sanitize(payload.email).toLowerCase();
    const message = sanitize(payload.message);

    // 4) Validation côté serveur (toujours valider côté back)
    if (name.length < 2) {
      return resp(400, { success: false, error: "Nom trop court (min. 2 caractères)." });
    }
    if (!EMAIL_RE.test(email)) {
      return resp(400, { success: false, error: "Email invalide." });
    }
    if (message.length < 10) {
      return resp(400, { success: false, error: "Message trop court (min. 10 caractères)." });
    }

    // 5) Construction du contenu HTML (échappé)
    const html = `
      <h3>Nouvelle demande depuis le site</h3>
      <p><b>Nom :</b> ${escapeHtml(name)}</p>
      <p><b>Email :</b> ${escapeHtml(email)}</p>
      <p><b>Message :</b><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    // 6) Envoi via Resend
    //    ⚠️ En mode TEST Resend:
    //       - from: peut rester "noreply@resend.dev"
    //       - to:   DOIT être ton email de compte Resend autorisé (tu le reçois)
    //    ✅ En PROD (domaine vérifié dans Resend):
    //       - from: "contact@ton-domaine.fr" (domaine validé SPF/DKIM)
    //       - to:   n'importe quelle adresse client
    const { data, error } = await resend.emails.send({
      from: "noreply@resend.dev",                 // temporaire tant que ton domaine n'est pas vérifié
      to:   ["mabrouk-mustapha@hotmail.fr"],      // ton adresse autorisée en mode test Resend
      subject: `Demande de contact — ${name}`,
      reply_to: email,                            // en prod (avec domaine validé), "Répondre" cible le client
      html,
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`
    });

    // 7) Gestion des erreurs Resend (ex: 403 mode test, quotas, etc.)
    if (error) {
      // On log côté serveur (visible dans Netlify → Functions → Logs)
      console.error("Resend error:", error);
      // On renvoie un message clair au front
      return resp(502, { success: false, error: error });
    }

    // 8) Succès
    return resp(200, { success: true, id: data?.id || null });
  } catch (err) {
    // Erreurs inattendues (parse JSON, crash, etc.)
    console.error("sendMail crash:", err);
    return resp(500, { success: false, error: err?.message || "Server error" });
  }
}
