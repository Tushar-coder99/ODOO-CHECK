import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Mock cart items updated with Rupee prices
  const cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 2499, qty: 1 },
    { id: 2, name: 'Gaming Mouse', price: 1499, qty: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go Back</Link></p>
      ) : (
        <>
          <div style={{ marginTop: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            {cartItems.map((item) => (
              <div key={item.id} style={itemStyle}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>Qty: {item.qty}</p>
                </div>
                <div>
                  {/* Symbol Changed Below */}
                  <p style={{ fontWeight: 'bold' }}>₹{(item.price * item.qty).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={summaryStyle}>
            {/* Symbol Changed Below */}
            <h3>Total: ₹{total.toLocaleString()}</h3>
            <Link to="/checkout">
                <button style={checkoutBtnStyle}>Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

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

const checkoutBtnStyle = {
  padding: '12px 24px',
  backgroundColor: '#10b981', // Green color
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  marginTop: '15px',
};

export default Cart;