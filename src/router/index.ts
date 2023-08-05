import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import hideForAuth from './middlewares/auth'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(hideForAuth)

export default router
