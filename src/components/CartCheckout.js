import { useEffect, useState } from "react";
import { useCart } from "../hooks/CartProvider";
import { wait } from "../utils/ProductUtils";
import { MoonLoader } from "react-spinners";
import "./CartCheckout.css";

function CartCheckout() {
  const [loading, setLoading] = useState(false);
  const { cart, dispatch } = useCart();

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const tax = total * 0.25;

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    setLoading(true);
    await wait(2).then(() => dispatch({ type: "cart/checkout" }));
    setLoading(false);
  };

  return (
    <footer className="cart__checkout">
      <div className="cart__checkout--tally">
        <div className="cart__checkout--subtotal">
          <p className="cart__checkout--title">Subtotal</p>
          <p className="cart__checkout--price">${(total - tax).toFixed(2)}</p>
        </div>

        <div className="cart__checkout--shipping">
          <p className="cart__checkout--title">Shipping</p>
          <p className="cart__checkout--price">
            {total <= 0 ? "$0.00" : `$${(total * 0.2) / total}`}
          </p>
        </div>

        <div className="cart__checkout--taxes">
          <p className="cart__checkout--title">Taxes</p>
          <p className="cart__checkout--price">${tax.toFixed(2)}</p>
        </div>
      </div>

      <div className="cart__checkout--total">
        <p className="cart__checkout--title">Total</p>
        <p className="cart__checkout--price">${total.toFixed(2)}</p>
      </div>

      <button className="cart__checkout--button" onClick={handleCheckout}>
        {loading ? (
          <MoonLoader color="var(--color-dark)" size={24} />
        ) : (
          "Checkout"
        )}
      </button>
    </footer>
  );
}

export default CartCheckout;
