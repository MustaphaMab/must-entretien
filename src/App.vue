  <script setup>
  import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

  const isMenuOpen = ref(false)
  </script>

  <template>
    <!-- HEADER Bootstrap -->
    <header>
    <nav class="navbar navbar-expand-lg fixed-top bg-light shadow-sm border-bottom px-4">
    <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/">
      <img src="@/assets/logo-header.jpg" alt="Logo RenoPro" style="height: 90px;" />
      <span class="text-dark fw-bold">RenoPro</span>
    </RouterLink>

    <button class="navbar-toggler" type="button" @click="isMenuOpen = !isMenuOpen">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/" @click="isMenuOpen = false">Accueil</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/prestations" @click="isMenuOpen = false">Prestations</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/realisations" @click="isMenuOpen = false" >Réalisations</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/a-propos" @click="isMenuOpen =false" >À propos</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link text-dark" to="/contact" @click="isMenuOpen = false" >Contact</RouterLink></li>
      </ul>
    </div>
  </nav>

    </header>

    <!-- CONTENU -->
    <main>
      <RouterView />
    </main>

    <!-- FOOTER Bootstrap -->
<footer class="bg-light pt-5 pb-3 mt-5 border-top shadow-sm">
  <div class="container-fluid px-0">
    <div class="row gx-5 text-center text-md-start mx-0">
      <div class="col-md-3 mb-4 ps-md-5">
        <h5 class="text-dark">RenoPro</h5>
        <p class="text-secondary">Votre partenaire pour tous vos projets de rénovation intérieure.</p>
      </div>
      <div class="col-md-3 mb-4">
        <h5 class="text-dark">Contact</h5>
        <p class="text-secondary">📍 123 rue de la Rénovation, Marseille</p>
        <p class="text-secondary">☎️ 06 12 34 56 78</p>
        <p class="text-secondary">✉️ contact@renopro.fr</p>
      </div>
      <div class="col-md-3 mb-4">
        <h5 class="text-dark">Liens utiles</h5>
        <ul class="list-unstyled">
          <li><RouterLink class="text-secondary text-decoration-none" to="/">Accueil</RouterLink></li>
          <li><RouterLink class="text-secondary text-decoration-none" to="/prestations">Prestations</RouterLink></li>
          <li><RouterLink class="text-secondary text-decoration-none" to="/realisations">Réalisations</RouterLink></li>
          <li><RouterLink class="text-secondary text-decoration-none" to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      <div class="col-md-3 mb-4">
        <h5 class="text-dark">Suivez-nous</h5>
        <p><a href="#" class="text-success text-decoration-none">Facebook</a></p>
        <p><a href="#" class="text-success text-decoration-none">Instagram</a></p>
      </div>
    </div>

    <div class="text-center pt-3 border-top mt-4 text-muted small">
      © 2025 RenoPro - Tous droits réservés
    </div>
  </div>
</footer>




  </template>
