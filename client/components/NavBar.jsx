import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold hover:text-gray-300">Home</Link>

        <ul className="flex space-x-4">
          <li>
            <Link to="/starred" className="text-white hover:text-gray-300">Starred Products</Link>
          </li>
        </ul>
      </div>
      <br /><br /><br /><br />
    </nav>
  );
};

export default Navbar;