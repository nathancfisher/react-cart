import { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import SelectedProduct from "./SelectedProduct";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");

  const handleSelectProduct = (id) => {
    if (selectedProductId === id) {
      setSelectedProductId("");
      return;
    }

    setSelectedProductId(id);
  };

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <section
      className={`shop__products ${
        selectedProductId
          ? `selected-column--${(selectedProductId - 1) % 5}`
          : ""
      } ${
        selectedProductId
          ? `selected-row--${Math.floor(selectedProductId / 2)}`
          : ""
      }`}
    >
      {products.map((product, i) => {
        // show selected product
        if (product.id === selectedProductId) {
          return <SelectedProduct key={product.id} product={product} />;
        }

        // show other products
        return (
          <Product
            key={product.id}
            product={product}
            className={i % 5 === 3 || i % 5 === 4 ? "span-3-col" : "span-2-col"}
            onSelectProduct={handleSelectProduct}
          />
        );
      })}
    </section>
  );
}

export default Products;
