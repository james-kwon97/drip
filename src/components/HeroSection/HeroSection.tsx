import React, { useEffect, useState } from 'react'
import './HeroSection.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

interface HeroSectionProps {
  isEnglish: boolean
}

function HeroSection({ isEnglish }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition >= 145) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="hero-content">
      <div className={`icon-container ${isVisible ? '' : 'hidden'}`}>
        <i
          className="bi bi-mouse"
          style={{ fontSize: '36px', color: 'white' }}
        ></i>
        <p>{isEnglish ? 'Pānuku ki raro' : 'Scroll down'}</p>
      </div>
    </div>
  )
}

export default HeroSection
