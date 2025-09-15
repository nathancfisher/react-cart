import { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import { useSearchParams } from "react-router-dom";
import SectionLoader from "./SectionLoader";

function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const [params] = useSearchParams();
  const search = params.get("search");

  const filteredProducts = products.filter((product) => {
    return search?.length === 0
      ? products
      : product.name.toLowerCase().includes(search?.toLowerCase());
  });

  return (
    <section className={`shop__products ${loading ? "" : "fadeIn"}`}>
      {loading ? (
        <SectionLoader />
      ) : (
        filteredProducts.map((product, i) => {
          return (
            <Product
              onAddToCart={onAddToCart}
              key={product.id}
              product={product}
              className={
                i % 5 === 3 || i % 5 === 4 ? "span-3-col" : "span-2-col"
              }
            />
          );
        })
      )}
    </section>
  );
}

export default Products;
