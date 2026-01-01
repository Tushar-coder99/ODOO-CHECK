import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data'; 

const Home = ({ searchTerm }) => {
  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes((searchTerm || '').toLowerCase()) ||
    product.description.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  return (
    <div>
      {/* Hero Section - Only show when not searching */}
      {!searchTerm && (
        <section className="hero">
          <div className="container">
            <h1>Upgrade Your Tech Game</h1>
            <p>Discover the latest gadgets and accessories at unbeatable prices. Quality gear for quality life.</p>
            <a href="#products" className="btn hero-btn">Shop Now</a>
          </div>
        </section>
      )}

      {/* Main Product Grid */}
      <div id="products" className="container" style={{ paddingTop: searchTerm ? '40px' : '0' }}>
        <h2 className="section-title">
          {searchTerm ? `Search Results for "${searchTerm}"` : 'Latest Arrivals'}
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
            <p>Try searching for different keywords or browse all products.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
