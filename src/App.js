import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SpinnerFullPage from "./pages/SpinnerFullPage";
import Cart from "./components/Cart";
import SelectedProduct from "./components/SelectedProduct";
import { CartProvider } from "./hooks/CartProvider";
import { ProductsProvider } from "./hooks/ProductsProvider";

const Shop = lazy(() => import("./pages/Shop"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <CartProvider>
          <ProductsProvider>
            <Routes>
              <Route path="/" element={<Shop />}>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="/:id" element={<SelectedProduct />}></Route>
              </Route>
            </Routes>
          </ProductsProvider>
        </CartProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
