<script setup>
// ----------------------------
// 1️⃣ Importation des outils Vue
// ----------------------------
import { onMounted } from 'vue'

// ----------------------------
// 2️⃣ SEO : titre de la page
// ----------------------------
onMounted(() => {
  document.title = 'À propos — Ménage & Entretien Vitrolles'
})
</script>

<template>
  <!-- SECTION PRINCIPALE -->
  <section class="container py-5">
    <!-- 3️⃣ Titre principal -->
    <h1 class="mb-4">À propos de notre entreprise</h1>

    <!-- 4️⃣ Présentation -->
    <div class="row g-4 align-items-center">
      <!-- Texte -->
      <div class="col-lg-7">
        <p class="text-secondary">
          <strong>Must4You</strong> est une micro-entreprise basée à Vitrolles,
          spécialisée dans le nettoyage de locaux professionnels et particuliers.
        </p>
        <p class="text-secondary">
          Notre mission : garantir des espaces propres et agréables en intervenant
          <strong>en dehors des horaires de bureau</strong>, pour respecter votre organisation.
        </p>
        <p class="text-secondary">
          Nous travaillons avec rigueur, discrétion et flexibilité pour répondre
          aux besoins des entreprises locales.
        </p>
      </div>

      <!-- Image illustrative -->
      <div class="col-lg-5 text-center">
        <img
          src="https://via.placeholder.com/400x250?text=Notre+équipe"
          alt="Notre équipe de nettoyage"
          class="img-fluid rounded shadow-sm"
          loading="lazy"
        />
      </div>
    </div>

    <!-- 5️⃣ Valeurs clés -->
    <div class="row g-4 mt-5">
      <div class="col-md-4">
        <div class="p-3 border rounded h-100 text-center">
          <h2 class="h6">Fiabilité</h2>
          <p class="text-secondary small mb-0">Toujours à l’heure, toujours prêts.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 border rounded h-100 text-center">
          <h2 class="h6">Discrétion</h2>
          <p class="text-secondary small mb-0">Interventions respectueuses et discrètes.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 border rounded h-100 text-center">
          <h2 class="h6">Qualité</h2>
          <p class="text-secondary small mb-0">Un suivi constant et un haut niveau de service.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 6️⃣ Un peu de style local */
h1 {
  font-weight: bold;
}
</style>
