import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register logic here:', formData);
  };

  return (
    <div style={containerStyle}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input 
          type="text" 
          name="name"
          placeholder="Full Name" 
          onChange={handleChange}
          style={inputStyle} 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email Address" 
          onChange={handleChange}
          style={inputStyle} 
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          onChange={handleChange}
          style={inputStyle} 
        />
        <button type="submit" style={btnStyle}>Create Account</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

// Reusing styles from Login for consistency
const containerStyle = { maxWidth: '400px', margin: '50px auto', padding: '20px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { padding: '10px', borderRadius: '4px', border: '1px solid #ccc' };
const btnStyle = { padding: '10px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

export default Register;