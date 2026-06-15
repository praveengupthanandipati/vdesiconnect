import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '📋', title: 'Visa Application Assistance', desc: 'End-to-end help preparing and filing visa applications — DS-160, UK VAF, Australian online forms, and more — reviewed by certified consultants before submission.' },
  { icon: '🎓', title: 'Student Visa Support', desc: 'Complete guidance for F-1 (USA), Tier 4/Student Route (UK), Canadian Study Permit, and Australian Student Visa — from university acceptance to visa approval.' },
  { icon: '💼', title: 'Work Visa & H-1B Guidance', desc: 'Expert support for H-1B, L-1, O-1 (USA), Skilled Worker (UK), PR-skilled (Canada/Australia) and other employment-based visa categories.' },
  { icon: '👨‍👩‍👧', title: 'Family & Dependent Visas', desc: 'Bring your spouse and children to join you abroad. We handle dependent visa applications for the US, UK, Canada, Australia, and 30+ other countries.' },
  { icon: '🔄', title: 'Visa Renewal & Extension', desc: 'Timely renewal and status extension filings — H-1B extensions, UK visa renewals, Canadian PR renewals, and Australian visa extensions — handled with zero delay.' },
  { icon: '🎤', title: 'Visa Interview Preparation', desc: 'Mock interview sessions, common question prep, document review, and real-time coaching — so you walk into your consulate appointment confident and ready.' },
  { icon: '🪪', title: 'OCI & PIO Card Services', desc: 'Assistance with OCI card applications, renewals, and lost-card replacement for Indian citizens and their descendants living abroad.' },
  { icon: '📄', title: 'Document Attestation & Apostille', desc: 'Legalisation, notarisation, MEA apostille, and embassy attestation for Indian documents — required for immigration and overseas employment.' },
  { icon: '✈️', title: 'Travel Authorisation (eVisa / ETA)', desc: 'Fast eVisa and Electronic Travel Authority applications for Australia, Canada, UK, UAE, and 50+ countries. Quick turnaround, error-free submissions.' },
]

const DESTINATIONS = [
  { flag: '🇺🇸', country: 'United States',   popular: ['H-1B Work Visa', 'F-1 Student Visa', 'B1/B2 Visitor', 'Green Card (GC)'] },
  { flag: '🇬🇧', country: 'United Kingdom',   popular: ['Skilled Worker Visa', 'Student Route', 'Family Visa', 'ILR'] },
  { flag: '🇨🇦', country: 'Canada',           popular: ['Express Entry (PR)', 'Study Permit', 'Work Permit', 'PNP'] },
  { flag: '🇦🇺', country: 'Australia',         popular: ['Skilled Independent (189)', 'Student Visa (500)', 'TSS 482', 'PR Pathway'] },
  { flag: '🇦🇪', country: 'UAE',               popular: ['Employment Visa', 'Investor Visa', 'Freelance Permit', 'Golden Visa'] },
  { flag: '🇩🇪', country: 'Germany',           popular: ['Job Seeker Visa', 'EU Blue Card', 'Student Visa', 'Family Reunion'] },
  { flag: '🇸🇬', country: 'Singapore',         popular: ['Employment Pass', 'S Pass', 'Dependant Pass', 'PR Application'] },
  { flag: '🇳🇿', country: 'New Zealand',       popular: ['Skilled Migrant', 'Work Visa', 'Student Visa', 'Visitor Visa'] },
]

const STATS = [
  { number: '15,000+', label: 'Applications Supported' },
  { number: '95+',     label: 'Countries Covered' },
  { number: '98%',     label: 'Success Rate' },
  { number: '500+',    label: 'Immigration Experts' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '💬', title: 'Free Initial Consultation', desc: 'Speak to a certified immigration consultant who evaluates your profile, explains eligible visa options, and outlines the best pathway for your goals.' },
  { step: '02', icon: '📋', title: 'Personalised Document Checklist', desc: 'Receive a tailored checklist of required documents — translated, attested, or apostilled as needed — with clear instructions for each item.' },
  { step: '03', icon: '✍️', title: 'Application Preparation & Review', desc: 'Our experts prepare, fill, and review your complete application — forms, cover letters, financial proofs, and supporting documents — before you sign.' },
  { step: '04', icon: '📬', title: 'Submission & Real-Time Tracking', desc: 'We submit to the correct consulate or online portal, provide the receipt, and track your application status — sending you updates at every milestone.' },
  { step: '05', icon: '🎉', title: 'Visa Decision & Next Steps', desc: 'On approval, we guide you on visa stamping, travel requirements, and what to carry. If there are queries or refusals, we handle the response or re-filing.' },
]

const WHY_US = [
  { icon: '🏅', title: 'Certified Consultants Only', desc: 'All our advisors are ICCRC-registered (Canada), OISC-regulated (UK), MARA-registered (Australia), or equivalent certified practitioners in their respective countries.' },
  { icon: '🌐', title: 'Country-Specific Expertise', desc: 'We do not offer generic advice. Each consultant specialises in one or two destination countries and stays current on policy changes, rule updates, and processing times.' },
  { icon: '📞', title: 'Dedicated Case Manager', desc: 'Every client is assigned a single point of contact who manages your case end-to-end — no more being passed between departments or explaining your situation repeatedly.' },
  { icon: '🔒', title: 'Secure Document Handling', desc: 'All passport copies, financial statements, and personal documents are handled with bank-grade encryption, stored securely, and never shared with third parties.' },
  { icon: '🎤', title: 'Interview Coaching Included', desc: 'Most visa categories require consulate interviews. Our consultants run full mock interview sessions — including difficult or trick questions — to ensure you are fully prepared.' },
  { icon: '🔄', title: 'Refusal Rescue Support', desc: 'If your visa was refused by another agent or self-filed, our refusal rescue team analyses the rejection, addresses the weaknesses, and re-files a stronger application.' },
]

const TESTIMONIALS = [
  { name: 'Sanjay Kulkarni', location: '🇮🇳 → 🇺🇸 USA', visa: 'H-1B Work Visa', text: 'Got my H-1B approved in the first lottery attempt. VDesiConnect\'s team handled every document, coordinated with my employer\'s HR, and prepped me for the RFE that came. Could not have done it without them.', rating: 5 },
  { name: 'Pooja Nair',      location: '🇮🇳 → 🇬🇧 UK', visa: 'Skilled Worker Visa', text: 'The UK immigration rules changed just as I applied. VDesiConnect\'s UK specialist updated my application immediately and kept everything on track. My visa came through in 10 working days.', rating: 5 },
  { name: 'Arjun Reddy',    location: '🇮🇳 → 🇨🇦 Canada', visa: 'Express Entry PR', text: 'My Express Entry score was borderline. The team advised me on getting a provincial nomination, boosted my CRS score, and I received my ITA within 3 months. Now a permanent resident of Canada!', rating: 5 },
]

const FAQS = [
  { q: 'Do I need a consultant to apply for a visa — can\'t I do it myself?', a: 'You can apply yourself for many visa types, especially tourist or visitor visas. However, work visas, PR pathways, and student visas involve complex requirements, strict documentation standards, and often change without notice. A mistake or missing document can lead to delays or refusals that affect future applications. Our consultants eliminate these risks and significantly improve your approval odds.' },
  { q: 'What is the difference between a visa and a residence permit?', a: 'A visa is a permission to enter a country for a defined purpose and duration. A residence permit (or leave to remain) allows you to live in a country for an extended period, often after entry. Some countries issue both separately; others combine them. Our consultants explain exactly which document you need based on your specific situation.' },
  { q: 'My visa was refused before — can you still help me?', a: 'Yes. A prior refusal does not permanently bar you from applying — but it does need to be declared in future applications. Our refusal rescue team reviews the original refusal letter, identifies the weaknesses, builds a stronger case addressing those concerns, and re-files. We have successfully overturned refusals for clients who had been rejected 2–3 times before approaching us.' },
  { q: 'How long does the visa process typically take?', a: 'Processing times vary significantly by country, visa type, and consulate. Tourist visas can take 5–15 working days; student and work visas typically take 4–12 weeks; PR pathways can take 6–18 months. We give you a realistic timeline at the outset and monitor your application to flag any delays early. Priority processing options are available for some visa categories.' },
  { q: 'Can you help with visa applications for countries other than the US, UK, and Canada?', a: 'Yes. We cover 95+ destination countries including Australia, UAE, Germany, Singapore, New Zealand, Netherlands, Japan, and more. Each country has dedicated specialists. When you contact us, specify the destination country and visa type and we will connect you with the right expert.' },
  { q: 'What documents are typically required for a work visa application?', a: 'Requirements vary by country, but commonly include: a valid passport, employer\'s sponsorship letter or job offer, educational certificates, professional qualification proofs, bank statements, police clearance certificate, and medical certificate. Our consultants provide a personalised checklist for your specific visa category and destination within 24 hours of your initial consultation.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`vs-faq-item${open ? ' vs-faq-item--open' : ''}`}>
      <button className="vs-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="vs-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="vs-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Visasupportservice = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', visa: '', status: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="vs-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="vs-hero">
        <div className="vs-hero__overlay" />
        <div className="container-custom vs-hero__inner">
          <div className="vs-hero__content">
            <span className="vs-hero__eyebrow">🛂 Visa Support Services</span>
            <h1 className="vs-hero__title">
              Expert Visa Guidance<br className="vs-hero__br" /> for the Indian Diaspora
            </h1>
            <p className="vs-hero__sub">
              Certified immigration consultants helping NRIs and Indian professionals
              with work visas, student visas, family reunification, PR pathways,
              OCI cards, and more — across 95+ countries.
            </p>
            <div className="vs-hero__actions">
              <a href="#consult" className="vs-hero__btn vs-hero__btn--primary">Get Free Consultation</a>
              <a href="#services" className="vs-hero__btn vs-hero__btn--outline">Explore Services</a>
            </div>
            <div className="vs-hero__pills">
              <span>🏅 Certified Consultants</span>
              <span>🌐 95+ Countries</span>
              <span>✅ 98% Success Rate</span>
              <span>🔄 Refusal Rescue Support</span>
            </div>
          </div>
          <div className="vs-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="vs-hero__stat">
                <span className="vs-hero__stat-num">{s.number}</span>
                <span className="vs-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom vs-content">

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="vs-section" id="services">
          <p className="vs-section__eyebrow">What We Offer</p>
          <h2 className="vs-section__title">Complete Visa & Immigration Services</h2>
          <div className="vs-services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="vs-service-card">
                <span className="vs-service-card__icon">{s.icon}</span>
                <h3 className="vs-service-card__title">{s.title}</h3>
                <p className="vs-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Destinations ─────────────────────────────────────────────── */}
        <section className="vs-section">
          <p className="vs-section__eyebrow">Where We Help</p>
          <h2 className="vs-section__title">Top Destinations for Indian Applicants</h2>
          <div className="vs-dest-grid">
            {DESTINATIONS.map(d => (
              <div key={d.country} className="vs-dest-card">
                <div className="vs-dest-card__head">
                  <span className="vs-dest-card__flag">{d.flag}</span>
                  <h3 className="vs-dest-card__country">{d.country}</h3>
                </div>
                <ul className="vs-dest-card__visas">
                  {d.popular.map(v => <li key={v}>{v}</li>)}
                </ul>
                <a href="#consult" className="vs-dest-card__link">Get Guidance →</a>
              </div>
            ))}
          </div>
          <p className="vs-dest-note">Not seeing your destination? We cover 95+ countries — contact us and we'll connect you with the right specialist.</p>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="vs-section">
          <p className="vs-section__eyebrow">Step by Step</p>
          <h2 className="vs-section__title">How It Works</h2>
          <div className="vs-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="vs-step">
                <div className="vs-step__left">
                  <div className="vs-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="vs-step__line" />}
                </div>
                <div className="vs-step__body">
                  <span className="vs-step__icon">{step.icon}</span>
                  <h3 className="vs-step__title">{step.title}</h3>
                  <p className="vs-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="vs-section">
          <p className="vs-section__eyebrow">Why VDesiConnect</p>
          <h2 className="vs-section__title">Why Thousands of Indians Trust Us</h2>
          <div className="vs-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="vs-why-card">
                <span className="vs-why-card__icon">{w.icon}</span>
                <h3 className="vs-why-card__title">{w.title}</h3>
                <p className="vs-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section className="vs-section">
          <p className="vs-section__eyebrow">Success Stories</p>
          <h2 className="vs-section__title">Visas Approved. Lives Changed.</h2>
          <div className="vs-testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="vs-testimonial-card">
                <div className="vs-testimonial-card__stars">{'⭐'.repeat(t.rating)}</div>
                <p className="vs-testimonial-card__text">"{t.text}"</p>
                <div className="vs-testimonial-card__author">
                  <div className="vs-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="vs-testimonial-card__name">{t.name}</p>
                    <p className="vs-testimonial-card__meta">{t.location} · {t.visa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Consultation form ─────────────────────────────────────────── */}
        <section className="vs-section" id="consult">
          <p className="vs-section__eyebrow">Get Started</p>
          <h2 className="vs-section__title">Book a Free Visa Consultation</h2>
          <div className="vs-consult-wrap">

            <div className="vs-consult-info">
              <h3>Speak to a Certified Consultant</h3>
              <p>Our experts respond within <strong>24 hours</strong>. The first consultation is completely free — no obligation, no hidden charges.</p>
              <ul className="vs-consult-info__list">
                <li><span>📞</span> Phone, video, or WhatsApp call</li>
                <li><span>🔒</span> All documents handled confidentially</li>
                <li><span>🌐</span> Specialists for 95+ destination countries</li>
                <li><span>🎤</span> Interview coaching included</li>
                <li><span>🔄</span> Refusal rescue available</li>
              </ul>
              <div className="vs-consult-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:visa@vdesiconnect.com">📧 visa@vdesiconnect.com</a>
              </div>
            </div>

            <div className="vs-form-wrap">
              {sent ? (
                <div className="vs-form__success">
                  <span>🎉</span>
                  <h3>Consultation Requested!</h3>
                  <p>Thanks, <strong>{form.name}</strong>! A certified visa consultant will contact you at <strong>{form.email}</strong> within 24 hours to discuss your case.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', country: '', visa: '', status: '', message: '' }) }}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="vs-form" onSubmit={handleSubmit}>
                  <div className="vs-form__row">
                    <div className="vs-form__field">
                      <label>Full Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Amit Sharma" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="vs-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="amit@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="vs-form__row">
                    <div className="vs-form__field">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="vs-form__field">
                      <label>Destination Country</label>
                      <select name="country" value={form.country} onChange={handleChange}>
                        <option value="">Select country…</option>
                        {DESTINATIONS.map(d => <option key={d.country}>{d.country}</option>)}
                        <option>Other Country</option>
                      </select>
                    </div>
                  </div>
                  <div className="vs-form__row">
                    <div className="vs-form__field">
                      <label>Visa Type</label>
                      <select name="visa" value={form.visa} onChange={handleChange}>
                        <option value="">Select visa type…</option>
                        <option>Work Visa (H-1B / Skilled Worker)</option>
                        <option>Student Visa</option>
                        <option>Visitor / Tourist Visa</option>
                        <option>Family / Dependent Visa</option>
                        <option>Permanent Residence (PR)</option>
                        <option>Business Visa</option>
                        <option>OCI / PIO Card</option>
                        <option>Visa Renewal / Extension</option>
                        <option>eVisa / Travel Authorisation</option>
                        <option>Refusal Rescue</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="vs-form__field">
                      <label>Current Status</label>
                      <select name="status" value={form.status} onChange={handleChange}>
                        <option value="">Select status…</option>
                        <option>Indian Citizen (in India)</option>
                        <option>NRI — on valid work visa</option>
                        <option>NRI — on student visa</option>
                        <option>OCI / PIO Cardholder</option>
                        <option>PR Holder</option>
                        <option>Visa refused / expired</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="vs-form__field">
                    <label>Tell Us About Your Case</label>
                    <textarea name="message" rows={4} placeholder="e.g. I have an H-1B sponsorship from a US company and need help with the lottery registration and full application process. I am currently in India on a valid passport." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="vs-form__submit">Request Free Consultation →</button>
                  <p className="vs-form__note">🔒 All information is kept strictly confidential. Your documents are never shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="vs-section">
          <p className="vs-section__eyebrow">FAQs</p>
          <h2 className="vs-section__title">Frequently Asked Questions</h2>
          <div className="vs-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="vs-cta">
        <div className="container-custom vs-cta__inner">
          <span className="vs-cta__emoji">🛂</span>
          <h2 className="vs-cta__title">Your Visa Journey Starts Here</h2>
          <p className="vs-cta__sub">
            Don't leave your visa application to chance. Let VDesiConnect's
            certified immigration experts guide you — from the first form to
            the final stamp.
          </p>
          <a href="#consult" className="vs-cta__btn">Book a Free Consultation</a>
          <p className="vs-cta__note">
            📞 <strong>+91 800 123 4567</strong>&nbsp;·&nbsp;
            📧 <strong>visa@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Visasupportservice
