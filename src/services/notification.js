import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
})

async function getNotifications () {
  try {
    const store = useAuthStore()
    const { data } = await API.get('/notification', {
      headers: {
        token: store.userToken
      }
    })
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function addNotifications (notifData) {
  try {
    const store = useAuthStore()
    const { data } = await API.post('/notification', notifData, {
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
  getNotifications,
  addNotifications
}