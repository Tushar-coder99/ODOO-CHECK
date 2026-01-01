import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 299,
    category: "Electronics",
    description: "Premium sound quality with active noise cancellation and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    name: "Smart Fitness Watch Series 5",
    price: 199,
    category: "Wearables",
    description: "Track your health, workouts, and sleep with advanced sensors and GPS.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 450,
    category: "Furniture",
    description: "Designed for comfort and productivity with adjustable lumbar support.",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    price: 129,
    category: "Gaming",
    description: "RGB backlit keys with custom mechanical switches for ultimate precision.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending Products</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Check out what's hot this week. These products are flying off the shelves!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;