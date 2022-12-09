import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useStorage('token', null),
      email: useStorage('email', null)
    }
  },
  getters: {
    isLoggedIn () {
      return this.token != null
    },
    userEmail () {
      return this.email
    }
    
  },
  actions: {
    logout () {
      this.token = null
      this.email = null
    },
    login (token, email) {
      this.token = token
      this.email = email
    }
  }
})
