import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">MyShop.</Link>
        
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          
          <li className="dropdown">
            <Link to="/products" className="nav-link">Products ▾</Link>
            <div className="dropdown-content">
              <Link to="/products/gaming">Gaming</Link>
              <Link to="/products/audio">Audio</Link>
              <Link to="/products/accessories">Accessories</Link>
            </div>
          </li>

          <li><Link to="/wishlist" className="nav-link">Wishlist</Link></li>
          <li><Link to="/cart" className="nav-link">Cart</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          
          {/* Change Login to Profile for easy access */}
          <li><Link to="/profile" className="btn-nav">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;