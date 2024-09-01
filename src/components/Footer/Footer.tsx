import React from 'react'
import './Footer.css'

const Footer = () => {
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
            <li>
              <a href="#switch-maori">Switch + Maori</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="footer-menu">
            <li>
              <a href="#contacts">Contacts</a>
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
