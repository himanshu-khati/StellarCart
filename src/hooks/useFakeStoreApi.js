import { useEffect, useState } from "react";
import { FAKESTORE_URL } from "../utils/constants";
const useFakeStoreApi = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    try {
      const response = await fetch(FAKESTORE_URL);
      if (!response.ok) {
        throw new Error(`Error fetching product: ${response.status}`);
      }
      const json = await response.json();

      setProducts(json);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return { products, error };
};
export default useFakeStoreApi;
