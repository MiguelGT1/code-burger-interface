import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = [...cartProducts]
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    await localStorage.setItem(
      'codeburger:cartInfo',
      JSON.stringify(newCartProducts),
    )
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProductInCart, cartProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useUser must be use with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node,
}