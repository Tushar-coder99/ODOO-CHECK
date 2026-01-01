import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const shipping = cartItems.length > 0 ? 20 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-24">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cartItems.length})</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Cart Items List */}
            <div className="lg:w-2/3 space-y-6">
              {cartItems.map((item) => (
                <motion.div 
                  layout
                  key={item.id} 
                  className="bg-slate-900 rounded-2xl p-6 flex gap-6 items-center border border-white/5"
                >
                  <div className="w-24 h-24 bg-slate-800 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-blue-400 font-medium mb-1">{item.category || "General"}</p>
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <p className="text-xl font-bold">${item.price}</p>
                  </div>

                  <div className="flex flex-col items-end gap-4">
                    <div className="flex items-center bg-slate-950 rounded-lg p-1 border border-slate-700">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:text-blue-400 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:text-blue-400 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-500 hover:text-red-400 text-sm flex items-center gap-1 transition-colors"
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-slate-900 rounded-2xl p-8 border border-white/5 sticky top-44">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-slate-700 my-4" />
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/checkout')} 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 group"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900 rounded-3xl border border-white/5 border-dashed">
            <div className="bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={40} className="text-slate-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-slate-400 mb-8">Looks like you haven't added anything yet.</p>
            <Link to="/" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Start Shopping <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;