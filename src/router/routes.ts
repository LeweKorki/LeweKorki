import { RouteRecordRaw } from 'vue-router'
import BasicRoutes from '@/router/routes/basic'
import UserRoutes from '@/router/routes/user'
import CoursesRoutes from '@/router/routes/courses'

const Routes: RouteRecordRaw[] = [BasicRoutes, UserRoutes, CoursesRoutes].flat(
  1
)

export default Routes
