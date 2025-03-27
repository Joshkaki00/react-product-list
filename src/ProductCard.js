import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const { id, name, category, price, rating, description, units } = product;
  
  // Create stars for rating display with partial stars
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

export default ProductCard;