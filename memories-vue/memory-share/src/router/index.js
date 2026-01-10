import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Memories from '../views/Memories.vue'
import MemoryDetail from '../views/MemoryDetail.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/memories', name: 'memories', component: Memories },
    { path: '/memories/:id', name: 'memory-detail', component: MemoryDetail, props: true },
    { path: '/about', name: 'about', component: About },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
