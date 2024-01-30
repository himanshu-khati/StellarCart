import React, { useEffect } from "react";
import useSingleProduct from "../hooks/useSingleProduct";
import ReactStars from "react-stars";
import { addItem } from "../utils/cartSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductLayout = () => {
  const { productId } = useParams();
  const productInfo = useSingleProduct(productId);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = (e) => {
    e.preventDefault();
    if (!productInfo) {
      console.error("Product information is not available");
      return;
    }
    dispatch(addItem(productInfo));
  };

  if (!productInfo) return null;

  const { title, price, description, category, image, rating } = productInfo;

  return (
    <div className="w-full border border-red-700 p-10 flex">
      <div className="w-6/12 border flex justify-center items-center p-5">
        <img src={image} alt="" className="h-[400px] p-14" />
      </div>
      <div className="w-6/12 border p-5 font-poppins flex flex-col gap-4">
        <h1 className="text-2xl">{title}</h1>
        <h2 className="text-2xl text-[#fe5252]">${price}</h2>
        <ReactStars count={5} value={rating.rate} size={25} edit={false} />
        <p className="text-sm ">{description}</p>
        <hr />
        <button
          className="border border-[#333] inline-block p-4 w-5/12 mt-4 hover:bg-[#a749ff] hover:text-white hover:border-[#a749ff]  "
          onClick={addToCart}
        >
          ADD TO CART
        </button>
        <p className="text-gray-500">Categories: {category}</p>
      </div>
    </div>
  );
};

export default ProductLayout;
