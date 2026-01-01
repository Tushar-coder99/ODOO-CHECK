import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems, isAuthenticated } = useCart();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <div className="pt-44 pb-12 px-4 max-w-[1500px] mx-auto">
        <div className="flex items-center gap-3 mb-8">
            <Heart className="text-pink-500" size={32} fill="currentColor" />
            <h1 className="text-4xl font-bold">My Wishlist</h1>
        </div>

        {!isAuthenticated ? (
            <div className="text-center py-20 bg-slate-900 rounded-2xl border border-white/5">
                <h2 className="text-2xl font-bold mb-4">Please Login</h2>
                <p className="text-gray-400 mb-6">You need to be logged in to save items to your wishlist.</p>
                <Link to="/login" className="bg-blue-600 px-8 py-3 rounded-full font-bold">Login Now</Link>
            </div>
        ) : wishlistItems.length === 0 ? (
            <div className="text-center py-20 bg-slate-900 rounded-2xl border border-white/5">
                <Heart size={60} className="mx-auto text-slate-700 mb-6" />
                <h2 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h2>
                <p className="text-gray-400 mb-6">Start saving your favorite items now!</p>
                <Link to="/" className="bg-blue-600 px-8 py-3 rounded-full font-bold">Start Shopping</Link>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {wishlistItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Wishlist;