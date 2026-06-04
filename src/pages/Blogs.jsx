import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

import img01 from '../assets/sample-products/testproduct01.jpg'
import img02 from '../assets/sample-products/testproduct02.jpg'
import img03 from '../assets/sample-products/testproduct03.jpg'
import img04 from '../assets/sample-products/testproduct04.jpg'
import img05 from '../assets/sample-products/testproduct05.jpg'
import img06 from '../assets/sample-products/testproduct06.jpg'
import img07 from '../assets/sample-products/testproduct07.jpg'
import img08 from '../assets/sample-products/testproduct08.jpg'
import img09 from '../assets/sample-products/testproduct09.jpg'
import img10 from '../assets/sample-products/testproduct10.jpg'
import img11 from '../assets/sample-products/testproduct11.jpg'
import img12 from '../assets/sample-products/testproduct12.jpg'
import img13 from '../assets/sample-products/testproduct13.jpg'
import img14 from '../assets/sample-products/testproduct14.jpg'
import img15 from '../assets/sample-products/testproduct15.jpg'
import img16 from '../assets/sample-products/testproduct16.jpg'
import img17 from '../assets/sample-products/testproduct17.jpg'
import img18 from '../assets/sample-products/testproduct18.jpg'
import img19 from '../assets/sample-products/testproduct19.jpg'
import img20 from '../assets/sample-products/testproduct20.jpg'

// ── Blog data ───────────────────────────────────────────────────────────────
const BLOGS = [
  {
    id: 1,
    category: 'Products & Style',
    image: img01,
    gradient: 'green',
    title: 'How to Identify Authentic Banarasi Silk — A Complete Buyer\'s Guide',
    excerpt: 'Banarasi silk is one of India\'s most celebrated fabrics, but the market is flooded with imitations. Learn the key tests — the zari rub test, the burn test, and what to look for in the weave — so you never get fooled again.',
    author: { name: 'Ananya Reddy', role: 'Product Expert', initial: 'AR' },
    date: 'May 28, 2026',
    readTime: '6 min read',
    featured: true,
    tags: ['Sarees', 'Buying Guide', 'Silk'],
  },
  {
    id: 2,
    category: 'Products & Style',
    image: img02,
    gradient: 'green',
    title: '5 Stunning Ways to Style a Phulkari Dupatta for Modern Occasions',
    excerpt: 'The Phulkari dupatta is a riot of colour and embroidery. But it doesn\'t have to be reserved for weddings. From casual brunches to office parties, here are five fresh ways to wear this traditional gem in your everyday life abroad.',
    author: { name: 'Priya Sharma', role: 'Style Editor', initial: 'PS' },
    date: 'May 22, 2026',
    readTime: '4 min read',
    featured: false,
    tags: ['Fashion', 'Dupattas', 'Styling Tips'],
  },
  {
    id: 3,
    category: 'Products & Style',
    image: img03,
    gradient: 'teal',
    title: 'Ayurvedic Skincare: What to Really Look for When Buying Herbal Products Online',
    excerpt: 'Not every product with "herbal" or "Ayurvedic" on the label is the real deal. We break down certifications to check, ingredients to look for (and avoid), and how to spot greenwashing before you buy.',
    author: { name: 'Dr. Sneha Pillai', role: 'Wellness Contributor', initial: 'SP' },
    date: 'May 16, 2026',
    readTime: '7 min read',
    featured: false,
    tags: ['Herbal', 'Ayurveda', 'Skincare'],
  },
  {
    id: 4,
    category: 'Products & Style',
    image: img04,
    gradient: 'purple',
    title: 'The Complete Guide to Choosing the Perfect Lehenga for Your Wedding',
    excerpt: 'From silhouette and fabric to embroidery styles and colour theory for different skin tones — this comprehensive guide covers everything you need to know to find the lehenga of your dreams, wherever in the world you\'re shopping from.',
    author: { name: 'Kavitha Murugan', role: 'Bridal Fashion Writer', initial: 'KM' },
    date: 'May 10, 2026',
    readTime: '9 min read',
    featured: false,
    tags: ['Lehengas', 'Bridal', 'Wedding'],
  },
  {
    id: 5,
    category: 'Products & Style',
    image: img05,
    gradient: 'orange',
    title: 'Top 10 Indian Spices Every Desi Kitchen Abroad Absolutely Must Have',
    excerpt: 'Missing the smell of a proper tadka? You\'re not alone. We rounded up the ten non-negotiable spices that define Indian cooking — what they do, how to store them, and where to source the most authentic versions from VDesiConnect.',
    author: { name: 'Ravi Krishnan', role: 'Food Writer', initial: 'RK' },
    date: 'May 4, 2026',
    readTime: '5 min read',
    featured: false,
    tags: ['Food', 'Spices', 'Indian Cooking'],
  },
  {
    id: 6,
    category: 'VDesiConnect',
    image: img06,
    gradient: 'blue',
    title: 'How VDesiConnect Is Empowering Indian Artisans to Reach a Global Stage',
    excerpt: 'Behind every product on VDesiConnect is a maker. A weaver in Varanasi, a potter in Rajasthan, a pickle-maker in Andhra Pradesh. Discover how our platform is turning local craftsmanship into global commerce — and how you can be part of it.',
    author: { name: 'Vikram Nair', role: 'Co-Founder & CTO', initial: 'VN' },
    date: 'Apr 28, 2026',
    readTime: '6 min read',
    featured: false,
    tags: ['VDesiConnect', 'Artisans', 'Impact'],
  },
  {
    id: 7,
    category: 'VDesiConnect',
    image: img07,
    gradient: 'blue',
    title: 'Meet Our Vendors: The Inspiring Story Behind Meera\'s Handlooms, Varanasi',
    excerpt: 'Meera Krishnamurthy started with a single loom and a dream of putting Banarasi silk on the world map. Today, she ships to 14 countries through VDesiConnect. This is her story — told in her own words.',
    author: { name: 'Ananya Reddy', role: 'Editor-in-Chief', initial: 'AR' },
    date: 'Apr 20, 2026',
    readTime: '8 min read',
    featured: false,
    tags: ['Vendor Stories', 'VDesiConnect', 'Banarasi'],
  },
  {
    id: 8,
    category: 'VDesiConnect',
    image: img08,
    gradient: 'green',
    title: 'VDesiConnect Reaches 1 Lakh Customers Worldwide — A Milestone We Celebrate Together',
    excerpt: 'From our first sale in 2020 to a community of over one lakh customers across 50 countries — here is the story of how we grew, what we learned, and what comes next for VDesiConnect and our incredible community.',
    author: { name: 'Ananya Reddy', role: 'Co-Founder & CEO', initial: 'AR' },
    date: 'Apr 14, 2026',
    readTime: '5 min read',
    featured: false,
    tags: ['VDesiConnect', 'Milestone', 'Community'],
  },
  {
    id: 9,
    category: 'VDesiConnect',
    image: img09,
    gradient: 'teal',
    title: 'Our Quality Promise: How We Verify Every Single Product on VDesiConnect',
    excerpt: 'We take quality seriously. Before any product goes live on our platform, it goes through a multi-step verification process — vendor authentication, sample testing, and ongoing reviews. Here\'s exactly how it works.',
    author: { name: 'Priya Sharma', role: 'Quality Assurance Lead', initial: 'PS' },
    date: 'Apr 7, 2026',
    readTime: '5 min read',
    featured: false,
    tags: ['Quality', 'VDesiConnect', 'Trust'],
  },
  {
    id: 10,
    category: 'Business & Marketing',
    image: img10,
    gradient: 'orange',
    title: '5 Powerful Reasons Why Indian Products Are Trending Globally in 2026',
    excerpt: 'From Bollywood-driven fashion trends to the global wellness movement boosting Ayurveda\'s reach — Indian products have never been more in demand internationally. We explore what\'s driving this surge and what it means for sellers.',
    author: { name: 'Vikram Nair', role: 'Marketing Lead', initial: 'VN' },
    date: 'Mar 30, 2026',
    readTime: '6 min read',
    featured: false,
    tags: ['Marketing', 'Trends', 'Global'],
  },
  {
    id: 11,
    category: 'Business & Marketing',
    image: img11,
    gradient: 'orange',
    title: 'How to Successfully Sell Indian Handicrafts to the Global Market: A Vendor\'s Playbook',
    excerpt: 'Selling internationally isn\'t just about listing your products online. It\'s about storytelling, packaging, pricing strategy, and understanding your diaspora customer. Here is the complete playbook from our top-performing vendors.',
    author: { name: 'Rahul Iyer', role: 'Business Correspondent', initial: 'RI' },
    date: 'Mar 22, 2026',
    readTime: '10 min read',
    featured: false,
    tags: ['Vendor Guide', 'Selling', 'Handicrafts'],
  },
  {
    id: 12,
    category: 'Business & Marketing',
    image: img12,
    gradient: 'purple',
    title: 'The Rise of the Desi Diaspora Economy — What It Means for Indian Brands in 2026',
    excerpt: 'The Indian diaspora sends over $100 billion home every year. But increasingly, they\'re also spending on Indian products where they live. We analyse the data, the trends, and the massive opportunity this represents for Indian sellers.',
    author: { name: 'Vikram Nair', role: 'Marketing Lead', initial: 'VN' },
    date: 'Mar 15, 2026',
    readTime: '8 min read',
    featured: false,
    tags: ['Diaspora', 'Economy', 'Market Trends'],
  },
  {
    id: 13,
    category: 'Culture & Lifestyle',
    image: img13,
    gradient: 'orange',
    title: 'Celebrating Diwali Abroad: The Ultimate VDesiConnect Shopping Checklist',
    excerpt: 'Far from home but determined to celebrate Diwali with all the traditional splendour? From puja essentials and festive sweets to ethnic outfits and gift hampers for colleagues — here\'s everything you need, all available at VDesiConnect.',
    author: { name: 'Kavitha Murugan', role: 'Culture Writer', initial: 'KM' },
    date: 'Mar 8, 2026',
    readTime: '7 min read',
    featured: false,
    tags: ['Diwali', 'Festivals', 'Culture'],
  },
  {
    id: 14,
    category: 'Culture & Lifestyle',
    image: img14,
    gradient: 'purple',
    title: 'From Varanasi to Vancouver: How Handloom Weaving Is Connecting Two Cultures',
    excerpt: 'A Banarasi silk saree is not just a garment — it\'s six yards of history, craftsmanship, and identity. We trace the journey of a single saree from a loom in Varanasi to a wedding ceremony in Vancouver, and the people who made it possible.',
    author: { name: 'Ravi Krishnan', role: 'Feature Writer', initial: 'RK' },
    date: 'Feb 28, 2026',
    readTime: '9 min read',
    featured: false,
    tags: ['Handloom', 'Culture', 'Artisans'],
  },
  {
    id: 15,
    category: 'Culture & Lifestyle',
    image: img15,
    gradient: 'teal',
    title: 'Indian Festivals Around the World: Your Complete Guide to Celebrating Your Roots',
    excerpt: 'Holi in London, Navratri in New Jersey, Onam in Dubai — the Indian diaspora carries its festivals wherever it goes. Discover how communities around the world keep these traditions alive, and how VDesiConnect makes it easier than ever.',
    author: { name: 'Priya Sharma', role: 'Style & Culture Editor', initial: 'PS' },
    date: 'Feb 18, 2026',
    readTime: '6 min read',
    featured: false,
    tags: ['Festivals', 'Diaspora', 'Culture'],
  },
]

const CATEGORIES = ['All Posts', 'Products & Style', 'VDesiConnect', 'Business & Marketing', 'Culture & Lifestyle']
const PAGE_SZ = 6

const GRADIENT_CLASSES = {
  green:  'blog-cover--green',
  blue:   'blog-cover--blue',
  orange: 'blog-cover--orange',
  purple: 'blog-cover--purple',
  teal:   'blog-cover--teal',
}

// ── Search icon ─────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" width={17} height={17}>
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
)

// ── Blog card ────────────────────────────────────────────────────────────────
const BlogCard = ({ blog }) => (
  <article className="blog-card">
    <Link to={`/blogs/${blog.id}`} className="blog-card__cover-link">
      <div className="blog-cover blog-cover--img">
        <img src={blog.image} alt={blog.title} className="blog-cover__img" />
      </div>
    </Link>
    <div className="blog-card__body">
      <span className={`blog-cat blog-cat--${blog.gradient}`}>{blog.category}</span>
      <Link to={`/blogs/${blog.id}`} className="blog-card__title-link">
        <h3 className="blog-card__title">{blog.title}</h3>
      </Link>
      <p className="blog-card__excerpt">{blog.excerpt}</p>
      <div className="blog-card__footer">
        <div className="blog-author">
          <div className="blog-author__avatar">{blog.author.initial}</div>
          <div>
            <p className="blog-author__name">{blog.author.name}</p>
            <p className="blog-author__role">{blog.author.role}</p>
          </div>
        </div>
        <div className="blog-meta">
          <span>{blog.date}</span>
          <span className="blog-meta__sep">·</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </div>
  </article>
)

// ── Featured card ────────────────────────────────────────────────────────────
const FeaturedCard = ({ blog }) => (
  <article className="blog-featured">
    <div className="blog-featured__cover blog-cover blog-cover--img">
      <img src={blog.image} alt={blog.title} className="blog-cover__img" />
    </div>
    <div className="blog-featured__body">
      <div className="blog-featured__top">
        <span className={`blog-cat blog-cat--${blog.gradient}`}>{blog.category}</span>
        <span className="blog-featured__badge">✨ Featured Post</span>
      </div>
      <Link to={`/blogs/${blog.id}`} className="blog-featured__title-link">
        <h2 className="blog-featured__title">{blog.title}</h2>
      </Link>
      <p className="blog-featured__excerpt">{blog.excerpt}</p>
      <div className="blog-featured__tags">
        {blog.tags.map(t => <span key={t} className="blog-tag">{t}</span>)}
      </div>
      <div className="blog-featured__footer">
        <div className="blog-author">
          <div className="blog-author__avatar blog-author__avatar--lg">{blog.author.initial}</div>
          <div>
            <p className="blog-author__name">{blog.author.name}</p>
            <p className="blog-author__role">{blog.author.role} · {blog.date} · {blog.readTime}</p>
          </div>
        </div>
        <Link to={`/blogs/${blog.id}`} className="blog-featured__read-btn">
          Read Article →
        </Link>
      </div>
    </div>
  </article>
)

// ── Page ─────────────────────────────────────────────────────────────────────
const Blogs = () => {
  const [activeTab, setActiveTab]   = useState('All Posts')
  const [query, setQuery]           = useState('')
  const [visible, setVisible]       = useState(PAGE_SZ)
  const [email, setEmail]           = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const featured = BLOGS.find(b => b.featured)

  const filtered = useMemo(() => {
    let result = BLOGS.filter(b => !b.featured)

    if (activeTab !== 'All Posts')
      result = result.filter(b => b.category === activeTab)

    if (query.trim())
      result = result.filter(b =>
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        b.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
      )

    return result
  }, [activeTab, query])

  const shown   = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const handleTab = (tab) => { setActiveTab(tab); setVisible(PAGE_SZ) }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.includes('@')) setSubscribed(true)
  }

  return (
    <div className="blogs-page">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="blogs-hero">
        <div className="blogs-hero__overlay" />
        <div className="container-custom blogs-hero__inner">
          <span className="blogs-hero__eyebrow">📝 VDesiConnect Blog</span>
          <h1 className="blogs-hero__title">Stories, Guides & Insights</h1>
          <p className="blogs-hero__sub">
            Product guides, vendor stories, cultural insights, and marketing wisdom
            for the global Indian community.
          </p>
          {/* Search */}
          <div className="blogs-hero__search">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search articles by title, topic, or tag…"
              value={query}
              onChange={e => { setQuery(e.target.value); setVisible(PAGE_SZ) }}
            />
            {query && (
              <button className="blogs-hero__clear" onClick={() => setQuery('')}>✕</button>
            )}
          </div>
          <div className="blogs-hero__stats">
            <span>📚 {BLOGS.length} Articles</span>
            <span>✍️ 6 Writers</span>
            <span>🏷️ 4 Categories</span>
          </div>
        </div>
      </section>

      <div className="container-custom blogs-content">

        {/* ── Featured Post ────────────────────────────────────────────── */}
        {!query && activeTab === 'All Posts' && featured && (
          <div className="blogs-featured-wrap">
            <FeaturedCard blog={featured} />
          </div>
        )}

        {/* ── Category tabs ────────────────────────────────────────────── */}
        <div className="blogs-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`blogs-tab${activeTab === cat ? ' blogs-tab--active' : ''}`}
              onClick={() => handleTab(cat)}
            >
              {cat}
              <span className="blogs-tab__count">
                {cat === 'All Posts'
                  ? BLOGS.filter(b => !b.featured).length
                  : BLOGS.filter(b => b.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Results info ─────────────────────────────────────────────── */}
        {query && (
          <p className="blogs-search-info">
            {filtered.length > 0
              ? <>Showing <strong>{filtered.length}</strong> result{filtered.length !== 1 ? 's' : ''} for "<strong>{query}</strong>"</>
              : <>No articles found for "<strong>{query}</strong>"</>
            }
          </p>
        )}

        {/* ── Grid ─────────────────────────────────────────────────────── */}
        {shown.length > 0 ? (
          <div className="blogs-grid">
            {shown.map(blog => <BlogCard key={blog.id} blog={blog} />)}
          </div>
        ) : (
          <div className="blogs-empty">
            <span>🔍</span>
            <h3>No articles found</h3>
            <p>Try a different search term or browse all posts.</p>
            <button onClick={() => { setQuery(''); setActiveTab('All Posts') }}>
              View All Articles
            </button>
          </div>
        )}

        {/* ── Load more ────────────────────────────────────────────────── */}
        {hasMore && (
          <div className="blogs-load-more">
            <button onClick={() => setVisible(v => v + PAGE_SZ)}>
              Load More Articles
              <span>{filtered.length - visible} more</span>
            </button>
          </div>
        )}

      </div>

      {/* ── Newsletter ────────────────────────────────────────────────────── */}
      <section className="blogs-newsletter">
        <div className="container-custom blogs-newsletter__inner">
          <div className="blogs-newsletter__text">
            <span className="blogs-newsletter__eyebrow">📬 Stay in the loop</span>
            <h2 className="blogs-newsletter__title">Get Stories Delivered to Your Inbox</h2>
            <p className="blogs-newsletter__sub">
              New articles every week — product guides, vendor spotlights,
              festival shopping lists, and more. Join 12,000+ readers.
            </p>
          </div>
          <div className="blogs-newsletter__form-wrap">
            {subscribed ? (
              <div className="blogs-newsletter__success">
                <span>🎉</span>
                <div>
                  <p><strong>You're subscribed!</strong></p>
                  <p>Expect our next article in your inbox soon.</p>
                </div>
              </div>
            ) : (
              <form className="blogs-newsletter__form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe Free</button>
              </form>
            )}
            <p className="blogs-newsletter__note">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blogs
