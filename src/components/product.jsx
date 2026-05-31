import React from 'react';
import { CartIcon, HeartIcon } from './Icons';

const ProductCard = ({
  image,
  name,
  discountPct,
  offerPrice,
  realPrice,
  outOfStock = false,
}) => (
  <div className={`product-card${outOfStock ? ' product-card--oos' : ''}`}>
    {/* Image + hover overlay */}
    <div className="product-card__img-wrap">
      <div className="product-card__img-clip">
        <img src={image} alt={name} className="product-card__img" />
      </div>

      {discountPct && !outOfStock && (
        <span className="product-card__badge">{discountPct}% OFF</span>
      )}

      {outOfStock ? (
        <div className="product-card__oos-overlay">
          <span className="product-card__oos-label">Out of Stock</span>
        </div>
      ) : (
        <div className="product-card__overlay">
          <button className="product-card__cart-btn" aria-label="Add to cart">
            <CartIcon size={17} />
            Add to Cart
          </button>
          <button className="product-card__wish-btn" aria-label="Wishlist">
            <HeartIcon size={17} />
          </button>
        </div>
      )}
    </div>

    {/* Info */}
    <div className="product-card__info">
      <h3 className="product-card__name">{name}</h3>
      {outOfStock ? (
        <span className="product-card__oos-text">Currently unavailable</span>
      ) : (
        <div className="product-card__pricing">
          <span className="product-card__offer">{offerPrice}</span>
          {realPrice && (
            <span className="product-card__real">{realPrice}</span>
          )}
        </div>
      )}
    </div>
  </div>
);

export default ProductCard;
