# React Product List Application

This project is a React-based product inventory application that allows users to filter, sort, and view product data dynamically. It demonstrates key React concepts such as state management, component composition, and data manipulation.

## Features

### 1. **Category Filtering**
- Users can filter products by category using dynamically generated category buttons.
- An "All" button is available to reset the filter and display all products.

### 2. **Sorting**
- Products can be sorted by various fields such as:
    - ID
    - Name
    - Price
    - Rating
    - Units
- Sorting can be toggled between ascending and descending order.

### 3. **Dynamic Statistics**
- Displays dynamic statistics based on the current product view:
    - Total categories
    - Total products
    - Available units
    - Inventory value
    - Average rating

### 4. **Product Cards**
- Each product is displayed as a card with details such as name, price, rating, and units.

## File Structure

### `/src/App.js`
The main application file that:
- Manages state for selected category, sorting field, and sorting direction.
- Filters and sorts product data dynamically.
- Renders the UI, including category buttons, sort controls, and product cards.

### `/src/data.js`
Processes and exports product data:
- Extracts unique categories.
- Counts products per category.
- Calculates total inventory value and other statistics.
- Provides utility data such as expensive products and category-wise totals.

### `/src/data.json`
The raw product data used in the application.

## How to Run

1. Clone the repository:
     ```bash
     git clone <repository-url>
     ```
2. Navigate to the project directory:
     ```bash
     cd react-product-list
     ```
3. Install dependencies:
     ```bash
     npm install
     ```
4. Start the development server:
     ```bash
     npm start
     ```
5. Open the application in your browser at `http://localhost:3000`.

## Dependencies
- React
- Node.js
- CSS for styling

## License
This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software under the terms of the license.
