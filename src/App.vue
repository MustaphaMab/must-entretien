<script setup>
import Navbar from './components/Navbar.vue'
import Footer from "./components/Footer.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />

  <main class="flex-fill">
    <RouterView />
  </main>

  <Footer />
</template>
