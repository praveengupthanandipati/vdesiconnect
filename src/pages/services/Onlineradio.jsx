import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const STATIONS = [
  { id: 1, icon: '🎵', name: 'VDesi Hits', genre: 'Bollywood Hits', lang: 'Hindi', listeners: '12.4K', status: 'live', desc: 'Non-stop Bollywood chartbusters from 2000s to today. Perfect for your daily commute.' },
  { id: 2, icon: '🎶', name: 'Filmi Classics', genre: 'Old Bollywood', lang: 'Hindi', listeners: '8.1K', status: 'live', desc: 'Golden era classics from Rafi, Kishore, Lata, and Asha — timeless melodies.' },
  { id: 3, icon: '🥁', name: 'Desi Beats', genre: 'Bhangra & Punjabi', lang: 'Punjabi', listeners: '9.7K', status: 'live', desc: 'High-energy Bhangra, Punjabi pop, and dhol beats to keep you moving.' },
  { id: 4, icon: '🎸', name: 'Tollywood FM', genre: 'Telugu & Tamil', lang: 'Telugu / Tamil', listeners: '6.3K', status: 'live', desc: 'The best of South Indian cinema — Tollywood and Kollywood hits round the clock.' },
  { id: 5, icon: '🙏', name: 'Bhakti Vaani', genre: 'Devotional', lang: 'Multi-lang', listeners: '5.8K', status: 'live', desc: 'Bhajans, mantras, aartis, and devotional music for peace and spiritual uplift.' },
  { id: 6, icon: '🎻', name: 'Raaga Lounge', genre: 'Classical & Fusion', lang: 'Instrumental', listeners: '3.2K', status: 'live', desc: 'Indian classical ragas, semi-classical, and fusion compositions for focused listening.' },
  { id: 7, icon: '💃', name: 'Retro Rewind', genre: '70s & 80s Retro', lang: 'Hindi', listeners: '7.5K', status: 'live', desc: 'Your favourite retro Hindi tracks — Shammi Kapoor, Helen, and Disco era anthems.' },
  { id: 8, icon: '🌙', name: 'Chill Desi', genre: 'Lo-fi & Indie', lang: 'Multi-lang', listeners: '4.6K', status: 'live', desc: 'Lo-fi Bollywood remixes, indie Hindi tracks, and chill Desi beats for late nights.' },
]

const SHOWS = [
  { time: '06:00', name: 'Subah Ka Tarana', host: 'Riya Sharma', desc: 'Morning devotional & light music to start your day right.', days: 'Mon – Fri' },
  { time: '09:00', name: 'Filmi Charcha', host: 'Vikram Nair', desc: 'Bollywood news, film reviews, and chart countdown.', days: 'Daily' },
  { time: '12:00', name: 'Lunch Beats', host: 'Priya Menon', desc: 'Upbeat mix to power through the midday — all genres welcome.', days: 'Mon – Sat' },
  { time: '18:00', name: 'Drive Home Desi', host: 'Arun Kapoor', desc: 'Your evening drive companion — hits from 90s to today.', days: 'Mon – Fri' },
  { time: '20:00', name: 'Desi Spotlight', host: 'Community Artists', desc: 'Live sessions and interviews with emerging Desi artists worldwide.', days: 'Wed & Fri' },
  { time: '22:00', name: 'Midnight Raaga', host: 'Dr. Seema Joshi', desc: 'Classical raga recitals and Hindustani & Carnatic performances.', days: 'Sat & Sun' },
]

const STATS = [
  { number: '8+',    label: 'Live Radio Stations' },
  { number: '55K+',  label: 'Daily Listeners' },
  { number: '40+',   label: 'Countries Tuning In' },
  { number: '24/7',  label: 'Non-Stop Streaming' },
]

const LANGUAGES = ['Hindi', 'Punjabi', 'Telugu', 'Tamil', 'Malayalam', 'Kannada', 'Gujarati', 'Marathi', 'Bengali', 'Odia', 'Urdu', 'Bhojpuri']

const FEATURES = [
  { icon: '📱', title: 'Listen Anywhere', desc: 'Stream on your phone, tablet, desktop, or smart TV. Works on any browser — no app download required.' },
  { icon: '📻', title: 'Multiple Stations', desc: 'Choose from 8+ curated stations covering every genre — Bollywood, classical, devotional, Bhangra, and indie.' },
  { icon: '🎙️', title: 'Live Shows & RJs', desc: 'Tune into hosted shows with professional RJs. Listener dedications, contests, and live artist interviews every week.' },
  { icon: '🔔', title: 'Show Reminders', desc: 'Set reminders for your favourite shows and never miss a live broadcast. Email and WhatsApp alerts available.' },
  { icon: '🌐', title: 'Global Community', desc: '55,000+ Desi listeners from 40 countries listening together. Chat live in the listener room during shows.' },
  { icon: '📂', title: 'On-Demand Replays', desc: 'Missed a show? All hosted programmes are archived for 7 days so you can catch up on your schedule.' },
]

const FAQS = [
  { q: 'Is VDesiConnect Online Radio free to listen?', a: 'Yes, all our radio stations are completely free to stream. Just visit the page, select your station, and hit play. No account needed for casual listening. Creating a free account unlocks show reminders, listener chat, and the on-demand replay archive.' },
  { q: 'What devices and browsers are supported?', a: 'Our radio player works on all modern browsers — Chrome, Firefox, Safari, Edge — on Windows, macOS, Android, and iOS. No Flash or special plugins required. For the best experience on mobile, we recommend Chrome or Safari.' },
  { q: 'Can I request a song or send a dedication?', a: 'Yes! During live hosted shows (Filmi Charcha, Drive Home Desi, Desi Spotlight), you can send song requests and dedications via WhatsApp to our RJ line or through the live chat in the listener room. Requests are fulfilled at the host\'s discretion.' },
  { q: 'Do you have shows in regional Indian languages?', a: 'Absolutely. While our flagship stations primarily broadcast in Hindi and Punjabi, we regularly feature Telugu, Tamil, Malayalam, Kannada, Gujarati, Marathi, and Bengali programming in special slots and weekend shows. We are expanding regional content continuously.' },
  { q: 'Can I advertise on VDesiConnect Radio?', a: 'Yes, we offer advertising packages for businesses wanting to reach the Indian diaspora audience. Spots are available on specific stations and show time-slots. Contact us at radio@vdesiconnect.com for our media kit and pricing.' },
  { q: 'How can an artist perform or be featured on Desi Spotlight?', a: 'We love showcasing emerging Desi talent. Send your music sample, artist profile, and a brief bio to talent@vdesiconnect.com. Our programming team reviews submissions every month and reaches out for scheduling.' },
]

// ── Mini player with play/pause simulation ────────────────────────────────────
const StationCard = ({ station }) => {
  const [playing, setPlaying] = useState(false)
  return (
    <div className={`or-station-card${playing ? ' or-station-card--playing' : ''}`}>
      <div className="or-station-card__top">
        <span className="or-station-card__icon">{station.icon}</span>
        <div className="or-station-card__live">
          <span className="or-station-card__dot" />
          LIVE
        </div>
      </div>
      <h3 className="or-station-card__name">{station.name}</h3>
      <p className="or-station-card__genre">{station.genre} · {station.lang}</p>
      <p className="or-station-card__desc">{station.desc}</p>
      <div className="or-station-card__footer">
        <span className="or-station-card__listeners">👂 {station.listeners} listening</span>
        <button
          className={`or-station-card__btn${playing ? ' or-station-card__btn--pause' : ''}`}
          onClick={() => setPlaying(p => !p)}
        >
          {playing ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>
      {playing && (
        <div className="or-station-card__equalizer">
          {[1,2,3,4,5].map(i => <span key={i} style={{ '--i': i }} />)}
        </div>
      )}
    </div>
  )
}

// ── FAQ accordion ─────────────────────────────────────────────────────────────
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`or-faq-item${open ? ' or-faq-item--open' : ''}`}>
      <button className="or-faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="or-faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="or-faq-item__a">{faq.a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Onlineradio = () => {
  const [form, setForm] = useState({ name: '', email: '', request: '', station: '', message: '' })
  const [sent, setSent] = useState(false)
  const [activeGenre, setActiveGenre] = useState('All')

  const genres = ['All', ...Array.from(new Set(STATIONS.map(s => s.genre)))]
  const filtered = activeGenre === 'All' ? STATIONS : STATIONS.filter(s => s.genre === activeGenre)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSent(true) }

  return (
    <div className="or-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="or-hero">
        <div className="or-hero__overlay" />
        <div className="container-custom or-hero__inner">
          <div className="or-hero__content">
            <span className="or-hero__eyebrow">📻 Online Radio</span>
            <h1 className="or-hero__title">
              Your Desi Music,<br className="or-hero__br" /> Anywhere in the World
            </h1>
            <p className="or-hero__sub">
              Stream live Bollywood, Bhangra, classical, devotional, and regional Indian music
              — 24 hours a day, 7 days a week. Free for every Desi, wherever life takes you.
            </p>
            <div className="or-hero__actions">
              <a href="#stations" className="or-hero__btn or-hero__btn--primary">▶ Start Listening</a>
              <a href="#shows" className="or-hero__btn or-hero__btn--outline">View Schedule</a>
            </div>
            <div className="or-hero__pills">
              <span>🎵 8+ Live Stations</span>
              <span>🌐 40+ Countries</span>
              <span>📱 Any Device</span>
              <span>🆓 Always Free</span>
            </div>
          </div>
          <div className="or-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="or-hero__stat">
                <span className="or-hero__stat-num">{s.number}</span>
                <span className="or-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom or-content">

        {/* ── Stations ─────────────────────────────────────────────────── */}
        <section className="or-section" id="stations">
          <p className="or-section__eyebrow">Live Now</p>
          <h2 className="or-section__title">Pick Your Station & Start Listening</h2>
          <div className="or-genre-filter">
            {genres.map(g => (
              <button
                key={g}
                className={`or-genre-btn${activeGenre === g ? ' or-genre-btn--active' : ''}`}
                onClick={() => setActiveGenre(g)}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="or-stations-grid">
            {filtered.map(s => <StationCard key={s.id} station={s} />)}
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────────── */}
        <section className="or-section">
          <p className="or-section__eyebrow">Why Listen With Us</p>
          <h2 className="or-section__title">Everything You Need, Nothing You Don't</h2>
          <div className="or-features-grid">
            {FEATURES.map(f => (
              <div key={f.title} className="or-feature-card">
                <span className="or-feature-card__icon">{f.icon}</span>
                <h3 className="or-feature-card__title">{f.title}</h3>
                <p className="or-feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Show Schedule ─────────────────────────────────────────────── */}
        <section className="or-section" id="shows">
          <p className="or-section__eyebrow">Programme Schedule</p>
          <h2 className="or-section__title">Live Shows & Hosted Programmes</h2>
          <div className="or-schedule">
            {SHOWS.map(show => (
              <div key={show.name} className="or-show-card">
                <div className="or-show-card__time">
                  <span>{show.time}</span>
                  <small>IST</small>
                </div>
                <div className="or-show-card__body">
                  <h3 className="or-show-card__name">{show.name}</h3>
                  <p className="or-show-card__host">🎙️ {show.host} · <span>{show.days}</span></p>
                  <p className="or-show-card__desc">{show.desc}</p>
                </div>
                <button className="or-show-card__remind">🔔 Remind me</button>
              </div>
            ))}
          </div>
        </section>

        {/* ── Languages ────────────────────────────────────────────────── */}
        <section className="or-section">
          <p className="or-section__eyebrow">Language Coverage</p>
          <h2 className="or-section__title">We Broadcast in Your Language</h2>
          <div className="or-lang-grid">
            {LANGUAGES.map(lang => (
              <div key={lang} className="or-lang-tag">{lang}</div>
            ))}
          </div>
          <p className="or-lang-note">More regional languages are added regularly. <a href="#request">Request your language →</a></p>
        </section>

        {/* ── Request / Contact form ────────────────────────────────────── */}
        <section className="or-section" id="request">
          <p className="or-section__eyebrow">Get in Touch</p>
          <h2 className="or-section__title">Song Requests, Artist Features & Advertising</h2>
          <div className="or-form-wrap">
            {sent ? (
              <div className="or-form__success">
                <span>🎶</span>
                <h3>We Got Your Message!</h3>
                <p>Thanks, <strong>{form.name}</strong>. Our team will respond to <strong>{form.email}</strong> within 48 hours. Keep the music playing!</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', request: '', station: '', message: '' }) }}>
                  Send Another Request
                </button>
              </div>
            ) : (
              <form className="or-form" onSubmit={handleSubmit}>
                <div className="or-form__row">
                  <div className="or-form__field">
                    <label>Your Name <span>*</span></label>
                    <input type="text" name="name" placeholder="Priya Sharma" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="or-form__field">
                    <label>Email Address <span>*</span></label>
                    <input type="email" name="email" placeholder="priya@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="or-form__row">
                  <div className="or-form__field">
                    <label>Request Type</label>
                    <select name="request" value={form.request} onChange={handleChange}>
                      <option value="">Select type…</option>
                      <option>Song Request / Dedication</option>
                      <option>Artist Feature / Performance</option>
                      <option>Advertising Enquiry</option>
                      <option>Language / Station Request</option>
                      <option>Show Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="or-form__field">
                    <label>Preferred Station</label>
                    <select name="station" value={form.station} onChange={handleChange}>
                      <option value="">All / Not sure…</option>
                      {STATIONS.map(s => <option key={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className="or-form__field">
                  <label>Message</label>
                  <textarea name="message" rows={4} placeholder="Song name, artist, or any message for our RJs…" value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="or-form__submit">Send Request ♪</button>
              </form>
            )}
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section className="or-section">
          <p className="or-section__eyebrow">FAQs</p>
          <h2 className="or-section__title">Frequently Asked Questions</h2>
          <div className="or-faq-list">
            {FAQS.map(faq => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="or-cta">
        <div className="container-custom or-cta__inner">
          <span className="or-cta__emoji">📻</span>
          <h2 className="or-cta__title">Never Stop the Music</h2>
          <p className="or-cta__sub">
            8 live stations. 55,000 listeners worldwide. 24/7 non-stop Desi music.
            Tune in free — no signup, no app, no hassle.
          </p>
          <a href="#stations" className="or-cta__btn">▶ Listen Now — It's Free</a>
          <p className="or-cta__note">
            Advertising? Artist bookings? Reach us at&nbsp;
            <strong>radio@vdesiconnect.com</strong>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Onlineradio
