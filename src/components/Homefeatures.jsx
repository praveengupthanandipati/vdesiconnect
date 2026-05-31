import React from 'react';

// ── Orange stroke icons matching the screenshot ────────────────────────────
const RocketIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4C14 4 7 12 6 22l4 2 2 4c10-1 18-8 18-16 0-5-4-8-8-8z" fill="currentColor" fillOpacity=".08"/>
    <path d="M22 4C14 4 7 12 6 22l4 2 2 4c10-1 18-8 18-16 0-5-4-8-8-8z"/>
    <circle cx="26" cy="18" r="3"/>
    <path d="M6 22 3 25M10 26 7 29"/>
    <path d="M8 30c-1 2-1 4 1 5s3 0 5-1"/>
  </svg>
);

const ReturnIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 14A14 14 0 0 1 36 22"/>
    <path d="M36 30A14 14 0 0 1 8 22"/>
    <polyline points="4,10 8,14 12,10"/>
    <polyline points="40,34 36,30 32,34"/>
  </svg>
);

const PaymentIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="9" width="36" height="26" rx="4"/>
    <line x1="4" y1="17" x2="40" y2="17"/>
    <line x1="10" y1="27" x2="18" y2="27"/>
    <line x1="10" y1="32" x2="15" y2="32"/>
    <rect x="28" y="24" width="8" height="7" rx="1.5" fill="currentColor" fillOpacity=".15"/>
    <rect x="28" y="24" width="8" height="7" rx="1.5"/>
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M38 26a4 4 0 0 1-4 4H14l-6 6V12a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v14z" fill="currentColor" fillOpacity=".08"/>
    <path d="M38 26a4 4 0 0 1-4 4H14l-6 6V12a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v14z"/>
    <circle cx="16" cy="19" r="1.5" fill="currentColor"/>
    <circle cx="22" cy="19" r="1.5" fill="currentColor"/>
    <circle cx="28" cy="19" r="1.5" fill="currentColor"/>
  </svg>
);

const features = [
  {
    icon: <RocketIcon />,
    title: 'Free Delivery',
    desc: 'For all orders over $99',
  },
  {
    icon: <ReturnIcon />,
    title: '90 Days Return',
    desc: 'If goods have problems',
  },
  {
    icon: <PaymentIcon />,
    title: 'Secure Payment',
    desc: '100% secure payment',
  },
  {
    icon: <SupportIcon />,
    title: '24/7 Support',
    desc: 'Dedicated support team',
  },
];

const Homefeatures = () => (
  <section className="home-features">
    <div className="container-custom">
      <div className="hf-grid">
        {features.map((f, i) => (
          <React.Fragment key={f.title}>
            <div className="hf-item">
              <div className="hf-icon">{f.icon}</div>
              <div className="hf-text">
                <h4 className="hf-title">{f.title}</h4>
                <p  className="hf-desc">{f.desc}</p>
              </div>
            </div>
            {i < features.length - 1 && (
              <div className="hf-divider" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Homefeatures;
