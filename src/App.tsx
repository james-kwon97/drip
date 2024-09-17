import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CartProvider } from './components/Cart/CartProvider'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Locations from './components/Locations/Locations'
import CartPage from './components/Cart/CartPage'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'

function App() {
  const [isEnglish, setIsEnglish] = useState(false)

  const handleLanguageSwitch = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <CartProvider>
      <Router>
        <Navbar isEnglish={isEnglish} onLanguageSwitch={handleLanguageSwitch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection isEnglish={isEnglish} />
                <Home isEnglish={isEnglish} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <About
                isEnglish={isEnglish}
                onLanguageSwitch={handleLanguageSwitch}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                isEnglish={isEnglish}
                onLanguageSwitch={handleLanguageSwitch}
              />
            }
          />
          <Route
            path="/locations"
            element={
              <Locations
                isEnglish={isEnglish}
                onLanguageSwitch={handleLanguageSwitch}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                isEnglish={isEnglish}
                onLanguageSwitch={handleLanguageSwitch}
              />
            }
          />
          <Route path="/cart" element={<CartPage isEnglish={isEnglish} />} />
          <Route
            path="/checkout"
            element={<Checkout isEnglish={isEnglish} />}
          />
        </Routes>
        <Footer isEnglish={isEnglish} onLanguageSwitch={handleLanguageSwitch} />
      </Router>
    </CartProvider>
  )
}

export default App
