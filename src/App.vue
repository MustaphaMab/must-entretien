<script setup>
import Navbar from './components/Navbar.vue'
import Footer from "./components/Footer.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- ✅ Lien d’accessibilité (skip link) -->
  <a href="#main" class="visually-hidden-focusable">Aller au contenu principal</a>

  <Navbar />

  <!-- ✅ Ajoute l’ID "main" ici pour le ciblage -->
  <main id="main" class="flex-fill">
    <RouterView />
  </main>

  <Footer />
</template>

<style>
/* ✅ Style du lien "skip to content" */
.visually-hidden-focusable {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.visually-hidden-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 1rem;
  padding: 0.5rem 1rem;
  background: #000;
  color: #fff;
  z-index: 1000;
  text-decoration: none;
  border-radius: 0.25rem;
}
</style>
