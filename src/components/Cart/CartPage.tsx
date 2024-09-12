import React, { useEffect } from 'react'
import { useCart } from '../Cart/CartContext'

interface CartPageProps {
  isEnglish: boolean
}

export default function CartPage({ isEnglish }: CartPageProps) {
  const { cart, dispatch } = useCart()

  useEffect(() => {
    console.log('CartPage rendered. Current cart state:', cart)
  }, [cart])

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', id })
  }

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', id, quantity: newQuantity })
    } else {
      handleRemoveItem(id)
    }
  }

  if (cart.length === 0) {
    console.log('Cart is empty in CartPage')
    return <p>{isEnglish ? 'Your cart is empty' : 'Kāore he mea i tō kete'}</p>
  }

  console.log('Rendering cart items:', cart)

  return (
    <div className="cart-page">
      <h1>{isEnglish ? 'Your Cart' : 'Tō Kete'}</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h2>{item.name}</h2>
            <p>{item.info}</p>
            <p>${item.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button onClick={() => handleRemoveItem(item.id)}>
              {isEnglish ? 'Remove' : 'Remove'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
