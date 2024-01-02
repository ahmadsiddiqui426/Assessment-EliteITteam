import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from '../components/ProductList';
import StarredProducts from '../components/StarredProduct';
import Navbar from '../components/NavBar';

const App = () => {
  const products = [
    // Define your product data here or fetch it from an API
    { id: 1, name: 'Product 1', description: 'Description 1', price: 19.99, stars: 5 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 29.99, stars: 3 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 39.99, stars: 4 },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} exact />
        <Route path="/starred" element={<StarredProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
