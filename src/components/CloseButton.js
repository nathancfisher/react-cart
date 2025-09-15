import { Link } from "react-router-dom";
import "./CloseButton.css";

function CloseButton({ className }) {
  return (
    <Link to={"/"} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="close"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </Link>
  );
}

export default CloseButton;
