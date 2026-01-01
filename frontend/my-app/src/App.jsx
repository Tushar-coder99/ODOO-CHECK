import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Layout Components ---
import Navbar from './components/Navbar';

// --- Page Imports ---
// Public Pages
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Authentication Pages
import Login from './pages/Login';
import Register from './pages/Register';

// Shopping & Transaction Pages
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// User Account Pages
import Profile from './pages/Profile';
import Orders from './pages/Orders';

// Import CSS (Keep your existing styles)
import './App.css'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Navigation Bar - Visible on all pages */}
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Main Content Area */}
        <main style={{ flex: 1 }}>
          <Routes>
            {/* 1. Public Routes */}
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/products" element={<ProductList searchTerm={searchTerm} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* 2. Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            

            {/* 3. Shopping Routes */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          

            {/* 4. Protected User Routes (Profile & History) */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />

            {/* 5. Error Handling - Catch all unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff', marginTop: 'auto' }}>
          <p>&copy; {new Date().getFullYear()} MyShop E-Commerce. All rights reserved.</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;
