import { Outlet } from "react-router-dom";
import "./Shop.css";
import Nav from "../components/Nav";
import Search from "../components/Search";
import CartButton from "../components/CartButton";

function Shop() {
  return (
    <main className="shop">
      <Nav>
        <Search />
        <CartButton />
      </Nav>

      <section className="shop__products">
        <p>Products</p>
      </section>
      <Outlet />
    </main>
  );
}

export default Shop;
