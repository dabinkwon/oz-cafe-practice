import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (options,quantity,id)=>{
    setCart(prevCart=>[...prevCart,{options, quantity, id}])
  }

  const removeFromCart = (id)=>{
    setCart(cart.filter(el=>id!==el.id));
  }

  return (
    <CartContext.Provider value={{ cart,addToCart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if(!context){
    throw new Error('useCart훅은 CartProvider 안에서만 사용할 수 있습니다!')
  }
  return context;
};
