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
      <div className="locations-page">
        <div className="left-section">
          <p>{isEnglish ? 'Ngā Wāhi' : 'Locations'}</p>
          <div className="location-info">
            <h2>{isEnglish ? 'Tāmaki Makaurau' : 'Auckland'}</h2>
            <p>
              {isEnglish
                ? '123 Example Street, Auckland'
                : '123 Example Street, Auckland'}
            </p>
            <p>
              {isEnglish
                ? 'Ngā haora whakatuwhera: 7:00AM - 5:00PM'
                : 'Opening hours: 7:00AM - 5:00PM'}
            </p>

            <h2>{isEnglish ? 'Tāmaki Makaurau' : 'Queenstown'}</h2>
            <p>
              {isEnglish
                ? '456 Another Road, Auckland'
                : '456 Another Road, Auckland'}
            </p>
            <p>
              {isEnglish
                ? 'Ngā haora whakatuwhera: 8:00AM - 4:00PM'
                : 'Opening hours: 8:00AM - 4:00PM'}
            </p>
          </div>
        </div>

        <div className="right-section">
          <img
            src={LocationImage}
            alt="Location One"
            className="location-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Locations
