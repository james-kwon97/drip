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
            <span className="products-name">
              {isEnglish ? 'Ranunga Kawhe 1' : 'Coffee Blend 1'}
            </span>
            <span className="products-price">
              {isEnglish ? 'Mai $15.00' : 'From $15.00'}
            </span>
          </div>
        </div>
        <div className="products-item">
          <img src={ProductImage} alt="Product 2" className="products-image" />
          <div className="products-info">
            <span className="products-name">
              {isEnglish ? 'Ranunga Kawhe 2' : 'Coffee Blend 2'}
            </span>
            <span className="products-price">
              {isEnglish ? 'Mai $18.00' : 'From $18.00'}
            </span>
          </div>
        </div>
        <div className="products-item">
          <img src={ProductImage} alt="Product 3" className="products-image" />
          <div className="products-info">
            <span className="products-name">
              {isEnglish ? 'Ranunga Kawhe 3' : 'Coffee Blend 3'}
            </span>
            <span className="products-price">
              {isEnglish ? 'Mai $20.00' : 'From $20.00'}
            </span>
          </div>
        </div>
        <div className="products-item">
          <img src={ProductImage} alt="Product 4" className="products-image" />
          <div className="products-info">
            <span className="products-name">
              {isEnglish ? 'Kapu Kawhe 1' : 'Coffee Cup 1'}
            </span>
            <span className="products-price">
              {isEnglish ? 'Mai $25.00' : 'From $25.00'}
            </span>
          </div>
        </div>
        <div className="products-item products-bottom-row">
          <img src={ProductImage} alt="Product 5" className="products-image" />
          <div className="products-info">
            <span className="products-name">
              {isEnglish ? 'Kapu Kawhe 2' : 'Coffee Cup 2'}
            </span>
            <span className="products-price">
              {isEnglish ? 'Mai $28.00' : 'From $28.00'}
            </span>
          </div>
        </div>
        <div className="products-item products-bottom-row">
          <img src={ProductImage} alt="Product 6" className="products-image" />
          <div className="products-info">
            <span className="products-name">
              {isEnglish ? 'Kapu Kawhe 3' : 'Coffee Cup 3'}
            </span>
            <span className="products-price">
              {isEnglish ? 'Mai $30.00' : 'From $30.00'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
