import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Offer from '@/views/Offer.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/oferta',
    component: Offer,
  },
]

export default routes
