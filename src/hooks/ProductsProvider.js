import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const [params] = useSearchParams();
  const search = params.get("search");

  const filteredProducts = products.filter((product) => {
    return search?.length === 0
      ? products
      : product.name.toLowerCase().includes(search?.toLowerCase());
  });

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, filteredProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsProvider, useProducts };
