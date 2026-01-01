import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product Not Found</h2>;

  return (
    <div className="page">
      <Link to="/" className="back-link">← Back to Products</Link>

      <div className="detail">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <div className="pill">{product.category}</div>
          <h1>{product.name}</h1>
          <p className="price big">${product.price}</p>
          <p className="muted">{product.description}</p>

          <div className="actions">
            <button className="btn" onClick={() => addToCart(product, 1)}>
              Add to Cart
            </button>
            <Link className="btn btn-ghost" to="/cart">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
