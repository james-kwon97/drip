import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Products.css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import ProductImage from '../../assets/product_image.png'

interface ProductsProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

function Products({ isEnglish, onLanguageSwitch }: ProductsProps) {
  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />

      <div className="products-page-intro">
        <p>
          {isEnglish
            ? ' "Tirohia te tino pai o te kawhe me ā mātou ranunga kounga me ngā kapu ātaahua, e whakarei ana i tō wheako kawhe" '
            : ' "Discover coffee perfection with our premium blends and beautifully designed cups, elevating your coffee experience"'}
        </p>
        <hr className="products-horizontal-line" />
      </div>

      <div className="products-page-categories">
        <div className="products-left-categories">
          <button className="products-category-button">
            {isEnglish ? 'Katoa' : 'All'}
          </button>
          <button className="products-category-button">
            {isEnglish ? 'Kawhe' : 'Coffee'}
          </button>
          <button className="products-category-button">
            {isEnglish ? 'Tāpiri' : 'Extras'}
          </button>
        </div>

        <div className="products-right-filters">
          <button className="products-filter-button">
            {isEnglish ? 'Tātari' : 'Filters'}
            <ChevronDownIcon className="products-chevron-icon" />
          </button>
          <button className="products-sort-button">
            {isEnglish ? 'Kōmaka mā' : 'Sort By'}
            <ChevronDownIcon className="products-chevron-icon" />
          </button>
        </div>
      </div>

      <div className="products-page-grid">
        <div className="products-item">
          <img src={ProductImage} alt="Product 1" className="products-image" />
          <div className="products-info">
            <span className="products-name">drip: original</span>
            <span className="products-price">$34.99</span>
          </div>
        </div>
        <div className="products-item">
          <img src={ProductImage} alt="Product 2" className="products-image" />
          <div className="products-info">
            <span className="products-name">drip: hazelnut</span>
            <span className="products-price">$34.99</span>
          </div>
        </div>
        <div className="products-item">
          <img src={ProductImage} alt="Product 3" className="products-image" />
          <div className="products-info">
            <span className="products-name">drip: chocolate</span>
            <span className="products-price">$34.99</span>
          </div>
        </div>
        <div className="products-item">
          <img src={ProductImage} alt="Product 4" className="products-image" />
          <div className="products-info">
            <span className="products-name">drip: original decaf</span>
            <span className="products-price">$34.99 </span>
          </div>
        </div>
        <div className="products-item products-bottom-row">
          <img src={ProductImage} alt="Product 5" className="products-image" />
          <div className="products-info">
            <span className="products-name">drip: mug</span>
            <span className="products-price">$24.99</span>
          </div>
        </div>
        <div className="products-item products-bottom-row">
          <img src={ProductImage} alt="Product 6" className="products-image" />
          <div className="products-info">
            <span className="products-name">drip: cup</span>
            <span className="products-price">$29.99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
