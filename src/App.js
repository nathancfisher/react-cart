import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SpinnerFullPage from "./pages/SpinnerFullPage";
import Cart from "./components/Cart";
import SelectedProduct from "./components/SelectedProduct";

const Shop = lazy(() => import("./pages/Shop"));

function App() {
  const [cart, setCart] = useState([]);

  // add to cart
  function handleAddToCart(product, amount = 1) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
      );
      return;
    }
    setCart([...cart, { ...product, quantity: amount }]);
  }

  // remove from cart
  function handleRemoveFromCart(product, amount = 1) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (!existingItem) {
      return;
    }

    if (existingItem.quantity === amount) {
      setCart(cart.filter((item) => item.id !== product.id));
      return;
    }

    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - amount }
          : item
      )
    );
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route
            path="/"
            element={<Shop onAddToCart={handleAddToCart} cart={cart} />}
          >
            <Route
              path="cart"
              element={
                <Cart
                  cart={cart}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              }
            ></Route>
            <Route
              path="/:id"
              element={<SelectedProduct onAddToCart={handleAddToCart} />}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
