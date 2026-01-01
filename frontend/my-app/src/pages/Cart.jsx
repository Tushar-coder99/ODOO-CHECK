import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { items, removeFromCart, setQuantity, clearCart, totals } = useCart();

  if (items.length === 0) {
    return (
      <div className="page center">
        <h2>Your cart is empty</h2>
        <Link to="/" className="btn">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-head">
        <h2>Your Cart</h2>
        <button className="btn btn-ghost" onClick={clearCart}>Clear cart</button>
      </div>

      <div className="cart">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img className="cart-img" src={item.image} alt={item.name} />
            <div className="cart-info">
              <h3 className="cart-title">{item.name}</h3>
              <p className="muted">${item.price} each</p>

              <div className="cart-controls">
                <button className="btn btn-ghost" onClick={() => setQuantity(item.id, item.quantity - 1)}>-</button>
                <input
                  className="qty"
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => setQuantity(item.id, Number(e.target.value))}
                />
                <button className="btn btn-ghost" onClick={() => setQuantity(item.id, item.quantity + 1)}>+</button>

                <button className="btn danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>

            <div className="cart-subtotal">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="checkout">
        <div className="checkout-box">
          <div className="row">
            <span className="muted">Items</span>
            <span>{totals.count}</span>
          </div>
          <div className="row">
            <span className="muted">Total</span>
            <span className="price">${totals.amount.toFixed(2)}</span>
          </div>
          <button className="btn" onClick={() => alert('Checkout demo')}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
