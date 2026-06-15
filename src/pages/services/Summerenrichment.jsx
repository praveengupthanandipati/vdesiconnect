import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const PROGRAMS = [
  { icon: '🔬', name: 'STEM Explorers', ages: 'Ages 8 – 14', sessions: '20 sessions', popular: true, desc: 'Hands-on experiments in science, robotics, and engineering design. Kids build rockets, bridges, and circuits while developing a problem-solving mindset.' },
  { icon: '💻', name: 'Coding Bootcamp', ages: 'Ages 10 – 16', sessions: '15 sessions', popular: true, desc: 'Learn Python, Scratch, and web basics through fun game-building projects. Suitable for beginners and intermediate coders alike.' },
  { icon: '🎨', name: 'Indian Arts & Crafts', ages: 'Ages 6 – 14', sessions: '12 sessions', popular: false, desc: 'Madhubani painting, rangoli, clay pottery, and fabric art rooted in Indian traditions. A creative exploration of desi heritage.' },
  { icon: '💃', name: 'Dance & Movement', ages: 'Ages 5 – 15', sessions: '16 sessions', popular: true, desc: 'Classical Indian dance forms — Bharatnatyam and Kathak — alongside Bollywood and folk styles. Culminates in a virtual recital.' },
  { icon: '🎵', name: 'Music & Rhythm', ages: 'Ages 6 – 14', sessions: '14 sessions', popular: false, desc: 'Vocal training, tabla, harmonium, and flute for beginners. Kids learn Indian classical and folk music in a fun, non-competitive setting.' },
  { icon: '🏏', name: 'Sports & Fitness', ages: 'Ages 7 – 15', sessions: '18 sessions', popular: false, desc: 'Virtual yoga, kabaddi strategy sessions, and fitness challenges. Encourages teamwork, discipline, and healthy habits over the break.' },
  { icon: '📖', name: 'Creative Writing & Storytelling', ages: 'Ages 8 – 15', sessions: '10 sessions', popular: false, desc: 'Write short stories, poems, and plays inspired by Indian mythology and modern themes. Builds English and Hindi writing skills simultaneously.' },
  { icon: '🌿', name: 'Hindi & Indian Languages', ages: 'Ages 5 – 14', sessions: '16 sessions', popular: true, desc: 'Conversational Hindi, Tamil, Telugu, or Kannada through songs, stories, and games — taught by native-speaking educators.' },
  { icon: '🧘', name: 'Mindfulness & Yoga', ages: 'Ages 6 – 16', sessions: '12 sessions', popular: false, desc: 'Child-friendly pranayama, yoga asanas, and mindfulness practices rooted in Indian tradition to reduce screen fatigue and build focus.' },
  { icon: '🍳', name: 'Junior Chef — Indian Cuisine', ages: 'Ages 9 – 15', sessions: '10 sessions', popular: false, desc: 'Cook simple Indian recipes with family supervision. From dosas to khichdi — kids learn cooking skills and connect with food culture.' },
  { icon: '🎭', name: 'Drama & Theatre', ages: 'Ages 8 – 16', sessions: '14 sessions', popular: false, desc: 'Improvisation, script reading, and a virtual play performance. Builds confidence, public speaking, and emotional intelligence.' },
  { icon: '🚀', name: 'Leadership & Life Skills', ages: 'Ages 12 – 17', sessions: '12 sessions', popular: true, desc: 'Goal setting, communication, decision-making, and teamwork — taught through interactive workshops and real-world challenges.' },
]

const AGE_GROUPS = [
  { icon: '🌱', group: 'Little Explorers', ages: 'Ages 5 – 7', desc: 'Gentle, play-based learning through songs, stories, art, and movement. Short 30-minute sessions to match young attention spans.' },
  { icon: '⭐', group: 'Junior Achievers', ages: 'Ages 8 – 11', desc: 'Structured programs blending academics and creativity. 45-minute live sessions with interactive activities and weekly take-home projects.' },
  { icon: '🔥', group: 'Teen Innovators', ages: 'Ages 12 – 17', desc: 'Deep-dive programs in coding, leadership, creative writing, and cultural arts. 60-minute sessions with peer collaboration and presentations.' },
]

const STATS = [
  { number: '5,000+', label: 'Students Enrolled' },
  { number: '40+',    label: 'Programs Offered' },
  { number: '200+',   label: 'Expert Instructors' },
  { number: '4.9★',  label: 'Average Rating' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '🔍', title: 'Browse Programs', desc: 'Explore all summer programs filtered by age, interest, or duration. Each program page includes a detailed syllabus, instructor profile, and sample session video.' },
  { step: '02', icon: '📋', title: 'Enrol Your Child', desc: 'Complete a short enrolment form and select your preferred batch. Batches are small (max 12 students) to ensure personal attention for every child.' },
  { step: '03', icon: '🗓️', title: 'Get Your Schedule', desc: 'Receive a full session calendar with Zoom links or classroom access. All timings are displayed in your local timezone. Reschedule up to 24 hours in advance.' },
  { step: '04', icon: '🎓', title: 'Learn & Create', desc: 'Attend live sessions with expert instructors. Kids complete projects, participate in group activities, and receive weekly feedback shared with parents.' },
  { step: '05', icon: '🏆', title: 'Celebrate & Certify', desc: 'End-of-program showcase, digital certificates, and performance reports sent to parents. Many programs include a virtual graduation or recital.' },
]

const INSTRUCTORS = [
  { name: 'Kavitha Sundaram', program: 'Bharatnatyam & Indian Dance', exp: '18 years', rating: 5.0, reviews: 142, country: '🇺🇸 USA', badge: 'Top Rated', avatar: '💃', quals: 'Kalakshetra Graduate, Chennai' },
  { name: 'Arjun Sharma', program: 'Coding & Robotics', exp: '9 years', rating: 4.9, reviews: 218, country: '🇨🇦 Canada', badge: 'Expert', avatar: '👨‍💻', quals: 'B.Tech CS, IIT Delhi' },
  { name: 'Deepa Iyer', program: 'Hindi & Creative Writing', exp: '12 years', rating: 4.9, reviews: 175, country: '🇬🇧 UK', badge: 'Top Rated', avatar: '📖', quals: 'MA Hindi Literature, BHU' },
  { name: 'Suresh Nambiar', program: 'Tabla & Indian Music', exp: '20 years', rating: 5.0, reviews: 96, country: '🇦🇪 UAE', badge: 'Expert', avatar: '🥁', quals: 'Sangeet Prabhakar, Gandharva Mahavidyalaya' },
  { name: 'Prerna Kapoor', program: 'STEM & Science Experiments', exp: '10 years', rating: 4.8, reviews: 203, country: '🇦🇺 Australia', badge: 'Top Rated', avatar: '🔬', quals: 'MSc Physics, Delhi University' },
  { name: 'Rohan Menon', program: 'Leadership & Life Skills', exp: '8 years', rating: 4.8, reviews: 134, country: '🇸🇬 Singapore', badge: 'Expert', avatar: '🚀', quals: 'MBA, IIM Ahmedabad' },
]

const WHY_US = [
  { icon: '🌐', title: 'Built for NRI Families', desc: 'All programs run across multiple time zones — US, UK, UAE, Canada, and Australia. Schedule compatibility is guaranteed before enrolment.' },
  { icon: '✅', title: 'Vetted Expert Instructors', desc: 'Every instructor undergoes background verification, credential checks, and a demo session. Only the top 15% of applicants are selected to teach.' },
  { icon: '👨‍👩‍👧', title: 'Small Batch Sizes', desc: 'Maximum 12 students per batch ensures every child receives personal attention, gets to ask questions, and participates actively in every session.' },
  { icon: '🎯', title: 'India-Connected Curriculum', desc: 'Programs are designed to strengthen children\'s connection to Indian culture, language, and heritage while building 21st-century skills.' },
  { icon: '📱', title: 'Parent Dashboard & Reports', desc: 'Track your child\'s attendance, project submissions, instructor feedback, and milestones in real time. Weekly progress emails included.' },
  { icon: '💰', title: 'Affordable Summer Plans', desc: 'Individual programs start from ₹1,999. Multi-program bundles offer up to 30% savings. Sibling discounts available on request.' },
]

const PLANS = [
  {
    name: 'Single Program',
    price: '₹1,999',
    unit: 'per program',
    desc: 'Perfect for trying one focused area of interest.',
    features: [
      'One full program (10–20 sessions)',
      'Live sessions with expert instructor',
      'Batch size max 12 students',
      'Session recordings for 30 days',
      'Digital certificate on completion',
    ],
    highlight: false,
    cta: 'Enrol Now',
  },
  {
    name: 'Summer Bundle',
    price: '₹4,999',
    unit: '3 programs',
    desc: 'Our most popular choice — maximum variety, best value.',
    features: [
      'Any 3 programs of your choice',
      'Save up to 30% vs single enrolment',
      'Priority scheduling & batch selection',
      'Weekly parent progress report',
      'End-of-summer showcase invite',
      'Digital certificate for each program',
    ],
    highlight: true,
    cta: 'Best Value',
  },
  {
    name: 'Full Summer Pass',
    price: '₹8,999',
    unit: 'unlimited programs',
    desc: 'All programs, all summer — the complete enrichment experience.',
    features: [
      'Unlimited program access all summer',
      'Drop in to any live session anytime',
      'Dedicated program coordinator',
      'One-on-one parent review call',
      'Priority support via WhatsApp',
      'Printed certificate & merit card',
    ],
    highlight: false,
    cta: 'Get Full Pass',
  },
]

const FAQS = [
  { q: 'What age groups are the summer programs suitable for?', a: 'Our programs cater to children aged 5 through 17. Each program page clearly lists the recommended age range. We group children in similar age cohorts to ensure peer-appropriate learning. Programs for ages 5–7 are shorter (30 min) and play-based, while programs for teens (12–17) are more structured and project-oriented.' },
  { q: 'Are sessions live or pre-recorded?', a: 'All our summer enrichment programs are live, interactive sessions conducted via Zoom or our built-in video classroom. This ensures children stay engaged, can interact with instructors and peers, and get real-time feedback. Session recordings are available for 30 days in case a child misses a class, but live attendance is encouraged for the full experience.' },
  { q: 'How many children are in each batch?', a: 'We keep batch sizes to a maximum of 12 students. This is intentional — small groups ensure every child gets personal attention, feels comfortable participating, and is not lost in a crowd. For one-on-one sessions (available in some programs), please contact us directly.' },
  { q: 'What time zones are the programs available in?', a: 'We run multiple batches of each program at different times to cover the US (EST/PST), UK (BST), UAE (GST), Canada, Australia, and Singapore time zones. When you enrol, you select your preferred batch time. All times are shown in your local timezone during enrolment.' },
  { q: 'Can siblings enrol together and get a discount?', a: 'Yes! Siblings enrolled in the same or different programs receive a 15% discount on each enrolment from the second child onwards. Please reach out to our team after completing the first enrolment and we will apply the sibling discount manually. Family bundles for 3 or more children are also available.' },
  { q: 'What if my child misses a session?', a: 'Session recordings are available for all programs for 30 days, so missed classes can be caught up. For programs where peer interaction is key (drama, leadership), we recommend attending live wherever possible. If a child misses more than 3 sessions, we offer a complimentary make-up session with the instructor to ensure they don\'t fall behind.' },
]

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`se-faq-item${open ? ' se-faq-item--open' : ''}`}>
      <button className="se-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="se-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="se-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Summerenrichment = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', child: '', age: '', program: '', timezone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [filter, setFilter] = useState('All')

  const filters = ['All', 'Popular', 'Arts & Culture', 'STEM & Tech', 'Languages']
  const filteredPrograms =
    filter === 'Popular'       ? PROGRAMS.filter(p => p.popular) :
    filter === 'Arts & Culture' ? PROGRAMS.filter(p => ['Indian Arts & Crafts', 'Dance & Movement', 'Music & Rhythm', 'Drama & Theatre'].includes(p.name)) :
    filter === 'STEM & Tech'   ? PROGRAMS.filter(p => ['STEM Explorers', 'Coding Bootcamp', 'Sports & Fitness'].includes(p.name)) :
    filter === 'Languages'     ? PROGRAMS.filter(p => ['Hindi & Indian Languages', 'Creative Writing & Storytelling'].includes(p.name)) :
    PROGRAMS

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="se-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="se-hero">
        <div className="se-hero__overlay" />
        <div className="container-custom se-hero__inner">
          <div className="se-hero__content">
            <span className="se-hero__eyebrow">☀️ Summer Enrichment</span>
            <h1 className="se-hero__title">
              A Meaningful Summer for<br className="se-hero__br" /> Your NRI Child
            </h1>
            <p className="se-hero__sub">
              Live online programs in STEM, coding, Indian arts, dance, music,
              languages, and leadership — designed for children of the Indian
              diaspora aged 5 to 17. Fun, structured, and deeply rooted in desi culture.
            </p>
            <div className="se-hero__actions">
              <a href="#enrol" className="se-hero__btn se-hero__btn--primary">Enrol for Summer</a>
              <a href="#programs" className="se-hero__btn se-hero__btn--outline">Explore Programs</a>
            </div>
            <div className="se-hero__pills">
              <span>🌐 Multiple Time Zones</span>
              <span>👨‍👩‍👧 Max 12 Kids Per Batch</span>
              <span>✅ Verified Instructors</span>
              <span>🏆 Completion Certificates</span>
            </div>
          </div>
          <div className="se-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="se-hero__stat">
                <span className="se-hero__stat-num">{s.number}</span>
                <span className="se-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom se-content">

        {/* ── Age Groups ───────────────────────────────────────────────────── */}
        <section className="se-section">
          <p className="se-section__eyebrow">Who It's For</p>
          <h2 className="se-section__title">Programs for Every Age Group</h2>
          <div className="se-age-grid">
            {AGE_GROUPS.map(a => (
              <div key={a.group} className="se-age-card">
                <span className="se-age-card__icon">{a.icon}</span>
                <h3 className="se-age-card__group">{a.group}</h3>
                <span className="se-age-card__ages">{a.ages}</span>
                <p className="se-age-card__desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Programs ─────────────────────────────────────────────────────── */}
        <section className="se-section" id="programs">
          <p className="se-section__eyebrow">What We Offer</p>
          <h2 className="se-section__title">40+ Summer Programs to Choose From</h2>
          <div className="se-filter-row">
            {filters.map(f => (
              <button
                key={f}
                className={`se-filter-btn${filter === f ? ' se-filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="se-programs-grid">
            {filteredPrograms.map(p => (
              <div key={p.name} className={`se-program-card${p.popular ? ' se-program-card--popular' : ''}`}>
                {p.popular && <span className="se-program-card__badge">Popular</span>}
                <span className="se-program-card__icon">{p.icon}</span>
                <h3 className="se-program-card__name">{p.name}</h3>
                <p className="se-program-card__desc">{p.desc}</p>
                <div className="se-program-card__meta">
                  <span>👤 {p.ages}</span>
                  <span>📅 {p.sessions}</span>
                </div>
                <a href="#enrol" className="se-program-card__link">Enrol Now →</a>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────────── */}
        <section className="se-section">
          <p className="se-section__eyebrow">Step by Step</p>
          <h2 className="se-section__title">How It Works</h2>
          <div className="se-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="se-step">
                <div className="se-step__left">
                  <div className="se-step__num">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="se-step__line" />}
                </div>
                <div className="se-step__body">
                  <span className="se-step__icon">{step.icon}</span>
                  <h3 className="se-step__title">{step.title}</h3>
                  <p className="se-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Instructors ──────────────────────────────────────────────────── */}
        <section className="se-section">
          <p className="se-section__eyebrow">Meet the Instructors</p>
          <h2 className="se-section__title">Expert Educators Who Inspire</h2>
          <div className="se-instructors-grid">
            {INSTRUCTORS.map(t => (
              <div key={t.name} className="se-instructor-card">
                <div className="se-instructor-card__head">
                  <span className="se-instructor-card__avatar">{t.avatar}</span>
                  <span className={`se-instructor-card__badge se-instructor-card__badge--${t.badge.toLowerCase().replace(' ', '-')}`}>{t.badge}</span>
                </div>
                <h3 className="se-instructor-card__name">{t.name}</h3>
                <p className="se-instructor-card__program">{t.program}</p>
                <p className="se-instructor-card__quals">{t.quals}</p>
                <div className="se-instructor-card__meta">
                  <span>⭐ {t.rating} ({t.reviews} reviews)</span>
                  <span>{t.country}</span>
                </div>
                <p className="se-instructor-card__exp">{t.exp} experience</p>
                <a href="#enrol" className="se-instructor-card__btn">Enrol in Program</a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────────── */}
        <section className="se-section">
          <p className="se-section__eyebrow">Why VDesiConnect</p>
          <h2 className="se-section__title">A Summer Program Built for the Diaspora</h2>
          <div className="se-why-grid">
            {WHY_US.map(w => (
              <div key={w.title} className="se-why-card">
                <span className="se-why-card__icon">{w.icon}</span>
                <h3 className="se-why-card__title">{w.title}</h3>
                <p className="se-why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Plans ────────────────────────────────────────────────────────── */}
        <section className="se-section">
          <p className="se-section__eyebrow">Pricing</p>
          <h2 className="se-section__title">Simple, Transparent Plans</h2>
          <div className="se-plans-grid">
            {PLANS.map(p => (
              <div key={p.name} className={`se-plan-card${p.highlight ? ' se-plan-card--highlight' : ''}`}>
                {p.highlight && <div className="se-plan-card__ribbon">Best Value</div>}
                <h3 className="se-plan-card__name">{p.name}</h3>
                <p className="se-plan-card__desc">{p.desc}</p>
                <div className="se-plan-card__price">
                  <span className="se-plan-card__amount">{p.price}</span>
                  <span className="se-plan-card__unit">{p.unit}</span>
                </div>
                <ul className="se-plan-card__features">
                  {p.features.map(f => <li key={f}><span>✓</span>{f}</li>)}
                </ul>
                <a href="#enrol" className={`se-plan-card__btn${p.highlight ? ' se-plan-card__btn--primary' : ''}`}>{p.cta} →</a>
              </div>
            ))}
          </div>
          <p className="se-plans-note">📌 Sibling discount of 15% applies from the second child onwards. Contact us after enrolment for family bundles.</p>
        </section>

        {/* ── Enrolment form ───────────────────────────────────────────────── */}
        <section className="se-section" id="enrol">
          <p className="se-section__eyebrow">Get Started</p>
          <h2 className="se-section__title">Enrol Your Child Today</h2>
          <div className="se-enrol-wrap">

            <div className="se-enrol-info">
              <h3>Spots Fill Up Fast</h3>
              <p>Batches are capped at <strong>12 students</strong> to ensure quality. Submit your enrolment request and we'll confirm your preferred program and batch within <strong>24 hours</strong>.</p>
              <ul className="se-enrol-info__list">
                <li><span>🌐</span> Sessions in your timezone</li>
                <li><span>📹</span> Live Zoom classes — no downloads</li>
                <li><span>🔄</span> Missed class recordings for 30 days</li>
                <li><span>🏆</span> Digital certificates on completion</li>
                <li><span>👨‍👩‍👧</span> Weekly parent progress reports</li>
              </ul>
              <div className="se-enrol-info__contact">
                <a href="tel:+918001234567">📞 +91 800 123 4567</a>
                <a href="mailto:summer@vdesiconnect.com">📧 summer@vdesiconnect.com</a>
              </div>
            </div>

            <div className="se-form-wrap">
              {sent ? (
                <div className="se-form__success">
                  <span>🎉</span>
                  <h3>Enrolment Submitted!</h3>
                  <p>Thank you, <strong>{form.name}</strong>! Our team will contact you at <strong>{form.email}</strong> within 24 hours to confirm your child's batch and share payment details.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', child: '', age: '', program: '', timezone: '', message: '' }) }}>
                    Enrol Another Child
                  </button>
                </div>
              ) : (
                <form className="se-form" onSubmit={handleSubmit}>
                  <div className="se-form__row">
                    <div className="se-form__field">
                      <label>Parent / Guardian Name <span>*</span></label>
                      <input type="text" name="name" placeholder="Priya Sharma" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="se-form__field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" name="email" placeholder="priya@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="se-form__row">
                    <div className="se-form__field">
                      <label>WhatsApp / Phone</label>
                      <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="se-form__field">
                      <label>Child's Name</label>
                      <input type="text" name="child" placeholder="Aarav" value={form.child} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="se-form__row">
                    <div className="se-form__field">
                      <label>Child's Age</label>
                      <select name="age" value={form.age} onChange={handleChange}>
                        <option value="">Select age…</option>
                        <option>5 – 7 years (Little Explorers)</option>
                        <option>8 – 11 years (Junior Achievers)</option>
                        <option>12 – 17 years (Teen Innovators)</option>
                      </select>
                    </div>
                    <div className="se-form__field">
                      <label>Program of Interest</label>
                      <select name="program" value={form.program} onChange={handleChange}>
                        <option value="">Select program…</option>
                        {PROGRAMS.map(p => <option key={p.name}>{p.name}</option>)}
                        <option>Summer Bundle (3 programs)</option>
                        <option>Full Summer Pass (unlimited)</option>
                      </select>
                    </div>
                  </div>
                  <div className="se-form__field">
                    <label>Your Time Zone</label>
                    <select name="timezone" value={form.timezone} onChange={handleChange}>
                      <option value="">Select timezone…</option>
                      <option>US — Eastern (EST/EDT)</option>
                      <option>US — Central (CST/CDT)</option>
                      <option>US — Pacific (PST/PDT)</option>
                      <option>Canada — Eastern / Pacific</option>
                      <option>UK — BST / GMT</option>
                      <option>UAE — GST (GMT+4)</option>
                      <option>Australia — AEST / AEDT</option>
                      <option>Singapore — SGT (GMT+8)</option>
                      <option>India — IST</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="se-form__field">
                    <label>Tell Us About Your Child</label>
                    <textarea name="message" rows={3} placeholder="e.g. My 10-year-old loves art and has basic coding knowledge. Looking for a program that blends creativity with tech. We are in the US (EST)." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="se-form__submit">Submit Enrolment →</button>
                  <p className="se-form__note">🔒 Your details are kept strictly confidential and never shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────────── */}
        <section className="se-section">
          <p className="se-section__eyebrow">FAQs</p>
          <h2 className="se-section__title">Frequently Asked Questions</h2>
          <div className="se-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="se-cta">
        <div className="container-custom se-cta__inner">
          <span className="se-cta__emoji">☀️</span>
          <h2 className="se-cta__title">Make This the Best Summer Yet</h2>
          <p className="se-cta__sub">
            Give your child a summer filled with learning, creativity, and cultural
            pride. Spots are limited — secure your child's place today.
          </p>
          <a href="#enrol" className="se-cta__btn">Enrol for Summer</a>
          <p className="se-cta__note">
            📞 <strong>+91 800 123 4567</strong>&nbsp;·&nbsp;
            📧 <strong>summer@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Summerenrichment
