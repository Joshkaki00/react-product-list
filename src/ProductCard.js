import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const { id, name, category, price, rating, description, units } = product;
  
  // Create stars for rating display with partial stars
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="star filled">★</span>);
  }
  
  // Add half star if needed
  if (hasHalfStar) {
    stars.push(<span key="half" className="star half-filled">★</span>);
  }
  
  // Add empty stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-${i}`} className="star">★</span>);
  }

  return (
    <div className="product-card">
      <div className="product-id">#{id}</div>
      <h3 className="product-name">{name}</h3>
      <div className="product-category">{category}</div>
      <div className="product-price">${price.toFixed(2)}</div>
      <div className="product-rating">
        {stars}
        <span className="rating-number">({rating.toFixed(1)})</span>
      </div>
      <p className="product-description">{description}</p>
      <div className="product-units">In stock: {units} units</div>
    </div>
  );
}

export default ProductCard;