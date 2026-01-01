import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="card-img-wrapper">
        <img src={product.image} alt={product.name} className="card-img" />
      </div>
      
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc">
          {product.description.substring(0, 60)}...
        </p>
        
        <div className="card-footer">
          <span className="price">${product.price}</span>
          <Link to={`/product/${product._id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;