import Seo from '../components/Seo';

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Service | Apploom Technologies"
        description="The terms that govern the use of the Apploom Technologies website and the provision of software development, consulting, maintenance, and subscription services."
        path="/terms"
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: July 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow prose">
          <p>
            These Terms of Service govern the use of the Apploom Technologies website
            (apploom.ae) and apply to business enquiries and to the software services provided by
            Apploom Technologies (“Apploom”, “we”, “us”). By using this website or engaging us for
            services, you accept these terms.
          </p>
          <p>
            Individual proposals, statements of work, contracts, or subscription terms may contain
            additional conditions. If there is a conflict between these terms and a signed
            agreement, the signed agreement prevails for that engagement.
          </p>

          <h2>1. Use of this website</h2>
          <p>
            The content of this website is provided for general information about Apploom
            Technologies and its services. You may use this website for lawful purposes only. You
            must not misuse the website, attempt to disrupt its operation, or access it in ways
            other than through the published pages.
          </p>

          <h2>2. Business enquiries</h2>
          <p>
            Sending an enquiry through this website or by email does not create a contract for
            services. A customer relationship is formed only when a proposal, statement of work,
            contract, or subscription has been agreed and confirmed by both parties.
          </p>

          <h2>3. Software development services</h2>
          <p>
            Apploom provides custom software development, implementation, consulting, design,
            integration, maintenance, support, and subscription services. The specific scope,
            deliverables, timelines, and responsibilities for each engagement are defined in the
            relevant proposal or agreement.
          </p>

          <h2>4. Proposals and project agreements</h2>
          <p>
            Before work begins, we confirm the project scope, pricing, timeline, and payment
            schedule in writing. Proposals are valid for the period stated in them. Once accepted,
            the proposal or agreement — together with these terms — governs the engagement.
          </p>

          <h2>5. Customer responsibilities</h2>
          <p>To deliver successfully, we rely on customers to:</p>
          <ul>
            <li>Provide accurate and timely information, materials, and requirements</li>
            <li>Make decisions and provide feedback within reasonable timeframes</li>
            <li>Provide access to systems, accounts, or personnel where agreed</li>
            <li>Ensure that content and materials they supply do not infringe third-party rights</li>
            <li>Review and accept deliverables as defined in the agreement</li>
          </ul>
          <p>
            Delays in providing information, access, or feedback may affect agreed timelines and,
            where significant, may require adjustments to scope or cost.
          </p>

          <h2>6. Payment terms</h2>
          <p>
            Prices, payment schedules, and accepted payment methods are stated in each proposal or
            agreement. Invoices are payable within the period stated on them. Deposits or upfront
            payments may be required before work begins. Where payments are late, we may pause work
            until the outstanding amount is settled. Charges on your card or bank statement may
            appear as APPLOOM TECH.
          </p>

          <h2>7. Intellectual property</h2>
          <p>
            Unless an agreement states otherwise, ownership of the deliverables created for a
            customer transfers to that customer upon full payment. Apploom retains ownership of its
            pre-existing tools, libraries, know-how, and reusable components, and grants the
            customer the rights needed to use them as part of the delivered work. Open-source
            components remain subject to their own licenses.
          </p>

          <h2>8. Third-party services</h2>
          <p>
            Delivered solutions may rely on third-party platforms and services — for example cloud
            hosting, payment providers, APIs, or app stores. These are governed by their own terms,
            and we are not responsible for changes, outages, pricing changes, or discontinuation by
            third-party providers. Where third-party accounts are needed, they are normally held in
            the customer’s name unless agreed otherwise.
          </p>

          <h2>9. Confidentiality</h2>
          <p>
            Both parties agree to treat non-public information received from the other party in
            connection with an enquiry or engagement as confidential, to use it only for the purpose
            of that engagement, and to protect it with reasonable care. This obligation does not
            apply to information that is public, already known, independently developed, or required
            to be disclosed by law.
          </p>

          <h2>10. Project changes</h2>
          <p>
            Requirements often evolve during a project. Changes to agreed scope, deliverables, or
            timelines are handled as change requests: we assess their impact, confirm any adjustment
            to cost and schedule in writing, and proceed once approved by the customer.
          </p>

          <h2>11. Warranties and limitations</h2>
          <p>
            We provide our services with reasonable skill and care, and we will correct defects in
            delivered work that are reported within the warranty period defined in the relevant
            agreement. Beyond this, and to the extent permitted by law, services and deliverables
            are provided without additional warranties, express or implied. We are not liable for
            indirect or consequential losses — such as lost profits, lost revenue, or lost data —
            arising from the use of our services, and our total liability in connection with an
            engagement is limited to the amount paid to us for that engagement, except where the law
            does not allow such limitation.
          </p>

          <h2>12. Suspension or termination</h2>
          <p>
            Either party may suspend or terminate an engagement in the circumstances defined in the
            relevant agreement — for example, a material breach that is not remedied, or continued
            non-payment. On termination, the customer pays for work completed up to the termination
            date, and each party returns or deletes the other’s confidential material where
            requested. Our <a href="/refund-policy">Refund and Cancellation Policy</a> explains how
            cancellations and refunds are handled in practice.
          </p>

          <h2>13. Governing law</h2>
          <p>
            These terms and any dispute arising from them or from our services are governed by the
            laws of the United Arab Emirates, without prejudice to any mandatory consumer protection
            rights that may apply to you.
          </p>

          <h2>14. Contact information</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href="mailto:info@apploom.ae">info@apploom.ae</a>. Apploom Technologies is based in
            Dubai, United Arab Emirates.
          </p>
        </div>
      </section>
    </>
  );
}
