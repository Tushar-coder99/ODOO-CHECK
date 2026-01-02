import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Plus, Package, DollarSign, Image as ImageIcon, Tag, Type } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: 'Fashion',
    isNewArrival: false,
    isSale: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products/add', product);
      toast.success('Product Added Successfully!');
      // Reset form
      setProduct({
        name: '',
        description: '',
        price: '',
        image: '',
        category: 'Fashion',
        isNewArrival: false,
        isSale: false
      });
    } catch (err) {
      toast.error('Failed to add product');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <div className="pt-44 pb-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Package className="text-blue-500" /> Admin Dashboard: Add Product
        </h1>

        <div className="bg-slate-900 p-8 rounded-2xl border border-white/10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <Type size={16} /> Product Name
              </label>
              <input 
                type="text" 
                name="name" 
                value={product.name} 
                onChange={handleChange} 
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                placeholder="e.g. Wireless Headphones"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <Type size={16} /> Description
              </label>
              <textarea 
                name="description" 
                value={product.description} 
                onChange={handleChange} 
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 min-h-[100px]"
                placeholder="Product details..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <DollarSign size={16} /> Price
                </label>
                <input 
                  type="number" 
                  name="price" 
                  value={product.price} 
                  onChange={handleChange} 
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="99.99"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Tag size={16} /> Category
                </label>
                <select 
                  name="category" 
                  value={product.category} 
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white"
                >
                  <option value="Fashion">Fashion</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Home">Home & Furniture</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Sports">Sports</option>
                  <option value="Grocery">Grocery</option>
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <ImageIcon size={16} /> Image URL
              </label>
              <input 
                type="text" 
                name="image" 
                value={product.image} 
                onChange={handleChange} 
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Checkboxes */}
            <div className="flex gap-8 pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="isNewArrival" 
                  checked={product.isNewArrival} 
                  onChange={handleChange}
                  className="w-5 h-5 accent-blue-600"
                />
                <span className="text-gray-300">New Arrival</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="isSale" 
                  checked={product.isSale} 
                  onChange={handleChange}
                  className="w-5 h-5 accent-red-600"
                />
                <span className="text-gray-300">On Sale</span>
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              <Plus size={20} /> Add Product
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;