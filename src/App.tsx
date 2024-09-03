import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
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
        <Route path="/products" element={<Products />} />{' '}
        {/* Add Products route */}
      </Routes>
      <Footer isEnglish={isEnglish} onLanguageSwitch={handleLanguageSwitch} />
    </Router>
  )
}

export default App
