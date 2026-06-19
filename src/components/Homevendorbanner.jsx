import React from 'react';
import { Link } from 'react-router-dom';

// ── Step illustrations ────────────────────────────────────────────────────
const RegisterIllustration = () => (
  <svg viewBox="0 0 130 130" fill="none">
    <rect x="42" y="18" width="46" height="78" rx="7" fill="#fff" stroke="#e0e0e0" strokeWidth="1.5"/>
    <rect x="48" y="26" width="34" height="52" rx="3" fill="#f0f4ff"/>
    <rect x="52" y="32" width="26" height="4" rx="2" fill="#4a90d9"/>
    <rect x="52" y="40" width="18" height="3" rx="1.5" fill="#c8d8f0"/>
    <rect x="52" y="46" width="22" height="3" rx="1.5" fill="#c8d8f0"/>
    <circle cx="65" cy="62" r="9" fill="#ff6b6b" opacity=".15"/>
    <path d="M59 58h2l1.5 7h7l1.5-5h-9" stroke="#ff6b6b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="63" cy="67" r="1" fill="#ff6b6b"/>
    <circle cx="67" cy="67" r="1" fill="#ff6b6b"/>
    <circle cx="78" cy="30" r="8" fill="#ff6b6b"/>
    <rect x="74.5" y="30" width="7" height="5" rx="1" fill="#fff"/>
    <path d="M75.5 30v-2a2.5 2.5 0 0 1 5 0v2" stroke="#fff" strokeWidth="1.2"/>
    <circle cx="36" cy="60" r="8" fill="#f5a0a0"/>
    <path d="M22 95c0-8 6-13 14-13s14 5 14 13" fill="#ff6b6b" opacity=".7"/>
    <rect x="28" y="72" width="16" height="20" rx="4" fill="#ff6b6b" opacity=".7"/>
  </svg>
);

const DeliverIllustration = () => (
  <svg viewBox="0 0 130 130" fill="none">
    <rect x="10" y="55" width="72" height="38" rx="5" fill="#d35400"/>
    <rect x="10" y="55" width="28" height="38" rx="5" fill="#e67e22"/>
    <rect x="14" y="60" width="20" height="20" rx="3" fill="#a8d8f8"/>
    <rect x="44" y="60" width="32" height="14" rx="2" fill="#a8d8f8"/>
    <circle cx="30" cy="96" r="9" fill="#555"/><circle cx="30" cy="96" r="4" fill="#999"/>
    <circle cx="68" cy="96" r="9" fill="#555"/><circle cx="68" cy="96" r="4" fill="#999"/>
    <rect x="5" y="104" width="90" height="3" rx="1.5" fill="#ddd"/>
    <rect x="80" y="30" width="28" height="44" rx="5" fill="#fff" stroke="#ddd" strokeWidth="1.5"/>
    <rect x="84" y="36" width="20" height="32" rx="2" fill="#e8f4ff"/>
    <path d="M94 42c-4 0-7 3-7 7 0 5 7 12 7 12s7-7 7-12c0-4-3-7-7-7z" fill="#e74c3c"/>
    <circle cx="94" cy="49" r="2.5" fill="#fff"/>
    <ellipse cx="94" cy="82" rx="10" ry="6" fill="#f5c6a0"/>
    <rect x="84" y="74" width="5" height="10" rx="2.5" fill="#f5c6a0"/>
    <rect x="90" y="72" width="5" height="12" rx="2.5" fill="#f5c6a0"/>
    <rect x="96" y="73" width="5" height="11" rx="2.5" fill="#f5c6a0"/>
    <rect x="102" y="76" width="4" height="8" rx="2" fill="#f5c6a0"/>
  </svg>
);

const FulfillIllustration = () => (
  <svg viewBox="0 0 130 130" fill="none">
    <rect x="10" y="82" width="28" height="26" rx="2" fill="#d35400"/>
    <rect x="10" y="82" width="28" height="10" rx="2" fill="#e67e22"/>
    <path d="M16 82v10M24 82v10" stroke="#fff" strokeWidth="1.2" strokeDasharray="2 1.5"/>
    <rect x="42" y="88" width="24" height="20" rx="2" fill="#d35400"/>
    <rect x="42" y="88" width="24" height="8" rx="2" fill="#e67e22"/>
    <rect x="62" y="20" width="50" height="64" rx="4" fill="#fff" stroke="#ddd" strokeWidth="1.5"/>
    <rect x="78" y="14" width="18" height="12" rx="6" fill="#bbb"/>
    <rect x="80" y="16" width="14" height="8" rx="4" fill="#fff"/>
    <rect x="70" y="34" width="8" height="8" rx="1.5" fill="#eee" stroke="#ccc" strokeWidth="1"/>
    <path d="M71.5 38l2 2 3-3" stroke="#27ae60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="82" y="36" width="22" height="3" rx="1.5" fill="#ddd"/>
    <rect x="70" y="46" width="8" height="8" rx="1.5" fill="#eee" stroke="#ccc" strokeWidth="1"/>
    <path d="M71.5 50l2 2 3-3" stroke="#27ae60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="82" y="48" width="18" height="3" rx="1.5" fill="#ddd"/>
    <rect x="70" y="58" width="8" height="8" rx="1.5" fill="#eee" stroke="#ccc" strokeWidth="1"/>
    <rect x="82" y="60" width="20" height="3" rx="1.5" fill="#ddd"/>
    <circle cx="30" cy="48" r="9" fill="#f5c6a0"/>
    <circle cx="30" cy="36" r="10" fill="#f39c12"/>
    <rect x="20" y="57" width="20" height="26" rx="4" fill="#f39c12"/>
    <rect x="14" y="58" width="8" height="18" rx="4" fill="#f39c12"/>
    <rect x="38" y="58" width="8" height="18" rx="4" fill="#f39c12"/>
  </svg>
);

const GrowthIllustration = () => (
  <svg viewBox="0 0 130 130" fill="none">
    <rect x="20" y="72" width="80" height="5" rx="2.5" fill="#bdc3c7"/>
    <rect x="30" y="38" width="60" height="38" rx="4" fill="#2c3e50"/>
    <rect x="34" y="42" width="52" height="30" rx="2" fill="#1a252f"/>
    <rect x="40" y="60" width="6" height="12" rx="1" fill="#27ae60"/>
    <rect x="50" y="54" width="6" height="18" rx="1" fill="#27ae60"/>
    <rect x="60" y="50" width="6" height="22" rx="1" fill="#2ecc71"/>
    <rect x="70" y="44" width="6" height="28" rx="1" fill="#2ecc71"/>
    <path d="M39 64 L50 56 L60 52 L74 44" stroke="#f39c12" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="74" cy="44" r="2" fill="#f39c12"/>
    <circle cx="95" cy="60" r="10" fill="#f5c6a0"/>
    <path d="M82 90c0-9 5-15 13-15s13 6 13 15" fill="#3498db" opacity=".8"/>
    <rect x="85" y="75" width="20" height="18" rx="4" fill="#3498db" opacity=".8"/>
    <circle cx="22" cy="62" r="8" fill="#f39c12"/>
    <circle cx="22" cy="62" r="5" fill="#f5c6a0"/>
    <text x="22" y="66" textAnchor="middle" fill="#d35400" fontSize="7" fontWeight="bold">$</text>
    <circle cx="14" cy="54" r="6" fill="#f5a623" opacity=".7"/>
    <circle cx="30" cy="54" r="5" fill="#f5a623" opacity=".5"/>
  </svg>
);

const ArrowConnector = ({ rotate = 0 }) => (
  <div className="vb-arrow" style={{ transform: `rotate(${rotate}deg)` }}>
    <svg viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
      <path d="M10 14h8M15 11l3 3-3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

// ── Benefit check icon ────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" width="18" height="18" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="9" fill="rgba(255,255,255,0.15)"/>
    <path d="M6 10l3 3 5-5" stroke="#81db94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const benefits = [
  'Free Registration & Easy Setup',
  'Secure & On-Time Payments',
  'Dedicated Vendor Dashboard',
  'Reach Customers in 50+ Countries',
];

const stats = [
  { value: '10K+',   label: 'Active Vendors'  },
  { value: '50+',    label: 'Countries'        },
  { value: '500K+',  label: 'Products Listed'  },
];

// ── Component ──────────────────────────────────────────────────────────────
const Homevendorbanner = () => (
  <section className="vendor-banner">
    {/* Decorative background blobs */}
    <span className="vb-blob vb-blob--tl" aria-hidden="true" />
    <span className="vb-blob vb-blob--br" aria-hidden="true" />
    <span className="vb-blob vb-blob--mr" aria-hidden="true" />

    <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
      <div className="row align-items-center g-4 g-lg-5">

        {/* ── Left: rich text content ── */}
        <div className="col-lg-5">
          <span className="vb-label">Be a Vendor</span>

          <h2 className="vb-heading">
            Sell Your Products<br />
            <span className="vb-heading--accent">Globally</span>
          </h2>

          <p className="vb-tagline">
            Join the fastest-growing Indian marketplace and put your products
            in front of millions of customers across the world.
          </p>

          {/* Stats */}
          <div className="vb-stats">
            {stats.map((s) => (
              <div key={s.label} className="vb-stat">
                <strong className="vb-stat__value">{s.value}</strong>
                <span  className="vb-stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <ul className="vb-benefits">
            {benefits.map((b) => (
              <li key={b} className="vb-benefits__item">
                <CheckIcon />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="vb-actions">
            <Link to="/become-vendor" className="vb-cta vb-cta--primary">
              Join Us Now
            </Link>
            <Link to="/become-vendor" className="vb-cta vb-cta--ghost">
              Learn More →
            </Link>
          </div>
        </div>

        {/* ── Right: 4 circles in a single horizontal row ── */}
        <div className="col-lg-7">
          <div className="vb-circles">
            <div className="vb-circle">
              <RegisterIllustration />
              <span className="vb-circle__label">Register</span>
            </div>
            <ArrowConnector rotate={0} />
            <div className="vb-circle">
              <DeliverIllustration />
              <span className="vb-circle__label">Deliver</span>
            </div>
            <ArrowConnector rotate={0} />
            <div className="vb-circle">
              <FulfillIllustration />
              <span className="vb-circle__label">Fulfill</span>
            </div>
            <ArrowConnector rotate={0} />
            <div className="vb-circle">
              <GrowthIllustration />
              <span className="vb-circle__label">Grow</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Homevendorbanner;
