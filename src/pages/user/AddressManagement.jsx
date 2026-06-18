import React, { useState } from 'react'

const COUNTRIES = [
  'United States', 'India', 'United Kingdom', 'Australia',
  'Canada', 'Germany', 'UAE', 'Singapore', 'New Zealand', 'Other',
]

const ADDRESS_TYPES = ['Home', 'Work', 'Other']

const EMPTY_FORM = {
  type: 'Home', name: '', phone: '', line1: '',
  line2: '', city: '', state: '', zip: '', country: 'United States',
}

let nextId = 3

const SAMPLE = [
  {
    id: 1, type: 'Home', name: 'John Doe', phone: '+1 (555) 000-0000',
    line1: '123 Main Street', line2: 'Apt 4B', city: 'New York',
    state: 'NY', zip: '10001', country: 'United States', isDefault: true,
  },
  {
    id: 2, type: 'Work', name: 'John Doe', phone: '+1 (555) 111-2222',
    line1: '456 Business Ave', line2: 'Suite 900', city: 'New York',
    state: 'NY', zip: '10002', country: 'United States', isDefault: false,
  },
]

// ── Validation ────────────────────────────────────────────────────────────────
const validate = (f) => {
  const e = {}
  if (!f.name.trim())    e.name    = 'Full name is required'
  if (!f.phone.trim())   e.phone   = 'Phone number is required'
  if (!f.line1.trim())   e.line1   = 'Address line 1 is required'
  if (!f.city.trim())    e.city    = 'City is required'
  if (!f.state.trim())   e.state   = 'State / Province is required'
  if (!f.zip.trim())     e.zip     = 'ZIP / Postal code is required'
  if (!f.country.trim()) e.country = 'Country is required'
  return e
}

// ── Address card ─────────────────────────────────────────────────────────────
const AddressCard = ({ addr, onEdit, onDelete, onSetDefault }) => (
  <div className={`am-card${addr.isDefault ? ' am-card--default' : ''}`}>
    {addr.isDefault && <span className="am-card__badge">✓ Default</span>}
    <div className="am-card__type-row">
      <span className="am-card__type-icon">
        {addr.type === 'Home' ? '🏠' : addr.type === 'Work' ? '🏢' : '📍'}
      </span>
      <span className="am-card__type">{addr.type}</span>
    </div>
    <p className="am-card__name">{addr.name}</p>
    <p className="am-card__line">{addr.line1}</p>
    {addr.line2 && <p className="am-card__line">{addr.line2}</p>}
    <p className="am-card__line">{addr.city}, {addr.state} {addr.zip}</p>
    <p className="am-card__line">{addr.country}</p>
    <p className="am-card__phone">📞 {addr.phone}</p>
    <div className="am-card__actions">
      {!addr.isDefault && (
        <button className="am-card__action am-card__action--default" onClick={() => onSetDefault(addr.id)}>
          Set as Default
        </button>
      )}
      <button className="am-card__action am-card__action--edit" onClick={() => onEdit(addr)}>
        ✏️ Edit
      </button>
      <button className="am-card__action am-card__action--delete" onClick={() => onDelete(addr.id)}>
        🗑️ Remove
      </button>
    </div>
  </div>
)

// ── Field helper ──────────────────────────────────────────────────────────────
const F = ({ label, error, children }) => (
  <div className="am-field">
    <label className="am-field__label">{label}</label>
    {children}
    {error && <span className="am-field__error">{error}</span>}
  </div>
)

// ── Main component ────────────────────────────────────────────────────────────
const AddressManagement = () => {
  const [addresses,   setAddresses]   = useState(SAMPLE)
  const [showModal,   setShowModal]   = useState(false)
  const [editTarget,  setEditTarget]  = useState(null)   // address being edited
  const [deleteId,    setDeleteId]    = useState(null)   // id pending delete confirm
  const [form,        setForm]        = useState(EMPTY_FORM)
  const [errors,      setErrors]      = useState({})

  /* ── open add modal ─────────────────────────────────────────────────────── */
  const openAdd = () => {
    setEditTarget(null)
    setForm(EMPTY_FORM)
    setErrors({})
    setShowModal(true)
  }

  /* ── open edit modal ────────────────────────────────────────────────────── */
  const openEdit = (addr) => {
    setEditTarget(addr)
    setForm({
      type: addr.type, name: addr.name, phone: addr.phone,
      line1: addr.line1, line2: addr.line2 || '',
      city: addr.city, state: addr.state, zip: addr.zip, country: addr.country,
    })
    setErrors({})
    setShowModal(true)
  }

  /* ── close modal ────────────────────────────────────────────────────────── */
  const closeModal = () => {
    setShowModal(false)
    setEditTarget(null)
    setForm(EMPTY_FORM)
    setErrors({})
  }

  /* ── field change ───────────────────────────────────────────────────────── */
  const change = (key, val) => {
    setForm(p => ({ ...p, [key]: val }))
    if (errors[key]) setErrors(p => ({ ...p, [key]: '' }))
  }

  /* ── save (add / update) ────────────────────────────────────────────────── */
  const save = () => {
    const e = validate(form)
    if (Object.keys(e).length) { setErrors(e); return }

    if (editTarget) {
      setAddresses(prev =>
        prev.map(a => a.id === editTarget.id ? { ...a, ...form } : a)
      )
    } else {
      const isFirst = addresses.length === 0
      setAddresses(prev => [...prev, { id: nextId++, ...form, isDefault: isFirst }])
    }
    closeModal()
  }

  /* ── delete flow ────────────────────────────────────────────────────────── */
  const confirmDelete = (id) => setDeleteId(id)

  const doDelete = () => {
    setAddresses(prev => {
      const filtered = prev.filter(a => a.id !== deleteId)
      // if we deleted the default and others remain, make first one default
      if (filtered.length > 0 && !filtered.some(a => a.isDefault)) {
        filtered[0] = { ...filtered[0], isDefault: true }
      }
      return filtered
    })
    setDeleteId(null)
  }

  /* ── set default ────────────────────────────────────────────────────────── */
  const setDefault = (id) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })))
  }

  /* ── render ─────────────────────────────────────────────────────────────── */
  return (
    <div className="ud-page">

      {/* breadcrumb */}
      <div className="ud-page__breadcrumb">
        <a href="/">Home</a> › <span>Address Management</span>
      </div>

      {/* header */}
      <div className="ud-page__header">
        <div>
          <h1 className="ud-page__title">Address Management</h1>
          <p className="ud-page__subtitle">
            {addresses.length
              ? `${addresses.length} saved address${addresses.length > 1 ? 'es' : ''}`
              : 'No addresses saved yet'}
          </p>
        </div>
        <button className="ud-btn ud-btn--primary" onClick={openAdd}>
          + Add New Address
        </button>
      </div>

      {/* address grid */}
      {addresses.length > 0 ? (
        <div className="am-grid">
          {addresses.map(addr => (
            <AddressCard
              key={addr.id}
              addr={addr}
              onEdit={openEdit}
              onDelete={confirmDelete}
              onSetDefault={setDefault}
            />
          ))}
        </div>
      ) : (
        <div className="ud-card ud-card--empty">
          <div className="ud-empty-state">
            <div className="ud-empty-state__icon">📍</div>
            <h3>No Addresses Saved</h3>
            <p>Add an address to make checkout faster.</p>
            <button className="ud-btn ud-btn--primary" onClick={openAdd}>
              Add Your First Address
            </button>
          </div>
        </div>
      )}

      {/* ── Add / Edit modal ──────────────────────────────────────────────── */}
      {showModal && (
        <div className="ud-modal-backdrop am-modal-backdrop" onClick={closeModal}>
          <div className="am-modal" onClick={e => e.stopPropagation()}>

            <div className="am-modal__header">
              <h3>{editTarget ? 'Edit Address' : 'Add New Address'}</h3>
              <button className="am-modal__close" onClick={closeModal}>✕</button>
            </div>

            <div className="am-modal__body">

              {/* address type */}
              <div className="am-field">
                <label className="am-field__label">Address Type</label>
                <div className="am-type-tabs">
                  {ADDRESS_TYPES.map(t => (
                    <button
                      key={t}
                      className={`am-type-tab${form.type === t ? ' am-type-tab--active' : ''}`}
                      onClick={() => change('type', t)}
                      type="button"
                    >
                      {t === 'Home' ? '🏠' : t === 'Work' ? '🏢' : '📍'} {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* two column row */}
              <div className="am-row">
                <F label="Full Name *" error={errors.name}>
                  <input className={`am-input${errors.name ? ' am-input--err' : ''}`}
                    value={form.name} onChange={e => change('name', e.target.value)}
                    placeholder="John Doe" />
                </F>
                <F label="Phone Number *" error={errors.phone}>
                  <input className={`am-input${errors.phone ? ' am-input--err' : ''}`}
                    value={form.phone} onChange={e => change('phone', e.target.value)}
                    placeholder="+1 (555) 000-0000" type="tel" />
                </F>
              </div>

              <F label="Address Line 1 *" error={errors.line1}>
                <input className={`am-input${errors.line1 ? ' am-input--err' : ''}`}
                  value={form.line1} onChange={e => change('line1', e.target.value)}
                  placeholder="House/Flat No., Street Name" />
              </F>

              <F label="Address Line 2 (optional)" error={errors.line2}>
                <input className="am-input"
                  value={form.line2} onChange={e => change('line2', e.target.value)}
                  placeholder="Apartment, Suite, Building (optional)" />
              </F>

              <div className="am-row">
                <F label="City *" error={errors.city}>
                  <input className={`am-input${errors.city ? ' am-input--err' : ''}`}
                    value={form.city} onChange={e => change('city', e.target.value)}
                    placeholder="City" />
                </F>
                <F label="State / Province *" error={errors.state}>
                  <input className={`am-input${errors.state ? ' am-input--err' : ''}`}
                    value={form.state} onChange={e => change('state', e.target.value)}
                    placeholder="State / Province" />
                </F>
              </div>

              <div className="am-row">
                <F label="ZIP / Postal Code *" error={errors.zip}>
                  <input className={`am-input${errors.zip ? ' am-input--err' : ''}`}
                    value={form.zip} onChange={e => change('zip', e.target.value)}
                    placeholder="ZIP / Postal Code" />
                </F>
                <F label="Country *" error={errors.country}>
                  <select className={`am-input${errors.country ? ' am-input--err' : ''}`}
                    value={form.country} onChange={e => change('country', e.target.value)}>
                    {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </F>
              </div>

            </div>

            <div className="am-modal__footer">
              <button className="ud-btn ud-btn--ghost" onClick={closeModal}>Cancel</button>
              <button className="ud-btn ud-btn--primary" onClick={save}>
                {editTarget ? 'Save Changes' : 'Add Address'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── Delete confirm modal ─────────────────────────────────────────── */}
      {deleteId && (
        <div className="ud-modal-backdrop" onClick={() => setDeleteId(null)}>
          <div className="ud-modal ud-modal--danger" onClick={e => e.stopPropagation()}>
            <div className="ud-modal__icon">🗑️</div>
            <h3 className="ud-modal__title">Remove Address?</h3>
            <p className="ud-modal__body">
              This address will be permanently removed from your account.
            </p>
            <div className="ud-modal__actions">
              <button className="ud-modal__btn ud-modal__btn--cancel" onClick={() => setDeleteId(null)}>
                Cancel
              </button>
              <button className="ud-modal__btn ud-modal__btn--delete" onClick={doDelete}>
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default AddressManagement
