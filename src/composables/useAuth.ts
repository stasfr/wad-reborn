import { API } from '@/services/controller'
import { type ILoginRequestData } from '@/types/user'

export default function useAuth() {
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
    const session = data.session

    if (error) return error
    return session
  }

  async function signOut() {
    const { error } = await API.Auth.signOut()

    if (error) return
  }

  return {
    signUp,
    signInWithPassword,
    getSession,
    signOut,
  }
}
