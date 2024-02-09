import axios from 'axios'
import express from 'express'

const app = express()

app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Origin',
    'https://code-burger-interface-fptrs4u79-miguelgt1s-projects.vercel.app',
  )
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

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
