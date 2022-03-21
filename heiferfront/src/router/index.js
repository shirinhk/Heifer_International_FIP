import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Donate from '../views/Donate.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate,
    props: true

    // route level code-splitting
    // this generates a separate chunk (donate.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "donate" */ '../views/Donate.vue'),

  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
