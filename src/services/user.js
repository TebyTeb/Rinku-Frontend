import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'https://rinku-api.onrender.com/api/users'
})

async function getProfile () {
  try {
    const store = useAuthStore()
    const { data } = await API.get('/profile', {
      headers: {
        token: store.userToken
      }
    })
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function updateProfile (update) {
  try {
    const store = useAuthStore()
    const { data } = await API.put('/profile', update, {
      headers: {
        token: store.userToken
      }
    })
    return data
  } catch (error) {
    return { error: error.message }
  }
}
export default {
  getProfile,
  updateProfile
}
