import React from 'react'
import { Link } from 'react-router-dom'

// ── Inline icons ───────────────────────────────────────────────────────────
const Icon = ({ children }) => <span className="about-icon">{children}</span>

const OFFERINGS = [
  {
    emoji: '👗',
    title: 'Indian Fashion',
    desc: 'Handcrafted sarees, kurtas, lehengas, jewellery, and accessories from master artisans across India.',
  },
  {
    emoji: '🍛',
    title: 'Food & Spices',
    desc: 'Authentic pickles, chutneys, masalas, snacks, and ready-to-cook mixes that taste just like home.',
  },
  {
    emoji: '🌿',
    title: 'Herbal & Ayurvedic',
    desc: 'Certified Ayurvedic supplements, herbal teas, essential oils, and natural skincare from trusted brands.',
  },
  {
    emoji: '🎁',
    title: 'Gifts & Hampers',
    desc: 'Curated festival hampers, wedding gifts, personalised keepsakes, and corporate gifting solutions.',
  },
  {
    emoji: '🏠',
    title: 'Home & Puja',
    desc: 'Brass diyas, Madhubani art, terracotta décor, and everything you need for a puja room abroad.',
  },
  {
    emoji: '🛎️',
    title: 'Desi Services',
    desc: 'Verified Indian professionals offering IT, finance, medical, legal, real estate, and visa support.',
  },
]

const STATS = [
  { number: '10,000+', label: 'Products Listed' },
  { number: '500+',    label: 'Verified Vendors' },
  { number: '50+',     label: 'Countries Served' },
  { number: '1 Lakh+', label: 'Happy Customers' },
]

const VALUES = [
  {
    emoji: '✅',
    title: 'Authenticity',
    desc: 'Every product is sourced directly from genuine Indian artisans, brands, and makers — no counterfeits, no compromises.',
  },
  {
    emoji: '🤝',
    title: 'Community',
    desc: 'Built for and by the Indian diaspora. We listen to our community and grow with every piece of feedback.',
  },
  {
    emoji: '⭐',
    title: 'Quality',
    desc: 'Rigorous vetting for every vendor listing. Only products that meet our standards make it to your cart.',
  },
  {
    emoji: '🔒',
    title: 'Trust',
    desc: 'Secure payments, transparent policies, and a no-questions return guarantee so you can shop with confidence.',
  },
]

const TEAM = [
  { name: 'Ananya Reddy',   role: 'Co-Founder & CEO',        initial: 'AR', bg: '#e8ffed' },
  { name: 'Vikram Nair',    role: 'Co-Founder & CTO',        initial: 'VN', bg: '#fff5e0' },
  { name: 'Priya Iyer',     role: 'Head of Vendor Relations', initial: 'PI', bg: '#e8f0fe' },
]

// ── Component ──────────────────────────────────────────────────────────────
const About = () => (
  <div className="about-page">

    {/* ── Hero ──────────────────────────────────────────────────────────── */}
    <section className="about-hero">
      <div className="about-hero__overlay" />
      <div className="container-custom about-hero__inner">
        <nav className="about-hero__crumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </nav>
        <h1 className="about-hero__title">About VDesiConnect</h1>
        <p className="about-hero__tagline">
          Connecting the global Indian community with the products, flavours,<br />
          and services that make every corner of the world feel like home.
        </p>
      </div>
    </section>

    {/* ── Our Story ─────────────────────────────────────────────────────── */}
    <section className="about-story">
      <div className="container-custom about-story__inner">
        <div className="about-story__text">
          <p className="about-section-eyebrow">Our Story</p>
          <h2 className="about-section-title">Born from the Heart of the Diaspora</h2>
          <p className="about-story__body">
            VDesiConnect was founded by passionate members of the Indian diaspora who understood
            firsthand the longing for a taste of home — the smell of fresh masala, the feel of
            a handwoven dupatta, the comfort of speaking to a trusted Indian professional in a
            foreign land.
          </p>
          <p className="about-story__body">
            We saw a gap: millions of Indians living abroad struggled to find authentic products
            and reliable desi services. At the same time, thousands of skilled Indian artisans,
            vendors, and professionals had no way to reach this global audience. VDesiConnect was
            built to close that gap — creating a trusted bridge between India and the world.
          </p>
          <p className="about-story__body">
            Today we serve customers across <strong>50+ countries</strong>, partner with
            <strong> 500+ verified vendors</strong>, and list over <strong>10,000 products</strong>
            — from handcrafted Banarasi silks to Ayurvedic wellness kits to festival hampers
            delivered straight to your doorstep, anywhere in the world.
          </p>
          <Link to="/products" className="about-story__cta">Explore Our Products →</Link>
        </div>

        <div className="about-story__visual">
          <div className="about-story__card about-story__card--top">
            <span className="about-story__card-icon">🇮🇳</span>
            <div>
              <p className="about-story__card-label">Founded in</p>
              <p className="about-story__card-value">2020</p>
            </div>
          </div>
          <div className="about-story__card about-story__card--mid">
            <span className="about-story__card-icon">🌍</span>
            <div>
              <p className="about-story__card-label">Serving</p>
              <p className="about-story__card-value">50+ Countries</p>
            </div>
          </div>
          <div className="about-story__card about-story__card--bot">
            <span className="about-story__card-icon">❤️</span>
            <div>
              <p className="about-story__card-label">Trusted by</p>
              <p className="about-story__card-value">1 Lakh+ Customers</p>
            </div>
          </div>
          <div className="about-story__bg-circle" />
        </div>
      </div>
    </section>

    {/* ── Stats ─────────────────────────────────────────────────────────── */}
    <section className="about-stats">
      <div className="container-custom">
        <div className="about-stats__grid">
          {STATS.map(s => (
            <div key={s.label} className="about-stats__item">
              <span className="about-stats__number">{s.number}</span>
              <span className="about-stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Mission & Vision ──────────────────────────────────────────────── */}
    <section className="about-mv">
      <div className="container-custom">
        <div className="about-mv__grid">
          <div className="about-mv__card about-mv__card--mission">
            <div className="about-mv__card-icon">🎯</div>
            <h3 className="about-mv__card-title">Our Mission</h3>
            <p className="about-mv__card-body">
              To bridge the gap between the global Indian community and the rich, diverse offerings
              of Indian culture, crafts, and commerce — making authentic products and trusted desi
              services accessible to every Indian, wherever they live.
            </p>
          </div>
          <div className="about-mv__card about-mv__card--vision">
            <div className="about-mv__card-icon">🚀</div>
            <h3 className="about-mv__card-title">Our Vision</h3>
            <p className="about-mv__card-body">
              To be the world's most trusted platform for the Indian diaspora — where every
              purchase connects people to their roots, empowers Indian artisans and entrepreneurs,
              and nurtures a thriving, proud global Desi community.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── What We Offer ─────────────────────────────────────────────────── */}
    <section className="about-offer">
      <div className="container-custom">
        <p className="about-section-eyebrow about-section-eyebrow--center">What We Offer</p>
        <h2 className="about-section-title about-section-title--center">
          Everything Desi, Under One Roof
        </h2>
        <div className="about-offer__grid">
          {OFFERINGS.map(o => (
            <div key={o.title} className="about-offer__card">
              <div className="about-offer__card-emoji">{o.emoji}</div>
              <h4 className="about-offer__card-title">{o.title}</h4>
              <p className="about-offer__card-desc">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Our Values ────────────────────────────────────────────────────── */}
    <section className="about-values">
      <div className="container-custom">
        <p className="about-section-eyebrow about-section-eyebrow--center">Our Values</p>
        <h2 className="about-section-title about-section-title--center">
          What We Stand For
        </h2>
        <div className="about-values__grid">
          {VALUES.map(v => (
            <div key={v.title} className="about-values__card">
              <span className="about-values__emoji">{v.emoji}</span>
              <h4 className="about-values__title">{v.title}</h4>
              <p className="about-values__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Team ──────────────────────────────────────────────────────────── */}
    <section className="about-team">
      <div className="container-custom">
        <p className="about-section-eyebrow about-section-eyebrow--center">The People</p>
        <h2 className="about-section-title about-section-title--center">Meet the Team</h2>
        <div className="about-team__grid">
          {TEAM.map(m => (
            <div key={m.name} className="about-team__card">
              <div className="about-team__avatar" style={{ background: m.bg }}>
                {m.initial}
              </div>
              <h4 className="about-team__name">{m.name}</h4>
              <p className="about-team__role">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA Banner ────────────────────────────────────────────────────── */}
    <section className="about-cta">
      <div className="container-custom about-cta__inner">
        <div className="about-cta__text">
          <h2 className="about-cta__title">Ready to Shop Desi?</h2>
          <p className="about-cta__sub">
            Join over a lakh Indians worldwide who trust VDesiConnect for authentic products and services.
          </p>
        </div>
        <div className="about-cta__actions">
          <Link to="/products" className="about-cta__btn about-cta__btn--primary">
            Start Shopping
          </Link>
          <Link to="/login" className="about-cta__btn about-cta__btn--outline">
            Become a Vendor
          </Link>
        </div>
      </div>
    </section>

  </div>
)

export default About
