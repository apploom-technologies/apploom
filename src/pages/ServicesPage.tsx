import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Apploom Technologies"
        description="Custom web applications, mobile app development, SaaS platforms, AI-powered solutions, business process automation, cloud systems and integrations, UI/UX design, and technical support."
        path="/services"
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>What we can build for you</h1>
          <p className="lead">
            Apploom Technologies provides end-to-end software development services. Each engagement
            is scoped individually — the descriptions below explain what each service includes, who
            it suits, and how to get started.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail-list">
            {services.map((service) => (
              <Reveal key={service.slug}>
                <article className="service-detail" id={service.slug}>
                  <div className="service-detail-head">
                    <span className="icon-tile">
                      <Icon name={service.icon} size={24} />
                    </span>
                    <h2>{service.title}</h2>
                  </div>
                  <div className="service-detail-body">
                    <div>
                      <h3>What it includes</h3>
                      <ul className="check-list">
                        {service.includes.map((item) => (
                          <li key={item}>
                            <Icon name="check" size={18} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3>Who it is suitable for</h3>
                      <p>{service.suitableFor}</p>
                      <h3>How to engage</h3>
                      <p>{service.engagement}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Not sure which service fits?</h2>
            <p>Describe your situation and we will recommend a practical approach.</p>
          </div>
          <Link to="/contact" className="btn btn-light">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
