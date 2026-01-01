import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]); // {id, name, price, image, quantity}

  const addToCart = (product, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const setQuantity = (id, quantity) => {
    setItems(prev =>
      prev
        .map(i => (i.id === id ? { ...i, quantity } : i))
        .filter(i => i.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const totals = useMemo(() => {
    const count = items.reduce((s, i) => s + i.quantity, 0);
    const amount = items.reduce((s, i) => s + i.quantity * Number(i.price || 0), 0);
    return { count, amount };
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, setQuantity, clearCart, totals }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
