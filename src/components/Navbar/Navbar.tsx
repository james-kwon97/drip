import React from 'react'
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import './Navbar.css'
import logoImage from '../../assets/drip_logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
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
      <div className="navbar-middle">
        <img src={logoImage} alt="Drip Logo" className="logo-image" />
      </div>
      <div className="navbar-right">
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
    </nav>
  )
}

export default Navbar
