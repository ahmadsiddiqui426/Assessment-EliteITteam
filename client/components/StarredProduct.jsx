import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StarredProducts = () => {
  const [starredProducts, setStarredProducts] = useState([]);

  useEffect(() => {
    // Fetch starred products from the backend API
    const fetchStarredProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getAllRatings');
        setStarredProducts(response.data);
      } catch (error) {
        console.error('Error fetching starred products:', error);
      }
    };

    fetchStarredProducts();
  }, []); // Run once on component mount

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{ color: i <= rating ? 'yellow' : 'gray' }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {starredProducts.map((starredProduct) => (
            <tr key={starredProduct._id}>
              <td>{starredProduct.name}</td>
              <td>{starredProduct.email}</td>
              <td>{starredProduct.ProductName}</td>
              <td>{renderStars(starredProduct.stars)}</td>
              <td>
                <button >Get Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarredProducts;
