import CartItem from "../components/CartItem";
import "./Cart.css";
import CartCheckout from "../components/CartCheckout";
import CloseButton from "../components/CloseButton";
function Cart({ cart, onAddToCart, onRemoveFromCart }) {
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
          cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))
        )}
      </div>

      <CartCheckout cart={cart} />
    </section>
  );
}

export default Cart;
