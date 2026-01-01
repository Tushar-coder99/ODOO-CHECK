import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data'; // Using the mock data file

const ProductDetail = () => {
  const { id } = useParams();
  // Find the product that matches the URL ID
  const product = products.find((p) => p._id === id);

  if (!product) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product not found</h2>;
  }

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '40px', maxWidth: '1000px', margin: '0 auto', flexWrap: 'wrap' }}>
      
      {/* Product Image */}
      <div style={{ flex: 1 }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
      </div>

      {/* Product Info */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
        <p style={{ fontSize: '1.5rem', color: '#b12704', margin: '10px 0' }}>${product.price}</p>
        <p style={{ lineHeight: '1.6', color: '#555' }}>{product.description}</p>
        
        <div style={{ marginTop: '30px' }}>
            <p style={{ marginBottom: '10px' }}>Status: <span style={{ color: 'green' }}>In Stock</span></p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input type="number" defaultValue="1" min="1" style={{ padding: '10px', width: '60px' }} />
                <button style={btnStyle}>Add to Cart</button>
            </div>
        </div>
        
        <div style={{ marginTop: '20px' }}>
            <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>&larr; Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

const btnStyle = {
  padding: '12px 25px',
  backgroundColor: '#f0c14b',
  border: '1px solid #a88734',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  color: '#111'
};

export default ProductDetail;