import { createContext, useContext, useMemo, useReducer } from "react";

import {
  findItemInCart,
  removeItemFromCart,
  updateItemInCart,
} from "../utils/CartUtils";

const CartContext = createContext();

function CartReducer(state, { type, payload }) {
  switch (type) {
    case "cart/add":
      // existing item increment
      if (findItemInCart(state.cart, payload.product.id)) {
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
          { ...payload.product, quantity: payload.quantity },
        ],
      };

    case "cart/remove":
      if (findItemInCart(state.cart, payload.product.id)) {
        return payload.product.quantity === payload.quantity
          ? {
              ...state,
              cart: removeItemFromCart(state.cart, payload.product.id),
            }
          : {
              ...state,
              cart: updateItemInCart(
                state.cart,
                payload.product.id,
                -payload.quantity
              ),
            };
      }
      return state;
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const initialState = useMemo(
    () => ({
      cart: [],
    }),
    []
  );

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
