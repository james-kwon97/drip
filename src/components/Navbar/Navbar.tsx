import React from 'react'
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#search" className="navbar-icon">
          <MagnifyingGlassIcon className="icon" />
        </a>
        <a href="#shopping" className="navbar-icon">
          <ShoppingBagIcon className="icon" />
        </a>
        <a href="#user" className="navbar-icon">
          <UserIcon className="icon" />
        </a>
        {/* Switch and Maori text */}
      </div>
      <div className="navbar-logo">
        <h1>drip:</h1>
      </div>
      <div className="navbar-right">
        <a href="#about-us" className="navbar-button">
          About Us
        </a>
        <a href="#shop" className="navbar-button">
          Shop
        </a>
        <a href="#locations" className="navbar-button">
          Locations
        </a>
      </div>
    </nav>
  )
}

export default Navbar
