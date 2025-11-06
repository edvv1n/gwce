import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    // Correction: Moved citation annotation into a JSX comment
    <footer className={styles.footer}> {/* */}
      <div className={`${styles.footerGrid} container`}>
        {/* Newsletter Signup */}
        <div className={styles.footerColumn}>
          <h3>Stay Connected</h3>
          <p>
            Stay connected with our global community of women leaders. {/* */}
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
            <button type="submit">
              Subscribe {/* */}
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <ul className={styles.quickLinks}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Our Programs</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/news">Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className={styles.footerColumn}>
          <h3>Contact Us</h3>
          <p>
            hello@globalwomenculturalexchange.org {/* */}
            <br />
            1234 Unity Plaza, Suite 567, Denver, CO 80202 {/* */}
          </p>
          
          <h4 className={styles.socialHeader}>Follow Our Journey</h4> {/* */}
          <div className={styles.socialIcons}>
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
            <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
            <a href="#" aria-label="YouTube"><FaYoutube size={24} /></a>
            <a href="#" aria-label="Twitter"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>
      
      {/* Legal Links */}
      <div className={styles.footerLegal}>
        <div className="container">
          <p>
            <Link to="/privacy">Privacy Policy</Link> | 
            <Link to="/terms">Terms of Service</Link> | 
            <Link to="/accessibility">Accessibility</Link> |
            <Link to="/non-discrimination">Non-Discrimination</Link>
          </p>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Global Women Cultural Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}