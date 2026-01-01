import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import OrderSuccess from "./pages/OrderSuccess";

import { ShopProvider } from "./context/ShopContext";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ShopProvider>
      <Router>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="appMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<ProductList searchTerm={searchTerm} />}
            />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </main>
      </Router>
    </ShopProvider>
  );
};

export default App;
