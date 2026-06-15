import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '📦', title: 'Parcel & Package Delivery', desc: 'Door-to-door parcel delivery between India and 50+ countries. Clothes, gifts, household items, books, and more — picked up from your home and delivered to the recipient.' },
  { icon: '📄', title: 'Document Courier', desc: 'Safe, fast delivery of passports, legal documents, certificates, property papers, and official correspondence — with signature confirmation and full tracking.' },
  { icon: '🪔', title: 'Festival Gift Parcels', desc: 'Send sweets, dry fruits, sarees, and gift hampers home for Diwali, Eid, Raksha Bandhan, Christmas, and every occasion. Seasonal packaging available.' },
  { icon: '🛒', title: 'India to Abroad Shipping', desc: 'Ship Indian groceries, spices, pickles, medicines, sarees, jewellery, and handicrafts to NRI families abroad — within permitted customs regulations.' },
  { icon: '🌏', title: 'Abroad to India Shipping', desc: 'Send branded goods, electronics accessories, gifts, and personal items from the US, UK, Canada, UAE, or Australia back to family in India.' },
  { icon: '🏭', title: 'Bulk & Commercial Shipments', desc: 'For businesses sending samples, inventory, or wholesale goods internationally. We handle commercial invoices, HS codes, and full customs documentation.' },
  { icon: '💊', title: 'Medicine & Supplement Delivery', desc: 'Send prescription medicines, Ayurvedic supplements, and healthcare products with proper customs declarations and regulatory documentation.' },
  { icon: '📋', title: 'Customs Clearance Assistance', desc: 'End-to-end help with customs documentation, duty calculation, prohibited item guidance, and clearance support at both origin and destination countries.' },
  { icon: '🔁', title: 'Return Shipments', desc: 'Need to send something back? We handle return shipments from abroad to India — including warranty returns, e-commerce returns, and personal item retrieval.' },
]

const ROUTES = [
  { from: '🇮🇳 India', to: '🇺🇸 USA',       days: '4–7 days',  popular: true  },
  { from: '🇺🇸 USA',   to: '🇮🇳 India',     days: '5–8 days',  popular: true  },
  { from: '🇮🇳 India', to: '🇬🇧 UK',         days: '4–6 days',  popular: true  },
  { from: '🇬🇧 UK',    to: '🇮🇳 India',     days: '5–7 days',  popular: false },
  { from: '🇮🇳 India', to: '🇨🇦 Canada',    days: '5–8 days',  popular: true  },
  { from: '🇮🇳 India', to: '🇦🇺 Australia', days: '5–9 days',  popular: false },
  { from: '🇮🇳 India', to: '🇦🇪 UAE',        days: '3–5 days',  popular: true  },
  { from: '🇦🇪 UAE',   to: '🇮🇳 India',     days: '3–5 days',  popular: false },
  { from: '🇮🇳 India', to: '🇩🇪 Germany',   days: '5–8 days',  popular: false },
  { from: '🇮🇳 India', to: '🇸🇬 Singapore', days: '4–6 days',  popular: false },
  { from: '🇮🇳 India', to: '🇳🇿 NZ',         days: '6–10 days', popular: false },
  { from: '🇮🇳 India', to: '🇯🇵 Japan',     days: '5–8 days',  popular: false },
]

const WHAT_YOU_CAN_SEND = [
  { icon: '👗', item: 'Clothes & Textiles', note: 'No restrictions' },
  { icon: '📚', item: 'Books & Stationery', note: 'No restrictions' },
  { icon: '🌶️', item: 'Dry Spices & Groceries', note: 'Sealed, labelled' },
  { icon: '🍬', item: 'Sweets & Dry Fruits', note: 'Non-perishable only' },
  { icon: '💊', item: 'Medicines (personal use)', note: 'With prescription' },
  { icon: '💍', item: 'Jewellery & Accessories', note: 'Declared value' },
  { icon: '🖥️', item: 'Electronics Accessories', note: 'No lithium batteries' },
  { icon: '🏺', item: 'Handicrafts & Artifacts', note: 'Non-antique items' },
  { icon: '📄', item: 'Documents & Legal Papers', note: 'All types accepted' },
  { icon: '🧴', item: 'Cosmetics & Skincare', note: 'Non-flammable only' },
  { icon: '🫙', item: 'Pickles & Condiments', note: 'Sealed, properly packed' },
  { icon: '🧸', item: 'Toys & Baby Products', note: 'No recalled items' },
]

const STATS = [
  { number: '1,00,000+', label: 'Parcels Delivered' },
  { number: '50+',        label: 'Countries Covered' },
  { number: '3–7',        label: 'Days Express Delivery' },
  { number: '99%',        label: 'On-Time Rate' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '📲', title: 'Get an Instant Quote', desc: 'Enter the origin, destination, weight, and dimensions of your parcel. Receive an instant price comparison across multiple courier carriers — choose the best fit.' },
  { step: '02', icon: '🗓️', title: 'Book & Schedule Pickup', desc: 'Confirm your booking online and choose a pickup date and time slot. Our courier partner picks up from your doorstep — no trips to a courier office required.' },
  { step: '03', icon: '📋', title: 'Packaging & Documentation', desc: 'Our team guides you through proper packaging, labelling, and customs declaration forms (commercial invoice, CN22/CN23). We check for restricted items before dispatch.' },
  { step: '04', icon: '🔍', title: 'Real-Time Tracking', desc: 'Receive a tracking number via SMS and email. Track your shipment end-to-end on our portal or via the carrier app — with milestone notifications at every stage.' },
  { step: '05', icon: '✅', title: 'Delivery & Confirmation', desc: 'The recipient gets a delivery notification and signs on delivery. You receive a delivery confirmation with timestamp and proof of delivery photo.' },
]

const WHY_US = [
  { icon: '🤝', title: 'Trusted NRI Network Partners', desc: 'We partner with DHL, FedEx, Aramex, Blue Dart, and other A-grade carriers — giving you reliable, insured delivery with global tracking infrastructure.' },
  { icon: '🚪', title: 'Door-to-Door Service', desc: 'Pickup from your home or office, delivery to the recipient\'s door. No drop-off points, no queues, no hassle — 100% door-to-door across all served routes.' },
  { icon: '📍', title: 'End-to-End Tracking', desc: 'Live tracking from pickup to delivery with proactive notifications via WhatsApp, SMS, and email. You always know where your parcel is.' },
  { icon: '📋', title: 'Customs Documentation Support', desc: 'Customs forms, HS codes, restricted item guidance, duty estimates, and clearance documentation — handled by our experts so your parcel clears without delays.' },
  { icon: '🪔', title: 'Festival Parcel Specialists', desc: 'We handle thousands of Diwali, Eid, Raksha Bandhan, and Christmas parcels every year. Special seasonal packaging, bulk discounts, and priority dispatch available.' },
  { icon: '💰', title: 'Competitive, Transparent Rates', desc: 'We compare rates from multiple carriers and pass the best price to you. No hidden surcharges, no surprise bills — all costs disclosed before you book.' },
]

const TESTIMONIALS = [
  { name: 'Suresh Pillai',    location: '🇺🇸 Houston, USA',    shipment: 'Diwali parcels — India to USA', text: 'Sent 4 boxes of Diwali sweets and clothes to Houston from Mumbai. All 4 arrived in 5 days, perfectly packaged, with zero customs issues. The tracking updates on WhatsApp were a bonus. Will use every year.', rating: 5 },
  { name: 'Meera Krishnan',   location: '🇬🇧 Birmingham, UK',  shipment: 'Document courier — India to UK', text: 'Needed to send original property documents from Chennai to Birmingham urgently. VDesiConnect arranged same-day pickup and the documents arrived in 4 working days with signature proof. Incredibly smooth.', rating: 5 },
  { name: 'Rajesh Agarwal',   location: '🇦🇪 Dubai, UAE',      shipment: 'Monthly grocery parcels — India to UAE', text: 'I send Indian groceries and spices to my parents in Dubai every month. The team knows exactly what\'s permitted and how to declare items. Never had a customs hold. Fast and affordable.', rating: 5 },
]

const FAQS = [
  { q: 'What items are prohibited from being shipped internationally?', a: 'Prohibited items vary by destination country, but generally include: fresh fruits and vegetables, perishable foods, live animals, flammable liquids, aerosols, lithium batteries (as standalone items), firearms and ammunition, narcotics, counterfeit goods, and currency. Indian antiques (over 100 years old) also require special export permits. We provide a full prohibited items list for your specific route at the time of booking.' },
  { q: 'How is the shipping cost calculated?', a: 'International courier rates are based on the greater of actual weight and volumetric weight (length × breadth × height in cm ÷ 5000). A 2kg parcel measuring 40×30×20cm has a volumetric weight of 4.8kg — so you\'d be charged for 4.8kg. We calculate both and show you the chargeable weight before you confirm. Fuel surcharges and remote area fees may apply for certain destinations.' },
  { q: 'Can I send Indian food items like spices, pickles, and sweets internationally?', a: 'Many Indian food items are permitted with the right packaging and declaration. Dry spices, sealed pickles, non-perishable sweets (like soan papdi, kaju katli), dry fruits, and packaged snacks are generally allowed with proper labelling and customs declaration. Fresh produce, meat products, and dairy are restricted or banned in most countries. We guide you on what is allowed on your specific route before booking.' },
  { q: 'What happens if my parcel is delayed or lost?', a: 'All our shipments are insured. In the rare event of a loss, damage, or significant delay, we file a formal claim with the carrier on your behalf and follow up until it is resolved. Compensation is subject to the declared value of the parcel and carrier insurance limits. We recommend declaring the correct value at the time of booking to ensure full compensation eligibility.' },
  { q: 'Do I need to be present for the pickup?', a: 'Yes, someone should be available at the pickup address during the scheduled time slot to hand over the parcel and sign the pickup receipt. If you cannot be present, you can authorise another person — a family member, neighbour, or office staff member — to hand over the parcel on your behalf. Please ensure the parcel is fully packed, labelled, and customs forms are filled before the pickup agent arrives.' },
  { q: 'How do I track my shipment?', a: 'Once your parcel is picked up, you receive a tracking number by SMS and email within 2 hours. You can track in real time on our portal or directly on the carrier\'s website. We also send WhatsApp notifications at key milestones — pickup confirmed, in-transit, out for delivery, and delivered. For any tracking queries, our support team is available 7 days a week.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ic-faq-item${open ? ' ic-faq-item--open' : ''}`}>
      <button className="ic-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="ic-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="ic-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Internationalcourier = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', from: '', to: '', weight: '', type: '', message: '' })
  const [sent, setSent] = useState(false)
  const [routeFilter, setRouteFilter] = useState('All')

  const filters = ['All', 'Popular']
  const filteredRoutes = routeFilter === 'Popular' ? ROUTES.filter(r => r.popular) : ROUTES

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="ic-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="ic-hero">
        <div className="ic-hero__overlay" />
        <div className="container-custom ic-hero__inner">
          <div className="ic-hero__content">
            <span className="ic-hero__eyebrow">✈️ International Courier</span>
            <h1 className="ic-hero__title">
              Ship Anything to India<br className="ic-hero__br" /> and Back — Fast & Safe
            </h1>
            <p className="ic-hero__sub">
              Door-to-door international courier service for NRIs and their
              families — parcels, documents, festival gifts, groceries, and
              medicines shipped to and from India across 50+ countries.
            </p>
            <div className="ic-hero__actions">
              <a href="#quote" className="ic-hero__btn ic-hero__btn--primary">Get a Quote</a>
              <a href="#services" className="ic-hero__btn ic-hero__btn--outline">Explore Services</a>
            </div>
            <div className="ic-hero__pills">
              <span>🚪 Door-to-Door Pickup</span>
              <span>📍 Live Tracking</span>
              <span>🪔 Festival Parcel Experts</span>
              <span>📋 Customs Help Included</span>
            </div>
          </div>
          <div className="ic-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="ic-hero__stat">
                <span className="ic-hero__stat-num">{s.number}</span>
                <span className="ic-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom ic-content">

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="ic-section" id="services">
          <p className="ic-section__eyebrow">What We Offer</p>
          <h2 className="ic-section__title">Complete International Courier Solutions</h2>
          <div className="ic-services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="ic-service-card">
                <span className="ic-service-card__icon">{s.icon}</span>
                <h3 className="ic-service-card__title">{s.title}</h3>
                <p className="ic-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What You Can Send ─────────────────────────────────────────── */}
        <section className="ic-section">
          <p className="ic-section__eyebrow">Accepted Items</p>
          <h2 className="ic-section__title">What You Can Send</h2>
          <div className="ic-items-grid">
            {WHAT_YOU_CAN_SEND.map(w => (
              <div key={w.item} className="ic-item-card">
                <span className="ic-item-card__icon">{w.icon}</span>
                <div>
                  <p className="ic-item-card__item">{w.item}</p>
                  <span className="ic-item-card__note">{w.note}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="ic-items-disclaimer">
            <span>⚠️</span>
            <p>Permitted items vary by destination country and carrier. Our team verifies your specific shipment before booking to ensure smooth customs clearance. Contact us if you are unsure about any item.</p>
          </div>
        </section>

        {/* ── Routes ───────────────────────────────────────────────────── */}
        <section className="ic-section">
          <p className="ic-section__eyebrow">Shipping Routes</p>
          <h2 className="ic-section__title">50+ Countries — India & Beyond</h2>
          <div className="ic-filter-row">
            {filters.map(f => (
              <button
                key={f}
                className={`ic-filter-btn${routeFilter === f ? ' ic-filter-btn--active' : ''}`}
                onClick={() => setRouteFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="ic-routes-grid">
            {filteredRoutes.map(r => (
              <div key={`${r.from}-${r.to}`} className={`ic-route-card${r.popular ? ' ic-route-card--popular' : ''}`}>
                {r.popular && <span className="ic-route-card__badge">Popular</span>}
                <div className="ic-route-card__path">
                  <span className="ic-route-card__flag">{r.from}</span>
                  <span className="ic-route-card__arrow">→</span>
                  <span className="ic-route-card__flag">{r.to}</span>
                </div>
                <p className="ic-route-card__days">⏱ {r.days}</p>
                <a href="#quote" className="ic-route-card__link">Get Quote →</a>
              </div>
            ))}
          </div>
          <p className="ic-routes-note">Not seeing your route? We cover 50+ countries — contact us for a custom shipping quote.</p>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="ic-section">
          <p className="ic-section__eyebrow">Step by Step</p>
          <h2 className="ic-section__title">How It Works</h2>
          <div className="ic-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="ic-step">
                <div className="ic-step__left">
                  <div className="ic-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="ic-step__line" />}
                </div>
                <div className="ic-step__body">
                  <span className="ic-step__icon">{step.icon}</span>
                  <h3 className="ic-step__title">{step.title}</h3>
                  <p className="ic-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="ic-section">
          <p className="ic-section__eyebrow">Why VDesiConnect</p>
          <h2 className="ic-section__title">Why NRIs Choose Us to Ship Home</h2>
          <div className="ic-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="ic-why-card">
                <span className="ic-why-card__icon">{w.icon}</span>
                <h3 className="ic-why-card__title">{w.title}</h3>
                <p className="ic-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section className="ic-section">
          <p className="ic-section__eyebrow">Customer Stories</p>
          <h2 className="ic-section__title">Delivered with Care, Every Time</h2>
          <div className="ic-testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="ic-testimonial-card">
                <div className="ic-testimonial-card__stars">{'⭐'.repeat(t.rating)}</div>
                <p className="ic-testimonial-card__text">"{t.text}"</p>
                <div className="ic-testimonial-card__author">
                  <div className="ic-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="ic-testimonial-card__name">{t.name}</p>
                    <p className="ic-testimonial-card__meta">{t.location} · {t.shipment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quote form ───────────────────────────────────────────────── */}
        <section className="ic-section" id="quote">
          <p className="ic-section__eyebrow">Get a Quote</p>
          <h2 className="ic-section__title">Get Your Shipping Quote</h2>
          <div className="ic-quote-wrap">

            <div className="ic-quote-info">
              <h3>We Quote Within 2 Hours</h3>
              <p>Share your shipment details and we'll send you a <strong>competitive quote</strong> from top carriers within <strong>2 hours</strong>.</p>
              <ul className="ic-quote-info__list">
                <li><span>🚪</span> Door-to-door pickup & delivery</li>
                <li><span>🔍</span> Compare 5+ carrier rates</li>
                <li><span>📋</span> Customs documentation support</li>
                <li><span>📍</span> End-to-end live tracking</li>
                <li><span>🛡️</span> Shipment insurance available</li>
              </ul>
              <div className="ic-quote-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:courier@vdesiconnect.com">📧 courier@vdesiconnect.com</a>
              </div>
            </div>

            <div className="ic-form-wrap">
              {sent ? (
                <div className="ic-form__success">
                  <span>📦</span>
                  <h3>Quote Request Received!</h3>
                  <p>Thanks, <strong>{form.name}</strong>! Our courier team will send you carrier options and pricing to <strong>{form.email}</strong> within 2 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', from: '', to: '', weight: '', type: '', message: '' }) }}>
                    Request Another Quote
                  </button>
                </div>
              ) : (
                <form className="ic-form" onSubmit={handleSubmit}>
                  <div className="ic-form__row">
                    <div className="ic-form__field">
                      <label>Your Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Anita Verma" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="ic-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="anita@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="ic-form__row">
                    <div className="ic-form__field">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="ic-form__field">
                      <label>Shipment Type</label>
                      <select name="type" value={form.type} onChange={handleChange}>
                        <option value="">Select type…</option>
                        <option>Documents only</option>
                        <option>Small parcel (under 5 kg)</option>
                        <option>Medium parcel (5–20 kg)</option>
                        <option>Large parcel (20–50 kg)</option>
                        <option>Bulk / Commercial shipment</option>
                        <option>Festival gift parcel</option>
                        <option>Medicines / Healthcare</option>
                        <option>Groceries / Food items</option>
                      </select>
                    </div>
                  </div>
                  <div className="ic-form__row">
                    <div className="ic-form__field">
                      <label>Shipping From</label>
                      <select name="from" value={form.from} onChange={handleChange}>
                        <option value="">Select origin…</option>
                        <option>India</option>
                        <option>United States (USA)</option>
                        <option>United Kingdom (UK)</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>UAE / Middle East</option>
                        <option>Singapore</option>
                        <option>Germany</option>
                        <option>New Zealand</option>
                        <option>Other Country</option>
                      </select>
                    </div>
                    <div className="ic-form__field">
                      <label>Shipping To</label>
                      <select name="to" value={form.to} onChange={handleChange}>
                        <option value="">Select destination…</option>
                        <option>India</option>
                        <option>United States (USA)</option>
                        <option>United Kingdom (UK)</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>UAE / Middle East</option>
                        <option>Singapore</option>
                        <option>Germany</option>
                        <option>New Zealand</option>
                        <option>Other Country</option>
                      </select>
                    </div>
                  </div>
                  <div className="ic-form__field">
                    <label>Approximate Weight</label>
                    <select name="weight" value={form.weight} onChange={handleChange}>
                      <option value="">Select weight…</option>
                      <option>Under 0.5 kg (documents)</option>
                      <option>0.5 – 2 kg</option>
                      <option>2 – 5 kg</option>
                      <option>5 – 10 kg</option>
                      <option>10 – 20 kg</option>
                      <option>20 – 50 kg</option>
                      <option>Over 50 kg</option>
                    </select>
                  </div>
                  <div className="ic-form__field">
                    <label>What Are You Sending?</label>
                    <textarea name="message" rows={3} placeholder="e.g. Sending Diwali gift hamper (sweets, dry fruits, sarees) from Mumbai to my family in New Jersey. Approx. 8 kg. Need pickup in 3 days." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="ic-form__submit">Get My Shipping Quote →</button>
                  <p className="ic-form__note">🔒 Your details are kept confidential. Quote is free with no obligation to book.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="ic-section">
          <p className="ic-section__eyebrow">FAQs</p>
          <h2 className="ic-section__title">Frequently Asked Questions</h2>
          <div className="ic-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="ic-cta">
        <div className="container-custom ic-cta__inner">
          <span className="ic-cta__emoji">📦</span>
          <h2 className="ic-cta__title">Send a Piece of Home — Wherever You Are</h2>
          <p className="ic-cta__sub">
            From a box of Diwali mithai to important legal documents —
            VDesiConnect gets it there fast, safely, and without the customs headache.
          </p>
          <a href="#quote" className="ic-cta__btn">Get a Free Quote</a>
          <p className="ic-cta__note">
            📞 <strong>+91 800 123 4567</strong>&nbsp;·&nbsp;
            📧 <strong>courier@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Internationalcourier
