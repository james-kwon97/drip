import React, { useReducer, useEffect } from 'react'
import { CartContext, cartReducer } from './CartContext'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log('Cart state updated and saved to localStorage:', cart)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
