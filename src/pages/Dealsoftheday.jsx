import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { CartIcon } from '../components/Icons'
import { useToast } from '../context/ToastContext'

import p01 from '../assets/sample-products/testproduct01.jpg'
import p02 from '../assets/sample-products/testproduct02.jpg'
import p03 from '../assets/sample-products/testproduct03.jpg'
import p04 from '../assets/sample-products/testproduct04.jpg'
import p05 from '../assets/sample-products/testproduct05.jpg'
import p06 from '../assets/sample-products/testproduct06.jpg'
import p07 from '../assets/sample-products/testproduct07.jpg'
import p08 from '../assets/sample-products/testproduct08.jpg'
import p09 from '../assets/sample-products/testproduct09.jpg'
import p10 from '../assets/sample-products/testproduct10.jpg'
import p11 from '../assets/sample-products/testproduct11.jpg'
import p12 from '../assets/sample-products/testproduct12.jpg'
import p13 from '../assets/sample-products/testproduct13.jpg'
import p14 from '../assets/sample-products/testproduct14.jpg'
import p15 from '../assets/sample-products/testproduct15.jpg'
import p16 from '../assets/sample-products/testproduct16.jpg'
import p17 from '../assets/sample-products/testproduct17.jpg'
import p18 from '../assets/sample-products/testproduct18.jpg'
import p19 from '../assets/sample-products/testproduct19.jpg'
import p20 from '../assets/sample-products/testproduct20.jpg'

// ── Countdown helpers ───────────────────────────────────────────────────────
const getSecondsToMidnight = () => {
  const now      = new Date()
  const midnight = new Date()
  midnight.setHours(24, 0, 0, 0)
  return Math.max(0, Math.floor((midnight - now) / 1000))
}

const formatTime = (secs) => ({
  h:  String(Math.floor(secs / 3600)).padStart(2, '0'),
  m:  String(Math.floor((secs % 3600) / 60)).padStart(2, '0'),
  s:  String(secs % 60).padStart(2, '0'),
})

// ── Product data ─────────────────────────────────────────────────────────────
const FEATURED = {
  id: 16, image: p16,
  name: 'Mirror Work Bridal Lehenga Choli',
  category: 'Fashion',
  desc: 'Exquisite hand-embroidered lehenga with intricate mirror work, zari threadwork, and a matching dupatta — perfect for weddings and grand celebrations.',
  originalPrice: 199.99,
  dealPrice: 84.99,
  discountPct: 57,
  rating: 4.8, reviews: 312,
  soldPct: 72,
  tags: ['Bridal', 'Wedding', 'Festive'],
}

const DEALS = [
  { id: 1,  image: p01, name: 'Handcrafted Banarasi Silk Saree',     category: 'Fashion',       originalPrice: 89.99,  dealPrice: 44.99,  discountPct: 50, rating: 4.6, reviews: 218, soldPct: 65, stockLeft: 7  },
  { id: 2,  image: p02, name: "Men's Classic Cotton Kurta",           category: 'Fashion',       originalPrice: 34.99,  dealPrice: 14.99,  discountPct: 57, rating: 4.2, reviews: 134, soldPct: 40, stockLeft: 22 },
  { id: 3,  image: p03, name: 'Organic Turmeric & Spice Gift Box',    category: 'Food & Herbal', originalPrice: 39.99,  dealPrice: 18.99,  discountPct: 52, rating: 4.5, reviews: 96,  soldPct: 75, stockLeft: 5  },
  { id: 4,  image: p04, name: 'Handwoven Phulkari Dupatta',           category: 'Fashion',       originalPrice: 44.99,  dealPrice: 17.99,  discountPct: 60, rating: 4.4, reviews: 87,  soldPct: 80, stockLeft: 3  },
  { id: 5,  image: p05, name: 'Brass Puja Thali Décor Set (7 Pcs)',   category: 'Gifts & Decor', originalPrice: 49.99,  dealPrice: 24.99,  discountPct: 50, rating: 4.3, reviews: 62,  soldPct: 55, stockLeft: 14 },
  { id: 6,  image: p06, name: "Women's Embroidered Anarkali Suit",    category: 'Fashion',       originalPrice: 99.99,  dealPrice: 44.99,  discountPct: 55, rating: 4.7, reviews: 189, soldPct: 70, stockLeft: 9  },
  { id: 7,  image: p07, name: 'Ayurvedic Herbal Skincare Box',        category: 'Food & Herbal', originalPrice: 44.99,  dealPrice: 21.99,  discountPct: 51, rating: 4.0, reviews: 74,  soldPct: 30, stockLeft: 28 },
  { id: 8,  image: p08, name: 'Traditional Rajasthani Juttis',        category: 'Footwear',      originalPrice: 59.99,  dealPrice: 24.99,  discountPct: 58, rating: 4.3, reviews: 143, soldPct: 85, stockLeft: 4  },
  { id: 9,  image: p09, name: 'Desi Pickle & Chutney Combo (6 Jars)', category: 'Food & Herbal', originalPrice: 24.99,  dealPrice: 11.99,  discountPct: 52, rating: 4.2, reviews: 211, soldPct: 55, stockLeft: 18 },
  { id: 10, image: p10, name: 'Hand-Painted Madhubani Art Frame',     category: 'Gifts & Decor', originalPrice: 79.99,  dealPrice: 34.99,  discountPct: 56, rating: 4.5, reviews: 58,  soldPct: 40, stockLeft: 12 },
  { id: 11, image: p11, name: 'Kanjivaram Silk Saree — Limited',      category: 'Fashion',       originalPrice: 149.99, dealPrice: 64.99,  discountPct: 56, rating: 4.9, reviews: 324, soldPct: 90, stockLeft: 2  },
  { id: 12, image: p12, name: 'Kundan Bridal Jewellery Set',          category: 'Jewelry',       originalPrice: 99.99,  dealPrice: 39.99,  discountPct: 60, rating: 4.5, reviews: 176, soldPct: 75, stockLeft: 8  },
  { id: 13, image: p13, name: 'Chanderi Silk Lehenga',                category: 'Fashion',       originalPrice: 179.99, dealPrice: 79.99,  discountPct: 55, rating: 4.6, reviews: 102, soldPct: 50, stockLeft: 16 },
  { id: 14, image: p14, name: 'Block Print Cotton Kurta (3 colours)', category: 'Fashion',       originalPrice: 54.99,  dealPrice: 22.99,  discountPct: 58, rating: 4.1, reviews: 89,  soldPct: 65, stockLeft: 11 },
  { id: 15, image: p15, name: 'Jaipuri Printed Dupatta',              category: 'Fashion',       originalPrice: 34.99,  dealPrice: 14.99,  discountPct: 57, rating: 4.3, reviews: 67,  soldPct: 20, stockLeft: 32 },
  { id: 17, image: p17, name: 'Kolhapuri Leather Sandals',            category: 'Footwear',      originalPrice: 69.99,  dealPrice: 27.99,  discountPct: 60, rating: 4.4, reviews: 128, soldPct: 65, stockLeft: 7  },
  { id: 18, image: p18, name: 'Oxidized Silver Earrings (Set of 3)',   category: 'Jewelry',       originalPrice: 34.99,  dealPrice: 12.99,  discountPct: 62, rating: 4.3, reviews: 204, soldPct: 85, stockLeft: 5  },
  { id: 19, image: p19, name: 'Georgette Printed Party Saree',        category: 'Fashion',       originalPrice: 74.99,  dealPrice: 32.99,  discountPct: 56, rating: 4.4, reviews: 97,  soldPct: 45, stockLeft: 19 },
  { id: 20, image: p20, name: 'Embroidered Palazzo Kurta Set',        category: 'Fashion',       originalPrice: 89.99,  dealPrice: 39.99,  discountPct: 55, rating: 4.2, reviews: 73,  soldPct: 60, stockLeft: 10 },
]

const TABS    = ['All Deals', 'Fashion', 'Food & Herbal', 'Jewelry', 'Footwear', 'Gifts & Decor']
const PAGE_SZ = 10

// ── Deal card ────────────────────────────────────────────────────────────────
const DealCard = ({ id, image, name, originalPrice, dealPrice, discountPct, rating, reviews, soldPct, stockLeft }) => {
  const toast = useToast()
  const saved  = (originalPrice - dealPrice).toFixed(2)
  const isHot  = stockLeft <= 5

  return (
    <Link to={`/products/${id}`} className="product-card-link">
      <div className="deal-card">
        <div className="deal-card__img-wrap">
          <img src={image} alt={name} />
          <span className="deal-card__disc-badge">{discountPct}% OFF</span>
          {isHot && <span className="deal-card__hot-badge">🔥 Hot</span>}
        </div>

        <div className="deal-card__info">
          <p className="deal-card__name">{name}</p>

          <div className="deal-card__rating">
            <span className="deal-card__stars">{'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}</span>
            <span className="deal-card__rev">({reviews})</span>
          </div>

          <div className="deal-card__pricing">
            <span className="deal-card__deal">${dealPrice.toFixed(2)}</span>
            <span className="deal-card__orig">${originalPrice.toFixed(2)}</span>
          </div>

          <span className="deal-card__save-tag">You save ${saved}!</span>

          <div className="deal-card__stock">
            <div className="deal-card__stock-track">
              <div className="deal-card__stock-fill" style={{ width: `${soldPct}%` }} />
            </div>
            <div className="deal-card__stock-labels">
              <span className={`deal-card__left${isHot ? ' deal-card__left--hot' : ''}`}>
                {isHot ? `⚡ Only ${stockLeft} left!` : `${stockLeft} remaining`}
              </span>
              <span className="deal-card__sold">{soldPct}% sold</span>
            </div>
          </div>

          <button
            className="deal-card__cart-btn"
            onClick={(e) => { e.preventDefault(); toast?.showToast(name) }}
          >
            <CartIcon size={15} />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

// ── Stars helper ─────────────────────────────────────────────────────────────
const Stars = ({ rating }) => (
  <span className="dotd-stars">
    {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
  </span>
)

// ── Page component ────────────────────────────────────────────────────────────
const Dealsoftheday = () => {
  const [secs, setSecs]           = useState(getSecondsToMidnight)
  const [activeTab, setActiveTab] = useState('All Deals')
  const [visible, setVisible]     = useState(PAGE_SZ)
  const toast = useToast()

  useEffect(() => {
    const id = setInterval(() => setSecs(s => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])

  const time = formatTime(secs)

  const filtered = useMemo(() => {
    return activeTab === 'All Deals'
      ? DEALS
      : DEALS.filter(d => d.category === activeTab)
  }, [activeTab])

  const shown  = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const handleTab = (tab) => { setActiveTab(tab); setVisible(PAGE_SZ) }

  return (
    <div className="dotd-page">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="dotd-hero">
        <div className="dotd-hero__overlay" />
        <div className="container-custom dotd-hero__inner">

          <div className="dotd-hero__left">
            <span className="dotd-hero__eyebrow">🔥 Today Only</span>
            <h1 className="dotd-hero__title">Deals of the Day</h1>
            <p className="dotd-hero__sub">
              Handpicked Indian products at unbelievable prices — up to
              <strong> 62% off</strong>. Deals reset every midnight. Don't miss out!
            </p>
            <div className="dotd-hero__badges">
              <span>✅ Verified deals</span>
              <span>🚚 Free shipping on $50+</span>
              <span>↩ Easy 30-day returns</span>
            </div>
          </div>

          <div className="dotd-hero__right">
            <p className="dotd-hero__expires">Deals expire in</p>
            <div className="dotd-countdown">
              <div className="dotd-countdown__block">
                <span className="dotd-countdown__num">{time.h}</span>
                <span className="dotd-countdown__label">Hours</span>
              </div>
              <span className="dotd-countdown__sep">:</span>
              <div className="dotd-countdown__block">
                <span className="dotd-countdown__num">{time.m}</span>
                <span className="dotd-countdown__label">Minutes</span>
              </div>
              <span className="dotd-countdown__sep">:</span>
              <div className="dotd-countdown__block">
                <span className="dotd-countdown__num">{time.s}</span>
                <span className="dotd-countdown__label">Seconds</span>
              </div>
            </div>
            <p className="dotd-hero__resets">Resets at midnight — {DEALS.length} deals live now</p>
          </div>

        </div>
      </section>

      {/* ── Featured Deal ─────────────────────────────────────────────────── */}
      <section className="dotd-featured">
        <div className="container-custom">
          <div className="dotd-featured__label">
            <span>⚡ Featured Deal of the Day</span>
          </div>
          <div className="dotd-featured__card">
            <Link to={`/products/${FEATURED.id}`} className="dotd-featured__img-wrap">
              <img src={FEATURED.image} alt={FEATURED.name} />
              <span className="dotd-featured__disc-badge">{FEATURED.discountPct}% OFF</span>
            </Link>

            <div className="dotd-featured__info">
              <div className="dotd-featured__tags">
                {FEATURED.tags.map(t => (
                  <span key={t} className="dotd-featured__tag">{t}</span>
                ))}
              </div>

              <h2 className="dotd-featured__name">{FEATURED.name}</h2>
              <p className="dotd-featured__desc">{FEATURED.desc}</p>

              <div className="dotd-featured__rating">
                <Stars rating={FEATURED.rating} />
                <span>{FEATURED.rating} ({FEATURED.reviews} reviews)</span>
              </div>

              <div className="dotd-featured__pricing">
                <span className="dotd-featured__deal">${FEATURED.dealPrice.toFixed(2)}</span>
                <span className="dotd-featured__orig">${FEATURED.originalPrice.toFixed(2)}</span>
                <span className="dotd-featured__save-tag">
                  Save ${(FEATURED.originalPrice - FEATURED.dealPrice).toFixed(2)}
                </span>
              </div>

              <div className="dotd-featured__stock">
                <div className="dotd-featured__stock-track">
                  <div className="dotd-featured__stock-fill" style={{ width: `${FEATURED.soldPct}%` }} />
                </div>
                <p className="dotd-featured__stock-label">
                  <strong>{FEATURED.soldPct}% sold</strong> — Hurry, selling fast!
                </p>
              </div>

              <div className="dotd-featured__actions">
                <button
                  className="dotd-featured__cart-btn"
                  onClick={() => toast?.showToast(FEATURED.name)}
                >
                  <CartIcon size={18} /> Add to Cart
                </button>
                <Link to={`/products/${FEATURED.id}`} className="dotd-featured__view-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deals Grid ────────────────────────────────────────────────────── */}
      <div className="container-custom dotd-content">

        {/* Category tabs */}
        <div className="dotd-tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`dotd-tab${activeTab === tab ? ' dotd-tab--active' : ''}`}
              onClick={() => handleTab(tab)}
            >
              {tab}
              <span className="dotd-tab__count">
                {tab === 'All Deals' ? DEALS.length : DEALS.filter(d => d.category === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Results bar */}
        <div className="dotd-results-bar">
          <p>
            Showing <strong>{shown.length}</strong> of <strong>{filtered.length}</strong> deals
          </p>
          <span className="dotd-results-bar__live">
            <span className="dotd-results-bar__dot" />
            Deals live now
          </span>
        </div>

        {/* Grid */}
        {shown.length > 0 ? (
          <div className="dotd-grid">
            {shown.map(d => <DealCard key={d.id} {...d} />)}
          </div>
        ) : (
          <div className="dotd-empty">
            <span>🔍</span>
            <p>No deals in this category today. Check back tomorrow!</p>
            <button onClick={() => handleTab('All Deals')}>View All Deals</button>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="dotd-load-more">
            <button onClick={() => setVisible(v => v + PAGE_SZ)}>
              Load More Deals
              <span>{filtered.length - visible} more</span>
            </button>
          </div>
        )}

      </div>

      {/* ── Policies strip ────────────────────────────────────────────────── */}
      <section className="dotd-policies">
        <div className="container-custom dotd-policies__grid">
          <div className="dotd-policy">
            <span className="dotd-policy__icon">🏷️</span>
            <div>
              <p className="dotd-policy__title">Today Only</p>
              <p className="dotd-policy__sub">All prices reset at midnight</p>
            </div>
          </div>
          <div className="dotd-policy">
            <span className="dotd-policy__icon">✅</span>
            <div>
              <p className="dotd-policy__title">Verified Deals</p>
              <p className="dotd-policy__sub">Every discount is real & checked</p>
            </div>
          </div>
          <div className="dotd-policy">
            <span className="dotd-policy__icon">🚚</span>
            <div>
              <p className="dotd-policy__title">Free Shipping</p>
              <p className="dotd-policy__sub">On all orders above $50</p>
            </div>
          </div>
          <div className="dotd-policy">
            <span className="dotd-policy__icon">↩</span>
            <div>
              <p className="dotd-policy__title">Easy Returns</p>
              <p className="dotd-policy__sub">30-day hassle-free returns</p>
            </div>
          </div>
          <div className="dotd-policy">
            <span className="dotd-policy__icon">🔒</span>
            <div>
              <p className="dotd-policy__title">Secure Payment</p>
              <p className="dotd-policy__sub">256-bit encrypted checkout</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Dealsoftheday
