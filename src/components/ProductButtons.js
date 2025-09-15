import { useState } from "react";
import "./ProductButtons.css";
import QuantityButtons from "./QuantityButtons";

function ProductButtons() {
  return (
    <div className="product__buttons">
      <QuantityButtons />
      <button className="product__button--add">Add to cart</button>
    </div>
  );
}

export default ProductButtons;
