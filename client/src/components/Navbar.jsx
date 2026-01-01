import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, ChevronDown, Monitor, Shirt, Armchair, Plane, Utensils, ShoppingBag, Tv, Heart, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// --- DATA ---
const navCategories = [
  {
    id: 'fashion',
    label: 'Fashion',
    icon: <Shirt size={24} className="text-yellow-400" />,
    sections: [
      { title: 'Men', items: ['T-Shirts', 'Jeans', 'Sneakers', 'Watches'] },
      { title: 'Women', items: ['Dresses', 'Handbags', 'Jewelry', 'Heels'] },
      { title: 'Kids', items: ['School Uniforms', 'Shoes', 'Toys'] }
    ]
  },
  {
    id: 'home',
    label: 'Home & Furniture',
    icon: <Armchair size={24} className="text-green-400" />,
    sections: [
      { title: 'Furniture', items: ['Sofas', 'Beds', 'Dining Tables', 'Wardrobes'] },
      { title: 'Decor', items: ['Wall Art', 'Lighting', 'Curtains', 'Rugs'] },
      { title: 'Kitchen', items: ['Cookware', 'Dinnerware', 'Containers'] }
    ]
  },
  {
    id: 'electronics',
    label: 'Electronics',
    icon: <Monitor size={24} className="text-blue-400" />, 
    sections: [
      { title: 'Computers', items: ['Laptops', 'Desktops', 'Monitors', 'Tablets'] },
      { title: 'Mobile', items: ['Smartphones', 'Accessories', 'Power Banks'] },
      { title: 'Audio', items: ['Headphones', 'Speakers', 'Soundbars'] }
    ]
  },
  {
    id: 'tv-appliances',
    label: 'TVs & Appliances',
    icon: <Tv size={24} className="text-pink-400" />,
    sections: [
      { title: 'Television', items: ['Smart TVs', '4K UHD', 'OLED', 'Projectors'] },
      { title: 'Home', items: ['Washing Machines', 'Refrigerators', 'Air Conditioners'] },
      { title: 'Kitchen', items: ['Microwaves', 'Mixers', 'Dishwashers'] }
    ]
  },
  {
    id: 'flights',
    label: 'Flight Bookings',
    icon: <Plane size={24} className="text-cyan-400" />,
    sections: [
      { title: 'Domestic', items: ['One Way', 'Round Trip'] },
      { title: 'International', items: ['Asia', 'Europe', 'Americas'] }
    ]
  },
  {
    id: 'beauty',
    label: 'Beauty & Food',
    icon: <Utensils size={24} className="text-purple-400" />,
    sections: [
      { title: 'Beauty', items: ['Makeup', 'Skincare', 'Fragrances', 'Hair Care'] },
      { title: 'Food', items: ['Snacks', 'Beverages', 'Chocolates'] },
      { title: 'Toys', items: ['Board Games', 'Action Figures', 'Dolls'] }
    ]
  },
  {
    id: 'grocery',
    label: 'Grocery',
    icon: <ShoppingBag size={24} className="text-orange-400" />,
    sections: [
      { title: 'Staples', items: ['Rice', 'Flour', 'Oil', 'Pulses'] },
      { title: 'Snacks', items: ['Biscuits', 'Chips', 'Noodles'] },
      { title: 'Household', items: ['Detergents', 'Cleaners'] }
    ]
  }
];

const searchOptions = [
  "All Categories", "Alexa Skills", "Amazon Devices", "Fashion", "Grocery", "Pharmacy", "Appliances", "Electronics", "Furniture"
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [selectedSearchCategory, setSelectedSearchCategory] = useState("All");
  
  const { getCartCount, getWishlistCount, isAuthenticated, logout, user } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-50 flex flex-col shadow-xl" onMouseLeave={() => setHoveredCategory(null)}>
      
      {/* ROW 1: HEADER */}
      <div className="bg-slate-900 border-b border-white/10 py-3">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 gap-8">
            
            {/* LOGO SECTION - UPDATED TO "NM" */}
            <Link to="/" className="flex-shrink-0 z-50">
              <div className="flex items-center cursor-pointer gap-2">
                {/* Stretched the box slightly to fit two letters nicely */}
                <div className="w-10 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg tracking-tighter">
                  NM
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">NovaMart</span>
              </div>
            </Link>

            {/* SEARCH BAR */}
            <div className="hidden md:flex flex-1 max-w-3xl relative z-[60]">
               <div className="flex w-full relative">
                 <div 
                    className="bg-gray-100 text-gray-700 px-3 py-2 rounded-l-md border-r border-gray-300 flex items-center text-xs font-bold cursor-pointer hover:bg-gray-200 transition-colors relative min-w-[60px] justify-between"
                    onClick={() => setIsSearchDropdownOpen(!isSearchDropdownOpen)}
                 >
                    <span className="truncate max-w-[80px]">{selectedSearchCategory}</span> 
                    <ChevronDown size={12} className="ml-1"/>
                 </div>
                 {isSearchDropdownOpen && (
                    <div className="absolute top-full left-0 w-48 bg-white text-black shadow-xl rounded-md mt-1 border border-gray-200 overflow-y-auto max-h-60 z-[70]">
                        {searchOptions.map((option) => (
                            <div 
                                key={option} 
                                className="px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer"
                                onClick={() => {
                                    setSelectedSearchCategory(option);
                                    setIsSearchDropdownOpen(false);
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                 )}
                 <input type="text" placeholder="Search NovaMart..." className="w-full px-4 py-2 text-black focus:outline-none" />
                 <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 rounded-r-md transition-colors flex items-center justify-center">
                    <Search size={20} />
                 </button>
               </div>
            </div>

            {/* RIGHT ICONS (Auth, Wishlist, Cart) */}
            <div className="hidden md:flex items-center space-x-6 text-white flex-shrink-0">
               
               {/* AUTH SECTION */}
               {isAuthenticated ? (
                 <div className="flex items-center gap-4">
                    <div className="flex flex-col items-start leading-tight">
                        <span className="text-xs text-gray-400">Hello, {user?.name || 'User'}</span>
                        <button onClick={logout} className="text-sm font-bold flex items-center gap-1 hover:text-red-400 transition-colors">
                            Sign Out <LogOut size={14} />
                        </button>
                    </div>
                 </div>
               ) : (
                 <Link to="/login" className="flex flex-col items-start leading-tight hover:text-blue-400 transition-colors">
                    <span className="text-xs text-gray-400">Hello, Sign in</span>
                    <span className="text-sm font-bold">Account & Lists</span>
                 </Link>
               )}

               {/* WISHLIST ICON */}
               <Link to="/wishlist" className="relative hover:text-pink-500 transition-colors">
                  <Heart size={24} />
                  {getWishlistCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-slate-900">
                      {getWishlistCount()}
                    </span>
                  )}
               </Link>

               {/* CART ICON */}
               <Link to="/cart" className="flex items-end hover:text-blue-400 transition-colors relative">
                  <div className="relative">
                    <ShoppingCart size={28} />
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-slate-900">
                      {getCartCount()}
                    </span>
                  </div>
                  <span className="font-bold text-sm mb-1 ml-1">Cart</span>
               </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2: CATEGORIES */}
      <div className="bg-slate-800 text-white py-3 border-b border-white/5 relative z-40">
        <div className="max-w-[1500px] mx-auto px-4 w-full flex items-center justify-between overflow-x-auto no-scrollbar">
            {navCategories.map((category) => (
              <div 
                key={category.id}
                className={`flex-1 flex flex-col items-center gap-1 cursor-pointer transition-all group px-2 border-r border-transparent last:border-0 ${hoveredCategory === category.id ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                onMouseEnter={() => setHoveredCategory(category.id)}
              >
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                    {category.icon}
                </div>
                <span className={`text-xs font-bold whitespace-nowrap flex items-center gap-1 ${hoveredCategory === category.id ? 'text-blue-400' : 'text-white'}`}>
                    {category.label}
                    {category.sections && <ChevronDown size={10} />}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* MEGA MENU */}
      {hoveredCategory && (
          <div 
            className="absolute top-full left-0 w-full bg-white text-slate-900 shadow-2xl z-30 border-t border-gray-200"
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="max-w-[1500px] mx-auto px-8 py-8">
              <div className="grid grid-cols-4 gap-12">
                {navCategories
                  .find((cat) => cat.id === hoveredCategory)
                  ?.sections?.map((section, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                    >
                      <h3 className="text-slate-900 font-bold uppercase tracking-wider mb-4 border-b border-gray-200 pb-2 text-sm">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i}>
                            <Link to="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors block hover:translate-x-1 duration-200">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
      )}

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-900 z-50 top-28 overflow-y-auto border-t border-white/10">
            <div className="p-4 space-y-4 pb-24">
                {navCategories.map(cat => (
                    <div key={cat.id}>
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            {cat.icon} {cat.label}
                        </h3>
                        {cat.sections && (
                            <div className="pl-4 border-l border-white/20">
                                {cat.sections[0].items.slice(0,3).map(item => (
                                    <div key={item} className="text-gray-400 py-1">{item}</div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                 <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
                    <Link to="/wishlist" className="block text-white font-bold">Wishlist ({getWishlistCount()})</Link>
                    <Link to="/cart" className="block text-white font-bold">Cart ({getCartCount()})</Link>
                    {isAuthenticated ? (
                        <button onClick={logout} className="block text-red-400 font-bold">Sign Out</button>
                    ) : (
                        <Link to="/login" className="block text-blue-400 font-bold">Login / Sign Up</Link>
                    )}
                 </div>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;