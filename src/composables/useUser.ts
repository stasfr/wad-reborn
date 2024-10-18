import { ref } from 'vue'
import { API } from '@/services/controller'
import { type signUpInput } from '@/types/user'

export default function useUser() {
  const user = ref()

  async function signUp(signUpPayload: signUpInput) {
    const { error } = await API.Auth.signUp(signUpPayload)
    if (error) return
  }

  async function signInWithPassword(signUpPayload: signUpInput) {
    const { error } = await API.Auth.signInWithPassword(signUpPayload)
    if (error) return
  }

  async function getSession() {
    const { data, error } = await API.Auth.getSession()
    const session = data.session

    if (session) {
      user.value = session.user
    }

    if (error) return
    return session
  }

  async function signOut() {
    const { data, error } = await API.Auth.signOut()
    user.value = {}

    if (error) return
    return data
  }

  async function getUserId() {
    const { data, error } = await API.Auth.getSession()
    const session = data.session
    if (session) {
      user.value = session.user
      return session.user.id
    }

    if (error) return
  }

  async function getUser() {
    const { data, error } = await API.Auth.getSession()
    const session = data.session
    if (session) {
      user.value = session.user
      return session.user
    }

    if (error) return
  }

  return {
    user,
    signUp,
    signInWithPassword,
    getSession,
    signOut,
    getUserId,
    getUser,
  }
}
