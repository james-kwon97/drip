import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="hero-section">
        <HeroSection />
      </div>
      <div className="content-section">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
