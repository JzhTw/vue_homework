import Vue from 'vue'
import VueRouter from 'vue-router'
import DemositeView from '../views/DemositeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'demosite',
    component: DemositeView
  },
  {
    path: '/demosite2',
    name: 'demosite2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "demosite2" */ '../views/Demosite2View.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
