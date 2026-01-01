import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '72px', color: '#dc3545' }}>404</h1>
      <h3>Page Not Found</h3>
      <p style={{ marginBottom: '20px' }}>We couldn't find the page you were looking for.</p>
      <Link to="/">
        <button style={{ padding: '10px 20px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;