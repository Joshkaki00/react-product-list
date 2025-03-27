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
  
export default ProductCard;