import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home/Home'

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
    </div>
  )
}

export default App
