import React from 'react'
import './Home.css'
import arrowIcon from '../../assets/arrow_icon.png'
import aboutImage from '../../assets/about_image.png'
import productImage from '../../assets/product_image.png'
import processImage from '../../assets/process_image.png'

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
          <div className="product-header">
            <h2 className="product-title">Our Products</h2>
            <div className="product-link-container">
              <a href="#products" className="product-link">
                Shop now
              </a>
              <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
            </div>
          </div>

          <div className="products">
            <div className="product">
              <img
                src={productImage}
                alt="Product 1"
                className="product-image"
              />
              <div className="product-details">
                <span className="product-name">Drip Blend</span>
                <span className="product-price">From $10.00</span>
              </div>
            </div>
            <div className="product">
              <img
                src={productImage}
                alt="Product 2"
                className="product-image"
              />
              <div className="product-details">
                <span className="product-name">Drip Blend</span>
                <span className="product-price">From $15.00</span>
              </div>
            </div>
            <div className="product">
              <img
                src={productImage}
                alt="Product 3"
                className="product-image"
              />
              <div className="product-details">
                <span className="product-name">Drip Blend</span>
                <span className="product-price">From $20.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="process-section">
          <img
            src={processImage}
            alt="Coffee bean image"
            className="process-image"
          />
          <div className="process-content">
            <h2 className="process-title">Our Process</h2>
            <p className="process-info">
              Discover the journey of our coffee beans from the source to your
              cup.
              {/* Each bean is meticulously selected and freshly roasted to
              perfection, ensuring rich, bold flavors and unmatched quality in
              every cup. */}
            </p>
          </div>
        </div>

        <div className="process-details">
          <div className="process-item">
            <h3 className="process-header">Freshness</h3>
            <p className="process-text">
              Savor the vibrant flavors of beans roasted to perfection.
            </p>
          </div>
          <div className="divider"></div>
          <div className="process-item">
            <h3 className="process-header">Quality</h3>
            <p className="process-text">
              Experience the exceptional taste of top-tier coffee beans.
            </p>
          </div>
          <div className="divider"></div>
          <div className="process-item">
            <h3 className="process-header">Precision</h3>
            <p className="process-text">
              Enjoy consistently perfect brews crafted with exacting standards.
            </p>
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
