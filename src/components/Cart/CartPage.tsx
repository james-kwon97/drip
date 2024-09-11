import React from 'react'
import { useCart } from '../Cart/CartContext'
import './CartPage.css'

interface CartPageProps {
  isEnglish: boolean
}

export default function CartPage({ isEnglish }: CartPageProps) {
  const { cart, dispatch } = useCart()

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', id })
  }

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', id, quantity: newQuantity })
    }
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <h1>{isEnglish ? 'Your Cart' : 'Tō Kete'}</h1>
      {cart.length === 0 ? (
        <p>{isEnglish ? 'Your cart is empty' : 'Kāore he mea i tō kete'}</p>
      ) : (
        <>
          <div className="cart-items">
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
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="remove-button"
                  >
                    {isEnglish ? 'Remove' : 'Tango'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>
              {isEnglish ? 'Total' : 'Tapeke'}: ${totalPrice.toFixed(2)}
            </h2>
            <button className="checkout-button">
              {isEnglish ? 'Proceed to Checkout' : 'Haere ki te Utu'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
