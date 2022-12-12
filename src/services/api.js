import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:7070/api'
})

async function login (loginData) {
  try {
    const { data } = await API.post('/auth/login', loginData)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

export default {
  login
}
