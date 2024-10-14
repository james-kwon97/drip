import Navbar from '../Navbar/Navbar'
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

      <div className="about-page-container">
        <div className="about-image-wrapper">
          <img
            src={aboutImage}
            alt="Coffee and pastry on coffee table"
            className="about-page-image"
          />
        </div>
        <div className="about-page-content">
          <h1>{isEnglish ? 'Mō Mātou' : 'About Us'}</h1>
          <p className="about-text-one">
            {isEnglish
              ? 'I whakatūria i te tau 2024, ko drip: tētahi tohu kawhe rangatira e aro ana ki te tuku i ngā wheako kawhe tino pai rawa atu. Ko tā mātou ngākau nui ki te kounga me te pono e whakaohooho ana i a mātou ki te tuku i ngā ranunga kawhe me ngā hua tino pai rawa, me te tautoko i te hapori kawhe o te ao.'
              : 'Established in 2024, drip: is a premium coffee brand dedicated to delivering exceptional coffee experiences. Our passion for quality and authenticity inspires us to provide the finest coffee blends and products, while supporting the global coffee community.'}
          </p>

          <p className="about-text-two">
            {isEnglish
              ? 'Ko ia kapu e whakaata ana i tā mātou pono ki te kairangi, kia pai ai te wheako reka me te ranu i ngā wā katoa mō ngā tangata aroha kawhe.'
              : 'Every cup reflects our commitment to excellence, ensuring that coffee lovers enjoy a rich, flavorful experience every time.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
