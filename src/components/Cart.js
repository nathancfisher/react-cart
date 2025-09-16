import CartItem from "../components/CartItem";
import "./Cart.css";
import CartCheckout from "../components/CartCheckout";
import CloseButton from "../components/CloseButton";
import { useCart } from "../hooks/CartProvider";
function Cart() {
  const { cart } = useCart();

  return (
    <section className="cart">
      <header className="cart__header">
        <p className="cart__title">Your cart</p>
        <CloseButton />
      </header>
      <div className="cart__items">
        {cart.length === 0 ? (
          <p className="cart__empty">Your cart is empty</p>
        ) : (
          cart.map((product) => <CartItem key={product.id} product={product} />)
        )}
      </div>

      <CartCheckout />
    </section>
  );
}

export default Cart;
