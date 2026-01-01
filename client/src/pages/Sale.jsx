import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const saleProducts = [
  { id: 1, name: "Running Shoes", price: 89, originalPrice: 150, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000", sale: true },
  { id: 2, name: "Denim Jacket", price: 65, originalPrice: 120, image: "https://images.unsplash.com/photo-1551534769-b0f9598fd4b3?q=80&w=1000", sale: true },
  { id: 3, name: "Wool Scarf", price: 25, originalPrice: 55, image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000", sale: true },
  { id: 4, name: "Leather Wallet", price: 40, originalPrice: 80, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000", sale: true },
  { id: 5, name: "Wireless Earbuds", price: 49, originalPrice: 99, image: "https://images.unsplash.com/photo-1572569028738-411a561033f4?q=80&w=1000", sale: true },
  { id: 6, name: "Yoga Mat", price: 15, originalPrice: 30, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1000", sale: true },
  { id: 7, name: "Blender 5000", price: 55, originalPrice: 89, image: "https://images.unsplash.com/photo-1570222094114-28a9d8896b74?q=80&w=1000", sale: true },
  { id: 8, name: "Smart Lamp", price: 20, originalPrice: 45, image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000", sale: true },
];

const Sale = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* HEADER BANNER */}
      <div className="pt-40 pb-12 text-center bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <h1 className="text-5xl font-bold mb-2">Clearance Sale</h1>
        <p className="text-red-100 text-lg">Up to 70% Off. Limited Stock Only.</p>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR FILTERS (Visual Only) */}
        <div className="hidden md:block w-64 flex-shrink-0">
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            <div className="space-y-4 text-sm text-gray-300">
                <div>
                    <h4 className="font-bold text-white mb-2">Department</h4>
                    <ul className="space-y-1 pl-2">
                        <li><label className="flex items-center gap-2"><input type="checkbox" /> Electronics</label></li>
                        <li><label className="flex items-center gap-2"><input type="checkbox" /> Fashion</label></li>
                        <li><label className="flex items-center gap-2"><input type="checkbox" /> Home</label></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">Price Range</h4>
                    <ul className="space-y-1 pl-2">
                        <li><label className="flex items-center gap-2"><input type="checkbox" /> Under $25</label></li>
                        <li><label className="flex items-center gap-2"><input type="checkbox" /> $25 - $50</label></li>
                        <li><label className="flex items-center gap-2"><input type="checkbox" /> $50 - $100</label></li>
                        <li><label className="flex items-center gap-2"><input type="checkbox" /> Over $100</label></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="flex-1">
             <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400">Showing {saleProducts.length} Results</span>
                <select className="bg-slate-800 border border-slate-700 rounded px-3 py-1 text-sm focus:outline-none">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {saleProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Sale;