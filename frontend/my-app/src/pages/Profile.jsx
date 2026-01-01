import React, { useState } from 'react';

const Profile = () => {
  // Mock User Data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile Updated Successfully');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px' }}>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        
        <div>
            <label>Name</label>
            <input 
                type="text" 
                value={user.name} 
                onChange={(e) => setUser({...user, name: e.target.value})}
                style={inputStyle} 
            />
        </div>

        <div>
            <label>Email</label>
            <input 
                type="email" 
                value={user.email} 
                disabled 
                style={{...inputStyle, backgroundColor: '#f9f9f9'}} 
            />
        </div>

        <div>
            <label>Change Password</label>
            <input 
                type="password" 
                placeholder="New Password" 
                onChange={(e) => setUser({...user, password: e.target.value})}
                style={inputStyle} 
            />
        </div>

        <button type="submit" style={btnStyle}>Update Profile</button>
      </form>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' };
const btnStyle = { padding: '10px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

export default Profile;