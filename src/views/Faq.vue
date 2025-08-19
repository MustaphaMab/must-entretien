<script setup>
// ✅ SEO : titre de page
import { onMounted } from 'vue'
onMounted(() => {
  document.title = 'FAQ — Entretien de locaux à Vitrolles'
})
</script>

<template>
  <section class="container py-5">
    <h1 class="mb-4">Foire aux questions</h1>

    <!-- ✅ Accordion Bootstrap -->
    <div class="accordion" id="faqAccordion">
      <!-- 1 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q1">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="true" aria-controls="a1">
            Quels services proposez-vous ?
          </button>
        </h2>
        <div id="a1" class="accordion-collapse collapse show" aria-labelledby="q1" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Nettoyage de bureaux et commerces, zones communes (halls, couloirs, escaliers), sanitaires,
            vitrerie, dépoussiérage, aspiration et lavage des sols, vidage des corbeilles,
            petites remises en état après travaux (légères). Prestations adaptées aux <strong>locaux professionnels</strong>.
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q2">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="a2">
            Quels sont vos horaires d’intervention ?
          </button>
        </h2>
        <div id="a2" class="accordion-collapse collapse" aria-labelledby="q2" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Nous intervenons <strong>après 18h30 en semaine</strong> pour ne pas gêner l’activité,
            ainsi que le <strong>samedi</strong>. D’autres créneaux sont possibles selon besoin (sur devis).
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q3">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="a3">
            Quelle est votre zone d’intervention ?
          </button>
        </h2>
        <div id="a3" class="accordion-collapse collapse" aria-labelledby="q3" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Vitrolles et alentours (Marignane, Les Pennes-Mirabeau, Rognac, Aix-Marseille Provence).
            Pour des sites plus éloignés : possible, avec frais de déplacement ajustés.
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q4">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="a4">
            Comment obtenir un devis et quels sont les tarifs ?
          </button>
        </h2>
        <div id="a4" class="accordion-collapse collapse" aria-labelledby="q4" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Le devis est <strong>gratuit</strong>. Donnez-nous la surface, la fréquence (quotidienne/hebdo/mensuelle),
            et les tâches souhaitées. Nos tarifs démarrent à <strong>20–25 €/h</strong> selon la prestation
            (ex. vitres, sanitaires) avec <strong>tarifs dégressifs au volume mensuel</strong>.
          </div>
        </div>
      </div>

      <!-- 5 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q5">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="a5">
            Fournissez-vous les produits et consommables ?
          </button>
        </h2>
        <div id="a5" class="accordion-collapse collapse" aria-labelledby="q5" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Nous apportons le matériel et les produits professionnels (gamme <em>éco</em> sur demande).
            Les <strong>consommables</strong> (essuie-mains, savon, papier toilette) peuvent être gérés par nous
            ou fournis par vos soins, au choix.
          </div>
        </div>
      </div>

      <!-- 6 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q6">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="a6">
            Êtes-vous assurés ? Quid des clés/alarme ?
          </button>
        </h2>
        <div id="a6" class="accordion-collapse collapse" aria-labelledby="q6" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Oui, nous disposons d’une <strong>Responsabilité Civile Professionnelle</strong>.
            Les accès (clés/badges/alarmes) sont tracés et conservés de manière sécurisée.
            Un <strong>procès-verbal d’accès</strong> peut être établi si nécessaire.
          </div>
        </div>
      </div>

      <!-- 7 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q7">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="a7">
            Peut-on commencer par un essai sans engagement ?
          </button>
        </h2>
        <div id="a7" class="accordion-collapse collapse" aria-labelledby="q7" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Oui. Nous pouvons réaliser une <strong>prestation test</strong> (ex. 2–3 heures) ou un <strong>mois pilote</strong>
            avant d’établir une fréquence régulière (contrat mensualisé ou forfait).
          </div>
        </div>
      </div>

      <!-- 8 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q8">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a8" aria-expanded="false" aria-controls="a8">
            Comment se passent la facturation et le paiement ?
          </button>
        </h2>
        <div id="a8" class="accordion-collapse collapse" aria-labelledby="q8" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Facturation <strong>mensuelle</strong> (ou à la prestation). Paiement par virement (RIB sur devis).
            Acompte possible pour les premiers mois. Factures et suivi envoyés par email.
          </div>
        </div>
      </div>

      <!-- 9 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q9">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a9" aria-expanded="false" aria-controls="a9">
            Intervenez-vous en urgence (dégât des eaux, remise en état) ?
          </button>
        </h2>
        <div id="a9" class="accordion-collapse collapse" aria-labelledby="q9" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Oui, selon disponibilité. Contactez-nous pour un <strong>créneau prioritaire</strong>.
            Un forfait d’urgence peut s’appliquer (soir/samedi).
          </div>
        </div>
      </div>

      <!-- 10 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q10">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a10" aria-expanded="false" aria-controls="a10">
            Et la confidentialité / RGPD ?
          </button>
        </h2>
        <div id="a10" class="accordion-collapse collapse" aria-labelledby="q10" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Nous intervenons avec <strong>discrétion</strong> dans les bureaux. Les données transmises via le formulaire
            (nom, email, message) servent uniquement à répondre à votre demande — elles ne sont <strong>jamais revendues</strong>.
          </div>
        </div>
      </div>
    </div>

    <!-- Appels à l’action -->
    <div class="mt-4 d-flex gap-2">
      <RouterLink to="/contact" class="btn btn-success">Demander un devis</RouterLink>
      <a href="tel:+33612345678" class="btn btn-outline-success">Appeler</a>
    </div>
  </section>
</template>
