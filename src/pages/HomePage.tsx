import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import HeroArt from '../components/HeroArt';
import ContactForm from '../components/ContactForm';
import { services } from '../data/services';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    text: 'We learn how your organization works, what you want to achieve, and what is getting in the way.',
  },
  {
    number: '02',
    title: 'Planning and Design',
    text: 'We define scope, user flows, and screens, and confirm a written proposal with timeline and cost.',
  },
  {
    number: '03',
    title: 'Development and Testing',
    text: 'We build in agreed milestones, demo progress regularly, and test before anything goes live.',
  },
  {
    number: '04',
    title: 'Launch and Support',
    text: 'We deploy, hand over documentation, and stay available for maintenance and improvements.',
  },
];

const audiences = [
  {
    title: 'Startups',
    text: 'Founders building a first product or MVP who need a technical team to design, build, and launch it properly.',
  },
  {
    title: 'Small and medium businesses',
    text: 'Companies that want to digitize operations, replace manual work and spreadsheets, or offer better digital experiences to their customers.',
  },
  {
    title: 'Organizations with custom requirements',
    text: 'Teams whose workflows are not covered by off-the-shelf software and who need systems designed around their own processes.',
  },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Apploom Technologies | Software Development Company in Dubai, UAE"
        description="Apploom Technologies designs and develops modern web applications, mobile apps, SaaS platforms, AI solutions, and business automation systems for organizations in the UAE and worldwide."
        path="/"
      />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Software Development Company · Dubai, UAE</p>
            <h1>Software Built Around Your Business</h1>
            <p className="lead">
              Apploom Technologies designs and develops modern web applications, mobile apps, SaaS
              platforms, AI solutions, and business automation systems for organizations in the UAE
              and worldwide.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Project
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Practical software services, end to end</h2>
            <p>
              From first idea to long-term maintenance, Apploom covers the full lifecycle of a
              software product. Every engagement starts with a clear scope, a written proposal, and
              agreed milestones.
            </p>
          </Reveal>
          <div className="card-grid">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 60}>
                <Link to={`/services#${service.slug}`} className="service-card">
                  <span className="icon-tile">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <span className="card-link">
                    Learn more <Icon name="arrow-right" size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">How we work</p>
            <h2>A clear process from first call to launch</h2>
            <p>
              You always know what happens next, what it costs, and when it will be ready.
            </p>
          </Reveal>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 70}>
                <div className="step-card">
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Who we work with</p>
            <h2>For teams that need software built around how they operate</h2>
            <p>
              Apploom works with startups, small and medium businesses, and organizations that
              require custom digital systems — in the UAE and internationally.
            </p>
          </Reveal>
          <div className="card-grid card-grid-3">
            {audiences.map((audience, i) => (
              <Reveal key={audience.title} delay={i * 70}>
                <div className="info-card">
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT AND SERVICE INFORMATION */}
      <section className="section section-soft">
        <div className="container">
          <Reveal>
            <div className="payment-info">
              <div className="payment-info-head">
                <p className="eyebrow">Payment and service information</p>
                <h2>What customers pay Apploom Technologies for</h2>
              </div>
              <p className="payment-lead">
                Customers pay Apploom Technologies for agreed software development, implementation,
                consulting, maintenance, or subscription services. Project scope, pricing,
                timelines, and payment schedules are confirmed before work begins.
              </p>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={18} />
                  <span>
                    Every engagement starts with a written proposal or statement of work describing
                    deliverables, timelines, and costs.
                  </span>
                </li>
                <li>
                  <Icon name="check" size={18} />
                  <span>
                    Invoices are issued according to the milestones or billing cycle agreed in the
                    proposal.
                  </span>
                </li>
                <li>
                  <Icon name="check" size={18} />
                  <span>
                    Charges on your card or bank statement may appear as{' '}
                    <strong>APPLOOM&nbsp;TECH</strong>.
                  </span>
                </li>
                <li>
                  <Icon name="check" size={18} />
                  <span>
                    Our <Link to="/refund-policy">Refund and Cancellation Policy</Link> explains how
                    cancellations and refunds are handled.
                  </span>
                </li>
              </ul>
              <p className="payment-note">
                Questions about an invoice or a charge? Email us at{' '}
                <a href="mailto:info@apploom.ae">info@apploom.ae</a>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-split">
            <Reveal className="contact-intro">
              <p className="eyebrow">Contact</p>
              <h2>Tell us about your project</h2>
              <p>
                Share a few details about what you want to build, improve, or automate. We normally
                respond to business enquiries within two business days.
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
                    Within two business days
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
