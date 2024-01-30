import { useEffect, useState } from "react";

const useFakeStoreApi = () => {
  const [products, setProducts] = useState(null);
  const getAllProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=20");
    const json = await response.json();
    setProducts(json);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return products;
};
export default useFakeStoreApi;
