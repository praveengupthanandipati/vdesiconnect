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

const products = [
  { id: 1,  image: p01, name: 'Handcrafted Banarasi Silk Saree',      discountPct: '25', offerPrice: '$44.99', realPrice: '$59.99' },
  { id: 2,  image: p02, name: "Men's Classic Cotton Kurta",            discountPct: '20', offerPrice: '$19.99', realPrice: '$24.99' },
  { id: 3,  image: p03, name: 'Organic Turmeric & Spice Gift Set',     discountPct: '15', offerPrice: '$28.99', realPrice: '$33.99', outOfStock: true },
  { id: 4,  image: p04, name: 'Handwoven Phulkari Dupatta',            discountPct: '30', offerPrice: '$22.99', realPrice: '$32.99' },
  { id: 5,  image: p05, name: 'Brass Puja Thali Décor Set',            discountPct: '10', offerPrice: '$34.99', realPrice: '$38.99' },
  { id: 6,  image: p06, name: "Women's Embroidered Anarkali Suit",     discountPct: '35', offerPrice: '$52.99', realPrice: '$81.99' },
  { id: 7,  image: p07, name: 'Ayurvedic Herbal Skincare Box',         discountPct: '18', offerPrice: '$24.99', realPrice: '$30.49', outOfStock: true },
  { id: 8,  image: p08, name: 'Traditional Rajasthani Juttis',         discountPct: '22', offerPrice: '$31.99', realPrice: '$40.99' },
  { id: 9,  image: p09, name: 'Desi Pickle & Chutney Combo',           discountPct: '12', offerPrice: '$16.99', realPrice: '$19.29' },
  { id: 10, image: p10, name: 'Hand-Painted Madhubani Art Frame',      discountPct: '28', offerPrice: '$38.99', realPrice: '$53.99' },
];

const Homenewarrivals = () => (
  <section className="new-arrivals">
    <div className="container-custom">

      {/* Section header */}
      <div className="new-arrivals__header">
        <h2 className="new-arrivals__title">
          New Arrivals
          <span className="new-arrivals__title-line" />
        </h2>
        <Link to="/new-arrivals" className="new-arrivals__view-all">
          View All
          <ArrowRightIcon size={14} />
        </Link>
      </div>

      {/* 5 × 2 grid */}
      <div className="new-arrivals__grid">
        {products.map((p) => (
          <div key={p.id} className="new-arrivals__col">
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

export default Homenewarrivals;
