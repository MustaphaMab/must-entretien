// On importe la librairie Resend (pour envoyer les emails via leur API)
import { Resend } from 'resend';

// Fonction handler = point d'entrée de ta Netlify Function
export async function handler(event, context) {
  // On initialise Resend avec la clé API stockée dans les variables d'environnement Netlify
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Les données envoyées depuis ton formulaire (name, email, message) 
    // sont dans le "body" de la requête. On les convertit depuis JSON en objet JS.
    const data = JSON.parse(event.body);

    // On envoie l'email via Resend
    await resend.emails.send({
      // Adresse "from" (l’expéditeur → doit être ton domaine vérifié chez Resend)
      from: 'tonemail@tondomaine.com',

      // Destinataire (par exemple ton adresse perso où tu veux recevoir les messages)
      to: 'tonemail@tondomaine.com',

      // Sujet du mail
      subject: 'Nouveau message du site',

      // Contenu HTML de l’email (on insère les valeurs envoyées depuis le formulaire)
      html: `<p><b>Nom:</b> ${data.name}</p>
             <p><b>Email:</b> ${data.email}</p>
             <p><b>Message:</b> ${data.message}</p>`
    });

    // Si tout se passe bien → on renvoie une réponse OK au navigateur
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    // Si erreur (ex: mauvaise clé API, problème réseau) → on renvoie une erreur
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
