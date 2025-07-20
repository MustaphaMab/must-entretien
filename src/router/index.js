import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PrestationView from '../views/PrestationView.vue'
import RealisationView from '../views/RealisationView.vue'
import AProposView from '../views/AProposView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/prestations', name: 'prestation', component: PrestationView }, 
    { path: '/realisations', name: 'realisation', component: RealisationView },
    { path: '/a-propos', name: 'a-propos', component: AProposView },
    { path: '/contact', name: 'contact', component: ContactView },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })


export default router
