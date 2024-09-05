import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Locations.css'
import LocationImageAuckland from '../../assets/location_image.png'
import LocationImageQueenstown from '../../assets/location_image2.jpg'

interface LocationsProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

function Locations({ isEnglish, onLanguageSwitch }: LocationsProps) {
  const [activeLocation, setActiveLocation] = useState<string>('auckland')
  const [currentImage, setCurrentImage] = useState<string>(
    LocationImageAuckland
  )
  const [isFading, setIsFading] = useState(false)

  const handleLocationClick = (location: string) => {
    if (location !== activeLocation) {
      setIsFading(true)
      setTimeout(() => {
        setActiveLocation(location)
        setCurrentImage(
          location === 'auckland'
            ? LocationImageAuckland
            : LocationImageQueenstown
        )
        setIsFading(false)
      }, 200)
    }
  }

  useEffect(() => {
    if (!activeLocation) {
      setActiveLocation('auckland')
    }
  }, [activeLocation])

  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />
      <div className="locations-page-container">
        <div className="locations-left-section">
          <p className="locations-title">
            {isEnglish ? 'Ngā Wāhi' : 'Locations'}
          </p>

          <div
            className={`location-item ${
              activeLocation === 'auckland' ? 'active' : ''
            }`}
            onClick={() => handleLocationClick('auckland')}
          >
            <h2>Auckland</h2>
            <p className="locations-address">8A Commerce St, Auckland 1010</p>
            <p className="locations-hour">
              {isEnglish ? 'Rāhina-Rāmere 7:00-15:00' : 'Mon-Fri 7:00-15:00'}
            </p>
            <p className="locations-hour">
              {isEnglish ? 'Rāhoroi-Rātapu 7:00-14:00' : 'Sat-Sun 7:00-14:00'}
            </p>
            <hr className="locations-divider" />
          </div>

          <div
            className={`location-item ${
              activeLocation === 'queenstown' ? 'active' : ''
            }`}
            onClick={() => handleLocationClick('queenstown')}
          >
            <h2>Queenstown</h2>
            <p className="locations-address">8D Beach St, Queenstown 9300</p>
            <p className="locations-hour">
              {isEnglish ? 'Rāhina-Rāmere 7:00-15:00' : 'Mon-Fri 7:00-15:00'}
            </p>
            <p className="locations-hour">
              {isEnglish ? 'Rāhoroi-Rātapu 7:00-14:00' : 'Sat-Sun 7:00-14:00'}
            </p>
          </div>
        </div>

        <div className="locations-right-section">
          <img
            src={currentImage}
            alt={
              activeLocation === 'auckland'
                ? 'Auckland Location'
                : 'Queenstown Location'
            }
            className={`locations-image ${isFading ? 'fade' : ''}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Locations
