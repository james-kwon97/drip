import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './ProductDetails.css'
import { productData } from './productData'

interface ProductsProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

function ProductDetails({ isEnglish, onLanguageSwitch }: ProductsProps) {
  const { id } = useParams<{ id: string }>()
  const product = productData.find((p) => p.id === id)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  if (!product) {
    return <h2>{isEnglish ? 'Kāore i kitea te hua' : 'Product not found'}</h2>
  }

  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />
      <div className="products-details">
        <div className="product-detail-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1 className="products-names">{product.name}</h1>
          <p className="product-info">{product.info}</p>
          <p className="product-description">
            {isEnglish ? product.description : product.descriptionEn}
          </p>
          <hr className="description-divider" />
          <p className="product-attribute1">
            {isEnglish ? product.attribute1 : product.attribute1En}
          </p>
          <p className="product-attribute1-info">
            {isEnglish ? product.attribute1Info : product.attribute1InfoEn}
          </p>
          <p className="product-attribute2">
            {isEnglish ? product.attribute2 : product.attribute2En}
          </p>
          <p className="product-attribute2-info">
            {isEnglish ? product.attribute2Info : product.attribute2InfoEn}
          </p>
          <div className="product-buttons">
            <button
              className={`products-category-buttons ${
                isAdded ? 'added-to-cart' : ''
              }`}
              onClick={handleAddToCart}
            >
              {isEnglish
                ? isAdded
                  ? 'Kua Tāpiritia'
                  : 'Tāpiri ki te Kete'
                : isAdded
                ? 'Added to Cart'
                : 'Add to Cart'}
            </button>
            <button className="products-category-buttons">
              {isEnglish
                ? `Hoko Ināianei - ${product.price}`
                : `Buy now - ${product.price}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
