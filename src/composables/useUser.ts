import { ref } from 'vue'
import { API } from '@/services/controller'

export default function useUser() {
  const user = ref()

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
    getUserId,
    getUser,
  }
}
