<template>
  <div>
    <h2>Contactez-nous</h2>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="form.name" placeholder="Votre nom" required />
      <input type="email" v-model="form.email" placeholder="Votre email" required />
      <textarea v-model="form.message" placeholder="Votre message" required></textarea>
      <button type="submit">Envoyer</button>
    </form>

    <!-- Message de retour -->
    <p v-if="successMessage">{{ successMessage }}</p>
    <p v-if="errorMessage" style="color:red;">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Données liées aux champs du formulaire
      form: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async sendMessage() {
      try {
        // On envoie les données du formulaire vers la Netlify Function
        const response = await fetch('/.netlify/functions/sendMail', {
          method: 'POST',
          body: JSON.stringify(this.form)
        });

        // On attend la réponse
        const result = await response.json();

        // Si tout s’est bien passé
        if (result.success) {
          this.successMessage = "Votre message a été envoyé avec succès ✅";
          this.errorMessage = '';
          this.form = { name: '', email: '', message: '' }; // reset du formulaire
        } else {
          // Si erreur renvoyée
          this.errorMessage = "Erreur lors de l’envoi du message ❌";
          this.successMessage = '';
        }
      } catch (err) {
        // Si problème réseau ou crash côté serveur
        this.errorMessage = "Impossible de contacter le serveur ❌";
        this.successMessage = '';
      }
    }
  }
}
</script>
