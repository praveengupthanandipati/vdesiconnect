import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '💒', title: 'Indian Weddings Abroad', desc: 'Full-service wedding planning for Indian diaspora families — Hindu, Muslim, Sikh, and Christian ceremonies. Venue, décor, catering, priests, and entertainment coordinated from one place.' },
  { icon: '🎉', title: 'Cultural Festivals & Melas', desc: 'Diwali, Navratri, Holi, Eid, Vaisakhi, and Onam celebrations for Indian community groups, temples, and diaspora associations — from 50 to 5,000 attendees.' },
  { icon: '🏢', title: 'Corporate Events & Galas', desc: 'Annual dinners, product launches, award nights, team outings, and client galas with an Indian cultural touch — across major US, UK, Canada, UAE, and Australian cities.' },
  { icon: '🎂', title: 'Milestone Celebrations', desc: 'Baby showers, mundan, thread ceremonies, namkaran, 60th and 80th birthdays, and anniversary parties planned with traditional Indian rituals and modern presentation.' },
  { icon: '🎓', title: 'Graduation & Farewell Parties', desc: 'Intimate and grand gatherings to celebrate academic achievements and farewell dinners — with catering, photography, and decoration that reflects your family\'s personality.' },
  { icon: '🎵', title: 'Live Entertainment Booking', desc: 'Book Bollywood singers, classical musicians, folk performers, standup comedians, DJs, and dance troupes for your event — verified artists with performance track records.' },
  { icon: '📸', title: 'Photography & Videography', desc: 'Professional Indian wedding and event photographers and videographers matched to your style — traditional, cinematic, candid, or a blend. Reels, drone shots, and same-day edits available.' },
  { icon: '🍛', title: 'Indian Catering Coordination', desc: 'Source and coordinate authentic Indian caterers in your city — North Indian, South Indian, Mughlai, Jain, vegan, and regional specialty menus for any event size.' },
  { icon: '🌸', title: 'Décor & Floral Design', desc: 'Mandap setup, stage backdrops, fresh flower arrangements, LED lighting, theme décor, and entry setups designed by experienced Indian event decorators in your city.' },
]

const EVENT_TYPES = [
  { icon: '💍', type: 'Weddings', sub: 'Engagement · Sangeet · Mehndi · Haldi · Ceremony · Reception', desc: 'Multi-day Indian wedding packages covering every pre and post-wedding ritual with full vendor coordination.' },
  { icon: '🪔', type: 'Cultural Festivals', sub: 'Diwali · Navratri · Holi · Eid · Vaisakhi · Onam · Pongal', desc: 'Community festivals for temples, diaspora associations, and cultural organisations with stage, lighting, catering, and entertainment.' },
  { icon: '🎗️', type: 'Milestone Events', sub: 'Baby Shower · Namkaran · Mundan · Thread Ceremony · Birthday · Anniversary', desc: 'Sacred and celebratory rituals anchored in tradition, presented with contemporary elegance for the diaspora generation.' },
  { icon: '🏆', type: 'Corporate & Community', sub: 'Annual Gala · Award Night · Networking Dinner · Product Launch · Charity Ball', desc: 'Professional event execution with Indian cultural elements — appropriate for Indian business communities and corporate India teams.' },
]

const STATS = [
  { number: '2,000+', label: 'Events Organised' },
  { number: '30+',    label: 'Cities Worldwide' },
  { number: '500+',   label: 'Verified Vendors' },
  { number: '4.9★',  label: 'Client Rating' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '💬', title: 'Free Discovery Call', desc: 'Share your event type, date, location, guest count, and vision. Our event consultant listens carefully and outlines what is possible within your budget.' },
  { step: '02', icon: '📋', title: 'Customised Event Proposal', desc: 'Within 48 hours, you receive a detailed proposal covering venue suggestions, vendor lineup, timeline, and itemised pricing — tailored to your event.' },
  { step: '03', icon: '✅', title: 'Vendor Selection & Booking', desc: 'We shortlist and introduce you to the best local vendors — caterers, decorators, photographers, and entertainers. You approve every booking.' },
  { step: '04', icon: '📅', title: 'Planning & Coordination', desc: 'Our team manages all vendor communications, timelines, permits, and logistics. You receive weekly updates and are consulted on every key decision.' },
  { step: '05', icon: '🎊', title: 'Event Day Management', desc: 'Our on-ground coordinator is present throughout the event — managing setup, vendor arrivals, schedule, and troubleshooting so you enjoy your celebration.' },
]

const CITIES = [
  { city: 'New York',    country: '🇺🇸 USA',        events: 280 },
  { city: 'London',      country: '🇬🇧 UK',          events: 240 },
  { city: 'Toronto',     country: '🇨🇦 Canada',      events: 195 },
  { city: 'Sydney',      country: '🇦🇺 Australia',   events: 168 },
  { city: 'Dubai',       country: '🇦🇪 UAE',          events: 210 },
  { city: 'Chicago',     country: '🇺🇸 USA',          events: 155 },
  { city: 'Melbourne',   country: '🇦🇺 Australia',   events: 130 },
  { city: 'Birmingham',  country: '🇬🇧 UK',          events: 142 },
  { city: 'Vancouver',   country: '🇨🇦 Canada',      events: 118 },
  { city: 'San Francisco', country: '🇺🇸 USA',       events: 172 },
  { city: 'Singapore',   country: '🇸🇬 Singapore',   events: 138 },
  { city: 'Abu Dhabi',   country: '🇦🇪 UAE',          events: 124 },
]

const WHY_US = [
  { icon: '🌍', title: 'Diaspora Specialists', desc: 'We understand the unique blend of tradition and modernity NRI families want. Our planners are part of the community — they know what matters to you.' },
  { icon: '🤝', title: '500+ Vetted Local Vendors', desc: 'We have pre-screened caterers, decorators, photographers, and entertainers in 30+ cities worldwide — so you get quality you can trust, wherever you are.' },
  { icon: '📱', title: 'Remote Planning Made Easy', desc: 'Planning a wedding or event from abroad? Our virtual planning tools, video walkthroughs, and dedicated coordinator let you manage everything remotely.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'All vendor quotes, planner fees, and service charges are disclosed upfront. No surprise invoices. You approve every spend before it happens.' },
  { icon: '🎯', title: 'One Point of Contact', desc: 'You speak to one event coordinator throughout. They know your brief, your budget, and your family — and take full responsibility for the result.' },
  { icon: '🆘', title: '24/7 Event Day Support', desc: 'On the day of your event, our team is reachable around the clock. Whether a vendor is late or a decoration falls short, we fix it immediately.' },
]

const TESTIMONIALS = [
  { name: 'Kavita & Sanjay Bahl', location: '🇺🇸 New Jersey, USA', event: 'Hindu Wedding — 450 guests', text: 'We planned a traditional Punjabi wedding from India for our daughter in New Jersey. VDesiConnect\'s team handled everything — mandap, catering, sangeet performers, dhol players, and décor — flawlessly. Our guests are still talking about it.', rating: 5 },
  { name: 'Priya Menon',          location: '🇬🇧 Leicester, UK',    event: 'Diwali Festival — 800 guests', text: 'Organised a community Diwali mela for our temple trust. VDesiConnect sourced the stage, lighting, food stalls, classical performers, and fireworks display — all within our budget and fully permitted. Absolutely professional.', rating: 5 },
  { name: 'Rahul & Deepa Nair',   location: '🇦🇪 Dubai, UAE',       event: '50th Anniversary — 200 guests', text: 'A surprise anniversary party for my parents — gold-themed, South Indian rituals, live ghazal music, and a customised menu from Kerala. Every detail was perfect. The coordinator was on-site from 6am to midnight. Outstanding service.', rating: 5 },
]

const FAQS = [
  { q: 'Can you plan our event if we are based in India but the event is abroad?', a: 'Absolutely — this is our speciality. Most of our clients are NRI families coordinating events from India, or Indian residents planning events for family members abroad. We handle all local vendor sourcing, bookings, and on-ground coordination at the destination city. You can be involved remotely via video calls, WhatsApp, and our planning portal throughout the entire process.' },
  { q: 'How far in advance should we book for an Indian wedding abroad?', a: 'For weddings with over 200 guests, we recommend engaging us at least 9–12 months in advance. For 100–200 guests, 6–9 months is ideal. Smaller events (under 100 guests) can often be planned in 3–4 months. Popular venues and top vendors in cities like New York, London, and Dubai are booked very early — especially for peak Indian wedding season (October to February).' },
  { q: 'Do you provide a dedicated on-site coordinator for the event day?', a: 'Yes. Every event we manage includes at least one dedicated on-ground coordinator present from setup to teardown. For larger weddings or multi-day events, we provide a full coordination team. The coordinator manages vendor arrivals, the event timeline, guest logistics, and any issues that arise — so you and your family can be fully present in the celebration.' },
  { q: 'Can you help source a Hindu priest or pandit for ceremonies abroad?', a: 'Yes. We have a network of experienced pandits and priests for Hindu, Sikh, Muslim, and Christian ceremonies in most major diaspora cities across the US, UK, Canada, Australia, UAE, and Singapore. We verify credentials, confirm language fluency (Sanskrit, Hindi, Tamil, Telugu, etc.), and coordinate their involvement in your event schedule.' },
  { q: 'What is included in your event planning fee?', a: 'Our planning fee covers initial consultation, event proposal, vendor sourcing and negotiation, contract review, event timeline creation, weekly check-ins, all vendor coordination, and full on-site management on the event day. Vendor costs (catering, décor, photography, etc.) are separate and billed directly. We provide full transparency on all costs before you commit.' },
  { q: 'Do you organise events for community organisations and temples?', a: 'Yes. We work with Hindu temples, Sikh gurdwaras, Muslim associations, and Indian community organisations to plan Diwali melas, Navratri garba nights, Eid celebrations, Vaisakhi events, and cultural charity galas. We handle permits, stage and sound setup, artist booking, food vendors, and crowd management for events from 50 to 5,000 attendees.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`eo-faq-item${open ? ' eo-faq-item--open' : ''}`}>
      <button className="eo-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="eo-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="eo-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Eventorganisation = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', type: '', date: '', guests: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="eo-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="eo-hero">
        <div className="eo-hero__overlay" />
        <div className="container-custom eo-hero__inner">
          <div className="eo-hero__content">
            <span className="eo-hero__eyebrow">🎊 Event Organisation</span>
            <h1 className="eo-hero__title">
              Celebrate Your Culture,<br className="eo-hero__br" /> Wherever You Are
            </h1>
            <p className="eo-hero__sub">
              Indian weddings, cultural festivals, milestone ceremonies, and
              corporate events planned to perfection — across 30+ cities in the
              US, UK, Canada, Australia, UAE, and beyond.
            </p>
            <div className="eo-hero__actions">
              <a href="#enquire" className="eo-hero__btn eo-hero__btn--primary">Plan My Event</a>
              <a href="#services" className="eo-hero__btn eo-hero__btn--outline">Explore Services</a>
            </div>
            <div className="eo-hero__pills">
              <span>💒 Indian Weddings Abroad</span>
              <span>🪔 Cultural Festivals</span>
              <span>🎯 One Point of Contact</span>
              <span>🌍 30+ Cities Worldwide</span>
            </div>
          </div>
          <div className="eo-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="eo-hero__stat">
                <span className="eo-hero__stat-num">{s.number}</span>
                <span className="eo-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom eo-content">

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="eo-section" id="services">
          <p className="eo-section__eyebrow">What We Do</p>
          <h2 className="eo-section__title">End-to-End Event Planning for the Indian Diaspora</h2>
          <div className="eo-services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="eo-service-card">
                <span className="eo-service-card__icon">{s.icon}</span>
                <h3 className="eo-service-card__title">{s.title}</h3>
                <p className="eo-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Event Types ──────────────────────────────────────────────── */}
        <section className="eo-section">
          <p className="eo-section__eyebrow">Event Categories</p>
          <h2 className="eo-section__title">Every Occasion, Beautifully Orchestrated</h2>
          <div className="eo-types-grid">
            {EVENT_TYPES.map(e => (
              <div key={e.type} className="eo-type-card">
                <span className="eo-type-card__icon">{e.icon}</span>
                <h3 className="eo-type-card__type">{e.type}</h3>
                <p className="eo-type-card__sub">{e.sub}</p>
                <p className="eo-type-card__desc">{e.desc}</p>
                <a href="#enquire" className="eo-type-card__link">Plan This Event →</a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Cities ───────────────────────────────────────────────────── */}
        <section className="eo-section">
          <p className="eo-section__eyebrow">Where We Operate</p>
          <h2 className="eo-section__title">30+ Cities Across the Diaspora</h2>
          <div className="eo-cities-grid">
            {CITIES.map(c => (
              <div key={c.city} className="eo-city-card">
                <span className="eo-city-card__country">{c.country}</span>
                <h3 className="eo-city-card__city">{c.city}</h3>
                <p className="eo-city-card__events">🎊 {c.events}+ events</p>
              </div>
            ))}
          </div>
          <p className="eo-cities-note">Don't see your city? We plan events in 30+ cities globally. Contact us — we expand to new locations based on demand.</p>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="eo-section">
          <p className="eo-section__eyebrow">Step by Step</p>
          <h2 className="eo-section__title">How We Plan Your Event</h2>
          <div className="eo-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="eo-step">
                <div className="eo-step__left">
                  <div className="eo-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="eo-step__line" />}
                </div>
                <div className="eo-step__body">
                  <span className="eo-step__icon">{step.icon}</span>
                  <h3 className="eo-step__title">{step.title}</h3>
                  <p className="eo-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="eo-section">
          <p className="eo-section__eyebrow">Why VDesiConnect</p>
          <h2 className="eo-section__title">Why the Indian Community Trusts Us</h2>
          <div className="eo-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="eo-why-card">
                <span className="eo-why-card__icon">{w.icon}</span>
                <h3 className="eo-why-card__title">{w.title}</h3>
                <p className="eo-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section className="eo-section">
          <p className="eo-section__eyebrow">Client Stories</p>
          <h2 className="eo-section__title">Celebrations That Left a Lasting Memory</h2>
          <div className="eo-testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="eo-testimonial-card">
                <div className="eo-testimonial-card__stars">{'⭐'.repeat(t.rating)}</div>
                <p className="eo-testimonial-card__text">"{t.text}"</p>
                <div className="eo-testimonial-card__author">
                  <div className="eo-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="eo-testimonial-card__name">{t.name}</p>
                    <p className="eo-testimonial-card__meta">{t.location} · {t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Enquiry form ─────────────────────────────────────────────── */}
        <section className="eo-section" id="enquire">
          <p className="eo-section__eyebrow">Get Started</p>
          <h2 className="eo-section__title">Tell Us About Your Event</h2>
          <div className="eo-enquire-wrap">

            <div className="eo-enquire-info">
              <h3>We Respond in 24 Hours</h3>
              <p>Share your event details and an event consultant will send you a <strong>customised proposal</strong> within <strong>48 hours</strong>. First consultation is free.</p>
              <ul className="eo-enquire-info__list">
                <li><span>🌍</span> Local vendors in 30+ cities</li>
                <li><span>📱</span> Full remote planning support</li>
                <li><span>🎯</span> One dedicated coordinator</li>
                <li><span>💰</span> Transparent, itemised pricing</li>
                <li><span>🆘</span> 24/7 on-day support</li>
              </ul>
              <div className="eo-enquire-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:events@vdesiconnect.com">📧 events@vdesiconnect.com</a>
              </div>
            </div>

            <div className="eo-form-wrap">
              {sent ? (
                <div className="eo-form__success">
                  <span>🎊</span>
                  <h3>Enquiry Received!</h3>
                  <p>Thank you, <strong>{form.name}</strong>! Your event consultant will reach out to <strong>{form.email}</strong> within 24 hours with a tailored proposal.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', city: '', type: '', date: '', guests: '', budget: '', message: '' }) }}>
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form className="eo-form" onSubmit={handleSubmit}>
                  <div className="eo-form__row">
                    <div className="eo-form__field">
                      <label>Your Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Neha Sharma" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="eo-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="neha@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="eo-form__row">
                    <div className="eo-form__field">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="eo-form__field">
                      <label>Event City</label>
                      <select name="city" value={form.city} onChange={handleChange}>
                        <option value="">Select city…</option>
                        {CITIES.map(c => <option key={c.city}>{c.city}, {c.country.split(' ').slice(1).join(' ')}</option>)}
                        <option>Other City</option>
                      </select>
                    </div>
                  </div>
                  <div className="eo-form__row">
                    <div className="eo-form__field">
                      <label>Event Type</label>
                      <select name="type" value={form.type} onChange={handleChange}>
                        <option value="">Select event type…</option>
                        <option>Hindu Wedding</option>
                        <option>Muslim Wedding (Nikah)</option>
                        <option>Sikh Wedding (Anand Karaj)</option>
                        <option>Christian Wedding</option>
                        <option>Sangeet / Mehndi / Haldi</option>
                        <option>Engagement Ceremony</option>
                        <option>Baby Shower / Namkaran</option>
                        <option>Mundan / Thread Ceremony</option>
                        <option>Milestone Birthday / Anniversary</option>
                        <option>Diwali / Navratri / Cultural Festival</option>
                        <option>Corporate Gala / Award Night</option>
                        <option>Community / Temple Event</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="eo-form__field">
                      <label>Event Date</label>
                      <input type="date" name="date" value={form.date} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="eo-form__row">
                    <div className="eo-form__field">
                      <label>Expected Guests</label>
                      <select name="guests" value={form.guests} onChange={handleChange}>
                        <option value="">Select guest count…</option>
                        <option>Under 50</option>
                        <option>50 – 100</option>
                        <option>100 – 200</option>
                        <option>200 – 500</option>
                        <option>500 – 1,000</option>
                        <option>Over 1,000</option>
                      </select>
                    </div>
                    <div className="eo-form__field">
                      <label>Approximate Budget</label>
                      <select name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select budget…</option>
                        <option>Under $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000 – $30,000</option>
                        <option>$30,000 – $75,000</option>
                        <option>$75,000 – $150,000</option>
                        <option>Over $150,000</option>
                        <option>Flexible / Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div className="eo-form__field">
                    <label>Tell Us About Your Vision</label>
                    <textarea name="message" rows={4} placeholder="e.g. We are planning a traditional Gujarati wedding in London for 300 guests in October. Looking for full event management including venue, catering, décor, sangeet performers, and photographer." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="eo-form__submit">Send Enquiry →</button>
                  <p className="eo-form__note">🔒 Your details are kept strictly confidential and never shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="eo-section">
          <p className="eo-section__eyebrow">FAQs</p>
          <h2 className="eo-section__title">Frequently Asked Questions</h2>
          <div className="eo-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="eo-cta">
        <div className="container-custom eo-cta__inner">
          <span className="eo-cta__emoji">🎊</span>
          <h2 className="eo-cta__title">Let's Make Your Celebration Unforgettable</h2>
          <p className="eo-cta__sub">
            From an intimate ceremony to a grand wedding of 500 guests —
            VDesiConnect brings the magic of Indian celebration to wherever
            you call home.
          </p>
          <a href="#enquire" className="eo-cta__btn">Start Planning Today</a>
          <p className="eo-cta__note">
            📞 <strong>+91 800 123 4567</strong>&nbsp;·&nbsp;
            📧 <strong>events@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Eventorganisation
