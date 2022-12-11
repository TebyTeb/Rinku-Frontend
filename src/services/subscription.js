import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:7070/api/'
})

async function getSubscriptions (userId) {
  try {
    const { data } = await API.post('subscriptions' /* {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    } */)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

export default {
  getSubscriptions
}
