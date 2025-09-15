import { Link } from "react-router-dom";
import "./DetailsButton.css";
function DetailsButton({ id }) {
  return (
    <Link to={`${id}`} className="product__button--details">
      Details
    </Link>
  );
}

export default DetailsButton;
