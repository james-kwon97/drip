import React from 'react'
import { Link } from 'react-router-dom'
import './Order.css'

const Order = () => {
  const generateOrderNumber = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const length = 8
    let result = ''
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  const orderNumber = generateOrderNumber()

  return (
    <div className="order-content">
      <div className="order-details">
        <h2>Thank you for your order!</h2>
        <p>
          Your order number is{'  '}
          <span className="order-number">{orderNumber}</span>
          <br />
          Order confirmation have been sent to your email.
        </p>
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    </div>
  )
}

export default Order
