import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo logo-footer" aria-label="Apploom Technologies — home">
              <span className="logo-mark" aria-hidden="true">
                A
              </span>
              <span className="logo-text">
                Apploom<span className="logo-text-sub">Technologies</span>
              </span>
            </Link>
            <p>
              Apploom Technologies is a software development company based in Dubai, United Arab
              Emirates, building custom web and mobile applications, SaaS platforms, AI-powered
              solutions, and business automation systems.
            </p>
            <ul className="footer-contact">
              <li>
                <Icon name="pin" size={17} />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li>
                <Icon name="mail" size={17} />
                <a href="mailto:info@apploom.ae">info@apploom.ae</a>
              </li>
            </ul>
          </div>

          <nav className="footer-col" aria-label="Company">
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Legal">
            <h2>Legal</h2>
            <ul>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/refund-policy">Refund and Cancellation Policy</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {year} Apploom Technologies LLC. All rights reserved.</p>
          <p>Dubai, United Arab Emirates · info@apploom.ae</p>
        </div>
      </div>
    </footer>
  );
}
