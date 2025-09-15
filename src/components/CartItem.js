import "./CartItem.css";
import QuantityButtons from "./QuantityButtons";
function CartItem() {
  return (
    <div className="cart__item">
      <div className="cart__item--image-wrapper">
        <img
          className="cart__item--image"
          src="https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?_gl=1*ofvp3z*_ga*NzIxMDU2NjUyLjE3NTUxMjQ0NDg.*_ga_8JE65Q40S6*czE3NTc4NzgyNDIkbzYkZzEkdDE3NTc4Nzg2ODMkajU5JGwwJGgw"
          alt="T-Shirt"
        />
      </div>
      <div className="cart__item--details">
        <div className="cart__item--header">
          <div className="cart__item--tags">
            <p className="cart__item--name">Classic T-Shirt</p>
            <p className="cart__item--price">$25.00</p>
          </div>

          <p className="cart__item--size">Size M</p>
        </div>

        <div className="cart__item--actions">
          <QuantityButtons />

          <button type="button" className="cart__item--remove">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
