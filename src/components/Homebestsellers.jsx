import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './product';
import { ArrowRightIcon } from './Icons';

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

// ── Star rating component ─────────────────────────────────────────────────
const Stars = ({ rating }) => {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <span className="bs-stars" aria-label={`${rating} out of 5`}>
      {Array(full).fill(null).map((_, i) => (
        <svg key={`f${i}`} viewBox="0 0 20 20" width="13" height="13" fill="#f5a623"><path d="M10 1l2.4 6.6H19l-5.4 4 2 6.4L10 14.1 4.4 18l2-6.4L1 7.6h6.6z"/></svg>
      ))}
      {half === 1 && (
        <svg viewBox="0 0 20 20" width="13" height="13">
          <defs><linearGradient id="hg"><stop offset="50%" stopColor="#f5a623"/><stop offset="50%" stopColor="#d4d4d4"/></linearGradient></defs>
          <path fill="url(#hg)" d="M10 1l2.4 6.6H19l-5.4 4 2 6.4L10 14.1 4.4 18l2-6.4L1 7.6h6.6z"/>
        </svg>
      )}
      {Array(empty).fill(null).map((_, i) => (
        <svg key={`e${i}`} viewBox="0 0 20 20" width="13" height="13" fill="#d4d4d4"><path d="M10 1l2.4 6.6H19l-5.4 4 2 6.4L10 14.1 4.4 18l2-6.4L1 7.6h6.6z"/></svg>
      ))}
    </span>
  );
};

const bestsellers = [
  { id: 1,  image: p01, rank: 1,  name: 'Handcrafted Banarasi Silk Saree',     discountPct: '20', offerPrice: '$47.99', realPrice: '$59.99', rating: 4.9, reviews: 1240 },
  { id: 2,  image: p02, rank: 2,  name: "Men's Classic Cotton Kurta",           discountPct: '15', offerPrice: '$20.99', realPrice: '$24.99', rating: 4.8, reviews:  986 },
  { id: 3,  image: p03, rank: 3,  name: 'Organic Turmeric & Spice Gift Set',    discountPct: '10', offerPrice: '$29.99', realPrice: '$33.99', rating: 4.7, reviews:  854 },
  { id: 4,  image: p04, rank: 4,  name: 'Handwoven Phulkari Dupatta',           discountPct: '25', offerPrice: '$23.99', realPrice: '$32.99', rating: 4.7, reviews:  731 },
  { id: 5,  image: p05, rank: 5,  name: 'Brass Puja Thali Décor Set',           discountPct: '12', offerPrice: '$33.99', realPrice: '$38.99', rating: 4.6, reviews:  618 },
  { id: 6,  image: p06, rank: 6,  name: "Women's Embroidered Anarkali Suit",    discountPct: '30', offerPrice: '$54.99', realPrice: '$81.99', rating: 4.6, reviews:  577 },
  { id: 7,  image: p07, rank: 7,  name: 'Ayurvedic Herbal Skincare Box',        discountPct: '18', offerPrice: '$24.99', realPrice: '$30.49', rating: 4.5, reviews:  502 },
  { id: 8,  image: p08, rank: 8,  name: 'Traditional Rajasthani Juttis',        discountPct: '20', offerPrice: '$31.99', realPrice: '$40.99', rating: 4.5, reviews:  468 },
  { id: 9,  image: p09, rank: 9,  name: 'Desi Pickle & Chutney Combo',          discountPct: '10', offerPrice: '$17.99', realPrice: '$19.99', rating: 4.4, reviews:  415 },
  { id: 10, image: p10, rank: 10, name: 'Hand-Painted Madhubani Art Frame',     discountPct: '22', offerPrice: '$39.99', realPrice: '$51.99', rating: 4.4, reviews:  390 },
];

const Homebestsellers = () => (
  <section className="bestsellers">
    <div className="container-custom">

      {/* Section header */}
      <div className="bestsellers__header">
        <h2 className="bestsellers__title">
          Best Sellers
          <span className="bestsellers__title-line" />
        </h2>
        <Link to="/bestsellers" className="bestsellers__view-all">
          View All Products
          <ArrowRightIcon size={14} />
        </Link>
      </div>

      {/* 5 × 2 grid */}
      <div className="bestsellers__grid">
        {bestsellers.map((p) => (
          <div key={p.id} className="bestsellers__col">
            {/* Rank badge sits outside ProductCard */}
            <div className="bestsellers__item">
              <span className={`bs-rank${p.rank <= 3 ? ` bs-rank--top` : ''}`}>
                #{p.rank}
              </span>
              <ProductCard
                image={p.image}
                name={p.name}
                discountPct={p.discountPct}
                offerPrice={p.offerPrice}
                realPrice={p.realPrice}
              />
              <div className="bs-meta">
                <Stars rating={p.rating} />
                <span className="bs-reviews">{p.rating} ({p.reviews.toLocaleString()})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Homebestsellers;
