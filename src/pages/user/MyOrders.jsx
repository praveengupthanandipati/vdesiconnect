import React, { useState } from 'react'

// ── Sample data ───────────────────────────────────────────────────────────────
const ORDERS = [
  {
    id: 'ORD-20260001',
    date: 'June 10, 2026',
    status: 'Delivered',
    deliverySlot: 'June 13, 2026 | 10:00 AM – 12:00 PM',
    totalAmount: 148.97,
    totalSaved: 31.00,
    paymentMode: 'Credit Card (Visa ****4242)',
    transactionId: 'TXN8842019301',
    paymentStatus: 'Paid',
    items: [
      { name: 'Basmati Rice Premium 10 lb', qty: 2, unit: 149.00, img: '🌾' },
      { name: 'Organic Desi Ghee 32 oz',   qty: 1, unit: 24.99,  img: '🧈' },
      { name: 'Masala Chai Blend 250g',     qty: 3, unit: 8.99,   img: '🍵' },
    ],
    address: {
      name: 'John Doe', phone: '+1 (555) 000-0000',
      line1: '123 Main Street', line2: 'Apt 4B',
      city: 'New York', state: 'NY', zip: '10001', country: 'United States',
    },
  },
  {
    id: 'ORD-20260002',
    date: 'June 15, 2026',
    status: 'Out for Delivery',
    deliverySlot: 'June 18, 2026 | 2:00 PM – 5:00 PM',
    totalAmount: 62.48,
    totalSaved: 12.50,
    paymentMode: 'UPI (john@okaxis)',
    transactionId: 'TXN9920034871',
    paymentStatus: 'Paid',
    items: [
      { name: 'Turmeric Powder 1 lb',         qty: 2, unit: 9.99,  img: '🟡' },
      { name: 'Alphonso Mango Pulp 850g x 6', qty: 1, unit: 42.50, img: '🥭' },
    ],
    address: {
      name: 'John Doe', phone: '+1 (555) 000-0000',
      line1: '456 Business Ave', line2: 'Suite 900',
      city: 'New York', state: 'NY', zip: '10002', country: 'United States',
    },
  },
  {
    id: 'ORD-20260003',
    date: 'June 17, 2026',
    status: 'Processing',
    deliverySlot: 'June 20, 2026 | 9:00 AM – 1:00 PM',
    totalAmount: 34.99,
    totalSaved: 5.00,
    paymentMode: 'Debit Card (Mastercard ****8801)',
    transactionId: 'TXN7710094652',
    paymentStatus: 'Paid',
    items: [
      { name: 'Coconut Oil Cold-Pressed 1L', qty: 1, unit: 34.99, img: '🥥' },
    ],
    address: {
      name: 'John Doe', phone: '+1 (555) 000-0000',
      line1: '123 Main Street', line2: 'Apt 4B',
      city: 'New York', state: 'NY', zip: '10001', country: 'United States',
    },
  },
]

// ── Status config ─────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  'Delivered':        { color: '#007730', bg: '#e8ffed', icon: '✅', step: 4 },
  'Out for Delivery': { color: '#0077cc', bg: '#e8f4ff', icon: '🚚', step: 3 },
  'Processing':       { color: '#b45309', bg: '#fff8e1', icon: '⏳', step: 2 },
  'Cancelled':        { color: '#dc3545', bg: '#fff5f5', icon: '❌', step: 0 },
}

const STEPS = ['Order Placed', 'Processing', 'Dispatched', 'Out for Delivery', 'Delivered']

// ── Progress tracker ──────────────────────────────────────────────────────────
const StatusTracker = ({ status }) => {
  const cfg  = STATUS_CONFIG[status] || STATUS_CONFIG['Processing']
  const step = cfg.step

  return (
    <div className="mo-tracker">
      {STEPS.map((label, i) => (
        <React.Fragment key={label}>
          <div className={`mo-tracker__step${i <= step ? ' mo-tracker__step--done' : ''}`}>
            <div className="mo-tracker__dot">{i < step ? '✓' : i === step ? cfg.icon : ''}</div>
            <span className="mo-tracker__label">{label}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`mo-tracker__line${i < step ? ' mo-tracker__line--done' : ''}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

// ── Single accordion item ─────────────────────────────────────────────────────
const OrderAccordion = ({ order, open, onToggle }) => {
  const cfg      = STATUS_CONFIG[order.status] || STATUS_CONFIG['Processing']
  const itemTotal = order.items.reduce((s, i) => s + i.unit * i.qty, 0)
  const totalItems = order.items.reduce((s, i) => s + i.qty, 0)

  return (
    <div className={`mo-accordion${open ? ' mo-accordion--open' : ''}`}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <button className="mo-accordion__header" onClick={onToggle} aria-expanded={open}>
        <div className="mo-accordion__meta">
          <span className="mo-accordion__id">#{order.id}</span>
          <span className="mo-accordion__date">{order.date}</span>
        </div>
        <div className="mo-accordion__right">
          <span className="mo-badge" style={{ color: cfg.color, background: cfg.bg }}>
            {cfg.icon} {order.status}
          </span>
          <span className="mo-accordion__total">${order.totalAmount.toFixed(2)}</span>
          <span className={`mo-chevron${open ? ' mo-chevron--open' : ''}`}>›</span>
        </div>
      </button>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      {open && (
        <div className="mo-accordion__body">

          {/* Delivery status tracker */}
          <div className="mo-section">
            <h4 className="mo-section__title">📍 Delivery Status</h4>
            <StatusTracker status={order.status} />
            <p className="mo-delivery-slot">
              <strong>Delivery Slot:</strong> {order.deliverySlot}
            </p>
          </div>

          {/* Order summary grid */}
          <div className="mo-section">
            <h4 className="mo-section__title">📋 Order Summary</h4>
            <div className="mo-info-grid">
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Order No.</span>
                <span className="mo-info-cell__value">{order.id}</span>
              </div>
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Order Date</span>
                <span className="mo-info-cell__value">{order.date}</span>
              </div>
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Total Items</span>
                <span className="mo-info-cell__value">{totalItems} item{totalItems > 1 ? 's' : ''}</span>
              </div>
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Total Amount</span>
                <span className="mo-info-cell__value mo-info-cell__value--green">
                  ${order.totalAmount.toFixed(2)}
                </span>
              </div>
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Total Saved</span>
                <span className="mo-info-cell__value mo-info-cell__value--save">
                  🏷️ ${order.totalSaved.toFixed(2)}
                </span>
              </div>
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Status</span>
                <span className="mo-badge" style={{ color: cfg.color, background: cfg.bg }}>
                  {cfg.icon} {order.status}
                </span>
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className="mo-section">
            <h4 className="mo-section__title">🛍️ Product Details</h4>
            <div className="mo-products">
              {order.items.map((item, idx) => (
                <div key={idx} className="mo-product">
                  <div className="mo-product__img">{item.img}</div>
                  <div className="mo-product__info">
                    <p className="mo-product__name">{item.name}</p>
                    <p className="mo-product__qty">Qty: {item.qty}</p>
                  </div>
                  <div className="mo-product__price">
                    <span className="mo-product__unit">${item.unit.toFixed(2)} / unit</span>
                    <span className="mo-product__subtotal">${(item.unit * item.qty).toFixed(2)}</span>
                  </div>
                </div>
              ))}
              <div className="mo-products__total">
                <span>Items Subtotal</span>
                <span>${itemTotal.toFixed(2)}</span>
              </div>
              <div className="mo-products__total mo-products__total--saved">
                <span>🏷️ You Saved</span>
                <span>– ${order.totalSaved.toFixed(2)}</span>
              </div>
              <div className="mo-products__total mo-products__total--grand">
                <span>Grand Total</span>
                <span>${order.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment details */}
          <div className="mo-section">
            <h4 className="mo-section__title">💳 Payment Details</h4>
            <div className="mo-info-grid">
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Payment Mode</span>
                <span className="mo-info-cell__value">{order.paymentMode}</span>
              </div>
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Transaction ID</span>
                <span className="mo-info-cell__value mo-info-cell__value--mono">{order.transactionId}</span>
              </div>
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Payment Status</span>
                <span className="mo-badge mo-badge--pay">✅ {order.paymentStatus}</span>
              </div>
              <div className="mo-info-cell">
                <span className="mo-info-cell__label">Amount Paid</span>
                <span className="mo-info-cell__value mo-info-cell__value--green">
                  ${order.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery address */}
          <div className="mo-section mo-section--last">
            <h4 className="mo-section__title">🏠 Delivery Address</h4>
            <div className="mo-address">
              <p className="mo-address__name">{order.address.name}</p>
              <p className="mo-address__line">{order.address.line1}
                {order.address.line2 ? `, ${order.address.line2}` : ''}</p>
              <p className="mo-address__line">
                {order.address.city}, {order.address.state} {order.address.zip}
              </p>
              <p className="mo-address__line">{order.address.country}</p>
              <p className="mo-address__phone">📞 {order.address.phone}</p>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
const MyOrders = () => {
  const [openId, setOpenId] = useState(ORDERS[0].id)

  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <div className="ud-page">

      <div className="ud-page__breadcrumb">
        <a href="/">Home</a> › <span>My Orders</span>
      </div>

      <div className="ud-page__header">
        <div>
          <h1 className="ud-page__title">My Orders</h1>
          <p className="ud-page__subtitle">{ORDERS.length} orders placed</p>
        </div>
        <a href="/" className="ud-btn ud-btn--primary">+ Place New Order</a>
      </div>

      <div className="mo-list">
        {ORDERS.map(order => (
          <OrderAccordion
            key={order.id}
            order={order}
            open={openId === order.id}
            onToggle={() => toggle(order.id)}
          />
        ))}
      </div>

    </div>
  )
}

export default MyOrders
