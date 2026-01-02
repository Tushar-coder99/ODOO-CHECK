import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Ensure you have this or remove it
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { Loader } from 'lucide-react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- 1. FETCH PRODUCTS FROM DATABASE ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Make sure your Server is running on port 5000
        const res = await axios.get('http://localhost:5000/api/products');
        
        // MongoDB uses '_id', but our frontend usually likes 'id'
        const data = res.data.map(product => ({
          ...product,
          id: product._id
        }));
        
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // --- 2. CREATE CATEGORY SECTIONS ---
  // Filter products for "Deals" (if isSale is true)
  const dealsProducts = products.filter(p => p.isSale).slice(0, 4);
  
  // Filter for specific categories
  const fashionProducts = products.filter(p => p.category === 'Fashion').slice(0, 4);
  const electronicProducts = products.filter(p => p.category === 'Electronics').slice(0, 4);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <Loader className="animate-spin text-blue-500" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <div className="pt-28 pb-12 px-4 max-w-7xl mx-auto">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1920" 
            alt="Sale" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Season End Sale</h1>
            <p className="text-xl text-gray-200 mb-8">Up to 70% off on selected items</p>
            <button className="bg-blue-600 w-fit px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* --- DYNAMIC SECTION: HOT DEALS --- */}
      {dealsProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            🔥 Hot Deals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {dealsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* --- DYNAMIC SECTION: ELECTRONICS --- */}
      {electronicProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-6">Top Electronics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {electronicProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* --- DYNAMIC SECTION: FASHION --- */}
      {fashionProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-6">Trending Fashion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {fashionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* --- IF NO PRODUCTS --- */}
      {products.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl text-gray-500">No products found.</h2>
          <p className="text-gray-600">Go to <a href="/admin" className="text-blue-400">Admin Panel</a> to add some!</p>
        </div>
      )}

      {/* Remove Footer if you don't have this component created yet */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;