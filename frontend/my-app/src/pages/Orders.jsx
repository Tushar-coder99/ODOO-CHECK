import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  // Mock Orders Data (Updated with Rupee values)
  const orders = [
    { _id: '5f4d3f', date: '2023-10-12', total: 4998, isPaid: true, isDelivered: true },
    { _id: '2a1b9c', date: '2023-11-05', total: 1499, isPaid: true, isDelivered: false },
  ];

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h2 style={{ marginBottom: '20px' }}>My Orders</h2>
      
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <thead>
                <tr style={{ backgroundColor: '#f3f4f6', textAlign: 'left' }}>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>DATE</th>
                <th style={thStyle}>TOTAL</th>
                <th style={thStyle}>PAID</th>
                <th style={thStyle}>DELIVERED</th>
                <th style={thStyle}></th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                <tr key={order._id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={tdStyle}>{order._id}</td>
                    <td style={tdStyle}>{order.date}</td>
                    {/* Symbol Changed Below */}
                    <td style={tdStyle}>₹{order.total.toLocaleString()}</td>
                    <td style={tdStyle}>
                        {order.isPaid ? <span style={{color:'green', fontWeight:'bold'}}>Paid</span> : <span style={{color:'red'}}>Not Paid</span>}
                    </td>
                    <td style={tdStyle}>
                        {order.isDelivered ? <span style={{color:'green', fontWeight:'bold'}}>Delivered</span> : <span style={{color:'#f59e0b', fontWeight:'bold'}}>On way</span>}
                    </td>
                    <td style={tdStyle}>
                    <button style={btnStyle}>Details</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      )}
    </div>
  );
};

const thStyle = { padding: '15px', borderBottom: '2px solid #ddd', fontSize: '0.9rem', color: '#555' };
const tdStyle = { padding: '15px', fontSize: '0.95rem' };
const btnStyle = { padding: '6px 12px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' };

export default Orders;