import { useReducer, useEffect } from 'react'
import { CartContext, cartReducer, CartAction } from './CartContext'

type CartProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart')
    console.log('Initial cart state loaded from localStorage:', localData)
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log('Cart state updated and saved to localStorage:', cart)
  }, [cart])

  const wrappedDispatch = (action: CartAction) => {
    console.log('Dispatching action:', action)
    dispatch(action)
  }

  return (
    <CartContext.Provider value={{ cart, dispatch: wrappedDispatch }}>
      {children}
    </CartContext.Provider>
  )
}
