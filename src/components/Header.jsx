import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const searchSuggestions = [
  'Indian Groceries', 'Spices & Masalas', 'Dry Fruits', 'Organic Foods',
  "Men's Clothing", "Women's Clothing", 'Ethnic Wear', 'Sarees', 'Kurtis',
  'Ayurvedic Supplements', 'Herbal Teas', 'Essential Oils', 'Natural Skincare',
  'Birthday Gifts', 'Wedding Gifts', 'Festival Gifts', 'Gift Hampers',
  'IT Services', 'Medical Assistance', 'Real Estate', 'Visa Support',
  'Home Decor', 'Puja Items', 'Kitchenware', 'Footwear', 'Accessories',
];

const services = [
  'Medical Assistance',
  'IT Services',
  'Finance & Tax Services',
  'Online Radio',
  'Online Tutor',
  'Property Management',
  'Real Estate',
  'Summer Enrichment',
  'Visa Support Services',
  'Visitors Insurance',
  'Event Organization',
  'International Courier',
];

const categories = [
  {
    name: 'Fashion',
    subcategories: [
      "Men's Clothing", "Women's Clothing", "Kids' Wear", 'Footwear',
      'Accessories', 'Ethnic Wear', 'Sarees', 'Kurtis', 'Jewellery', 'Bags & Wallets',
    ],
  },
  {
    name: 'Herbal Products',
    subcategories: [
      'Ayurvedic Supplements', 'Herbal Teas', 'Essential Oils', 'Natural Skincare',
      'Herbal Powders', 'Organic Herbs', 'Hair Care', 'Immunity Boosters',
      'Digestive Aids', 'Wellness Packs',
    ],
  },
  {
    name: 'Food',
    subcategories: [
      'Indian Groceries', 'Snacks & Sweets', 'Pickles & Chutneys', 'Spices & Masalas',
      'Beverages', 'Ready to Cook', 'Dairy Products', 'Frozen Foods',
      'Dry Fruits', 'Organic Foods',
    ],
  },
  {
    name: 'Gifts',
    subcategories: [
      'Birthday Gifts', 'Wedding Gifts', 'Festival Gifts', 'Corporate Gifts',
      'Personalised Gifts', 'Gift Hampers', 'Decorative Items', "Kids' Gifts",
      'Puja Items', 'Greeting Cards',
    ],
  },
  {
    name: 'Other Products',
    subcategories: [
      'Home Decor', 'Puja Items', 'Books & Stationery', 'Electronics',
      'Sports & Fitness', 'Toys & Games', 'Kitchenware', 'Gardening',
      'Art & Craft', 'Musical Instruments',
    ],
  },
];

// ── SVG icons (inline, no extra dependency) ────────────────────────────────
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SearchIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={size} height={size}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ChevronDown = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

// ── Component ──────────────────────────────────────────────────────────────
const Header = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const cartCount = 3;
  const searchRef = useRef(null);
  const leaveTimer = useRef(null);

  const filtered = query.length > 0
    ? searchSuggestions.filter((s) => s.toLowerCase().includes(query.toLowerCase()))
    : [];

  // Close search suggestions on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleMenuEnter = (name) => {
    clearTimeout(leaveTimer.current);
    setActiveMenu(name);
  };

  const handleMenuLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const toggleMobile = (name) =>
    setMobileExpanded((prev) => (prev === name ? null : name));

  return (
    <>
      {/* ── Fixed WhatsApp button ──────────────────────────── */}
      <a
        href="https://wa.me/+12345678900"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      <header className="site-header">

        {/* ────────────────────────────────────────────────────────
            SECTION 2 — Main Header
        ──────────────────────────────────────────────────────── */}
        <div className="header-main">
          <div className="container-custom">
            <div className="row align-items-center g-2 g-lg-3">

              {/* Logo */}
              <div className="col-lg-2 col-4">
                <Link to="/" className="header-logo">
                  <img src={logo} alt="VDesiConnect" />
                </Link>
              </div>

              {/* Search — full width on mobile, middle column on desktop */}
              <div className="col-lg-7 col-12 order-lg-0 order-last" ref={searchRef}>
                <div className="header-search">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search products, services, categories..."
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
                    onFocus={() => setShowSuggestions(true)}
                    aria-label="Search"
                  />
                  <button className="search-btn" aria-label="Search">
                    <SearchIcon size={18} />
                  </button>
                  {showSuggestions && filtered.length > 0 && (
                    <ul className="search-suggestions" role="listbox">
                      {filtered.map((s, i) => (
                        <li
                          key={i}
                          role="option"
                          onMouseDown={() => { setQuery(s); setShowSuggestions(false); }}
                        >
                          <SearchIcon size={13} />
                          <span className="ms-2">{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Become a Vendor + Cart + Login */}
              <div className="col-lg-3 col-8">
                <div className="header-actions">
                  <Link to="/become-vendor" className="btn-vendor d-none d-xl-inline-flex">
                    Become a Vendor
                  </Link>
                  <Link to="/cart" className="action-icon" aria-label="Cart">
                    <CartIcon />
                    {cartCount > 0 && (
                      <span className="cart-badge" aria-label={`${cartCount} items`}>
                        {cartCount}
                      </span>
                    )}
                  </Link>
                  <Link to="/login" className="btn-login">
                    <UserIcon />
                    <span>Login</span>
                  </Link>
                </div>
              </div>

          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────
          SECTION 3 — Navbar
      ──────────────────────────────────────────────────────── */}
      <nav className="header-navbar" aria-label="Main navigation">
        <div className="container-custom">
          <div className="d-flex align-items-center">

            {/* Mobile hamburger */}
            <button
              className="mobile-toggle d-lg-none"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              <span>{mobileOpen ? 'Close' : 'Menu'}</span>
            </button>

            {/* Nav list */}
            <ul className={`nav-menu${mobileOpen ? ' nav-menu--open' : ''}`}>

              {/* ── Services dropdown ─────────────────────── */}
              <li
                className="nav-item nav-item--has-dropdown"
                onMouseEnter={() => handleMenuEnter('services')}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className="nav-link-btn"
                  onClick={() => toggleMobile('services')}
                  aria-haspopup="true"
                  aria-expanded={activeMenu === 'services' || mobileExpanded === 'services'}
                >
                  Services
                  <ChevronDown
                    className={`nav-chevron${activeMenu === 'services' || mobileExpanded === 'services' ? ' rotate' : ''}`}
                  />
                </button>

                <div
                  className={`services-dropdown${activeMenu === 'services' ? ' show' : ''}${mobileExpanded === 'services' ? ' mobile-show' : ''}`}
                >
                  <div className="row g-0">
                    {services.map((s, i) => (
                      <div key={i} className="col-12 col-md-6">
                        <Link to="#" className="dropdown-item">{s}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* ── Category mega menus ───────────────────── */}
              {categories.map((cat) => (
                <li
                  key={cat.name}
                  className="nav-item"
                  onMouseEnter={() => handleMenuEnter(cat.name)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    className="nav-link-btn"
                    onClick={() => toggleMobile(cat.name)}
                    aria-haspopup="true"
                    aria-expanded={activeMenu === cat.name || mobileExpanded === cat.name}
                  >
                    {cat.name}
                    <ChevronDown
                      className={`nav-chevron${activeMenu === cat.name || mobileExpanded === cat.name ? ' rotate' : ''}`}
                    />
                  </button>

                  <div
                    className={`mega-menu${activeMenu === cat.name ? ' show' : ''}${mobileExpanded === cat.name ? ' mobile-show' : ''}`}
                  >
                    <div className="mega-menu-inner">
                      <div className="mega-menu-title">{cat.name}</div>
                      <div className="row g-2">
                        {cat.subcategories.map((sub, j) => (
                          <div key={j} className="col-6 col-sm-4 col-md-3 col-xl-2">
                            <Link to="#" className="mega-item">{sub}</Link>
                          </div>
                        ))}
                      </div>
                      <div className="mega-menu-footer">
                        <Link to="#">View All {cat.name} &rarr;</Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>

    </header>
    </>
  );
};

export default Header;
