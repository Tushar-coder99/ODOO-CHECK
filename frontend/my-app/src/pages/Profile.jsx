import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Mock User Data
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    phone: '+91 98765 43210',
    address: '123, Tech Park, Bangalore, India'
  });

  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistCount(savedWishlist.length);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ padding: '50px 20px', maxWidth: '800px' }}>
      <h2 className="section-title" style={{ textAlign: 'left' }}>My Profile</h2>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Left Column: User Details Form */}
        <div style={{ flex: 2, minWidth: '300px' }}>
          <div style={cardStyle}>
            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Personal Details</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" name="email" value={user.email} disabled style={{ ...inputStyle, background: '#f3f4f6' }} />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input type="text" name="phone" value={user.phone} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Shipping Address</label>
                <textarea name="address" rows="3" value={user.address} onChange={handleChange} style={inputStyle}></textarea>
              </div>
              <button type="button" className="btn-nav" style={{ alignSelf: 'flex-start', border: 'none', cursor: 'pointer' }}>
                Save Changes
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Dashboard Stats */}
        <div style={{ flex: 1, minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Wishlist Widget */}
          <div style={cardStyle}>
            <h3>Wishlist</h3>
            <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2563eb', margin: '10px 0' }}>{wishlistCount}</p>
            <p style={{ color: '#666', marginBottom: '15px' }}>Items saved for later</p>
            <Link to="/wishlist" className="btn-details" style={{ display: 'block', textAlign: 'center' }}>
              Go to Wishlist
            </Link>
          </div>

          {/* Orders Widget */}
          <div style={cardStyle}>
            <h3>My Orders</h3>
            <p style={{ color: '#666', marginBottom: '15px', marginTop: '10px' }}>Check order status and history.</p>
            <Link to="/orders" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>
              View Order History &rarr;
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

// Internal CSS for Profile Page
const cardStyle = {
  background: 'white',
  padding: '25px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e5e7eb'
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: '600',
  color: '#374151'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #d1d5db',
  fontFamily: 'inherit'
};

export default Profile;