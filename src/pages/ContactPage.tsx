import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us | Apploom Technologies"
        description="Contact Apploom Technologies in Dubai, UAE about your software project. Email info@apploom.ae — we normally respond to business enquiries within two business days."
        path="/contact"
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let’s talk about your project</h1>
          <p className="lead">
            Tell us what you want to build, improve, or automate. We normally respond to business
            enquiries within two business days.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-split">
            <Reveal className="contact-intro">
              <h2>How to reach us</h2>
              <p>
                The fastest way to reach us is by email. Include a short description of your
                project or question, and we will reply with next steps.
              </p>
              <ul className="contact-facts">
                <li>
                  <span className="icon-tile icon-tile-sm">
                    <Icon name="mail" size={18} />
                  </span>
                  <span>
                    <strong>Email</strong>
                    <a href="mailto:info@apploom.ae">info@apploom.ae</a>
                  </span>
                </li>
                <li>
                  <span className="icon-tile icon-tile-sm">
                    <Icon name="pin" size={18} />
                  </span>
                  <span>
                    <strong>Location</strong>
                    Dubai, United Arab Emirates
                  </span>
                </li>
                <li>
                  <span className="icon-tile icon-tile-sm">
                    <Icon name="clock" size={18} />
                  </span>
                  <span>
                    <strong>Response time</strong>
                    We normally respond to business enquiries within two business days.
                  </span>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
