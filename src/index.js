import React from 'react'
import { createRoot } from 'react-dom'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles'

const root = document.getElementById('root')
const reactRoot = createRoot(root)

reactRoot.render(
  <>
    <Login />
    <GlobalStyles />
  </>,
)
