import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import p01 from '../assets/sample-products/testproduct01.jpg'
import p02 from '../assets/sample-products/testproduct02.jpg'
import p04 from '../assets/sample-products/testproduct04.jpg'
import p12 from '../assets/sample-products/testproduct12.jpg'
import p08 from '../assets/sample-products/testproduct08.jpg'

const INIT_ITEMS = [
  { id: 1,  image: p01, name: 'Handcrafted Banarasi Silk Saree',  size: 'M (36)',    price: 44.99, qty: 1 },
  { id: 2,  image: p02, name: "Men's Classic Cotton Kurta",        size: 'L (38)',    price: 19.99, qty: 2 },
  { id: 4,  image: p04, name: 'Handwoven Phulkari Dupatta',        size: 'Free Size', price: 22.99, qty: 1 },
  { id: 12, image: p12, name: 'Kundan Bridal Jewellery Set',       size: 'Standard',  price: 45.99, qty: 1 },
  { id: 8,  image: p08, name: 'Traditional Rajasthani Juttis',     size: 'UK 6',      price: 31.99, qty: 2 },
]

const FREE_SHIPPING_AT = 100
const SHIPPING_COST    = 9.99
const TAX_RATE         = 0.08

// ── Icons ──────────────────────────────────────────────────────────────────
const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width={15} height={15}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
)

const EmptyCartIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" width={120} height={120}>
    <circle cx="60" cy="60" r="58" fill="#e8ffed" />
    <path d="M28 38h8l10 36h28l8-28H44" stroke="#007730" strokeWidth="3.5"
      strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="52" cy="84" r="5" fill="#007730" />
    <circle cx="76" cy="84" r="5" fill="#007730" />
    <path d="M60 52v12M54 58h12" stroke="#f58020" strokeWidth="3"
      strokeLinecap="round" />
  </svg>
)

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    width={14} height={14}>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    width={13} height={13}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
)

// ── Cart component ─────────────────────────────────────────────────────────
const Cart = () => {
  const [items, setItems]             = useState(INIT_ITEMS)
  const [promoCode, setPromoCode]     = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoError, setPromoError]   = useState(false)

  const updateQty = (id, delta) =>
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    )

  const removeItem = (id) =>
    setItems(prev => prev.filter(item => item.id !== id))

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'DESI10') {
      setPromoApplied(true)
      setPromoError(false)
    } else {
      setPromoError(true)
      setPromoApplied(false)
    }
  }

  const totalQty  = items.reduce((s, i) => s + i.qty, 0)
  const subtotal  = items.reduce((s, i) => s + i.price * i.qty, 0)
  const discount  = promoApplied ? subtotal * 0.1 : 0
  const shipping  = subtotal === 0 ? 0 : subtotal >= FREE_SHIPPING_AT ? 0 : SHIPPING_COST
  const tax       = (subtotal - discount) * TAX_RATE
  const total     = subtotal - discount + shipping + tax
  const toFree    = Math.max(0, FREE_SHIPPING_AT - subtotal)

  return (
    <div className="cart-page">
      <div className="container-custom">

        {/* Page heading */}
        <div className="cart-page__head">
          <h1 className="cart-page__title">Shopping Cart</h1>
          {items.length > 0 && (
            <span className="cart-page__count">
              {totalQty} {totalQty === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {items.length === 0 ? (

          /* ── Empty state ──────────────────────────────── */
          <div className="cart-empty">
            <EmptyCartIcon />
            <h2 className="cart-empty__heading">Your cart is empty</h2>
            <p className="cart-empty__sub">
              Looks like you haven't added anything yet.
            </p>
            <Link to="/products" className="cart-empty__btn">
              Start Shopping
            </Link>
          </div>

        ) : (

          /* ── Main layout ──────────────────────────────── */
          <div className="cart-layout">

            {/* ── Left: Items ───────────────────────────── */}
            <div className="cart-items">

              {/* Free-shipping progress bar */}
              {toFree > 0 && (
                <div className="cart-shipping-bar">
                  <TruckIcon />
                  <span>
                    Add <strong>${toFree.toFixed(2)}</strong> more for free shipping
                  </span>
                  <div className="cart-shipping-bar__track">
                    <div
                      className="cart-shipping-bar__fill"
                      style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_AT) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
              {toFree === 0 && (
                <div className="cart-shipping-bar cart-shipping-bar--free">
                  <TruckIcon />
                  <span><strong>You've unlocked free shipping!</strong></span>
                </div>
              )}

              {/* Column headers */}
              <div className="cart-items__header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span />
              </div>

              {/* Item rows */}
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item__product">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item__meta">
                      <p className="cart-item__name">{item.name}</p>
                      <span className="cart-item__size">Size: {item.size}</span>
                    </div>
                  </div>

                  <span className="cart-item__price">
                    ${item.price.toFixed(2)}
                  </span>

                  <div className="cart-item__qty">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      aria-label="Decrease quantity"
                    >−</button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>

                  <span className="cart-item__total">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>

                  <button
                    className="cart-item__remove"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <TrashIcon />
                  </button>
                </div>
              ))}

              {/* Footer */}
              <div className="cart-items__footer">
                <Link to="/products" className="cart-items__continue">
                  ← Continue Shopping
                </Link>
                <button
                  className="cart-items__clear"
                  onClick={() => setItems([])}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* ── Right: Order Summary ───────────────────── */}
            <aside className="cart-summary">
              <h2 className="cart-summary__heading">Order Summary</h2>

              <div className="cart-summary__rows">
                <div className="cart-summary__row">
                  <span>Subtotal ({totalQty} {totalQty === 1 ? 'item' : 'items'})</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {promoApplied && (
                  <div className="cart-summary__row cart-summary__row--discount">
                    <span>Discount (DESI10 — 10%)</span>
                    <span>−${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="cart-summary__row">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'cart-summary__free' : ''}>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="cart-summary__row">
                  <span>Estimated Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo code */}
              <div className="cart-summary__promo">
                <p className="cart-summary__promo-label">Promo Code</p>
                <div className="cart-summary__promo-row">
                  <input
                    type="text"
                    placeholder='Try "DESI10"'
                    value={promoCode}
                    onChange={e => { setPromoCode(e.target.value); setPromoError(false) }}
                    onKeyDown={e => e.key === 'Enter' && applyPromo()}
                  />
                  <button onClick={applyPromo}>Apply</button>
                </div>
                {promoApplied && (
                  <p className="cart-summary__promo-msg cart-summary__promo-msg--ok">
                    ✓ Promo applied — 10% off!
                  </p>
                )}
                {promoError && (
                  <p className="cart-summary__promo-msg cart-summary__promo-msg--err">
                    Invalid promo code. Try DESI10.
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="cart-summary__total-row">
                <span>Order Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="cart-summary__checkout d-block text-center mt-4">
                Proceed to Checkout
              </Link>

              <div className="cart-summary__secure">
                <LockIcon />
                Secure & encrypted checkout
              </div>

              <p className="cart-summary__note">
                <TruckIcon />
                Free shipping on orders over ${FREE_SHIPPING_AT}
              </p>
            </aside>

          </div>
        )}

      </div>
    </div>
  )
}

export default Cart
