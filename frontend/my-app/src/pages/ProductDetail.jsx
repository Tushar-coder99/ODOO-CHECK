import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data'; 

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find((p) => p._id === id);

  // Check wishlist status on load
  useEffect(() => {
    if (product) {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const exists = wishlist.find(item => item._id === product._id);
        setIsWishlisted(!!exists);
    }
  }, [product]);

  if (!product) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product not found</h2>;
  }

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = existingCart.find(item => item._id === product._id);
    let newCart;
    if (existingItem) {
        newCart = existingCart.map(item => 
            item._id === product._id ? { ...item, qty: item.qty + qty } : item
        );
    } else {
        newCart = [...existingCart, { ...product, qty }];
    }
    localStorage.setItem('cart', JSON.stringify(newCart));
    navigate('/cart');
  };

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let newList;
    if (isWishlisted) {
        newList = wishlist.filter(item => item._id !== product._id);
    } else {
        newList = [...wishlist, product];
    }
    localStorage.setItem('wishlist', JSON.stringify(newList));
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="container" style={{ display: 'flex', gap: '40px', padding: '40px 0', flexWrap: 'wrap' }}>
      
      <div style={{ flex: 1, minWidth: '300px' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
      </div>

      <div style={{ flex: 1, minWidth: '300px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
        <p style={{ fontSize: '2rem', color: '#2563eb', margin: '10px 0', fontWeight: '800' }}>
            ₹{product.price.toLocaleString()}
        </p>
        <p style={{ lineHeight: '1.6', color: '#4b5563', fontSize: '1.1rem' }}>{product.description}</p>
        
        <div style={{ marginTop: '30px' }}>
            <p style={{ marginBottom: '10px' }}>Status: <span style={{ color: 'green', fontWeight: 'bold' }}>In Stock</span></p>
            
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <input 
                  type="number" 
                  value={qty} 
                  min="1" 
                  onChange={(e) => setQty(Number(e.target.value))}
                  style={{ padding: '10px', width: '60px', borderRadius: '8px', border: '1px solid #ccc' }} 
                />
                
                <button onClick={handleAddToCart} className="btn-nav" style={{ cursor: 'pointer', border: 'none' }}>
                  Add to Cart
                </button>

                {/* Toggle Wishlist Button */}
                <button 
                  onClick={toggleWishlist} 
                  style={{ 
                    padding: '10px 15px', 
                    border: isWishlisted ? '2px solid red' : '2px solid #ccc', 
                    background: 'white', 
                    color: isWishlisted ? 'red' : '#555', 
                    borderRadius: '8px', 
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {isWishlisted ? '♥ Saved' : '♡ Add to Wishlist'}
                </button>
            </div>
        </div>
        
        <div style={{ marginTop: '20px' }}>
            <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>&larr; Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;