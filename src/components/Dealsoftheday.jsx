import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './product';
import { ArrowRightIcon } from './Icons';

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

const deals = [
  { id: 11, image: p11, name: 'Pure Kashmiri Saffron (5g)',            discountPct: '40', offerPrice: '$18.99', realPrice: '$31.99' },
  { id: 12, image: p12, name: 'Embroidered Silk Cushion Cover Set',    discountPct: '35', offerPrice: '$22.99', realPrice: '$35.49' },
  { id: 13, image: p13, name: "Men's Pathani Suit (XL)",               discountPct: '30', offerPrice: '$29.99', realPrice: '$42.99' },
  { id: 14, image: p14, name: 'Organic Cold-Press Coconut Oil (1L)',   discountPct: '25', offerPrice: '$14.99', realPrice: '$19.99', outOfStock: true },
  { id: 15, image: p15, name: 'Handmade Terracotta Décor Set',         discountPct: '45', offerPrice: '$26.99', realPrice: '$48.99' },
  { id: 16, image: p16, name: 'Premium Alphonso Mango Pickle (500g)',  discountPct: '20', offerPrice: '$11.99', realPrice: '$14.99' },
  { id: 17, image: p17, name: 'Bridal Mehndi Henna Cone Pack (12)',    discountPct: '38', offerPrice: '$9.99',  realPrice: '$15.99' },
  { id: 18, image: p18, name: 'Sterling Silver Oxidised Jhumkas',      discountPct: '50', offerPrice: '$19.99', realPrice: '$39.99', outOfStock: true },
  { id: 19, image: p19, name: 'Chyawanprash Immunity Boost (1kg)',     discountPct: '22', offerPrice: '$16.99', realPrice: '$21.79' },
  { id: 20, image: p20, name: 'Hand-Block Printed Cotton Kurti',       discountPct: '32', offerPrice: '$23.99', realPrice: '$34.99' },
];

// ── Countdown hook — counts down to midnight every day ────────────────────
function useDailyCountdown() {
  const getSecondsLeft = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return Math.max(0, Math.floor((midnight - now) / 1000));
  };

  const [secs, setSecs] = useState(getSecondsLeft);

  useEffect(() => {
    const id = setInterval(() => setSecs(getSecondsLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return { h, m, s };
}

const Dealsoftheday = () => {
  const { h, m, s } = useDailyCountdown();

  return (
    <section className="deals-day">
      <div className="container-custom">

        {/* Section header */}
        <div className="deals-day__header">
          <div className="deals-day__title-group">
            <h2 className="deals-day__title">
              Deals of the Day
              <span className="deals-day__title-line" />
            </h2>
            <div className="deals-day__timer">
              <span className="deals-day__timer-label">Ends in</span>
              <div className="deals-day__clock">
                <span className="deals-day__unit">
                  <strong>{h}</strong>
                  <small>hrs</small>
                </span>
                <span className="deals-day__colon">:</span>
                <span className="deals-day__unit">
                  <strong>{m}</strong>
                  <small>min</small>
                </span>
                <span className="deals-day__colon">:</span>
                <span className="deals-day__unit">
                  <strong>{s}</strong>
                  <small>sec</small>
                </span>
              </div>
            </div>
          </div>
          <Link to="/dealsoftheday" className="deals-day__view-all">
            View All
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* 5 × 2 grid */}
        <div className="deals-day__grid">
          {deals.map((p) => (
            <div key={p.id} className="deals-day__col">
              <ProductCard
                image={p.image}
                name={p.name}
                discountPct={p.discountPct}
                offerPrice={p.offerPrice}
                realPrice={p.realPrice}
                outOfStock={p.outOfStock}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Dealsoftheday;
