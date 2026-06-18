import React, { useState } from 'react'

const INITIAL = {
  firstName:   'John',
  lastName:    'Doe',
  email:       'john@example.com',
  phone:       '+1 (555) 000-0000',
}

const Profile = () => {
  const [profile,        setProfile]        = useState(INITIAL)
  const [draft,          setDraft]          = useState(INITIAL)
  const [editing,        setEditing]        = useState(false)
  const [showDelete,     setShowDelete]     = useState(false)
  const [deleteInput,    setDeleteInput]    = useState('')
  const [deleted,        setDeleted]        = useState(false)
  const [saved,          setSaved]          = useState(false)
  const [errors,         setErrors]         = useState({})

  /* ── helpers ───────────────────────────────────────────────────────── */

  const initials = `${profile.firstName[0]}${profile.lastName[0]}`.toUpperCase()

  const validate = (d) => {
    const e = {}
    if (!d.firstName.trim())                         e.firstName = 'First name is required'
    if (!d.lastName.trim())                          e.lastName  = 'Last name is required'
    if (!d.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email   = 'Enter a valid email'
    if (!d.phone.trim())                             e.phone     = 'Phone number is required'
    return e
  }

  const handleEdit = () => {
    setDraft({ ...profile })
    setErrors({})
    setEditing(true)
    setSaved(false)
  }

  const handleCancel = () => {
    setDraft({ ...profile })
    setErrors({})
    setEditing(false)
  }

  const handleChange = (field, value) => {
    setDraft(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleSave = () => {
    const e = validate(draft)
    if (Object.keys(e).length) { setErrors(e); return }
    setProfile({ ...draft })
    setEditing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleDeleteConfirm = () => {
    setDeleted(true)
    setShowDelete(false)
  }

  /* ── deleted state ──────────────────────────────────────────────────── */
  if (deleted) {
    return (
      <div className="ud-page">
        <div className="ud-deleted-screen">
          <div className="ud-deleted-screen__icon">✓</div>
          <h2>Account Deleted</h2>
          <p>Your VDesiConnect account has been permanently deleted.<br />We hope to see you again.</p>
          <a href="/" className="ud-btn ud-btn--primary">Return Home</a>
        </div>
      </div>
    )
  }

  /* ── main render ────────────────────────────────────────────────────── */
  return (
    <div className="ud-page">

      {/* breadcrumb */}
      <div className="ud-page__breadcrumb">
        <a href="/">Home</a> › <span>Profile Management</span>
      </div>

      {/* page header */}
      <div className="ud-page__header">
        <div>
          <h1 className="ud-page__title">Profile Management</h1>
          <p className="ud-page__subtitle">View and manage your personal information</p>
        </div>
        {!editing && (
          <button className="ud-btn ud-btn--primary" onClick={handleEdit}>
            ✏️ Edit Profile
          </button>
        )}
      </div>

      {/* success toast */}
      {saved && (
        <div className="ud-toast ud-toast--success">
          ✅ Profile updated successfully!
        </div>
      )}

      {/* profile card */}
      <div className="ud-card">

        {/* avatar row */}
        <div className="ud-profile-avatar-row">
          <div className="ud-profile-avatar">{initials}</div>
          <div>
            <h2 className="ud-profile-avatar-row__name">{profile.firstName} {profile.lastName}</h2>
            <p className="ud-profile-avatar-row__sub">VDesiConnect Member</p>
          </div>
        </div>

        <hr className="ud-divider" />

        {/* fields */}
        <div className="ud-fields">

          <Field
            label="First Name"
            value={editing ? draft.firstName : profile.firstName}
            editing={editing}
            error={errors.firstName}
            icon="👤"
            onChange={v => handleChange('firstName', v)}
          />

          <Field
            label="Last Name"
            value={editing ? draft.lastName : profile.lastName}
            editing={editing}
            error={errors.lastName}
            icon="👤"
            onChange={v => handleChange('lastName', v)}
          />

          <Field
            label="Email Address"
            value={editing ? draft.email : profile.email}
            editing={editing}
            error={errors.email}
            icon="✉️"
            type="email"
            onChange={v => handleChange('email', v)}
          />

          <Field
            label="Phone Number"
            value={editing ? draft.phone : profile.phone}
            editing={editing}
            error={errors.phone}
            icon="📞"
            type="tel"
            onChange={v => handleChange('phone', v)}
          />

        </div>

        {/* edit-mode buttons */}
        {editing && (
          <div className="ud-form-actions">
            <button className="ud-btn ud-btn--ghost" onClick={handleCancel}>Cancel</button>
            <button className="ud-btn ud-btn--primary" onClick={handleSave}>Save Changes</button>
          </div>
        )}
      </div>

      {/* danger zone */}
      <div className="ud-card ud-card--danger">
        <h3 className="ud-danger-title">⚠️ Danger Zone</h3>
        <p className="ud-danger-desc">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <button className="ud-btn ud-btn--danger" onClick={() => setShowDelete(true)}>
          🗑️ Delete My Account
        </button>
      </div>

      {/* ── Delete confirmation modal ──────────────────────────────────── */}
      {showDelete && (
        <div className="ud-modal-backdrop" onClick={() => { setShowDelete(false); setDeleteInput('') }}>
          <div className="ud-modal ud-modal--danger" onClick={e => e.stopPropagation()}>
            <div className="ud-modal__icon ud-modal__icon--danger">⚠️</div>
            <h3 className="ud-modal__title">Delete Your Account?</h3>
            <p className="ud-modal__body">
              This will <strong>permanently remove</strong> your profile, orders, and saved addresses.
              You cannot undo this action.
            </p>
            <div className="ud-modal__confirm-input-wrap">
              <label className="ud-modal__confirm-label">
                Type <strong>DELETE</strong> to confirm
              </label>
              <input
                className="ud-modal__confirm-input"
                value={deleteInput}
                onChange={e => setDeleteInput(e.target.value)}
                placeholder="DELETE"
                autoFocus
              />
            </div>
            <div className="ud-modal__actions">
              <button
                className="ud-modal__btn ud-modal__btn--cancel"
                onClick={() => { setShowDelete(false); setDeleteInput('') }}
              >
                Cancel, Keep My Account
              </button>
              <button
                className={`ud-modal__btn ud-modal__btn--delete${deleteInput !== 'DELETE' ? ' ud-modal__btn--disabled' : ''}`}
                onClick={deleteInput === 'DELETE' ? handleDeleteConfirm : undefined}
                disabled={deleteInput !== 'DELETE'}
              >
                Yes, Delete My Account
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

/* ── Reusable field component ─────────────────────────────────────────── */
const Field = ({ label, value, editing, error, icon, type = 'text', onChange }) => (
  <div className="ud-field">
    <label className="ud-field__label">
      <span className="ud-field__icon">{icon}</span> {label}
    </label>
    {editing ? (
      <>
        <input
          className={`ud-field__input${error ? ' ud-field__input--error' : ''}`}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {error && <span className="ud-field__error">{error}</span>}
      </>
    ) : (
      <p className="ud-field__value">{value}</p>
    )}
  </div>
)

export default Profile
