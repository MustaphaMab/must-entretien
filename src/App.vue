<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />

  <main>
    <RouterView />
  </main>

  <!-- Footer -->
  <footer class="bg-light pt-5 pb-3 mt-5 border-top shadow-sm">
    <!-- contenu du footer ici -->
  </footer>
</template>

