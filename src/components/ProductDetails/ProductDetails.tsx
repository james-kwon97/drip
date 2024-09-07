import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './ProductDetails.css'

interface ProductsProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

interface Product {
  id: string
  name: string
  info: string
  description: string
  attribute1: string
  attribute1Info: string
  attribute2: string
  attribute2Info: string
  imageUrl: string
  price: string
}

const productData: Product[] = [
  {
    id: 'original',
    name: 'drip: original',
    info: '500g / Whole beans',
    description:
      'A classic, smooth, and balanced coffee with a rich, full-bodied flavor. This is the perfect go-to option for those who enjoy a traditional coffee experience.',
    attribute1: 'Flavour Notes',
    attribute1Info: 'Cacao / Toasted Almond',
    attribute2: 'Origin',
    attribute2Info: 'Colombia',
    imageUrl: '../../assets/original_product.png',
    price: '$34.99',
  },
  {
    id: 'hazelnut',
    name: 'drip: hazelnut',
    info: '500g / Whole beans',
    description:
      'Nutty and slightly sweet, with a subtle richness from hazelnut that pairs beautifully with milk or cream, making it perfect for a flavorful twist.',
    attribute1: 'Flavour Notes',
    attribute1Info: 'Roasted Hazelnut / Brown Sugar',
    attribute2: 'Origin',
    attribute2Info: 'Brazil / Costa Rica',
    imageUrl: '../../assets/original_product.png',
    price: '$34.99',
  },
  {
    id: 'chocolate',
    name: 'drip: chocolate',
    info: '500g / Whole beans',
    description:
      "Rich dark chocolate notes with a creamy hint of vanilla, delivering an indulgent and smooth flavor that's ideal for chocolate lovers.",
    attribute1: 'Flavour Notes',
    attribute1Info: 'Dark Chocolate / Vanilla',
    attribute2: 'Origin',
    attribute2Info: 'Guatemala / Ecuador',
    imageUrl: '../../assets/original_product.png',
    price: '$34.99',
  },
  {
    id: 'original-decaf',
    name: 'drip: original decaf',
    info: '500g / Whole beans',
    description:
      'Experience the same rich, full-bodied flavor of our original blend without caffeine. Perfect for those who want a smooth, satisfying coffee, day or night.',
    attribute1: 'Flavour Notes',
    attribute1Info: 'Cacao / Toasted Almond',
    attribute2: 'Origin',
    attribute2Info: 'Colombia',
    imageUrl: '../../assets/original_product.png',
    price: '$34.99',
  },
  {
    id: 'mug-cup',
    name: 'drip: mug',
    info: '350ml',
    description: 'Durable and stylish ceramic mug for your favorite brew.',
    attribute1: 'Material',
    attribute1Info: 'Ceramic',
    attribute2: 'Color',
    attribute2Info: 'drip: white',
    imageUrl: '../../assets/original_product.png',
    price: '$24.99',
  },
  {
    id: 'disposable-cups',
    name: 'drip: disposable cups',
    info: 'Pack of 50',
    description: 'Convenient disposable cups for coffee on the go.',
    attribute1: 'Material',
    attribute1Info: 'Paper',
    attribute2: 'Color',
    attribute2Info: 'drip: white',
    imageUrl: '../../assets/original_product.png',
    price: '$29.99',
  },
]

function ProductDetails({ isEnglish, onLanguageSwitch }: ProductsProps) {
  const { id } = useParams<{ id: string }>()
  const product = productData.find((p) => p.id === id)

  if (!product) {
    return <h2>{isEnglish ? 'Product not found' : 'Kāore i kitea te hua'}</h2>
  }

  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />

      <div className="product-details">
        <div className="product-image">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="products-image"
          />
        </div>
        <div className="product-info">
          <h1 className="products-name">{product.name}</h1>
          <p className="product-weight">{product.info}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-attribute">
            {product.attribute1}: {product.attribute1Info}
          </p>
          <p className="product-attribute">
            {product.attribute2}: {product.attribute2Info}
          </p>
          <div className="product-buttons">
            <button className="products-category-button">
              {isEnglish ? 'Tāpiri ki te Kete' : 'Add to cart'}
            </button>
            <button className="products-category-button">
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
