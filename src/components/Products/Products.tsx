import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Products.css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import originalProduct from '../../assets/original_product.png'
import hazelnutProduct from '../../assets/hazelnut_product.png'
import chocolateProduct from '../../assets/chocolate_product.png'
import originalDecafProduct from '../../assets/original_decaf_product.png'
import mugCupProduct from '../../assets/mug_cup_product.png'
import disposableCupProduct from '../../assets/disposable_cups_product.png'

interface ProductsProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

interface Product {
  id: number
  name: string
  price: string
  image: string
  href: string
  category: 'coffee' | 'extras'
}

function Products({ isEnglish, onLanguageSwitch }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const products: Product[] = [
    {
      id: 1,
      name: 'drip: original',
      price: '$34.99',
      image: originalProduct,
      href: '/products/original',
      category: 'coffee',
    },
    {
      id: 2,
      name: 'drip: hazelnut',
      price: '$34.99',
      image: hazelnutProduct,
      href: '/products/hazelnut',
      category: 'coffee',
    },
    {
      id: 3,
      name: 'drip: chocolate',
      price: '$34.99',
      image: chocolateProduct,
      href: '/products/chocolate',
      category: 'coffee',
    },
    {
      id: 4,
      name: 'drip: original decaf',
      price: '$34.99',
      image: originalDecafProduct,
      href: '/products/original-decaf',
      category: 'coffee',
    },
    {
      id: 5,
      name: 'drip: mug',
      price: '$24.99',
      image: mugCupProduct,
      href: '/products/mug-cup',
      category: 'extras',
    },
    {
      id: 6,
      name: 'drip: disposable cups',
      price: '$29.99',
      image: disposableCupProduct,
      href: '/products/disposable-cups',
      category: 'extras',
    },
  ]

  const filteredProducts = products.filter((product) => {
    if (activeCategory === 'all') return true
    return product.category === activeCategory
  })

  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />
      <div className="products-container">
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
            <button
              className={`products-category-button ${
                activeCategory === 'all' ? 'active' : ''
              }`}
              onClick={() => setActiveCategory('all')}
            >
              {isEnglish ? 'Katoa' : 'All'}
            </button>
            <button
              className={`products-category-button ${
                activeCategory === 'coffee' ? 'active' : ''
              }`}
              onClick={() => setActiveCategory('coffee')}
            >
              {isEnglish ? 'Kawhe' : 'Coffee'}
            </button>
            <button
              className={`products-category-button ${
                activeCategory === 'extras' ? 'active' : ''
              }`}
              onClick={() => setActiveCategory('extras')}
            >
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
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`products-item ${
                index > 3 ? 'products-bottom-row' : ''
              }`}
            >
              <a href={product.href}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="products-image"
                />
              </a>
              <div className="products-info">
                <span className="products-name">{product.name}</span>
                <span className="products-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
