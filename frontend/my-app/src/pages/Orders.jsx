import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  // Mock Orders Data
  const orders = [
    { _id: '5f4d3f', date: '2023-10-12', total: 125.99, isPaid: true, isDelivered: true },
    { _id: '2a1b9c', date: '2023-11-05', total: 49.99, isPaid: true, isDelivered: false },
  ];

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px' }}>My Orders</h2>
      
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
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
                <td style={tdStyle}>${order.total}</td>
                <td style={tdStyle}>
                    {order.isPaid ? <span style={{color:'green'}}>Paid</span> : <span style={{color:'red'}}>Not Paid</span>}
                </td>
                <td style={tdStyle}>
                    {order.isDelivered ? <span style={{color:'green'}}>Delivered</span> : <span style={{color:'red'}}>On way</span>}
                </td>
                <td style={tdStyle}>
                  <Link to={`/order/${order._id}`}>
                    <button style={btnStyle}>Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = { padding: '12px', borderBottom: '2px solid #ddd' };
const tdStyle = { padding: '12px' };
const btnStyle = { padding: '5px 10px', backgroundColor: '#eee', border: 'none', borderRadius: '3px', cursor: 'pointer' };

export default Orders;