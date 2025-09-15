import "./CartItem.css";
import QuantityButtons from "./QuantityButtons";
function CartItem({ product, onAddToCart, onRemoveFromCart }) {
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
            onQuantityIncrement={() => onAddToCart(product)}
            onQuantityDecrement={() => onRemoveFromCart(product)}
          />

          <button
            type="button"
            className="cart__item--remove"
            onClick={() => onRemoveFromCart(product, product.quantity)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
