import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '💻', title: 'Software Development', desc: 'Custom web and mobile applications built by experienced Indian developers — on time, within budget, and to your exact specifications.' },
  { icon: '☁️', title: 'Cloud Solutions', desc: 'Migration, architecture, and management of AWS, Azure, and Google Cloud environments. Scale confidently with expert guidance.' },
  { icon: '🛡️', title: 'Cybersecurity', desc: 'Vulnerability assessments, penetration testing, compliance audits, and 24/7 threat monitoring to keep your business secure.' },
  { icon: '🤖', title: 'AI & Automation', desc: 'Harness the power of machine learning, RPA, and intelligent automation to streamline operations and reduce costs.' },
  { icon: '📊', title: 'Data Analytics & BI', desc: 'Transform raw data into actionable insights with custom dashboards, reporting tools, and predictive analytics solutions.' },
  { icon: '🔧', title: 'IT Support & Helpdesk', desc: 'Remote helpdesk, system administration, and managed IT support for individuals and businesses — available across time zones.' },
  { icon: '🌐', title: 'Website & E-Commerce', desc: 'Professional website design, e-commerce store development, SEO optimisation, and ongoing maintenance for your online presence.' },
  { icon: '🗄️', title: 'ERP & CRM Consulting', desc: 'Implementation, customisation, and training for SAP, Salesforce, Zoho, and other enterprise systems tailored to your workflow.' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Native and cross-platform iOS & Android apps — from concept to launch, with post-deployment support included.' },
  { icon: '🔗', title: 'IT Consulting & Strategy', desc: 'Technology roadmap planning, vendor selection, digital transformation strategy, and independent IT audits from senior consultants.' },
]

const PRODUCTS = [
  { icon: '🖥️', category: 'Hardware & Infrastructure', items: ['Laptops & Desktops', 'Servers & Workstations', 'Networking Equipment', 'Storage Devices', 'Printers & Peripherals', 'UPS & Power Management'] },
  { icon: '📦', category: 'Software Licences', items: ['Microsoft 365 & Azure', 'Adobe Creative Cloud', 'Antivirus & Security Suites', 'Accounting & ERP Software', 'Collaboration Tools', 'Development IDEs & Tools'] },
  { icon: '🔌', category: 'IT Accessories', items: ['Cables & Connectors', 'Docking Stations', 'Webcams & Headsets', 'KVM Switches', 'Smart Card Readers', 'USB Hubs & Adapters'] },
  { icon: '☁️', category: 'Cloud & SaaS Products', items: ['Cloud Hosting Plans', 'Domain Registration', 'SSL Certificates', 'Email Hosting', 'VPN Services', 'Backup Solutions'] },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '📋', title: 'Tell Us Your Needs', desc: 'Share your IT challenge, project requirement, or product inquiry through our form. Be as detailed or brief as you like.' },
  { step: '02', icon: '👨‍💼', title: 'Meet Your Consultant', desc: 'We assign a senior IT consultant within 24 hours who specialises in your area — development, cloud, security, or hardware.' },
  { step: '03', icon: '📐', title: 'Get a Tailored Proposal', desc: 'Receive a detailed scope of work, timeline, and transparent pricing. No hidden charges, no lock-in contracts.' },
  { step: '04', icon: '🚀', title: 'We Deliver', desc: 'Our team executes the project or procures the product with regular updates and quality checkpoints throughout.' },
  { step: '05', icon: '🔁', title: 'Ongoing Support', desc: 'Post-delivery support, maintenance, and SLAs ensure your IT systems keep running at peak performance.' },
]

const STATS = [
  { number: '200+', label: 'IT Professionals' },
  { number: '15+',  label: 'Years Combined Experience' },
  { number: '500+', label: 'Projects Delivered' },
  { number: '30+',  label: 'Countries Served' },
]

const TECH_STACK = [
  'React', 'Node.js', 'Python', 'Java', 'PHP', '.NET', 'Flutter', 'Swift',
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB',
  'Salesforce', 'SAP', 'Zoho', 'Shopify', 'WordPress', 'Magento', 'Power BI',
  'TensorFlow', 'Cybersecurity', 'DevOps', 'Agile / Scrum',
]

const WHY_US = [
  { icon: '🧑‍💻', title: 'Experienced Indian IT Talent', desc: 'Access India\'s vast pool of skilled engineers, developers, and consultants — vetted, certified, and ready to deliver.' },
  { icon: '💸', title: 'Cost-Effective Solutions', desc: 'High-quality IT work at 40–70% lower cost than equivalent talent in the US, UK, or Australia — without compromising quality.' },
  { icon: '🕐', title: 'Flexible Engagement Models', desc: 'Choose from fixed-price projects, hourly consulting, dedicated team hire, or ongoing managed services — whatever suits you.' },
  { icon: '🌐', title: 'Diaspora-Focused Service', desc: 'We understand the unique needs of NRI businesses and Indian entrepreneurs operating internationally. We speak your language.' },
  { icon: '🔒', title: 'IP Protection & NDAs', desc: 'All engagements are covered by NDAs and IP assignment agreements. Your ideas, your code, your property — always.' },
  { icon: '📈', title: 'Proven Track Record', desc: 'Over 500 successful projects delivered across startups, SMEs, and enterprise clients in more than 30 countries.' },
]

const INDUSTRIES = [
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🏦', name: 'Finance & Banking' },
  { icon: '🛍️', name: 'E-Commerce & Retail' },
  { icon: '🎓', name: 'Education & EdTech' },
  { icon: '🏗️', name: 'Real Estate' },
  { icon: '🚚', name: 'Logistics & Supply Chain' },
  { icon: '⚖️', name: 'Legal & Compliance' },
  { icon: '🌿', name: 'Agriculture & Food Tech' },
  { icon: '🎬', name: 'Media & Entertainment' },
  { icon: '✈️', name: 'Travel & Hospitality' },
  { icon: '🔬', name: 'Pharma & Biotech' },
  { icon: '🏭', name: 'Manufacturing' },
]

const FAQS = [
  { q: 'Can I hire a dedicated developer or team from VDesiConnect?', a: 'Yes. We offer dedicated resource hiring where you get one or more full-time developers, designers, or QA engineers working exclusively on your project at a monthly rate. This is ideal for long-running projects or startups needing extended team capacity.' },
  { q: 'How do you ensure the quality of deliverables?', a: 'Every project follows a structured QA process — code reviews, unit testing, UAT, and milestone sign-offs. You receive regular progress updates and have direct communication with the team throughout the engagement.' },
  { q: 'What are your data security and confidentiality practices?', a: 'All consultants sign NDAs before engagement begins. Code and data are handled on secured, access-controlled infrastructure. We follow ISO 27001-aligned security practices and can accommodate client-specific security requirements.' },
  { q: 'Do you offer IT support for existing systems I did not build with you?', a: 'Absolutely. We regularly take over maintenance and support for existing systems built by other vendors. Our team conducts a code audit, documents the architecture, and then provides ongoing support under a managed services agreement.' },
  { q: 'Can you help me choose the right IT products for my business?', a: 'Yes. Our IT product consulting service involves understanding your workflow, team size, and budget, then recommending the best hardware, software, and cloud solutions — along with procurement assistance and setup support.' },
  { q: 'What is the typical turnaround time for a software project?', a: 'It depends on scope — a simple website takes 2–4 weeks, a mid-sized web app 6–12 weeks, and a complex enterprise system 3–6 months. After your free consultation, we provide a detailed timeline in the proposal.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`it-faq-item${open ? ' it-faq-item--open' : ''}`}>
      <button className="it-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="it-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="it-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Itservices = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="it-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="it-hero">
        <div className="it-hero__overlay" />
        <div className="container-custom it-hero__inner">
          <div className="it-hero__content">
            <span className="it-hero__eyebrow">💻 IT Services & Consulting</span>
            <h1 className="it-hero__title">
              India's Best IT Talent,<br className="it-hero__br" /> Working for You
            </h1>
            <p className="it-hero__sub">
              From custom software development and cloud solutions to IT product consulting
              and managed support — connect with verified Indian IT professionals who deliver
              world-class work at cost-effective rates.
            </p>
            <div className="it-hero__actions">
              <a href="#enquire" className="it-hero__btn it-hero__btn--primary">Get a Free Consultation</a>
              <a href="#services" className="it-hero__btn it-hero__btn--outline">Explore Services</a>
            </div>
            <div className="it-hero__pills">
              <span>✅ Vetted Professionals</span>
              <span>💸 40–70% Cost Savings</span>
              <span>🔒 NDA & IP Protected</span>
              <span>⚡ 24-Hour Response</span>
            </div>
          </div>
          <div className="it-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="it-hero__stat">
                <span className="it-hero__stat-num">{s.number}</span>
                <span className="it-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom it-content">

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="it-section" id="services">
          <p className="it-section__eyebrow">What We Offer</p>
          <h2 className="it-section__title">End-to-End IT Services for Every Business Need</h2>
          <div className="it-services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="it-service-card">
                <span className="it-service-card__icon">{s.icon}</span>
                <h3 className="it-service-card__title">{s.title}</h3>
                <p className="it-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Product consulting ────────────────────────────────────────── */}
        <section className="it-section">
          <p className="it-section__eyebrow">IT Product Consulting</p>
          <h2 className="it-section__title">The Right Tech for Your Business</h2>
          <p className="it-section__lead">
            Not sure which hardware, software, or cloud platform suits your needs?
            Our consultants assess your requirements and recommend — and procure — the best-fit IT products
            with transparent pricing and vendor-neutral advice.
          </p>
          <div className="it-products-grid">
            {PRODUCTS.map(p => (
              <div key={p.category} className="it-product-card">
                <div className="it-product-card__header">
                  <span>{p.icon}</span>
                  <h3>{p.category}</h3>
                </div>
                <ul>
                  {p.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="it-section">
          <p className="it-section__eyebrow">Step by Step</p>
          <h2 className="it-section__title">How It Works</h2>
          <div className="it-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="it-step">
                <div className="it-step__left">
                  <div className="it-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="it-step__line" />}
                </div>
                <div className="it-step__body">
                  <span className="it-step__icon">{step.icon}</span>
                  <h3 className="it-step__title">{step.title}</h3>
                  <p className="it-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech stack ───────────────────────────────────────────────── */}
        <section className="it-section">
          <p className="it-section__eyebrow">Technologies</p>
          <h2 className="it-section__title">Our Technology Stack</h2>
          <div className="it-tech-wrap">
            {TECH_STACK.map(t => (
              <span key={t} className="it-tech-tag">{t}</span>
            ))}
          </div>
        </section>

        {/* ── Industries ────────────────────────────────────────────────── */}
        <section className="it-section">
          <p className="it-section__eyebrow">Industries We Serve</p>
          <h2 className="it-section__title">Expertise Across 12+ Sectors</h2>
          <div className="it-industries-grid">
            {INDUSTRIES.map(ind => (
              <div key={ind.name} className="it-industry-card">
                <span>{ind.icon}</span>
                <p>{ind.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="it-section">
          <p className="it-section__eyebrow">Why VDesiConnect IT</p>
          <h2 className="it-section__title">Why Businesses Choose Us</h2>
          <div className="it-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="it-why-card">
                <span className="it-why-card__icon">{w.icon}</span>
                <h3 className="it-why-card__title">{w.title}</h3>
                <p className="it-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Enquiry form ──────────────────────────────────────────────── */}
        <section className="it-section" id="enquire">
          <p className="it-section__eyebrow">Get Started</p>
          <h2 className="it-section__title">Request a Free Consultation</h2>
          <div className="it-enquiry-wrap">

            <div className="it-enquiry-info">
              <h3>Let's Talk Tech</h3>
              <p>Tell us about your project or requirement and a senior consultant will get back to you within <strong>24 hours</strong> — at no obligation and no cost.</p>
              <ul className="it-enquiry-info__list">
                <li><span>📞</span> Free initial consultation call</li>
                <li><span>📋</span> Detailed scope & timeline document</li>
                <li><span>💰</span> Transparent fixed or hourly pricing</li>
                <li><span>🔒</span> NDA signed before any discussion</li>
                <li><span>🔁</span> No lock-in — cancel anytime</li>
              </ul>
              <div className="it-enquiry-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:it@vdesiconnect.com">📧 it@vdesiconnect.com</a>
              </div>
            </div>

            <div className="it-form-wrap">
              {sent ? (
                <div className="it-form__success">
                  <span>🚀</span>
                  <h3>Enquiry Received!</h3>
                  <p>Thanks, <strong>{form.name}</strong>. A consultant will reach you at <strong>{form.email}</strong> within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' }) }}>
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form className="it-form" onSubmit={handleSubmit}>
                  <div className="it-form__row">
                    <div className="it-form__field">
                      <label>Full Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Rahul Mehta" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="it-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="rahul@company.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="it-form__row">
                    <div className="it-form__field">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="it-form__field">
                      <label>Service Required</label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service…</option>
                        <option>Software Development</option>
                        <option>Cloud Solutions</option>
                        <option>Cybersecurity</option>
                        <option>AI & Automation</option>
                        <option>Data Analytics & BI</option>
                        <option>IT Support & Helpdesk</option>
                        <option>Website & E-Commerce</option>
                        <option>ERP & CRM Consulting</option>
                        <option>Mobile App Development</option>
                        <option>IT Product Consulting</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="it-form__field">
                    <label>Estimated Budget</label>
                    <select name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select budget range…</option>
                      <option>Under $1,000</option>
                      <option>$1,000 – $5,000</option>
                      <option>$5,000 – $20,000</option>
                      <option>$20,000 – $50,000</option>
                      <option>$50,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="it-form__field">
                    <label>Project Details</label>
                    <textarea name="message" rows={4} placeholder="Describe your project, challenge, or what you're looking to build or procure…" value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="it-form__submit">Send Enquiry →</button>
                  <p className="it-form__note">🔒 Your information is confidential. We sign an NDA before any project discussion.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="it-section">
          <p className="it-section__eyebrow">FAQs</p>
          <h2 className="it-section__title">Frequently Asked Questions</h2>
          <div className="it-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="it-cta">
        <div className="container-custom it-cta__inner">
          <span className="it-cta__emoji">🚀</span>
          <h2 className="it-cta__title">Ready to Build Something Great?</h2>
          <p className="it-cta__sub">
            Whether you need a single developer, a full project team, or expert
            advice on your IT stack — VDesiConnect has the talent and the expertise
            to make it happen.
          </p>
          <a href="#enquire" className="it-cta__btn">Start a Free Consultation</a>
          <p className="it-cta__note">
            📞 <strong>+91 800 123 4567</strong> &nbsp;·&nbsp; 📧 <strong>it@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Itservices
