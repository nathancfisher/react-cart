import { useCart } from "../hooks/CartProvider";
import "./ProductInCart.css";
function ProductInCart({ product }) {
  const { cart } = useCart();

  const count = cart?.find((item) => item.id === product.id)?.quantity;

  return count ? (
    <div className="product__in-cart">
      <p>{count}</p>
    </div>
  ) : null;
}

export default ProductInCart;
