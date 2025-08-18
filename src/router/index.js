// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Lazy imports des vues (ok pour code splitting)
const HomeView        = () => import('../views/HomeView.vue')
const PrestationView  = () => import('../views/PrestationView.vue')
const RealisationView = () => import('../views/RealisationView.vue')
const AProposView     = () => import('../views/AProposView.vue')
const ContactView     = () => import('../views/ContactView.vue')

// Nouvelles pages footer
const MentionsLegales = () => import('../views/MentionsLegales.vue')
const Confidentialite = () => import('../views/Confidentialite.vue')
const Faq             = () => import('../views/Faq.vue')

const routes = [
  { path: '/',            name: 'home',         component: HomeView,        meta: { title: 'Accueil — Rénovation du 13' } },
  { path: '/prestations', name: 'prestation',   component: PrestationView,  meta: { title: 'Prestations — Rénovation du 13' } },
  { path: '/realisations',name: 'realisation',  component: RealisationView, meta: { title: 'Réalisations — Rénovation du 13' } },
  { path: '/a-propos',    name: 'apropos',      component: AProposView,     meta: { title: 'À propos — Rénovation du 13' } },
  { path: '/contact',     name: 'contact',      component: ContactView,     meta: { title: 'Contact — Rénovation du 13' } },

  // Footer
  { path: '/mentions-legales', name: 'mentions',        component: MentionsLegales, meta: { title: 'Mentions légales' } },
  { path: '/confidentialite',  name: 'confidentialite', component: Confidentialite, meta: { title: 'Confidentialité' } },
  { path: '/faq',              name: 'faq',             component: Faq,             meta: { title: 'FAQ' } },

  // 404 simple → retour vers l’accueil
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

// (facultatif) titre de page automatique
router.afterEach((to) => {
  document.title = to.meta?.title || 'Rénovation du 13'
})

export default router
