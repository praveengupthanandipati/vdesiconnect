import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const COVERAGE = [
  { icon: '🏥', title: 'Emergency Medical', desc: 'Covers emergency room visits, doctor consultations, and treatment costs arising from sudden illness or injury during the visit.' },
  { icon: '🛏️', title: 'Hospitalisation', desc: 'Inpatient hospital stays, surgeries, ICU charges, nursing care, and related medical expenses covered up to your selected limit.' },
  { icon: '💊', title: 'Prescription Drugs', desc: 'Prescription medications prescribed during a covered medical visit are reimbursed as part of the treatment cost coverage.' },
  { icon: '🦷', title: 'Emergency Dental', desc: 'Sudden dental pain or accidental injury to natural teeth — covered for emergency relief and repair, up to specified limits.' },
  { icon: '🚑', title: 'Medical Evacuation', desc: 'Emergency air ambulance and medical transport back to India or to the nearest suitable facility — a critical but often overlooked benefit.' },
  { icon: '⚰️', title: 'Repatriation of Remains', desc: 'In the unfortunate event of death, covers the cost of returning the mortal remains to India with full dignity and documentation.' },
  { icon: '✈️', title: 'Trip Interruption', desc: 'If the trip must be cut short due to a covered medical event, certain costs of returning home early may be reimbursed.' },
  { icon: '🩺', title: 'Pre-Existing Conditions', desc: 'Select comprehensive plans offer acute onset coverage for pre-existing conditions — critical for elderly parents with diabetes, BP, or heart conditions.' },
]

const PLAN_TYPES = [
  {
    type: 'Fixed Benefit Plans',
    icon: '📋',
    highlight: false,
    tagline: 'Budget-friendly, predictable payouts',
    desc: 'Pay a fixed benefit amount for each covered service regardless of the actual cost. Lower premiums, simpler claims — ideal for younger, healthy visitors.',
    pros: ['Lower monthly premiums', 'Simple claim process', 'No network restrictions', 'Good for healthy visitors'],
    cons: ['Fixed payouts may not cover full costs', 'Less suitable for serious illness'],
    ideal: 'Young, healthy visitors on short trips',
    cta: 'Get Fixed Plan Quote',
  },
  {
    type: 'Comprehensive Plans',
    icon: '🛡️',
    highlight: true,
    tagline: 'Full cost coverage up to policy limit',
    desc: 'Pays the actual medical cost up to your selected maximum (e.g. $100K or $500K). Broader coverage including pre-existing condition acute onset — the right choice for elderly parents.',
    pros: ['Actual cost reimbursement', 'Higher coverage limits', 'Pre-existing acute onset option', 'PPO network access in the US'],
    cons: ['Higher premiums', 'Deductible applies'],
    ideal: 'Elderly parents and long-stay visitors',
    cta: 'Get Comprehensive Quote',
  },
]

const COVERAGE_AMOUNTS = [
  { amount: '$50,000',  premium: 'From $1.2/day',  tag: 'Starter',     desc: 'Basic emergency coverage for younger, healthy visitors on short trips.' },
  { amount: '$100,000', premium: 'From $2.1/day',  tag: 'Popular',      desc: 'Most-chosen plan — balances coverage and cost for most visitor scenarios.' },
  { amount: '$250,000', premium: 'From $3.8/day',  tag: 'Recommended',  desc: 'Strong coverage for elderly parents or visitors with complex health needs.' },
  { amount: '$500,000', premium: 'From $5.5/day',  tag: 'Premium',      desc: 'Maximum protection for high-risk visitors or extended long stays.' },
]

const STATS = [
  { number: '50,000+', label: 'Policies Issued' },
  { number: '15+',     label: 'Insurance Carriers' },
  { number: '4.8★',   label: 'Average Rating' },
  { number: '98%',     label: 'Claims Satisfaction' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '📋', title: 'Tell Us About the Visitor', desc: 'Share the visitor\'s age, destination country, travel dates, and any pre-existing medical conditions. Takes under 2 minutes.' },
  { step: '02', icon: '💡', title: 'Compare Plans & Quotes', desc: 'We instantly compare quotes from 15+ A-rated insurance carriers — fixed benefit and comprehensive plans side by side, with full coverage breakdowns.' },
  { step: '03', icon: '✅', title: 'Choose Your Plan', desc: 'Select the plan that fits your budget and coverage needs. Our advisors are available to explain the difference and help you decide.' },
  { step: '04', icon: '💳', title: 'Buy Online in Minutes', desc: 'Secure online payment. Policy documents emailed to you instantly. Coverage begins from your selected start date — no waiting period for accidents.' },
  { step: '05', icon: '🏥', title: 'Use It if You Need It', desc: 'Show your insurance card at any hospital. For US plans, use the PPO network for cashless treatment. Our claims support team is available 24/7.' },
]

const WHY_US = [
  { icon: '🔍', title: 'Compare 15+ Carriers', desc: 'We work with the top US, UK, and Canadian visitors insurance providers — Atlas, Cigna, United Healthcare, IMG, and more — so you always get the best rate.' },
  { icon: '👴', title: 'Elderly Parent Specialists', desc: 'Indian parents visiting their NRI children are our core customers. We know the plans that actually cover pre-existing conditions and high-cost US medical care.' },
  { icon: '⚡', title: 'Instant Policy Issuance', desc: 'Buy online and receive your policy documents, insurance card, and coverage summary by email in minutes. No paperwork, no delays.' },
  { icon: '🤝', title: 'Claims Assistance Included', desc: 'If a medical event occurs, our claims support team guides you through the hospital billing, claim submission, and reimbursement process step by step.' },
  { icon: '🔄', title: 'Extend or Cancel Anytime', desc: 'Plans to stay longer? Extend your policy online before it expires. Need to cancel? Most plans offer refunds for unused days before departure.' },
  { icon: '💸', title: 'No Hidden Fees', desc: 'Our service is free to you — we are compensated by the insurance carriers. You pay the same premium you would buying directly, with expert guidance included.' },
]

const TESTIMONIALS = [
  { name: 'Deepak Malhotra',   location: '🇺🇸 Dallas, USA',    cover: 'Parents — Comprehensive $250K', text: 'My mother fell ill during her 6-month visit and was hospitalised for 5 days. The comprehensive plan covered $38,000 in hospital bills. VDesiConnect\'s claims team was incredible — they handled everything while we focused on her recovery.', rating: 5 },
  { name: 'Priya Venkataraman', location: '🇨🇦 Toronto, Canada', cover: 'Parents — $100K Comprehensive',  text: 'My in-laws were denied insurance by another agent because of diabetes. VDesiConnect found a plan that covers acute onset of pre-existing conditions. The peace of mind is priceless.', rating: 5 },
  { name: 'Rohit Agarwal',     location: '🇬🇧 London, UK',     cover: 'Visitor — Fixed Benefit',         text: 'Quick, simple, and transparent. Compared 8 plans in minutes and bought online. When my father needed urgent dental care, the claim was processed in 4 days. Highly recommended.', rating: 5 },
]

const FAQS = [
  { q: 'Can I buy visitors insurance for my parents after they have already arrived?', a: 'Yes, in most cases you can buy visitors insurance after the visitor has arrived in the country, though most insurers impose a waiting period of 2–5 days before coverage begins for illness (accidents are usually covered immediately). It is always better to buy before travel to ensure full coverage from day one. We recommend purchasing at least 2 weeks before the visit begins.' },
  { q: 'What is the difference between fixed benefit and comprehensive visitors insurance?', a: 'A fixed benefit plan pays a predetermined amount for each type of medical service (e.g. $200 per doctor visit, $500 per day of hospitalisation), regardless of the actual bill. A comprehensive plan pays the actual eligible medical cost up to your policy maximum. Comprehensive plans are more expensive but far better suited for serious illness, especially in high-cost countries like the USA.' },
  { q: 'Will the insurance cover my parents\' pre-existing conditions like diabetes or hypertension?', a: 'Standard visitor insurance does not cover routine management of pre-existing conditions. However, select comprehensive plans (like Atlas America, Patriot America Plus) include "acute onset of pre-existing condition" coverage — meaning if a pre-existing condition suddenly worsens and requires emergency treatment, it is covered up to the policy limit. This is crucial for elderly parents with diabetes, BP, or heart conditions. We help you identify and select these plans.' },
  { q: 'What is "acute onset of pre-existing condition" coverage?', a: 'This means if a visitor has a known condition (like heart disease or diabetes) that suddenly and unexpectedly deteriorates — requiring emergency medical attention — the treatment is covered under the plan. It does NOT cover routine checkups, ongoing medication refills, or planned treatment for the pre-existing condition. Only the emergency crisis episode is covered. Age limits and caps apply — our advisors explain these fully before you purchase.' },
  { q: 'Can I extend my parents\' visitors insurance if they decide to stay longer?', a: 'Yes. Most comprehensive visitor insurance plans allow you to extend coverage online before the current policy expiry date, as long as no claim has been filed (some carriers allow extension even after a claim). Simply log in to your policy account or contact us and we will process the extension. The new premium is calculated for the additional days at the same daily rate.' },
  { q: 'Is visitors insurance valid for travel to multiple countries?', a: 'Some plans cover worldwide travel, while others are specific to one country. If your parents plan to travel to multiple countries during their visit (e.g., USA and then Canada), you need a plan that covers all intended destinations. We will ask about the travel itinerary when generating quotes to ensure the plan covers every country on the trip.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`vi-faq-item${open ? ' vi-faq-item--open' : ''}`}>
      <button className="vi-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="vi-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="vi-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Visitorsinsurance = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', visitors: '', age: '', start: '', end: '', preexisting: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="vi-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="vi-hero">
        <div className="vi-hero__overlay" />
        <div className="container-custom vi-hero__inner">
          <div className="vi-hero__content">
            <span className="vi-hero__eyebrow">🛡️ Visitors Insurance</span>
            <h1 className="vi-hero__title">
              Protect Your Loved Ones<br className="vi-hero__br" /> Visiting from India
            </h1>
            <p className="vi-hero__sub">
              Affordable visitors health insurance for Indian parents, relatives,
              and friends visiting the US, UK, Canada, and 50+ countries.
              Compare 15+ carriers. Buy in minutes. Claims support included.
            </p>
            <div className="vi-hero__actions">
              <a href="#quote" className="vi-hero__btn vi-hero__btn--primary">Get a Free Quote</a>
              <a href="#coverage" className="vi-hero__btn vi-hero__btn--outline">See What's Covered</a>
            </div>
            <div className="vi-hero__pills">
              <span>🏥 Medical & Hospital Cover</span>
              <span>👴 Elderly Parent Specialists</span>
              <span>⚡ Instant Policy Issuance</span>
              <span>🤝 Claims Support Included</span>
            </div>
          </div>
          <div className="vi-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="vi-hero__stat">
                <span className="vi-hero__stat-num">{s.number}</span>
                <span className="vi-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom vi-content">

        {/* ── Coverage ─────────────────────────────────────────────────── */}
        <section className="vi-section" id="coverage">
          <p className="vi-section__eyebrow">What's Covered</p>
          <h2 className="vi-section__title">Comprehensive Protection When It Matters Most</h2>
          <div className="vi-coverage-grid">
            {COVERAGE.map(c => (
              <div key={c.title} className="vi-coverage-card">
                <span className="vi-coverage-card__icon">{c.icon}</span>
                <h3 className="vi-coverage-card__title">{c.title}</h3>
                <p className="vi-coverage-card__desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Plan Types ───────────────────────────────────────────────── */}
        <section className="vi-section">
          <p className="vi-section__eyebrow">Plan Types</p>
          <h2 className="vi-section__title">Fixed Benefit vs Comprehensive — Which Is Right?</h2>
          <div className="vi-plans-grid">
            {PLAN_TYPES.map(p => (
              <div key={p.type} className={`vi-plan-card${p.highlight ? ' vi-plan-card--highlight' : ''}`}>
                {p.highlight && <div className="vi-plan-card__ribbon">Recommended</div>}
                <span className="vi-plan-card__icon">{p.icon}</span>
                <h3 className="vi-plan-card__type">{p.type}</h3>
                <p className="vi-plan-card__tagline">{p.tagline}</p>
                <p className="vi-plan-card__desc">{p.desc}</p>
                <div className="vi-plan-card__cols">
                  <div>
                    <p className="vi-plan-card__col-title">✅ Benefits</p>
                    <ul className="vi-plan-card__list">
                      {p.pros.map(pr => <li key={pr}>{pr}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="vi-plan-card__col-title">⚠️ Limitations</p>
                    <ul className="vi-plan-card__list vi-plan-card__list--cons">
                      {p.cons.map(cn => <li key={cn}>{cn}</li>)}
                    </ul>
                  </div>
                </div>
                <p className="vi-plan-card__ideal">🎯 Ideal for: <strong>{p.ideal}</strong></p>
                <a href="#quote" className={`vi-plan-card__btn${p.highlight ? ' vi-plan-card__btn--primary' : ''}`}>{p.cta} →</a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Coverage Amounts ─────────────────────────────────────────── */}
        <section className="vi-section">
          <p className="vi-section__eyebrow">Coverage Levels</p>
          <h2 className="vi-section__title">Choose Your Coverage Amount</h2>
          <div className="vi-amounts-grid">
            {COVERAGE_AMOUNTS.map(a => (
              <div key={a.amount} className={`vi-amount-card${a.tag === 'Recommended' ? ' vi-amount-card--highlight' : ''}`}>
                {a.tag === 'Recommended' && <div className="vi-amount-card__ribbon">Most Popular</div>}
                <div className="vi-amount-card__head">
                  <span className="vi-amount-card__tag">{a.tag}</span>
                  <span className="vi-amount-card__amount">{a.amount}</span>
                </div>
                <p className="vi-amount-card__premium">{a.premium}</p>
                <p className="vi-amount-card__desc">{a.desc}</p>
                <a href="#quote" className="vi-amount-card__link">Get Quote →</a>
              </div>
            ))}
          </div>
          <div className="vi-amounts-note">
            <span>ℹ️</span>
            <p>Premiums shown are indicative daily rates for a 40-year-old visitor. Actual premium depends on age, destination, plan type, deductible chosen, and pre-existing condition add-ons. Get a personalised quote above.</p>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="vi-section">
          <p className="vi-section__eyebrow">Step by Step</p>
          <h2 className="vi-section__title">How It Works</h2>
          <div className="vi-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="vi-step">
                <div className="vi-step__left">
                  <div className="vi-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="vi-step__line" />}
                </div>
                <div className="vi-step__body">
                  <span className="vi-step__icon">{step.icon}</span>
                  <h3 className="vi-step__title">{step.title}</h3>
                  <p className="vi-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="vi-section">
          <p className="vi-section__eyebrow">Why VDesiConnect</p>
          <h2 className="vi-section__title">Why NRI Families Choose Us</h2>
          <div className="vi-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="vi-why-card">
                <span className="vi-why-card__icon">{w.icon}</span>
                <h3 className="vi-why-card__title">{w.title}</h3>
                <p className="vi-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section className="vi-section">
          <p className="vi-section__eyebrow">Real Stories</p>
          <h2 className="vi-section__title">When It Mattered Most, We Were There</h2>
          <div className="vi-testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="vi-testimonial-card">
                <div className="vi-testimonial-card__stars">{'⭐'.repeat(t.rating)}</div>
                <p className="vi-testimonial-card__text">"{t.text}"</p>
                <div className="vi-testimonial-card__author">
                  <div className="vi-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="vi-testimonial-card__name">{t.name}</p>
                    <p className="vi-testimonial-card__meta">{t.location} · {t.cover}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quote form ───────────────────────────────────────────────── */}
        <section className="vi-section" id="quote">
          <p className="vi-section__eyebrow">Get a Quote</p>
          <h2 className="vi-section__title">Get Your Free Visitors Insurance Quote</h2>
          <div className="vi-quote-wrap">

            <div className="vi-quote-info">
              <h3>What Happens Next</h3>
              <p>Share basic visitor details and our advisors will send you <strong>personalised quotes</strong> from the best carriers within <strong>2 hours</strong>.</p>
              <ul className="vi-quote-info__list">
                <li><span>🔍</span> Compare 15+ A-rated carriers</li>
                <li><span>💡</span> Expert recommendation included</li>
                <li><span>⚡</span> Policy issued instantly on purchase</li>
                <li><span>🤝</span> Claims support throughout the trip</li>
                <li><span>🔄</span> Extend or cancel anytime</li>
              </ul>
              <div className="vi-quote-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:insurance@vdesiconnect.com">📧 insurance@vdesiconnect.com</a>
              </div>
            </div>

            <div className="vi-form-wrap">
              {sent ? (
                <div className="vi-form__success">
                  <span>🛡️</span>
                  <h3>Quote Request Received!</h3>
                  <p>Thanks, <strong>{form.name}</strong>! Our insurance advisors will send personalised plan comparisons to <strong>{form.email}</strong> within 2 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', destination: '', visitors: '', age: '', start: '', end: '', preexisting: '', message: '' }) }}>
                    Request Another Quote
                  </button>
                </div>
              ) : (
                <form className="vi-form" onSubmit={handleSubmit}>
                  <div className="vi-form__row">
                    <div className="vi-form__field">
                      <label>Your Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Vijay Patel" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="vi-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="vijay@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="vi-form__row">
                    <div className="vi-form__field">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="vi-form__field">
                      <label>Destination Country</label>
                      <select name="destination" value={form.destination} onChange={handleChange}>
                        <option value="">Select destination…</option>
                        <option>United States (USA)</option>
                        <option>Canada</option>
                        <option>United Kingdom (UK)</option>
                        <option>Australia</option>
                        <option>UAE / Middle East</option>
                        <option>Europe (Schengen)</option>
                        <option>New Zealand</option>
                        <option>Singapore</option>
                        <option>Other Country</option>
                      </select>
                    </div>
                  </div>
                  <div className="vi-form__row">
                    <div className="vi-form__field">
                      <label>Number of Visitors</label>
                      <select name="visitors" value={form.visitors} onChange={handleChange}>
                        <option value="">Select…</option>
                        <option>1 (Single visitor)</option>
                        <option>2 (Couple / Two visitors)</option>
                        <option>3 or more</option>
                      </select>
                    </div>
                    <div className="vi-form__field">
                      <label>Visitor's Age (oldest)</label>
                      <select name="age" value={form.age} onChange={handleChange}>
                        <option value="">Select age range…</option>
                        <option>Under 40</option>
                        <option>40 – 49</option>
                        <option>50 – 59</option>
                        <option>60 – 69</option>
                        <option>70 – 79</option>
                        <option>80 and above</option>
                      </select>
                    </div>
                  </div>
                  <div className="vi-form__row">
                    <div className="vi-form__field">
                      <label>Trip Start Date</label>
                      <input type="date" name="start" value={form.start} onChange={handleChange} />
                    </div>
                    <div className="vi-form__field">
                      <label>Trip End Date</label>
                      <input type="date" name="end" value={form.end} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="vi-form__field">
                    <label>Pre-existing Medical Conditions</label>
                    <select name="preexisting" value={form.preexisting} onChange={handleChange}>
                      <option value="">Select…</option>
                      <option>None — visitor is in good health</option>
                      <option>Diabetes</option>
                      <option>High Blood Pressure / Hypertension</option>
                      <option>Heart Condition</option>
                      <option>Asthma / Respiratory</option>
                      <option>Multiple conditions</option>
                      <option>Other condition</option>
                    </select>
                  </div>
                  <div className="vi-form__field">
                    <label>Anything Else We Should Know?</label>
                    <textarea name="message" rows={3} placeholder="e.g. My parents (aged 68 and 65) are visiting from India for 5 months. My mother has diabetes and BP. Need comprehensive plan with pre-existing coverage." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="vi-form__submit">Get My Free Quote →</button>
                  <p className="vi-form__note">🔒 Your information is never shared with third parties. Quote is free with no obligation to purchase.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="vi-section">
          <p className="vi-section__eyebrow">FAQs</p>
          <h2 className="vi-section__title">Frequently Asked Questions</h2>
          <div className="vi-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="vi-cta">
        <div className="container-custom vi-cta__inner">
          <span className="vi-cta__emoji">🛡️</span>
          <h2 className="vi-cta__title">Don't Let a Medical Bill Ruin Their Visit</h2>
          <p className="vi-cta__sub">
            A single emergency room visit in the US can cost $10,000 or more.
            Protect your parents and loved ones with the right visitors insurance
            — starting from just $1.20 a day.
          </p>
          <a href="#quote" className="vi-cta__btn">Get a Free Quote Now</a>
          <p className="vi-cta__note">
            📞 <strong>+91 800 123 4567</strong>&nbsp;·&nbsp;
            📧 <strong>insurance@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Visitorsinsurance
