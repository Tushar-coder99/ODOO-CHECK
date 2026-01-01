import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
      </Link>
      <h3 style={{ margin: '0.5rem 0' }}>{product.title}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>${product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        style={{ padding: '0.5rem 1rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
