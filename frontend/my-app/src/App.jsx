import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ... other imports
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import ProductList from './pages/ProductList';
import NotFound from './pages/NotFound';

// --- IMPORT WISHLIST HERE ---
import Wishlist from './pages/Wishlist'; // <--- ADD THIS

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />

            {/* --- ADD THE ROUTE HERE --- */}
            <Route path="/wishlist" element={<Wishlist />} /> 

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff', marginTop: 'auto' }}>
          <p>&copy; {new Date().getFullYear()} MyShop E-Commerce. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;