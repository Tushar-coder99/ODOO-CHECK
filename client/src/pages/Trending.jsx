import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: "Smart Watch Series", price: 399, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000", category: "Tech" },
  { id: 2, name: "Pro Camera Lens", price: 899, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000", category: "Photography" },
  { id: 3, name: "Designer Tote", price: 250, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000", category: "Fashion" },
  { id: 4, name: "Wireless Headphones", price: 199, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000", category: "Audio" },
  { id: 5, name: "Ergonomic Chair", price: 299, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000", category: "Furniture" },
  { id: 6, name: "Vintage Camera", price: 450, image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?q=80&w=1000", category: "Photography" },
  { id: 7, name: "Minimalist Desk", price: 150, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000", category: "Furniture" },
  { id: 8, name: "Drone 4K", price: 750, image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=1000", category: "Tech" },
];

const Trending = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-44 pb-8 px-4 max-w-[1500px] mx-auto">
        <h1 className="text-4xl font-bold mb-2">Trending Now</h1>
        <p className="text-gray-400 mb-8">What everyone is talking about this week. Bestsellers across categories.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trending;