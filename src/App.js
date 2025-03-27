import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryButton from './CategoryButton';
import ProductCard from './ProductCard';
import data, { 
  uniqueCategories, 
  categoriesWithCounts, 
  totalInventoryValue,
  categoryTotalPrices
} from './data';

function App() {
  // Part 3.1: Store the selected category in state 
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('id'); // Default sort by id
  const [sortDirection, setSortDirection] = useState('asc'); // Default ascending

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Handle sort change
  const handleSortChange = (field) => {
    // If clicking the same field, toggle direction
    if (field === sortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, default to ascending
      setSortBy(field);
      setSortDirection('asc');
    }
  };

  // Part 3.2: Filter products based on selected category
  let filteredProducts = selectedCategory === 'All' 
    ? [...data] // Create a copy to avoid mutating original data
    : [...data.filter(item => item.category === selectedCategory)];

  // Sort the filtered products
  filteredProducts.sort((a, b) => {
    let comparison = 0;
    
    // Handle different data types
    if (typeof a[sortBy] === 'string') {
      comparison = a[sortBy].localeCompare(b[sortBy]);
    } else {
      comparison = a[sortBy] - b[sortBy];
    }
    
    // Apply sort direction
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  // Calculate total units and value for the current view
  const totalUnits = filteredProducts.reduce((sum, product) => sum + product.units, 0);
  const totalValue = filteredProducts.reduce((sum, product) => sum + (product.price * product.units), 0);
  
  // Calculate average rating for current view
  const avgRating = filteredProducts.length > 0 
    ? (filteredProducts.reduce((sum, product) => sum + product.rating, 0) / filteredProducts.length).toFixed(1)
    : 0;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Inventory</h1>
        
        {/* Part 4.2: Show total counts */}
        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-label">Total Categories:</span>
            <span className="stat-value">{uniqueCategories.length}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Total Products:</span>
            <span className="stat-value">{data.length}</span>
          </div>
          
          {/* Dynamic stats that change with filtering */}
          <div className="stat-box">
            <span className="stat-label">Available Units:</span>
            <span className="stat-value">{totalUnits.toLocaleString()}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Inventory Value:</span>
            <span className="stat-value">${totalValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Avg. Rating:</span>
            <span className="stat-value">{avgRating} ★</span>
          </div>
        </div>
      </header>

      <div className="category-container">
        {/* "All" button to show all categories */}
        <CategoryButton 
          category="All" 
          count={data.length}
          isSelected={selectedCategory === 'All'}
          onClick={handleCategoryClick}
        />
        
        {/* Part 2.1: Map over categories to create CategoryButton components */}
        {categoriesWithCounts.map(category => (
          <CategoryButton 
            key={category.name}
            category={category.name}
            count={category.count}
            isSelected={selectedCategory === category.name}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
      
      {/* Sort controls */}
      <div className="sort-container">
        <span className="sort-label">Sort by:</span>
        <button 
          className={`sort-button ${sortBy === 'id' ? 'active' : ''}`} 
          onClick={() => handleSortChange('id')}
        >
          ID {sortBy === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
        <button 
          className={`sort-button ${sortBy === 'name' ? 'active' : ''}`} 
          onClick={() => handleSortChange('name')}
        >
          Name {sortBy === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
        <button 
          className={`sort-button ${sortBy === 'price' ? 'active' : ''}`} 
          onClick={() => handleSortChange('price')}
        >
          Price {sortBy === 'price' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
        <button 
          className={`sort-button ${sortBy === 'rating' ? 'active' : ''}`} 
          onClick={() => handleSortChange('rating')}
        >
          Rating {sortBy === 'rating' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
        <button 
          className={`sort-button ${sortBy === 'units' ? 'active' : ''}`} 
          onClick={() => handleSortChange('units')}
        >
          Units {sortBy === 'units' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
      </div>

      <div className="products-container">
        {/* Show count of filtered products */}
        <div className="filtered-count">
          Showing {filteredProducts.length} products 
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </div>
        
        {/* Part 2.2: Map over filtered products to create ProductCard components */}
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;