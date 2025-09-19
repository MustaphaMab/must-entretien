<script setup>
// Import Vue
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

// Composant estimation rapide
import EstimateWidget from '@/components/EstimateWidget.vue'

// Logo / image principale
import logo from '@/assets/menage.svg'

// SEO
onMounted(() => {
  document.title = 'Entretien de locaux à Vitrolles — Accueil'
})
</script>

<template>
  <!-- SECTION HERO -->
  <section class="container hero-section">
    <div class="row align-items-center g-4">
      <!-- Texte -->
      <div class="col-lg-6">
        <h1 class="mb-3 fw-bold">Entretien de locaux professionnels à Vitrolles</h1>
        <p class="text-secondary lead">
          Interventions <strong>après 18h30</strong> et le <strong>samedi</strong>.<br />
          Bureaux, parties communes, sanitaires, vitres.
        </p>
        <div class="d-flex gap-2 mt-3">
          <RouterLink to="/prestations" class="btn btn-success btn-lg">Voir nos prestations</RouterLink>
          <RouterLink to="/contact" class="btn btn-outline-success btn-lg">Demander un devis</RouterLink>
        </div>
      </div>

      <!-- Image -->
      <div class="col-lg-6 text-center">
        <img
          :src="logo"
          alt="Must4You - Nettoyage Vitrolles"
          class="img-fluid rounded-circle shadow-sm border"
          loading="lazy"
          width="320" height="320"
        />
      </div>
    </div>

    <!-- AVANTAGES -->
    <div class="row g-3 mt-5">
      <div class="col-md-4">
        <div class="p-4 border rounded h-100 text-center shadow-sm">
          <h2 class="h6 fw-bold">Horaires adaptés</h2>
          <p class="text-secondary mb-0">Après 18h30 et le samedi.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 border rounded h-100 text-center shadow-sm">
          <h2 class="h6 fw-bold">Discrétion & qualité</h2>
          <p class="text-secondary mb-0">Procédures d’intervention rigoureuses.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 border rounded h-100 text-center shadow-sm">
          <h2 class="h6 fw-bold">Devis rapide</h2>
          <p class="text-secondary mb-0">Réponse sous 24–48h.</p>
        </div>
      </div>
    </div>

    <!-- ESTIMATION -->
    <div class="mt-5">
      <EstimateWidget />
    </div>
  </section>
</template>

<style scoped>
/* Espace ajusté sous la navbar */
.hero-section {
  padding-top: 5rem; /* moins que py-5 → espace réduit */
  padding-bottom: 3rem;
}

/* Sur mobile on réduit encore un peu */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 0rem;
  }
}
</style>
