import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// Sample Data for "Amazon-like" density
const dealsOfTheDay = [
  { id: 101, name: "Wireless Noise Cancelling Headphones", price: 199, originalPrice: 350, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000", sale: true, category: "Audio" },
  { id: 102, name: "Gaming Console Pro X", price: 450, originalPrice: 599, image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=1000", sale: true, category: "Gaming" },
  { id: 103, name: "Smart Fitness Watch", price: 99, originalPrice: 199, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000", sale: true, category: "Wearables" },
  { id: 104, name: "4K Action Camera", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000", sale: true, category: "Photography" },
];

const bestSellers = [
  { id: 201, name: "Men's Cotton Hoodie", price: 45, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000", category: "Fashion" },
  { id: 202, name: "Leather Office Bag", price: 120, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000", category: "Accessories" },
  { id: 203, name: "Running Sneakers", price: 85, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000", category: "Footwear" },
  { id: 204, name: "Designer Sunglasses", price: 150, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000", category: "Fashion" },
];

const electronics = [
  { id: 301, name: "MacBook Pro 16", price: 2499, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=1000", category: "Laptops" },
  { id: 302, name: "Mechanical Keyboard", price: 120, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000", category: "Peripherals" },
  { id: 303, name: "Gaming Mouse", price: 60, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1000", category: "Gaming" },
  { id: 304, name: "Curved Monitor", price: 350, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000", category: "Monitors" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <div className="pt-44 pb-12 px-4 max-w-[1500px] mx-auto">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1920" 
                alt="Big Sale" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center px-8 md:px-16">
                <span className="text-yellow-400 font-bold tracking-wider uppercase mb-2">Black Friday Deals</span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-lg leading-tight">Up to 70% Off on Electronics</h1>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold w-fit transition-all shadow-lg shadow-blue-600/30">Shop the Sale</button>
            </div>
        </div>
      </div>

      {/* --- SECTION 1: DEALS OF THE DAY --- */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-end mb-6">
            <div>
                <h2 className="text-2xl font-bold text-white">Deals of the Day</h2>
                <p className="text-gray-400 text-sm">Offers expire in 12:30:05</p>
            </div>
            <a href="/sale" className="text-blue-400 hover:text-blue-300 font-bold text-sm">View All Deals &rarr;</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealsOfTheDay.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>

      {/* --- BANNER STRIP --- */}
      <div className="w-full bg-blue-900/30 border-y border-white/5 py-12 mb-16">
         <div className="max-w-[1500px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Join NovaPrime Today</h2>
                <p className="text-blue-200">Get free fast delivery, exclusive access to deals, and more.</p>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-3 rounded-full font-bold shadow-lg">Start Free 30-Day Trial</button>
         </div>
      </div>

      {/* --- SECTION 2: BEST SELLERS --- */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-white">Best Sellers in Fashion</h2>
            <a href="/trending" className="text-blue-400 hover:text-blue-300 font-bold text-sm">See More &rarr;</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>

      {/* --- SECTION 3: ELECTRONICS --- */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-white">Top Rated Electronics</h2>
            <a href="/new-arrivals" className="text-blue-400 hover:text-blue-300 font-bold text-sm">See More &rarr;</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {electronics.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;