import { useCart } from '../Cart/CartContext'
import { useNavigate } from 'react-router-dom'
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import './CartPage.css'

interface CartPageProps {
  isEnglish: boolean
}

export default function CartPage({ isEnglish }: CartPageProps) {
  const navigate = useNavigate()
  const { cart, dispatch } = useCart()
  const shippingCost = 10

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', id })
  }

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      dispatch({ type: 'UPDATE_QUANTITY', id, quantity: newQuantity })
    }
  }

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost
  }

  const handleCheckout = () => {
    navigate('/checkout')
  }

  const handleViewProducts = () => {
    navigate('/products')
  }

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <p>{isEnglish ? 'Kāore he mea i tō kete' : 'Your cart is empty'}</p>
        <button className="view-products-btn" onClick={handleViewProducts}>
          {isEnglish ? 'Tirohia nga hua' : 'View products'}
        </button>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-headers">
        <span className="cart-header cart-header-main">Your cart</span>
        <span className="cart-header cart-header-product">Product</span>
        <span className="cart-header cart-header-quantity">Quantity</span>
        <span className="cart-header cart-header-price">Price</span>
        <span className="cart-header cart-header-remove"></span>
      </div>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.cartImageUrl} alt={item.name} />
            </div>

            <div className="product-details">
              <h2>{item.name}</h2>
              <p>{item.info}</p>
            </div>
            <div className="cart-quantity-wrapper">
              <button
                className="cart-quantity-adjust"
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                aria-label="Decrease quantity"
              >
                <MinusIcon className="cart-quantity-icon" />
              </button>
              <span className="cart-quantity-value">{item.quantity}</span>
              <button
                className="cart-quantity-adjust"
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                aria-label="Increase quantity"
              >
                <PlusIcon className="cart-quantity-icon" />
              </button>
            </div>
            <p className="item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              className="remove-button"
              onClick={() => handleRemoveItem(item.id)}
              aria-label="Remove item"
            >
              <XMarkIcon className="remove-icon" />
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-totals">
          <span>Subtotal ${calculateSubtotal().toFixed(2)}</span>
          <span>Shipping $10</span>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>
          {isEnglish ? 'Pae Utu' : 'Checkout'} — ${calculateTotal().toFixed(2)}
        </button>
      </div>
    </div>
  )
}
