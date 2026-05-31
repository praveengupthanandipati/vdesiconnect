import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartIcon, HeartIcon } from './Icons';

import p01 from '../assets/sample-products/testproduct01.jpg';
import p02 from '../assets/sample-products/testproduct02.jpg';
import p03 from '../assets/sample-products/testproduct03.jpg';
import p04 from '../assets/sample-products/testproduct04.jpg';
import p05 from '../assets/sample-products/testproduct05.jpg';
import p06 from '../assets/sample-products/testproduct06.jpg';
import p07 from '../assets/sample-products/testproduct07.jpg';
import p08 from '../assets/sample-products/testproduct08.jpg';
import p09 from '../assets/sample-products/testproduct09.jpg';
import p10 from '../assets/sample-products/testproduct10.jpg';
import p11 from '../assets/sample-products/testproduct11.jpg';
import p12 from '../assets/sample-products/testproduct12.jpg';
import p13 from '../assets/sample-products/testproduct13.jpg';
import p14 from '../assets/sample-products/testproduct14.jpg';
import p15 from '../assets/sample-products/testproduct15.jpg';
import p16 from '../assets/sample-products/testproduct16.jpg';
import p17 from '../assets/sample-products/testproduct17.jpg';
import p18 from '../assets/sample-products/testproduct18.jpg';
import p19 from '../assets/sample-products/testproduct19.jpg';
import p20 from '../assets/sample-products/testproduct20.jpg';

// ── Tab data ───────────────────────────────────────────────────────────────
const tabs = [
  {
    key: 'food',
    label: 'Food',
    subcategories: ['Amma Chethi Vanta', 'Bakery', 'Chocolates', 'Home Food', 'Millets'],
    products: [
      { id: 1,  image: p01, name: 'Lemon Pickle (500g)',           discount: 13, minPrice: '13.99', maxPrice: '34.99' },
      { id: 2,  image: p02, name: 'Pandumirchi Pickle (500g)',      discount: 13, minPrice: '13.99', maxPrice: '34.99' },
      { id: 3,  image: p03, name: 'Tomato Pickle (500g)',           discount: 13, minPrice: '13.99', maxPrice: '34.99' },
      { id: 4,  image: p04, name: 'Drumstick Pickle (500g)',        discount: 13, minPrice: '13.99', maxPrice: '34.99' },
      { id: 5,  image: p05, name: 'Gongura Chutney (250g)',         discount: 10, minPrice: '9.99',  maxPrice: '24.99' },
      { id: 6,  image: p06, name: 'Avakaya Mango Pickle (500g)',    discount: 15, minPrice: '11.99', maxPrice: '29.99' },
      { id: 7,  image: p07, name: 'Mixed Vegetable Pickle (500g)',  discount: 12, minPrice: '10.99', maxPrice: '27.99' },
      { id: 8,  image: p08, name: 'Tamarind Rice Mix (400g)',       discount: 10, minPrice: '8.99',  maxPrice: '19.99' },
    ],
  },
  {
    key: 'fashion',
    label: 'Fashion',
    subcategories: ["Men's Clothing", "Women's Clothing", "Kids' Wear", 'Footwear', 'Accessories'],
    products: [
      { id: 1,  image: p09,  name: 'Banarasi Silk Saree',           discount: 25, minPrice: '44.99', maxPrice: '89.99' },
      { id: 2,  image: p10,  name: "Men's Cotton Kurta",             discount: 20, minPrice: '19.99', maxPrice: '39.99' },
      { id: 3,  image: p11,  name: 'Phulkari Dupatta',               discount: 18, minPrice: '22.99', maxPrice: '44.99' },
      { id: 4,  image: p12,  name: 'Embroidered Anarkali Suit',      discount: 30, minPrice: '54.99', maxPrice: '99.99' },
      { id: 5,  image: p13,  name: 'Rajasthani Jutti (Pair)',        discount: 22, minPrice: '29.99', maxPrice: '54.99' },
      { id: 6,  image: p14,  name: 'Oxidised Silver Jhumkas',        discount: 40, minPrice: '14.99', maxPrice: '34.99' },
      { id: 7,  image: p15,  name: 'Block Print Cotton Kurti',       discount: 20, minPrice: '21.99', maxPrice: '44.99' },
      { id: 8,  image: p16,  name: 'Chanderi Silk Stole',            discount: 15, minPrice: '17.99', maxPrice: '34.99' },
    ],
  },
  {
    key: 'gifts',
    label: 'Gifts',
    subcategories: ['Birthday Gifts', 'Wedding Gifts', 'Festival Gifts', 'Gift Hampers', 'Personalised'],
    products: [
      { id: 1,  image: p17, name: 'Diwali Gift Hamper Deluxe',      discount: 20, minPrice: '34.99', maxPrice: '74.99' },
      { id: 2,  image: p18, name: 'Holi Colour & Sweets Box',        discount: 15, minPrice: '19.99', maxPrice: '44.99' },
      { id: 3,  image: p19, name: 'Rakhi Premium Gift Set',          discount: 25, minPrice: '24.99', maxPrice: '54.99' },
      { id: 4,  image: p20, name: 'Wedding Favour Mithai Box',       discount: 10, minPrice: '29.99', maxPrice: '64.99' },
      { id: 5,  image: p01, name: 'Personalised Name Frame',         discount: 18, minPrice: '22.99', maxPrice: '49.99' },
      { id: 6,  image: p02, name: 'Brass Puja Thali Gift Set',       discount: 12, minPrice: '31.99', maxPrice: '64.99' },
      { id: 7,  image: p03, name: 'Corporate Dry Fruit Gift Box',    discount: 22, minPrice: '39.99', maxPrice: '84.99' },
      { id: 8,  image: p04, name: 'Kids Birthday Surprise Pack',     discount: 15, minPrice: '17.99', maxPrice: '39.99' },
    ],
  },
  {
    key: 'herbal',
    label: 'Herbal Products',
    subcategories: ['Ayurvedic', 'Herbal Teas', 'Essential Oils', 'Skincare', 'Herbal Powders'],
    products: [
      { id: 1,  image: p05, name: 'Ashwagandha Root Powder (250g)', discount: 15, minPrice: '12.99', maxPrice: '29.99' },
      { id: 2,  image: p06, name: 'Neem & Tulsi Face Pack (100g)',   discount: 20, minPrice: '9.99',  maxPrice: '22.99' },
      { id: 3,  image: p07, name: 'Pure Rose Water Toner (200ml)',   discount: 12, minPrice: '8.99',  maxPrice: '18.99' },
      { id: 4,  image: p08, name: 'Brahmi Hair Oil (100ml)',         discount: 18, minPrice: '11.99', maxPrice: '24.99' },
      { id: 5,  image: p09, name: 'Moringa Leaf Powder (200g)',      discount: 10, minPrice: '10.99', maxPrice: '26.99' },
      { id: 6,  image: p10, name: 'Immunity Boost Herbal Tea (50)',  discount: 15, minPrice: '13.99', maxPrice: '29.99' },
      { id: 7,  image: p11, name: 'Triphala Churna (200g)',          discount: 8,  minPrice: '9.99',  maxPrice: '19.99' },
      { id: 8,  image: p12, name: 'Cold-Press Coconut Oil (500ml)', discount: 20, minPrice: '14.99', maxPrice: '34.99' },
    ],
  },
  {
    key: 'others',
    label: 'Others',
    subcategories: ['Home Decor', 'Puja Items', 'Books & Stationery', 'Electronics', 'Sports'],
    products: [
      { id: 1,  image: p13, name: 'Madhubani Art Wall Frame',        discount: 28, minPrice: '34.99', maxPrice: '74.99' },
      { id: 2,  image: p14, name: 'Terracotta Décor Set (5 Pcs)',    discount: 35, minPrice: '24.99', maxPrice: '54.99' },
      { id: 3,  image: p15, name: 'Handmade Brass Diya Set (6)',     discount: 15, minPrice: '19.99', maxPrice: '44.99' },
      { id: 4,  image: p16, name: 'Indian Classical Music CD Box',   discount: 20, minPrice: '16.99', maxPrice: '34.99' },
      { id: 5,  image: p17, name: 'Warli Print Decorative Plate',    discount: 25, minPrice: '22.99', maxPrice: '49.99' },
      { id: 6,  image: p18, name: 'Chessboard Wooden Set',           discount: 18, minPrice: '29.99', maxPrice: '64.99' },
      { id: 7,  image: p19, name: 'Yoga Mat Premium Non-Slip',       discount: 22, minPrice: '27.99', maxPrice: '54.99' },
      { id: 8,  image: p20, name: 'Indian Spice Grinder (Stone)',    discount: 12, minPrice: '39.99', maxPrice: '84.99' },
    ],
  },
];

// ── Mini product card ──────────────────────────────────────────────────────
const GpCard = ({ image, name, discount, minPrice, maxPrice }) => (
  <div className="gp-card">
    <div className="gp-card__img-wrap">
      {/* Clip only the image so overlay buttons aren't clipped */}
      <div className="gp-card__img-clip">
        <img src={image} alt={name} className="gp-card__img" />
      </div>

      {discount && (
        <span className="gp-card__badge">-{discount}%</span>
      )}

      {/* Hover overlay */}
      <div className="gp-card__overlay">
        <button className="gp-card__cart-btn" aria-label="Add to cart">
          <CartIcon size={15} />
          Add to Cart
        </button>
        <button className="gp-card__wish-btn" aria-label="Wishlist">
          <HeartIcon size={15} />
        </button>
      </div>
    </div>

    <div className="gp-card__info">
      <Link to="#" className="gp-card__name">{name}</Link>
      <span className="gp-card__price">${minPrice} &ndash; ${maxPrice}</span>
    </div>
  </div>
);

// ── Component ──────────────────────────────────────────────────────────────
const Homegroupproducts = () => {
  const [active, setActive] = useState('food');
  const current = tabs.find((t) => t.key === active);

  return (
    <section className="group-products">
      <div className="container-custom">

        {/* ── Section heading + pill tabs ── */}
        <div className="gp-header">
          <h2 className="gp-header__title">
            Shop by Category
            <span className="gp-header__line" />
          </h2>
          <ul className="gp-tabs" role="tablist">
            {tabs.map((t) => (
              <li key={t.key} role="presentation">
                <button
                  className={`gp-tab-btn${active === t.key ? ' active' : ''}`}
                  onClick={() => setActive(t.key)}
                  role="tab"
                  aria-selected={active === t.key}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Tab panel ── */}
        <div className="gp-panel">
          <div className="gp-panel__inner">

            {/* Left sidebar */}
            <aside className="gp-sidebar">
              <h3 className="gp-sidebar__title">{current.label}</h3>
              <ul className="gp-sidebar__list">
                {current.subcategories.map((sub) => (
                  <li key={sub}>
                    <Link to="#" className="gp-sidebar__link">{sub}</Link>
                  </li>
                ))}
              </ul>
              <Link to="#" className="gp-sidebar__viewall">View All</Link>
            </aside>

            {/* Vertical divider */}
            <div className="gp-divider" aria-hidden="true" />

            {/* Product grid — 4 cols × 2 rows = 8 products */}
            <div className="gp-grid-wrap">
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-0 gp-grid">
                {current.products.map((p) => (
                  <div className="col" key={p.id}>
                    <GpCard {...p} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Homegroupproducts;
