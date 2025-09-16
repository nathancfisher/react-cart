import { useEffect, useState } from "react";
import "./Product.css";
import ProductButtons from "./ProductButtons";
import DetailsButton from "./DetailsButton";
import ProductInCart from "./ProductInCart";
import { wait } from "../utils/ProductUtils";
import AddOveraly from "./AddOveraly";

function Product({ product, className }) {
  const { name, price, image } = product;

  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    async function addAnimation() {
      wait(2).then(() => setAdded(false));
    }

    addAnimation();
  }, [added, setAdded]);

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
          <ProductButtons product={product} setAdded={setAdded} />
          <DetailsButton product={product} />
          <ProductInCart product={product} />
        </>
      )}

      {added && <AddOveraly />}
    </div>
  );
}

export default Product;
