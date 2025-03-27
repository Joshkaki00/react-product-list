import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const { id, name, category, price, rating, description, units } = product;

export default ProductCard;