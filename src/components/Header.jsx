import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  WhatsAppIcon, SearchIcon, CartIcon, UserIcon,
  ChevronDownIcon, MenuIcon, CloseIcon,
} from './Icons';

const searchSuggestions = [
  'Indian Groceries', 'Spices & Masalas', 'Dry Fruits', 'Organic Foods',
  "Men's Clothing", "Women's Clothing", 'Ethnic Wear', 'Sarees', 'Kurtis',
  'Ayurvedic Supplements', 'Herbal Teas', 'Essential Oils', 'Natural Skincare',
  'Birthday Gifts', 'Wedding Gifts', 'Festival Gifts', 'Gift Hampers',
  'IT Services', 'Medical Assistance', 'Real Estate', 'Visa Support',
  'Home Decor', 'Puja Items', 'Kitchenware', 'Footwear', 'Accessories',
];

const TRENDING = [
  'Indian Groceries', 'Sarees', 'Spices & Masalas',
  'Ayurvedic', 'Medical Assistance', 'Real Estate',
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

const quickNavLinks = [
  { label: '🆕 New Arrivals',  to: '/new-arrivals'  },
  { label: '🔥 Deals of Day',  to: '/dealsoftheday' },
  { label: '⭐ Best Sellers',  to: '/bestsellers'   },
  { label: '📝 Blog',          to: '/blogs'          },
  { label: 'ℹ️ About Us',      to: '/about'          },
  { label: '📞 Contact',       to: '/contact'        },
];

// ── Component ──────────────────────────────────────────────────────────────
const Header = () => {
  const location = useLocation();

  // Desktop inline search
  const [query,           setQuery]           = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const desktopSearchRef  = useRef(null);

  // Mobile search popup
  const [mobileQuery, setMobileQuery] = useState('');
  const [showSearch,  setShowSearch]  = useState(false);
  const popupRef = useRef(null);
  const inputRef = useRef(null);

  // Desktop nav hover
  const [activeMenu, setActiveMenu] = useState(null);
  const leaveTimer = useRef(null);

  // Mobile drawer
  const [drawerOpen,     setDrawerOpen]     = useState(false);
  const [drawerExpanded, setDrawerExpanded] = useState(null);

  const cartCount = 3;

  // Shrink header on scroll (desktop only — hides header-main, keeps navbar)
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setDrawerOpen(false); setShowSearch(false); }, [location.pathname]);

  // Lock body scroll when drawer or search popup is open
  useEffect(() => {
    document.body.style.overflow = (drawerOpen || showSearch) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen, showSearch]);

  // Desktop search: close on outside click
  useEffect(() => {
    const h = e => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target))
        setShowSuggestions(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  // Mobile popup: close on outside click + ESC
  useEffect(() => {
    if (!showSearch) return;
    const h = e => { if (popupRef.current && !popupRef.current.contains(e.target)) closeSearch(); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [showSearch]);

  useEffect(() => {
    const h = e => { if (e.key === 'Escape') { closeSearch(); setDrawerOpen(false); } };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, []);

  // Focus mobile search input on open
  useEffect(() => {
    if (showSearch) setTimeout(() => inputRef.current?.focus(), 80);
  }, [showSearch]);

  const openSearch  = () => { setShowSearch(true);  setMobileQuery(''); };
  const closeSearch = () => { setShowSearch(false); setMobileQuery(''); };

  const desktopFiltered = query.length > 0
    ? searchSuggestions.filter(s => s.toLowerCase().includes(query.toLowerCase()))
    : [];

  const mobileFiltered = mobileQuery.length > 0
    ? searchSuggestions.filter(s => s.toLowerCase().includes(mobileQuery.toLowerCase()))
    : [];

  const handleMenuEnter = name => { clearTimeout(leaveTimer.current); setActiveMenu(name); };
  const handleMenuLeave = ()   => { leaveTimer.current = setTimeout(() => setActiveMenu(null), 120); };
  const toggleDrawerSection = name => setDrawerExpanded(p => p === name ? null : name);

  return (
    <>
      {/* ── Fixed WhatsApp button ─────────────────────────────────── */}
      <a href="https://wa.me/+12345678900" className="whatsapp-float"
         target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>

      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>

        {/* ════════════════════════════════════════════════════════════
            MOBILE TOP BAR  (hidden on desktop)
        ════════════════════════════════════════════════════════════ */}
        <div className="mob-bar d-flex d-lg-none">

          <button className="mob-bar__menu" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </button>

          <Link to="/" className="mob-bar__logo">
            <img src={logo} alt="VDesiConnect" />
          </Link>

          <div className="mob-bar__actions">
            <button className="mob-icon-btn" onClick={openSearch} aria-label="Search">
              <SearchIcon size={19} />
            </button>
            <Link to="/cart" className="mob-icon-btn mob-icon-btn--cart" aria-label="Cart">
              <CartIcon />
              {cartCount > 0 && <span className="mob-cart-badge">{cartCount}</span>}
            </Link>
            <Link to="/login" className="mob-icon-btn" aria-label="Account">
              <UserIcon />
            </Link>
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════
            DESKTOP MAIN HEADER  (hidden on mobile)
        ════════════════════════════════════════════════════════════ */}
        <div className="header-main d-none d-lg-block">
          <div className="container-custom">
            <div className="row align-items-center g-2 g-lg-3">

              {/* Logo */}
              <div className="col-lg-2">
                <Link to="/" className="header-logo">
                  <img src={logo} alt="VDesiConnect" />
                </Link>
              </div>

              {/* Inline search */}
              <div className="col-lg-7" ref={desktopSearchRef}>
                <div className="header-search">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search products, services, categories..."
                    value={query}
                    onChange={e => { setQuery(e.target.value); setShowSuggestions(true); }}
                    onFocus={() => setShowSuggestions(true)}
                    aria-label="Search"
                  />
                  <button className="search-btn" aria-label="Search">
                    <SearchIcon size={18} />
                  </button>
                  {showSuggestions && desktopFiltered.length > 0 && (
                    <ul className="search-suggestions" role="listbox">
                      {desktopFiltered.map((s, i) => (
                        <li key={i} role="option"
                            onMouseDown={() => { setQuery(s); setShowSuggestions(false); }}>
                          <SearchIcon size={13} />
                          <span className="ms-2">{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="col-lg-3">
                <div className="header-actions">
                  <Link to="/become-vendor" className="btn-vendor d-none d-xl-inline-flex">
                    Become a Vendor
                  </Link>
                  <Link to="/cart" className="action-icon" aria-label="Cart">
                    <CartIcon />
                    {cartCount > 0 && (
                      <span className="cart-badge">{cartCount}</span>
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

        {/* ════════════════════════════════════════════════════════════
            MOBILE SEARCH POPUP
        ════════════════════════════════════════════════════════════ */}
        {showSearch && (
          <div className="search-overlay d-lg-none" role="dialog" aria-label="Search">
            <div className="search-popup" ref={popupRef}>
              <div className="search-popup__bar">
                <span className="search-popup__icon"><SearchIcon size={20} /></span>
                <input
                  ref={inputRef}
                  type="text"
                  className="search-popup__input"
                  placeholder="Search products, services..."
                  value={mobileQuery}
                  onChange={e => setMobileQuery(e.target.value)}
                  autoComplete="off"
                />
                {mobileQuery && (
                  <button className="search-popup__clear" onClick={() => setMobileQuery('')}>✕</button>
                )}
                <button className="search-popup__close" onClick={closeSearch}>
                  <CloseIcon />
                </button>
              </div>

              {mobileQuery.length > 0 ? (
                <ul className="search-popup__results">
                  {mobileFiltered.length > 0 ? (
                    mobileFiltered.map((s, i) => (
                      <li key={i} onClick={() => { setMobileQuery(s); closeSearch(); }}>
                        <SearchIcon size={13} /><span>{s}</span>
                      </li>
                    ))
                  ) : (
                    <li className="search-popup__no-result">
                      No results for "<strong>{mobileQuery}</strong>"
                    </li>
                  )}
                </ul>
              ) : (
                <div className="search-popup__trending">
                  <p className="search-popup__trending-title">🔥 Popular Searches</p>
                  <div className="search-popup__tags">
                    {TRENDING.map(tag => (
                      <button key={tag} className="search-popup__tag"
                              onClick={() => setMobileQuery(tag)}>{tag}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            MOBILE DRAWER  (slide-in from left)
        ════════════════════════════════════════════════════════════ */}
        {drawerOpen && (
          <div className="mob-overlay" onClick={() => setDrawerOpen(false)} />
        )}

        <div className={`mob-drawer${drawerOpen ? ' mob-drawer--open' : ''}`} aria-hidden={!drawerOpen}>

          {/* Drawer header */}
          <div className="mob-drawer__head">
            <img src={logo} alt="VDesiConnect" className="mob-drawer__logo" />
            <button className="mob-drawer__close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>

          {/* Sign-in strip */}
          <Link to="/login" className="mob-drawer__signin" onClick={() => setDrawerOpen(false)}>
            <span className="mob-drawer__signin-avatar"><UserIcon /></span>
            <div>
              <p className="mob-drawer__signin-title">Hello, Sign In</p>
              <p className="mob-drawer__signin-sub">Account &amp; Profile →</p>
            </div>
          </Link>

          {/* Drawer nav */}
          <nav className="mob-drawer__nav">

            {/* Services accordion */}
            <div className="mob-drawer__section">
              <button
                className="mob-drawer__toggle"
                onClick={() => toggleDrawerSection('services')}
              >
                <span>🛎️ Services</span>
                <ChevronDownIcon className={`mob-chevron${drawerExpanded === 'services' ? ' mob-chevron--open' : ''}`} />
              </button>
              {drawerExpanded === 'services' && (
                <ul className="mob-drawer__list">
                  {services.map(s => (
                    <li key={s.to}>
                      <Link to={s.to} className="mob-drawer__link" onClick={() => setDrawerOpen(false)}>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Category accordions */}
            {categories.map(cat => (
              <div key={cat.name} className="mob-drawer__section">
                <button
                  className="mob-drawer__toggle"
                  onClick={() => toggleDrawerSection(cat.name)}
                >
                  <span>🏷️ {cat.name}</span>
                  <ChevronDownIcon className={`mob-chevron${drawerExpanded === cat.name ? ' mob-chevron--open' : ''}`} />
                </button>
                {drawerExpanded === cat.name && (
                  <ul className="mob-drawer__list mob-drawer__list--grid">
                    {cat.subcategories.map((sub, j) => (
                      <li key={j}>
                        <Link to="/products" className="mob-drawer__chip" onClick={() => setDrawerOpen(false)}>
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Quick links */}
            <div className="mob-drawer__quick">
              {quickNavLinks.map(l => (
                <Link key={l.to} to={l.to} className="mob-drawer__quick-link"
                      onClick={() => setDrawerOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>

          </nav>

          {/* Drawer footer */}
          <div className="mob-drawer__foot">
            <Link to="/become-vendor" className="mob-drawer__vendor" onClick={() => setDrawerOpen(false)}>
              🏪 Become a Vendor
            </Link>
            <Link to="/contact" className="mob-drawer__contact" onClick={() => setDrawerOpen(false)}>
              Need help? Contact Us
            </Link>
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════
            DESKTOP NAVBAR  (hidden on mobile)
        ════════════════════════════════════════════════════════════ */}
        <nav className="header-navbar d-none d-lg-block" aria-label="Main navigation">
          <div className="container-custom">
            <ul className="nav-menu">

              <li className="nav-item nav-item--has-dropdown"
                  onMouseEnter={() => handleMenuEnter('services')}
                  onMouseLeave={handleMenuLeave}>
                <button className="nav-link-btn"
                        aria-haspopup="true" aria-expanded={activeMenu === 'services'}>
                  Services
                  <ChevronDownIcon className={`nav-chevron${activeMenu === 'services' ? ' rotate' : ''}`} />
                </button>
                <div className={`services-dropdown${activeMenu === 'services' ? ' show' : ''}`}>
                  <div className="row g-0">
                    {services.map(s => (
                      <div key={s.to} className="col-12 col-md-6">
                        <Link to={s.to} className="dropdown-item">{s.name}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {categories.map(cat => (
                <li key={cat.name} className="nav-item"
                    onMouseEnter={() => handleMenuEnter(cat.name)}
                    onMouseLeave={handleMenuLeave}>
                  <button className="nav-link-btn"
                          aria-haspopup="true" aria-expanded={activeMenu === cat.name}>
                    {cat.name}
                    <ChevronDownIcon className={`nav-chevron${activeMenu === cat.name ? ' rotate' : ''}`} />
                  </button>
                  <div className={`mega-menu${activeMenu === cat.name ? ' show' : ''}`}>
                    <div className="mega-menu-inner">
                      <div className="mega-menu-title">{cat.name}</div>
                      <div className="row g-2">
                        {cat.subcategories.map((sub, j) => (
                          <div key={j} className="col-6 col-sm-4 col-md-3 col-xl-2">
                            <Link to="/products" className="mega-item">{sub}</Link>
                          </div>
                        ))}
                      </div>
                      <div className="mega-menu-footer">
                        <Link to="/products">View All {cat.name} &rarr;</Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}

              <li className="nav-item"><Link to="/new-arrivals"  className="nav-link-btn">New Arrivals</Link></li>
              <li className="nav-item"><Link to="/dealsoftheday" className="nav-link-btn nav-link-btn--highlight">🔥 Deals</Link></li>
              <li className="nav-item"><Link to="/bestsellers"   className="nav-link-btn">Best Sellers</Link></li>
              <li className="nav-item"><Link to="/blogs"         className="nav-link-btn">Blog</Link></li>
              <li className="nav-item"><Link to="/about"         className="nav-link-btn">About Us</Link></li>
              <li className="nav-item"><Link to="/contact"       className="nav-link-btn">Contact</Link></li>

            </ul>
          </div>
        </nav>

      </header>
    </>
  );
};

export default Header;
