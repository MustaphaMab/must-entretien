<script setup>
// ✅ Composition API (Vue 3)
import { reactive, ref, computed, watch } from 'vue'

// ------------------------------
// ÉTAT DU FORMULAIRE
// ------------------------------
const form = reactive({
  name: '',
  email: '',
  message: '',
  website: '' // honeypot anti-bot (champ caché)
})

// Flags pour savoir si l'utilisateur a touché un champ → pour n’afficher l’erreur que si pertinent
const touched = reactive({
  name: false,
  email: false,
  message: false
})

const sending = ref(false)
const ok = ref('')
const err = ref('')

// ------------------------------
// RÈGLES DE VALIDATION
// ------------------------------
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

const fieldErrors = computed(() => {
  const e = {
    name: '',
    email: '',
    message: ''
  }
  if (form.name.trim().length < 2) e.name = 'Veuillez saisir au moins 2 caractères.'
  if (!emailRegex.test(form.email.trim())) e.email = 'Email non valide.'
  if (form.message.trim().length < 10) e.message = 'Votre message est trop court (10 caractères min.).'
  return e
})

// Formulaire globalement valide ?
const isValid = computed(() =>
  !fieldErrors.value.name &&
  !fieldErrors.value.email &&
  !fieldErrors.value.message &&
  !form.website // honeypot vide
)

// Quand on tape, on efface les messages globaux
watch(form, () => { ok.value = ''; err.value = '' }, { deep: true })

// Marquer un champ comme "touché" à la première interaction
function markTouched(key) {
  if (!touched[key]) touched[key] = true
}

// ------------------------------
// SOUMISSION
// ------------------------------
async function onSubmit() {
  // Ne pas envoyer si invalide
  if (!isValid.value) {
    // on marque tout comme touché pour montrer les erreurs
    touched.name = true
    touched.email = true
    touched.message = true
    err.value = 'Veuillez corriger les champs en rouge.'
    return
  }

  sending.value = true
  ok.value = ''
  err.value = ''

  try {
    const res = await fetch('/.netlify/functions/sendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim()
      })
    })
    const data = await res.json()

    if (!res.ok || !data?.success) {
      // On affiche l’erreur détaillée si elle existe (vient de la Function/Resend)
      throw new Error(data?.error?.message || data?.error || 'Erreur serveur')
    }

    ok.value = '✅ Votre message a bien été envoyé.'
    // Reset
    form.name = ''
    form.email = ''
    form.message = ''
    form.website = ''
    touched.name = false
    touched.email = false
    touched.message = false
  } catch (e) {
    err.value = '❌ ' + (e.message || 'Impossible d’envoyer le message.')
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="container py-5">
    <h1 class="mb-4">Contactez-nous</h1>

    <form class="row g-3" @submit.prevent="onSubmit" novalidate>
      <!-- Nom -->
      <div class="col-md-6">
        <label class="form-label">Nom</label>
        <input
          class="form-control"
          :class="{ 'is-invalid': touched.name && fieldErrors.name }"
          v-model="form.name"
          @input="markTouched('name')"
          placeholder="Votre nom"
        />
        <div v-if="touched.name && fieldErrors.name" class="invalid-feedback">
          {{ fieldErrors.name }}
        </div>
      </div>

      <!-- Email -->
      <div class="col-md-6">
        <label class="form-label">Email</label>
        <input
          class="form-control"
          :class="{ 'is-invalid': touched.email && fieldErrors.email }"
          v-model="form.email"
          @input="markTouched('email')"
          inputmode="email"
          placeholder="vous@exemple.com"
        />
        <div v-if="touched.email && fieldErrors.email" class="invalid-feedback">
          {{ fieldErrors.email }}
        </div>
      </div>

      <!-- Message -->
      <div class="col-12">
        <label class="form-label">Message</label>
        <textarea
          class="form-control"
          rows="6"
          :class="{ 'is-invalid': touched.message && fieldErrors.message }"
          v-model="form.message"
          @input="markTouched('message')"
          placeholder="Votre message (au moins 10 caractères)"
        />
        <div v-if="touched.message && fieldErrors.message" class="invalid-feedback">
          {{ fieldErrors.message }}
        </div>
      </div>

      <!-- Honeypot caché (anti-bot) -->
      <div style="position:absolute; left:-9999px; top:-9999px;">
        <label>Ne pas remplir</label>
        <input v-model="form.website" tabindex="-1" autocomplete="off" />
      </div>

      <div class="col-12 d-flex gap-2">
        <button type="submit" class="btn btn-success" :disabled="!isValid || sending">
          {{ sending ? 'Envoi…' : 'Envoyer' }}
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          :disabled="sending"
          @click="
            form.name=''; form.email=''; form.message=''; form.website='';
            touched.name=false; touched.email=false; touched.message=false;
            ok=''; err='';
          "
        >
          Effacer
        </button>
      </div>
    </form>

    <!-- Messages globaux -->
    <div class="mt-3">
      <div v-if="ok" class="alert alert-success">{{ ok }}</div>
      <div v-if="err" class="alert alert-danger">{{ err }}</div>
    </div>
  </section>
</template>

<style scoped>
/* S’assure que le message d’erreur est visible avec Bootstrap */
.invalid-feedback { display: block; }
</style>
