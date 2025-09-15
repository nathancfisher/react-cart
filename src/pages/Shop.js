import { Outlet } from "react-router-dom";
import "./Shop.css";
import Nav from "../components/Nav";
import Search from "../components/Search";
import CartButton from "../components/CartButton";
import Products from "../components/Products";

function Shop({ onAddToCart, cart }) {
  return (
    <main className="shop">
      <Nav>
        <Search />
        <CartButton cart={cart} />
      </Nav>

      <Products onAddToCart={onAddToCart} />

      <Outlet />
    </main>
  );
}

export default Shop;
