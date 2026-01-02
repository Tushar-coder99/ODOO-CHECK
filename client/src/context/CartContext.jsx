import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // --- 1. CHECK IF USER IS ALREADY LOGGED IN ---
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // --- 2. REGISTER FUNCTION ---
  const register = async (name, email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      });
      
      if (res.data) {
        toast.success("Account created! Please Log In.");
        return true; // Success
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
      return false;
    }
  };

  // --- 3. LOGIN FUNCTION ---
  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      if (res.data.token) {
        // Save to Local Storage
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        
        // Update State
        setToken(res.data.token);
        setUser(res.data.user);
        setIsAuthenticated(true);
        
        toast.success(`Welcome back, ${res.data.user.name}!`);
        return true;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
      return false;
    }
  };

  // --- 4. LOGOUT FUNCTION ---
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setCartItems([]);
    setWishlistItems([]);
    toast.success("Logged out successfully");
  };

  // --- CART ACTIONS ---
  const addToCart = (product) => {
    if (!isAuthenticated) {
      toast.error("Please log in to add items to cart");
      return;
    }

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    toast.success(`${product.name} added to Cart!`);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success("Item removed from Cart");
  };

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };

  const clearCart = () => setCartItems([]);

  // --- WISHLIST ACTIONS ---
  const toggleWishlist = (product) => {
    if (!isAuthenticated) {
      toast.error("Please log in to use Wishlist");
      return;
    }

    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        toast.success("Removed from Wishlist");
        return prev.filter((item) => item.id !== product.id);
      } else {
        toast.success("Added to Wishlist");
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  const getCartCount = () => cartItems.reduce((total, item) => total + item.quantity, 0);
  const getWishlistCount = () => wishlistItems.length;
  const getCartTotal = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        wishlistItems, 
        isAuthenticated,
        user,
        register, // <--- Export Register
        login,    // <--- Export Login
        logout,
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        toggleWishlist,
        isInWishlist,
        getCartCount, 
        getWishlistCount,
        getCartTotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);