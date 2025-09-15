import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css";
import CartCheckout from "../components/CartCheckout";
function Cart() {
  return (
    <section className="cart">
      <header className="cart__header">
        <p className="cart__title">Your cart</p>
        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="cart__close"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </header>
      <div className="cart__items">
        {/* <p className="cart__empty">Your cart is empty</p> */}
        <CartItem />
      </div>

      <CartCheckout />
    </section>
  );
}

export default Cart;
