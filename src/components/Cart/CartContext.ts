import { createContext, useContext, Dispatch } from 'react'

export type CartItem = {
  id: string
  name: string
  info: string
  price: number
  quantity: number
  imageUrl: string
}

export type CartAction =
  | { type: 'ADD_TO_CART'; item: CartItem }
  | { type: 'REMOVE_FROM_CART'; id: string }
  | { type: 'UPDATE_QUANTITY'; id: string; quantity: number }

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
        // Item already exists in the cart, update its quantity by adding the new quantity
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item
        )
      } else {
        // Item doesn't exist in the cart, add it with the specified quantity
        return [...state, action.item]
      }
    }

    case 'REMOVE_FROM_CART': {
      return state.filter((item) => item.id !== action.id)
    }

    case 'UPDATE_QUANTITY': {
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      )
    }

    default:
      return state
  }
}
