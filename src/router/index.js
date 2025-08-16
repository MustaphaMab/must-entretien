import { createRouter, createWebHistory } from 'vue-router'

const HomeView        = () => import('../views/HomeView.vue')
const PrestationView  = () => import('../views/PrestationView.vue')
const RealisationView = () => import('../views/RealisationView.vue')
const AProposView     = () => import('../views/AProposView.vue')
const ContactView     = () => import('../views/ContactView.vue')


const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/prestations', name: 'prestation', component       : PrestationView }, 
    { path: '/realisations', name: 'realisation', component: RealisationView },
    { path: '/a-propos', name: 'apropos', component: AProposView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/:pathMatch(.*)*', redirect: '/' }, // 404 simple
  ]
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior: () => ({ top: 0 }),

  })

export default router

router.afterEach((to) => {
  document.title = to.meta?.title || 'Rénovation du 13'
})
