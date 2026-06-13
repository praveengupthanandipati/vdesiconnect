import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '🏠', title: 'Tenant Management', desc: 'End-to-end tenant sourcing, screening, agreement drafting, and renewal. We ensure only verified, reliable tenants occupy your property.' },
  { icon: '💰', title: 'Rent Collection', desc: 'Timely rent collection every month with transparent accounting. Funds remitted directly to your NRE/NRO account or international transfer.' },
  { icon: '🔧', title: 'Maintenance & Repairs', desc: 'Prompt handling of electrical, plumbing, civil, and carpentry issues. Empanelled contractors with quality checks and photo documentation.' },
  { icon: '🔍', title: 'Property Inspections', desc: 'Routine inspections every 3–6 months with detailed photo and video reports sent to you — wherever you are in the world.' },
  { icon: '📑', title: 'Legal & Documentation', desc: 'Rental agreements, police verification, society NOCs, property tax filings, and encumbrance certificates — handled by qualified professionals.' },
  { icon: '🏗️', title: 'Renovation & Upkeep', desc: 'Managed renovation projects — painting, flooring, plumbing upgrades — with cost estimates, contractor oversight, and progress photos.' },
  { icon: '💡', title: 'Utility Management', desc: 'Electricity, water, gas, broadband, and society maintenance dues tracked and paid on your behalf. No defaulted bills while you are away.' },
  { icon: '📊', title: 'Financial Reporting', desc: 'Monthly income-expense statements, annual summary for tax filing, and complete transaction history accessible via your online dashboard.' },
  { icon: '🛡️', title: 'Property Insurance', desc: 'Advisory and assistance with comprehensive property insurance covering fire, flood, burglary, and structural damage for complete peace of mind.' },
]

const CITIES = [
  { city: 'Mumbai',    managers: 38, properties: 520 },
  { city: 'Delhi NCR', managers: 42, properties: 610 },
  { city: 'Bengaluru', managers: 35, properties: 480 },
  { city: 'Hyderabad', managers: 28, properties: 390 },
  { city: 'Pune',      managers: 22, properties: 310 },
  { city: 'Chennai',   managers: 19, properties: 270 },
  { city: 'Ahmedabad', managers: 15, properties: 200 },
  { city: 'Kolkata',   managers: 14, properties: 185 },
  { city: 'Jaipur',    managers: 11, properties: 140 },
  { city: 'Kochi',     managers: 10, properties: 130 },
  { city: 'Chandigarh',managers: 9,  properties: 115 },
  { city: 'Nagpur',    managers: 8,  properties: 98 },
]

const STATS = [
  { number: '3,000+', label: 'Properties Managed' },
  { number: '50+',    label: 'Cities Across India' },
  { number: '250+',   label: 'Local Property Managers' },
  { number: '99%',    label: 'Client Retention Rate' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '📋', title: 'Property Onboarding', desc: 'Share your property details, documents, and requirements. Our team conducts a free inspection and prepares a complete property profile.' },
  { step: '02', icon: '🤝', title: 'Dedicated Manager Assigned', desc: 'A local property manager — based in your city — is assigned as your single point of contact for all day-to-day operations.' },
  { step: '03', icon: '🔍', title: 'Tenant Sourcing & Vetting', desc: 'We list your property, screen applicants through employment, identity, and reference checks, and present you the best candidates for approval.' },
  { step: '04', icon: '📝', title: 'Agreement & Move-In', desc: 'Legally sound rental agreement is drafted and registered. Police verification and society intimation completed before tenant moves in.' },
  { step: '05', icon: '📲', title: 'Ongoing Management', desc: 'Monthly rent credited to your account, maintenance handled proactively, inspections scheduled, utilities paid, and reports emailed to you.' },
]

const PLANS = [
  {
    name: 'Essential',
    price: '₹1,499',
    unit: 'per month',
    desc: 'For NRIs who already have tenants and need ongoing oversight.',
    features: [
      'Dedicated property manager',
      'Monthly rent collection & transfer',
      'Semi-annual property inspection',
      'Maintenance coordination (extra charges apply)',
      'Monthly financial report',
      'Emergency support (call + WhatsApp)',
    ],
    highlight: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '₹2,999',
    unit: 'per month',
    desc: 'Our most popular plan — full management including tenant sourcing.',
    features: [
      'Everything in Essential',
      'Tenant sourcing & background checks',
      'Rental agreement & registration',
      'Quarterly inspections with video report',
      'Utility bill management',
      'Annual property tax support',
      'Online owner dashboard',
    ],
    highlight: true,
    cta: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '₹4,999',
    unit: 'per month',
    desc: 'Comprehensive care for multiple properties or premium assets.',
    features: [
      'Everything in Professional',
      'Monthly inspections with 360° photos',
      'Minor repairs covered (up to ₹5,000/month)',
      'Renovation project management',
      'Property insurance advisory',
      'Priority legal & documentation support',
      'Dedicated account manager (video calls)',
    ],
    highlight: false,
    cta: 'Get Premium',
  },
]

const WHY_US = [
  { icon: '📍', title: 'Local Managers, Real Presence', desc: 'Unlike remote-only services, our property managers are physically present in your city. They visit, verify, and manage on the ground.' },
  { icon: '🔒', title: 'Trusted by 3,000+ NRIs', desc: 'From the US, UK, UAE, Canada, and Australia — thousands of NRI property owners trust us to protect and grow their Indian real estate investment.' },
  { icon: '📱', title: 'Full Transparency via Dashboard', desc: 'Log in anytime to see rent receipts, maintenance requests, inspection photos, utility bills, and financial summaries — complete visibility, zero surprises.' },
  { icon: '⚖️', title: 'Legal Expertise', desc: 'Our in-house legal team handles RERA compliance, eviction proceedings if needed, agreement disputes, and property encumbrance checks.' },
  { icon: '💸', title: 'Guaranteed Rent Option', desc: 'On select properties and cities, we offer a Guaranteed Rent scheme — you receive your rent every month regardless of vacancy. Ask us for eligibility.' },
  { icon: '🌐', title: 'NRI-Optimised Banking', desc: 'Rent credited directly to NRE/NRO accounts, Form 15CA/15CB for repatriation, TDS certificates, and coordination with your CA for ITR filing.' },
]

const TESTIMONIALS = [
  { name: 'Suresh Iyer', location: '🇺🇸 San Jose, USA', property: '3BHK flat, Bengaluru', text: 'I have been with VDesiConnect Property Management for 3 years. Not once have I had to worry about my Bengaluru flat. Rent comes in every month and the reports are detailed. Absolutely worth it.', rating: 5 },
  { name: 'Deepa Nair', location: '🇬🇧 London, UK', property: '2BHK apartment, Kochi', text: 'Finding trustworthy people to manage my mother\'s house after she passed was my biggest worry. VDesiConnect handled everything — tenant, repairs, taxes — with full transparency. Highly recommend.', rating: 5 },
  { name: 'Amit Sharma', location: '🇦🇪 Dubai, UAE', property: '4BHK villa, Delhi NCR', text: 'The dashboard is excellent — I can see every transaction, every inspection photo, every repair bill. I feel completely in control of my property from 2,000 km away.', rating: 5 },
]

const FAQS = [
  { q: 'Can I enroll my property if it is currently vacant?', a: 'Yes. In fact, we recommend enrolling before you have a tenant. We will source, vet, and place the right tenant for you as part of our Professional and Premium plans. For vacant properties, we typically find quality tenants within 3–6 weeks depending on the city and property type.' },
  { q: 'How is rent transferred to me if I am abroad?', a: 'Rent collected is deposited into your designated NRO or NRE bank account in India. If you need to repatriate funds internationally, we assist with Form 15CA/15CB documentation and liaise with your bank. TDS deductions and certificates are also managed by our team.' },
  { q: 'What if a tenant causes damage or refuses to vacate?', a: 'Our rental agreements are legally sound and registered, which gives you full protection. In the unfortunate event of tenant default or refusal to vacate, our in-house legal team initiates the eviction process under applicable rent control laws. Security deposits are managed to cover minor damages.' },
  { q: 'Do I need to be in India to sign any documents?', a: 'No. All documents — including rental agreements and power of attorney (if needed) — can be executed remotely. We use e-signing for agreements and guide you through notarised POA procedures if required for specific transactions. Everything is handled without requiring your physical presence in India.' },
  { q: 'How often will I receive updates about my property?', a: 'You receive a monthly financial report with all income and expenses. Inspection reports with photos and videos are sent quarterly (Professional) or monthly (Premium). For any maintenance or emergency, you are notified immediately via WhatsApp and email with full details and cost estimates before any work begins.' },
  { q: 'Is there a long-term contract I need to sign?', a: 'Our management agreement is for a minimum period of 6 months — enough time to onboard your property, place a tenant, and demonstrate our value. After that, it continues on a monthly basis and you can cancel with 30 days\' notice. There is no long-term lock-in after the initial term.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`pm-faq-item${open ? ' pm-faq-item--open' : ''}`}>
      <button className="pm-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="pm-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="pm-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Propertymanagement = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', type: '', plan: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="pm-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pm-hero">
        <div className="pm-hero__overlay" />
        <div className="container-custom pm-hero__inner">
          <div className="pm-hero__content">
            <span className="pm-hero__eyebrow">🏘️ Property Management</span>
            <h1 className="pm-hero__title">
              Your Indian Property,<br className="pm-hero__br" /> Expertly Managed from Abroad
            </h1>
            <p className="pm-hero__sub">
              Trusted property management for NRIs across 50+ Indian cities.
              Tenant sourcing, rent collection, maintenance, legal support —
              all handled by local experts while you live abroad with complete peace of mind.
            </p>
            <div className="pm-hero__actions">
              <a href="#plans" className="pm-hero__btn pm-hero__btn--primary">View Plans & Pricing</a>
              <a href="#enquire" className="pm-hero__btn pm-hero__btn--outline">Get a Free Consultation</a>
            </div>
            <div className="pm-hero__pills">
              <span>📍 Local Managers On-Ground</span>
              <span>💸 Guaranteed Rent Option</span>
              <span>📱 Live Owner Dashboard</span>
              <span>⚖️ In-House Legal Team</span>
            </div>
          </div>
          <div className="pm-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="pm-hero__stat">
                <span className="pm-hero__stat-num">{s.number}</span>
                <span className="pm-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom pm-content">

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="pm-section">
          <p className="pm-section__eyebrow">What We Handle</p>
          <h2 className="pm-section__title">Complete End-to-End Property Management</h2>
          <div className="pm-services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="pm-service-card">
                <span className="pm-service-card__icon">{s.icon}</span>
                <h3 className="pm-service-card__title">{s.title}</h3>
                <p className="pm-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Cities ───────────────────────────────────────────────────── */}
        <section className="pm-section">
          <p className="pm-section__eyebrow">Where We Operate</p>
          <h2 className="pm-section__title">50+ Cities Across India</h2>
          <div className="pm-cities-grid">
            {CITIES.map(c => (
              <div key={c.city} className="pm-city-card">
                <h3 className="pm-city-card__name">{c.city}</h3>
                <div className="pm-city-card__meta">
                  <span>🏠 {c.properties} properties</span>
                  <span>👤 {c.managers} managers</span>
                </div>
              </div>
            ))}
          </div>
          <p className="pm-cities-note">Not seeing your city? Contact us — we expand to new locations regularly based on demand.</p>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="pm-section">
          <p className="pm-section__eyebrow">The Process</p>
          <h2 className="pm-section__title">How It Works</h2>
          <div className="pm-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="pm-step">
                <div className="pm-step__left">
                  <div className="pm-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="pm-step__line" />}
                </div>
                <div className="pm-step__body">
                  <span className="pm-step__icon">{step.icon}</span>
                  <h3 className="pm-step__title">{step.title}</h3>
                  <p className="pm-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="pm-section">
          <p className="pm-section__eyebrow">Why VDesiConnect</p>
          <h2 className="pm-section__title">Why 3,000+ NRIs Trust Us</h2>
          <div className="pm-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="pm-why-card">
                <span className="pm-why-card__icon">{w.icon}</span>
                <h3 className="pm-why-card__title">{w.title}</h3>
                <p className="pm-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Plans ────────────────────────────────────────────────────── */}
        <section className="pm-section" id="plans">
          <p className="pm-section__eyebrow">Pricing</p>
          <h2 className="pm-section__title">Simple, Transparent Plans</h2>
          <div className="pm-plans-grid">
            {PLANS.map(p => (
              <div key={p.name} className={`pm-plan-card${p.highlight ? ' pm-plan-card--highlight' : ''}`}>
                {p.highlight && <div className="pm-plan-card__ribbon">Most Popular</div>}
                <h3 className="pm-plan-card__name">{p.name}</h3>
                <p className="pm-plan-card__desc">{p.desc}</p>
                <div className="pm-plan-card__price">
                  <span className="pm-plan-card__amount">{p.price}</span>
                  <span className="pm-plan-card__unit">{p.unit}</span>
                </div>
                <ul className="pm-plan-card__features">
                  {p.features.map(f => <li key={f}><span>✓</span>{f}</li>)}
                </ul>
                <a href="#enquire" className={`pm-plan-card__btn${p.highlight ? ' pm-plan-card__btn--primary' : ''}`}>{p.cta} →</a>
              </div>
            ))}
          </div>
          <p className="pm-plans-note">📌 All plans include a free initial property inspection and onboarding. Prices are per property per month. Multi-property discounts available.</p>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section className="pm-section">
          <p className="pm-section__eyebrow">What Clients Say</p>
          <h2 className="pm-section__title">Trusted by NRIs Worldwide</h2>
          <div className="pm-testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="pm-testimonial-card">
                <div className="pm-testimonial-card__stars">{'⭐'.repeat(t.rating)}</div>
                <p className="pm-testimonial-card__text">"{t.text}"</p>
                <div className="pm-testimonial-card__author">
                  <div className="pm-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="pm-testimonial-card__name">{t.name}</p>
                    <p className="pm-testimonial-card__meta">{t.location} · {t.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Enquiry form ─────────────────────────────────────────────── */}
        <section className="pm-section" id="enquire">
          <p className="pm-section__eyebrow">Get Started</p>
          <h2 className="pm-section__title">Enquire About Your Property</h2>
          <div className="pm-enquire-wrap">

            <div className="pm-enquire-info">
              <h3>We'll Get Back to You in 24 Hours</h3>
              <p>Share your property details and we will assign a local manager in your city within <strong>one business day</strong>. The initial consultation and property inspection are <strong>completely free</strong>.</p>
              <ul className="pm-enquire-info__list">
                <li><span>🆓</span> Free initial inspection & onboarding</li>
                <li><span>📍</span> Local managers in 50+ cities</li>
                <li><span>📱</span> WhatsApp + email updates</li>
                <li><span>💸</span> Rent credited to your NRE/NRO account</li>
                <li><span>⚖️</span> Legal support included</li>
              </ul>
              <div className="pm-enquire-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:property@vdesiconnect.com">📧 property@vdesiconnect.com</a>
              </div>
            </div>

            <div className="pm-form-wrap">
              {sent ? (
                <div className="pm-form__success">
                  <span>🏠</span>
                  <h3>Enquiry Received!</h3>
                  <p>Thank you, <strong>{form.name}</strong>. A property specialist will reach out to <strong>{form.email}</strong> within 24 hours to discuss your property and next steps.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', city: '', type: '', plan: '', message: '' }) }}>
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form className="pm-form" onSubmit={handleSubmit}>
                  <div className="pm-form__row">
                    <div className="pm-form__field">
                      <label>Your Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Rajesh Menon" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="pm-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="rajesh@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="pm-form__row">
                    <div className="pm-form__field">
                      <label>WhatsApp / Phone</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="pm-form__field">
                      <label>Property City</label>
                      <select name="city" value={form.city} onChange={handleChange}>
                        <option value="">Select city…</option>
                        {CITIES.map(c => <option key={c.city}>{c.city}</option>)}
                        <option>Other City</option>
                      </select>
                    </div>
                  </div>
                  <div className="pm-form__row">
                    <div className="pm-form__field">
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
                        <option>Multiple Properties</option>
                      </select>
                    </div>
                    <div className="pm-form__field">
                      <label>Preferred Plan</label>
                      <select name="plan" value={form.plan} onChange={handleChange}>
                        <option value="">Not sure yet…</option>
                        <option>Essential (₹1,499/mo)</option>
                        <option>Professional (₹2,999/mo)</option>
                        <option>Premium (₹4,999/mo)</option>
                      </select>
                    </div>
                  </div>
                  <div className="pm-form__field">
                    <label>Tell Us About Your Property</label>
                    <textarea name="message" rows={4} placeholder="e.g. I own a 2BHK flat in Indiranagar, Bengaluru. Currently vacant. Looking for reliable tenant management and rent collection. I am based in the US." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="pm-form__submit">Send Enquiry →</button>
                  <p className="pm-form__note">🔒 Your details are kept strictly confidential and never shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="pm-section">
          <p className="pm-section__eyebrow">FAQs</p>
          <h2 className="pm-section__title">Frequently Asked Questions</h2>
          <div className="pm-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="pm-cta">
        <div className="container-custom pm-cta__inner">
          <span className="pm-cta__emoji">🏘️</span>
          <h2 className="pm-cta__title">Your Property Deserves the Best Care</h2>
          <p className="pm-cta__sub">
            Stop worrying about your Indian property from thousands of miles away.
            Let our on-ground experts handle everything — so you can enjoy the returns
            without the stress.
          </p>
          <a href="#enquire" className="pm-cta__btn">Get a Free Consultation</a>
          <p className="pm-cta__note">
            📞 <strong>+91 800 123 4567</strong>&nbsp;·&nbsp;
            📧 <strong>property@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Propertymanagement
