import React from 'react'
import { Link } from 'react-router-dom'
import './Order.css'

interface OrderProps {
  isEnglish: boolean
}

const Order = ({ isEnglish }: OrderProps) => {
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
        <h2>
          {isEnglish ? 'Ngā mihi mō tō ota!' : 'Thank you for your order!'}
        </h2>
        <p>
          {isEnglish ? 'Ko tō nama ota' : 'Your order number is'}{' '}
          <span className="order-number">{orderNumber}</span>
          <br />
          {isEnglish
            ? 'Kua tukuna atu te whakapumautanga ota ki tō īmēra.'
            : 'Order confirmation has been sent to your email.'}
        </p>
        <Link to="/" className="home-button">
          {isEnglish ? 'Kāinga' : 'Home'}
        </Link>
      </div>
    </div>
  )
}

export default Order
