import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '15px', color: '#111827' }}>Reset Password</h2>
        
        {!submitted ? (
          <>
            <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '25px', fontSize: '0.95rem' }}>
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '0.9rem' }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  style={inputStyle}
                />
              </div>

              <button type="submit" className="btn-details" style={{ width: '100%', padding: '12px', fontSize: '1rem' }}>
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '50px', marginBottom: '10px' }}>✉️</div>
            <h3 style={{ color: '#2563eb' }}>Check your email</h3>
            <p style={{ color: '#6b7280', marginBottom: '20px' }}>
              We have sent a password reset link to <strong>{email}</strong>.
            </p>
            <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', textDecoration: 'underline' }}>
              Try a different email
            </button>
          </div>
        )}

        <div style={{ marginTop: '25px', textAlign: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '20px' }}>
          <Link to="/login" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem' }}>
            &larr; Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

// Internal Styles for this specific page
const cardStyle = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  width: '100%',
  maxWidth: '450px',
  border: '1px solid #e5e7eb'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  fontSize: '1rem',
  outline: 'none',
  boxSizing: 'border-box' // Ensures padding doesn't break width
};

export default ForgotPassword;