import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check if item is already in wishlist when component loads
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const exists = wishlist.find(item => item._id === product._id);
    setIsWishlisted(!!exists);
  }, [product._id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let updatedWishlist;

    if (isWishlisted) {
      // Remove
      updatedWishlist = wishlist.filter(item => item._id !== product._id);
    } else {
      // Add
      updatedWishlist = [...wishlist, product];
    }

    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="product-card" style={{ position: 'relative' }}>
      
      {/* Wishlist Button Top-Right */}
      <button 
        onClick={toggleWishlist}
        style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: isWishlisted ? 'red' : '#ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            zIndex: 10
        }}
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        {isWishlisted ? '♥' : '♡'}
      </button>

      <div className="card-img-wrapper">
        <img src={product.image} alt={product.name} className="card-img" />
      </div>
      
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc">
          {product.description.substring(0, 60)}...
        </p>
        
        <div className="card-footer">
          <span className="price">₹{product.price.toLocaleString()}</span>
          <Link to={`/product/${product._id}`} className="btn-details">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;