import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar() {
  const { totals } = useCart();
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const canSearch = useMemo(() => location.pathname === '/', [location.pathname]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSearch) navigate('/');
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    navigate({ pathname: '/', search: params.toString() });
  };

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="brand">E-Shop</Link>

        <form className="search" onSubmit={onSubmit}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
          <button className="btn" type="submit">Search</button>
        </form>

        <Link to="/cart" className="cart-link">
          Cart ({totals.count}) • ${totals.amount.toFixed(2)}
        </Link>
      </div>
    </header>
  );
}
