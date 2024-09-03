import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [isEnglish, setIsEnglish] = useState(true)

  const handleLanguageSwitch = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={handleLanguageSwitch} />
      <HeroSection isEnglish={isEnglish} />
      <Home isEnglish={isEnglish} />
      <Footer isEnglish={isEnglish} onLanguageSwitch={handleLanguageSwitch} />
    </div>
  )
}

export default App
