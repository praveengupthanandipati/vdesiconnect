import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/user/profile',  icon: '👤', label: 'Profile Management'  },
  { to: '/user/address',  icon: '📍', label: 'Address Management'  },
  { to: '/user/orders',   icon: '📦', label: 'My Orders'           },
]

const Usernav = () => {
  const navigate        = useNavigate()
  const location        = useLocation()
  const [showLogout,    setShowLogout]    = useState(false)
  const [sidebarOpen,   setSidebarOpen]   = useState(false)

  // close sidebar on route change (mobile nav)
  useEffect(() => { setSidebarOpen(false) }, [location.pathname])

  // prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  const handleLogout = () => {
    setShowLogout(false)
    navigate('/login')
  }

  return (
    <div className="ud-layout">

      {/* ── Mobile top bar ─────────────────────────────────────────────── */}
      <div className="ud-topbar">
        <button
          className="ud-hamburger"
          onClick={() => setSidebarOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`ud-hamburger__line${sidebarOpen ? ' ud-hamburger__line--open' : ''}`} />
          <span className={`ud-hamburger__line${sidebarOpen ? ' ud-hamburger__line--open' : ''}`} />
          <span className={`ud-hamburger__line${sidebarOpen ? ' ud-hamburger__line--open' : ''}`} />
        </button>
        <span className="ud-topbar__title">My Account</span>
        <div className="ud-topbar__avatar">JD</div>
      </div>

      {/* ── Overlay (mobile) ───────────────────────────────────────────── */}
      {sidebarOpen && (
        <div className="ud-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Sidebar ───────────────────────────────────────────────────── */}
      <aside className={`ud-sidebar${sidebarOpen ? ' ud-sidebar--open' : ''}`}>

        <div className="ud-sidebar__profile">
          <div className="ud-sidebar__avatar">JD</div>
          <div className="ud-sidebar__profile-text">
            <p className="ud-sidebar__name">John Doe</p>
            <p className="ud-sidebar__email">john@example.com</p>
          </div>
        </div>

        <nav className="ud-sidebar__nav">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `ud-nav-item${isActive ? ' ud-nav-item--active' : ''}`
              }
            >
              <span className="ud-nav-item__icon">{item.icon}</span>
              <span className="ud-nav-item__label">{item.label}</span>
              <span className="ud-nav-item__arrow">›</span>
            </NavLink>
          ))}

          <button
            className="ud-nav-item ud-nav-item--logout"
            onClick={() => setShowLogout(true)}
          >
            <span className="ud-nav-item__icon">🚪</span>
            <span className="ud-nav-item__label">Logout</span>
            <span className="ud-nav-item__arrow">›</span>
          </button>
        </nav>

        <div className="ud-sidebar__footer">
          <p>Need help?</p>
          <a href="/contact">Contact Support →</a>
        </div>
      </aside>

      {/* ── Page content ──────────────────────────────────────────────── */}
      <main className="ud-main">
        <Outlet />
      </main>

      {/* ── Logout confirm modal ──────────────────────────────────────── */}
      {showLogout && (
        <div className="ud-modal-backdrop" onClick={() => setShowLogout(false)}>
          <div className="ud-modal" onClick={e => e.stopPropagation()}>
            <div className="ud-modal__icon">🚪</div>
            <h3 className="ud-modal__title">Log Out?</h3>
            <p className="ud-modal__body">You will be signed out of your VDesiConnect account.</p>
            <div className="ud-modal__actions">
              <button className="ud-modal__btn ud-modal__btn--cancel" onClick={() => setShowLogout(false)}>
                Cancel
              </button>
              <button className="ud-modal__btn ud-modal__btn--confirm" onClick={handleLogout}>
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Usernav
