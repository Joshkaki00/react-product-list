import data from './data.json';

// Part 1.1: Extract all categories using map
const allCategories = data.map(item => item.category);

// Part 1.2: Get unique categories using Set
const uniqueCategories = [...new Set(allCategories)];

// Export the data and processed results
export default data;
export {
  uniqueCategories,
};