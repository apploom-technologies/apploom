import Seo from '../components/Seo';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Apploom Technologies"
        description="How Apploom Technologies collects, uses, and protects personal information provided through this website and in the course of business enquiries."
        path="/privacy-policy"
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: July 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow prose">
          <p>
            This privacy policy explains how Apploom Technologies (“Apploom”, “we”, “us”) handles
            information that is provided to us through this website (apploom.ae) or in the course
            of business enquiries and service delivery.
          </p>

          <h2>1. Information you provide to us</h2>
          <p>
            We collect information that you voluntarily give us, for example when you contact us by
            email or through a form on this website. This typically includes:
          </p>
          <ul>
            <li>Your name and the company you represent</li>
            <li>Your email address and any other contact details you choose to share</li>
            <li>Details about your project, enquiry, or the services you are interested in</li>
            <li>Any files, documents, or requirements you send us during discussions</li>
          </ul>

          <h2>2. Contact and project enquiry information</h2>
          <p>
            When you send us a project enquiry, we use the information provided to respond to you,
            discuss your requirements, prepare proposals, and — if you become a customer — to plan,
            deliver, and support the agreed services. We may keep correspondence and project-related
            material for as long as the business relationship requires or as needed for our records.
          </p>

          <h2>3. Technical and website usage information</h2>
          <p>
            Like most websites, our hosting platform may automatically record technical information
            when you visit this website, such as your IP address, browser type, device information,
            pages visited, and the time of your visit. This information is used to operate, secure,
            and improve the website. We do not use this technical information to identify individual
            visitors.
          </p>

          <h2>4. How we use information</h2>
          <p>We use the information we hold to:</p>
          <ul>
            <li>Respond to enquiries and communicate with you</li>
            <li>Prepare proposals, quotations, and agreements</li>
            <li>Deliver, maintain, and support the services we provide</li>
            <li>Issue invoices and manage payments</li>
            <li>Keep this website secure and functioning correctly</li>
            <li>Meet legal, accounting, or regulatory obligations where applicable</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>5. Service providers and hosting platforms</h2>
          <p>
            This website is hosted by Netlify, and we use established providers for services such as
            email and business operations. These providers process information on our behalf under
            their own terms and privacy policies, and only to the extent needed to provide their
            services to us.
          </p>

          <h2>6. Data protection and security</h2>
          <p>
            We apply reasonable technical and organizational measures to protect the information we
            hold against unauthorized access, loss, or misuse. Access to customer information is
            limited to the people who need it for the purposes described in this policy. No method
            of transmission or storage is completely secure, so we cannot guarantee absolute
            security, but we take care to handle your information responsibly.
          </p>

          <h2>7. Data retention</h2>
          <p>
            We keep personal information only for as long as it is needed for the purposes described
            in this policy — for example, for the duration of a business relationship, or as
            required for accounting, legal, or legitimate business records. When information is no
            longer needed, we delete or anonymize it.
          </p>

          <h2>8. Cookies</h2>
          <p>
            This website does not set advertising or tracking cookies. Our hosting platform may
            process strictly technical information required to deliver the site to your browser. You
            can control cookies through your browser settings at any time.
          </p>

          <h2>9. Your rights</h2>
          <p>
            You may contact us at any time to request access to the personal information we hold
            about you, to ask us to correct inaccurate information, or to request deletion of your
            information where we are not required to keep it. Send your request to{' '}
            <a href="mailto:info@apploom.ae">info@apploom.ae</a> and we will respond within a
            reasonable time.
          </p>

          <h2>10. International service providers</h2>
          <p>
            Some of the service providers we rely on (for example, website hosting and email
            infrastructure) may process information in countries outside the United Arab Emirates.
            Where this happens, the processing is governed by those providers’ terms and privacy
            commitments.
          </p>

          <h2>11. Changes to this policy</h2>
          <p>
            We may update this policy from time to time to reflect changes in our services or
            practices. The current version is always published on this page with its “Last updated”
            date.
          </p>

          <h2>12. Contact us</h2>
          <p>
            If you have questions about this privacy policy or about how your information is
            handled, contact us at{' '}
            <a href="mailto:info@apploom.ae">info@apploom.ae</a> or write to Apploom Technologies,
            Dubai, United Arab Emirates.
          </p>
        </div>
      </section>
    </>
  );
}
