import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const CHANNELS = [
  {
    icon: '📧',
    label: 'Email Us',
    value: 'support@vdesiconnect.com',
    note: 'We reply within 2 hours on business days.',
    href: 'mailto:support@vdesiconnect.com',
    color: 'green',
  },
  {
    icon: '📞',
    label: 'Call Us',
    value: '+91 800 123 4567',
    note: 'Mon – Sat · 9 am – 7 pm IST',
    href: 'tel:+918001234567',
    color: 'blue',
  },
  {
    icon: '💬',
    label: 'Live Chat',
    value: 'Chat on the site',
    note: 'Available Mon – Sat · 9 am – 9 pm IST',
    href: '#',
    color: 'orange',
  },
  {
    icon: '📱',
    label: 'WhatsApp',
    value: '+91 800 123 4567',
    note: 'Quick replies for order queries.',
    href: 'https://wa.me/918001234567',
    color: 'teal',
  },
]

const OFFICES = [
  {
    city: 'Hyderabad',
    tag: 'Headquarters',
    address: 'No. 42, Tech Park, Madhapur,\nHyderabad — 500081,\nTelangana, India',
    phone: '+91 800 123 4567',
    email: 'hyderabad@vdesiconnect.com',
    hours: 'Mon – Sat · 9 am – 6 pm IST',
    mapQuery: 'Madhapur+Hyderabad+India',
  },
  {
    city: 'Mumbai',
    tag: 'Regional Office',
    address: 'Level 5, Infinity Tower, BKC,\nBandra (East), Mumbai — 400051,\nMaharashtra, India',
    phone: '+91 800 234 5678',
    email: 'mumbai@vdesiconnect.com',
    hours: 'Mon – Sat · 9 am – 6 pm IST',
    mapQuery: 'BKC+Bandra+Mumbai+India',
  },
  {
    city: 'Dubai',
    tag: 'International Office',
    address: 'Office 812, Cluster D,\nJumeirah Lake Towers,\nDubai, UAE',
    phone: '+971 4 123 4567',
    email: 'dubai@vdesiconnect.com',
    hours: 'Sun – Thu · 9 am – 6 pm GST',
    mapQuery: 'Jumeirah+Lake+Towers+Dubai',
  },
]

const DEPARTMENTS = [
  { icon: '🛍️', dept: 'Order & Delivery Support',  email: 'orders@vdesiconnect.com',  desc: 'Track orders, report delays, or raise a delivery issue.' },
  { icon: '↩️', dept: 'Returns & Refunds',          email: 'returns@vdesiconnect.com', desc: 'Initiate a return or check the status of a refund.' },
  { icon: '🏪', dept: 'Vendor Support',              email: 'vendors@vdesiconnect.com', desc: 'Onboarding, listing help, payments, and vendor queries.' },
  { icon: '🤝', dept: 'Partnerships & B2B',          email: 'partners@vdesiconnect.com',desc: 'Bulk orders, brand collaborations, and business deals.' },
  { icon: '📰', dept: 'Press & Media',               email: 'press@vdesiconnect.com',   desc: 'Media kits, interviews, and press enquiries.' },
  { icon: '🔒', dept: 'Privacy & Legal',             email: 'legal@vdesiconnect.com',   desc: 'Data requests, IP concerns, and legal notices.' },
]

const FAQS = [
  { q: 'How do I track my order?', a: 'Log in to your account and go to "My Orders". You\'ll find real-time tracking there. You also receive a tracking link via email and SMS once your order ships.' },
  { q: 'My order arrived damaged — what do I do?', a: 'Please take photos of the damaged item and packaging, then visit My Orders → Return / Refund within 10 days of delivery. Our team reviews all requests within 48 hours.' },
  { q: 'How can I become a vendor on VDesiConnect?', a: 'Head to our Become a Vendor page, fill in the registration form, and our vendor relations team will reach out within 2 business days for a verification call.' },
  { q: 'Do you ship internationally?', a: 'Yes — we ship to 50+ countries. International shipping rates and estimated timelines are shown at checkout. See our Shipping Policy for full details.' },
  { q: 'How do I change or cancel my order?', a: 'Orders can be modified or cancelled before dispatch. Contact us at support@vdesiconnect.com or call +91 800 123 4567 as soon as possible with your order ID.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ct-faq-item${open ? ' ct-faq-item--open' : ''}`}>
      <button className="ct-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="ct-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="ct-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <div className="ct-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="ct-hero">
        <div className="ct-hero__overlay" />
        <div className="container-custom ct-hero__inner">
          <span className="ct-hero__eyebrow">📬 Get in Touch</span>
          <h1 className="ct-hero__title">We'd Love to Hear from You</h1>
          <p className="ct-hero__sub">
            Whether you have a question about your order, want to become a vendor,
            or just want to say hello — our team is here and ready to help.
          </p>
          <div className="ct-hero__pills">
            <span>⚡ 2-Hour Response Time</span>
            <span>🕘 Mon–Sat · 9 am – 7 pm IST</span>
            <span>🌍 Support in English & Hindi</span>
          </div>
        </div>
      </section>

      <div className="container-custom ct-content">

        {/* ── Quick channels ────────────────────────────────────────────── */}
        <section className="ct-section">
          <p className="ct-section__eyebrow">Reach Us Instantly</p>
          <h2 className="ct-section__title">Choose How to Connect</h2>
          <div className="ct-channels-grid">
            {CHANNELS.map(c => (
              <a key={c.label} href={c.href} className={`ct-channel-card ct-channel-card--${c.color}`}>
                <span className="ct-channel-card__icon">{c.icon}</span>
                <h3 className="ct-channel-card__label">{c.label}</h3>
                <p className="ct-channel-card__value">{c.value}</p>
                <p className="ct-channel-card__note">{c.note}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ── Contact form + info ───────────────────────────────────────── */}
        <section className="ct-section">
          <p className="ct-section__eyebrow">Send a Message</p>
          <h2 className="ct-section__title">Drop Us a Line</h2>

          <div className="ct-form-row">

            {/* Form */}
            <div className="ct-form-wrap">
              {sent ? (
                <div className="ct-form__success">
                  <span>🎉</span>
                  <h3>Message Received!</h3>
                  <p>Thanks for reaching out, <strong>{form.name}</strong>. We'll get back to you at <strong>{form.email}</strong> within 2 hours on business days.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="ct-form" onSubmit={handleSubmit} noValidate>
                  <div className="ct-form__row">
                    <div className="ct-form__field">
                      <label>Full Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Priya Sharma" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="ct-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="priya@example.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="ct-form__field">
                    <label>Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a topic…</option>
                      <option>Order & Delivery</option>
                      <option>Returns & Refunds</option>
                      <option>Product Query</option>
                      <option>Become a Vendor</option>
                      <option>Partnership / B2B</option>
                      <option>Technical Issue</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="ct-form__field">
                    <label>Message <span>*</span></label>
                    <textarea name="message" rows={5} placeholder="Tell us how we can help you…" value={form.message} onChange={handleChange} />
                  </div>
                  {error && <p className="ct-form__error">⚠️ {error}</p>}
                  <button type="submit" className="ct-form__submit">Send Message →</button>
                </form>
              )}
            </div>

            {/* Side info */}
            <div className="ct-form-aside">
              <div className="ct-aside-card">
                <h3 className="ct-aside-card__title">📍 Headquarters</h3>
                <p>No. 42, Tech Park, Madhapur,<br />Hyderabad — 500081,<br />Telangana, India</p>
              </div>
              <div className="ct-aside-card">
                <h3 className="ct-aside-card__title">🕘 Support Hours</h3>
                <p>Monday – Saturday<br /><strong>9:00 am – 7:00 pm IST</strong></p>
                <p className="ct-aside-card__sub">Closed on national public holidays.</p>
              </div>
              <div className="ct-aside-card">
                <h3 className="ct-aside-card__title">⚡ Response Times</h3>
                <ul>
                  <li>Email — within 2 hours</li>
                  <li>Live Chat — real-time</li>
                  <li>WhatsApp — within 1 hour</li>
                  <li>Phone — immediate</li>
                </ul>
              </div>
              <div className="ct-aside-card ct-aside-card--social">
                <h3 className="ct-aside-card__title">🌐 Find Us Online</h3>
                <div className="ct-social-links">
                  <a href="#" className="ct-social-link">Instagram</a>
                  <a href="#" className="ct-social-link">Facebook</a>
                  <a href="#" className="ct-social-link">Twitter / X</a>
                  <a href="#" className="ct-social-link">LinkedIn</a>
                  <a href="#" className="ct-social-link">YouTube</a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Offices ───────────────────────────────────────────────────── */}
        <section className="ct-section">
          <p className="ct-section__eyebrow">Our Offices</p>
          <h2 className="ct-section__title">Where to Find Us</h2>
          <div className="ct-offices-grid">
            {OFFICES.map(o => (
              <div key={o.city} className="ct-office-card">
                <div className="ct-office-card__header">
                  <h3 className="ct-office-card__city">{o.city}</h3>
                  <span className="ct-office-card__tag">{o.tag}</span>
                </div>
                <p className="ct-office-card__address">{o.address.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                <ul className="ct-office-card__details">
                  <li><span>📞</span>{o.phone}</li>
                  <li><span>📧</span>{o.email}</li>
                  <li><span>🕘</span>{o.hours}</li>
                </ul>
                <a
                  href={`https://maps.google.com/?q=${o.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-office-card__map-btn"
                >
                  View on Map →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Department emails ─────────────────────────────────────────── */}
        <section className="ct-section">
          <p className="ct-section__eyebrow">Specific Queries</p>
          <h2 className="ct-section__title">Contact the Right Team</h2>
          <div className="ct-dept-grid">
            {DEPARTMENTS.map(d => (
              <div key={d.dept} className="ct-dept-card">
                <span className="ct-dept-card__icon">{d.icon}</span>
                <div>
                  <h3 className="ct-dept-card__dept">{d.dept}</h3>
                  <p className="ct-dept-card__desc">{d.desc}</p>
                  <a href={`mailto:${d.email}`} className="ct-dept-card__email">{d.email}</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="ct-section">
          <p className="ct-section__eyebrow">Quick Answers</p>
          <h2 className="ct-section__title">Frequently Asked Questions</h2>
          <div className="ct-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

    </div>
  )
}

export default Contact
