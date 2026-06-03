import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { CartIcon, HeartIcon } from '../components/Icons'
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

// ── Data (sorted by soldCount desc) ────────────────────────────────────────
const PRODUCTS = [
  { id: 11, image: p11, name: 'Kanjivaram Silk Saree',                  category: 'Sarees',        offerPrice: '$64.99', realPrice: '$89.99',  discountPct: 27, price: 64.99, rating: 4.9, reviews: 1240, soldCount: 3820, inStock: true  },
  { id: 6,  image: p06, name: "Women's Embroidered Anarkali Suit",      category: 'Kurtas',        offerPrice: '$52.99', realPrice: '$81.99',  discountPct: 35, price: 52.99, rating: 4.7, reviews: 982,  soldCount: 2910, inStock: true  },
  { id: 1,  image: p01, name: 'Handcrafted Banarasi Silk Saree',        category: 'Sarees',        offerPrice: '$44.99', realPrice: '$59.99',  discountPct: 25, price: 44.99, rating: 4.6, reviews: 876,  soldCount: 2540, inStock: true  },
  { id: 18, image: p18, name: 'Oxidized Silver Earrings (Set of 3)',     category: 'Jewelry',       offerPrice: '$14.99', realPrice: '$21.99',  discountPct: 31, price: 14.99, rating: 4.5, reviews: 724,  soldCount: 2210, inStock: true  },
  { id: 13, image: p13, name: 'Chanderi Silk Lehenga',                  category: 'Lehengas',      offerPrice: '$79.99', realPrice: '$119.99', discountPct: 33, price: 79.99, rating: 4.6, reviews: 638,  soldCount: 1980, inStock: true  },
  { id: 8,  image: p08, name: 'Traditional Rajasthani Juttis',          category: 'Footwear',      offerPrice: '$31.99', realPrice: '$40.99',  discountPct: 22, price: 31.99, rating: 4.3, reviews: 589,  soldCount: 1760, inStock: true  },
  { id: 9,  image: p09, name: 'Desi Pickle & Chutney Combo (6 Jars)',   category: 'Food & Herbal', offerPrice: '$16.99', realPrice: '$19.29',  discountPct: 12, price: 16.99, rating: 4.4, reviews: 1102, soldCount: 1650, inStock: true  },
  { id: 12, image: p12, name: 'Kundan Bridal Jewellery Set',            category: 'Jewelry',       offerPrice: '$45.99', realPrice: '$69.99',  discountPct: 34, price: 45.99, rating: 4.5, reviews: 412,  soldCount: 1540, inStock: true  },
  { id: 4,  image: p04, name: 'Handwoven Phulkari Dupatta',             category: 'Dupattas',      offerPrice: '$22.99', realPrice: '$32.99',  discountPct: 30, price: 22.99, rating: 4.4, reviews: 368,  soldCount: 1430, inStock: true  },
  { id: 19, image: p19, name: 'Georgette Printed Party Saree',          category: 'Sarees',        offerPrice: '$39.99', realPrice: '$54.99',  discountPct: 27, price: 39.99, rating: 4.4, reviews: 311,  soldCount: 1320, inStock: true  },
  { id: 16, image: p16, name: 'Mirror Work Lehenga Choli',              category: 'Lehengas',      offerPrice: '$89.99', realPrice: '$129.99', discountPct: 30, price: 89.99, rating: 4.7, reviews: 287,  soldCount: 1210, inStock: true  },
  { id: 2,  image: p02, name: "Men's Classic Cotton Kurta",             category: 'Kurtas',        offerPrice: '$19.99', realPrice: '$24.99',  discountPct: 20, price: 19.99, rating: 4.2, reviews: 543,  soldCount: 1190, inStock: true  },
  { id: 17, image: p17, name: 'Kolhapuri Leather Sandals',              category: 'Footwear',      offerPrice: '$29.99', realPrice: '$42.99',  discountPct: 30, price: 29.99, rating: 4.4, reviews: 264,  soldCount: 1080, inStock: true  },
  { id: 7,  image: p07, name: 'Ayurvedic Herbal Skincare Box',          category: 'Food & Herbal', offerPrice: '$24.99', realPrice: '$30.49',  discountPct: 18, price: 24.99, rating: 4.0, reviews: 198,  soldCount: 980,  inStock: true  },
  { id: 10, image: p10, name: 'Hand-Painted Madhubani Art Frame',       category: 'Gifts & Decor', offerPrice: '$38.99', realPrice: '$53.99',  discountPct: 28, price: 38.99, rating: 4.5, reviews: 176,  soldCount: 870,  inStock: true  },
  { id: 20, image: p20, name: 'Embroidered Palazzo Kurta Set',          category: 'Kurtas',        offerPrice: '$44.99', realPrice: '$64.99',  discountPct: 30, price: 44.99, rating: 4.2, reviews: 154,  soldCount: 790,  inStock: true  },
  { id: 5,  image: p05, name: 'Brass Puja Thali Décor Set (7 Pcs)',     category: 'Gifts & Decor', offerPrice: '$34.99', realPrice: '$38.99',  discountPct: 10, price: 34.99, rating: 4.1, reviews: 139,  soldCount: 720,  inStock: true  },
  { id: 14, image: p14, name: 'Block Print Cotton Kurta',               category: 'Kurtas',        offerPrice: '$24.99', realPrice: '$34.99',  discountPct: 28, price: 24.99, rating: 4.1, reviews: 122,  soldCount: 660,  inStock: true  },
  { id: 15, image: p15, name: 'Jaipuri Printed Dupatta',                category: 'Dupattas',      offerPrice: '$18.99', realPrice: '$25.99',  discountPct: 26, price: 18.99, rating: 4.3, reviews: 108,  soldCount: 590,  inStock: true  },
  { id: 3,  image: p03, name: 'Organic Turmeric & Spice Gift Set',      category: 'Food & Herbal', offerPrice: '$28.99', realPrice: '$33.99',  discountPct: 15, price: 28.99, rating: 4.3, reviews: 96,   soldCount: 520,  inStock: false },
]

const TABS    = ['All', 'Sarees', 'Kurtas', 'Lehengas', 'Dupattas', 'Jewelry', 'Footwear', 'Food & Herbal', 'Gifts & Decor']
const SORT    = [
  { value: 'best-selling', label: 'Best Selling'      },
  { value: 'top-rated',    label: 'Top Rated'         },
  { value: 'most-reviews', label: 'Most Reviewed'     },
  { value: 'price-asc',    label: 'Price: Low → High' },
  { value: 'price-desc',   label: 'Price: High → Low' },
]
const PAGE_SZ = 10

const RANK_META = {
  1: { label: '🥇 #1 Best Seller', cls: 'gold'   },
  2: { label: '🥈 #2 Best Seller', cls: 'silver' },
  3: { label: '🥉 #3 Best Seller', cls: 'bronze' },
}

const WHY = [
  { emoji: '⭐', title: 'Customer-Voted',  desc: 'Ranked by real purchases and verified buyer reviews — no paid placements.' },
  { emoji: '✅', title: '100% Authentic',  desc: 'Every best seller is sourced from verified Indian artisans and brands.' },
  { emoji: '🔄', title: 'Updated Weekly',  desc: 'Rankings refresh every week based on the latest sales and review data.' },
  { emoji: '🌍', title: 'Globally Loved',  desc: 'Sold in 50+ countries to Indian diaspora customers who keep coming back.' },
]

// ── Star renderer ───────────────────────────────────────────────────────────
const Stars = ({ rating, size = 'sm' }) => (
  <span className={`bs-stars bs-stars--${size}`}>
    {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
  </span>
)

// ── Bestseller card ─────────────────────────────────────────────────────────
const BsCard = ({ rank, id, image, name, category, offerPrice, realPrice, discountPct, rating, reviews, soldCount, inStock }) => {
  const toast    = useToast()
  const meta     = RANK_META[rank]
  const isTop3   = rank <= 3

  return (
    <div className={`bs-card${isTop3 ? ` bs-card--top3 bs-card--${meta.cls}` : ''}`}>
      {/* Rank badge */}
      <div className={`bs-rank bs-rank--${isTop3 ? meta.cls : 'num'}`}>
        {isTop3 ? meta.label : `#${rank}`}
      </div>

      <Link to={`/products/${id}`} className="bs-card__img-link">
        <div className="bs-card__img-wrap">
          <img src={image} alt={name} />
          {discountPct && inStock && (
            <span className="bs-card__disc-badge">{discountPct}% OFF</span>
          )}
          {!inStock && (
            <div className="bs-card__oos">Out of Stock</div>
          )}
        </div>
      </Link>

      <div className="bs-card__info">
        <span className="bs-card__category">{category}</span>
        <Link to={`/products/${id}`} className="bs-card__name-link">
          <h3 className="bs-card__name">{name}</h3>
        </Link>

        <div className="bs-card__rating">
          <Stars rating={rating} />
          <span className="bs-card__rating-val">{rating}</span>
          <span className="bs-card__reviews">({reviews.toLocaleString()})</span>
        </div>

        <div className="bs-card__sold">
          🛒 <strong>{soldCount.toLocaleString()}</strong> sold this month
        </div>

        <div className="bs-card__pricing">
          <span className="bs-card__offer">{offerPrice}</span>
          {realPrice && <span className="bs-card__real">{realPrice}</span>}
        </div>

        {inStock ? (
          <button
            className="bs-card__cart-btn"
            onClick={() => toast?.showToast(name)}
          >
            <CartIcon size={15} /> Add to Cart
          </button>
        ) : (
          <span className="bs-card__unavailable">Currently Unavailable</span>
        )}
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────
const Bestsellers = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [sortBy, setSortBy]       = useState('best-selling')
  const [visible, setVisible]     = useState(PAGE_SZ)

  const sorted = useMemo(() => {
    let base = activeTab === 'All'
      ? [...PRODUCTS]
      : PRODUCTS.filter(p => p.category === activeTab)

    switch (sortBy) {
      case 'top-rated':    base.sort((a, b) => b.rating - a.rating);     break
      case 'most-reviews': base.sort((a, b) => b.reviews - a.reviews);   break
      case 'price-asc':    base.sort((a, b) => a.price - b.price);       break
      case 'price-desc':   base.sort((a, b) => b.price - a.price);       break
      default:             base.sort((a, b) => b.soldCount - a.soldCount)
    }
    return base
  }, [activeTab, sortBy])

  const shown   = sorted.slice(0, visible)
  const hasMore = visible < sorted.length

  const handleTab = (tab) => { setActiveTab(tab); setVisible(PAGE_SZ) }

  const top = PRODUCTS[0]  // always the global #1 by sold count

  return (
    <div className="bs-page">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bs-hero">
        <div className="bs-hero__overlay" />
        <div className="container-custom bs-hero__inner">
          <div className="bs-hero__text">
            <span className="bs-hero__eyebrow">🏆 Customer Favourites</span>
            <h1 className="bs-hero__title">Best Sellers</h1>
            <p className="bs-hero__sub">
              The most-loved Indian products chosen by over a lakh customers worldwide.
              Ranked by real sales, verified reviews, and repeat purchases.
            </p>
            <div className="bs-hero__trust">
              <span>⭐ Customer-voted rankings</span>
              <span>🔄 Updated every week</span>
              <span>✅ 100% authentic products</span>
            </div>
          </div>
          <div className="bs-hero__stats">
            <div className="bs-hero__stat">
              <span className="bs-hero__stat-num">50K+</span>
              <span className="bs-hero__stat-label">Units sold this month</span>
            </div>
            <div className="bs-hero__stat">
              <span className="bs-hero__stat-num">4.7 ★</span>
              <span className="bs-hero__stat-label">Average rating</span>
            </div>
            <div className="bs-hero__stat">
              <span className="bs-hero__stat-num">8,900+</span>
              <span className="bs-hero__stat-label">Verified reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── #1 Best Seller Spotlight ───────────────────────────────────────── */}
      <section className="bs-spotlight">
        <div className="container-custom">
          <div className="bs-spotlight__label">
            <span>🥇 #1 Best Seller This Month</span>
          </div>
          <div className="bs-spotlight__card">
            <Link to={`/products/${top.id}`} className="bs-spotlight__img-wrap">
              <img src={top.image} alt={top.name} />
              <span className="bs-spotlight__disc">{top.discountPct}% OFF</span>
            </Link>
            <div className="bs-spotlight__info">
              <span className="bs-spotlight__cat">{top.category}</span>
              <h2 className="bs-spotlight__name">{top.name}</h2>
              <div className="bs-spotlight__rating">
                <Stars rating={top.rating} size="lg" />
                <span>{top.rating} ({top.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="bs-spotlight__sold-row">
                <span className="bs-spotlight__sold-pill">
                  🛒 {top.soldCount.toLocaleString()} sold this month
                </span>
                <span className="bs-spotlight__sold-pill bs-spotlight__sold-pill--green">
                  ✅ Verified best seller
                </span>
              </div>
              <p className="bs-spotlight__why">
                Consistently ranked #1 for 6 consecutive weeks. Loved by customers in
                the US, UK, Australia, and Canada for its exquisite craftsmanship and
                authentic Banarasi weave. A timeless piece that ships worldwide.
              </p>
              <div className="bs-spotlight__pricing">
                <span className="bs-spotlight__offer">{top.offerPrice}</span>
                <span className="bs-spotlight__real">{top.realPrice}</span>
              </div>
              <div className="bs-spotlight__actions">
                <button
                  className="bs-spotlight__cart"
                  onClick={() => {/* toast */}}
                >
                  <CartIcon size={18} /> Add to Cart
                </button>
                <Link to={`/products/${top.id}`} className="bs-spotlight__view">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why These Are Best Sellers ────────────────────────────────────── */}
      <section className="bs-why">
        <div className="container-custom">
          <h2 className="bs-why__title">How We Rank Best Sellers</h2>
          <div className="bs-why__grid">
            {WHY.map(w => (
              <div key={w.title} className="bs-why__card">
                <span className="bs-why__emoji">{w.emoji}</span>
                <h4 className="bs-why__card-title">{w.title}</h4>
                <p className="bs-why__card-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product rankings ──────────────────────────────────────────────── */}
      <div className="container-custom bs-content">

        {/* Tabs */}
        <div className="bs-tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`bs-tab${activeTab === tab ? ' bs-tab--active' : ''}`}
              onClick={() => handleTab(tab)}
            >
              {tab}
              <span className="bs-tab__count">
                {tab === 'All'
                  ? PRODUCTS.length
                  : PRODUCTS.filter(p => p.category === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Sort + count bar */}
        <div className="bs-bar">
          <p className="bs-bar__count">
            Showing <strong>{shown.length}</strong> of{' '}
            <strong>{sorted.length}</strong> best sellers
          </p>
          <div className="bs-bar__sort">
            <label htmlFor="bs-sort">Sort by:</label>
            <select
              id="bs-sort"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              {SORT.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        {shown.length > 0 ? (
          <div className="bs-grid">
            {shown.map((p, i) => (
              <BsCard
                key={p.id}
                rank={i + 1}
                {...p}
              />
            ))}
          </div>
        ) : (
          <div className="bs-empty">
            <span>🔍</span>
            <p>No best sellers in this category yet.</p>
            <button onClick={() => handleTab('All')}>View All Best Sellers</button>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="bs-load-more">
            <button onClick={() => setVisible(v => v + PAGE_SZ)}>
              Load More
              <span>{sorted.length - visible} more</span>
            </button>
          </div>
        )}
      </div>

    </div>
  )
}

export default Bestsellers
