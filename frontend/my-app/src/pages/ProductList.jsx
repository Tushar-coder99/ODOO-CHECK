import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const ProductList = ({ searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes((searchTerm || '').toLowerCase()) ||
    product.description.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <h2 className="section-title">
        {searchTerm ? `Search Results for "${searchTerm}"` : 'All Products'}
      </h2>
      
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <p>No products found matching "{searchTerm}"</p>
          <p>Try searching for different keywords.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;