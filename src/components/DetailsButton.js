import { Link } from "react-router-dom";
import "./DetailsButton.css";
function DetailsButton({ product, onSelectProduct }) {
  const { id } = product;

  return (
    <Link
      to={`${id}`}
      className="product__button--details"
      // onClick={() => onSelectProduct(product)}
    >
      Details
    </Link>
  );
}

export default DetailsButton;
