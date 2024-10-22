import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import FloatingElements from './components/FloatingElements.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/floating', component: FloatingElements },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router