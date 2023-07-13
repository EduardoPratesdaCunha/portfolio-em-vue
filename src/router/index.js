import { createRouter, createWebHistory } from 'vue-router'
import HeaderPage from '../views/intro/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
    {
        path: '/',
        name: 'HeaderPage',
        component: HeaderPage
    },
    ]
})

export default router
