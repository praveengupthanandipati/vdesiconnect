import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '🔍', title: 'Property Search & Shortlisting', desc: 'Tell us your budget, city, and preferences — our agents curate verified listings of apartments, villas, plots, and commercial properties matched to your requirements.' },
  { icon: '🏦', title: 'NRI Home Loan Assistance', desc: 'We connect you with NRI-friendly banks and HFCs offering competitive rates. We handle documentation, FEMA compliance, and coordinate between lender and seller on your behalf.' },
  { icon: '⚖️', title: 'Legal Due Diligence', desc: 'Comprehensive title search, encumbrance certificate verification, RERA project check, and approval document review — conducted by empanelled property lawyers before you commit.' },
  { icon: '🤝', title: 'Price Negotiation & Deal Closing', desc: 'Our experienced agents negotiate with builders and sellers on your behalf to ensure you get the best price and terms — without being physically present in India.' },
  { icon: '📝', title: 'Documentation & Registration', desc: 'Sale agreement, sale deed, stamp duty payment, and sub-registrar office registration handled end-to-end. All documents couriered or e-signed with your NRI-compliant Power of Attorney.' },
  { icon: '🏗️', title: 'RERA & Builder Compliance', desc: 'Verification of RERA registration for under-construction projects, builder track record check, delivery milestone monitoring, and escalation if timelines slip.' },
  { icon: '💰', title: 'NRI Tax on Property Purchase', desc: 'Guidance on TDS deductions (applicable when buying from residents), Form 26QB filing, capital gains tax planning, and coordination with your CA for full compliance.' },
  { icon: '📊', title: 'Resale & Exit Strategy', desc: 'When you\'re ready to sell, we list your property, manage buyer inquiries, negotiate the best price, and handle all paperwork for a smooth, remote transaction.' },
  { icon: '📜', title: 'Power of Attorney Services', desc: 'Assistance in drafting a legally sound, limited-scope Power of Attorney so a trusted representative can act on your behalf for property transactions in India.' },
]

const PROPERTY_TYPES = [
  { icon: '🏢', type: 'Apartments & Flats', desc: 'Ready-to-move and under-construction units from RERA-registered builders across Tier 1 and Tier 2 cities. 1BHK to 5BHK options available.' },
  { icon: '🏡', type: 'Independent Houses & Villas', desc: 'Gated community villas and standalone bungalows — ideal for NRIs seeking a holiday home or a future retirement residence in India.' },
  { icon: '🌿', type: 'Plots & Land', desc: 'Residential and agricultural plots in approved layouts. We verify land-use certificates, revenue records, and patta documents before you invest.' },
  { icon: '🏪', type: 'Commercial Properties', desc: 'Office spaces, retail units, and warehouses in major business hubs. NRIs can invest in commercial real estate for higher rental yields.' },
]

const STATS = [
  { number: '5,000+', label: 'Properties Transacted' },
  { number: '60+',    label: 'Cities Covered' },
  { number: '500+',   label: 'Verified Agents' },
  { number: '98%',    label: 'Client Satisfaction' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '📋', title: 'Share Your Requirements', desc: 'Fill in our enquiry form with your budget, preferred city, property type, and purpose (investment, self-use, or retirement). No obligation.' },
  { step: '02', icon: '👨‍💼', title: 'Dedicated Advisor Assigned', desc: 'A senior real estate advisor with NRI specialisation is assigned within 24 hours. Initial consultation is free — by phone, video, or WhatsApp.' },
  { step: '03', icon: '🔍', title: 'Curated Listings & Virtual Tours', desc: 'We shortlist verified properties matching your criteria and arrange professional virtual tours with live video walkthroughs so you can evaluate from anywhere.' },
  { step: '04', icon: '⚖️', title: 'Due Diligence & Negotiation', desc: 'Once you identify a property, our legal team conducts full title verification and our agents negotiate the best price and terms with the seller or builder.' },
  { step: '05', icon: '✅', title: 'Documentation & Registration', desc: 'We coordinate agreement drafting, stamp duty payment, and property registration — with your PoA holder present if needed. Full documents couriered to you.' },
]

const NRI_RULES = [
  { icon: '🇮🇳', title: 'What NRIs Can Buy', desc: 'NRIs and OCIs can freely purchase residential and commercial properties in India. Agricultural land, plantation properties, and farmhouses require special RBI permission.' },
  { icon: '💳', title: 'Payment Through NRE/NRO', desc: 'Property purchase must be funded through an NRE, NRO, or FCNR account. Direct outward remittance or foreign currency payments are not permitted under FEMA.' },
  { icon: '📉', title: 'TDS on Property Purchase', desc: 'If you buy from a resident Indian, TDS of 1% applies on transactions above ₹50 lakh. If you buy from another NRI, TDS can be as high as 20–30%.' },
  { icon: '🔄', title: 'Repatriation of Sale Proceeds', desc: 'Up to USD 1 million per year can be repatriated from property sale proceeds, subject to taxes paid and Form 15CA/15CB certification by a CA.' },
]

const WHY_US = [
  { icon: '🌐', title: '100% Remote Transaction', desc: 'From property search to registration — everything is managed remotely. You never need to travel to India to buy or sell property through VDesiConnect.' },
  { icon: '🔒', title: 'Verified Listings Only', desc: 'Every listing on our platform is verified for RERA registration, clear title, and approved plans. No grey-market or disputed properties.' },
  { icon: '⚖️', title: 'In-House Legal Team', desc: 'Qualified property lawyers conduct due diligence, draft agreements, and ensure every transaction is legally sound — protecting your investment.' },
  { icon: '🏦', title: 'NRI Loan Network', desc: 'Partnerships with 20+ NRI-friendly banks and HFCs. We pre-qualify you and expedite loan approval without requiring you to visit a branch in India.' },
  { icon: '💸', title: 'Transparent Fee Structure', desc: 'Our advisory fee is fully disclosed upfront. No hidden charges, no side commissions from builders, and no pressure to buy any specific property.' },
  { icon: '📱', title: 'End-to-End Updates', desc: 'Track every step of your transaction via WhatsApp updates, document status alerts, and a dedicated advisor — from first shortlist to key handover.' },
]

const TESTIMONIALS = [
  { name: 'Ravi Krishnan', location: '🇺🇸 Seattle, USA', property: '3BHK apartment, Hyderabad', text: 'I was skeptical about buying property from abroad but VDesiConnect made it seamless. Virtual tours, legal check, negotiation, and registration — all handled without me setting foot in India. The whole process took 6 weeks.', rating: 5 },
  { name: 'Priya Mehta', location: '🇬🇧 Manchester, UK', property: '2BHK flat, Pune', text: 'The legal due diligence team caught an encumbrance issue on a property I was about to finalise. They saved me from a huge mistake and then helped me find a better option within 10 days. Incredibly professional.', rating: 5 },
  { name: 'Kiran Reddy', location: '🇦🇪 Abu Dhabi, UAE', property: 'Villa, Bengaluru', text: 'VDesiConnect handled everything for my villa purchase — from builder verification and price negotiation to PoA assistance and registration. Their knowledge of NRI-specific rules is unmatched.', rating: 5 },
]

const FAQS = [
  { q: 'Can NRIs buy property in India without visiting?', a: 'Yes, absolutely. NRIs can purchase property in India entirely remotely. With a registered Power of Attorney granted to a trusted person in India (a relative or our representative), all transactions including agreement signing and registration can be completed without your physical presence. We assist with the entire process.' },
  { q: 'What types of property can NRIs legally purchase in India?', a: 'NRIs and OCIs can purchase any number of residential and commercial properties in India without any RBI permission. However, agricultural land, plantation properties, and farmhouses cannot be purchased by NRIs without specific RBI approval. We conduct a property type check as part of our initial due diligence.' },
  { q: 'How do I pay for property in India as an NRI?', a: 'Payment must be made in Indian rupees through your NRE (Non-Resident External) or NRO (Non-Resident Ordinary) account. Home loan repayments can also be made via these accounts. You cannot pay directly in foreign currency. Our advisors guide you on the most tax-efficient payment method for your situation.' },
  { q: 'How much TDS do I need to deduct when buying property from an NRI seller?', a: 'If you are buying from an NRI seller, you must deduct TDS at 20% on long-term capital gains (property held over 2 years) or 30% on short-term capital gains — before making payment to the seller. The seller can apply to the IT department for a lower deduction certificate. Our team manages this entire TDS compliance for you.' },
  { q: 'Can I sell my Indian property from abroad and repatriate the money?', a: 'Yes. You can sell your Indian property from abroad using a Power of Attorney. After paying applicable capital gains tax and obtaining Form 15CA/15CB certification from a CA, you can repatriate up to USD 1 million per financial year. Our team handles the sale, tax compliance, and repatriation paperwork.' },
  { q: 'How do I verify that an under-construction project is genuine and RERA-compliant?', a: 'Every state in India has a RERA portal where you can check project registration, builder credentials, approved plans, and the promised delivery schedule. Our legal team checks the RERA registration, builder past projects, financial health, and litigations before you commit. We also verify that the sale agreement includes RERA-mandated clauses protecting your interests.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`re-faq-item${open ? ' re-faq-item--open' : ''}`}>
      <button className="re-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="re-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="re-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Realestate = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', type: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="re-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="re-hero">
        <div className="re-hero__overlay" />
        <div className="container-custom re-hero__inner">
          <div className="re-hero__content">
            <span className="re-hero__eyebrow">🏠 Real Estate Services</span>
            <h1 className="re-hero__title">
              Buy, Sell & Invest in<br className="re-hero__br" /> Indian Property from Abroad
            </h1>
            <p className="re-hero__sub">
              End-to-end real estate assistance for NRIs — from verified property
              search and legal due diligence to price negotiation, documentation,
              and registration. 100% remote. Zero hassle.
            </p>
            <div className="re-hero__actions">
              <a href="#enquire" className="re-hero__btn re-hero__btn--primary">Talk to an Advisor</a>
              <a href="#services" className="re-hero__btn re-hero__btn--outline">Explore Services</a>
            </div>
            <div className="re-hero__pills">
              <span>🔍 Verified Listings Only</span>
              <span>⚖️ Legal Due Diligence</span>
              <span>🌐 100% Remote Process</span>
              <span>🏦 NRI Loan Assistance</span>
            </div>
          </div>
          <div className="re-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="re-hero__stat">
                <span className="re-hero__stat-num">{s.number}</span>
                <span className="re-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom re-content">

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="re-section" id="services">
          <p className="re-section__eyebrow">What We Offer</p>
          <h2 className="re-section__title">Complete Real Estate Solutions for NRIs</h2>
          <div className="re-services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="re-service-card">
                <span className="re-service-card__icon">{s.icon}</span>
                <h3 className="re-service-card__title">{s.title}</h3>
                <p className="re-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Property Types ────────────────────────────────────────────── */}
        <section className="re-section">
          <p className="re-section__eyebrow">Property Categories</p>
          <h2 className="re-section__title">What You Can Invest In</h2>
          <div className="re-types-grid">
            {PROPERTY_TYPES.map(p => (
              <div key={p.type} className="re-type-card">
                <span className="re-type-card__icon">{p.icon}</span>
                <h3 className="re-type-card__type">{p.type}</h3>
                <p className="re-type-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── NRI Rules ─────────────────────────────────────────────────── */}
        <section className="re-section">
          <p className="re-section__eyebrow">NRI Property Essentials</p>
          <h2 className="re-section__title">Key Rules Every NRI Buyer Should Know</h2>
          <div className="re-rules-grid">
            {NRI_RULES.map(r => (
              <div key={r.title} className="re-rule-card">
                <span className="re-rule-card__icon">{r.icon}</span>
                <h3 className="re-rule-card__title">{r.title}</h3>
                <p className="re-rule-card__desc">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="re-disclaimer">
            <span>ℹ️</span>
            <p>Property laws and RBI regulations change. The above is for general awareness only. Always consult our advisors for guidance specific to your transaction.</p>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="re-section">
          <p className="re-section__eyebrow">Step by Step</p>
          <h2 className="re-section__title">How It Works</h2>
          <div className="re-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="re-step">
                <div className="re-step__left">
                  <div className="re-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="re-step__line" />}
                </div>
                <div className="re-step__body">
                  <span className="re-step__icon">{step.icon}</span>
                  <h3 className="re-step__title">{step.title}</h3>
                  <p className="re-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="re-section">
          <p className="re-section__eyebrow">Why VDesiConnect</p>
          <h2 className="re-section__title">Why NRIs Choose Us for Their Property Needs</h2>
          <div className="re-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="re-why-card">
                <span className="re-why-card__icon">{w.icon}</span>
                <h3 className="re-why-card__title">{w.title}</h3>
                <p className="re-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section className="re-section">
          <p className="re-section__eyebrow">Success Stories</p>
          <h2 className="re-section__title">NRIs Who Found Their Dream Property</h2>
          <div className="re-testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="re-testimonial-card">
                <div className="re-testimonial-card__stars">{'⭐'.repeat(t.rating)}</div>
                <p className="re-testimonial-card__text">"{t.text}"</p>
                <div className="re-testimonial-card__author">
                  <div className="re-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="re-testimonial-card__name">{t.name}</p>
                    <p className="re-testimonial-card__meta">{t.location} · {t.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Enquiry form ─────────────────────────────────────────────── */}
        <section className="re-section" id="enquire">
          <p className="re-section__eyebrow">Get Started</p>
          <h2 className="re-section__title">Talk to a Real Estate Advisor</h2>
          <div className="re-enquire-wrap">

            <div className="re-enquire-info">
              <h3>Free Consultation Within 24 Hours</h3>
              <p>Share your requirements and a senior NRI property advisor will reach out within <strong>one business day</strong>. First consultation is <strong>completely free</strong> — no commitment required.</p>
              <ul className="re-enquire-info__list">
                <li><span>🔍</span> Curated, verified property shortlist</li>
                <li><span>⚖️</span> Free legal due diligence overview</li>
                <li><span>📱</span> Virtual property tours via WhatsApp/Zoom</li>
                <li><span>🏦</span> NRI home loan guidance</li>
                <li><span>💸</span> Transparent fees, no hidden charges</li>
              </ul>
              <div className="re-enquire-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:realestate@vdesiconnect.com">📧 realestate@vdesiconnect.com</a>
              </div>
            </div>

            <div className="re-form-wrap">
              {sent ? (
                <div className="re-form__success">
                  <span>🏠</span>
                  <h3>Enquiry Received!</h3>
                  <p>Thank you, <strong>{form.name}</strong>. A real estate advisor will contact you at <strong>{form.email}</strong> within 24 hours with curated property options.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', city: '', type: '', budget: '', message: '' }) }}>
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form className="re-form" onSubmit={handleSubmit}>
                  <div className="re-form__row">
                    <div className="re-form__field">
                      <label>Your Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Suresh Nair" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="re-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="suresh@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="re-form__row">
                    <div className="re-form__field">
                      <label>WhatsApp / Phone</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="re-form__field">
                      <label>Preferred City</label>
                      <select name="city" value={form.city} onChange={handleChange}>
                        <option value="">Select city…</option>
                        <option>Mumbai</option>
                        <option>Delhi NCR</option>
                        <option>Bengaluru</option>
                        <option>Hyderabad</option>
                        <option>Pune</option>
                        <option>Chennai</option>
                        <option>Ahmedabad</option>
                        <option>Kolkata</option>
                        <option>Kochi</option>
                        <option>Jaipur</option>
                        <option>Other City</option>
                      </select>
                    </div>
                  </div>
                  <div className="re-form__row">
                    <div className="re-form__field">
                      <label>Property Type</label>
                      <select name="type" value={form.type} onChange={handleChange}>
                        <option value="">Select type…</option>
                        <option>1BHK Apartment</option>
                        <option>2BHK Apartment</option>
                        <option>3BHK Apartment</option>
                        <option>4BHK+ Apartment</option>
                        <option>Independent House / Villa</option>
                        <option>Plot / Land</option>
                        <option>Commercial Property</option>
                        <option>I Want to Sell My Property</option>
                      </select>
                    </div>
                    <div className="re-form__field">
                      <label>Budget (INR)</label>
                      <select name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select budget…</option>
                        <option>Under ₹30 Lakh</option>
                        <option>₹30 – 60 Lakh</option>
                        <option>₹60 Lakh – 1 Crore</option>
                        <option>₹1 – 2 Crore</option>
                        <option>₹2 – 5 Crore</option>
                        <option>Above ₹5 Crore</option>
                      </select>
                    </div>
                  </div>
                  <div className="re-form__field">
                    <label>Tell Us More</label>
                    <textarea name="message" rows={4} placeholder="e.g. Looking for a 3BHK in Whitefield, Bengaluru for investment. Budget ₹80 lakh. Need help with legal check and home loan for NRI. Based in the US." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="re-form__submit">Send Enquiry →</button>
                  <p className="re-form__note">🔒 Your details are kept strictly confidential and never shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="re-section">
          <p className="re-section__eyebrow">FAQs</p>
          <h2 className="re-section__title">Frequently Asked Questions</h2>
          <div className="re-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="re-cta">
        <div className="container-custom re-cta__inner">
          <span className="re-cta__emoji">🏠</span>
          <h2 className="re-cta__title">Your Dream Property in India is Closer Than You Think</h2>
          <p className="re-cta__sub">
            Let VDesiConnect's real estate specialists find, verify, and secure
            the right property for you — without a single flight to India.
          </p>
          <a href="#enquire" className="re-cta__btn">Talk to an Advisor Today</a>
          <p className="re-cta__note">
            📞 <strong>+91 800 123 4567</strong>&nbsp;·&nbsp;
            📧 <strong>realestate@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Realestate
