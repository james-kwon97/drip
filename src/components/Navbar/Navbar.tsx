import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>drip:</h1>
      </div>
      <div className="navbar-links">
        <a href="#about-us">About Us</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
