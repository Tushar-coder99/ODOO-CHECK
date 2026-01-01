import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Logic to process payment would go here
    // Redirect to the Order Success page we created earlier
    navigate('/order-success');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Shipping Address</h2>
      <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <input type="text" placeholder="Address" required style={inputStyle} />
        <input type="text" placeholder="City" required style={inputStyle} />
        <input type="text" placeholder="Postal Code" required style={inputStyle} />
        <input type="text" placeholder="Country" required style={inputStyle} />
        
        <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px', marginTop: '10px' }}>
            <h4>Payment Method</h4>
            <div style={{ margin: '10px 0' }}>
                <label>
                    <input type="radio" name="payment" defaultChecked /> PayPal or Credit Card
                </label>
            </div>
        </div>

        <button type="submit" style={btnStyle}>Place Order</button>
      </form>
    </div>
  );
};

const inputStyle = { padding: '12px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' };
const btnStyle = { padding: '15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '18px', marginTop: '10px' };

export default Checkout;