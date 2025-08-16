<script setup>
// ----------------------------
// 1️⃣ Importation des outils Vue
// ----------------------------
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// ----------------------------
// 2️⃣ Déclaration du tableau des prestations
// Chaque prestation est un objet avec :
// id, titre, description, prix, fréquence, horaires
// ----------------------------
const prestations = ref([
  {
    id: 1,
    titre: "Nettoyage standard bureaux",
    description: "Dépoussiérage, aspiration, lavage sols, vidage corbeilles.",
    prix: "20 €/h",
    frequence: "Hebdomadaire",
    horaires: ["Après 18h30", "Samedi"]
  },
  {
    id: 2,
    titre: "Nettoyage vitres",
    description: "Intérieur / extérieur, encadrements compris.",
    prix: "25 €/h",
    frequence: "Mensuel",
    horaires: ["Après 18h30", "Samedi"]
  },
  {
    id: 3,
    titre: "Nettoyage sanitaires",
    description: "Désinfection et réapprovisionnement consommables.",
    prix: "22 €/h",
    frequence: "Quotidien ou hebdomadaire",
    horaires: ["Après 18h30", "Samedi"]
  },
  {
    id: 4,
    titre: "Nettoyage zones communes",
    description: "Halls, escaliers, ascenseurs, couloirs.",
    prix: "20 €/h",
    frequence: "Hebdomadaire",
    horaires: ["Après 18h30", "Samedi"]
  }
])
</script>

<template>
  <section class="container py-5">
    <!-- 3️⃣ Titre principal -->
    <h1 class="mb-1">Nos prestations d'entretien</h1>
    <p class="text-secondary mb-4">
      Services de nettoyage adaptés aux entreprises, avec interventions en dehors des horaires d’ouverture.
    </p>

    <!-- 4️⃣ Grille de cartes Bootstrap -->
    <div class="row g-4">
      <!-- v-for = boucle pour créer une carte par prestation -->
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="p in prestations"
        :key="p.id"
      >
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <!-- Titre prestation -->
            <h2 class="h5 mb-2">{{ p.titre }}</h2>
            <p class="text-secondary small">{{ p.description }}</p>

            <!-- Prix + fréquence -->
            <div class="d-flex flex-wrap gap-2">
              <span class="badge bg-success-subtle text-success border">{{ p.prix }}</span>
              <span v-if="p.frequence" class="badge bg-light border text-secondary">
                {{ p.frequence }}
              </span>
            </div>

            <!-- Horaires -->
            <div class="d-flex flex-wrap gap-2 mt-2">
              <span
                v-for="(h, i) in p.horaires"
                :key="i"
                class="badge bg-primary-subtle text-primary border"
              >
                {{ h }}
              </span>
            </div>

            <!-- Bouton devis -->
            <div class="mt-3 d-flex justify-content-between align-items-center">
              <RouterLink to="/contact" class="btn btn-outline-success btn-sm">
                Demander un devis
              </RouterLink>
              <small class="text-muted">Interventions discrètes</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5️⃣ Encadré info -->
    <div class="bg-light border rounded p-4 mt-5">
      <h2 class="h5 text-success mb-2">Informations importantes</h2>
      <ul class="mb-0">
        <li>Horaires d’intervention : après 18h30 et le samedi.</li>
        <li>Zone d’intervention : Vitrolles et alentours.</li>
        <li>Tarifs dégressifs selon volume d’heures mensuel.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* 6️⃣ Styles spécifiques à cette page */
.card-body h2 {
  font-weight: bold;
}
</style>
