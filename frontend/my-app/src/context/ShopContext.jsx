import { createContext, useEffect, useState } from "react";
import { products } from "../data";

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({}); // {id: {product, quantity}}

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || {};
    setCartItems(stored);
  }, []);

  // Persist cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId, quantity = 1) => {
    const product = products.find((p) => p._id === itemId);
    if (!product) return;

    setCartItems((prev) => {
      const existing = prev[itemId];
      const newQty = (existing?.quantity || 0) + quantity;
      return {
        ...prev,
        [itemId]: { product, quantity: newQty },
      };
    });
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      if (quantity <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return {
        ...prev,
        [itemId]: { ...prev[itemId], quantity },
      };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const copy = { ...prev };
      delete copy[itemId];
      return copy;
    });
  };

  const clearCart = () => setCartItems({});

  const cartItemsArray = Object.values(cartItems); // convenience for mapping
  const cartTotal = cartItemsArray.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const contextValue = {
    cartItems,
    cartItemsArray,
    cartTotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
