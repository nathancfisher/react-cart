import { useState } from "react";
import "./ProductButtons.css";

function ProductButtons() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity === 0) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className="product__buttons">
      <div className="product__buttons--quantity">
        <button
          className="product__button--minus"
          onClick={() => handleQuantityDecrement()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <p className="product__quantity">{quantity}</p>
        <button
          className="product__button--plus"
          onClick={() => handleQuantityIncrement()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <button className="product__button--add">Add to cart</button>
    </div>
  );
}

export default ProductButtons;
