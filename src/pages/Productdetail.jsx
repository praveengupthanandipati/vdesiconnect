import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import ProductCard from '../components/product'
import { WhatsAppIcon, CartIcon, HeartIcon } from '../components/Icons'

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

const SLIDER_IMAGES = [p01, p02, p03, p04, p05]

const SPECS = [
  { label: 'Fabric',           value: 'Pure Banarasi Silk' },
  { label: 'Color',            value: 'Red & Gold' },
  { label: 'Style',            value: 'Long Frock / Anarkali' },
  { label: 'Pattern',          value: 'Banarasi Brocade Weave' },
  { label: 'Occasion',         value: 'Festive, Wedding, Party' },
  { label: 'Sleeve Type',      value: 'Full Sleeve' },
  { label: 'Neckline',         value: 'Round Neck with Embroidery' },
  { label: 'Frock Length',     value: 'Floor Length (52 inches)' },
  { label: 'Fit Type',         value: 'Regular' },
  { label: 'Care',             value: 'Dry Clean Only' },
]

const SIZES = ['XS (32)', 'S (34)', 'M (36)', 'L (38)', 'XL (40)', 'XXL (42)']

const TABS = ['Description', 'Shipping Info', 'Specification']

const RELATED = [
  { id: 6,  image: p06, name: "Women's Embroidered Anarkali Suit",  offerPrice: '$52.99', realPrice: '$81.99',  discountPct: 35, outOfStock: false },
  { id: 7,  image: p07, name: 'Ayurvedic Herbal Skincare Box',       offerPrice: '$24.99', realPrice: '$30.49',  discountPct: 18, outOfStock: true  },
  { id: 8,  image: p08, name: 'Traditional Rajasthani Juttis',       offerPrice: '$31.99', realPrice: '$40.99',  discountPct: 22, outOfStock: false },
  { id: 9,  image: p09, name: 'Desi Pickle & Chutney Combo',         offerPrice: '$16.99', realPrice: '$19.29',  discountPct: 12, outOfStock: false },
  { id: 10, image: p10, name: 'Hand-Painted Madhubani Art Frame',    offerPrice: '$38.99', realPrice: '$53.99',  discountPct: 28, outOfStock: false },
]

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={18} height={18}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
)
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={18} height={18}>
    <path d="M9 18l6-6-6-6" />
  </svg>
)
const CheckCircle = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)
const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={16} height={16}>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const Productdetail = () => {
  const [activeImg, setActiveImg]     = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [qty, setQty]                 = useState(1)
  const [activeTab, setActiveTab]     = useState('Description')
  const [wishlisted, setWishlisted]   = useState(false)
  const toast = useToast()

  const prevImg = () => setActiveImg(i => (i === 0 ? SLIDER_IMAGES.length - 1 : i - 1))
  const nextImg = () => setActiveImg(i => (i === SLIDER_IMAGES.length - 1 ? 0 : i + 1))

  return (
    <div className="pd-page">
      <div className="container-custom">

        {/* Breadcrumb */}
        <nav className="pd-breadcrumb" aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span>Banarasi Silk Long Frock</span>
        </nav>

        {/* ── Main: Gallery + Info ─────────────────────────── */}
        <div className="pd-main">

          {/* Gallery */}
          <div className="pd-gallery">
            <div className="pd-gallery__main">
              <img src={SLIDER_IMAGES[activeImg]} alt="Banarasi Silk Long Frock" />
              <button className="pd-gallery__arrow pd-gallery__arrow--prev" onClick={prevImg} aria-label="Previous image">
                <ChevronLeft />
              </button>
              <button className="pd-gallery__arrow pd-gallery__arrow--next" onClick={nextImg} aria-label="Next image">
                <ChevronRight />
              </button>
              <span className="pd-gallery__badge">25% OFF</span>
            </div>
            <div className="pd-gallery__thumbs">
              {SLIDER_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`pd-gallery__thumb${activeImg === i ? ' pd-gallery__thumb--active' : ''}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt={`View ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pd-info">

            <h1 className="pd-info__name">
              Handcrafted Banarasi Silk Long Frock
            </h1>

            <div className="pd-info__meta">
              <span>SKU: VDC-2024-BF-001</span>
              <span className="pd-info__meta-sep">|</span>
              <span>Model: BF-SILK-RED</span>
            </div>

            <div className="pd-info__rating">
              <span className="pd-info__stars">★★★★</span>
              <span className="pd-info__half-star">★</span>
              <span className="pd-info__rating-val">4.5</span>
              <span className="pd-info__reviews">(128 reviews)</span>
            </div>

            {/* Social share */}
            <div className="pd-info__share">
              <span className="pd-info__share-label">Share:</span>
              <a href="#" className="pd-info__share-btn pd-info__share-btn--fb" aria-label="Share on Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="pd-info__share-btn pd-info__share-btn--tw" aria-label="Share on X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="pd-info__share-btn pd-info__share-btn--pt" aria-label="Share on Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
              <a href="https://wa.me/?text=Check%20this%20Banarasi%20Silk%20Frock" target="_blank" rel="noreferrer" className="pd-info__share-btn pd-info__share-btn--wa" aria-label="Share on WhatsApp">
                <WhatsAppIcon size={14} />
              </a>
            </div>

            {/* Price */}
            <div className="pd-info__price-row">
              <span className="pd-info__offer">$44.99</span>
              <span className="pd-info__original">$59.99</span>
              <span className="pd-info__discount-badge">25% OFF</span>
            </div>

            {/* Sold by */}
            <div className="pd-info__sold-by">
              <CheckCircle />
              Sold by <strong>VDesiConnect</strong>
            </div>

            {/* Specifications */}
            <div className="pd-info__specs">
              <p className="pd-info__specs-title">Long Frock Specifications</p>
              <table className="pd-info__specs-table">
                <tbody>
                  {SPECS.map(s => (
                    <tr key={s.label}>
                      <td>{s.label}</td>
                      <td>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Size + Quantity */}
            <div className="pd-info__controls">
              <div className="pd-info__control-group">
                <label className="pd-info__control-label" htmlFor="size-select">Size</label>
                <select
                  id="size-select"
                  className="pd-info__size-select"
                  value={selectedSize}
                  onChange={e => setSelectedSize(e.target.value)}
                >
                  <option value="">Select Size</option>
                  {SIZES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="pd-info__control-group">
                <label className="pd-info__control-label">Quantity</label>
                <div className="pd-info__qty">
                  <button
                    className="pd-info__qty-btn"
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >−</button>
                  <span className="pd-info__qty-val">{qty}</span>
                  <button
                    className="pd-info__qty-btn"
                    onClick={() => setQty(q => q + 1)}
                    aria-label="Increase quantity"
                  >+</button>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pd-info__actions">
              <a
                href="https://wa.me/+12345678900"
                className="pd-info__btn pd-info__btn--wa"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={17} />
                WhatsApp
              </a>
              <button
                className="pd-info__btn pd-info__btn--cart"
                onClick={() => toast?.showToast('Handcrafted Banarasi Silk Long Frock')}
              >
                <CartIcon size={17} />
                Add to Cart
              </button>
              <button
                className={`pd-info__btn pd-info__btn--wish${wishlisted ? ' pd-info__btn--wish-active' : ''}`}
                onClick={() => setWishlisted(w => !w)}
                aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <HeartIcon size={17} />
              </button>
            </div>

            {/* Delivery info */}
            <div className="pd-info__delivery">
              <TruckIcon />
              Free delivery on orders over <strong>$50</strong>&nbsp;·&nbsp;Delivered in 7–10 business days
            </div>

          </div>
        </div>

        {/* ── Tabs ─────────────────────────────────────────── */}
        <div className="pd-tabs">
          <div className="pd-tabs__nav" role="tablist">
            {TABS.map(tab => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`pd-tabs__tab${activeTab === tab ? ' pd-tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="pd-tabs__body">
            {activeTab === 'Description' && (
              <div className="pd-tabs__content">
                <h3>About This Product</h3>
                <p>
                  Drape yourself in the timeless elegance of our Handcrafted Banarasi Silk Long Frock,
                  woven by master artisans in the heart of Varanasi. This floor-length anarkali-style
                  frock showcases the rich tradition of Banarasi brocade, featuring intricate zari work
                  and a lustrous finish perfect for festive celebrations, weddings, and special occasions.
                </p>
                <p>
                  The vibrant red base is adorned with gold brocade motifs inspired by Mughal
                  architecture — paisleys, floral jhaalar, and geometric borders — all carefully
                  handwoven using fine silk threads. The full sleeves and round neckline are delicately
                  embroidered for an added touch of elegance.
                </p>
                <ul>
                  <li>Pure Banarasi silk with genuine zari threadwork</li>
                  <li>Handcrafted by certified artisans from Varanasi</li>
                  <li>Natural dyes for vibrant, long-lasting color</li>
                  <li>Includes matching dupatta with zari border</li>
                  <li>Each piece is unique due to handloom weaving</li>
                </ul>
              </div>
            )}

            {activeTab === 'Shipping Info' && (
              <div className="pd-tabs__content">
                <h3>Shipping & Delivery</h3>
                <table className="pd-tabs__table">
                  <tbody>
                    <tr><td>Standard Delivery</td><td>7–10 business days — Free on orders over $50</td></tr>
                    <tr><td>Express Delivery</td><td>3–5 business days — $9.99</td></tr>
                    <tr><td>International</td><td>14–21 business days — Rates at checkout</td></tr>
                    <tr><td>Processing Time</td><td>1–2 business days before dispatch</td></tr>
                  </tbody>
                </table>
                <h3>Returns & Exchanges</h3>
                <p>
                  We accept returns within <strong>30 days</strong> of delivery for unworn, unwashed
                  items with all original tags attached. Exchange requests can be made within 15 days.
                  Sale items are final sale and not eligible for return.
                </p>
                <p>
                  To initiate a return or exchange, contact our team via WhatsApp or email at{' '}
                  <strong>support@vdesiconnect.com</strong>.
                </p>
              </div>
            )}

            {activeTab === 'Specification' && (
              <div className="pd-tabs__content">
                <h3>Full Specifications</h3>
                <table className="pd-tabs__table">
                  <tbody>
                    {[
                      ...SPECS,
                      { label: 'Weight',   value: '650 grams' },
                      { label: 'Sizes',    value: 'XS (32) – XXL (42)' },
                      { label: 'Origin',   value: 'Varanasi, Uttar Pradesh, India' },
                      { label: 'Warranty', value: '30-day quality guarantee' },
                    ].map(s => (
                      <tr key={s.label}>
                        <td>{s.label}</td>
                        <td>{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* ── Related Products ──────────────────────────────── */}
        <div className="pd-related">
          <h2 className="pd-related__title">Related Products</h2>
          <div className="pd-related__grid">
            {RELATED.map(p => (
              <Link key={p.id} to={`/products/${p.id}`} className="product-card-link">
                <ProductCard {...p} />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Productdetail
