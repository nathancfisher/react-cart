import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useSearch from "./useSearch";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const search = useSearch();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return search?.length === 0
        ? true
        : product.name.toLowerCase().includes(search?.toLowerCase());
    });
  }, [products, search]);

  const value = useMemo(
    () => ({ products, filteredProducts }),
    [products, filteredProducts]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsProvider, useProducts };
