import axios from 'axios'

const API = axios.create({
  baseURL: 'https://rinku-api.onrender.com/api'
})

async function login (loginData) {
  try {
    const { data } = await API.post('/auth/login', loginData)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function signup (newUser) {
  try {
    const { data } = await API.post('/auth/signup', newUser)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

export default {
  login,
  signup
}
