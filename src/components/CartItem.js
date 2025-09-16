import { useCart } from "../hooks/CartProvider";
import "./CartItem.css";
import QuantityButtons from "./QuantityButtons";

function CartItem({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="cart__item">
      <div className="cart__item--image-wrapper">
        <img
          className="cart__item--image"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="cart__item--details">
        <div className="cart__item--header">
          <div className="cart__item--tags">
            <p className="cart__item--name">{product.name}</p>
            <p className="cart__item--price">
              ${product.price * product.quantity}
            </p>
          </div>

          <p className="cart__item--size">{product.category}</p>
        </div>

        <div className="cart__item--actions">
          <QuantityButtons
            quantity={product.quantity}
            onQuantityIncrement={() =>
              dispatch({ type: "cart/add", payload: { product, quantity: 1 } })
            }
            onQuantityDecrement={() =>
              dispatch({
                type: "cart/remove",
                payload: { product, quantity: 1 },
              })
            }
          />

          <button
            type="button"
            className="cart__item--remove"
            onClick={() =>
              dispatch({
                type: "cart/remove",
                payload: { product, quantity: product.quantity },
              })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
