import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useStorage('token', null),
      email: useStorage('email', null),
      isLogin: false
    }
  },
  getters: {
    isLoggedIn () {
      return this.token != null
    },
    userEmail () {
      return this.email
    },
    userToken () {
      return this.token
    },
    getIsLogin () {
      return this.isLogin
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
    },
    setIsLogin (value) {
      this.isLogin = value
    }
  }
})
