import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './views/HelloWorld.vue'
import ProfileView from './views/ProfileView.vue'
import ErrorDisplay from './views/ErrorDisplay.vue'
import About from './views/AboutView.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  },
  {
    path: '/:path(.*)',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
