import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
interface Product {
  id: string
  name: string
  info: string
  description: string
  flavourNotes: string
  origin: string
  imageUrl: string
}

const productData: Product[] = [
  {
    id: 'original',
    name: 'Original Blend',
    info: '250g',
    description: 'A smooth, balanced blend of coffee beans.',
    flavourNotes: 'Classic',
    origin: 'Colombia',
    imageUrl: '/images/original-blend.jpg',
  },
  {
    id: 'mocha',
    name: 'Mocha',
    info: '250g',
    description: 'Rich chocolate flavor combined with espresso.',
    flavourNotes: 'Chocolate',
    origin: 'Brazil',
    imageUrl: '/images/mocha.jpg',
  },
  // Add more products as needed
]

const ProductDetails = (): JSX.Element => {
  const { id } = useParams()
  const product = productData.find((p) => p.id === id)

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-weight">Weight: {product.info}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-flavour">Flavour: {product.flavourNotes}</p>
        <p className="product-origin">Origin: {product.origin}</p>
        <div className="product-buttons">
          <button className="btn-add-to-cart">Add to Cart</button>
          <button className="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
