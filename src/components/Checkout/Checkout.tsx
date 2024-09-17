import React, { useState } from 'react'
import './Checkout.css'

interface CheckoutProps {
  isEnglish: boolean
}

function Checkout({ isEnglish }: CheckoutProps) {
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
              <input
                type="text"
                placeholder={isEnglish ? 'INGOA TUATAHI' : 'FIRST NAME'}
              />
              <input
                type="text"
                placeholder={isEnglish ? 'INGOA WHAKAMUTUNGA' : 'LAST NAME'}
              />
              <input
                type="text"
                placeholder={isEnglish ? 'WĀHITAU' : 'ADDRESS'}
              />
              <input
                type="text"
                placeholder={isEnglish ? 'WĀHITAU 2' : 'ADDRESS 2'}
              />
              <input type="text" placeholder={isEnglish ? 'ROHE' : 'SUBURB'} />
              <input type="text" placeholder={isEnglish ? 'TĀONE' : 'CITY'} />
              <input type="text" placeholder={isEnglish ? 'TĀIKA' : 'STATE'} />
              <input
                type="text"
                placeholder={isEnglish ? 'WAEHERE POUTĀPETA' : 'POSTAL CODE'}
              />
              <input
                type="text"
                placeholder={isEnglish ? 'WHENUA' : 'COUNTRY'}
              />
              <div className="phone-input">
                <select>
                  <option>{isEnglish ? 'TĀPIRI' : 'PREFIX'}</option>
                  {/* Add more prefix options */}
                </select>
                <input
                  type="tel"
                  placeholder={isEnglish ? 'TAU WAEA' : 'PHONE NUMBER'}
                />
              </div>
            </form>
          )}
          {step === 'payment' && (
            <form className="payment-form">
              <input
                type="text"
                placeholder={isEnglish ? 'TAU KĀRI' : 'CARD NUMBER'}
              />
              <input type="text" placeholder={isEnglish ? 'MARAMA' : 'MONTH'} />
              <input type="text" placeholder={isEnglish ? 'TAU' : 'YEAR'} />
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
            </form>
          )}
        </div>
        <div className="order-summary">
          <h2>
            {isEnglish ? 'Whakarāpopototanga ota' : 'Your order summary'} (3)
          </h2>
          <div className="order-items">{/* Add order items here */}</div>
          <div className="order-total">
            <span>{isEnglish ? 'Tapeke' : 'Total'}</span>
            <span>$49.97</span>
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
        — $57.97
      </button>
    </div>
  )
}

export default Checkout
