import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Offer from '@/views/Offer.vue'
import Schedule from '@/views/Schedule.vue'
import Prices from '@/views/Prices.vue'

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
  {
    path: '/cennik',
    component: Prices,
  },
]

export default routes
