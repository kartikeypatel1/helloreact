import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    // Add item to array
    setItems(prev => [...prev, item]);
    // Update total
    setTotal(prev => prev + item.price);
  };

  return (
    <CartContext.Provider value={{ items, total, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
