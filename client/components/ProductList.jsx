import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [userRatings, setUserRatings] = useState({});
  const [userData, setUserData] = useState({ name: '', email: '' });

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setUserData({ name: '', email: '' }); // Reset user data when closing modal
  };

  const handleStarClick = (productId, rating) => {
    // Open modal when stars are clicked
    openModal(products.find(product => product.id === productId));

    // Set user rating for a specific product when a star is clicked
    setUserRatings((prevUserRatings) => ({
      ...prevUserRatings,
      [productId]: rating,
    }));
  };

  const renderStars = (productId) => {
    const stars = [];
    const userRating = userRatings[productId] || 0;

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(productId, i)}
          style={{ color: i <= userRating ? 'yellow' : 'gray', cursor: 'pointer' }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Stars: {product.stars}</p>
          <div>
            <strong>Your Rating:</strong> {renderStars(product.id)}
          </div>
        </div>
      ))}

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          closeModal={closeModal}
          rating={userRatings}
        />
      )}
    </div>
  );
};

export default ProductList;
