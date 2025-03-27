import data from './data.json';

// Part 1.1: Extract all categories using map
const allCategories = data.map(item => item.category);

// Part 1.2: Get unique categories using Set
const uniqueCategories = [...new Set(allCategories)];

// Part 1.3: Count products per category using reduce
const categoryCounts = allCategories.reduce((acc, category) => {
  // If the category exists in our accumulator, increment its count
  // Otherwise, initialize it to 1
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});

// Part 1.4: Create a list of objects with name and count
const categoriesWithCounts = Object.keys(categoryCounts).map(name => ({
  name,
  count: categoryCounts[name]
}));

// Sort categories alphabetically for better presentation
categoriesWithCounts.sort((a, b) => a.name.localeCompare(b.name));

// Stretch Challenge 1: Price list with formatted prices
const priceList = data.map(item => ({
  name: item.name,
  price: `${item.price.toFixed(2)}`
}));

// Stretch Challenge 2: Expensive products (more than $50)
const expensiveProducts = data.filter(item => item.price > 50);

// Stretch Challenge 3: Calculate total inventory value
const totalInventoryValue = data.reduce((total, item) => {
  return total + (item.price * item.units);
}, 0);

// Stretch Challenge 4: Total price of products in each category
const categoryTotalPrices = data.reduce((acc, item) => {
  const { category, price, units } = item;
  const itemTotal = price * units;
  
  // If category exists in accumulator, add to its total
  // Otherwise, initialize it with the current item's total
  acc[category] = (acc[category] || 0) + itemTotal;
  
  return acc;
}, {});

// Export the data and processed results
export default data;
export {
  uniqueCategories,
  categoryCounts,
  categoriesWithCounts,
  priceList,
  expensiveProducts,
  totalInventoryValue,
  categoryTotalPrices
};