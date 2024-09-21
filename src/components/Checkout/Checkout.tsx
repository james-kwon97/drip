import React, { useState } from 'react'
import { useCart } from '../Cart/CartContext'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'

interface CheckoutProps {
  isEnglish: boolean
}

function Checkout({ isEnglish }: CheckoutProps) {
  const { cart } = useCart()
  const [step, setStep] = useState('billing')
  const navigate = useNavigate()

  const handleContinue = () => {
    if (step === 'billing') {
      setStep('payment')
    } else {
      // Handle form submission
      console.log('Submitting order')
      // Navigate to order-confirmation page
      navigate('/order-confirmation')
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
                <div className="form-field">
                  <label>{isEnglish ? 'INGOA TUATAHI' : 'FIRST NAME'}</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label>
                    {isEnglish ? 'INGOA WHAKAMUTUNGA' : 'LAST NAME'}
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>{isEnglish ? 'ĪMĒRA' : 'EMAIL'}</label>
                  <input type="email" />
                </div>
                <div className="form-field">
                  <label>{isEnglish ? 'TAU WAEA' : 'PHONE NUMBER'}</label>
                  <input type="tel" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>{isEnglish ? 'WĀHITAU' : 'ADDRESS'}</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label>{isEnglish ? 'WĀHITAU 2' : 'ADDRESS 2'}</label>
                  <input type="text" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>{isEnglish ? 'ROHE' : 'SUBURB'}</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label>{isEnglish ? 'TĀONE' : 'CITY'}</label>
                  <input type="text" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>
                    {isEnglish ? 'WAEHERE POUTĀPETA' : 'POSTAL CODE'}
                  </label>
                  <input type="text" />
                  <hr className="postal-code-hr" />
                </div>
                <div className="form-field">
                  <label>{isEnglish ? 'WHENUA' : 'COUNTRY'}</label>
                  <input type="text" />
                </div>
              </div>
            </form>
          )}
          {step === 'payment' && (
            <form className="payment-form">
              <div className="form-row">
                <div className="form-field card-number">
                  <label>{isEnglish ? 'TAU KĀRI' : 'CARD NUMBER'}</label>
                  <input type="text" />
                </div>
                <div className="form-field month">
                  <label>{isEnglish ? 'MARAMA' : 'MONTH'}</label>
                  <input type="text" />
                </div>
                <div className="form-field year">
                  <label>{isEnglish ? 'TAU' : 'YEAR'}</label>
                  <input type="text" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field card-holder">
                  <label>{isEnglish ? 'KAIPUPURI KĀRI' : 'CARD HOLDER'}</label>
                  <input type="text" />
                  <hr className="card-holder-hr" />
                </div>
                <div className="form-field cvc">
                  <label>
                    {isEnglish ? 'WAEHERE HAUMARU CVC' : 'CVC SECURITY CODE'}
                  </label>
                  <input type="text" />
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="order-summary">
          <div className="order-summary-header">
            <h2>
              {isEnglish ? 'Whakarāpopototanga ota' : 'Your order summary'} (
              {cart.length})
            </h2>
            <span className="order-total">
              Total $
              {(
                cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ) + 10
              ).toFixed(2)}
            </span>
          </div>
          <div className="order-items">
            {cart.map((item) => (
              <div key={item.id} className="order-item">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="order-item-image"
                />
                <div className="order-item-details">
                  <div className="order-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.info}</p>
                  </div>
                  <span className="order-item-quantity">
                    QTY {item.quantity}
                  </span>
                  <span className="order-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary-footer">
            <div className="order-subtotal-shipping">
              <span>
                {isEnglish ? 'Tapeke iti' : 'Subtotal'} $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
              <span>+</span>
              <span>{isEnglish ? 'Tuku' : 'Shipping'} $10.00</span>
            </div>
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
