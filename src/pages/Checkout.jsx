import React, { useState } from "react";
import { Link } from "react-router-dom";

import p01 from "../assets/sample-products/testproduct01.jpg";
import p02 from "../assets/sample-products/testproduct02.jpg";
import p04 from "../assets/sample-products/testproduct04.jpg";
import p08 from "../assets/sample-products/testproduct08.jpg";
import p12 from "../assets/sample-products/testproduct12.jpg";

// ── Order items (mirrors Cart) ─────────────────────────────────────────────
const ORDER_ITEMS = [
  {
    id: 1,
    image: p01,
    name: "Handcrafted Banarasi Silk Saree",
    size: "M (36)",
    qty: 1,
    price: 44.99,
  },
  {
    id: 2,
    image: p02,
    name: "Men's Classic Cotton Kurta",
    size: "L (38)",
    qty: 2,
    price: 19.99,
  },
  {
    id: 4,
    image: p04,
    name: "Handwoven Phulkari Dupatta",
    size: "Free Size",
    qty: 1,
    price: 22.99,
  },
  {
    id: 12,
    image: p12,
    name: "Kundan Bridal Jewellery Set",
    size: "Standard",
    qty: 1,
    price: 45.99,
  },
  {
    id: 8,
    image: p08,
    name: "Traditional Rajasthani Juttis",
    size: "UK 6",
    qty: 2,
    price: 31.99,
  },
];

// ── Saved addresses ────────────────────────────────────────────────────────
const INIT_ADDRESSES = [
  {
    id: 1,
    name: "Priya Sharma",
    phone: "+1 (555) 123-4567",
    line1: "1234 Oak Street, Apt 5B",
    line2: "",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
    type: "Home",
  },
  {
    id: 2,
    name: "Priya Sharma",
    phone: "+1 (555) 987-6543",
    line1: "456 Business Ave, Suite 200",
    line2: "",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    country: "United States",
    type: "Office",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    phone: "+1 (555) 456-7890",
    line1: "789 Elm Drive",
    line2: "",
    city: "Austin",
    state: "TX",
    zip: "78701",
    country: "United States",
    type: "Other",
  },
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  zip: "",
  country: "United States",
  type: "Home",
};

// ── Icons ──────────────────────────────────────────────────────────────────
const EditIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={13}
    height={13}
  >
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const TrashIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={13}
    height={13}
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={14}
    height={14}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={13}
    height={13}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={15}
    height={15}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ── Component ──────────────────────────────────────────────────────────────
const Checkout = () => {
  const [addresses, setAddresses] = useState(INIT_ADDRESSES);
  const [selectedId, setSelectedId] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [formError, setFormError] = useState("");

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const openAdd = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setFormError("");
    setShowForm(true);
  };

  const openEdit = (addr, e) => {
    e.stopPropagation();
    setForm({ ...addr });
    setEditingId(addr.id);
    setFormError("");
    setShowForm(true);
  };

  const deleteAddress = (id, e) => {
    e.stopPropagation();
    const remaining = addresses.filter((a) => a.id !== id);
    setAddresses(remaining);
    if (selectedId === id && remaining.length > 0)
      setSelectedId(remaining[0].id);
  };

  const saveAddress = () => {
    if (
      !form.name.trim() ||
      !form.line1.trim() ||
      !form.city.trim() ||
      !form.zip.trim()
    ) {
      setFormError("Please fill in all required fields.");
      return;
    }
    if (editingId) {
      setAddresses((prev) =>
        prev.map((a) => (a.id === editingId ? { ...form, id: editingId } : a)),
      );
    } else {
      const newId = Date.now();
      setAddresses((prev) => [...prev, { ...form, id: newId }]);
      setSelectedId(newId);
    }
    setShowForm(false);
    setEditingId(null);
    setFormError("");
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormError("");
  };

  // ── Order calculations ───────────────────────────────────────────────────
  const subtotal = ORDER_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="co-page">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="co-page__breadcrumb">
          <Link to="/cart">Cart</Link>
          <span>›</span>
          <span>Checkout</span>
        </nav>

        <h1 className="co-page__title">Checkout</h1>

        <div className="co-layout">
          {/* ══════════════════════════════════════════════
              LEFT — Delivery Address
          ══════════════════════════════════════════════ */}
          <div className="co-left">
            <div className="co-section">
              <div className="co-section__head">
                <span className="co-section__step">1</span>
                <h2 className="co-section__title">Delivery Address</h2>
                {!showForm && (
                  <button className="co-add-btn" onClick={openAdd}>
                    + Add New Address
                  </button>
                )}
              </div>

              {/* ── Address list ──────────────────────── */}
              {!showForm && (
                <div className="addr-list">
                  {addresses.length === 0 && (
                    <div className="addr-list__empty">
                      <MapPinIcon />
                      <p>No saved addresses. Add one to continue.</p>
                    </div>
                  )}

                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className={`addr-card${selectedId === addr.id ? " addr-card--selected" : ""}`}
                      onClick={() => setSelectedId(addr.id)}
                      role="radio"
                      aria-checked={selectedId === addr.id}
                    >
                      {/* Radio circle */}
                      <div className="addr-card__radio">
                        {selectedId === addr.id && <CheckIcon />}
                      </div>

                      <div className="addr-card__body">
                        <div className="addr-card__top-row">
                          <span className="addr-card__name">{addr.name}</span>
                          <span
                            className={`addr-card__badge addr-card__badge--${addr.type.toLowerCase()}`}
                          >
                            {addr.type}
                          </span>
                          <div className="addr-card__actions">
                            <button
                              className="addr-card__action addr-card__action--edit"
                              onClick={(e) => openEdit(addr, e)}
                              aria-label="Edit address"
                            >
                              <EditIcon /> Edit
                            </button>
                            <button
                              className="addr-card__action addr-card__action--del"
                              onClick={(e) => deleteAddress(addr.id, e)}
                              aria-label="Delete address"
                            >
                              <TrashIcon /> Delete
                            </button>
                          </div>
                        </div>

                        <p className="addr-card__line">
                          {addr.line1}
                          {addr.line2 ? `, ${addr.line2}` : ""}
                        </p>
                        <p className="addr-card__line">
                          {addr.city}, {addr.state} {addr.zip}
                        </p>
                        <p className="addr-card__line">{addr.country}</p>
                        <p className="addr-card__phone">{addr.phone}</p>

                        {selectedId === addr.id && (
                          <span className="addr-card__deliver-here">
                            Deliver to this address
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Add / Edit form ───────────────────── */}
              {showForm && (
                <div className="addr-form">
                  <h3 className="addr-form__heading">
                    {editingId ? "Edit Address" : "Add New Address"}
                  </h3>

                  {formError && <p className="addr-form__error">{formError}</p>}

                  <div className="addr-form__grid">
                    <div className="addr-form__field">
                      <label>
                        Full Name <span>*</span>
                      </label>
                      <input
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="addr-form__field">
                      <label>
                        Phone Number <span>*</span>
                      </label>
                      <input
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="addr-form__field addr-form__field--full">
                      <label>
                        Address Line 1 <span>*</span>
                      </label>
                      <input
                        value={form.line1}
                        onChange={set("line1")}
                        placeholder="Street address, P.O. box, company name"
                      />
                    </div>

                    <div className="addr-form__field addr-form__field--full">
                      <label>Address Line 2</label>
                      <input
                        value={form.line2}
                        onChange={set("line2")}
                        placeholder="Apartment, suite, unit (optional)"
                      />
                    </div>

                    <div className="addr-form__field">
                      <label>
                        City <span>*</span>
                      </label>
                      <input
                        value={form.city}
                        onChange={set("city")}
                        placeholder="City"
                      />
                    </div>

                    <div className="addr-form__field">
                      <label>State / Province</label>
                      <input
                        value={form.state}
                        onChange={set("state")}
                        placeholder="State"
                      />
                    </div>

                    <div className="addr-form__field">
                      <label>
                        ZIP / Postal Code <span>*</span>
                      </label>
                      <input
                        value={form.zip}
                        onChange={set("zip")}
                        placeholder="ZIP Code"
                      />
                    </div>

                    <div className="addr-form__field">
                      <label>Country</label>
                      <select value={form.country} onChange={set("country")}>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>India</option>
                        <option>Australia</option>
                        <option>Germany</option>
                        <option>France</option>
                      </select>
                    </div>

                    <div className="addr-form__field addr-form__field--full">
                      <label>Address Type</label>
                      <div className="addr-form__type-row">
                        {["Home", "Office", "Other"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            className={`addr-form__type-btn${form.type === t ? " addr-form__type-btn--active" : ""}`}
                            onClick={() =>
                              setForm((prev) => ({ ...prev, type: t }))
                            }
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="addr-form__footer">
                    <button className="addr-form__save" onClick={saveAddress}>
                      {editingId ? "Update Address" : "Save Address"}
                    </button>
                    <button className="addr-form__cancel" onClick={cancelForm}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              RIGHT — Order Summary
          ══════════════════════════════════════════════ */}
          <aside className="co-summary">
            <h2 className="co-summary__heading">Order Summary</h2>

            {/* Product list */}
            <div className="co-summary__items">
              {ORDER_ITEMS.map((item) => (
                <div key={item.id} className="co-summary__item">
                  <div className="co-summary__img-wrap">
                    <img src={item.image} alt={item.name} />
                    <span className="co-summary__qty-badge">{item.qty}</span>
                  </div>
                  <div className="co-summary__item-info">
                    <p className="co-summary__item-name">{item.name}</p>
                    <span className="co-summary__item-size">
                      Size: {item.size}
                    </span>
                  </div>
                  <span className="co-summary__item-total">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="co-summary__totals">
              <div className="co-summary__row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="co-summary__row">
                <span>Shipping</span>
                <span className="co-summary__free">Free</span>
              </div>
              <div className="co-summary__row">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="co-summary__total-row">
              <span>Order Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Delivery info */}
            {selectedId && addresses.find((a) => a.id === selectedId) && (
              <div className="co-summary__deliver-to">
                <MapPinIcon />
                <div>
                  <p className="co-summary__deliver-label">Delivering to</p>
                  <p className="co-summary__deliver-addr">
                    {addresses.find((a) => a.id === selectedId)?.line1},{" "}
                    {addresses.find((a) => a.id === selectedId)?.city}
                  </p>
                </div>
              </div>
            )}

            <button
              className="co-summary__place-order d-none d-lg-block"
              disabled={addresses.length === 0}
            >
              Place Order
            </button>

            <div className="co-summary__secure">
              <LockIcon />
              Secure &amp; encrypted checkout
            </div>

            <Link to="/cart" className="co-summary__back">
              ← Back to Cart
            </Link>
          </aside>
        </div>
      </div>

      {/* ── Mobile fixed Place Order bar ─────────────────────────── */}
      <div className="co-place-order-bar d-lg-none">
        <div className="co-place-order-bar__total">
          <span className="co-place-order-bar__label">Order Total</span>
          <span className="co-place-order-bar__amount">${total.toFixed(2)}</span>
        </div>
        <button
          className="co-place-order-bar__btn"
          disabled={addresses.length === 0}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
