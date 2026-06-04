import React, { useState } from 'react'

const LAST_UPDATED = 'June 1, 2026'

const TOC = [
  { id: 'acceptance',     label: '1. Acceptance of Terms' },
  { id: 'definitions',    label: '2. Definitions' },
  { id: 'eligibility',    label: '3. Eligibility' },
  { id: 'account',        label: '4. Account Registration' },
  { id: 'purchases',      label: '5. Orders & Purchases' },
  { id: 'pricing',        label: '6. Pricing & Payment' },
  { id: 'shipping',       label: '7. Shipping & Delivery' },
  { id: 'returns',        label: '8. Returns & Refunds' },
  { id: 'prohibited',     label: '9. Prohibited Conduct' },
  { id: 'ip',             label: '10. Intellectual Property' },
  { id: 'vendors',        label: '11. Vendor Marketplace' },
  { id: 'disclaimer',     label: '12. Disclaimers' },
  { id: 'liability',      label: '13. Limitation of Liability' },
  { id: 'indemnification',label: '14. Indemnification' },
  { id: 'governing',      label: '15. Governing Law' },
  { id: 'changes',        label: '16. Changes to Terms' },
  { id: 'contact',        label: '17. Contact Us' },
]

const DEFINITIONS = [
  { term: 'Platform', meaning: 'The VDesiConnect website (vdesiconnect.com), mobile applications, and all associated services.' },
  { term: 'User / You', meaning: 'Any individual who accesses or uses the Platform, whether as a registered member or a guest.' },
  { term: 'Buyer', meaning: 'A User who places an order for products or services listed on the Platform.' },
  { term: 'Vendor / Seller', meaning: 'An individual or business registered on the Platform to list and sell products or services.' },
  { term: 'VDesiConnect / We / Us', meaning: 'VDesiConnect Private Limited, a company incorporated in India, operating the Platform.' },
  { term: 'Content', meaning: 'All text, images, videos, product descriptions, reviews, and other material appearing on the Platform.' },
  { term: 'Order', meaning: 'A confirmed purchase request placed by a Buyer through the Platform.' },
]

const PROHIBITED = [
  'Creating a false identity or impersonating any person or entity.',
  'Posting fraudulent, misleading, or inaccurate product listings or reviews.',
  'Using the Platform to transmit spam, phishing messages, or unsolicited communications.',
  'Attempting to gain unauthorised access to any part of the Platform or its infrastructure.',
  'Scraping, crawling, or harvesting data from the Platform without prior written consent.',
  'Infringing the intellectual property rights of VDesiConnect, vendors, or other users.',
  'Engaging in price manipulation, bid rigging, or any anti-competitive behaviour.',
  'Using the Platform for any illegal activity, including money laundering or fraud.',
  'Reverse engineering, decompiling, or disassembling any part of the Platform.',
  'Uploading or transmitting any virus, malware, or other harmful code.',
]

// ── Section wrapper ───────────────────────────────────────────────────────────
const Section = ({ id, title, children }) => (
  <section className="tc-section" id={id}>
    <h2 className="tc-section__title">{title}</h2>
    <div className="tc-section__body">{children}</div>
  </section>
)

// ── Page ──────────────────────────────────────────────────────────────────────
const Terms = () => {
  const [activeId, setActiveId] = useState(null)

  return (
    <div className="tc-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="tc-hero">
        <div className="tc-hero__overlay" />
        <div className="container-custom tc-hero__inner">
          <span className="tc-hero__eyebrow">📄 Terms & Conditions</span>
          <h1 className="tc-hero__title">Our Agreement with You</h1>
          <p className="tc-hero__sub">
            These terms govern your use of VDesiConnect. Please read them carefully —
            they protect both you and us, and set out what you can expect from our platform.
          </p>
          <p className="tc-hero__updated">Last updated: <strong>{LAST_UPDATED}</strong></p>
        </div>
      </section>

      <div className="container-custom tc-layout">

        {/* ── Sidebar TOC ────────────────────────────────────────────────── */}
        <aside className="tc-toc">
          <p className="tc-toc__heading">Contents</p>
          <nav>
            {TOC.map(t => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`tc-toc__link${activeId === t.id ? ' tc-toc__link--active' : ''}`}
                onClick={() => setActiveId(t.id)}
              >
                {t.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* ── Main content ───────────────────────────────────────────────── */}
        <main className="tc-main">

          {/* Intro banner */}
          <div className="tc-intro-box">
            <p>
              Welcome to <strong>VDesiConnect</strong>. By accessing or using our platform, you confirm that
              you have read, understood, and agree to be bound by these Terms & Conditions and our
              <a href="/privacy-policy"> Privacy Policy</a>. If you do not agree, please do not use the Platform.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and VDesiConnect Private
              Limited. They apply to all visitors, registered users, buyers, and vendors.
            </p>
          </div>

          {/* 1 */}
          <Section id="acceptance" title="1. Acceptance of Terms">
            <p className="tc-body">
              By creating an account, browsing the Platform, or completing a purchase, you expressly
              accept these Terms & Conditions in full. If you are using the Platform on behalf of a
              company or other legal entity, you represent that you have the authority to bind that
              entity to these Terms, and "you" refers to both you individually and the entity.
            </p>
            <p className="tc-body">
              VDesiConnect reserves the right to modify these Terms at any time. Continued use of the
              Platform after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          {/* 2 */}
          <Section id="definitions" title="2. Definitions">
            <p className="tc-body">The following terms carry specific meanings throughout this document:</p>
            <div className="tc-def-list">
              {DEFINITIONS.map(d => (
                <div key={d.term} className="tc-def-item">
                  <span className="tc-def-item__term">{d.term}</span>
                  <span className="tc-def-item__meaning">{d.meaning}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* 3 */}
          <Section id="eligibility" title="3. Eligibility">
            <p className="tc-body">To use VDesiConnect you must:</p>
            <ul className="tc-list">
              <li>Be at least <strong>18 years of age</strong>, or the age of majority in your jurisdiction, whichever is higher.</li>
              <li>Have the legal capacity to enter into a binding contract.</li>
              <li>Not be prohibited from using the Platform under any applicable law or regulation.</li>
              <li>Provide accurate, complete, and current registration information.</li>
            </ul>
            <p className="tc-body">
              VDesiConnect reserves the right to refuse service, terminate accounts, or cancel orders
              at its sole discretion if eligibility requirements are not met or if any violation of
              these Terms is detected.
            </p>
          </Section>

          {/* 4 */}
          <Section id="account" title="4. Account Registration">
            <p className="tc-body">
              To access full Platform features — including placing orders, writing reviews, and managing
              a wishlist — you must register for an account. You agree to:
            </p>
            <ul className="tc-list">
              <li>Provide truthful, accurate, and complete information during registration.</li>
              <li>Keep your account credentials confidential and not share them with any third party.</li>
              <li>Notify us immediately at <strong>support@vdesiconnect.com</strong> if you suspect unauthorised access to your account.</li>
              <li>Accept full responsibility for all activities conducted under your account.</li>
            </ul>
            <div className="tc-callout tc-callout--warning">
              <span>⚠️</span>
              <p>VDesiConnect will never ask for your password via email or phone. Any such request is fraudulent — please report it immediately.</p>
            </div>
          </Section>

          {/* 5 */}
          <Section id="purchases" title="5. Orders & Purchases">
            <p className="tc-body">
              When you place an order on VDesiConnect, you are making an offer to purchase the
              selected product(s) at the stated price. An order is confirmed only when you receive
              an Order Confirmation email from us. We reserve the right to cancel any order before
              dispatch if:
            </p>
            <ul className="tc-list">
              <li>The product becomes unavailable or is discontinued by the vendor.</li>
              <li>A pricing or listing error is identified.</li>
              <li>Payment is declined or cannot be verified.</li>
              <li>Suspected fraudulent activity is detected.</li>
            </ul>
            <p className="tc-body">
              In the event of cancellation, you will be notified promptly and a full refund will be
              issued to the original payment method within 5–7 business days.
            </p>
          </Section>

          {/* 6 */}
          <Section id="pricing" title="6. Pricing & Payment">
            <p className="tc-body">
              All prices displayed on the Platform are in Indian Rupees (INR) unless otherwise stated.
              International customers may see estimated prices in their local currency for reference;
              the final charge is always in INR and converted by your bank or payment provider.
            </p>
            <ul className="tc-list">
              <li>Prices include applicable GST unless explicitly stated otherwise.</li>
              <li>Shipping charges, if any, are shown separately at checkout before payment is confirmed.</li>
              <li>VDesiConnect reserves the right to change prices at any time without prior notice. Price changes do not affect confirmed orders.</li>
              <li>Promotional discounts and coupon codes are subject to their own terms and expiry dates and cannot be combined unless explicitly stated.</li>
            </ul>
            <p className="tc-body">
              We accept payment via credit/debit cards, net banking, UPI, wallets, and Cash on Delivery
              (for eligible domestic orders). All online payments are processed through PCI-DSS
              compliant payment gateways. VDesiConnect does not store full card details.
            </p>
          </Section>

          {/* 7 */}
          <Section id="shipping" title="7. Shipping & Delivery">
            <p className="tc-body">
              Estimated delivery timelines are provided at checkout and in your Order Confirmation.
              These are estimates and not guaranteed delivery dates. VDesiConnect is not liable for
              delays caused by:
            </p>
            <ul className="tc-list">
              <li>Natural disasters, extreme weather, or force majeure events.</li>
              <li>Customs clearance delays for international shipments.</li>
              <li>Incorrect or incomplete delivery address provided by the Buyer.</li>
              <li>Failed delivery attempts due to recipient unavailability.</li>
            </ul>
            <p className="tc-body">
              Risk of loss and title for products pass to you upon delivery to the carrier. For full
              details, please refer to our <a href="/shipping-policy">Shipping Policy</a>.
            </p>
          </Section>

          {/* 8 */}
          <Section id="returns" title="8. Returns & Refunds">
            <p className="tc-body">
              Returns and refunds are governed by our <a href="/returns">Returns & Refunds Policy</a>,
              which is incorporated into these Terms by reference. Key points:
            </p>
            <ul className="tc-list">
              <li>Return requests must be raised within <strong>10 days of delivery</strong>.</li>
              <li>Items must be unused, in original packaging, and accompanied by proof of purchase.</li>
              <li>Certain categories (perishables, personalised items, intimate apparel) are non-returnable.</li>
              <li>Approved refunds are processed within 5–7 business days to the original payment method.</li>
            </ul>
          </Section>

          {/* 9 */}
          <Section id="prohibited" title="9. Prohibited Conduct">
            <p className="tc-body">
              You agree not to engage in any of the following activities while using the Platform:
            </p>
            <ul className="tc-prohibited-list">
              {PROHIBITED.map((item, i) => (
                <li key={i}>
                  <span className="tc-prohibited-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="tc-body">
              Violation of any of the above may result in immediate account suspension, cancellation
              of pending orders, and legal action where warranted.
            </p>
          </Section>

          {/* 10 */}
          <Section id="ip" title="10. Intellectual Property">
            <p className="tc-body">
              All content on the Platform — including the VDesiConnect name, logo, product photographs,
              written descriptions, interface design, and software — is the exclusive property of
              VDesiConnect Private Limited or its licensors and is protected by Indian and international
              intellectual property laws.
            </p>
            <p className="tc-body">
              You may not reproduce, distribute, modify, create derivative works from, publicly display,
              or exploit any Platform content without our prior written consent. Limited, non-commercial,
              personal use (such as bookmarking or sharing a product link) is permitted.
            </p>
            <div className="tc-callout tc-callout--info">
              <span>ℹ️</span>
              <p>If you believe content on the Platform infringes your intellectual property rights, please contact us at <strong>legal@vdesiconnect.com</strong> with full details of your claim.</p>
            </div>
          </Section>

          {/* 11 */}
          <Section id="vendors" title="11. Vendor Marketplace">
            <p className="tc-body">
              VDesiConnect operates as a marketplace connecting Buyers with independent Vendors.
              While we verify vendors and conduct quality checks, we do not manufacture or hold
              inventory for most products. Accordingly:
            </p>
            <ul className="tc-list">
              <li>Each Vendor is an independent seller and is solely responsible for the accuracy of their listings, product quality, and fulfilment.</li>
              <li>VDesiConnect does not guarantee the quality, safety, or legality of products listed by Vendors, though we strive to maintain high standards through our verification process.</li>
              <li>Disputes between Buyers and Vendors should first be raised through the Platform's resolution centre. VDesiConnect may mediate but is not obligated to do so.</li>
              <li>Vendors are bound by a separate Vendor Agreement, which takes precedence over these Terms in matters concerning Vendor obligations.</li>
            </ul>
          </Section>

          {/* 12 */}
          <Section id="disclaimer" title="12. Disclaimers">
            <div className="tc-callout tc-callout--neutral">
              <span>📋</span>
              <p>
                The Platform is provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis.
                VDesiConnect makes no warranties, express or implied, including but not limited to warranties
                of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </div>
            <p className="tc-body">
              We do not warrant that the Platform will be uninterrupted, error-free, or free of viruses.
              Product descriptions, images, and specifications are provided by Vendors and may not be
              perfectly accurate. We encourage Buyers to contact Vendors directly for detailed product
              information before purchasing.
            </p>
          </Section>

          {/* 13 */}
          <Section id="liability" title="13. Limitation of Liability">
            <p className="tc-body">
              To the fullest extent permitted by applicable law, VDesiConnect and its directors,
              employees, agents, and affiliates shall not be liable for:
            </p>
            <ul className="tc-list">
              <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
              <li>Loss of profits, revenue, data, goodwill, or business opportunities.</li>
              <li>Damages resulting from unauthorised access to or alteration of your data.</li>
              <li>Any conduct or content of third parties (including Vendors) on the Platform.</li>
            </ul>
            <p className="tc-body">
              In no event shall VDesiConnect's total liability to you for all claims related to the Platform
              exceed the amount you paid to VDesiConnect in the <strong>three (3) months preceding the claim</strong>,
              or ₹5,000 — whichever is greater.
            </p>
          </Section>

          {/* 14 */}
          <Section id="indemnification" title="14. Indemnification">
            <p className="tc-body">
              You agree to indemnify, defend, and hold harmless VDesiConnect Private Limited and its
              officers, directors, employees, agents, and partners from and against any claims,
              liabilities, damages, losses, and expenses — including reasonable legal fees — arising
              from or in connection with:
            </p>
            <ul className="tc-list">
              <li>Your use of the Platform in violation of these Terms.</li>
              <li>Your violation of any third-party rights, including intellectual property or privacy rights.</li>
              <li>Any content you post, submit, or transmit through the Platform.</li>
              <li>Any fraudulent, false, or misleading information you provide.</li>
            </ul>
          </Section>

          {/* 15 */}
          <Section id="governing" title="15. Governing Law & Dispute Resolution">
            <p className="tc-body">
              These Terms are governed by and construed in accordance with the laws of <strong>India</strong>,
              without regard to conflict-of-law principles. Any dispute, controversy, or claim arising
              out of or relating to these Terms shall be subject to the <strong>exclusive jurisdiction
              of the courts in Hyderabad, Telangana, India</strong>.
            </p>
            <p className="tc-body">
              Before initiating formal legal proceedings, both parties agree to attempt resolution
              through good-faith negotiation for a period of <strong>30 days</strong> from the date the
              dispute is notified in writing. If unresolved, either party may pursue the matter
              through arbitration under the Arbitration and Conciliation Act, 1996 (India).
            </p>
          </Section>

          {/* 16 */}
          <Section id="changes" title="16. Changes to These Terms">
            <p className="tc-body">
              VDesiConnect reserves the right to modify these Terms at any time. When material changes
              are made, we will notify you by email and display a prominent notice on the Platform at
              least <strong>7 days before the changes take effect</strong>. Minor changes (such as
              typographical corrections) may be made without notice.
            </p>
            <p className="tc-body">
              The "Last Updated" date at the top of this page always reflects the most recent revision.
              Your continued use of the Platform after the effective date of any changes constitutes your
              acceptance of the revised Terms.
            </p>
          </Section>

          {/* 17 */}
          <Section id="contact" title="17. Contact Us">
            <p className="tc-body">
              If you have questions, concerns, or complaints regarding these Terms, please contact our
              legal team:
            </p>
            <div className="tc-contact-card">
              <div className="tc-contact-row"><span>🏢</span><div><strong>VDesiConnect Private Limited</strong><p>No. 42, Tech Park, Madhapur, Hyderabad — 500081, Telangana, India</p></div></div>
              <div className="tc-contact-row"><span>📧</span><div><strong>Legal & Terms Queries</strong><p>legal@vdesiconnect.com</p></div></div>
              <div className="tc-contact-row"><span>🛎️</span><div><strong>General Support</strong><p>support@vdesiconnect.com</p></div></div>
              <div className="tc-contact-row"><span>📞</span><div><strong>Phone</strong><p>+91 800 123 4567 · Mon–Sat, 9 am – 7 pm IST</p></div></div>
            </div>
          </Section>

        </main>
      </div>

    </div>
  )
}

export default Terms
