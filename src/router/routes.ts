import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Offer from '@/views/Offer.vue'
import Schedule from '@/views/Schedule.vue'

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
  {
    path: '/umowsie',
    component: Schedule,
  },
]

export default routes
