import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data'; 

const Home = () => {
  return (
    <div>
      {/* Hero Section - The Big Banner */}
      <section className="hero">
        <div className="container">
          <h1>Upgrade Your Tech Game</h1>
          <p>Discover the latest gadgets and accessories at unbeatable prices. Quality gear for quality life.</p>
          <a href="#products" className="btn hero-btn">Shop Now</a>
        </div>
      </section>

      {/* Main Product Grid */}
      <div id="products" className="container">
        <h2 className="section-title">Latest Arrivals</h2>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;