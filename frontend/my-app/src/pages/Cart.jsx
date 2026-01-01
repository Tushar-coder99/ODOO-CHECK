import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data'; // Importing mock data

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Latest Products</h1>
      <div style={gridStyle}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Styles
const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
};

export default Home;