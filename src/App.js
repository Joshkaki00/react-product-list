import React, { useState } from 'react';
import './App.css';
import CategoryButton from './CategoryButton';
import ProductCard from './ProductCard';
import data, { 
  uniqueCategories, 
  categoriesWithCounts, 
  totalInventoryValue 
} from './data';

function App() {
  // Part 3.1: Store the selected category in state 
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Part 3.2: Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? data 
    : data.filter(item => item.category === selectedCategory);

export default App;