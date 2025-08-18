<template>
  <footer class="bg-light pt-5 pb-3 mt-5 border-top shadow-sm">
    <div class="container text-center">
      <p class="mb-2">&copy; 2025 Renovation du 13 - Tous droits réservés</p>
      <nav>
        <RouterLink to="/mentions-legales" class="text-secondary mx-2"
          >Mentions légales</RouterLink
        >
        <RouterLink to="/confidentialite" class="text-secondary mx-2"
          >Confidentialité</RouterLink
        >
        <RouterLink to="/faq" class="text-secondary mx-2">FAQ</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
