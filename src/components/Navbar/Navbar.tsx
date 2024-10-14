import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    if (location.pathname !== '/') {
      setColor(true)
    } else {
      setColor(false)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
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
    } else if (location.pathname === '/about') {
      if (buttonName === 'about') {
        return { color: 'black' }
      } else {
        return { color: '#ADADAD' }
      }
    } else if (location.pathname === '/locations') {
      if (buttonName === 'locations') {
        return { color: 'black' }
      } else {
        return { color: '#ADADAD' }
      }
    }
    return { color: 'black' }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav
        className={`navbar ${color ? 'navbar-bg' : ''} ${
          isMobile ? 'mobile' : ''
        } ${isMenuOpen ? 'menu-open' : ''}`}
      >
        <div className="navbar-left">
          {isMobile && (
            <button onClick={toggleMenu} className="menu-toggle">
              {isMenuOpen ? (
                <XMarkIcon className="icon icons" />
              ) : (
                <Bars3Icon className="icon menu-icons" />
              )}
            </button>
          )}
          {isMobile && !isMenuOpen && (
            <a href="#search" className="navbar-icon">
              <MagnifyingGlassIcon className="icon" />
            </a>
          )}
          {!isMobile && (
            <>
              <a
                href="/about"
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
                href="/locations"
                className="navbar-button"
                style={getButtonStyle('locations')}
              >
                {isEnglish ? 'Wāhi' : 'Locations'}
              </a>
            </>
          )}
        </div>
        <div className="navbar-middle">
          <a href="/">
            <img
              src={color ? scrolledLogoImage : logoImage}
              alt="Drip Logo"
              className="logo-image"
            />
          </a>
        </div>
        <div className="navbar-right">
          {isMobile ? (
            !isMenuOpen && (
              <div className="icons-container">
                <a href="/cart" className="navbar-icon">
                  <ShoppingCartIcon className="icon right-icons" />
                </a>
                <a href="#user" className="navbar-icon">
                  <UserIcon className="icon right-icons" />
                </a>
              </div>
            )
          ) : (
            <>
              <div className="icons-container">
                <a href="#search" className="navbar-icon">
                  <MagnifyingGlassIcon className="icon" />
                </a>
                <a href="/cart" className="navbar-icon">
                  <ShoppingCartIcon className="icon" />
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
            </>
          )}
        </div>
      </nav>
      {isMobile && (
        <div className={`menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
          <div className="menu-items">
            <a href="/about" className="menu-item">
              {isEnglish ? 'MŌ MĀTOU' : 'ABOUT US'}
            </a>
            <a href="/products" className="menu-item">
              {isEnglish ? 'TOA' : 'SHOP'}
            </a>
            <a href="/locations" className="menu-item">
              {isEnglish ? 'WĀHI' : 'LOCATIONS'}
            </a>
            <div className="menu-language-switch">
              <Switch
                checked={isEnglish}
                onChange={onLanguageSwitch}
                inverted={true}
              />
              <span className="menu-language">
                {isEnglish ? 'ENGLISH' : 'MĀORI'}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
