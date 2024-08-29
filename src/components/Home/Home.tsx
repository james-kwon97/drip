import React from 'react'
import './Home.css'
import arrowIcon from '../../assets/arrow_icon.png'
import aboutImage from '../../assets/about_image.png'

function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <div className="about-section">
          <h2 className="about">About</h2>
          <p className="about-info">
            You’ll be greeted by stunning visuals of our freshly brewed
            beverages, delicious pastries, and cozy atmosphere.
          </p>
          <div className="about-link-container">
            <a href="#about-us" className="about-link">
              About Us
            </a>
            <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
          </div>
        </div>
        <img src={aboutImage} alt="Coffee in a cup" className="about-image" />

        <div className="product-section">
          <h2 className="product">Our Products</h2>
          <div className="product-link-container">
            <a href="#products" className="product-link">
              Shop now
            </a>
            <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
          </div>
        </div>
        <div className="location-section">
          <h2>Locations</h2>
          <p>Information about our locations will be provided here.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
