import React, { useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();
  const handleContinueShopping = (e) => {
    e.preventDefault();
    navigate("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" min-h-svh lg:min-h-screen  flex flex-col  justify-center items-center gap-4">
      <ShoppingCartIcon className="w-36 h-36 text-[#a749ff]" />
      <h1 className="font-poppins text-2xl">No Items Found In Cart</h1>
      <button
        className=" w-6/12 text-sm lg:text-base  p-2 lg:w-52 lg:p-4 bg-gray-500   hover:bg-[#a749ff] text-white "
        onMouseDown={handleContinueShopping}
      >
        SHOP NOW
      </button>
    </div>
  );
};

export default EmptyCart;
