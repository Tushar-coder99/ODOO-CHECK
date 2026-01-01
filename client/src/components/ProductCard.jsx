import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Eye, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const isWishlisted = isInWishlist(product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-white/5 overflow-hidden"
    >
      <div className="relative h-[300px] w-full overflow-hidden bg-gray-800">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        
        {/* Wishlist Button (Top Right) */}
        <button 
            onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product);
            }}
            className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-pink-500 transition-all z-20"
        >
            <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} className={isWishlisted ? "text-pink-500" : "text-white"} />
        </button>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && <span className="bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">New</span>}
            {product.sale && <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">Sale</span>}
        </div>

        <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
          <button 
            onClick={() => addToCart(product)} 
            className="flex-1 bg-white text-black py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm shadow-lg cursor-pointer"
          >
            <Plus size={16} /> Add to Cart
          </button>
          <button className="p-3 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-black transition-colors border border-white/20">
            <Eye size={18} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs text-blue-500 font-bold uppercase tracking-wider mb-1">{product.category || "Luxury"}</p>
        <h3 className="text-lg font-bold text-white mb-2 truncate">{product.name}</h3>
        <div className="flex items-center gap-2">
            {product.originalPrice && <span className="text-gray-500 text-sm line-through">${product.originalPrice}</span>}
            <span className="text-xl font-bold text-white">${product.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;