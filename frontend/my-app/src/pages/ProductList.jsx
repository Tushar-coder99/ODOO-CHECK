import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const ProductList = () => {
  const { category } = useParams(); // Reads the category from the URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      // If a category exists in URL, filter by it
      const filtered = products.filter((p) => p.category === category);
      setFilteredProducts(filtered);
    } else {
      // If no category (just /products), show all
      setFilteredProducts(products);
    }
  }, [category]);

  // Capitalize first letter for the title
  const title = category 
    ? category.charAt(0).toUpperCase() + category.slice(1) 
    : 'All Products';

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h2 className="section-title">{title}</h2>
      
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No products found in this category.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;