import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Login from './containers/Login'
import Register from './containers/Register'
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from './styles/globalStyles'

const root = document.getElementById('root')
const reactRoot = createRoot(root)

reactRoot.render(
  <>
    <UserProvider>
      <Login />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
)
