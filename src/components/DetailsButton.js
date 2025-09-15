import { Link } from "react-router-dom";
import "./DetailsButton.css";
function DetailsButton({ product }) {
  const { id } = product;

  return (
    <Link to={`${id}`} className="product__button--details">
      Details
    </Link>
  );
}

export default DetailsButton;
