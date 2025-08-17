import { Resend } from "resend";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");
    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ success: false, error: "Missing fields" }) };
    }

    const html = `
      <h3>Nouvelle demande depuis le site</h3>
      <p><b>Nom :</b> ${name}</p>
      <p><b>Email :</b> ${email}</p>
      <p><b>Message :</b><br>${String(message).replace(/\n/g, "<br>")}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "noreply@resend.dev",       // <= rester sur @resend.dev tant que ton domaine n'est pas vérifié
      to: ["mabrouk.mustapha.pro@gmail.com"],   // essaie en ajoutant aussi un Gmail pour test
      subject: `Demande de contact — ${name}`,
      reply_to: email,
      html,
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`
    });

    if (error) {
      console.error("Resend error:", error);
      return { statusCode: 502, body: JSON.stringify({ success: false, error }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true, id: data?.id }) };
  } catch (err) {
    console.error("sendMail crash:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err?.message || "Server error" }) };
  }
}
