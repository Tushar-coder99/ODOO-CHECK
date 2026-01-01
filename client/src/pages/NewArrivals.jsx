import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: "Silk Blouse", price: 120, image: "https://images.unsplash.com/photo-1518522846467-91bc7d9a384b?q=80&w=1000", isNew: true },
  { id: 2, name: "Linen Suit", price: 350, image: "https://images.unsplash.com/photo-1594938298603-c8148c472997?q=80&w=1000", isNew: true },
  { id: 3, name: "Gold Bracelet", price: 890, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000", isNew: true },
  { id: 4, name: "Evening Dress", price: 450, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000", isNew: true },
  { id: 5, name: "Designer Handbag", price: 550, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000", isNew: true },
  { id: 6, name: "Velvet Heels", price: 180, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000", isNew: true },
  { id: 7, name: "Leather Belt", price: 65, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000", isNew: true },
  { id: 8, name: "Chronograph Watch", price: 250, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000", isNew: true },
];

const NewArrivals = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-44 pb-8 px-4 max-w-[1500px] mx-auto">
        <h1 className="text-4xl font-bold mb-2">New Arrivals</h1>
        <p className="text-gray-400 mb-8">The latest additions to our exclusive collection. Fresh styles, just for you.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewArrivals;