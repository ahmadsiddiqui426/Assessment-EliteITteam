import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ product, closeModal , rating}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleStar = () => {
    // Perform the logic to star the product and store user information
    console.log(rating);
    const userData = {
      name: name,
      email: email,
      productName: product.name,
      stars: rating[product.id], // You may want to change this to the user's rating
    };

    console.log(userData);

    // Send data to the Express server using Axios
    axios.post('http://localhost:3001/api/saveRating', userData)
      .then(response => {
        console.log('Data sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });

    // Close the modal after starring the product
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Star Product</h2>
        <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
        <p>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
        <button onClick={handleStar}>Star Product</button>
      </div>
    </div>
  );
};

export default Modal;
