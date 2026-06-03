import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Data ───────────────────────────────────────────────────────────────────
const BENEFITS = [
  {
    emoji: '🌍',
    title: 'Global Reach',
    desc: 'Connect with 1 lakh+ Indian diaspora customers across 50+ countries. Your products, delivered worldwide.',
  },
  {
    emoji: '🆓',
    title: 'Zero Setup Cost',
    desc: 'Register for free and list your first 10 products at no cost. Pay only when you grow.',
  },
  {
    emoji: '📦',
    title: 'Shipping Made Easy',
    desc: 'Exclusive partner rates with DHL, FedEx, and Blue Dart. We guide you through every international shipment.',
  },
  {
    emoji: '📊',
    title: 'Seller Dashboard',
    desc: 'Real-time sales analytics, order tracking, inventory alerts, and customer insights — all in one place.',
  },
  {
    emoji: '🎯',
    title: 'Targeted Promotions',
    desc: 'Your products promoted to verified desi audiences via email campaigns, app banners, and social media.',
  },
  {
    emoji: '🤝',
    title: 'Dedicated Support',
    desc: 'Every vendor gets a personal account manager. We are with you from onboarding to your first 100 orders.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Create Your Account',
    desc: 'Sign up for free in under 2 minutes. Fill in your business details and we will verify your account within 24 hours.',
    icon: '📝',
  },
  {
    num: '02',
    title: 'List Your Products',
    desc: 'Upload photos, write descriptions, set your price, and go live. Our tools make listing quick and professional.',
    icon: '🛍️',
  },
  {
    num: '03',
    title: 'Receive Orders',
    desc: 'Customers browse and buy. You receive instant notifications with full order details and buyer information.',
    icon: '🔔',
  },
  {
    num: '04',
    title: 'Ship & Get Paid',
    desc: 'Pack and ship your order using our partner couriers. Payment is released to your account within 5 business days.',
    icon: '💰',
  },
]

const CATEGORIES = [
  { emoji: '👗', name: 'Indian Fashion' },
  { emoji: '🍛', name: 'Food & Spices' },
  { emoji: '🌿', name: 'Herbal & Ayurvedic' },
  { emoji: '🎁', name: 'Gifts & Hampers' },
  { emoji: '🪔', name: 'Home & Puja Décor' },
  { emoji: '💍', name: 'Jewellery' },
  { emoji: '🎨', name: 'Handicrafts & Art' },
  { emoji: '🛎️', name: 'Desi Services' },
]

const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'Forever',
    tag: '',
    color: 'starter',
    features: [
      'Up to 10 product listings',
      'Basic sales dashboard',
      'Standard search visibility',
      'Email support (48-hour response)',
      'Access to shipping partners',
      'Community seller forum',
    ],
    cta: 'Start for Free',
  },
  {
    name: 'Pro',
    price: '$19.99',
    period: 'per month',
    tag: 'Most Popular',
    color: 'pro',
    features: [
      'Unlimited product listings',
      'Advanced analytics & insights',
      'Priority search placement',
      'Featured product badges',
      'Priority support (4-hour response)',
      'Promotional campaign access',
      'Bulk import via CSV / Excel',
      'Dedicated account manager',
    ],
    cta: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Contact us',
    tag: '',
    color: 'enterprise',
    features: [
      'Everything in Pro',
      'Custom branded storefront',
      'API integration support',
      'Multi-warehouse management',
      'White-label shipping options',
      'Quarterly business reviews',
      'Exclusive homepage placement',
      '24/7 dedicated phone support',
    ],
    cta: 'Contact Sales',
  },
]

const TESTIMONIALS = [
  {
    quote: 'VDesiConnect has helped me reach customers in the US, UK, and Australia I never thought I would access. My Banarasi saree business has grown 4x in just 18 months.',
    name: 'Meera Krishnamurthy',
    role: 'Saree Merchant, Varanasi',
    initial: 'MK',
    rating: 5,
  },
  {
    quote: 'The platform is incredibly easy to use. My Ayurvedic products are now being shipped to 14 countries. The dedicated account manager made all the difference.',
    name: 'Dr. Suresh Pillai',
    role: 'Herbal Brand Owner, Kerala',
    initial: 'SP',
    rating: 5,
  },
  {
    quote: 'My festival gift hamper business tripled after listing on VDesiConnect. The promotional campaigns during Diwali and Raksha Bandhan were outstanding.',
    name: 'Kavitha Murugan',
    role: 'Gift Shop Owner, Chennai',
    initial: 'KM',
    rating: 5,
  },
]

const FAQS = [
  {
    q: 'Is it really free to register as a vendor?',
    a: 'Yes! Creating your vendor account and listing your first 10 products is completely free. You only pay a small commission (8%) on successful sales. There are no monthly fees on the Starter plan.',
  },
  {
    q: 'How and when do I receive my payments?',
    a: 'Payments are transferred to your registered bank account or PayPal within 5 business days of successful order delivery. We support transfers to 30+ countries.',
  },
  {
    q: 'What types of products can I sell on VDesiConnect?',
    a: 'You can sell Indian fashion, food & spices, herbal and Ayurvedic products, jewellery, handicrafts, home décor, puja items, festival gifts, and more. You can also offer professional desi services like IT, finance, medical consultations, and visa support.',
  },
  {
    q: 'How do I handle international shipping?',
    a: 'We have partnerships with DHL, FedEx, Blue Dart, and other couriers at discounted rates. Once you list your products, our Seller Support team will guide you through the packaging requirements, customs documentation, and courier booking process.',
  },
  {
    q: 'How long does the vendor approval process take?',
    a: 'Most applications are reviewed within 24 hours on business days. You will receive an email confirmation once approved. For food and Ayurvedic products, additional documentation may be required and can take up to 48 hours.',
  },
  {
    q: 'Can I sell services in addition to physical products?',
    a: 'Absolutely! VDesiConnect has a dedicated Services section where IT professionals, chartered accountants, doctors, real estate agents, lawyers, and other Indian professionals can list and offer their services to the global Indian community.',
  },
  {
    q: 'Is there a minimum order quantity or minimum sales threshold?',
    a: 'No minimum order quantity or sales threshold is required. You can sell one item or one thousand — it is entirely up to you. We support both small artisans and large businesses.',
  },
]

const EMPTY_FORM = {
  businessName: '', name: '', email: '', phone: '', category: '', country: '', message: '',
}

// ── Component ──────────────────────────────────────────────────────────────
const Becomevendor = () => {
  const [openFaq, setOpenFaq]   = useState(null)
  const [form, setForm]         = useState(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [formErr, setFormErr]   = useState('')

  const set = (field) => (e) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.businessName.trim() || !form.email.trim() || !form.category) {
      setFormErr('Please fill in Business Name, Email, and Category.')
      return
    }
    setFormErr('')
    setSubmitted(true)
  }

  return (
    <div className="bv-page">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bv-hero">
        <div className="bv-hero__overlay" />
        <div className="container-custom bv-hero__inner">
          <div className="bv-hero__text">
            <span className="bv-hero__eyebrow">🚀 Grow Your Business Globally</span>
            <h1 className="bv-hero__title">
              Sell to 1 Lakh+ Indians<br />Across the World
            </h1>
            <p className="bv-hero__sub">
              Join 500+ verified vendors already earning on VDesiConnect — the
              premier marketplace connecting Indian artisans, brands, and
              service providers with the global desi community.
            </p>
            <div className="bv-hero__actions">
              <a href="#register" className="bv-hero__btn bv-hero__btn--primary">
                Start Selling Free →
              </a>
              <a href="#how-it-works" className="bv-hero__btn bv-hero__btn--outline">
                See How It Works
              </a>
            </div>
            <div className="bv-hero__trust">
              <span>✅ No credit card required</span>
              <span>✅ Approved in 24 hours</span>
              <span>✅ Free to list 10 products</span>
            </div>
          </div>
          <div className="bv-hero__visual">
            <div className="bv-hero__visual-card bv-hero__visual-card--1">
              <span>🛍️</span>
              <div>
                <p>New Order</p>
                <small>Banarasi Silk Saree · USA</small>
              </div>
              <strong>$44.99</strong>
            </div>
            <div className="bv-hero__visual-card bv-hero__visual-card--2">
              <span>💰</span>
              <div>
                <p>Payment Released</p>
                <small>This week's earnings</small>
              </div>
              <strong>$1,240</strong>
            </div>
            <div className="bv-hero__visual-card bv-hero__visual-card--3">
              <span>⭐</span>
              <div>
                <p>New Review</p>
                <small>★★★★★ Excellent quality!</small>
              </div>
            </div>
            <div className="bv-hero__bg-circle" />
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────────── */}
      <section className="bv-benefits">
        <div className="container-custom">
          <span className="bv-eyebrow bv-eyebrow--center">Why Sell with Us</span>
          <h2 className="bv-title bv-title--center">
            Everything You Need to Succeed
          </h2>
          <div className="bv-benefits__grid">
            {BENEFITS.map(b => (
              <div key={b.title} className="bv-benefits__card">
                <div className="bv-benefits__emoji">{b.emoji}</div>
                <h3 className="bv-benefits__title">{b.title}</h3>
                <p className="bv-benefits__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────── */}
      <section className="bv-steps" id="how-it-works">
        <div className="container-custom">
          <span className="bv-eyebrow bv-eyebrow--center">The Process</span>
          <h2 className="bv-title bv-title--center">
            From Sign-Up to First Sale in Days
          </h2>
          <div className="bv-steps__grid">
            {STEPS.map((s, i) => (
              <div key={s.num} className="bv-step">
                <div className="bv-step__num">{s.num}</div>
                <div className="bv-step__icon">{s.icon}</div>
                <h3 className="bv-step__title">{s.title}</h3>
                <p className="bv-step__desc">{s.desc}</p>
                {i < STEPS.length - 1 && <div className="bv-step__arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section className="bv-stats">
        <div className="container-custom bv-stats__grid">
          <div className="bv-stats__item">
            <span className="bv-stats__num">1 Lakh+</span>
            <span className="bv-stats__label">Active Buyers</span>
          </div>
          <div className="bv-stats__item">
            <span className="bv-stats__num">50+</span>
            <span className="bv-stats__label">Countries Reached</span>
          </div>
          <div className="bv-stats__item">
            <span className="bv-stats__num">$2M+</span>
            <span className="bv-stats__label">Paid to Vendors</span>
          </div>
          <div className="bv-stats__item">
            <span className="bv-stats__num">4.8 ★</span>
            <span className="bv-stats__label">Average Vendor Rating</span>
          </div>
        </div>
      </section>

      {/* ── What You Can Sell ──────────────────────────────────────────── */}
      <section className="bv-categories">
        <div className="container-custom">
          <span className="bv-eyebrow bv-eyebrow--center">Categories</span>
          <h2 className="bv-title bv-title--center">What Can You Sell?</h2>
          <div className="bv-categories__grid">
            {CATEGORIES.map(c => (
              <div key={c.name} className="bv-categories__item">
                <span className="bv-categories__emoji">{c.emoji}</span>
                <span className="bv-categories__name">{c.name}</span>
              </div>
            ))}
          </div>
          <p className="bv-categories__note">
            Don't see your category?{' '}
            <a href="#register">Contact us</a> — we may still be able to list your products.
          </p>
        </div>
      </section>

      {/* ── Plans ─────────────────────────────────────────────────────── */}
      <section className="bv-plans">
        <div className="container-custom">
          <span className="bv-eyebrow bv-eyebrow--center">Pricing</span>
          <h2 className="bv-title bv-title--center">
            Simple, Transparent Pricing
          </h2>
          <p className="bv-plans__sub">
            Start free. Scale as you grow. No hidden fees.
          </p>
          <div className="bv-plans__grid">
            {PLANS.map(plan => (
              <div
                key={plan.name}
                className={`bv-plan bv-plan--${plan.color}${plan.tag ? ' bv-plan--featured' : ''}`}
              >
                {plan.tag && (
                  <span className="bv-plan__tag">{plan.tag}</span>
                )}
                <h3 className="bv-plan__name">{plan.name}</h3>
                <div className="bv-plan__price">
                  <span className="bv-plan__amount">{plan.price}</span>
                  <span className="bv-plan__period">{plan.period}</span>
                </div>
                <ul className="bv-plan__features">
                  {plan.features.map(f => (
                    <li key={f}>
                      <span className="bv-plan__check">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#register" className={`bv-plan__cta bv-plan__cta--${plan.color}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="bv-plans__commission">
            All plans include an <strong>8% commission</strong> on successful sales.
            No other hidden charges.
          </p>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <section className="bv-testimonials">
        <div className="container-custom">
          <span className="bv-eyebrow bv-eyebrow--center">Success Stories</span>
          <h2 className="bv-title bv-title--center">
            Hear from Our Vendors
          </h2>
          <div className="bv-testimonials__grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bv-testimonial">
                <div className="bv-testimonial__stars">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="bv-testimonial__quote">"{t.quote}"</p>
                <div className="bv-testimonial__author">
                  <div className="bv-testimonial__avatar">{t.initial}</div>
                  <div>
                    <p className="bv-testimonial__name">{t.name}</p>
                    <p className="bv-testimonial__role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bv-faq">
        <div className="container-custom">
          <span className="bv-eyebrow bv-eyebrow--center">FAQ</span>
          <h2 className="bv-title bv-title--center">Frequently Asked Questions</h2>
          <div className="bv-faq__list">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`bv-faq__item${openFaq === i ? ' bv-faq__item--open' : ''}`}
              >
                <button
                  className="bv-faq__question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="bv-faq__chevron">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="bv-faq__answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Form ──────────────────────────────────────────── */}
      <section className="bv-register" id="register">
        <div className="container-custom bv-register__inner">

          <div className="bv-register__left">
            <span className="bv-eyebrow">Get Started Today</span>
            <h2 className="bv-title">Apply to Become<br />a Vendor</h2>
            <p className="bv-register__sub">
              Fill in the form and our vendor team will get in touch within
              24 hours to complete your onboarding.
            </p>
            <ul className="bv-register__perks">
              <li>✅ Free account setup assistance</li>
              <li>✅ Product listing guidance</li>
              <li>✅ Shipping & packaging tips</li>
              <li>✅ First 30 days of Pro features free</li>
            </ul>
            <p className="bv-register__contact">
              Questions? Email us at{' '}
              <a href="mailto:vendors@vdesiconnect.com">vendors@vdesiconnect.com</a>
            </p>
          </div>

          <div className="bv-register__form-wrap">
            {submitted ? (
              <div className="bv-register__success">
                <div className="bv-register__success-icon">🎉</div>
                <h3>Application Received!</h3>
                <p>
                  Thank you for applying to sell on VDesiConnect. Our vendor team
                  will review your application and contact you within 24 hours.
                </p>
                <button
                  className="bv-register__success-btn"
                  onClick={() => { setSubmitted(false); setForm(EMPTY_FORM) }}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form className="bv-form" onSubmit={handleSubmit} noValidate>
                <h3 className="bv-form__heading">Vendor Registration</h3>

                {formErr && <p className="bv-form__error">{formErr}</p>}

                <div className="bv-form__grid">
                  <div className="bv-form__field bv-form__field--full">
                    <label>Business / Brand Name <span>*</span></label>
                    <input
                      type="text"
                      placeholder="e.g. Meera's Handlooms"
                      value={form.businessName}
                      onChange={set('businessName')}
                    />
                  </div>

                  <div className="bv-form__field">
                    <label>Your Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={set('name')}
                    />
                  </div>

                  <div className="bv-form__field">
                    <label>Email Address <span>*</span></label>
                    <input
                      type="email"
                      placeholder="you@business.com"
                      value={form.email}
                      onChange={set('email')}
                    />
                  </div>

                  <div className="bv-form__field">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={set('phone')}
                    />
                  </div>

                  <div className="bv-form__field">
                    <label>Product / Service Category <span>*</span></label>
                    <select value={form.category} onChange={set('category')}>
                      <option value="">Select a category</option>
                      {CATEGORIES.map(c => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="bv-form__field">
                    <label>Country / Region</label>
                    <select value={form.country} onChange={set('country')}>
                      <option value="">Select your country</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>UAE</option>
                      <option>Germany</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="bv-form__field bv-form__field--full">
                    <label>Tell us about your business</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your products or services, how long you have been in business, and what makes you unique..."
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>
                </div>

                <button type="submit" className="bv-form__submit">
                  Submit Application →
                </button>

                <p className="bv-form__note">
                  By submitting, you agree to our{' '}
                  <Link to="#">Vendor Terms</Link> and{' '}
                  <Link to="#">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  )
}

export default Becomevendor
