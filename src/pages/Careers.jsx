import React, { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────
const PERKS = [
  { emoji: '🌍', title: 'Work from Anywhere', desc: 'We are a fully remote-friendly team. Work from home, a café, or Coorg — as long as the work gets done.' },
  { emoji: '📈', title: 'Grow with Us', desc: 'We are a fast-growing startup. Your work directly impacts the product and your growth is limited only by your ambition.' },
  { emoji: '🇮🇳', title: 'Meaningful Mission', desc: 'You will be helping Indian artisans reach the world and making diaspora communities feel closer to home.' },
  { emoji: '🏖️', title: 'Flexible Leave', desc: 'Generous paid time off, festival holidays, and no questions asked on mental health days.' },
  { emoji: '💡', title: 'Learning Budget', desc: 'Annual learning and development budget for courses, books, conferences, and anything that makes you sharper.' },
  { emoji: '🤝', title: 'Inclusive Culture', desc: 'We celebrate diversity — of background, language, and perspective. Every voice matters here.' },
]

const DEPARTMENTS = ['All', 'Engineering', 'Design', 'Marketing', 'Operations', 'Vendor Relations']

const JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    dept: 'Engineering',
    location: 'Remote (India)',
    type: 'Full-time',
    desc: 'Build fast, accessible, and beautiful React interfaces used by over a lakh customers worldwide. You will own features end-to-end and work closely with Design and Product.',
    skills: ['React', 'TypeScript', 'SCSS', 'REST APIs'],
  },
  {
    id: 2,
    title: 'Backend Engineer — Node.js',
    dept: 'Engineering',
    location: 'Remote (India)',
    type: 'Full-time',
    desc: 'Design and scale our API and data pipelines that power a multi-vendor marketplace. Experience with Node.js, MongoDB, and microservices is key.',
    skills: ['Node.js', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    id: 3,
    title: 'Product Designer (UI/UX)',
    dept: 'Design',
    location: 'Remote',
    type: 'Full-time',
    desc: 'Own the end-to-end design of new features — from discovery and wireframing to polished Figma specs handed off to engineers. You care deeply about accessibility and delight.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
  },
  {
    id: 4,
    title: 'Growth Marketing Manager',
    dept: 'Marketing',
    location: 'Remote (India / UAE)',
    type: 'Full-time',
    desc: 'Drive customer acquisition and retention across SEO, paid social, email, and influencer channels. You are data-driven and love experimenting.',
    skills: ['Performance Marketing', 'SEO', 'Email Marketing', 'Analytics'],
  },
  {
    id: 5,
    title: 'Content Writer — Indian Culture & Lifestyle',
    dept: 'Marketing',
    location: 'Remote',
    type: 'Part-time / Contract',
    desc: 'Write engaging blog articles, product descriptions, and social content that resonate with the Indian diaspora. A love for Indian culture and fluent English are must-haves.',
    skills: ['Content Writing', 'SEO Copywriting', 'Social Media', 'Hindi a plus'],
  },
  {
    id: 6,
    title: 'Vendor Onboarding Specialist',
    dept: 'Vendor Relations',
    location: 'Hybrid — Hyderabad / Remote',
    type: 'Full-time',
    desc: 'Help Indian artisans and small businesses get set up on VDesiConnect. You will guide vendors through listing, quality verification, and their first sales.',
    skills: ['Communication', 'CRM', 'Hindi / Telugu', 'Excel'],
  },
  {
    id: 7,
    title: 'Logistics & Operations Coordinator',
    dept: 'Operations',
    location: 'Hyderabad, India',
    type: 'Full-time',
    desc: 'Coordinate with shipping partners, manage cross-border logistics, handle returns, and ensure every package gets to a customer on time and intact.',
    skills: ['Supply Chain', 'Cross-border Shipping', 'Excel', 'Problem Solving'],
  },
  {
    id: 8,
    title: 'Customer Experience Lead',
    dept: 'Operations',
    location: 'Remote (India)',
    type: 'Full-time',
    desc: 'Own the post-purchase experience — resolve escalations, build help-centre content, and use customer feedback to make the platform better. Empathy is your superpower.',
    skills: ['Customer Support', 'Zendesk / Freshdesk', 'Communication', 'Hindi'],
  },
]

const PROCESS = [
  { step: '01', title: 'Apply Online', desc: 'Send us your CV and a short note on why VDesiConnect excites you. No cover-letter essays needed — just be real.' },
  { step: '02', title: 'Screening Call', desc: 'A 30-minute chat with someone from the team to learn about your background and answer your questions.' },
  { step: '03', title: 'Skill Assessment', desc: 'A focused, practical task relevant to the role — never more than 2–3 hours of your time.' },
  { step: '04', title: 'Final Interview', desc: 'Meet the team lead and a cross-functional colleague. We assess fit both ways — you should be interviewing us too.' },
  { step: '05', title: 'Offer & Onboarding', desc: 'Fast decisions — typically within a week of the final interview. Onboarding is structured, warm, and human.' },
]

// ── Job card ──────────────────────────────────────────────────────────────────
const JobCard = ({ job }) => (
  <div className="careers-job-card">
    <div className="careers-job-card__header">
      <div>
        <span className="careers-job-card__dept">{job.dept}</span>
        <h3 className="careers-job-card__title">{job.title}</h3>
      </div>
      <span className="careers-job-card__type">{job.type}</span>
    </div>
    <p className="careers-job-card__location">📍 {job.location}</p>
    <p className="careers-job-card__desc">{job.desc}</p>
    <div className="careers-job-card__skills">
      {job.skills.map(s => <span key={s} className="careers-skill-tag">{s}</span>)}
    </div>
    <button className="careers-job-card__apply-btn">Apply Now →</button>
  </div>
)

// ── Page ──────────────────────────────────────────────────────────────────────
const Careers = () => {
  const [activeDept, setActiveDept] = useState('All')

  const filteredJobs = activeDept === 'All'
    ? JOBS
    : JOBS.filter(j => j.dept === activeDept)

  return (
    <div className="careers-page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="careers-hero">
        <div className="careers-hero__overlay" />
        <div className="container-custom careers-hero__inner">
          <span className="careers-hero__eyebrow">💼 Work at VDesiConnect</span>
          <h1 className="careers-hero__title">
            Help Connect India <br className="careers-hero__br" /> to the World
          </h1>
          <p className="careers-hero__sub">
            We are a small, passionate team on a big mission — making authentic Indian
            products and services accessible to every Indian living abroad.
            If that excites you, you belong here.
          </p>
          <div className="careers-hero__stats">
            <div className="careers-hero__stat">
              <span className="careers-hero__stat-num">50+</span>
              <span className="careers-hero__stat-label">Team Members</span>
            </div>
            <div className="careers-hero__stat">
              <span className="careers-hero__stat-num">8</span>
              <span className="careers-hero__stat-label">Open Roles</span>
            </div>
            <div className="careers-hero__stat">
              <span className="careers-hero__stat-num">12</span>
              <span className="careers-hero__stat-label">Countries Represented</span>
            </div>
          </div>
          <a href="#open-roles" className="careers-hero__cta">See Open Roles ↓</a>
        </div>
      </section>

      {/* ── Mission strip ────────────────────────────────────────────────── */}
      <section className="careers-mission">
        <div className="container-custom careers-mission__inner">
          <span className="careers-mission__quote">"</span>
          <p className="careers-mission__text">
            We did not build VDesiConnect to become a big tech company.
            We built it because every time an Indian abroad unpacks a parcel from home,
            their face lights up — and we want to make that happen every single day.
          </p>
          <p className="careers-mission__author">— Ananya Reddy, Co-Founder & CEO</p>
        </div>
      </section>

      {/* ── Perks ────────────────────────────────────────────────────────── */}
      <section className="careers-perks">
        <div className="container-custom">
          <p className="careers-section-eyebrow">Why join us</p>
          <h2 className="careers-section-title">A Place Where You Do Your Best Work</h2>
          <div className="careers-perks__grid">
            {PERKS.map(p => (
              <div key={p.title} className="careers-perk-card">
                <span className="careers-perk-card__emoji">{p.emoji}</span>
                <h3 className="careers-perk-card__title">{p.title}</h3>
                <p className="careers-perk-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open roles ───────────────────────────────────────────────────── */}
      <section className="careers-roles" id="open-roles">
        <div className="container-custom">
          <p className="careers-section-eyebrow">Open positions</p>
          <h2 className="careers-section-title">Find Your Role</h2>

          {/* Dept filter */}
          <div className="careers-dept-tabs">
            {DEPARTMENTS.map(d => (
              <button
                key={d}
                className={`careers-dept-tab${activeDept === d ? ' careers-dept-tab--active' : ''}`}
                onClick={() => setActiveDept(d)}
              >
                {d}
                <span className="careers-dept-tab__count">
                  {d === 'All' ? JOBS.length : JOBS.filter(j => j.dept === d).length}
                </span>
              </button>
            ))}
          </div>

          {filteredJobs.length > 0 ? (
            <div className="careers-jobs-grid">
              {filteredJobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          ) : (
            <div className="careers-no-roles">
              <span>🔍</span>
              <p>No open roles in this department right now. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Hiring process ───────────────────────────────────────────────── */}
      <section className="careers-process">
        <div className="container-custom">
          <p className="careers-section-eyebrow careers-section-eyebrow--center">Our hiring process</p>
          <h2 className="careers-section-title careers-section-title--center">
            Simple, Respectful, and Fast
          </h2>
          <div className="careers-process__steps">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="careers-process__step">
                <div className="careers-process__step-num">{p.step}</div>
                {i < PROCESS.length - 1 && <div className="careers-process__connector" />}
                <h3 className="careers-process__step-title">{p.title}</h3>
                <p className="careers-process__step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="careers-cta">
        <div className="container-custom careers-cta__inner">
          <span className="careers-cta__emoji">🚀</span>
          <h2 className="careers-cta__title">Don't See the Right Role?</h2>
          <p className="careers-cta__sub">
            We are always looking for great people. Send us your CV and tell us
            how you can help — we read every message.
          </p>
          <a href="mailto:careers@vdesiconnect.com" className="careers-cta__btn">
            Send an Open Application
          </a>
          <p className="careers-cta__note">📬 careers@vdesiconnect.com</p>
        </div>
      </section>

    </div>
  )
}

export default Careers
