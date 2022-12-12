import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'http://localhost:7070/api'
})

async function getSubscriptions () {
  try {
    const store = useAuthStore()
    const { data } = await API.get('/subscriptions', {
      headers: {
        token: store.userToken
      }
    })
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function addSubscription (subData) {
  try {
    const store = useAuthStore()
    const { data } = await API.post('/subscriptions', subData, {
      headers: {
        token: store.userToken
      }
    })
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function deleteSubscription (subId) {
  try {
    const store = useAuthStore()
    const { data } = await API.delete(`/subscriptions/${subId}`, {
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
  getSubscriptions,
  addSubscription,
  deleteSubscription
}
