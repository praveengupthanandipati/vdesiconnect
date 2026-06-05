import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '🩺', title: 'Online Consultations', desc: 'Connect with experienced Indian doctors via video or phone — from the comfort of your home, in any time zone.' },
  { icon: '🏥', title: 'Medical Tourism', desc: 'Plan your treatment trip to India. We assist with hospital selection, appointments, travel, and accommodation.' },
  { icon: '💊', title: 'Second Opinion', desc: 'Get a second medical opinion from top Indian specialists before making critical treatment decisions.' },
  { icon: '🧬', title: 'Specialist Referrals', desc: 'Access a curated network of cardiologists, oncologists, orthopaedics, neurologists, and 30+ specialties.' },
  { icon: '🌿', title: 'Ayurveda & Wellness', desc: 'Consult certified Ayurvedic practitioners for holistic treatment, diet plans, and preventive care.' },
  { icon: '🧠', title: 'Mental Health Support', desc: 'Speak with empathetic counsellors and psychiatrists who understand the cultural challenges of living abroad.' },
  { icon: '📋', title: 'Medical Records Help', desc: 'Assistance with organising, translating, and transferring medical records between countries.' },
  { icon: '🛡️', title: 'Health Insurance Guidance', desc: 'Get expert advice on NRI health insurance, visitor insurance, and cross-border coverage options.' },
]

const SPECIALTIES = [
  'Cardiology', 'Oncology', 'Orthopaedics', 'Neurology', 'Gynaecology',
  'Paediatrics', 'Dermatology', 'Ophthalmology', 'Dentistry', 'Endocrinology',
  'Gastroenterology', 'Nephrology', 'Pulmonology', 'Urology', 'Psychiatry',
  'Ayurveda', 'Homeopathy', 'Physiotherapy', 'Nutrition & Dietetics', 'General Surgery',
]

const HOW_IT_WORKS = [
  { step: '01', icon: '📝', title: 'Submit Your Request', desc: 'Fill in our simple form with your medical concern, preferred language, and time zone. No prior registration needed.' },
  { step: '02', icon: '🔍', title: 'We Match You', desc: 'Our team reviews your request and connects you with the most suitable verified doctor or specialist within 24 hours.' },
  { step: '03', icon: '📅', title: 'Book an Appointment', desc: 'Choose a convenient slot for a video call, phone consultation, or in-person visit if you are travelling to India.' },
  { step: '04', icon: '💬', title: 'Consult & Get Care', desc: 'Attend your consultation and receive a digital prescription, detailed report, and follow-up plan in your language.' },
  { step: '05', icon: '🔁', title: 'Ongoing Support', desc: 'Our team stays with you — scheduling follow-ups, answering queries, and coordinating between providers as needed.' },
]

const STATS = [
  { number: '500+', label: 'Verified Doctors' },
  { number: '30+',  label: 'Specialties Covered' },
  { number: '50+',  label: 'Countries Served' },
  { number: '10K+', label: 'Patients Helped' },
]

const WHY_US = [
  { icon: '✅', title: 'Verified & Trusted', desc: 'Every doctor in our network is verified, licensed, and reviewed. No unqualified providers — ever.' },
  { icon: '🌐', title: 'Multilingual Support', desc: 'Consultations available in Hindi, Telugu, Tamil, Kannada, Malayalam, Gujarati, Punjabi, and English.' },
  { icon: '🕐', title: 'Flexible Timings', desc: 'Doctors available across IST, EST, GST, and other time zones — evenings, weekends, and emergencies.' },
  { icon: '🔒', title: 'Private & Confidential', desc: 'All consultations and medical records are fully encrypted and handled with strict confidentiality.' },
  { icon: '💸', title: 'Affordable Fees', desc: 'Transparent pricing — no hidden charges. Consultation fees are a fraction of what you\'d pay locally abroad.' },
  { icon: '🤝', title: 'End-to-End Assistance', desc: 'From booking to follow-up, our care coordinators are available to guide you at every step of your journey.' },
]

const FAQS = [
  { q: 'Are the doctors on VDesiConnect licensed and verified?', a: 'Yes. Every doctor and specialist in our network holds a valid medical license from the Medical Council of India (MCI) or the equivalent state body. We perform background verification before any doctor is listed.' },
  { q: 'What languages are consultations available in?', a: 'Consultations are available in Hindi, English, Telugu, Tamil, Kannada, Malayalam, Gujarati, Punjabi, Bengali, and more. When you submit your request, just mention your preferred language and we will match you accordingly.' },
  { q: 'How do I get my prescription after an online consultation?', a: 'A digital prescription is sent to your registered email within 1 hour of your consultation. For international patients, our team can also help with medication sourcing or guide you on equivalent medicines available in your country.' },
  { q: 'Can I use VDesiConnect for emergency medical situations?', a: 'VDesiConnect is best suited for non-emergency consultations, second opinions, and planned care. In a medical emergency, please call your local emergency number (911, 999, 112, etc.) immediately.' },
  { q: 'How does medical tourism assistance work?', a: 'Tell us your diagnosis and treatment preference. Our coordinators identify the best hospitals and specialists in India, arrange appointments, assist with visa and travel planning, and coordinate your hospital stay — so you can focus on getting better.' },
  { q: 'Is my medical information kept private?', a: 'Absolutely. All data shared on VDesiConnect is encrypted and stored securely. We never share your medical information with any third party without your explicit consent. Our practices comply with applicable data protection laws.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ma-faq-item${open ? ' ma-faq-item--open' : ''}`}>
      <button className="ma-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="ma-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="ma-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Medicalassitance = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', concern: '', language: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="ma-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="ma-hero">
        <div className="ma-hero__overlay" />
        <div className="container-custom ma-hero__inner">
          <div className="ma-hero__content">
            <span className="ma-hero__eyebrow">🩺 Medical Assistance</span>
            <h1 className="ma-hero__title">
              Quality Indian Healthcare,<br className="ma-hero__br" /> Wherever You Are
            </h1>
            <p className="ma-hero__sub">
              Connect with verified Indian doctors and specialists from anywhere in the world.
              Online consultations, medical tourism support, second opinions, and more —
              all in your language.
            </p>
            <div className="ma-hero__actions">
              <a href="#book" className="ma-hero__btn ma-hero__btn--primary">Book a Consultation</a>
              <a href="#how-it-works" className="ma-hero__btn ma-hero__btn--outline">How It Works</a>
            </div>
            <div className="ma-hero__pills">
              <span>✅ Verified Doctors Only</span>
              <span>🌐 Multilingual Support</span>
              <span>🔒 100% Confidential</span>
            </div>
          </div>
          <div className="ma-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="ma-hero__stat">
                <span className="ma-hero__stat-num">{s.number}</span>
                <span className="ma-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom ma-content">

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="ma-section">
          <p className="ma-section__eyebrow">What We Offer</p>
          <h2 className="ma-section__title">Comprehensive Medical Support for the Diaspora</h2>
          <div className="ma-services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="ma-service-card">
                <span className="ma-service-card__icon">{s.icon}</span>
                <h3 className="ma-service-card__title">{s.title}</h3>
                <p className="ma-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="ma-section" id="how-it-works">
          <p className="ma-section__eyebrow">Step by Step</p>
          <h2 className="ma-section__title">How It Works</h2>
          <div className="ma-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="ma-step">
                <div className="ma-step__left">
                  <div className="ma-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="ma-step__line" />}
                </div>
                <div className="ma-step__body">
                  <span className="ma-step__icon">{step.icon}</span>
                  <h3 className="ma-step__title">{step.title}</h3>
                  <p className="ma-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Specialties ──────────────────────────────────────────────── */}
        <section className="ma-section">
          <p className="ma-section__eyebrow">Medical Specialties</p>
          <h2 className="ma-section__title">30+ Specialties Available</h2>
          <div className="ma-specialties-wrap">
            {SPECIALTIES.map(s => (
              <span key={s} className="ma-specialty-tag">{s}</span>
            ))}
          </div>
        </section>

        {/* ── Why Us ───────────────────────────────────────────────────── */}
        <section className="ma-section">
          <p className="ma-section__eyebrow">Why VDesiConnect</p>
          <h2 className="ma-section__title">Healthcare You Can Trust</h2>
          <div className="ma-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="ma-why-card">
                <span className="ma-why-card__icon">{w.icon}</span>
                <h3 className="ma-why-card__title">{w.title}</h3>
                <p className="ma-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Book form ─────────────────────────────────────────────────── */}
        <section className="ma-section" id="book">
          <p className="ma-section__eyebrow">Get Started</p>
          <h2 className="ma-section__title">Book a Consultation</h2>
          <div className="ma-book-wrap">
            <div className="ma-book-info">
              <h3>Talk to a Doctor Today</h3>
              <p>Fill in the form and our care coordinator will contact you within <strong>24 hours</strong> to confirm your appointment.</p>
              <ul className="ma-book-info__list">
                <li><span>📞</span> Phone & video consultations available</li>
                <li><span>🕐</span> Flexible slots across all time zones</li>
                <li><span>💬</span> Choose your preferred language</li>
                <li><span>📋</span> Get a digital prescription & report</li>
                <li><span>🔁</span> Free follow-up coordination</li>
              </ul>
              <div className="ma-book-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:medical@vdesiconnect.com">📧 medical@vdesiconnect.com</a>
              </div>
            </div>

            <div className="ma-book-form-wrap">
              {sent ? (
                <div className="ma-form__success">
                  <span>🎉</span>
                  <h3>Request Received!</h3>
                  <p>Thanks, <strong>{form.name}</strong>. Our care coordinator will reach you at <strong>{form.email}</strong> within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', concern: '', language: '', message: '' }) }}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="ma-form" onSubmit={handleSubmit}>
                  <div className="ma-form__row">
                    <div className="ma-form__field">
                      <label>Full Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Priya Sharma" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="ma-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="priya@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="ma-form__row">
                    <div className="ma-form__field">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="ma-form__field">
                      <label>Preferred Language</label>
                      <select name="language" value={form.language} onChange={handleChange}>
                        <option value="">Select language…</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Telugu</option>
                        <option>Tamil</option>
                        <option>Kannada</option>
                        <option>Malayalam</option>
                        <option>Gujarati</option>
                        <option>Punjabi</option>
                        <option>Bengali</option>
                      </select>
                    </div>
                  </div>
                  <div className="ma-form__field">
                    <label>Medical Concern / Specialty</label>
                    <select name="concern" value={form.concern} onChange={handleChange}>
                      <option value="">Select concern…</option>
                      <option>General Consultation</option>
                      <option>Second Opinion</option>
                      <option>Medical Tourism Planning</option>
                      <option>Cardiology</option>
                      <option>Oncology</option>
                      <option>Orthopaedics</option>
                      <option>Gynaecology</option>
                      <option>Paediatrics</option>
                      <option>Mental Health</option>
                      <option>Ayurveda & Wellness</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="ma-form__field">
                    <label>Tell Us More</label>
                    <textarea name="message" rows={4} placeholder="Briefly describe your medical concern or what kind of help you need…" value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="ma-form__submit">Request Consultation →</button>
                  <p className="ma-form__note">🔒 Your information is fully confidential and never shared without your consent.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="ma-section">
          <p className="ma-section__eyebrow">FAQs</p>
          <h2 className="ma-section__title">Frequently Asked Questions</h2>
          <div className="ma-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="ma-cta">
        <div className="container-custom ma-cta__inner">
          <span className="ma-cta__emoji">❤️</span>
          <h2 className="ma-cta__title">Your Health Doesn't Stop at Borders</h2>
          <p className="ma-cta__sub">
            VDesiConnect is here to make sure distance never stands between
            you and quality Indian healthcare. Book your consultation today.
          </p>
          <a href="#book" className="ma-cta__btn">Book a Consultation</a>
          <p className="ma-cta__note">
            Need help right now? Call us at <strong>+91 800 123 4567</strong> or
            WhatsApp us at <strong>+91 800 123 4567</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Medicalassitance
