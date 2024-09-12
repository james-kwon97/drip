import React from 'react'
import { useCart } from '../Cart/CartContext'
import { XMarkIcon } from '@heroicons/react/24/outline'
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
    } else {
      handleRemoveItem(id)
    }
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>{isEnglish ? 'Tō Kete' : 'Your Cart'}</h1>
        <p>{isEnglish ? 'Kāore he mea i tō kete' : 'Your cart is empty'}</p>
        <button className="continue-shopping">
          {isEnglish ? 'Haere Tonu ki te Hokohoko' : 'Continue Shopping'}
        </button>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>{isEnglish ? 'Tō Kete' : 'Your Cart'}</h1>
      <div className="cart-headers">
        <span>Product</span>
        <span>Quantity</span>
        <span>Price</span>
        <span></span>
      </div>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="product-info">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="product-details">
                <h2>{item.name}</h2>
                <p>{item.info}</p>
              </div>
            </div>
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
            <p className="item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              className="remove-button"
              onClick={() => handleRemoveItem(item.id)}
            >
              <XMarkIcon className="remove-icon" />
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>
          {isEnglish ? 'Tapeke' : 'Total'}: ${calculateTotal().toFixed(2)}
        </h2>
        <button className="checkout-button">
          {isEnglish ? 'Haere ki te Utu' : 'Proceed to checkout'}
        </button>
      </div>
    </div>
  )
}
