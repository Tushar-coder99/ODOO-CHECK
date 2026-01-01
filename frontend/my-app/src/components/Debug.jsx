import React from 'react';

const Debug = () => {
  console.log('Debug component rendered');
  
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '4px',
      fontSize: '12px',
      zIndex: 9999
    }}>
      App is running ✓
    </div>
  );
};

export default Debug;