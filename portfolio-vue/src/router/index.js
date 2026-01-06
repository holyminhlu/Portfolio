import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },

  // Legacy Vietnamese paths -> Home section anchors
  { path: '/gioi-thieu', redirect: '/#about' },
  { path: '/ky-nang', redirect: '/#skills' },
  { path: '/du-an', redirect: '/#projects' },
  { path: '/kinh-nghiem', redirect: '/#experience' },
  { path: '/lien-he', redirect: '/#contact' }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})