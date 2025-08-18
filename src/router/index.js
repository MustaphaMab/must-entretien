const MentionsLegales  = () => import('../views/MentionsLegales.vue')
const Confidentialite  = () => import('../views/Confidentialite.vue')
const Faq              = () => import('../views/Faq.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/prestations', name: 'prestation', component: PrestationView }, 
  { path: '/realisations', name: 'realisation', component: RealisationView },
  { path: '/a-propos', name: 'apropos', component: AProposView },
  { path: '/contact', name: 'contact', component: ContactView },

  // 🔹 nouvelles pages du footer
  { path: '/mentions-legales', name: 'mentions', component: MentionsLegales },
  { path: '/confidentialite', name: 'confidentialite', component: Confidentialite },
  { path: '/faq', name: 'faq', component: Faq },

  { path: '/:pathMatch(.*)*', redirect: '/' }, // 404 simple
]
