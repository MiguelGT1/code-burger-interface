import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const user = { name: 'Miguel', age: 18 }
  const outroUser = { name: 'Julia', age: 25 }

  return (
    <UserContext.Provider value={{ user, outroUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be use with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node,
}
