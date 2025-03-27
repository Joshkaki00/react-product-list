import React from 'react';
import './CategoryButton.css';

function CategoryButton({ category, count, isSelected, onClick }) {
  return (
    <button 
      className={`category-button ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(category)}
    >
      {category} 
      {count && <span className="count">({count})</span>}
    </button>
  );
}

export default CategoryButton;