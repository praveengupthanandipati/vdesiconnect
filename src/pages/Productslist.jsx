import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/product";
import { FilterIcon, CloseIcon } from "../components/Icons";

import p01 from "../assets/sample-products/testproduct01.jpg";
import p02 from "../assets/sample-products/testproduct02.jpg";
import p03 from "../assets/sample-products/testproduct03.jpg";
import p04 from "../assets/sample-products/testproduct04.jpg";
import p05 from "../assets/sample-products/testproduct05.jpg";
import p06 from "../assets/sample-products/testproduct06.jpg";
import p07 from "../assets/sample-products/testproduct07.jpg";
import p08 from "../assets/sample-products/testproduct08.jpg";
import p09 from "../assets/sample-products/testproduct09.jpg";
import p10 from "../assets/sample-products/testproduct10.jpg";
import p11 from "../assets/sample-products/testproduct11.jpg";
import p12 from "../assets/sample-products/testproduct12.jpg";
import p13 from "../assets/sample-products/testproduct13.jpg";
import p14 from "../assets/sample-products/testproduct14.jpg";
import p15 from "../assets/sample-products/testproduct15.jpg";
import p16 from "../assets/sample-products/testproduct16.jpg";
import p17 from "../assets/sample-products/testproduct17.jpg";
import p18 from "../assets/sample-products/testproduct18.jpg";
import p19 from "../assets/sample-products/testproduct19.jpg";
import p20 from "../assets/sample-products/testproduct20.jpg";

const PRODUCTS_DATA = [
  {
    id: 1,
    image: p01,
    name: "Handcrafted Banarasi Silk Saree",
    offerPrice: "$44.99",
    realPrice: "$59.99",
    discountPct: 25,
    category: "Sarees",
    price: 44.99,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 2,
    image: p02,
    name: "Men's Classic Cotton Kurta",
    offerPrice: "$19.99",
    realPrice: "$24.99",
    discountPct: 20,
    category: "Kurtas",
    price: 19.99,
    rating: 4.2,
    inStock: true,
  },
  {
    id: 3,
    image: p03,
    name: "Organic Turmeric & Spice Gift Set",
    offerPrice: "$28.99",
    realPrice: "$33.99",
    discountPct: 15,
    category: "Food & Herbal",
    price: 28.99,
    rating: 4.3,
    inStock: false,
  },
  {
    id: 4,
    image: p04,
    name: "Handwoven Phulkari Dupatta",
    offerPrice: "$22.99",
    realPrice: "$32.99",
    discountPct: 30,
    category: "Dupattas",
    price: 22.99,
    rating: 4.4,
    inStock: true,
  },
  {
    id: 5,
    image: p05,
    name: "Brass Puja Thali Décor Set",
    offerPrice: "$34.99",
    realPrice: "$38.99",
    discountPct: 10,
    category: "Gifts & Decor",
    price: 34.99,
    rating: 4.1,
    inStock: true,
  },
  {
    id: 6,
    image: p06,
    name: "Women's Embroidered Anarkali Suit",
    offerPrice: "$52.99",
    realPrice: "$81.99",
    discountPct: 35,
    category: "Kurtas",
    price: 52.99,
    rating: 4.7,
    inStock: true,
  },
  {
    id: 7,
    image: p07,
    name: "Ayurvedic Herbal Skincare Box",
    offerPrice: "$24.99",
    realPrice: "$30.49",
    discountPct: 18,
    category: "Food & Herbal",
    price: 24.99,
    rating: 4.0,
    inStock: false,
  },
  {
    id: 8,
    image: p08,
    name: "Traditional Rajasthani Juttis",
    offerPrice: "$31.99",
    realPrice: "$40.99",
    discountPct: 22,
    category: "Footwear",
    price: 31.99,
    rating: 4.3,
    inStock: true,
  },
  {
    id: 9,
    image: p09,
    name: "Desi Pickle & Chutney Combo",
    offerPrice: "$16.99",
    realPrice: "$19.29",
    discountPct: 12,
    category: "Food & Herbal",
    price: 16.99,
    rating: 4.2,
    inStock: true,
  },
  {
    id: 10,
    image: p10,
    name: "Hand-Painted Madhubani Art Frame",
    offerPrice: "$38.99",
    realPrice: "$53.99",
    discountPct: 28,
    category: "Gifts & Decor",
    price: 38.99,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 11,
    image: p11,
    name: "Kanjivaram Silk Saree",
    offerPrice: "$64.99",
    realPrice: "$89.99",
    discountPct: 27,
    category: "Sarees",
    price: 64.99,
    rating: 4.8,
    inStock: true,
  },
  {
    id: 12,
    image: p12,
    name: "Kundan Bridal Jewellery Set",
    offerPrice: "$45.99",
    realPrice: "$69.99",
    discountPct: 34,
    category: "Jewelry",
    price: 45.99,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 13,
    image: p13,
    name: "Chanderi Silk Lehenga",
    offerPrice: "$79.99",
    realPrice: "$119.99",
    discountPct: 33,
    category: "Lehengas",
    price: 79.99,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 14,
    image: p14,
    name: "Block Print Cotton Kurta",
    offerPrice: "$24.99",
    realPrice: "$34.99",
    discountPct: 28,
    category: "Kurtas",
    price: 24.99,
    rating: 4.1,
    inStock: true,
  },
  {
    id: 15,
    image: p15,
    name: "Jaipuri Printed Dupatta",
    offerPrice: "$18.99",
    realPrice: "$25.99",
    discountPct: 26,
    category: "Dupattas",
    price: 18.99,
    rating: 4.3,
    inStock: true,
  },
  {
    id: 16,
    image: p16,
    name: "Mirror Work Lehenga Choli",
    offerPrice: "$89.99",
    realPrice: "$129.99",
    discountPct: 30,
    category: "Lehengas",
    price: 89.99,
    rating: 4.7,
    inStock: true,
  },
  {
    id: 17,
    image: p17,
    name: "Kolhapuri Leather Sandals",
    offerPrice: "$29.99",
    realPrice: "$42.99",
    discountPct: 30,
    category: "Footwear",
    price: 29.99,
    rating: 4.4,
    inStock: true,
  },
  {
    id: 18,
    image: p18,
    name: "Oxidized Silver Earrings",
    offerPrice: "$14.99",
    realPrice: "$21.99",
    discountPct: 31,
    category: "Jewelry",
    price: 14.99,
    rating: 4.3,
    inStock: true,
  },
  {
    id: 19,
    image: p19,
    name: "Georgette Printed Party Saree",
    offerPrice: "$39.99",
    realPrice: "$54.99",
    discountPct: 27,
    category: "Sarees",
    price: 39.99,
    rating: 4.4,
    inStock: true,
  },
  {
    id: 20,
    image: p20,
    name: "Embroidered Palazzo Kurta Set",
    offerPrice: "$44.99",
    realPrice: "$64.99",
    discountPct: 30,
    category: "Kurtas",
    price: 44.99,
    rating: 4.2,
    inStock: true,
  },
  {
    id: 21,
    image: p11,
    name: "Ikkat Silk Saree",
    offerPrice: "$49.99",
    realPrice: "$74.99",
    discountPct: 33,
    category: "Sarees",
    price: 49.99,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 22,
    image: p12,
    name: "Pearl & Meenakari Necklace",
    offerPrice: "$32.99",
    realPrice: "$49.99",
    discountPct: 34,
    category: "Jewelry",
    price: 32.99,
    rating: 4.1,
    inStock: false,
  },
  {
    id: 23,
    image: p13,
    name: "Bridal Lehenga with Dupatta",
    offerPrice: "$109.99",
    realPrice: "$159.99",
    discountPct: 31,
    category: "Lehengas",
    price: 109.99,
    rating: 4.9,
    inStock: true,
  },
  {
    id: 24,
    image: p14,
    name: "Angrakha Style Kurta",
    offerPrice: "$26.99",
    realPrice: "$37.99",
    discountPct: 28,
    category: "Kurtas",
    price: 26.99,
    rating: 4.0,
    inStock: true,
  },
  {
    id: 25,
    image: p15,
    name: "Bandhani Silk Dupatta",
    offerPrice: "$21.99",
    realPrice: "$31.99",
    discountPct: 31,
    category: "Dupattas",
    price: 21.99,
    rating: 4.4,
    inStock: true,
  },
  {
    id: 26,
    image: p16,
    name: "Floral Sharara Lehenga Set",
    offerPrice: "$74.99",
    realPrice: "$109.99",
    discountPct: 31,
    category: "Lehengas",
    price: 74.99,
    rating: 4.3,
    inStock: true,
  },
  {
    id: 27,
    image: p17,
    name: "Embellished Mojari Flats",
    offerPrice: "$24.99",
    realPrice: "$35.99",
    discountPct: 30,
    category: "Footwear",
    price: 24.99,
    rating: 4.5,
    inStock: false,
  },
  {
    id: 28,
    image: p18,
    name: "Temple Gold-Plated Earrings",
    offerPrice: "$19.99",
    realPrice: "$28.99",
    discountPct: 31,
    category: "Jewelry",
    price: 19.99,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 29,
    image: p19,
    name: "Chiffon Wedding Saree",
    offerPrice: "$54.99",
    realPrice: "$79.99",
    discountPct: 31,
    category: "Sarees",
    price: 54.99,
    rating: 4.7,
    inStock: true,
  },
  {
    id: 30,
    image: p20,
    name: "Straight-Cut Ethnic Kurta Set",
    offerPrice: "$34.99",
    realPrice: "$49.99",
    discountPct: 30,
    category: "Kurtas",
    price: 34.99,
    rating: 4.2,
    inStock: true,
  },
];

const CATEGORIES = [
  "Sarees",
  "Kurtas",
  "Lehengas",
  "Dupattas",
  "Jewelry",
  "Footwear",
  "Food & Herbal",
  "Gifts & Decor",
];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Best Rating" },
  { value: "newest", label: "Newest First" },
];

const RATING_OPTIONS = [
  { value: 4, label: "4★ & above" },
  { value: 3, label: "3★ & above" },
  { value: 2, label: "2★ & above" },
];

const INITIAL_VISIBLE = 25;
const LOAD_MORE_COUNT = 10;

const ProductsList = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [selectedCats, minPrice, maxPrice, minRating, inStockOnly]);

  useEffect(() => {
    document.body.style.overflow = filterOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [filterOpen]);

  const toggleCat = (cat) =>
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );

  const clearFilters = () => {
    setSelectedCats([]);
    setMinPrice("");
    setMaxPrice("");
    setMinRating(0);
    setInStockOnly(false);
  };

  const hasActiveFilters =
    selectedCats.length > 0 ||
    minPrice !== "" ||
    maxPrice !== "" ||
    minRating > 0 ||
    inStockOnly;

  const activeFilterCount =
    selectedCats.length +
    (minPrice !== "" ? 1 : 0) +
    (maxPrice !== "" ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (inStockOnly ? 1 : 0);

  const filtered = useMemo(() => {
    let result = [...PRODUCTS_DATA];

    if (selectedCats.length > 0)
      result = result.filter((p) => selectedCats.includes(p.category));

    if (minPrice !== "")
      result = result.filter((p) => p.price >= Number(minPrice));

    if (maxPrice !== "")
      result = result.filter((p) => p.price <= Number(maxPrice));

    if (minRating > 0) result = result.filter((p) => p.rating >= minRating);

    if (inStockOnly) result = result.filter((p) => p.inStock);

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result = [...result].sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCats, minPrice, maxPrice, minRating, inStockOnly, sortBy]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="products-page">
      <div className="products-page__inner">

        {/* ── Mobile filter overlay ────────────────────────────── */}
        {filterOpen && (
          <div
            className="products-page__overlay"
            onClick={() => setFilterOpen(false)}
          />
        )}

        {/* ── Sidebar ─────────────────────────────────────────── */}
        <aside className={`products-page__sidebar${filterOpen ? " products-page__sidebar--open" : ""}`}>
          <div className="products-page__sidebar-head">
            <h2 className="products-page__sidebar-title">Filters</h2>
            <div className="products-page__sidebar-head-actions">
              {hasActiveFilters && (
                <button
                  className="products-page__clear-btn"
                  onClick={clearFilters}
                >
                  Clear All
                </button>
              )}
              <button
                className="products-page__sidebar-close"
                onClick={() => setFilterOpen(false)}
                aria-label="Close filters"
              >
                <CloseIcon size={18} />
              </button>
            </div>
          </div>

          {/* Category */}
          <div className="products-page__filter-section">
            <p className="products-page__filter-heading">Category</p>
            {CATEGORIES.map((cat) => (
              <label key={cat} className="products-page__check-label">
                <input
                  type="checkbox"
                  checked={selectedCats.includes(cat)}
                  onChange={() => toggleCat(cat)}
                />
                {cat}
                <span className="products-page__cat-count">
                  ({PRODUCTS_DATA.filter((p) => p.category === cat).length})
                </span>
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div className="products-page__filter-section">
            <p className="products-page__filter-heading">Price Range</p>
            <div className="products-page__price-inputs">
              <input
                type="number"
                placeholder="Min $"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                min={0}
              />
              <span>–</span>
              <input
                type="number"
                placeholder="Max $"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                min={0}
              />
            </div>
          </div>

          {/* Customer Rating */}
          <div className="products-page__filter-section">
            <p className="products-page__filter-heading">Customer Rating</p>
            <label className="products-page__radio-label">
              <input
                type="radio"
                name="rating"
                checked={minRating === 0}
                onChange={() => setMinRating(0)}
              />
              All Ratings
            </label>
            {RATING_OPTIONS.map((opt) => (
              <label key={opt.value} className="products-page__radio-label">
                <input
                  type="radio"
                  name="rating"
                  checked={minRating === opt.value}
                  onChange={() => setMinRating(opt.value)}
                />
                <span className="products-page__stars">
                  {"★".repeat(opt.value)}
                </span>
                {opt.label}
              </label>
            ))}
          </div>

          {/* Availability */}
          <div className="products-page__filter-section">
            <p className="products-page__filter-heading">Availability</p>
            <label className="products-page__check-label">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
              In Stock Only
            </label>
          </div>

          {/* Mobile apply button */}
          <div className="products-page__sidebar-apply">
            <button
              className="products-page__apply-btn"
              onClick={() => setFilterOpen(false)}
            >
              Show {filtered.length} Products
            </button>
          </div>
        </aside>

        {/* ── Main ────────────────────────────────────────────── */}
        <main className="products-page__main">
          {/* Sort bar */}
          <div className="products-page__sort-bar">
            <div className="products-page__sort-bar-left">
              <button
                className="products-page__filter-toggle"
                onClick={() => setFilterOpen(true)}
                aria-label="Open filters"
              >
                <FilterIcon size={16} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="products-page__filter-badge">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <p className="products-page__results-count">
                <strong>{filtered.length}</strong> products
              </p>
            </div>
            <div className="products-page__sort-wrap">
              <label
                htmlFor="sort-select"
                className="products-page__sort-label"
              >
                Sort by:
              </label>
              <select
                id="sort-select"
                className="products-page__sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div> {/* end sort-bar */}

          {/* Product grid */}
          {visible.length > 0 ? (
            <div className="products-page__grid">
              {visible.map((p) => (
                <Link key={p.id} to={`/products/${p.id}`} className="product-card-link">
                  <ProductCard
                    image={p.image}
                    name={p.name}
                    discountPct={p.discountPct}
                    offerPrice={p.offerPrice}
                    realPrice={p.realPrice}
                    outOfStock={!p.inStock}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="products-page__empty">
              <p>No products match your current filters.</p>
              <button
                className="products-page__clear-btn--filled"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="products-page__load-more-wrap">
              <button
                className="products-page__load-more-btn"
                onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
              >
                Load More Products
                <span className="products-page__load-more-count">
                  {filtered.length - visibleCount} remaining
                </span>
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default ProductsList;
