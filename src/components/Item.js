import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { addItem } from "../utils/cartSlice";
import { toast } from "react-toastify";

const Item = ({ productInfo }) => {
  const dispatch = useDispatch();
  const notify = () => toast("Added To Cart");

  const handleAddToCart = (data, event) => {
    event.preventDefault();
    dispatch(addItem(data));
    notify();
  };
  if (!productInfo) return null;
  return (
    <div className="w-full lg:w-3/12 my-4 border-b lg:border-none ">
      <div className="flex  flex-col justify-center items-center mx-4 ">
        <Link to={`/product/${productInfo.id}`}>
          <div className=" w-full flex justify-center group items-center rounded-xxl relative ">
            <img
              src={productInfo.image}
              alt=""
              className="w-[250px] h-[300px]  p-14  group-hover:scale-105 transition-all duration-75 group-hover:ease-linear"
            />
            <div className="overlay absolute top-0 left-0 h-full w-full bg-opacity-0  group-hover:flex group-hover:bg-opacity-20  transition-all duration-75 justify-center items-end  ">
              <button
                className=" border  px-4 bg-[#a749ff] hover:transition-all hover:duration-500 transition-all duration-500 hover:bg-gray-800 text-white py-2 hidden group-hover:flex "
                onClick={(event) => handleAddToCart(productInfo, event)}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="font-poppins text-base flex flex-col py-3 items-center gap-2 mt-2">
            <p>{productInfo.title.substr(0, 20)}...</p>

            <ReactStars
              count={5}
              value={productInfo.rating.rate}
              size={25}
              edit={false}
            />
            <p className="font-semibold text-base">${productInfo.price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
