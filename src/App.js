import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />}>
          <Route path="cart" element={<p>Cart</p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
