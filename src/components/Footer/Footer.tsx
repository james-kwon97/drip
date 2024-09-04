import React from 'react'
import Switch from '../Switch/Switch'
import './Footer.css'

interface FooterProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

function Footer({ isEnglish, onLanguageSwitch }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <ul className="footer-menu">
            <li>
              <a href="#about-us">{isEnglish ? 'Mō mātou' : 'About Us'}</a>
            </li>
            <li>
              <a href="#shop">{isEnglish ? 'Toa' : 'Shop'}</a>
            </li>
            <li>
              <a href="#locations">{isEnglish ? 'Wāhi' : 'Locations'}</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="footer-menu">
            <li>
              <a href="#account">{isEnglish ? 'Pūkete' : 'Account'}</a>
            </li>
            <li>
              <a href="#cart">{isEnglish ? 'Kāri' : 'Cart'}</a>
            </li>
            <li>
              <a href="#shipping">{isEnglish ? 'Tukunga' : 'Shipping'}</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="footer-menu">
            <li>
              <a href="#terms-of-use">
                {isEnglish ? 'Ngā Tikanga' : 'Terms of Use'}
              </a>
            </li>
            <li>
              <a href="#privacy-policy">
                {isEnglish ? 'Kaupapahere Tūmataiti' : 'Privacy Policy'}
              </a>
            </li>
            <li className="language-switch-container">
              <div className="language-switch">
                <Switch
                  checked={isEnglish}
                  onChange={onLanguageSwitch}
                  inverted={true}
                />
                <span className="footer-language">
                  {isEnglish ? 'English' : 'Māori'}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="footer-contact">
            <li>
              <a href="#contacts" className="contact-title">
                {isEnglish ? 'WHAKAPĀ' : 'CONTACTS'}
              </a>
            </li>
            <li>
              <a href="mailto:info@drip.co.nz" target="_blank">
                info@drip.co.nz
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/drip__nz"
                target="_blank"
                rel="noopener noreferrer"
              >
                @drip_nz
              </a>
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
