import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product'

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

// ── Product data ────────────────────────────────────────────────────────────
const ALL_PRODUCTS = [
  { id: 1,  image: p01, name: 'Handcrafted Banarasi Silk Saree',       category: 'Sarees',       offerPrice: '$44.99', realPrice: '$59.99',  discountPct: 25, price: 44.99, inStock: true,  daysAgo: 1  },
  { id: 2,  image: p02, name: "Men's Classic Cotton Kurta",             category: 'Kurtas',       offerPrice: '$19.99', realPrice: '$24.99',  discountPct: 20, price: 19.99, inStock: true,  daysAgo: 1  },
  { id: 3,  image: p03, name: 'Organic Turmeric & Spice Gift Set',      category: 'Food & Herbal',offerPrice: '$28.99', realPrice: '$33.99',  discountPct: 15, price: 28.99, inStock: false, daysAgo: 2  },
  { id: 4,  image: p04, name: 'Handwoven Phulkari Dupatta',             category: 'Dupattas',     offerPrice: '$22.99', realPrice: '$32.99',  discountPct: 30, price: 22.99, inStock: true,  daysAgo: 2  },
  { id: 5,  image: p05, name: 'Brass Puja Thali Décor Set',             category: 'Gifts & Decor',offerPrice: '$34.99', realPrice: '$38.99',  discountPct: 10, price: 34.99, inStock: true,  daysAgo: 3  },
  { id: 6,  image: p06, name: "Women's Embroidered Anarkali Suit",      category: 'Kurtas',       offerPrice: '$52.99', realPrice: '$81.99',  discountPct: 35, price: 52.99, inStock: true,  daysAgo: 3  },
  { id: 7,  image: p07, name: 'Ayurvedic Herbal Skincare Box',          category: 'Food & Herbal',offerPrice: '$24.99', realPrice: '$30.49',  discountPct: 18, price: 24.99, inStock: true,  daysAgo: 4  },
  { id: 8,  image: p08, name: 'Traditional Rajasthani Juttis',          category: 'Footwear',     offerPrice: '$31.99', realPrice: '$40.99',  discountPct: 22, price: 31.99, inStock: true,  daysAgo: 4  },
  { id: 9,  image: p09, name: 'Desi Pickle & Chutney Combo (6 Jars)',   category: 'Food & Herbal',offerPrice: '$16.99', realPrice: '$19.29',  discountPct: 12, price: 16.99, inStock: true,  daysAgo: 5  },
  { id: 10, image: p10, name: 'Hand-Painted Madhubani Art Frame',        category: 'Gifts & Decor',offerPrice: '$38.99', realPrice: '$53.99',  discountPct: 28, price: 38.99, inStock: true,  daysAgo: 5  },
  { id: 11, image: p11, name: 'Kanjivaram Silk Saree',                  category: 'Sarees',       offerPrice: '$64.99', realPrice: '$89.99',  discountPct: 27, price: 64.99, inStock: true,  daysAgo: 7  },
  { id: 12, image: p12, name: 'Kundan Bridal Jewellery Set',            category: 'Jewelry',      offerPrice: '$45.99', realPrice: '$69.99',  discountPct: 34, price: 45.99, inStock: true,  daysAgo: 7  },
  { id: 13, image: p13, name: 'Chanderi Silk Lehenga',                  category: 'Lehengas',     offerPrice: '$79.99', realPrice: '$119.99', discountPct: 33, price: 79.99, inStock: true,  daysAgo: 8  },
  { id: 14, image: p14, name: 'Block Print Cotton Kurta',               category: 'Kurtas',       offerPrice: '$24.99', realPrice: '$34.99',  discountPct: 28, price: 24.99, inStock: true,  daysAgo: 10 },
  { id: 15, image: p15, name: 'Jaipuri Printed Dupatta',                category: 'Dupattas',     offerPrice: '$18.99', realPrice: '$25.99',  discountPct: 26, price: 18.99, inStock: true,  daysAgo: 10 },
  { id: 16, image: p16, name: 'Mirror Work Lehenga Choli',              category: 'Lehengas',     offerPrice: '$89.99', realPrice: '$129.99', discountPct: 30, price: 89.99, inStock: true,  daysAgo: 12 },
  { id: 17, image: p17, name: 'Kolhapuri Leather Sandals',              category: 'Footwear',     offerPrice: '$29.99', realPrice: '$42.99',  discountPct: 30, price: 29.99, inStock: true,  daysAgo: 14 },
  { id: 18, image: p18, name: 'Oxidized Silver Earrings',               category: 'Jewelry',      offerPrice: '$14.99', realPrice: '$21.99',  discountPct: 31, price: 14.99, inStock: true,  daysAgo: 14 },
  { id: 19, image: p19, name: 'Georgette Printed Party Saree',          category: 'Sarees',       offerPrice: '$39.99', realPrice: '$54.99',  discountPct: 27, price: 39.99, inStock: true,  daysAgo: 18 },
  { id: 20, image: p20, name: 'Embroidered Palazzo Kurta Set',          category: 'Kurtas',       offerPrice: '$44.99', realPrice: '$64.99',  discountPct: 30, price: 44.99, inStock: true,  daysAgo: 21 },
]

const TABS = ['All', 'Sarees', 'Kurtas', 'Lehengas', 'Dupattas', 'Jewelry', 'Footwear', 'Food & Herbal', 'Gifts & Decor']

const SORT_OPTIONS = [
  { value: 'newest',     label: 'Newest First'          },
  { value: 'price-asc',  label: 'Price: Low to High'    },
  { value: 'price-desc', label: 'Price: High to Low'    },
  { value: 'discount',   label: 'Biggest Discount'      },
]

const PAGE_SIZE = 10

const arrivalLabel = (days) => {
  if (days <= 1) return 'Just arrived'
  if (days <= 3) return `${days} days ago`
  if (days <= 7) return 'This week'
  if (days <= 14) return 'Last week'
  return `${days} days ago`
}

// ── Component ───────────────────────────────────────────────────────────────
const Newarrivals = () => {
  const [activeTab, setActiveTab]     = useState('All')
  const [sortBy, setSortBy]           = useState('newest')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [email, setEmail]             = useState('')
  const [subscribed, setSubscribed]   = useState(false)

  const filtered = useMemo(() => {
    let result = activeTab === 'All'
      ? [...ALL_PRODUCTS]
      : ALL_PRODUCTS.filter(p => p.category === activeTab)

    switch (sortBy) {
      case 'price-asc':  result = result.sort((a, b) => a.price - b.price);        break
      case 'price-desc': result = result.sort((a, b) => b.price - a.price);        break
      case 'discount':   result = result.sort((a, b) => b.discountPct - a.discountPct); break
      default:           result = result.sort((a, b) => a.daysAgo - b.daysAgo)
    }
    return result
  }, [activeTab, sortBy])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setVisibleCount(PAGE_SIZE)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.includes('@')) setSubscribed(true)
  }

  return (
    <div className="na-page">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="na-hero">
        <div className="na-hero__overlay" />
        <div className="container-custom na-hero__inner">
          <div className="na-hero__text">
            <span className="na-hero__eyebrow">✨ Dropping Every Week</span>
            <h1 className="na-hero__title">New Arrivals</h1>
            <p className="na-hero__sub">
              Fresh picks from India's finest artisans and brands — handpicked
              sarees, kurtas, jewellery, spices, and more, added every week.
            </p>
            <div className="na-hero__badges">
              <span>🆕 Updated weekly</span>
              <span>🚚 Free shipping on $50+</span>
              <span>↩ 30-day returns</span>
            </div>
          </div>
          <div className="na-hero__cards">
            <div className="na-hero__stat-card">
              <span className="na-hero__stat-num">20+</span>
              <span className="na-hero__stat-label">New this week</span>
            </div>
            <div className="na-hero__stat-card na-hero__stat-card--accent">
              <span className="na-hero__stat-num">8 Cats</span>
              <span className="na-hero__stat-label">Categories</span>
            </div>
            <div className="na-hero__stat-card">
              <span className="na-hero__stat-num">Up to 40%</span>
              <span className="na-hero__stat-label">Launch discounts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="container-custom na-content">

        {/* Category tabs */}
        <div className="na-tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`na-tab${activeTab === tab ? ' na-tab--active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
              <span className="na-tab__count">
                {tab === 'All' ? ALL_PRODUCTS.length : ALL_PRODUCTS.filter(p => p.category === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Sort + count bar */}
        <div className="na-bar">
          <p className="na-bar__count">
            Showing <strong>{visible.length}</strong> of <strong>{filtered.length}</strong> new arrivals
          </p>
          <div className="na-bar__sort">
            <label htmlFor="na-sort">Sort by:</label>
            <select
              id="na-sort"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Product grid */}
        {visible.length > 0 ? (
          <div className="na-grid">
            {visible.map(p => (
              <div key={p.id} className="na-card-wrap">
                {/* Arrival badge */}
                <div className="na-arrival-badge">
                  <span className="na-arrival-badge__dot" />
                  {arrivalLabel(p.daysAgo)}
                </div>
                <Link to={`/products/${p.id}`} className="product-card-link">
                  <ProductCard
                    image={p.image}
                    name={p.name}
                    discountPct={p.discountPct}
                    offerPrice={p.offerPrice}
                    realPrice={p.realPrice}
                    outOfStock={!p.inStock}
                  />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="na-empty">
            <span>🔍</span>
            <p>No new arrivals in this category yet. Check back soon!</p>
            <button onClick={() => handleTabChange('All')}>View All Arrivals</button>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="na-load-more">
            <button
              className="na-load-more__btn"
              onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
            >
              Load More
              <span className="na-load-more__remaining">
                {filtered.length - visibleCount} more
              </span>
            </button>
          </div>
        )}

      </div>

      {/* ── Newsletter ────────────────────────────────────────────────────── */}
      <section className="na-newsletter">
        <div className="container-custom na-newsletter__inner">
          <div className="na-newsletter__text">
            <h2 className="na-newsletter__title">
              🔔 Never Miss a New Arrival
            </h2>
            <p className="na-newsletter__sub">
              Subscribe and get notified the moment fresh Indian products land on VDesiConnect.
              We drop new arrivals every Tuesday and Friday.
            </p>
          </div>
          <div className="na-newsletter__form-wrap">
            {subscribed ? (
              <div className="na-newsletter__success">
                <span>✅</span>
                <div>
                  <p><strong>You're on the list!</strong></p>
                  <p>We'll notify you every time new arrivals drop.</p>
                </div>
              </div>
            ) : (
              <form className="na-newsletter__form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Notify Me</button>
              </form>
            )}
            <p className="na-newsletter__note">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Newarrivals
