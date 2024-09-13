import { createContext, useContext, Dispatch } from 'react'

export type CartItem = {
  id: number
  name: string
  info: string
  price: number
  quantity: number
  imageUrl: string
}

export type CartAction =
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
  console.log('cartReducer called with action:', action)
  console.log('Current state:', state)

  let newState: CartItem[]

  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.item.id
      )
      if (existingItemIndex !== -1) {
        // Item exists, update its quantity
        newState = state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Item doesn't exist, add it to the cart
        newState = [...state, { ...action.item, quantity: 1 }]
      }
      break
    }

    case 'REMOVE_FROM_CART':
      newState = state.filter((item) => item.id !== action.id)
      break

    case 'UPDATE_QUANTITY':
      newState = state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      )
      break
  }

  console.log('New state after action:', newState)
  return newState
}
