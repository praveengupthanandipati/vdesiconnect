import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const DOMESTIC_RATES = [
  { zone: 'Metro Cities', examples: 'Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata', standard: '3–5 days', express: '1–2 days', free: '₹499+' },
  { zone: 'Tier 2 Cities', examples: 'Jaipur, Lucknow, Pune, Ahmedabad, Surat, Kochi', standard: '4–6 days', express: '2–3 days', free: '₹499+' },
  { zone: 'Tier 3 & Rural', examples: 'Remote districts, hill stations, NE states', standard: '6–9 days', express: 'Not available', free: '₹699+' },
]

const INTERNATIONAL_ZONES = [
  { zone: 'USA & Canada', time: '7–12 business days', note: 'Fastest international corridor' },
  { zone: 'UK & Europe', time: '8–14 business days', note: 'Includes EU & EEA countries' },
  { zone: 'Middle East', time: '5–9 business days', note: 'UAE, Qatar, KSA, Kuwait & more' },
  { zone: 'Australia & NZ', time: '10–16 business days', note: 'Standard tracked shipping' },
  { zone: 'Southeast Asia', time: '7–12 business days', note: 'Singapore, Malaysia, Thailand & more' },
  { zone: 'Rest of World', time: '14–21 business days', note: 'All other destinations' },
]

const FAQS = [
  {
    q: 'When will my order be dispatched?',
    a: 'Most orders are dispatched within 1–2 business days of payment confirmation. For made-to-order or handcrafted items, the dispatch time is clearly mentioned on the product page and may be up to 5 business days.',
  },
  {
    q: 'How do I track my order?',
    a: 'Once your order ships, you will receive an email and SMS with a tracking number and a direct link to the courier\'s tracking page. You can also track your order from the "My Orders" section in your account.',
  },
  {
    q: 'What if my package is delayed?',
    a: 'Occasional delays can happen due to weather, customs, or public holidays. If your order has not arrived within 5 business days of the estimated date, contact us at support@vdesiconnect.com with your order ID and we will investigate immediately.',
  },
  {
    q: 'Do you ship to P.O. Boxes?',
    a: 'We can ship to P.O. Boxes for domestic orders. However, for international shipments and expedited services, a physical street address is required by our courier partners.',
  },
  {
    q: 'Will I be charged customs duties on international orders?',
    a: 'Import duties, taxes, and customs fees are determined by the destination country\'s regulations and are the responsibility of the buyer. VDesiConnect has no control over these charges and cannot predict their amount. We recommend checking with your local customs authority before ordering.',
  },
  {
    q: 'Can I change my delivery address after placing an order?',
    a: 'Address changes are possible only before the order is dispatched. Contact us at support@vdesiconnect.com as soon as possible. Once shipped, we cannot redirect the parcel.',
  },
  {
    q: 'What happens if no one is available to receive the delivery?',
    a: 'The courier will typically attempt delivery 2–3 times. After that, the parcel may be held at a local facility for a few days before being returned. We will notify you at each step so you can arrange a re-delivery.',
  },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`sp-faq-item${open ? ' sp-faq-item--open' : ''}`}>
      <button className="sp-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="sp-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="sp-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Shippingpolicy = () => (
  <div className="sp-page">

    {/* ── Hero ───────────────────────────────────────────────────────────── */}
    <section className="sp-hero">
      <div className="sp-hero__overlay" />
      <div className="container-custom sp-hero__inner">
        <span className="sp-hero__eyebrow">🚚 Shipping Policy</span>
        <h1 className="sp-hero__title">Fast, Reliable Delivery — Everywhere</h1>
        <p className="sp-hero__sub">
          From a weaver's loom in Varanasi to your doorstep anywhere in the world.
          Here is everything you need to know about how we ship.
        </p>
        <div className="sp-hero__pills">
          <span>🇮🇳 Pan-India Delivery</span>
          <span>🌍 Ships to 50+ Countries</span>
          <span>📦 Free Shipping on ₹499+</span>
          <span>🔍 Full Order Tracking</span>
        </div>
      </div>
    </section>

    <div className="container-custom sp-content">

      {/* ── Processing time ──────────────────────────────────────────────── */}
      <section className="sp-section">
        <p className="sp-section__eyebrow">Before It Ships</p>
        <h2 className="sp-section__title">Order Processing Time</h2>
        <div className="sp-processing-grid">
          <div className="sp-processing-card sp-processing-card--green">
            <span className="sp-processing-card__icon">⚡</span>
            <h3>Standard Products</h3>
            <p className="sp-processing-card__time">1–2 Business Days</p>
            <p>In-stock items are picked, packed, and handed to the courier within 1–2 business days of payment confirmation.</p>
          </div>
          <div className="sp-processing-card sp-processing-card--orange">
            <span className="sp-processing-card__icon">🧵</span>
            <h3>Handcrafted & Made-to-Order</h3>
            <p className="sp-processing-card__time">3–5 Business Days</p>
            <p>Items made by artisans on demand — such as custom embroidery or personalised products — have an extended preparation time shown on the product page.</p>
          </div>
          <div className="sp-processing-card sp-processing-card--blue">
            <span className="sp-processing-card__icon">📦</span>
            <h3>Bulk & Wholesale Orders</h3>
            <p className="sp-processing-card__time">5–7 Business Days</p>
            <p>Large quantity orders require additional packing and quality checks. Our team will confirm the exact dispatch date by email.</p>
          </div>
        </div>
        <p className="sp-note">
          ℹ️ Orders placed after 2 pm IST or on public holidays are processed the next business day.
        </p>
      </section>

      {/* ── Domestic shipping ────────────────────────────────────────────── */}
      <section className="sp-section">
        <p className="sp-section__eyebrow">Within India</p>
        <h2 className="sp-section__title">Domestic Shipping Rates & Timelines</h2>
        <div className="sp-table-wrap">
          <table className="sp-table">
            <thead>
              <tr>
                <th>Delivery Zone</th>
                <th>Example Cities</th>
                <th>Standard Delivery</th>
                <th>Express Delivery</th>
                <th>Free Shipping From</th>
              </tr>
            </thead>
            <tbody>
              {DOMESTIC_RATES.map(r => (
                <tr key={r.zone}>
                  <td><strong>{r.zone}</strong></td>
                  <td>{r.examples}</td>
                  <td>{r.standard}</td>
                  <td>{r.express}</td>
                  <td className="sp-table__highlight">{r.free}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sp-domestic-notes">
          <div className="sp-note-card">
            <span>💸</span>
            <div>
              <strong>Standard Shipping Fee</strong>
              <p>₹49 flat for orders below the free-shipping threshold.</p>
            </div>
          </div>
          <div className="sp-note-card">
            <span>🚀</span>
            <div>
              <strong>Express Shipping Fee</strong>
              <p>₹99 flat. Available in metro and Tier 2 cities only.</p>
            </div>
          </div>
          <div className="sp-note-card">
            <span>🎁</span>
            <div>
              <strong>Free Shipping</strong>
              <p>Automatically applied at checkout when your cart meets the threshold.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── International shipping ───────────────────────────────────────── */}
      <section className="sp-section">
        <p className="sp-section__eyebrow">Worldwide</p>
        <h2 className="sp-section__title">International Shipping</h2>
        <p className="sp-section__lead">
          We ship to over 50 countries. International orders are dispatched via tracked
          courier (DHL, FedEx, or Speed Post EMS depending on the destination).
          Shipping charges are calculated at checkout based on weight, dimensions, and destination.
        </p>
        <div className="sp-intl-grid">
          {INTERNATIONAL_ZONES.map(z => (
            <div key={z.zone} className="sp-intl-card">
              <h3 className="sp-intl-card__zone">{z.zone}</h3>
              <p className="sp-intl-card__time">{z.time}</p>
              <p className="sp-intl-card__note">{z.note}</p>
            </div>
          ))}
        </div>
        <div className="sp-customs-box">
          <span className="sp-customs-box__icon">⚠️</span>
          <div>
            <strong>Customs & Import Duties</strong>
            <p>
              International shipments may be subject to customs duties, taxes, and fees
              levied by the destination country. These charges are the sole responsibility
              of the buyer. VDesiConnect has no control over these fees and cannot predict
              their amount. Please check your country's import regulations before ordering.
            </p>
          </div>
        </div>
      </section>

      {/* ── Packaging ────────────────────────────────────────────────────── */}
      <section className="sp-section">
        <p className="sp-section__eyebrow">Packaging</p>
        <h2 className="sp-section__title">How We Pack Your Order</h2>
        <div className="sp-packaging-grid">
          <div className="sp-packaging-card">
            <span>🛡️</span>
            <h3>Protective Packaging</h3>
            <p>Every item is wrapped in bubble wrap or tissue paper and placed in a rigid outer box to survive the journey intact.</p>
          </div>
          <div className="sp-packaging-card">
            <span>🌿</span>
            <h3>Eco-Friendly Materials</h3>
            <p>We use recycled cardboard and biodegradable fillers wherever possible. We are committed to reducing our packaging footprint year on year.</p>
          </div>
          <div className="sp-packaging-card">
            <span>🎀</span>
            <h3>Gift-Ready Option</h3>
            <p>At checkout, select "Gift Wrapping" and add a personalised message card — perfect for sending Indian products directly to loved ones abroad.</p>
          </div>
          <div className="sp-packaging-card">
            <span>🔒</span>
            <h3>Tamper-Evident Seals</h3>
            <p>All parcels are sealed with security tape. If your package arrives with a broken seal, photograph it before opening and contact us immediately.</p>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      <section className="sp-section">
        <p className="sp-section__eyebrow">FAQs</p>
        <h2 className="sp-section__title">Frequently Asked Questions</h2>
        <div className="sp-faq-list">
          {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
        </div>
      </section>

    </div>

    {/* ── Contact CTA ────────────────────────────────────────────────────────── */}
    <section className="sp-contact">
      <div className="container-custom sp-contact__inner">
        <span className="sp-contact__emoji">📬</span>
        <h2 className="sp-contact__title">Questions About Your Shipment?</h2>
        <p className="sp-contact__sub">
          Our support team is available Monday–Saturday, 9 am – 7 pm IST.
          Share your order ID and we'll get back to you within 2 hours.
        </p>
        <div className="sp-contact__actions">
          <a href="mailto:support@vdesiconnect.com" className="sp-contact__btn sp-contact__btn--primary">
            📧 Email Support
          </a>
          <a href="tel:+918001234567" className="sp-contact__btn sp-contact__btn--outline">
            📞 Call Us
          </a>
        </div>
        <p className="sp-contact__note">support@vdesiconnect.com · +91 800 123 4567</p>
      </div>
    </section>

  </div>
)

export default Shippingpolicy
