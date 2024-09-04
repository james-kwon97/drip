import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home/Home'
import Products from './components/Products/Products' // Import the Products component
import Footer from './components/Footer/Footer'

function App() {
  const [isEnglish, setIsEnglish] = useState(false)

  const handleLanguageSwitch = () => {
    setIsEnglish(!isEnglish)
  }

  return (
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
        {/* Add the Products page route */}
        <Route
          path="/products"
          element={
            <Products
              isEnglish={isEnglish}
              onLanguageSwitch={handleLanguageSwitch}
            />
          }
        />
      </Routes>
      <Footer isEnglish={isEnglish} onLanguageSwitch={handleLanguageSwitch} />
    </Router>
  )
}

export default App
