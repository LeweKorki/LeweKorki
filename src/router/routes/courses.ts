import { RouteRecordRaw } from 'vue-router'

import Courses from '@/views/Courses/Catalogue.vue'
import Details from '@/views/Courses/Details.vue'

const CoursesRoutes: RouteRecordRaw[] = [
  {
    path: '/kursy',
    component: Courses,
  },
  {
    path: '/kursy/:id',
    component: Details,
  },
]

export default CoursesRoutes
