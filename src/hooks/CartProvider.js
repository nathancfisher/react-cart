import { createContext, useContext, useReducer } from "react";

import {
  findItemInCart,
  removeItemFromCart,
  updateItemInCart,
} from "../utils/CartUtils";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function CartReducer(state, { type, payload }) {
  switch (type) {
    case "cart/add":
      // existing item increment
      if (findItemInCart(state.cart, payload.product.id)) {
        console.log("HELLO");
        return {
          ...state,
          cart: updateItemInCart(
            state.cart,
            payload.product.id,
            payload.quantity
          ),
        };
      }
      // new item
      return {
        ...state,
        cart: [
          ...state.cart,
          { product: payload.product, quantity: payload.quantity },
        ],
      };

    case "cart/remove":
      if (findItemInCart(state.cart, payload.product.id)) {
        return payload.product.quantity === 1
          ? {
              ...state,
              cart: removeItemFromCart(state.cart, payload.product.id),
            }
          : {
              ...state,
              cart: updateItemInCart(state.cart, payload.product.id, -1),
            };
      }
      return state;
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
