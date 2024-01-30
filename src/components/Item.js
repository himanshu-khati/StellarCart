import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const Item = ({ productInfo }) => {
  if (!productInfo) return null;
  return (
    <div className="w-3/12 my-4 ">
      <div className="flex  flex-col justify-center items-center mx-4 border">
        <Link to={`/product/${productInfo.id}`}>
          <div className=" w-full flex justify-center items-center rounded-xxl ">
            <img
              src={productInfo.image}
              alt=""
              className="w-[250px] h-[300px]  p-14 hover:scale-105 hover:transition-all hover:duration-75 hover:ease-linear"
            />
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
