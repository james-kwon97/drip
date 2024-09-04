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
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (location.pathname === '/') {
        setColor(scrollPosition >= 145)
      } else {
        setColor(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    if (location.pathname !== '/') {
      setColor(true)
    } else {
      setColor(false)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location])

  const getButtonStyle = (buttonName: 'about' | 'shop' | 'locations') => {
    if (location.pathname === '/') {
      return color ? { color: 'black' } : {}
    } else if (location.pathname === '/products') {
      if (buttonName === 'shop') {
        return { color: 'black' }
      } else {
        return { color: '#ADADAD' }
      }
    }
    return { color: 'black' }
  }

  return (
    <nav className={`navbar ${color ? 'navbar-bg' : ''}`}>
      <div className="navbar-left">
        <a
          href="about"
          className="navbar-button"
          style={getButtonStyle('about')}
        >
          {isEnglish ? 'Mō mātou' : 'About Us'}
        </a>
        <a
          href="/products"
          className="navbar-button"
          style={getButtonStyle('shop')}
        >
          {isEnglish ? 'Toa' : 'Shop'}
        </a>
        <a
          href="locations"
          className="navbar-button"
          style={getButtonStyle('locations')}
        >
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
