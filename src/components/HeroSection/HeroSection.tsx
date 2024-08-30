import React from 'react'
import './HeroSection.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function HeroSection() {
  return (
    <div className="hero-content">
      <div className="icon-container">
        <i
          className="bi bi-mouse"
          style={{ fontSize: '36px', color: 'white' }}
        ></i>
        <p>scroll down</p>
      </div>
    </div>
  )
}

export default HeroSection
