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

export default App;