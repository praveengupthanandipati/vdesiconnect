import React, { useState } from 'react'

// ── Last updated ───────────────────────────────────────────────────────────────
const LAST_UPDATED = 'June 1, 2026'

// ── Table of contents ─────────────────────────────────────────────────────────
const TOC = [
  { id: 'info-collect',   label: '1. Information We Collect' },
  { id: 'how-use',        label: '2. How We Use Your Information' },
  { id: 'sharing',        label: '3. Sharing of Information' },
  { id: 'cookies',        label: '4. Cookies & Tracking' },
  { id: 'retention',      label: '5. Data Retention' },
  { id: 'security',       label: '6. Security' },
  { id: 'rights',         label: '7. Your Rights' },
  { id: 'children',       label: '8. Children\'s Privacy' },
  { id: 'intl-transfers', label: '9. International Transfers' },
  { id: 'third-party',    label: '10. Third-Party Links' },
  { id: 'changes',        label: '11. Changes to This Policy' },
  { id: 'contact',        label: '12. Contact Us' },
]

// ── Data collected ────────────────────────────────────────────────────────────
const DATA_COLLECTED = [
  {
    icon: '👤',
    category: 'Account & Identity',
    items: ['Full name', 'Email address', 'Phone number', 'Password (hashed — never stored in plain text)', 'Profile photo (optional)'],
  },
  {
    icon: '📦',
    category: 'Orders & Transactions',
    items: ['Billing and shipping addresses', 'Order history and item details', 'Payment method type (card type, last 4 digits — full card data is handled by our payment processor, never stored by us)', 'Invoice and receipt records'],
  },
  {
    icon: '📡',
    category: 'Usage & Device Data',
    items: ['IP address and approximate location', 'Browser type and version', 'Device type and operating system', 'Pages visited, click patterns, and session duration', 'Referral source (how you found us)'],
  },
  {
    icon: '💬',
    category: 'Communications',
    items: ['Messages sent to our support team', 'Product reviews and ratings you submit', 'Survey responses (if you choose to participate)', 'Newsletter preferences'],
  },
]

const USER_RIGHTS = [
  { icon: '👁️', right: 'Access', desc: 'Request a copy of all personal data we hold about you.' },
  { icon: '✏️', right: 'Correction', desc: 'Ask us to correct any inaccurate or incomplete data.' },
  { icon: '🗑️', right: 'Deletion', desc: 'Request deletion of your account and associated personal data ("right to be forgotten").' },
  { icon: '🚫', right: 'Objection', desc: 'Object to our processing of your data for direct marketing purposes at any time.' },
  { icon: '📤', right: 'Portability', desc: 'Receive your data in a structured, machine-readable format to transfer to another service.' },
  { icon: '⏸️', right: 'Restriction', desc: 'Request that we limit how we use your data while a dispute is being resolved.' },
]

const COOKIES = [
  { type: 'Essential', purpose: 'Required for the site to function — login sessions, cart contents, checkout flow.', canDisable: false },
  { type: 'Analytics', purpose: 'Help us understand how visitors interact with the site (via Google Analytics). Data is anonymised.', canDisable: true },
  { type: 'Personalisation', purpose: 'Remember your preferences — language, currency, recently viewed products.', canDisable: true },
  { type: 'Marketing', purpose: 'Used by advertising partners to show you relevant VDesiConnect ads on other platforms.', canDisable: true },
]

// ── Accordion ─────────────────────────────────────────────────────────────────
const Section = ({ id, title, children }) => (
  <section className="pp-section" id={id}>
    <h2 className="pp-section__title">{title}</h2>
    <div className="pp-section__body">{children}</div>
  </section>
)

// ── Page ──────────────────────────────────────────────────────────────────────
const Privacypolicy = () => {
  const [activeId, setActiveId] = useState(null)

  return (
    <div className="pp-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pp-hero">
        <div className="pp-hero__overlay" />
        <div className="container-custom pp-hero__inner">
          <span className="pp-hero__eyebrow">🔒 Privacy Policy</span>
          <h1 className="pp-hero__title">Your Privacy Matters to Us</h1>
          <p className="pp-hero__sub">
            We collect only what we need, protect it rigorously, and never sell
            it to anyone. This policy explains exactly what we collect, why,
            and how you stay in control.
          </p>
          <p className="pp-hero__updated">Last updated: <strong>{LAST_UPDATED}</strong></p>
        </div>
      </section>

      <div className="container-custom pp-layout">

        {/* ── Sidebar TOC ────────────────────────────────────────────────── */}
        <aside className="pp-toc">
          <p className="pp-toc__heading">Contents</p>
          <nav>
            {TOC.map(t => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`pp-toc__link${activeId === t.id ? ' pp-toc__link--active' : ''}`}
                onClick={() => setActiveId(t.id)}
              >
                {t.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* ── Main content ───────────────────────────────────────────────── */}
        <main className="pp-main">

          {/* Intro */}
          <div className="pp-intro-box">
            <p>
              VDesiConnect Private Limited ("VDesiConnect", "we", "our", or "us") operates the website
              <strong> vdesiconnect.com</strong> and its associated mobile applications. This Privacy Policy
              describes how we collect, use, store, share, and protect information about you when you
              use our platform.
            </p>
            <p>
              By creating an account or placing an order, you agree to the practices described in this
              policy. If you do not agree, please discontinue use of the platform.
            </p>
          </div>

          {/* 1 — Information We Collect */}
          <Section id="info-collect" title="1. Information We Collect">
            <p className="pp-body-text">
              We collect information in three ways: information you give us directly, information
              generated as you use the platform, and information from third parties (such as
              payment processors or social login providers).
            </p>
            <div className="pp-data-grid">
              {DATA_COLLECTED.map(d => (
                <div key={d.category} className="pp-data-card">
                  <div className="pp-data-card__header">
                    <span className="pp-data-card__icon">{d.icon}</span>
                    <h3 className="pp-data-card__cat">{d.category}</h3>
                  </div>
                  <ul className="pp-data-card__list">
                    {d.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* 2 — How We Use */}
          <Section id="how-use" title="2. How We Use Your Information">
            <p className="pp-body-text">We use your information solely for the following purposes:</p>
            <ul className="pp-list">
              <li><strong>Order fulfilment</strong> — processing payments, coordinating delivery, and handling returns and refunds.</li>
              <li><strong>Account management</strong> — creating and maintaining your account, authenticating logins, and managing preferences.</li>
              <li><strong>Customer support</strong> — responding to queries, resolving disputes, and improving support quality.</li>
              <li><strong>Platform improvement</strong> — analysing usage patterns to improve search, recommendations, and overall experience.</li>
              <li><strong>Marketing communications</strong> — sending newsletters, promotional offers, and personalised recommendations — only if you have opted in. You can unsubscribe at any time.</li>
              <li><strong>Legal compliance</strong> — meeting our obligations under applicable tax, financial, and consumer-protection laws.</li>
              <li><strong>Fraud prevention</strong> — detecting and preventing fraudulent transactions, abuse, and security threats.</li>
            </ul>
            <div className="pp-highlight-box">
              <span>🚫</span>
              <p><strong>We never sell your personal data</strong> to third parties for their own marketing or commercial purposes.</p>
            </div>
          </Section>

          {/* 3 — Sharing */}
          <Section id="sharing" title="3. Sharing of Information">
            <p className="pp-body-text">
              We share your data only when necessary, and always under strict contractual
              protections. The categories of recipients are:
            </p>
            <div className="pp-sharing-list">
              <div className="pp-sharing-item">
                <strong>Vendors & Sellers</strong>
                <p>Your name, delivery address, and order details are shared with the vendor who fulfils your order. Vendors are prohibited from using this data for any purpose other than fulfilment.</p>
              </div>
              <div className="pp-sharing-item">
                <strong>Logistics Partners</strong>
                <p>Courier and shipping partners receive your name, address, and contact number to deliver your parcel. They are bound by data processing agreements.</p>
              </div>
              <div className="pp-sharing-item">
                <strong>Payment Processors</strong>
                <p>Razorpay, Stripe, and other payment gateways process your payment details directly. VDesiConnect does not store full card numbers or CVV/CVC codes.</p>
              </div>
              <div className="pp-sharing-item">
                <strong>Analytics Providers</strong>
                <p>Anonymised and aggregated usage data is shared with analytics tools (e.g., Google Analytics) to help us understand platform performance. No personally identifiable data is shared.</p>
              </div>
              <div className="pp-sharing-item">
                <strong>Legal & Regulatory Bodies</strong>
                <p>We may disclose data if required by law, court order, or government authority — or to protect the rights, property, or safety of VDesiConnect, our users, or the public.</p>
              </div>
            </div>
          </Section>

          {/* 4 — Cookies */}
          <Section id="cookies" title="4. Cookies & Tracking">
            <p className="pp-body-text">
              We use cookies and similar technologies to keep you logged in, remember your
              preferences, and understand how visitors use the site.
            </p>
            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Cookie Type</th>
                    <th>Purpose</th>
                    <th>Can Be Disabled?</th>
                  </tr>
                </thead>
                <tbody>
                  {COOKIES.map(c => (
                    <tr key={c.type}>
                      <td><strong>{c.type}</strong></td>
                      <td>{c.purpose}</td>
                      <td className={c.canDisable ? 'pp-table__yes' : 'pp-table__no'}>
                        {c.canDisable ? 'Yes' : 'No — required'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pp-body-text">
              You can manage non-essential cookies at any time via the cookie preferences banner
              or your browser settings. Disabling analytics or marketing cookies will not affect
              your ability to shop on VDesiConnect.
            </p>
          </Section>

          {/* 5 — Retention */}
          <Section id="retention" title="5. Data Retention">
            <p className="pp-body-text">
              We retain your personal data only as long as necessary for the purposes described
              in this policy or as required by law:
            </p>
            <ul className="pp-list">
              <li><strong>Account data</strong> — retained for as long as your account is active. If you delete your account, personal data is removed within 30 days, except where we are legally required to retain it.</li>
              <li><strong>Transaction records</strong> — retained for 7 years to comply with Indian GST and accounting regulations.</li>
              <li><strong>Support communications</strong> — retained for 2 years after resolution to handle any follow-up queries or disputes.</li>
              <li><strong>Marketing preferences</strong> — retained until you withdraw consent or delete your account.</li>
            </ul>
          </Section>

          {/* 6 — Security */}
          <Section id="security" title="6. Security">
            <p className="pp-body-text">
              We implement industry-standard technical and organisational measures to protect
              your data:
            </p>
            <div className="pp-security-grid">
              <div className="pp-security-card"><span>🔐</span><p><strong>TLS / SSL Encryption</strong><br />All data in transit is encrypted using TLS 1.3.</p></div>
              <div className="pp-security-card"><span>🔑</span><p><strong>Password Hashing</strong><br />Passwords are stored using bcrypt — never in plain text.</p></div>
              <div className="pp-security-card"><span>🛡️</span><p><strong>Access Controls</strong><br />Strict role-based access — employees only access data they need.</p></div>
              <div className="pp-security-card"><span>🔍</span><p><strong>Regular Audits</strong><br />Periodic security audits and penetration tests by third-party experts.</p></div>
            </div>
            <p className="pp-body-text">
              Despite these measures, no system is 100% secure. If you suspect any unauthorised
              access to your account, please change your password immediately and contact us at
              security@vdesiconnect.com.
            </p>
          </Section>

          {/* 7 — Rights */}
          <Section id="rights" title="7. Your Rights">
            <p className="pp-body-text">
              Depending on your country of residence, you may have the following rights over
              your personal data. To exercise any of them, email us at <strong>privacy@vdesiconnect.com</strong>.
              We will respond within 30 days.
            </p>
            <div className="pp-rights-grid">
              {USER_RIGHTS.map(r => (
                <div key={r.right} className="pp-rights-card">
                  <span className="pp-rights-card__icon">{r.icon}</span>
                  <h3 className="pp-rights-card__title">{r.right}</h3>
                  <p className="pp-rights-card__desc">{r.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 8 — Children */}
          <Section id="children" title="8. Children's Privacy">
            <p className="pp-body-text">
              VDesiConnect is not directed at children under the age of 13. We do not knowingly
              collect personal data from anyone under 13. If we become aware that a child under 13
              has provided us with personal data, we will delete it immediately. If you believe we
              have inadvertently collected such data, please contact us at privacy@vdesiconnect.com.
            </p>
          </Section>

          {/* 9 — International transfers */}
          <Section id="intl-transfers" title="9. International Transfers">
            <p className="pp-body-text">
              VDesiConnect operates primarily from India. If you access the platform from outside
              India, your data may be transferred to and processed in India or other countries
              where our service providers operate (including the United States and the European
              Union). These transfers are protected by standard contractual clauses and equivalent
              safeguards as required by applicable data protection laws.
            </p>
          </Section>

          {/* 10 — Third-party links */}
          <Section id="third-party" title="10. Third-Party Links">
            <p className="pp-body-text">
              Our platform may contain links to third-party websites — for example, vendor social
              media pages or payment gateway portals. Once you leave VDesiConnect, this Privacy
              Policy no longer applies. We encourage you to read the privacy policies of any
              third-party site you visit. We are not responsible for the content or privacy
              practices of external sites.
            </p>
          </Section>

          {/* 11 — Changes */}
          <Section id="changes" title="11. Changes to This Policy">
            <p className="pp-body-text">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technology, or legal requirements. When we make material changes, we
              will notify you by email and display a prominent notice on the platform at least
              7 days before the changes take effect. Your continued use of the platform after
              the effective date constitutes acceptance of the updated policy.
            </p>
            <p className="pp-body-text">
              The "Last Updated" date at the top of this page always reflects the most recent revision.
              We recommend reviewing this policy periodically.
            </p>
          </Section>

          {/* 12 — Contact */}
          <Section id="contact" title="12. Contact Us">
            <p className="pp-body-text">
              For any questions, concerns, or requests relating to this Privacy Policy or your personal
              data, please contact our Data Protection Officer:
            </p>
            <div className="pp-contact-card">
              <div className="pp-contact-card__row"><span>🏢</span><div><strong>VDesiConnect Private Limited</strong><p>No. 42, Tech Park, Madhapur, Hyderabad — 500081, Telangana, India</p></div></div>
              <div className="pp-contact-card__row"><span>📧</span><div><strong>Privacy Queries</strong><p>privacy@vdesiconnect.com</p></div></div>
              <div className="pp-contact-card__row"><span>🔒</span><div><strong>Security Issues</strong><p>security@vdesiconnect.com</p></div></div>
              <div className="pp-contact-card__row"><span>📞</span><div><strong>Phone</strong><p>+91 800 123 4567 · Mon–Sat, 9 am – 7 pm IST</p></div></div>
            </div>
          </Section>

        </main>
      </div>

    </div>
  )
}

export default Privacypolicy
