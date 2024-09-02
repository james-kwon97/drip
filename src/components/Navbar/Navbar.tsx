import React, { useState, useEffect } from 'react'
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import './Navbar.css'
import logoImage from '../../assets/drip_logo.png'
import Switch from '../Switch/Switch'

function Navbar() {
  const [isLanguageSwitchOn, setIsLanguageSwitchOn] = useState(false)
  const [color, setColor] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setColor(scrollPosition >= 145)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSwitchChange = (checked: boolean) => {
    setIsLanguageSwitchOn(checked)
  }

  return (
    <nav className={`navbar ${color ? 'navbar-bg' : ''}`}>
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
        <div className="icons-container">
          <a href="#search" className="navbar-icon">
            <MagnifyingGlassIcon className="icon" />
          </a>
          <a href="#shopping" className="navbar-icon">
            <ShoppingBagIcon className="icon" />
          </a>
          <a href="#user" className="navbar-icon">
            <UserIcon className="icon" />
          </a>
        </div>
        <div className="language-switch">
          <Switch
            checked={isLanguageSwitchOn}
            onChange={handleSwitchChange}
            inverted={color}
          />
          <span className="navbar-language">
            {isLanguageSwitchOn ? 'English' : 'Māori'}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
