import useUser from '@/composables/useUser'
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
} from 'vue-router'
import { routes } from 'vue-router/auto-routes'

// TODO: requiresAuth для:
// /user/profile
// /grapes/notes and etc.

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

async function redirectToLogin(next: NavigationGuardNext) {
  const userStore = useUser()
  const userSession = await userStore.getSession()
  if (userSession === null) {
    next('/user/login')
  } else {
    next()
  }
}

async function redirectToProfile(next: NavigationGuardNext) {
  const userStore = useUser()
  const userSession = await userStore.getSession()
  if (userSession !== null) {
    next('/user/profile')
  } else {
    next()
  }
}

router.beforeEach((to, from, next: NavigationGuardNext) => {
  if (to.meta.requiresAuth) {
    redirectToLogin(next)
  } else if (to.path === '/user/login') {
    redirectToProfile(next)
  } else {
    next()
  }
})

export default router
