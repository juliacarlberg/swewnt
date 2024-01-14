import * as React from "react";
import { createContext, useContext, useState } from "react";
import { Product } from "../models/Product";

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  calculateTotalPrice: () => number;
  removeProduct: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}

interface CartItem extends Product {
  productQuantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      increaseQuantity(existingItem._id);
    } else {
      setCartItems([...cartItems, { ...product, productQuantity: 1 }]);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.productPrice * item.productQuantity,
      0
    );
  };

  const removeProduct = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === productId) {
        return { ...item, productQuantity: item.productQuantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === productId && item.productQuantity > 1) {
        return { ...item, productQuantity: item.productQuantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const cartContextValue: CartContextType = {
    cartItems,
    addToCart,
    calculateTotalPrice,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
