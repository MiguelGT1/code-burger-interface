import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001',
})

// Interceptores de requisição
apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

// const apiCodeBurger = axios.create({
// 'https://code-club-burger-production-ba1f.up.railway.app/',
// })

// baseURL: apiCodeBurger.interceptors.request.use(async config => {
// const userData = await localStorage.getItem('codeburger:userData')
// const token = userData && JSON.parse(userData).token
// config.headers.Authorization = `Bearer ${token}`
// return config
// })

export default apiCodeBurger
