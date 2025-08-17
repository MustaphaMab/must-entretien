<template>
  <section class="container py-5">
    <h1 class="mb-4">Contactez-nous</h1>

    <form @submit.prevent="onSubmit" class="row g-3" novalidate>
      <!-- Nom -->
      <div class="col-md-6">
        <label class="form-label">Nom</label>
        <input v-model.trim="form.name" type="text" class="form-control"
               :class="{'is-invalid': submitted && !rules.name(form.name)}"
               placeholder="Votre nom" required />
        <div class="invalid-feedback">Veuillez saisir au moins 2 caractères.</div>
      </div>

      <!-- Email -->
      <div class="col-md-6">
        <label class="form-label">Email</label>
        <input v-model.trim="form.email" type="email" class="form-control"
               :class="{'is-invalid': submitted && !rules.email(form.email)}"
               placeholder="Votre email" required />
        <div class="invalid-feedback">Email non valide.</div>
      </div>

      <!-- Message -->
      <div class="col-12">
        <label class="form-label">Message</label>
        <textarea v-model.trim="form.message" class="form-control" rows="5"
                  :class="{'is-invalid': submitted && !rules.message(form.message)}"
                  placeholder="Votre message (min. 10 caractères)" required />
        <div class="invalid-feedback">Votre message est trop court.</div>
      </div>

      <!-- 🐝 Honeypot (champ caché pour piéger les bots) -->
      <div class="d-none">
        <label>Ne pas remplir</label>
        <input v-model="form.website" type="text" autocomplete="off" tabindex="-1" />
      </div>

      <div class="col-12 d-flex gap-2">
        <button class="btn btn-success" :disabled="sending">
          {{ sending ? 'Envoi…' : 'Envoyer' }}
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="reset" :disabled="sending">
          Effacer
        </button>
      </div>
    </form>

    <!-- Messages -->
    <div class="mt-3">
      <div v-if="ok" class="alert alert-success">✅ Votre message a bien été envoyé.</div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: { name: "", email: "", message: "", website: "" }, // website = honeypot
      sending: false,
      ok: false,
      error: "",
      submitted: false,
      lastSubmitAt: 0, // anti « spam rapide »
      // Règles de validation
      rules: {
        name: v => typeof v === 'string' && v.length >= 2,
        email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || ''),
        message: v => typeof v === 'string' && v.length >= 10
      }
    };
  },
  methods: {
    reset() {
      this.form = { name: "", email: "", message: "", website: "" };
      this.ok = false; this.error = ""; this.submitted = false;
    },
    async onSubmit() {
      this.submitted = true;
      this.ok = false; this.error = "";

      // 1) validations front
      if (!this.rules.name(this.form.name) ||
          !this.rules.email(this.form.email) ||
          !this.rules.message(this.form.message)) {
        this.error = "Veuillez corriger les champs en rouge.";
        return;
      }

      // 2) honeypot : si rempli → bot
      if (this.form.website) {
        this.error = "Requête rejetée.";
        return;
      }

      // 3) anti-spam simple : pas plus d’un envoi toutes les 15s
      const now = Date.now();
      if (now - this.lastSubmitAt < 15000) {
        this.error = "Vous venez d’envoyer un message. Merci de patienter quelques secondes.";
        return;
      }
      this.lastSubmitAt = now;

      // 4) envoi
      this.sending = true;
      try {
        const res = await fetch("/.netlify/functions/sendMail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            message: this.form.message
          })
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.error || "Erreur serveur");
        this.ok = true;
        this.reset(); // remet le formulaire à zéro (et garde l’alerte OK)
        this.ok = true;
      } catch (e) {
        this.error = "❌ Impossible d’envoyer votre message. Réessayez plus tard.";
      } finally {
        this.sending = false;
      }
    }
  }
};
</script>

<style scoped>
/* Optionnel : un petit confort visuel */
.invalid-feedback { display: block; }
</style>
