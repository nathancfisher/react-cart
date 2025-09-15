import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />}>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="/:id" element={<p>Product</p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
