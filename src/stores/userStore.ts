import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type UserRole = 'user' | 'admin' | 'guest'

export interface User {
  id: string
  username: string
  role: UserRole
}

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<User | null>({
    id: '1',
    username: 'Artem',
    role: 'admin'
  })

  function login(username: string, password: string) {
    if (username === 'admin' && password === '1234') {
      currentUser.value = {
        id: '1',
        username: 'Artem',
        role: 'admin'
      }
    } else {
      throw new Error('Invalid credentials')
    }
  }

  function logout() {
    currentUser.value = null
  }

  const isAdmin = computed(() => currentUser.value?.role === 'admin')
  const username = computed(() => currentUser.value?.username || 'Guest')

  return {
    currentUser,
    login,
    logout,
    isAdmin,
    username
  }
})