import "./Products.css";
import Product from "./Product";
import { useProducts } from "../hooks/ProductsProvider";

function Products() {
  const { filteredProducts } = useProducts();

  return (
    <section className={`shop__products`}>
      {filteredProducts.map((product, i) => {
        return (
          <Product
            key={product.id}
            product={product}
            className={i % 5 === 3 || i % 5 === 4 ? "span-3-col" : "span-2-col"}
          />
        );
      })}
    </section>
  );
}

export default Products;
