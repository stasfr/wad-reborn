import { ref, computed } from 'vue'
import { computedAsync } from '@vueuse/core'
import { API } from '@/services/controller'
import type { ILoginRequestData } from '@/types/user'
import type { User } from '@supabase/supabase-js'

export default function useAuth() {
  const user = ref<User>()

  async function signUp({ email, password }: ILoginRequestData) {
    const { error } = await API.Auth.signUp({ email, password })

    if (error) return error
  }

  async function signInWithPassword({ email, password }: ILoginRequestData) {
    const { error } = await API.Auth.signInWithPassword({ email, password })

    if (error) return error
  }

  async function getSession() {
    const { data, error } = await API.Auth.getSession()

    if (error) return error

    const session = data.session
    user.value = session?.user
    return session
  }

  async function signOut() {
    const { error } = await API.Auth.signOut()

    if (error) return
  }

  const getUser = computedAsync(async () => {
    const session = await getSession()
    return session?.user
  }, null)

  return {
    user,
    signUp,
    signInWithPassword,
    getSession,
    signOut,
    getUser,
    isAuth: computed(() => !!user.value),
  }
}
