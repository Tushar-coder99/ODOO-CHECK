import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">NovaMart</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop destination for everything. Quality products, fast delivery, and premium service.
            </p>
          </div>
          
          {['Shop', 'Company', 'Support'].map((section) => (
            <div key={section}>
              <h3 className="text-lg font-bold mb-4 text-white">{section}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Help Center</a></li>
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 NovaMart Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;