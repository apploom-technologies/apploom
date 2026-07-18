import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

const principles = [
  {
    title: 'Practical',
    text: 'Software should solve a real operational problem. We build features that are used, not features that only look good in a demo.',
  },
  {
    title: 'Secure',
    text: 'We apply sensible security practices from the start: access control, data protection, and proven, maintained technologies.',
  },
  {
    title: 'Scalable',
    text: 'We design systems that can grow with your organization and be maintained and extended over time — not just launched once.',
  },
];

const engagementItems = [
  'Discovery and requirements analysis',
  'UX and UI design',
  'Development and testing',
  'Deployment and cloud setup',
  'Integration with existing systems',
  'Ongoing maintenance and support',
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | Apploom Technologies"
        description="Apploom Technologies is a software development company based in Dubai, UAE, focused on practical, secure, and scalable software designed around each customer's operational requirements."
        path="/about"
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Apploom</p>
          <h1>A software partner focused on practical outcomes</h1>
          <p className="lead">
            Apploom Technologies is a UAE-based software development company. We design, build, and
            maintain custom software for organizations in the UAE and worldwide.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <Reveal>
            <h2>What Apploom Technologies does</h2>
            <p>
              We help organizations turn operational needs into working software. Our services cover
              custom web applications, mobile apps, SaaS platforms, AI-powered solutions, cloud
              systems, integrations between existing tools, business process automation, UI/UX
              design, and ongoing technical support.
            </p>
            <p>
              Some clients come to us with a detailed specification; others come with a problem and
              no technical background. In both cases, our job is the same: understand the situation,
              propose a realistic approach, and deliver software that does its job reliably.
            </p>
          </Reveal>

          <Reveal>
            <h2>Practical, secure, scalable</h2>
            <p>
              We believe good software is dependable in the ways that matter: it works consistently,
              it protects the data it handles, and it can grow as the organization behind it grows.
              We choose proven technologies, document what we build, and avoid clever solutions that
              become maintenance problems later.
            </p>
          </Reveal>
          <div className="card-grid card-grid-3">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 70}>
                <div className="info-card">
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2>Designed around your operations</h2>
            <p>
              No two organizations run the same way. Before writing code, we take time to understand
              how your team works today — the tools you use, the steps that slow you down, and the
              results you are measured on. The software we deliver is designed around those
              operational requirements, instead of forcing your team to adapt to generic tools.
            </p>
          </Reveal>

          <Reveal>
            <h2>How an engagement can look</h2>
            <p>
              Depending on what you need, our work together may include any combination of the
              following:
            </p>
            <ul className="check-list">
              {engagementItems.map((item) => (
                <li key={item}>
                  <Icon name="check" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Scope, deliverables, timelines, and pricing are always confirmed in writing before
              work begins.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Tell us what you are trying to achieve — we will suggest a practical way forward.</p>
          </div>
          <Link to="/contact" className="btn btn-light">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
