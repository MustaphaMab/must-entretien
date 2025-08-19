<script setup>
import { reactive, computed } from 'vue'

// état du formulaire d'estimation
const state = reactive({
  surface: 100,             // m²
  frequence: 'hebdo',       // quotidien | hebdo | mensuel | ponctuel
  sanitaires: true,         // option +15%
})

// modèle de calcul simple (indicatif)
const PRIX_M2 = 2.2
const MULT = { quotidien: 1.8, hebdo: 1.0, mensuel: 0.6, ponctuel: 0.9 }

const estimate = computed(() => {
  const base = state.surface * PRIX_M2 * (MULT[state.frequence] || 1)
  const options = state.sanitaires ? base * 0.15 : 0
  return Math.round(base + options)
})
</script>

<template>
  <div class="card shadow-sm border-0">
    <div class="card-body">
      <h2 class="h6 mb-3">Estimation rapide</h2>

      <div class="row g-2">
        <div class="col-6">
          <label class="form-label">Surface (m²)</label>
          <input v-model.number="state.surface" type="number" min="20" step="10" class="form-control" />
        </div>
        <div class="col-6">
          <label class="form-label">Fréquence</label>
          <select v-model="state.frequence" class="form-select">
            <option value="quotidien">Quotidien</option>
            <option value="hebdo">Hebdomadaire</option>
            <option value="mensuel">Mensuel</option>
            <option value="ponctuel">Ponctuel</option>
          </select>
        </div>
      </div>

      <div class="form-check mt-2">
        <input id="opt1" v-model="state.sanitaires" type="checkbox" class="form-check-input" />
        <label for="opt1" class="form-check-label">Inclure sanitaires (≈ +15%)</label>
      </div>

      <div class="d-flex justify-content-between align-items-end mt-3">
        <small class="text-muted">Tarif indicatif, hors contraintes.</small>
        <div class="fs-3 fw-bold text-success">{{ estimate }} €</div>
      </div>
    </div>
  </div>
</template>
