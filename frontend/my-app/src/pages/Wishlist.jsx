import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Function to load wishlist from local storage
  const loadWishlist = () => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  };

  useEffect(() => {
    loadWishlist();

    // specific event listener to update if items are removed
    window.addEventListener('storage', loadWishlist);
    // Custom event listener for updates within the same tab
    window.addEventListener('wishlistUpdated', loadWishlist);

    return () => {
      window.removeEventListener('storage', loadWishlist);
      window.removeEventListener('wishlistUpdated', loadWishlist);
    };
  }, []);

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h2 className="section-title">My Wishlist ({wishlist.length})</h2>

      {wishlist.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h3 style={{ color: '#666', marginBottom: '20px' }}>Your wishlist is empty.</h3>
          <p style={{ color: '#999', marginBottom: '30px' }}>Save items you like to buy them later.</p>
          <Link to="/" className="btn-nav">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            // We reuse ProductCard. Since it has the heart button logic, 
            // clicking the heart here will untoggle it and remove it from the list.
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;