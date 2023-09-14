import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.VUE_APP_API_URL || '/api',
  headers: {
    Authorization: Cookies.get('jwt') ? `token ${Cookies.get('jwt')}` : '',
  },
})

export default instance
