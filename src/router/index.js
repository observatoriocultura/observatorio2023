import { createRouter, createWebHistory } from 'vue-router'
import Investigaciones from '../views/Investigaciones.vue'

const baseUrl = import.meta.env.BASE_URL;
console.log({baseUrl});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/Investigaciones.vue')
    },
    {
      path: '/investigaciones/:id?',
      name: '',
      component: () => import('../views/Investigaciones.vue')
    },
    {
      //path: baseUrl + '/about/',
      path: '/about/:id?',
      name: 'about', 
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
