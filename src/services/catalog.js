import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'http://localhost:7070/api'
})

async function getCatalog () {
  try {
    const store = useAuthStore()
    const { data } = await API.get('/catalog', {
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
  getCatalog
}
