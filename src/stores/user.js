import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API } from '@/services/controller'

export const useUserStore = defineStore('userStore', () => {
  const user = ref()

  async function signUp({ email, password }) {
    const { data, error } = await API.Auth.signUp({ email, password })
    if (error) return
  }

  async function signInWithPassword({ email, password }) {
    const { data, error } = await API.Auth.signInWithPassword({
      email,
      password,
    })
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
})
