import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">MyShop.</Link>
        
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/cart" className="nav-link">Cart</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          {/* Use the new btn-nav class for a distinctive look */}
          <li><Link to="/login" className="btn-nav">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;