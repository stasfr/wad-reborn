import useUser from '@/composables/useUser'
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
} from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

async function redirectToLogin(next: NavigationGuardNext) {
  const userStore = useUser()
  const userSession = await userStore.getSession()
  if (userSession === null) {
    next('/login')
  } else {
    next()
  }
}

async function redirectToProfile(next: NavigationGuardNext) {
  const userStore = useUser()
  const userSession = await userStore.getSession()
  if (userSession !== null) {
    next('/profile')
  } else {
    next()
  }
}

router.beforeEach((to, from, next: NavigationGuardNext) => {
  if (to.meta.requiresAuth) {
    redirectToLogin(next)
  } else if (to.path === '/login') {
    redirectToProfile(next)
  } else {
    next()
  }
})

export default router
