import { useState } from "react";
import "./Product.css";
import ProductButtons from "./ProductButtons";
import DetailsButton from "./DetailsButton";

function Product({ product, className }) {
  const { name, price, image } = product;

  const [hover, setHover] = useState(false);

  return (
    <div
      className={`shop__product ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={name} className="product__image" />

      <div className="product__details">
        <p className="product__title">{name}</p>
        <p className="product__price">${price}</p>
      </div>

      {hover && (
        <>
          <ProductButtons product={product} />
          <DetailsButton product={product} />
        </>
      )}
    </div>
  );
}

export default Product;
