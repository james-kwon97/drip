import React, { createContext, useContext, Dispatch } from 'react'

export type CartItem = {
  id: number
  name: string
  info: string
  price: number
  quantity: number
  imageUrl: string
}

type CartAction =
  | { type: 'ADD_TO_CART'; item: CartItem }
  | { type: 'REMOVE_FROM_CART'; id: number }
  | { type: 'UPDATE_QUANTITY'; id: number; quantity: number }

type CartContextType = {
  cart: CartItem[]
  dispatch: Dispatch<CartAction>
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const cartReducer = (
  state: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.item.id
      )
      if (existingItemIndex !== -1) {
        // Item exists, update its quantity
        const updatedCart = [...state]
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        }
        return updatedCart
      } else {
        // Item doesn't exist, add it to the cart
        return [...state, { ...action.item, quantity: 1 }]
      }
    }

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.id)

    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      )

    default:
      return state
  }
}
