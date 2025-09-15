import { use, useEffect, useState } from "react";
import CloseButton from "../components/CloseButton";
import QuantityButtons from "../components/QuantityButtons";
import "./SelectedProduct.css";
import { useParams } from "react-router-dom";
import SectionLoader from "./SectionLoader";
function SelectedProduct({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity === 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const id = useParams().id;

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:8000/products?id=${id}`);
      const data = await response.json();
      setSelectedProduct(...data);
      setLoading(false);
    }
    fetchProducts();
  }, [id]);

  return (
    <div className="selected__product">
      {loading ? (
        <SectionLoader />
      ) : (
        <>
          <div className="selected__product--img-wrapper">
            <img
              className="selected__product--img"
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />
          </div>
          <div className="selected__product--details">
            <CloseButton className={"selected__product--close"} />

            <div className="selected__product--tags">
              <p className="selected__product--name">{selectedProduct.name}</p>
              <p className="selected__product--price">
                ${selectedProduct.price}
              </p>
            </div>

            <p className="selected__product--description">
              {selectedProduct.description}
            </p>

            <div className="selected__product--actions">
              <button
                className="selected__product--add"
                onClick={() => onAddToCart(selectedProduct, quantity)}
              >
                Add to cart
              </button>
              <QuantityButtons
                quantity={quantity}
                onQuantityIncrement={handleQuantityIncrement}
                onQuantityDecrement={handleQuantityDecrement}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SelectedProduct;
