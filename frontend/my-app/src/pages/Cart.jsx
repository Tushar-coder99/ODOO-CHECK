import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load items from local storage when the page opens
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // Function to remove an item
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ fontSize: '1.2rem' }}>Your cart is empty.</p>
            <Link to="/">
                <button style={{ ...btnStyle, marginTop: '20px', backgroundColor: '#333', color: 'white' }}>Go Shopping</button>
            </Link>
        </div>
      ) : (
        <>
          <div style={{ marginTop: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            {cartItems.map((item) => (
              <div key={item._id} style={itemStyle}>
                
                {/* Product Image & Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                    <div>
                        <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>Qty: {item.qty}</p>
                        <button onClick={() => removeFromCart(item._id)} style={removeBtnStyle}>Remove</button>
                    </div>
                </div>

                {/* Price */}
                <div>
                  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>₹{(item.price * item.qty).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={summaryStyle}>
            <h3>Total: ₹{total.toLocaleString()}</h3>
            <button onClick={() => navigate('/checkout')} style={checkoutBtnStyle}>
                Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Styles
const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  borderBottom: '1px solid #eee',
};

const summaryStyle = {
  marginTop: '30px',
  textAlign: 'right',
  paddingTop: '20px',
};

const btnStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const checkoutBtnStyle = {
  padding: '12px 24px',
  backgroundColor: '#10b981', 
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  marginTop: '15px',
};

const removeBtnStyle = {
  background: 'transparent',
  color: '#dc2626',
  border: 'none',
  padding: '0',
  cursor: 'pointer',
  textDecoration: 'underline',
  fontSize: '0.9rem',
  marginTop: '5px'
};

export default Cart;