import { useState } from "react";
import "./ProductButtons.css";
import QuantityButtons from "./QuantityButtons";
import { useCart } from "../hooks/CartProvider";

function ProductButtons({ product, setAdded }) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const handleQuantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity === 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className="product__buttons">
      <QuantityButtons
        quantity={quantity}
        onQuantityIncrement={handleQuantityIncrement}
        onQuantityDecrement={handleQuantityDecrement}
      />
      <button
        className="product__button--add"
        onClick={() => {
          setAdded(true);
          dispatch({
            type: "cart/add",
            payload: { product: product, quantity: quantity },
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductButtons;
