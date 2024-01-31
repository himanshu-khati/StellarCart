import { useEffect, useState } from "react";
import { GETSINGLEPRODUCT_URL } from "../utils/constants";

const useSingleProduct = (productId) => {
  const [productInfo, setProductInfo] = useState(null);
  const [error, setError] = useState(null);

  const getSingleProduct = async () => {
    try {
      const response = await fetch(GETSINGLEPRODUCT_URL(productId));

      if (!response.ok) {
        throw new Error(`Error fetching product: ${response.status}`);
      }

      const json = await response.json();
      setProductInfo(json);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [productId]);

  return { productInfo, error };
};

export default useSingleProduct;
