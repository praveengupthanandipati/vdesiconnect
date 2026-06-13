import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const SUBJECTS = [
  { icon: '➗', name: 'Mathematics', levels: 'Grade 1 – College', tutors: 48, popular: true },
  { icon: '⚗️', name: 'Science', levels: 'Grade 4 – Grade 12', tutors: 36, popular: true },
  { icon: '🧬', name: 'Biology', levels: 'Grade 9 – NEET Prep', tutors: 29, popular: false },
  { icon: '⚛️', name: 'Physics', levels: 'Grade 8 – JEE Prep', tutors: 31, popular: true },
  { icon: '🧪', name: 'Chemistry', levels: 'Grade 8 – JEE Prep', tutors: 27, popular: false },
  { icon: '💻', name: 'Computer Science', levels: 'Beginner – Advanced', tutors: 22, popular: true },
  { icon: '📜', name: 'Hindi & Sanskrit', levels: 'All Levels', tutors: 18, popular: false },
  { icon: '🗣️', name: 'English Language', levels: 'All Levels', tutors: 41, popular: true },
  { icon: '🌏', name: 'Regional Languages', levels: 'All Levels', tutors: 33, popular: false },
  { icon: '🎵', name: 'Indian Classical Music', levels: 'Beginner – Advanced', tutors: 15, popular: false },
  { icon: '💃', name: 'Indian Dance (Bharatnatyam / Kathak)', levels: 'Beginner – Intermediate', tutors: 12, popular: false },
  { icon: '📐', name: 'Engineering Entrance (JEE)', levels: 'Grade 11 – 12', tutors: 19, popular: true },
  { icon: '🩺', name: 'Medical Entrance (NEET)', levels: 'Grade 11 – 12', tutors: 17, popular: false },
  { icon: '📊', name: 'Accountancy & Commerce', levels: 'Grade 11 – Graduate', tutors: 21, popular: false },
  { icon: '🖌️', name: 'Art & Drawing', levels: 'All Ages', tutors: 10, popular: false },
  { icon: '🧘', name: 'Yoga & Vedic Studies', levels: 'All Ages', tutors: 8, popular: false },
]

const TUTORS = [
  { name: 'Dr. Ananya Krishnan', subject: 'Mathematics & Physics', exp: '14 years', rating: 4.9, reviews: 312, country: '🇺🇸 USA', badge: 'Top Rated', avatar: '👩‍🏫', quals: 'PhD, IIT Bombay' },
  { name: 'Vikram Nair', subject: 'JEE & NEET Coaching', exp: '11 years', rating: 4.8, reviews: 278, country: '🇨🇦 Canada', badge: 'Expert', avatar: '👨‍🏫', quals: 'B.Tech, NIT Trichy' },
  { name: 'Priya Subramaniam', subject: 'English & Hindi Literature', exp: '9 years', rating: 4.9, reviews: 195, country: '🇬🇧 UK', badge: 'Top Rated', avatar: '👩‍🏫', quals: 'MA English, DU' },
  { name: 'Rajesh Gupta', subject: 'Computer Science & Coding', exp: '8 years', rating: 4.7, reviews: 167, country: '🇦🇺 Australia', badge: 'New', avatar: '👨‍💻', quals: 'B.Tech CSE, VIT' },
  { name: 'Meera Pillai', subject: 'Bharatnatyam & Kathak', exp: '16 years', rating: 5.0, reviews: 88, country: '🇸🇬 Singapore', badge: 'Expert', avatar: '💃', quals: 'Diploma in Bharatnatyam, Kalakshetra' },
  { name: 'Arjun Mehta', subject: 'Indian Classical Music (Sitar)', exp: '12 years', rating: 4.8, reviews: 74, country: '🇩🇪 Germany', badge: 'Top Rated', avatar: '🎵', quals: 'MA Music, BHU' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '🔍', title: 'Browse & Choose', desc: 'Search by subject, language, grade level, or tutor name. Filter by country, availability, or price range to find your perfect match.' },
  { step: '02', icon: '🗓️', title: 'Book a Free Trial', desc: 'Schedule a free 30-minute trial session with your chosen tutor. No payment required upfront — just pick a time that works for you.' },
  { step: '03', icon: '💬', title: 'Meet Your Tutor', desc: 'Join the session via our built-in video classroom. Share your goals, syllabus, and learning style. The tutor customises the plan for you.' },
  { step: '04', icon: '📚', title: 'Learn & Grow', desc: 'Attend scheduled sessions, complete assignments, and track your progress through our student dashboard. Parents get a weekly progress report.' },
  { step: '05', icon: '🏆', title: 'Achieve Your Goals', desc: 'From acing exams to mastering a classical art form — celebrate milestones with certificates and tutor recommendations.' },
]

const STATS = [
  { number: '500+', label: 'Verified Tutors' },
  { number: '30+',  label: 'Subjects Covered' },
  { number: '25K+', label: 'Students Taught' },
  { number: '4.8★', label: 'Average Rating' },
]

const WHY_US = [
  { icon: '✅', title: 'Verified & Vetted Tutors', desc: 'Every tutor undergoes background checks, credential verification, and a demo session before joining. Only the top 20% of applicants are accepted.' },
  { icon: '🌐', title: 'Indian Diaspora Focused', desc: 'Our tutors understand the unique challenges of NRI children — cultural context, Indian curriculum, bilingual learning, and timezone flexibility.' },
  { icon: '📱', title: 'Interactive Virtual Classroom', desc: 'Whiteboard, screen share, file upload, real-time chat, session recording — everything a classroom offers, right on your device.' },
  { icon: '🕐', title: 'Flexible Scheduling', desc: 'Sessions available from early morning to late night IST to accommodate students across the US, UK, Australia, Middle East, and beyond.' },
  { icon: '👨‍👩‍👧', title: 'Parent Dashboard', desc: 'Parents get full visibility — session attendance, homework completion, tutor notes, and progress graphs — all in one place.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Rates start as low as ₹300/hour. Pay per session or save more with monthly packages. No long-term lock-ins.' },
]

const PRICING = [
  { plan: 'Pay Per Session', price: '₹300', unit: 'per hour onwards', features: ['Any subject', 'Free trial session', 'Session recording', 'Cancel anytime'], highlight: false },
  { plan: 'Monthly Package', price: '₹2,499', unit: '8 sessions / month', features: ['Save up to 25%', 'Dedicated tutor', 'Weekly progress report', 'Priority scheduling'], highlight: true },
  { plan: 'Intensive Prep', price: '₹5,999', unit: '20 sessions / month', features: ['JEE / NEET / Board prep', 'Daily sessions', 'Mock tests included', 'Parent & student calls'], highlight: false },
]

const FAQS = [
  { q: 'Are the tutors qualified to teach the Indian curriculum (CBSE / ICSE / State Boards)?', a: 'Yes. All our tutors are selected based on their knowledge of the Indian curriculum — CBSE, ICSE, and major State Boards. For NRI students following international curricula like IB, IGCSE, or the US Common Core, we have specialist tutors for those as well. You can filter by curriculum when searching.' },
  { q: 'Can my child get a free trial before committing?', a: 'Absolutely. Every new student is entitled to one free 30-minute trial session with a tutor of their choice. This session lets your child and the tutor get comfortable with each other before any payment is made. No credit card is required to book the trial.' },
  { q: 'What age groups do you cater to?', a: 'We cover all ages — from Grade 1 (age 6) through to university undergraduate level and beyond. We also offer adult learners courses in Indian languages, music, dance, and yoga. Our youngest students are 5 years old (for music and art) and our oldest are 60+ (for language and yoga).' },
  { q: 'How are online sessions conducted?', a: 'Sessions are conducted via our integrated video classroom, accessible through any web browser. No downloads are required. The classroom includes a digital whiteboard, screen sharing, document upload, session recording (stored for 30 days), and a chat window. Students and tutors can also use shared Google Docs or worksheets.' },
  { q: 'What if we are unhappy with our tutor?', a: 'You can switch tutors at any time with no penalty. If a session did not meet your expectations, report it within 24 hours and we will either schedule a replacement session for free or issue a full refund for that session. Student satisfaction is our top priority.' },
  { q: 'Do you offer group classes to reduce cost?', a: 'Yes. For popular subjects like Mathematics, English, and JEE/NEET prep, we offer small group classes of 3–6 students at significantly reduced rates. Group sessions are scheduled at fixed weekly times and are great for students who benefit from peer learning and group discussion.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ot-faq-item${open ? ' ot-faq-item--open' : ''}`}>
      <button className="ot-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="ot-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="ot-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Onlinetutor = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', child: '', grade: '', subject: '', goal: '' })
  const [sent, setSent] = useState(false)
  const [subjectFilter, setSubjectFilter] = useState('All')

  const filters = ['All', 'Popular', 'Arts & Culture']
  const filteredSubjects =
    subjectFilter === 'Popular' ? SUBJECTS.filter(s => s.popular) :
    subjectFilter === 'Arts & Culture' ? SUBJECTS.filter(s => ['Indian Classical Music', 'Indian Dance (Bharatnatyam / Kathak)', 'Art & Drawing', 'Yoga & Vedic Studies'].includes(s.name)) :
    SUBJECTS

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="ot-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="ot-hero">
        <div className="ot-hero__overlay" />
        <div className="container-custom ot-hero__inner">
          <div className="ot-hero__content">
            <span className="ot-hero__eyebrow">🎓 Online Tutoring</span>
            <h1 className="ot-hero__title">
              Expert Indian Tutors,<br className="ot-hero__br" /> Wherever You Are
            </h1>
            <p className="ot-hero__sub">
              Connect your children with verified Indian tutors for academics,
              Indian languages, classical music, dance, and entrance exam prep —
              live, one-on-one, from the comfort of home.
            </p>
            <div className="ot-hero__actions">
              <a href="#trial" className="ot-hero__btn ot-hero__btn--primary">Book a Free Trial</a>
              <a href="#subjects" className="ot-hero__btn ot-hero__btn--outline">Browse Subjects</a>
            </div>
            <div className="ot-hero__pills">
              <span>✅ Verified & Vetted Tutors</span>
              <span>🆓 Free Trial Session</span>
              <span>🕐 Flexible Timings</span>
              <span>🌐 NRI-Friendly</span>
            </div>
          </div>
          <div className="ot-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="ot-hero__stat">
                <span className="ot-hero__stat-num">{s.number}</span>
                <span className="ot-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom ot-content">

        {/* ── Subjects ─────────────────────────────────────────────────── */}
        <section className="ot-section" id="subjects">
          <p className="ot-section__eyebrow">What We Teach</p>
          <h2 className="ot-section__title">30+ Subjects — Academics, Arts & Culture</h2>
          <div className="ot-filter-row">
            {filters.map(f => (
              <button
                key={f}
                className={`ot-filter-btn${subjectFilter === f ? ' ot-filter-btn--active' : ''}`}
                onClick={() => setSubjectFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="ot-subjects-grid">
            {filteredSubjects.map(s => (
              <div key={s.name} className={`ot-subject-card${s.popular ? ' ot-subject-card--popular' : ''}`}>
                {s.popular && <span className="ot-subject-card__badge">Popular</span>}
                <span className="ot-subject-card__icon">{s.icon}</span>
                <h3 className="ot-subject-card__name">{s.name}</h3>
                <p className="ot-subject-card__levels">{s.levels}</p>
                <p className="ot-subject-card__tutors">{s.tutors} tutors available</p>
                <a href="#trial" className="ot-subject-card__link">Find a Tutor →</a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Featured Tutors ───────────────────────────────────────────── */}
        <section className="ot-section">
          <p className="ot-section__eyebrow">Meet Our Tutors</p>
          <h2 className="ot-section__title">Highly Rated Tutors from the Community</h2>
          <div className="ot-tutors-grid">
            {TUTORS.map(t => (
              <div key={t.name} className="ot-tutor-card">
                <div className="ot-tutor-card__head">
                  <span className="ot-tutor-card__avatar">{t.avatar}</span>
                  <span className={`ot-tutor-card__badge ot-tutor-card__badge--${t.badge.toLowerCase().replace(' ', '-')}`}>{t.badge}</span>
                </div>
                <h3 className="ot-tutor-card__name">{t.name}</h3>
                <p className="ot-tutor-card__subject">{t.subject}</p>
                <p className="ot-tutor-card__quals">{t.quals}</p>
                <div className="ot-tutor-card__meta">
                  <span>⭐ {t.rating} ({t.reviews} reviews)</span>
                  <span>{t.country}</span>
                </div>
                <p className="ot-tutor-card__exp">{t.exp} teaching experience</p>
                <a href="#trial" className="ot-tutor-card__btn">Book Trial</a>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="ot-section">
          <p className="ot-section__eyebrow">Step by Step</p>
          <h2 className="ot-section__title">How It Works</h2>
          <div className="ot-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="ot-step">
                <div className="ot-step__left">
                  <div className="ot-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="ot-step__line" />}
                </div>
                <div className="ot-step__body">
                  <span className="ot-step__icon">{step.icon}</span>
                  <h3 className="ot-step__title">{step.title}</h3>
                  <p className="ot-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="ot-section">
          <p className="ot-section__eyebrow">Why VDesiConnect Tutoring</p>
          <h2 className="ot-section__title">Built for the Indian Diaspora</h2>
          <div className="ot-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="ot-why-card">
                <span className="ot-why-card__icon">{w.icon}</span>
                <h3 className="ot-why-card__title">{w.title}</h3>
                <p className="ot-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────────────── */}
        <section className="ot-section">
          <p className="ot-section__eyebrow">Pricing</p>
          <h2 className="ot-section__title">Simple, Transparent Pricing</h2>
          <div className="ot-pricing-grid">
            {PRICING.map(p => (
              <div key={p.plan} className={`ot-price-card${p.highlight ? ' ot-price-card--highlight' : ''}`}>
                {p.highlight && <div className="ot-price-card__ribbon">Most Popular</div>}
                <h3 className="ot-price-card__plan">{p.plan}</h3>
                <div className="ot-price-card__price">
                  <span className="ot-price-card__amount">{p.price}</span>
                  <span className="ot-price-card__unit">{p.unit}</span>
                </div>
                <ul className="ot-price-card__features">
                  {p.features.map(f => <li key={f}><span>✓</span>{f}</li>)}
                </ul>
                <a href="#trial" className={`ot-price-card__btn${p.highlight ? ' ot-price-card__btn--primary' : ''}`}>Get Started</a>
              </div>
            ))}
          </div>
          <p className="ot-pricing-note">💡 All prices are indicative. Final rates depend on subject, tutor experience, and session length. The free trial is always 100% free.</p>
        </section>

        {/* ── Booking form ─────────────────────────────────────────────── */}
        <section className="ot-section" id="trial">
          <p className="ot-section__eyebrow">Book Now</p>
          <h2 className="ot-section__title">Book Your Free Trial Session</h2>
          <div className="ot-book-wrap">

            <div className="ot-book-info">
              <h3>What to Expect</h3>
              <p>Your <strong>free 30-minute trial</strong> is a casual, no-pressure introduction. The tutor will understand your child's level, learning style, and goals — then suggest a plan.</p>
              <ul className="ot-book-info__list">
                <li><span>⏱</span> 30 minutes, completely free</li>
                <li><span>📷</span> Live video — browser-based, no downloads</li>
                <li><span>📋</span> Personalised learning plan shared after</li>
                <li><span>🔄</span> Switch tutors anytime, no penalty</li>
                <li><span>👨‍👩‍👧</span> Parents welcome to sit in</li>
              </ul>
              <div className="ot-book-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:tutors@vdesiconnect.com">📧 tutors@vdesiconnect.com</a>
              </div>
            </div>

            <div className="ot-form-wrap">
              {sent ? (
                <div className="ot-form__success">
                  <span>🎉</span>
                  <h3>Trial Booked!</h3>
                  <p>Great, <strong>{form.name}</strong>! A tutor will contact you at <strong>{form.email}</strong> within 12 hours to confirm your free trial slot.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', child: '', grade: '', subject: '', goal: '' }) }}>
                    Book Another
                  </button>
                </div>
              ) : (
                <form className="ot-form" onSubmit={handleSubmit}>
                  <div className="ot-form__row">
                    <div className="ot-form__field">
                      <label>Parent / Guardian Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Rahul Mehta" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="ot-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="rahul@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="ot-form__row">
                    <div className="ot-form__field">
                      <label>WhatsApp / Phone</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="ot-form__field">
                      <label>Student's Name</label>
                      <input type="text" name="child" placeholder="Ananya" value={form.child} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="ot-form__row">
                    <div className="ot-form__field">
                      <label>Grade / Level</label>
                      <select name="grade" value={form.grade} onChange={handleChange}>
                        <option value="">Select grade…</option>
                        <option>Grade 1 – 3</option>
                        <option>Grade 4 – 6</option>
                        <option>Grade 7 – 8</option>
                        <option>Grade 9 – 10</option>
                        <option>Grade 11 – 12</option>
                        <option>Undergraduate</option>
                        <option>Adult Learner</option>
                      </select>
                    </div>
                    <div className="ot-form__field">
                      <label>Subject / Area</label>
                      <select name="subject" value={form.subject} onChange={handleChange}>
                        <option value="">Select subject…</option>
                        {SUBJECTS.map(s => <option key={s.name}>{s.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="ot-form__field">
                    <label>Learning Goal</label>
                    <textarea name="goal" rows={3} placeholder="e.g. My daughter needs help with Grade 8 Maths — especially algebra and geometry. She follows the CBSE curriculum." value={form.goal} onChange={handleChange} />
                  </div>
                  <button type="submit" className="ot-form__submit">Book Free Trial →</button>
                  <p className="ot-form__note">🔒 Your details are never shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="ot-section">
          <p className="ot-section__eyebrow">FAQs</p>
          <h2 className="ot-section__title">Frequently Asked Questions</h2>
          <div className="ot-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="ot-cta">
        <div className="container-custom ot-cta__inner">
          <span className="ot-cta__emoji">🎓</span>
          <h2 className="ot-cta__title">Give Your Child the Desi Advantage</h2>
          <p className="ot-cta__sub">
            500+ verified tutors. 30+ subjects. Free first session. Help your
            child excel at academics while staying connected to their Indian roots.
          </p>
          <a href="#trial" className="ot-cta__btn">Book a Free Trial Now</a>
          <p className="ot-cta__note">
            📞 <strong>+91 800 123 4567</strong>&nbsp;·&nbsp;
            📧 <strong>tutors@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Onlinetutor
