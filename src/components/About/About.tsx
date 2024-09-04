import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './About.css'
import aboutImage from '../../assets/about_page.png'

interface AboutProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

function About({ isEnglish, onLanguageSwitch }: AboutProps) {
  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />

      <div className="about-page">
        <img
          src={aboutImage}
          alt="Coffee and pastry on coffee table"
          className="about-image"
        />
        <div className="about-content">
          <h1>{isEnglish ? 'Mō Mātou' : 'About Us'}</h1>
          <p>
            {isEnglish
              ? 'He kamupene kawhe matou e aro ana ki te kounga me te pono. Ka whakapau kaha matou ki te whakarato i nga hua kawhe pai rawa atu me te tautoko i nga hapori kawhe.'
              : 'We are a coffee company focused on quality and authenticity. We are committed to providing the finest coffee products and supporting coffee communities.'}
          </p>
        </div>
      </div>

      <Footer isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />
    </div>
  )
}

export default About
