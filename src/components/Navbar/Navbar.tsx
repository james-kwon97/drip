import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import './Navbar.css'
import logoImage from '../../assets/drip_logo.png'
import scrolledLogoImage from '../../assets/black_drip_logo.png'
import Switch from '../Switch/Switch'

interface NavbarProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

function Navbar({ isEnglish, onLanguageSwitch }: NavbarProps) {
  const [color, setColor] = useState(false)
  const location = useLocation() // Detect current route

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Scroll-sensitive behavior only on the home page
      if (location.pathname === '/') {
        setColor(scrollPosition >= 145)
      } else {
        // Apply scrolled styles on all other pages
        setColor(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // For non-home pages, set scrolled style immediately
    if (location.pathname !== '/') {
      setColor(true)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location])

  return (
    <nav className={`navbar ${color ? 'navbar-bg' : ''}`}>
      <div className="navbar-left">
        <a href="about" className="navbar-button">
          {isEnglish ? 'Mō mātou' : 'About Us'}
        </a>
        <a href="/products" className="navbar-button">
          {isEnglish ? 'Toa' : 'Shop'}
        </a>
        <a href="locations" className="navbar-button">
          {isEnglish ? 'Wāhi' : 'Locations'}
        </a>
      </div>
      <div className="navbar-middle">
        <img
          src={color ? scrolledLogoImage : logoImage}
          alt="Drip Logo"
          className="logo-image"
        />
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
            checked={isEnglish}
            onChange={onLanguageSwitch}
            inverted={color}
          />
          <span className="navbar-language">
            {isEnglish ? 'English' : 'Māori'}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
