import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '🧾', title: 'NRI Income Tax Filing', desc: 'File your Indian income tax returns accurately and on time. We handle income from salary, rent, capital gains, interest, and more — across all ITR forms.' },
  { icon: '🌐', title: 'Cross-Border Tax Planning', desc: 'Strategic planning to minimise double taxation. We leverage DTAA (Double Taxation Avoidance Agreements) between India and 90+ countries.' },
  { icon: '📊', title: 'Accounting & Bookkeeping', desc: 'Accurate, cloud-based bookkeeping for freelancers, NRI businesses, and Indian subsidiaries. Monthly reports delivered to your inbox.' },
  { icon: '🏢', title: 'GST Registration & Filing', desc: 'End-to-end GST compliance — registration, monthly/quarterly returns, reconciliation, and advisory for businesses operating in India.' },
  { icon: '📈', title: 'NRI Investment Advisory', desc: 'Guidance on NRE/NRO accounts, mutual funds, stocks, real estate, and fixed deposits — structured for optimal tax efficiency.' },
  { icon: '🏗️', title: 'Company Incorporation', desc: 'Register a Private Limited, LLP, or OPC in India. We handle all MCA filings, PAN, TAN, and post-incorporation compliance.' },
  { icon: '💱', title: 'FEMA & Repatriation', desc: 'Expert guidance on FEMA regulations, repatriation of funds from India, foreign remittances, and RBI compliance for NRIs.' },
  { icon: '🤝', title: 'Financial Planning', desc: 'Holistic personal finance planning — retirement, children\'s education, insurance, and wealth management for the Indian diaspora.' },
  { icon: '📑', title: 'TDS & Withholding Tax', desc: 'TDS compliance, Form 15CA/15CB certification, lower deduction certificates, and TDS refund claims handled by qualified CAs.' },
  { icon: '⚖️', title: 'Tax Notices & Litigation', desc: 'Representation before the Income Tax Department, CIT(A), and ITAT. We resolve scrutiny, demand notices, and assessments.' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '📋', title: 'Share Your Details', desc: 'Fill in our secure form with your residency status, income sources, and what you need. No financial jargon required.' },
  { step: '02', icon: '👨‍💼', title: 'Assigned a CA / Expert', desc: 'A qualified Chartered Accountant or tax expert is assigned to your case within 24 hours and reaches out to you directly.' },
  { step: '03', icon: '📂', title: 'Upload Documents', desc: 'Share your documents securely via our encrypted portal — Form 16, bank statements, investment proofs, and whatever is needed.' },
  { step: '04', icon: '✅', title: 'Review & File', desc: 'Your expert prepares the return or compliance document, shares it for your review, and files only after your approval.' },
  { step: '05', icon: '📬', title: 'Confirmation & Records', desc: 'You receive the official acknowledgement, filed copies, and a summary report. All documents are archived for 7 years.' },
]

const STATS = [
  { number: '150+', label: 'Qualified CAs & Experts' },
  { number: '40+',  label: 'Countries Served' },
  { number: '20K+', label: 'Returns Filed' },
  { number: '98%',  label: 'On-Time Filing Rate' },
]

const NRI_TAX_FACTS = [
  { icon: '🏦', title: 'NRE Account Income', desc: 'Interest income in NRE accounts is fully exempt from Indian tax — but must still be reported in your country of residence.' },
  { icon: '🏠', title: 'Rental Income in India', desc: 'Rental income from Indian property is taxable in India even if you are an NRI. TDS at 30% applies unless a certificate is obtained.' },
  { icon: '📉', title: 'Capital Gains on Shares', desc: 'Short-term gains on Indian stocks are taxed at 15%. Long-term gains above ₹1 lakh are taxed at 10% — different rules apply for NRIs.' },
  { icon: '💸', title: 'DTAA Benefits', desc: 'If India has a DTAA with your country, you may be able to reduce or eliminate double taxation on the same income. Expert advice is critical here.' },
]

const WHY_US = [
  { icon: '🎓', title: 'Qualified Professionals Only', desc: 'All our advisors are qualified Chartered Accountants, Company Secretaries, or ICWA professionals registered with ICAI or ICSI.' },
  { icon: '🌐', title: 'NRI-Specialist Expertise', desc: 'We focus specifically on the unique tax and financial challenges of Indians living abroad. We know the rules in India and your country.' },
  { icon: '🔒', title: 'Bank-Grade Document Security', desc: 'All documents are encrypted in transit and at rest. We use ISO 27001-aligned infrastructure — your financial data is never exposed.' },
  { icon: '⚡', title: '24-Hour Turnaround', desc: 'Fast assignment, clear timelines, and proactive communication. You will never be left wondering about the status of your filing.' },
  { icon: '💸', title: 'Transparent, Fixed Pricing', desc: 'No surprise invoices. Every service has a clear price upfront. Pay only for what you need — no retainer required for one-off filings.' },
  { icon: '📞', title: 'Year-Round Support', desc: 'Tax queries don\'t stop in March. Our team is available throughout the year for advice, compliance reminders, and document requests.' },
]

const DEADLINES = [
  { date: '31 July', event: 'ITR filing deadline (individuals & HUFs not under audit)', flag: 'Annual' },
  { date: '31 Oct', event: 'ITR filing for businesses under tax audit', flag: 'Annual' },
  { date: '15th of every month', event: 'TDS deposit for the previous month', flag: 'Monthly' },
  { date: '30 Apr / 31 Jul / 31 Oct / 31 Jan', event: 'TDS returns (Form 24Q / 26Q)', flag: 'Quarterly' },
  { date: '20th of every month', event: 'GSTR-3B filing for regular taxpayers', flag: 'Monthly' },
  { date: '11th of every month', event: 'GSTR-1 filing (turnover above ₹5 crore)', flag: 'Monthly' },
  { date: '15 Jun / 15 Sep / 15 Dec / 15 Mar', event: 'Advance tax payment instalments', flag: 'Quarterly' },
]

const FAQS = [
  { q: 'Do I need to file a tax return in India if I am an NRI?', a: 'Yes, if your Indian-sourced income exceeds ₹2.5 lakh in a financial year (₹3 lakh for residents above 60), you are required to file an ITR in India. This includes rental income, capital gains, interest from NRO accounts, and any business income in India.' },
  { q: 'What documents do I need to file my NRI tax return?', a: 'Typically: PAN card, passport copy, Form 16 (if applicable), bank statements of NRE/NRO accounts, capital gains statement from broker, rental income details, proof of investments (80C, 80D), and Form 26AS (tax credit statement). We provide a personalised checklist once you engage us.' },
  { q: 'Can I avoid double taxation on my Indian income?', a: 'In most cases, yes. India has DTAA agreements with over 90 countries. The treaty determines which country has taxing rights and often provides a tax credit mechanism. Our experts analyse your specific situation and ensure you claim all available benefits.' },
  { q: 'How do I repatriate money from my NRO account to my foreign account?', a: 'NRIs can repatriate up to USD 1 million per financial year from their NRO account, subject to payment of applicable taxes. This requires Form 15CA and 15CB (certified by a CA) and compliance with FEMA regulations. We handle the entire process.' },
  { q: 'I received an income tax notice from the Indian IT department — what should I do?', a: 'Do not ignore it. Most notices have a response deadline of 15–30 days. Contact us immediately with a copy of the notice. Our tax litigation team will review the notice, prepare a detailed response, and represent you before the department if required.' },
  { q: 'Can VDesiConnect help me set up a company in India from abroad?', a: 'Yes. We handle the entire company incorporation process remotely — name reservation, DIN/DSC for directors, MOA/AOA drafting, MCA filing, PAN, TAN, and bank account setup. Most incorporations are completed within 15–20 working days.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ft-faq-item${open ? ' ft-faq-item--open' : ''}`}>
      <button className="ft-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="ft-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="ft-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Financetaxservices = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', residency: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="ft-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="ft-hero">
        <div className="ft-hero__overlay" />
        <div className="container-custom ft-hero__inner">
          <div className="ft-hero__content">
            <span className="ft-hero__eyebrow">💰 Finance & Tax Services</span>
            <h1 className="ft-hero__title">
              Expert Finance & Tax<br className="ft-hero__br" /> Guidance for NRIs
            </h1>
            <p className="ft-hero__sub">
              From NRI income tax filing and cross-border tax planning to company
              incorporation and FEMA compliance — qualified Chartered Accountants
              handle it all, remotely, in your language.
            </p>
            <div className="ft-hero__actions">
              <a href="#consult" className="ft-hero__btn ft-hero__btn--primary">Get a Free Consultation</a>
              <a href="#services" className="ft-hero__btn ft-hero__btn--outline">Explore Services</a>
            </div>
            <div className="ft-hero__pills">
              <span>🎓 Qualified CAs & Tax Experts</span>
              <span>🔒 Encrypted Document Portal</span>
              <span>📅 Never Miss a Deadline</span>
              <span>🌐 90+ Countries Covered</span>
            </div>
          </div>
          <div className="ft-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="ft-hero__stat">
                <span className="ft-hero__stat-num">{s.number}</span>
                <span className="ft-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom ft-content">

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="ft-section" id="services">
          <p className="ft-section__eyebrow">What We Offer</p>
          <h2 className="ft-section__title">Complete Finance & Tax Solutions for the Diaspora</h2>
          <div className="ft-services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="ft-service-card">
                <span className="ft-service-card__icon">{s.icon}</span>
                <h3 className="ft-service-card__title">{s.title}</h3>
                <p className="ft-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── NRI Tax Facts ─────────────────────────────────────────────── */}
        <section className="ft-section">
          <p className="ft-section__eyebrow">NRI Tax Essentials</p>
          <h2 className="ft-section__title">Key Tax Rules Every NRI Should Know</h2>
          <div className="ft-facts-grid">
            {NRI_TAX_FACTS.map(f => (
              <div key={f.title} className="ft-fact-card">
                <span className="ft-fact-card__icon">{f.icon}</span>
                <h3 className="ft-fact-card__title">{f.title}</h3>
                <p className="ft-fact-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="ft-disclaimer">
            <span>ℹ️</span>
            <p>Tax laws change frequently. The above is for general awareness only. Always consult a qualified CA for advice specific to your situation.</p>
          </div>
        </section>

        {/* ── Key Deadlines ─────────────────────────────────────────────── */}
        <section className="ft-section">
          <p className="ft-section__eyebrow">Never Miss a Date</p>
          <h2 className="ft-section__title">Important Indian Tax & Compliance Deadlines</h2>
          <div className="ft-table-wrap">
            <table className="ft-table">
              <thead>
                <tr>
                  <th>Due Date</th>
                  <th>Compliance Event</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {DEADLINES.map(d => (
                  <tr key={d.event}>
                    <td className="ft-table__date">{d.date}</td>
                    <td>{d.event}</td>
                    <td><span className={`ft-freq-badge ft-freq-badge--${d.flag.toLowerCase()}`}>{d.flag}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ft-note">⚠️ Missing these deadlines attracts interest, penalties, and prosecution in some cases. Let our team handle them for you.</p>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="ft-section">
          <p className="ft-section__eyebrow">Step by Step</p>
          <h2 className="ft-section__title">How It Works</h2>
          <div className="ft-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="ft-step">
                <div className="ft-step__left">
                  <div className="ft-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="ft-step__line" />}
                </div>
                <div className="ft-step__body">
                  <span className="ft-step__icon">{step.icon}</span>
                  <h3 className="ft-step__title">{step.title}</h3>
                  <p className="ft-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="ft-section">
          <p className="ft-section__eyebrow">Why VDesiConnect</p>
          <h2 className="ft-section__title">Why NRIs Trust Us with Their Finances</h2>
          <div className="ft-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="ft-why-card">
                <span className="ft-why-card__icon">{w.icon}</span>
                <h3 className="ft-why-card__title">{w.title}</h3>
                <p className="ft-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Consultation form ─────────────────────────────────────────── */}
        <section className="ft-section" id="consult">
          <p className="ft-section__eyebrow">Get Started</p>
          <h2 className="ft-section__title">Book a Free Consultation</h2>
          <div className="ft-consult-wrap">

            <div className="ft-consult-info">
              <h3>Speak to a CA Today</h3>
              <p>Our experts respond within <strong>24 hours</strong>. The first consultation is completely free — no obligation, no hidden charges.</p>
              <ul className="ft-consult-info__list">
                <li><span>📞</span> Phone, video, or WhatsApp call</li>
                <li><span>🔒</span> Fully confidential & secure</li>
                <li><span>📂</span> Encrypted document sharing portal</li>
                <li><span>📅</span> Deadline reminders included</li>
                <li><span>💸</span> Fixed, transparent pricing</li>
              </ul>
              <div className="ft-consult-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:finance@vdesiconnect.com">📧 finance@vdesiconnect.com</a>
              </div>
            </div>

            <div className="ft-form-wrap">
              {sent ? (
                <div className="ft-form__success">
                  <span>🎉</span>
                  <h3>Request Submitted!</h3>
                  <p>Thanks, <strong>{form.name}</strong>. A qualified CA will contact you at <strong>{form.email}</strong> within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', residency: '', service: '', message: '' }) }}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="ft-form" onSubmit={handleSubmit}>
                  <div className="ft-form__row">
                    <div className="ft-form__field">
                      <label>Full Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Arun Kapoor" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="ft-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="arun@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="ft-form__row">
                    <div className="ft-form__field">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="ft-form__field">
                      <label>Residency Status</label>
                      <select name="residency" value={form.residency} onChange={handleChange}>
                        <option value="">Select status…</option>
                        <option>NRI (Non-Resident Indian)</option>
                        <option>OCI / PIO</option>
                        <option>Resident Indian</option>
                        <option>Returning NRI (RNOR)</option>
                        <option>Foreign National with India income</option>
                      </select>
                    </div>
                  </div>
                  <div className="ft-form__field">
                    <label>Service Required</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service…</option>
                      <option>NRI Income Tax Filing</option>
                      <option>Cross-Border Tax Planning</option>
                      <option>Accounting & Bookkeeping</option>
                      <option>GST Registration & Filing</option>
                      <option>NRI Investment Advisory</option>
                      <option>Company Incorporation</option>
                      <option>FEMA & Repatriation</option>
                      <option>Financial Planning</option>
                      <option>TDS & Withholding Tax</option>
                      <option>Tax Notices & Litigation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="ft-form__field">
                    <label>Tell Us More</label>
                    <textarea name="message" rows={4} placeholder="Briefly describe your requirement — income sources, countries involved, or what challenge you're facing…" value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="ft-form__submit">Request Free Consultation →</button>
                  <p className="ft-form__note">🔒 All information is kept strictly confidential. We are bound by professional secrecy obligations.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="ft-section">
          <p className="ft-section__eyebrow">FAQs</p>
          <h2 className="ft-section__title">Frequently Asked Questions</h2>
          <div className="ft-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="ft-cta">
        <div className="container-custom ft-cta__inner">
          <span className="ft-cta__emoji">📊</span>
          <h2 className="ft-cta__title">Don't Let Taxes Be a Headache</h2>
          <p className="ft-cta__sub">
            Let VDesiConnect's qualified CAs handle your Indian tax and compliance
            obligations — accurately, on time, and at a fraction of what you'd pay
            a local accountant abroad.
          </p>
          <a href="#consult" className="ft-cta__btn">Book a Free Consultation</a>
          <p className="ft-cta__note">
            📞 <strong>+91 800 123 4567</strong>&nbsp;·&nbsp;
            📧 <strong>finance@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Financetaxservices
