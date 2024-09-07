import React from 'react'
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

  if (!product) {
    return <h2>{isEnglish ? 'Kāore i kitea te hua' : 'Product not found'}</h2>
  }

  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />
      <div className="product-details">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1 className="products-name">{product.name}</h1>
          <p className="product-info">
            {isEnglish ? product.info : product.infoEn}
          </p>
          <p className="product-description">
            {isEnglish ? product.description : product.descriptionEn}
          </p>
          <p className="product-attribute">
            {isEnglish ? product.attribute1 : product.attribute1En}:{' '}
            {isEnglish ? product.attribute1Info : product.attribute1InfoEn}
          </p>
          <p className="product-attribute">
            {isEnglish ? product.attribute2 : product.attribute2En}:{' '}
            {isEnglish ? product.attribute2Info : product.attribute2InfoEn}
          </p>
          <div className="product-buttons">
            {isEnglish ? (
              <>
                <button className="products-category-button">
                  Tāpiri ki te Kete
                </button>
                <button className="products-category-button">
                  Hoko Ināianei - {product.price}
                </button>
              </>
            ) : (
              <>
                <button className="products-category-button">
                  Add to cart
                </button>
                <button className="products-category-button">
                  Buy now - {product.price}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
