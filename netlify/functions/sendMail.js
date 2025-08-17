// netlify/functions/sendMail.js
// 👉 Envoi d'e-mail via Resend depuis ton formulaire Vue

import { Resend } from "resend";

export async function handler(event) {
  // 1) Protection méthode
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // 2) Initialisation du client Resend avec ta clé (à mettre dans Netlify → Environment variables)
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // 3) Données envoyées depuis le front (ContactView.vue)
    const { name, email, message } = JSON.parse(event.body || "{}");

    // 4) Vérifs basiques
    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ success: false, error: "Missing fields" }) };
    }

    // 5) Construction du contenu HTML
    const html = `
      <h3>Nouvelle demande depuis le site</h3>
      <p><b>Nom :</b> ${name}</p>
      <p><b>Email :</b> ${email}</p>
      <p><b>Message :</b><br>${String(message).replace(/\n/g, "<br>")}</p>
    `;

    // 6) Envoi via Resend
    await resend.emails.send({
      // ⚠️ from DOIT être une adresse validée chez Resend.
      // Pour tester rapidement : 'onboarding@resend.dev' ou 'noreply@resend.dev'
      from: "noreply@resend.dev",

      // Où tu reçois les messages (ton vrai mail)
      to: "mister_moos@hotmail.fr",

      subject: `Demande de contact — ${name}`,

      // ✅ reply_to = l'adresse du client → quand tu cliques "Répondre", ça répond au client
      reply_to: email,

      html
    });

    // 7) Réponse OK au front
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Server error" })
    };
  }
}
