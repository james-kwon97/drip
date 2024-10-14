import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import Navbar from '../Navbar/Navbar'
import './ProductDetails.css'
import { productData } from './productData'
import { useCart } from '../Cart/CartContext'

interface ProductsProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

function ProductDetails({ isEnglish, onLanguageSwitch }: ProductsProps) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = productData.find((p) => p.id === id)
  const [isAdded, setIsAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()

  useEffect(() => {
    console.log('ProductDetails component mounted')
    return () => {
      console.log('ProductDetails component unmounted')
    }
  }, [])

  const handleAddToCart = () => {
    console.log('Add to Cart button clicked')

    if (product && product.id) {
      try {
        dispatch({
          type: 'ADD_TO_CART',
          item: {
            id: product.id,
            name: product.name,
            info: product.info,
            price: parseFloat(product.price.replace('$', '')),
            quantity: quantity,
            imageUrl: product.imageUrl,
            cartImageUrl: product.cartImageUrl,
          },
        })
        console.log('Dispatched ADD_TO_CART action')
        setIsAdded(true)
        setTimeout(() => {
          setIsAdded(false)
        }, 1500)
      } catch (error) {
        console.error('Error dispatching ADD_TO_CART action:', error)
      }
    } else {
      console.error('Product or Product ID not found')
    }
  }

  const handleBuyNow = () => {
    console.log('Buy Now button clicked')
    handleAddToCart()
    navigate('/cart')
  }

  const incrementQuantity = () => {
    console.log('Incrementing quantity')
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    console.log('Decrementing quantity')
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  if (!product) {
    console.log('Product not found')
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
            <div className="quantity-and-add-container">
              <div className="quantity-container">
                <button className="quantity-btn" onClick={decrementQuantity}>
                  <MinusIcon className="quantity-icon" />
                </button>
                <span className="quantity-display">{quantity}</span>
                <button className="quantity-btn" onClick={incrementQuantity}>
                  <PlusIcon className="quantity-icon" />
                </button>
              </div>
              <button
                className={`products-category-buttons add-to-cart ${
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
            </div>
            <button
              className="products-category-buttons buy-now"
              onClick={handleBuyNow}
            >
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
