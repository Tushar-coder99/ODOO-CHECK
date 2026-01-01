import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data'; 

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to handle redirection
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p._id === id);

  if (!product) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product not found</h2>;
  }

  // This function handles the button click
  const handleAddToCart = () => {
    // In a real app, you would add the item to Redux/Context state here
    console.log(`Added ${qty} item(s) of ${product.name} to cart`);
    
    // Redirect to the Cart page
    navigate('/cart');
  };

  return (
    <div className="container" style={{ display: 'flex', gap: '40px', padding: '40px 0', flexWrap: 'wrap' }}>
      
      {/* Product Image */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
      </div>

      {/* Product Info */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
        <p style={{ fontSize: '2rem', color: '#b12704', margin: '10px 0', fontWeight: 'bold' }}>
            ₹{product.price.toLocaleString()}
        </p>
        <p style={{ lineHeight: '1.6', color: '#555', fontSize: '1.1rem' }}>{product.description}</p>
        
        <div style={{ marginTop: '30px' }}>
            <p style={{ marginBottom: '10px' }}>Status: <span style={{ color: 'green', fontWeight: 'bold' }}>In Stock</span></p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input 
                  type="number" 
                  value={qty} 
                  min="1" 
                  onChange={(e) => setQty(Number(e.target.value))}
                  style={{ padding: '10px', width: '60px', borderRadius: '5px', border: '1px solid #ccc' }} 
                />
                
                {/* Updated Button with onClick event */}
                <button onClick={handleAddToCart} style={btnStyle}>
                  Add to Cart
                </button>
            </div>
        </div>
        
        <div style={{ marginTop: '20px' }}>
            <Link to="/" style={{ color: '#2563eb', textDecoration: 'none' }}>&larr; Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

const btnStyle = {
  padding: '12px 25px',
  backgroundColor: '#facc15',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#111'
};

export default ProductDetail;