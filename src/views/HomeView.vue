<template>


  <!-- CARROUSEL -->
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
<div class="text-center pt-5">
  <h2 class="fw-bold">Rénovation intérieure & aménagement</h2>
  <p class="text-muted">Découvrez nos réalisations et imaginez votre futur intérieur</p>
</div>

    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/cuisine.jpg" class="d-block w-100" alt="Cuisine rénovée">
        <div class="carousel-caption bg-dark bg-opacity-50 p-3 rounded">
          <h5>Votre intérieur transformé</h5>
         
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/carrelage.jpg" class="d-block w-100" alt="Carrelage rénové">
        <div class="carousel-caption bg-dark bg-opacity-50 p-3 rounded">
          <h5>Salle de bain sur-mesure</h5>
          
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/plomberie.jpg" class="d-block w-100" alt="Travaux plomberie">
        <div class="carousel-caption bg-dark bg-opacity-50 p-3 rounded">
          <h5>La cuisine de vos rêves</h5>
         
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>

  <!-- CONTENU PRINCIPAL -->
  <main class="container my-5">
    <div class="text-center mb-5">
      <h1 class="text-primary">Bienvenue sur RenoPro</h1>
      <p class="lead">Des rénovations élégantes pour un confort durable</p>
      <RouterLink to="/contact" class="btn btn-success btn-lg mt-3">Demander un devis gratuit</RouterLink>
    </div>

    <!-- SERVICES -->
    <section class="row text-center">
      <div class="col-md-4 mb-4">
        <i class="bi bi-brush fs-1 text-primary"></i>
        <h4 class="mt-3">Peinture & déco</h4>
        <p>Travaux de peinture modernes avec finitions haut de gamme.</p>
        <img src="../assets/peinture.jpg" alt="Peinture" class="img-fluid rounded shadow">
      </div>

      <div class="col-md-4 mb-4">
        <i class="bi bi-house-gear fs-1 text-success"></i>
        <h4 class="mt-3">Rénovation intérieure</h4>
        <p>Transformation complète ou partielle de votre habitat.</p>
        <img src="../assets/plomberie.jpg" alt="Plomberie" class="img-fluid rounded shadow">
      </div>

      <div class="col-md-4 mb-4">
        <i class="bi bi-lightning-charge fs-1 text-warning"></i>
        <h4 class="mt-3">Cuisine & salle de bain</h4>
        <p>Espaces fonctionnels et élégants, prêts à l’usage.</p>
        <img src="../assets/cuisine.jpg" alt="Cuisine rénovée" class="img-fluid rounded shadow">
      </div>
    </section>
  </main>
</template>
