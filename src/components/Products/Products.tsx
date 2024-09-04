import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Products.css'

interface ProductsProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

function Products({ isEnglish, onLanguageSwitch }: ProductsProps) {
  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />

      <div className="products-intro">
        <p>
          {isEnglish
            ? ' "NTirohia te tino pai o te kawhe me ā mātou ranunga kounga me ngā kapu ātaahua, e whakarei ana i tō wheako kawhe" '
            : ' "Discover coffee perfection with our premium blends and beautifully designed cups, elevating your coffee experience"'}
        </p>
      </div>

      {/* Main products section */}
      <div className="products-container">
        <h1>{isEnglish ? 'Ā Mātou Hua' : 'Our Products'}</h1>

        <div className="products-list">
          <div className="product-item">
            <h2>{isEnglish ? 'Ranunga Kawhe' : 'Coffee Blend'}</h2>
            <p>{isEnglish ? 'Mai i $15.00' : 'From $15.00'}</p>
          </div>
          <div className="product-item">
            <h2>{isEnglish ? 'Kapu Kawhe' : 'Drip Coffee Cup'}</h2>
            <p>{isEnglish ? 'Mai i $25.00' : 'From $25.00'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
