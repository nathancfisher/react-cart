import "./CartCheckout.css";

function CartCheckout() {
  return (
    <footer className="cart__checkout">
      <div className="cart__checkout--tally">
        <div className="cart__checkout--subtotal">
          <p className="cart__checkout--title">Subtotal</p>
          <p className="cart__checkout--price">$0.00</p>
        </div>

        <div className="cart__checkout--shipping">
          <p className="cart__checkout--title">Shipping</p>
          <p className="cart__checkout--price">$0.00</p>
        </div>

        <div className="cart__checkout--taxes">
          <p className="cart__checkout--title">Taxes</p>
          <p className="cart__checkout--price">$0.00</p>
        </div>
      </div>

      <div className="cart__checkout--total">
        <p className="cart__checkout--title">Total</p>
        <p className="cart__checkout--price">$0.00</p>
      </div>

      <button className="cart__checkout--button">Checkout</button>
    </footer>
  );
}

export default CartCheckout;
