import React, { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────
const ELIGIBILITY = [
  {
    emoji: "✅",
    label: "Eligible for Return",
    items: [
      "Item received damaged or broken",
      "Wrong item delivered",
      "Item significantly different from description",
      "Defective or non-functional product",
      "Missing parts or accessories listed in description",
    ],
  },
  {
    emoji: "❌",
    label: "Not Eligible for Return",
    items: [
      "Item opened / used (unless defective)",
      "Perishable goods — food, spices, fresh items",
      "Personalised or custom-made products",
      "Intimate apparel and swimwear (hygiene reasons)",
      "Items returned after the 10-day window",
    ],
  },
];

const TIMELINE = [
  {
    step: "01",
    title: "Raise a Request",
    desc: 'Log in to your account, go to My Orders, and click "Return / Refund" next to the relevant item within 10 days of delivery.',
  },
  {
    step: "02",
    title: "Upload Evidence",
    desc: "Attach clear photos or a short video of the issue — packaging, item condition, and the label. This speeds up approval significantly.",
  },
  {
    step: "03",
    title: "Review (1–2 days)",
    desc: "Our team reviews your request and contacts you if any clarification is needed. Most requests are approved within 48 hours.",
  },
  {
    step: "04",
    title: "Ship It Back",
    desc: "Once approved, you will receive a prepaid return shipping label by email. Pack the item securely and drop it off at any partner courier point.",
  },
  {
    step: "05",
    title: "Refund Processed",
    desc: "After the returned item reaches our warehouse and passes inspection, your refund is issued within 5–7 business days to the original payment method.",
  },
];

const REFUND_MODES = [
  {
    icon: "💳",
    method: "Credit / Debit Card",
    time: "5–7 business days",
    note: "Reflected in your next statement cycle.",
  },
  {
    icon: "🏦",
    method: "Net Banking / UPI",
    time: "3–5 business days",
    note: "Credited directly to the source account.",
  },
  {
    icon: "👛",
    method: "VDesiConnect Wallet",
    time: "Within 24 hours",
    note: "Instant option — use towards any future order.",
  },
  {
    icon: "💰",
    method: "Cash on Delivery Orders",
    time: "5–7 business days",
    note: "Refunded to your bank account via NEFT/IMPS.",
  },
];

const FAQS = [
  {
    q: "How long do I have to raise a return request?",
    a: "You have 10 days from the date of delivery to raise a return request. Requests submitted after this window will not be accepted, so please inspect your order as soon as it arrives.",
  },
  {
    q: "Do I have to pay for return shipping?",
    a: "No. If your return is approved, VDesiConnect provides a prepaid return shipping label at no cost to you. For returns that are outside policy (change of mind on eligible items), a nominal shipping fee may apply.",
  },
  {
    q: "Can I exchange an item instead of getting a refund?",
    a: 'Yes. During the return request process you can choose "Exchange" instead of "Refund". Exchanges are subject to stock availability. If the replacement is unavailable, a full refund will be issued automatically.',
  },
  {
    q: "What if only part of my order is damaged?",
    a: "You can raise a partial return for individual items in an order. Each item is evaluated independently. The undamaged portion of your order is not affected.",
  },
  {
    q: "My refund has not arrived after 7 business days — what do I do?",
    a: "First check with your bank, as processing times can occasionally extend by a day or two. If it has been more than 10 business days since we confirmed the refund, contact our support team at support@vdesiconnect.com with your order ID and we will resolve it immediately.",
  },
  {
    q: "Are international orders eligible for returns?",
    a: "Yes, international orders follow the same 10-day return policy. However, return shipping for international orders may take longer, and customs duties paid at import are non-refundable by VDesiConnect.",
  },
  {
    q: "What happens if I received a counterfeit item?",
    a: "This violates our vendor policy. Please raise a return immediately, and our team will expedite your full refund and investigate the vendor. You will never be asked to ship back a suspected counterfeit at your own expense.",
  },
];

// ── Accordion item ────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`returns-faq-item${open ? " returns-faq-item--open" : ""}`}>
      <button
        className="returns-faq-item__q"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{faq.q}</span>
        <span className="returns-faq-item__icon">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="returns-faq-item__a">{faq.a}</p>}
    </div>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────
const Returns = () => (
  <div className="returns-page">
    {/* ── Hero ───────────────────────────────────────────────────────────── */}
    <section className="returns-hero">
      <div className="returns-hero__overlay" />
      <div className="container-custom returns-hero__inner">
        <span className="returns-hero__eyebrow">📦 Returns & Refunds</span>
        <h1 className="returns-hero__title">Shop with Confidence</h1>
        <p className="returns-hero__sub">
          Not happy with your order? We make returns and refunds simple, fair,
          and hassle-free. Your satisfaction is our priority.
        </p>
        <div className="returns-hero__pills">
          <span>✅ 10-Day Return Window</span>
          <span>🚚 Free Return Shipping</span>
          <span>💳 Refund in 5–7 Days</span>
        </div>
      </div>
    </section>

    <div className="container-custom returns-content">
      {/* ── Policy summary ───────────────────────────────────────────────── */}
      <section className="returns-section">
        <p className="returns-section__eyebrow">Our Policy</p>
        <h2 className="returns-section__title">What You Need to Know</h2>
        <div className="returns-policy-box">
          <p>
            At VDesiConnect, we stand behind every product on our platform. If
            your order arrives damaged, incorrect, or not as described, we will
            make it right — no lengthy arguments, no runaround. Simply raise a
            request within <strong>10 days of delivery</strong> and our team
            will take care of the rest.
          </p>
          <p>
            Refunds are issued to the original payment method. Alternatively,
            you can opt for an{" "}
            <strong>instant VDesiConnect Wallet credit</strong> which is
            processed within 24 hours and can be used on any future order.
          </p>
        </div>
      </section>

      {/* ── Eligibility ──────────────────────────────────────────────────── */}
      <section className="returns-section">
        <p className="returns-section__eyebrow">Eligibility</p>
        <h2 className="returns-section__title">What Can Be Returned?</h2>
        <div className="returns-eligibility-grid">
          {ELIGIBILITY.map((col) => (
            <div
              key={col.label}
              className={`returns-elig-card returns-elig-card--${col.emoji === "✅" ? "yes" : "no"}`}
            >
              <h3 className="returns-elig-card__heading">
                <span>{col.emoji}</span> {col.label}
              </h3>
              <ul className="returns-elig-card__list">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="returns-section">
        <p className="returns-section__eyebrow">Step by Step</p>
        <h2 className="returns-section__title">How to Return an Item</h2>
        <div className="returns-timeline">
          {TIMELINE.map((t, i) => (
            <div key={t.step} className="returns-timeline__item">
              <div className="returns-timeline__left">
                <div className="returns-timeline__num">{t.step}</div>
                {i < TIMELINE.length - 1 && (
                  <div className="returns-timeline__line" />
                )}
              </div>
              <div className="returns-timeline__body">
                <h3 className="returns-timeline__title">{t.title}</h3>
                <p className="returns-timeline__desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Refund modes ─────────────────────────────────────────────────── */}
      <section className="returns-section">
        <p className="returns-section__eyebrow">Refund Methods</p>
        <h2 className="returns-section__title">Where Does Your Money Go?</h2>
        <div className="returns-refund-grid">
          {REFUND_MODES.map((r) => (
            <div key={r.method} className="returns-refund-card">
              <span className="returns-refund-card__icon">{r.icon}</span>
              <h3 className="returns-refund-card__method">{r.method}</h3>
              <p className="returns-refund-card__time">{r.time}</p>
              <p className="returns-refund-card__note">{r.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      <section className="returns-section">
        <p className="returns-section__eyebrow">FAQs</p>
        <h2 className="returns-section__title">Frequently Asked Questions</h2>
        <div className="returns-faq-list">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} faq={faq} />
          ))}
        </div>
      </section>
    </div>

    {/* ── Contact CTA ────────────────────────────────────────────────────────── */}
    <section className="returns-contact">
      <div className="container-custom returns-contact__inner">
        <span className="returns-contact__emoji">💬</span>
        <h2 className="returns-contact__title">Still Have Questions?</h2>
        <p className="returns-contact__sub">
          Our support team is available Monday–Saturday, 9 am – 7 pm IST. We
          typically respond within 2 hours.
        </p>
        <div className="returns-contact__actions">
          <a
            href="mailto:support@vdesiconnect.com"
            className="returns-contact__btn returns-contact__btn--primary"
          >
            📧 Email Support
          </a>
          <a
            href="tel:+918001234567"
            className="returns-contact__btn returns-contact__btn--outline"
          >
            📞 Call Us
          </a>
        </div>
        <p className="returns-contact__note">
          support@vdesiconnect.com · +91 800 123 4567
        </p>
      </div>
    </section>
  </div>
);

export default Returns;
