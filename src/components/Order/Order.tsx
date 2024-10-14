import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Order.css'

interface OrderProps {
  isEnglish: boolean
}

const Order = ({ isEnglish }: OrderProps) => {
  const [orderNumber, setOrderNumber] = useState<string>('')

  useEffect(() => {
    const storedOrderNumber = localStorage.getItem('orderNumber')
    if (storedOrderNumber) {
      setOrderNumber(storedOrderNumber)
    } else {
      const newOrderNumber = Array.from(
        { length: 8 },
        () =>
          'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 36)]
      ).join('')
      setOrderNumber(newOrderNumber)
      localStorage.setItem('orderNumber', newOrderNumber)
    }

    return () => localStorage.removeItem('orderNumber')
  }, [])

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
