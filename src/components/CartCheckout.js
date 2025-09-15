import "./CartCheckout.css";

function CartCheckout({ cart }) {
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const tax = total * 0.25;

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

      <button className="cart__checkout--button">Checkout</button>
    </footer>
  );
}

export default CartCheckout;
