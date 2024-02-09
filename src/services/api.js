import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://code-club-burger-production-ba1f.up.railway.app/',
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurger
