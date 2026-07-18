import Seo from '../components/Seo';

export default function RefundPolicyPage() {
  return (
    <>
      <Seo
        title="Refund and Cancellation Policy | Apploom Technologies"
        description="How Apploom Technologies handles cancellations and refund requests for custom software development, implementation, maintenance, and subscription services."
        path="/refund-policy"
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Refund and Cancellation Policy</h1>
          <p className="lead">Last updated: July 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow prose">
          <p>
            This policy explains how Apploom Technologies handles cancellations and refund requests
            for custom software services. Because our work is tailored to each customer, refunds
            depend on the stage of the engagement and the terms agreed in writing. Where a signed
            proposal, contract, or subscription agreement contains specific cancellation or refund
            conditions, those conditions take precedence over this general policy.
          </p>

          <h2>1. Cancelling before work starts</h2>
          <p>
            You may cancel an engagement before work has started, subject to any conditions in the
            signed agreement. If a deposit was paid and no planning, design, development,
            procurement, or reserved work has begun, we will normally refund it in full.
          </p>

          <h2>2. Deposits once work has begun</h2>
          <p>
            Deposits may become non-refundable — in whole or in part — once project planning,
            design, development, procurement, or reserved work has begun. This reflects the time and
            resources committed to your project from the moment work starts.
          </p>

          <h2>3. Completed milestones</h2>
          <p>
            Payments for completed and delivered milestones are generally non-refundable. A
            milestone is considered complete when the agreed deliverables for that stage have been
            delivered or made available for your review as defined in the proposal.
          </p>

          <h2>4. How refund requests are reviewed</h2>
          <p>
            Every refund request is reviewed individually, based on:
          </p>
          <ul>
            <li>The signed proposal, statement of work, or contract</li>
            <li>The work already delivered or in progress</li>
            <li>The current status of the project and costs already committed</li>
          </ul>
          <p>
            We aim to be fair and reasonable in these reviews, but we cannot promise that every
            refund request will be accepted. Approved refund amounts may be full or partial,
            depending on the circumstances.
          </p>

          <h2>5. Subscription cancellations</h2>
          <p>
            For subscription services — such as maintenance plans, support agreements, or hosted
            subscriptions — cancellations take effect according to the relevant subscription terms,
            typically at the end of the current billing period. Amounts already billed for the
            active period are generally not refunded unless the subscription terms say otherwise.
          </p>

          <h2>6. How approved refunds are paid</h2>
          <p>
            Approved refunds are returned to the original payment method where possible. Processing
            times depend on the payment provider or bank and are outside our control once the refund
            has been issued.
          </p>

          <h2>7. How to request a refund or cancellation</h2>
          <p>
            Send your request to <a href="mailto:info@apploom.ae">info@apploom.ae</a> from the email
            address associated with your engagement, including:
          </p>
          <ul>
            <li>Your name and company</li>
            <li>The project, service, or subscription the request relates to</li>
            <li>The invoice or payment reference, if available</li>
            <li>A short explanation of the reason for the request</li>
          </ul>
          <p>
            We normally respond to refund and cancellation requests within two business days and
            will explain the outcome and any next steps in writing.
          </p>
        </div>
      </section>
    </>
  );
}
