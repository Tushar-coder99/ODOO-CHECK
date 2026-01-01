import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, Truck, CheckCircle, ShieldCheck } from 'lucide-react';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const subtotal = getCartTotal();
  const shipping = cartItems.length > 0 ? 20 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    // Basic Validation simulation
    if (!formData.address || !formData.cardNumber) {
      alert("Please fill in all required shipping and payment details.");
      return;
    }

    setIsProcessing(true);

    // Simulate API Call delay
    setTimeout(() => {
      setIsProcessing(false);
      clearCart(); // Empty the cart
      alert("Order Placed Successfully! Thank you for shopping with NovaMart.");
      navigate('/'); // Redirect to Home
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <div className="pt-44 pb-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
            <button onClick={() => navigate('/')} className="text-blue-400 hover:text-blue-300 underline">Return to Shop</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-24">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <ShieldCheck className="text-green-500" /> Secure Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT COLUMN: FORMS */}
          <div className="flex-1 space-y-8">
            
            {/* 1. Shipping Information */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <MapPin className="text-blue-500" size={20} /> Shipping Address
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-sm text-gray-400">First Name</label>
                        <input name="firstName" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm text-gray-400">Last Name</label>
                        <input name="lastName" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                    </div>
                    <div className="md:col-span-2 space-y-1">
                        <label className="text-sm text-gray-400">Email Address</label>
                        <input name="email" onChange={handleChange} type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="md:col-span-2 space-y-1">
                        <label className="text-sm text-gray-400">Street Address</label>
                        <input name="address" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="123 Nova Street" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm text-gray-400">City</label>
                        <input name="city" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="New York" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm text-gray-400">Zip Code</label>
                        <input name="zip" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="10001" />
                    </div>
                </form>
            </div>

            {/* 2. Payment Information */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <CreditCard className="text-yellow-400" size={20} /> Payment Method
                </h2>
                <div className="space-y-4">
                     <div className="flex gap-4 mb-4">
                        <button className="flex-1 py-3 border border-blue-500 bg-blue-500/10 text-blue-400 font-bold rounded-lg">Credit Card</button>
                        <button className="flex-1 py-3 border border-slate-700 bg-slate-950 text-gray-400 rounded-lg hover:border-gray-500">PayPal</button>
                        <button className="flex-1 py-3 border border-slate-700 bg-slate-950 text-gray-400 rounded-lg hover:border-gray-500">Apple Pay</button>
                     </div>

                     <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm text-gray-400">Cardholder Name</label>
                            <input name="cardName" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" placeholder="John Doe" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm text-gray-400">Card Number</label>
                            <input name="cardNumber" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm text-gray-400">Expiry Date</label>
                                <input name="expiry" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" placeholder="MM/YY" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm text-gray-400">CVV</label>
                                <input name="cvv" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" placeholder="123" />
                            </div>
                        </div>
                     </div>
                </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <div className="lg:w-[380px]">
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5 sticky top-44">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                {/* Product List Mini */}
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center">
                            <div className="w-12 h-12 bg-slate-800 rounded-md overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                                <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                            </div>
                            <span className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="h-px bg-slate-700 my-4" />
                
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>Tax (Estimated)</span>
                        <span>$0.00</span>
                    </div>
                </div>

                <div className="h-px bg-slate-700 my-4" />

                <div className="flex justify-between text-xl font-bold text-white mb-6">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>

                <button 
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${isProcessing ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500 shadow-green-600/20'}`}
                >
                    {isProcessing ? (
                        <span>Processing...</span>
                    ) : (
                        <>
                            Place Order <CheckCircle size={20} />
                        </>
                    )}
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
                    <ShieldCheck size={12} /> SSL Secure Payment
                </p>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;