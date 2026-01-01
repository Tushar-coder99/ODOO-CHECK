import { useParams } from 'react-router-dom';
import { products } from '../data';

const ProductDetail = () => {
  const { id } = useParams(); // Get ID from URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product Not Found</h2>;

  return (
    <div className="section detail-container">
      <div className="detail-image">
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '12px' }} />
      </div>
      <div className="detail-info">
        <span style={{ background: '#e2e8f0', padding: '5px 10px', borderRadius: '4px', fontSize: '0.9rem' }}>
          {product.category}
        </span>
        <h1>{product.name}</h1>
        <p className="card-price" style={{ fontSize: '2rem', margin: '1rem 0' }}>${product.price}</p>
        <p className="detail-desc">{product.description}</p>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn">Add to Cart</button>
          <button className="btn" style={{ background: '#64748b' }}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
