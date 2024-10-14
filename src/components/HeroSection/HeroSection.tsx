import { useEffect, useState } from 'react'
import './HeroSection.css'
import mouseGif from '../../assets/mouse_gif.gif'

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
        <img src={mouseGif} alt="Scroll down" className="mouse-gif" />
        <p>{isEnglish ? 'Pānuku ki raro' : 'Scroll down'}</p>
      </div>
    </div>
  )
}

export default HeroSection
