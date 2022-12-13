import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'https://rinku-api.onrender.com/api'
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
