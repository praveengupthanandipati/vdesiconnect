import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartIcon, UserIcon, CloseIcon } from './Icons';
import { HomeIcon, GridIcon, ServicesIcon } from './Icons';

const categories = [
  { name: 'Fashion',         emoji: '👗', to: '/products' },
  { name: 'Herbal Products', emoji: '🌿', to: '/products' },
  { name: 'Food',            emoji: '🍛', to: '/products' },
  { name: 'Gifts',           emoji: '🎁', to: '/products' },
  { name: 'Other Products',  emoji: '🛍️', to: '/products' },
];

const services = [
  { name: 'Medical Assistance',    emoji: '🏥', to: '/medical-assistance' },
  { name: 'IT Services',           emoji: '💻', to: '/it-services' },
  { name: 'Finance & Tax',         emoji: '💰', to: '/finance-tax-services' },
  { name: 'Online Radio',          emoji: '📻', to: '/online-radio' },
  { name: 'Online Tutor',          emoji: '📚', to: '/online-tutor' },
  { name: 'Property Mgmt',         emoji: '🏘️', to: '/property-management' },
  { name: 'Real Estate',           emoji: '🏠', to: '/real-estate' },
  { name: 'Summer Enrichment',     emoji: '☀️', to: '/summer-enrichment' },
  { name: 'Visa Support',          emoji: '✈️', to: '/visa-support-service' },
  { name: 'Visitors Insurance',    emoji: '🛡️', to: '/visitors-insurance' },
  { name: 'Event Organization',    emoji: '🎉', to: '/event-organisation' },
  { name: 'Intl Courier',          emoji: '📦', to: '/international-courier' },
];

const BottomNav = () => {
  const location = useLocation();
  const [sheet, setSheet] = useState(null); // 'categories' | 'services' | null
  const cartCount = 3;

  useEffect(() => {
    document.body.style.overflow = sheet ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sheet]);

  useEffect(() => { setSheet(null); }, [location.pathname]);

  const isActive = (paths) =>
    paths.some(p => p === '/' ? location.pathname === '/' : location.pathname.startsWith(p));

  const toggleSheet = (name) => setSheet(s => s === name ? null : name);

  const sheetData = sheet === 'categories' ? categories : services;
  const sheetTitle = sheet === 'categories' ? '🏷️ Categories' : '🛎️ Services';

  return (
    <>
      {sheet && <div className="bnav-overlay" onClick={() => setSheet(null)} />}

      {sheet && (
        <div className="bnav-sheet">
          <div className="bnav-sheet__handle" />
          <div className="bnav-sheet__header">
            <h3 className="bnav-sheet__title">{sheetTitle}</h3>
            <button className="bnav-sheet__close" onClick={() => setSheet(null)} aria-label="Close">
              <CloseIcon size={18} />
            </button>
          </div>
          <div className="bnav-sheet__grid">
            {sheetData.map(item => (
              <Link key={item.to + item.name} to={item.to} className="bnav-sheet__item"
                    onClick={() => setSheet(null)}>
                <span className="bnav-sheet__emoji">{item.emoji}</span>
                <span className="bnav-sheet__name">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <nav className="bottom-nav d-lg-none" aria-label="Mobile bottom navigation">

        <Link to="/"
          className={`bnav-item${isActive(['/']) ? ' bnav-item--active' : ''}`}>
          <HomeIcon size={22} />
          <span className="bnav-label">Home</span>
        </Link>

        <button
          className={`bnav-item${sheet === 'categories' || isActive(['/products']) ? ' bnav-item--active' : ''}`}
          onClick={() => toggleSheet('categories')}>
          <GridIcon size={22} />
          <span className="bnav-label">Categories</span>
        </button>

        <Link to="/cart"
          className={`bnav-item${isActive(['/cart']) ? ' bnav-item--active' : ''}`}>
          <span className="bnav-cart-wrap">
            <CartIcon size={22} />
            {cartCount > 0 && <span className="bnav-badge">{cartCount}</span>}
          </span>
          <span className="bnav-label">Cart</span>
        </Link>

        <button
          className={`bnav-item${sheet === 'services' ? ' bnav-item--active' : ''}`}
          onClick={() => toggleSheet('services')}>
          <ServicesIcon size={22} />
          <span className="bnav-label">Services</span>
        </button>

        <Link to="/login"
          className={`bnav-item${isActive(['/login', '/user']) ? ' bnav-item--active' : ''}`}>
          <UserIcon size={22} />
          <span className="bnav-label">Account</span>
        </Link>

      </nav>
    </>
  );
};

export default BottomNav;
