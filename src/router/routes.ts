import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Offer from '@/views/Offer.vue'
import Schedule from '@/views/Schedule.vue'
// import Prices from '@/views/Prices.vue'
import Work from '@/views/Work.vue'
import Tutors from '@/views/Tutors.vue'
import Courses from '@/views/Courses.vue'

import Login from '@/views/User/Auth/Login.vue'
// import Register from '@/views/User/Auth/Register.vue'
import Logout from '@/views/User/Auth/Logout.vue'
import User from '@/views/User/User.vue'
// import Settings from '@/views/User/Settings.vue'

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
    path: '/kursy',
    component: Courses,
  },
  // {
  //   path: '/cennik',
  //   component: Prices,
  // },
  {
    path: '/pracuj',
    component: Work,
  },
  {
    path: '/korepetytorzy',
    component: Tutors,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: Register,
  // },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/users/:login',
    name: 'User',
    component: User,
  },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: Settings,
  // },
]

export default routes
