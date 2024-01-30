import { useEffect, useState } from "react";

const useSingleProduct = (productId) => {
  const [productInfo, setProductInfo] = useState(null);
  const getSingleProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const json = await response.json();

    setProductInfo(json);
  };
  useEffect(() => {
    getSingleProduct();
  }, [productId]);

  return productInfo;
};

export default useSingleProduct;
