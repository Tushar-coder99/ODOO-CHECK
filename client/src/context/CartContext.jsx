import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  
  // Auth State (Will be replaced by real backend token later)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // --- AUTH ACTIONS ---
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    toast.success(`Welcome back, ${userData.name}!`);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
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
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
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

  const clearCart = () => {
    setCartItems([]);
  };

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

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  // --- GETTERS ---
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
        login,
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