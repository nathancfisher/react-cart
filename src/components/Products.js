import { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <section className="shop__products">
      {products.map((product, i) => (
        <Product
          key={product.id}
          product={product}
          className={i % 5 === 3 || i % 5 === 4 ? "span-3-col" : "span-2-col"}
        />
      ))}
    </section>
  );
}

export default Products;
