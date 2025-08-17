<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm border-bottom px-4">
    <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/">
      <img src="@/assets/menage.svg" alt="Logo RenoPro" style="height: 110px;" />
      <span class="text-dark fw-bold">Must4You</span>
    </RouterLink>

    <button class="navbar-toggler" type="button" @click="isMenuOpen = !isMenuOpen">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/" @click="isMenuOpen = false">Accueil</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/prestations" @click="isMenuOpen = false">Prestations</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/realisations" @click="isMenuOpen = false">Réalisations</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/a-propos" @click="isMenuOpen = false">À propos</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/contact" @click="isMenuOpen = false">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>
