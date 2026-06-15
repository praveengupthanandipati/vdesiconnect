import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  WhatsAppIcon,
  SearchIcon,
  CartIcon,
  UserIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from './Icons';

const searchSuggestions = [
  'Indian Groceries', 'Spices & Masalas', 'Dry Fruits', 'Organic Foods',
  "Men's Clothing", "Women's Clothing", 'Ethnic Wear', 'Sarees', 'Kurtis',
  'Ayurvedic Supplements', 'Herbal Teas', 'Essential Oils', 'Natural Skincare',
  'Birthday Gifts', 'Wedding Gifts', 'Festival Gifts', 'Gift Hampers',
  'IT Services', 'Medical Assistance', 'Real Estate', 'Visa Support',
  'Home Decor', 'Puja Items', 'Kitchenware', 'Footwear', 'Accessories',
];

const services = [
  { name: 'Medical Assistance',    to: '/medical-assistance' },
  { name: 'IT Services',           to: '/it-services' },
  { name: 'Finance & Tax Services',to: '/finance-tax-services' },
  { name: 'Online Radio',          to: '/online-radio' },
  { name: 'Online Tutor',          to: '/online-tutor' },
  { name: 'Property Management',   to: '/property-management' },
  { name: 'Real Estate',           to: '/real-estate' },
  { name: 'Summer Enrichment',     to: '/summer-enrichment' },
  { name: 'Visa Support Services', to: '/visa-support-service' },
  { name: 'Visitors Insurance',    to: '/visitors-insurance' },
  { name: 'Event Organization',    to: '/event-organisation' },
  { name: 'International Courier', to: '/international-courier' },
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
                  <ChevronDownIcon
                    className={`nav-chevron${activeMenu === 'services' || mobileExpanded === 'services' ? ' rotate' : ''}`}
                  />
                </button>

                <div
                  className={`services-dropdown${activeMenu === 'services' ? ' show' : ''}${mobileExpanded === 'services' ? ' mobile-show' : ''}`}
                >
                  <div className="row g-0">
                    {services.map((s) => (
                      <div key={s.to} className="col-12 col-md-6">
                        <Link to={s.to} className="dropdown-item">{s.name}</Link>
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
                    <ChevronDownIcon
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

              {/* ── Plain nav links ───────────────────────── */}
              <li className="nav-item">
                <Link to="/new-arrivals" className="nav-link-btn">New Arrivals</Link>
              </li>
              <li className="nav-item">
                <Link to="/dealsoftheday" className="nav-link-btn nav-link-btn--highlight">🔥 Deals</Link>
              </li>
              <li className="nav-item">
                <Link to="/bestsellers" className="nav-link-btn">Best Sellers</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link-btn">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link-btn">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link-btn">Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>
    </>
  );
};

export default Header;
