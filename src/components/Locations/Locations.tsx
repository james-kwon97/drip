import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Locations.css'
import LocationImage from '../../assets/location_image.png'

interface LocationsProps {
  isEnglish: boolean
  onLanguageSwitch: () => void
}

function Locations({ isEnglish, onLanguageSwitch }: LocationsProps) {
  return (
    <div>
      <Navbar isEnglish={isEnglish} onLanguageSwitch={onLanguageSwitch} />
      <div className="locations-page-container">
        <div className="locations-left-section">
          <p className="locations-title">
            {isEnglish ? 'Ngā Wāhi' : 'Locations'}
          </p>
          <div className="locations-info">
            <h2>Auckland</h2>
            <p className="locations-address">8A Commerce St, Auckland 1010</p>
            <p className="locations-hour">
              {isEnglish ? 'Rāhina-Rāmere 7:00-15:00' : 'Mon-Fri 7:00-15:00'}
            </p>
            <p className="locations-hour">
              {isEnglish ? 'Rāhoroi-Rātapu 7:00-14:00' : 'Sat-Sun 7:00-14:00'}
            </p>
            <hr className="locations-divider" />

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
            src={LocationImage}
            alt="Location One"
            className="locations-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Locations
