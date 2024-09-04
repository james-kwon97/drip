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
      {/* Include Navbar */}
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />

      {/* Main content of the Products page */}
      <div className="products-container">
        <h1>{isEnglish ? 'Ā Mātou Hua' : 'Our Products'}</h1>
        {/* Add product listing or content here */}
        <div className="products-list">
          <div className="product-item">
            <h2>{isEnglish ? 'Ranunga Kawhe' : 'Coffee Blend'}</h2>
            <p>{isEnglish ? 'Mai i $15.00' : 'From $15.00'}</p>
          </div>
          <div className="product-item">
            <h2>{isEnglish ? 'Kapu Kawhe' : 'Drip Coffee Cup'}</h2>
            <p>{isEnglish ? 'Mai i $25.00' : 'From $25.00'}</p>
          </div>
          {/* Add more product items as needed */}
        </div>
      </div>
    </div>
  )
}

export default Products
