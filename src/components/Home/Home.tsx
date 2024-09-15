import React from 'react'
import './Home.css'
import arrowIcon from '../../assets/arrow_icon.png'
import aboutImage from '../../assets/about_image.png'
import originalImage from '../../assets/original_product.png'
import hazelnutImage from '../../assets/hazelnut_product.png'
import mugCupImage from '../../assets/mug_cup_product.png'
import processImage from '../../assets/process_image.png'
import locationImage from '../../assets/location_image.png'

interface HomeProps {
  isEnglish: boolean
}

function Home({ isEnglish }: HomeProps) {
  return (
    <div className="home">
      <div className="main-content">
        <div className="about-section">
          <h2 className="about">{isEnglish ? 'Mō' : 'About'}</h2>
          <p className="about-info">
            {isEnglish
              ? 'Ka whakatau mai koe i ngā whakaahua whakamīharo o ā mātou inu hou, ngā pihikete reka, me te wairua mahana.'
              : 'You’ll be greeted by stunning visuals of our freshly brewed beverages, delicious pastries, and cozy atmosphere.'}
          </p>
          <div className="about-link-container">
            <a href="/about" className="about-link">
              {isEnglish ? 'Mō mātou' : 'About Us'}
            </a>
            <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
          </div>
        </div>
        <img src={aboutImage} alt="Coffee in a cup" className="about-image" />

        <div className="product-section">
          <div className="product-header">
            <h2 className="product-title">
              {isEnglish ? 'Ā Mātou Hua' : 'Our Products'}
            </h2>
            <div className="product-link-container">
              <a href="/products" className="product-link">
                {isEnglish ? 'Hoko inaianei' : 'Shop now'}
              </a>
              <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
            </div>
          </div>

          <div className="products">
            <div className="product">
              <a href="/products/original">
                <img
                  src={originalImage}
                  alt="Product 1"
                  className="product-image"
                />
              </a>

              <div className="product-details">
                <span className="product-name">drip: original</span>
                <span className="product-price">$34.99</span>
              </div>
            </div>
            <div className="product">
              <a href="/products/hazelnut">
                <img
                  src={hazelnutImage}
                  alt="Product 2"
                  className="product-image"
                />
              </a>
              <div className="product-details">
                <span className="product-name">drip: hazelnut</span>
                <span className="product-price">$34.99</span>
              </div>
            </div>
            <div className="product">
              <a href="/products/mug-cup">
                <img
                  src={mugCupImage}
                  alt="Product 3"
                  className="product-image"
                />
              </a>
              <div className="product-details">
                <span className="product-name">drip: mug</span>
                <span className="product-price">$24.99</span>
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
            <h2 className="process-title">
              {isEnglish ? 'Tō Mātou Tukanga' : 'Our Process'}
            </h2>
            <p className="process-info">
              {isEnglish
                ? 'Tirohia te haerenga o ā mātou pīni kawhe mai i te takenga mai ki tō kapu.'
                : 'Discover the journey of our coffee beans from the source to your cup.'}
            </p>
          </div>
        </div>

        <div className="process-details">
          <div className="process-item">
            <h3 className="process-header">
              {isEnglish ? 'Hou' : 'Freshness'}
            </h3>
            <p className="process-text">
              {isEnglish
                ? 'Kia reka te kīnaki ngāwari o ngā pīni kua tōtō ki te tino pai.'
                : 'Savor the vibrant flavors of beans roasted to perfection.'}
            </p>
          </div>
          <div className="divider"></div>
          <div className="process-item">
            <h3 className="process-header">
              {isEnglish ? 'Kounga' : 'Quality'}
            </h3>
            <p className="process-text">
              {isEnglish
                ? 'Wheakohia te kīnaki tino pai o ngā pīni kawhe tino taumata.'
                : 'Experience the exceptional taste of top-tier coffee beans.'}
            </p>
          </div>
          <div className="divider"></div>
          <div className="process-item">
            <h3 className="process-header">
              {isEnglish ? 'Tika' : 'Precision'}
            </h3>
            <p className="process-text">
              {isEnglish
                ? 'Kia pai tonu te inu kawhe kua oti te hanga me ngā paerewa tino tiketike.'
                : 'Enjoy consistently perfect brews crafted with exacting standards.'}
            </p>
          </div>
        </div>

        <div className="location-section">
          <img
            src={locationImage}
            alt="Coffee shop interior image"
            className="location-image"
          />
          <div className="location-content">
            <h2>{isEnglish ? 'Wāhi' : 'Locations'}</h2>
            <p>
              {isEnglish
                ? 'Kia pai ai tō inu kawhe ki tētahi o ā mātou wāhi rangatira. He wāhi pai mōu!'
                : 'Enjoy our coffee at one of our premium locations. We have the perfect spot for you!'}
            </p>
            <div className="locations-link-container">
              <a href="/locations" className="locations-link">
                {isEnglish ? 'Kimihia mātou' : 'Find us'}
                <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
