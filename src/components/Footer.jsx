import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// ── Data ──────────────────────────────────────────────────────────────────
const categoryColumns = [
  {
    name: 'Fashion',
    links: [
      "Men's Clothing", "Women's Clothing", "Kids' Wear", 'Footwear',
      'Accessories', 'Ethnic Wear', 'Sarees', 'Kurtis', 'Jewellery', 'Bags & Wallets',
    ],
  },
  {
    name: 'Herbal Products',
    links: [
      'Ayurvedic Supplements', 'Herbal Teas', 'Essential Oils', 'Natural Skincare',
      'Herbal Powders', 'Organic Herbs', 'Hair Care', 'Immunity Boosters',
      'Digestive Aids', 'Wellness Packs',
    ],
  },
  {
    name: 'Food',
    links: [
      'Indian Groceries', 'Snacks & Sweets', 'Pickles & Chutneys', 'Spices & Masalas',
      'Beverages', 'Ready to Cook', 'Dairy Products', 'Dry Fruits',
      'Frozen Foods', 'Organic Foods',
    ],
  },
  {
    name: 'Gifts',
    links: [
      'Birthday Gifts', 'Wedding Gifts', 'Festival Gifts', 'Corporate Gifts',
      'Personalised Gifts', 'Gift Hampers', 'Decorative Items', "Kids' Gifts",
      'Puja Items', 'Greeting Cards',
    ],
  },
  {
    name: 'Other Products',
    links: [
      'Home Decor', 'Puja Items', 'Books & Stationery', 'Electronics',
      'Sports & Fitness', 'Toys & Games', 'Kitchenware', 'Gardening',
      'Art & Craft', 'Musical Instruments',
    ],
  },
  {
    name: 'Services',
    links: [
      { label: 'Medical Assistance',   to: '/medical-assistance'   },
      { label: 'IT Services',           to: '/it-services'          },
      { label: 'Finance & Tax',         to: '/finance-tax-services' },
      { label: 'Online Radio',          to: '/online-radio'         },
      { label: 'Online Tutor',          to: '/online-tutor'         },
      { label: 'Property Management',   to: '/property-management'  },
      { label: 'Real Estate',           to: '/real-estate'          },
      { label: 'Summer Enrichment',     to: '/summer-enrichment'    },
      { label: 'Visa Support Services', to: '/visa-support-service' },
      { label: 'Visitors Insurance',    to: '/visitors-insurance'   },
      { label: 'Event Organization',    to: '/event-organisation'   },
      { label: 'International Courier', to: '/international-courier'},
    ],
  },
];

const quickLinks = [
  { label: 'About Us',        to: '/about'         },
  { label: 'Become a Vendor', to: '/become-vendor'  },
  { label: 'New Arrivals',    to: '/new-arrivals'   },
  { label: 'Deals of the Day',to: '/dealsoftheday'          },
  { label: 'Best Sellers',    to: '/bestsellers'    },
  { label: 'Blog',            to: '/blogs'           },
  { label: 'Careers',         to: '/careers'        },
];

const supportLinks = [
  { label: 'Track Order',        to: '/user/orders'    },
  { label: 'Returns & Refunds',  to: '/returns'        },
  { label: 'Shipping Policy',    to: '/shipping-policy'       },
  { label: 'Privacy Policy',     to: '/privacy-policy'        },
  { label: 'Terms & Conditions', to: '/terms'          },
  { label: 'Contact Us',         to: '/contact'        },
];

// ── Social icons (inline SVG) ─────────────────────────────────────────────
const socials = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/+12345678900',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#003d18"/>
      </svg>
    ),
  },
];

// ── Newsletter form ────────────────────────────────────────────────────────
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(''); }
  };

  return sent ? (
    <p className="ft-nl-thanks">Thanks for subscribing! ✓</p>
  ) : (
    <form className="ft-nl-form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="ft-nl-input"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="ft-nl-btn">Subscribe</button>
    </form>
  );
};

// ── Footer ────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="site-footer">

    {/* ════════════════════════════════════════════════════
        SECTION 1 — Categories sitemap
    ════════════════════════════════════════════════════ */}
    <div className="ft-categories">
      <div className="container-custom">
        <div className="ft-cat-header">
          <h3 className="ft-cat-heading">Browse All Categories</h3>
          <span className="ft-cat-line" />
        </div>
        <div className="row g-4">
          {categoryColumns.map((col) => (
            <div key={col.name} className="col-lg-2 col-md-4 col-6">
              <h4 className="ft-col-title">{col.name}</h4>
              <ul className="ft-col-list">
                {col.links.map((link) => {
                  const label = typeof link === 'string' ? link : link.label;
                  const to    = typeof link === 'string' ? '/products' : link.to;
                  return (
                    <li key={label}>
                      <Link to={to} className="ft-col-link">{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ════════════════════════════════════════════════════
        SECTION 2 — Brand + links + newsletter
    ════════════════════════════════════════════════════ */}
    <div className="ft-main">
      <div className="container-custom">
        <div className="row g-4 g-lg-5">

          {/* Brand column */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="ft-logo">
              <img src={logo} alt="VDesiConnect" />
            </Link>
            <p className="ft-brand-desc">
              VDesi Connect is your one-stop destination for authentic Indian products,
              services, and cultural experiences — delivered worldwide.
            </p>
            <div className="ft-socials">
              {socials.map((s) => (
                <a key={s.name} href={s.href} className="ft-social-btn"
                   target="_blank" rel="noreferrer" aria-label={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h4 className="ft-main-heading">Quick Links</h4>
            <ul className="ft-main-list">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="ft-main-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-3 col-6">
            <h4 className="ft-main-heading">Support</h4>
            <ul className="ft-main-list">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="ft-main-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h4 className="ft-main-heading">Contact Us</h4>
            <ul className="ft-contact-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>123 Desi Lane, New York, NY 10001, USA</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                <span>+1 (800) 123-4567</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>support@vdesiconnect.com</span>
              </li>
            </ul>

            <h4 className="ft-main-heading" style={{ marginTop: '22px' }}>Newsletter</h4>
            <p className="ft-nl-desc">Get exclusive deals & updates in your inbox.</p>
            <NewsletterForm />
          </div>

        </div>
      </div>
    </div>

    {/* ════════════════════════════════════════════════════
        SECTION 3 — Copyright bar
    ════════════════════════════════════════════════════ */}
    <div className="ft-bottom">
      <div className="container-custom">
        <div className="ft-bottom__inner">
          <p className="ft-copyright">
            © {new Date().getFullYear()} VDesi Connect. All rights reserved.
          </p>
          <div className="ft-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms of Service</Link>
            <span>·</span>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
