import React, { useState } from 'react'
import Switch from '../Switch/Switch'
import './Footer.css'

const Footer = () => {
  const [isLanguageSwitchOn, setIsLanguageSwitchOn] = useState(false)

  const handleSwitchChange = () => {
    setIsLanguageSwitchOn((prev) => !prev)
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <ul className="footer-menu">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#locations">Locations</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="footer-menu">
            <li>
              <a href="#account">Account</a>
            </li>
            <li>
              <a href="#cart">Cart</a>
            </li>
            <li>
              <a href="#shipping">Shipping</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="footer-menu">
            <li>
              <a href="#terms-of-use">Terms of Use</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li className="language-switch-container">
              <div className="language-switch">
                <Switch
                  checked={isLanguageSwitchOn}
                  onChange={handleSwitchChange}
                  inverted={true}
                />
                <span className="footer-language">
                  {isLanguageSwitchOn ? 'English' : 'Māori'}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="footer-contact">
            <li>
              <a href="#contacts" className="contact-title">
                CONTACTS
              </a>
            </li>
            <li>
              <a href="#email">info@drip.co.nz</a>
            </li>
            <li>
              <a href="#id">@drip_nz</a>
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <p>drip:</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
