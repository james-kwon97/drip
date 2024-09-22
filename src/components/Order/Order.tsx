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
      <h1>Purchase complete</h1>
      <div className="order-details">
        <h2>Your order has been placed!</h2>
        <p>
          Congratulations, your order has been placed. Your order number is:
          <br />
          <strong>{orderNumber}</strong>
        </p>
        <p>The details have been sent to your email.</p>
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    </div>
  )
}

export default Order
