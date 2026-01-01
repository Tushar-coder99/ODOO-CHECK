import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data';

const ProductList = () => {
  const [params] = useSearchParams();
  const q = (params.get('q') || '').toLowerCase();

  const filtered = products.filter((p) => {
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="page">
      <div className="page-head">
        <h2>All Products</h2>
        <p className="muted">{filtered.length} items</p>
      </div>

      <div className="grid">
        {filtered.map((product) => (
          <div key={product.id} className="card">
            <Link to={`/product/${product.id}`} className="card-media">
              <img src={product.image} alt={product.name} />
            </Link>

            <div className="card-body">
              <div className="pill">{product.category}</div>
              <h3 className="card-title">{product.name}</h3>

              <div className="row">
                <span className="price">${product.price}</span>
                <Link to={`/product/${product.id}`} className="btn btn-ghost">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
