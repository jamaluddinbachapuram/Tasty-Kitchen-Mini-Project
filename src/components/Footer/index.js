import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-assembly">
          <img
            src="https://res.cloudinary.com/dsph2aa5b/image/upload/v1677573671/Group_7420_1_qivw0c.png"
            alt="website-footer-logo"
          />
          <h1 className="footer-company-style">Tasty Kitchens</h1>
        </div>
        <p className="content-footer">
          The only thing we are serious about is food. Contact us on
        </p>
        <div className="social-media-icons">
          <FaPinterestSquare
            testid="pintrest-social-icon"
            color="white"
            size={22}
          />
          <FaInstagram testid="instagram-social-icon" color="white" size={22} />
          <FaTwitter testid="twitter-social-icon" color="white" size={22} />
          <FaFacebookSquare
            testid="facebook-social-icon"
            color="white"
            size={22}
          />
        </div>
      </div>
    </div>
  </>
)
export default Footer
