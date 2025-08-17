<script setup>
// Import des outils Vue et du router
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

// Import du composant "Estimation rapide"
import EstimateWidget from '@/components/EstimateWidget.vue'

// Import du logo
import logo from '@/assets/menage.svg'

// SEO / Titre de page
onMounted(() => {
  document.title = 'Entretien de locaux à Vitrolles — Accueil'
})
</script>

<template>
  <!-- SECTION PRINCIPALE -->
  <section class="container py-5">
    <div class="row align-items-center g-4">
      <!-- Colonne texte -->
      <div class="col-lg-6">
        <h1 class="mb-3">Entretien de locaux professionnels à Vitrolles</h1>
        <p class="text-secondary">
          Interventions <strong>après 18h30</strong> et le <strong>samedi</strong>.
          Bureaux, parties communes, sanitaires, vitres.
        </p>
        <div class="d-flex gap-2 mt-3">
          <RouterLink to="/prestations" class="btn btn-success">Voir nos prestations</RouterLink>
          <RouterLink to="/contact" class="btn btn-outline-success">Demander un devis</RouterLink>
        </div>
      </div>

      <!-- Colonne image -->
      <div class="col-lg-6 text-center">
        <!-- ✅ commentaires en dehors des attributs -->
        <img
          :src="logo"
          alt="RenoPro"
          class="img-fluid rounded shadow-sm"
          loading="lazy"
          width="640" height="360"
        />
      </div>
    </div>

    <!-- AVANTAGES -->
    <div class="row g-3 mt-5">
      <div class="col-md-4">
        <div class="p-3 border rounded h-100">
          <h2 class="h6">Horaires adaptés</h2>
          <p class="text-secondary mb-0">Après 18h30 et le samedi.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 border rounded h-100">
          <h2 class="h6">Discrétion & qualité</h2>
          <p class="text-secondary mb-0">Procédures d’intervention.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 border rounded h-100">
          <h2 class="h6">Devis rapide</h2>
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
