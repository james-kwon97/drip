import React, { useState } from 'react'
import { useCart } from '../Cart/CartContext'
import './Checkout.css'

interface CheckoutProps {
  isEnglish: boolean
}

function Checkout({ isEnglish }: CheckoutProps) {
  const { cart } = useCart()
  const [step, setStep] = useState('billing')

  const handleContinue = () => {
    if (step === 'billing') {
      setStep('payment')
    } else {
      // Handle form submission
      console.log('Submitting order')
    }
  }

  return (
    <div className="checkout-page">
      <h1>{isEnglish ? 'Whakaotinga' : 'Checkout'}</h1>
      <hr className="checkout-line" />
      <div className="checkout-content">
        <div className="checkout-form">
          <div className="checkout-tabs">
            <button
              className={step === 'billing' ? 'active' : ''}
              onClick={() => setStep('billing')}
            >
              {isEnglish ? 'WĀHITAU NAMA' : 'BILLING ADDRESS'}
            </button>
            <button
              className={step === 'payment' ? 'active' : ''}
              onClick={() => setStep('payment')}
            >
              {isEnglish ? 'UTU' : 'PAYMENT'}
            </button>
          </div>
          {step === 'billing' && (
            <form className="billing-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder={isEnglish ? 'INGOA TUATAHI' : 'FIRST NAME'}
                />
                <input
                  type="text"
                  placeholder={isEnglish ? 'INGOA WHAKAMUTUNGA' : 'LAST NAME'}
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  placeholder={isEnglish ? 'ĪMĒRA' : 'EMAIL'}
                />
                <input
                  type="tel"
                  placeholder={isEnglish ? 'TAU WAEA' : 'PHONE NUMBER'}
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder={isEnglish ? 'WĀHITAU' : 'ADDRESS'}
                />
                <input
                  type="text"
                  placeholder={isEnglish ? 'WĀHITAU 2' : 'ADDRESS 2'}
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder={isEnglish ? 'ROHE' : 'SUBURB'}
                />
                <input type="text" placeholder={isEnglish ? 'TĀONE' : 'CITY'} />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder={isEnglish ? 'WAEHERE POUTĀPETA' : 'POSTAL CODE'}
                />
                <input
                  type="text"
                  placeholder={isEnglish ? 'WHENUA' : 'COUNTRY'}
                />
              </div>
            </form>
          )}
          {step === 'payment' && (
            <form className="payment-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder={isEnglish ? 'TAU KĀRI' : 'CARD NUMBER'}
                />
                <input
                  type="text"
                  placeholder={isEnglish ? 'MARAMA' : 'MONTH'}
                />
                <input type="text" placeholder={isEnglish ? 'TAU' : 'YEAR'} />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder={isEnglish ? 'KAIPUPURI KĀRI' : 'CARD HOLDER'}
                />
                <input
                  type="text"
                  placeholder={
                    isEnglish ? 'WAEHERE HAUMARU CVC' : 'CVC SECURITY CODE'
                  }
                />
              </div>
            </form>
          )}
        </div>
        <div className="order-summary">
          <h2>
            {isEnglish ? 'Whakarāpopototanga ota' : 'Your order summary'} (
            {cart.length})
          </h2>
          <div className="order-items">
            {cart.map((item) => (
              <div key={item.id} className="order-item">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="order-item-image"
                />
                <div className="order-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.info}</p>
                  <p>
                    {isEnglish ? 'Rahinga' : 'Quantity'}: {item.quantity}
                  </p>
                  <p className="order-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>{isEnglish ? 'Tapeke' : 'Total'}</span>
            <span>
              $
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <button className="continue-button" onClick={handleContinue}>
        {step === 'billing'
          ? isEnglish
            ? 'Haere tonu'
            : 'Continue'
          : isEnglish
          ? 'Whakatau ota'
          : 'Place order'}{' '}
        — $
        {cart
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </button>
    </div>
  )
}

export default Checkout
