import Vue from 'vue'
import VueRouter from 'vue-router'
import MainScreen from '../components/MainScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainScreen',
    component: MainScreen
  },
  {
    path: '/largeMap',
    name: 'LargeMap',
    component: () => import(/* webpackChunkName: "largeMap" */ '../components/largeMap.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
