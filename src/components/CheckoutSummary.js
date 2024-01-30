import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutSummary = ({ totals }) => {
  const { totalProducts, grandTotal } = totals;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = () => toast("Order Sucessfully Placed!");

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    navigate("/");
    notify();
  };
  return (
    <div className=" w-full p-4 lg:w-6/12  flex flex-col font-poppins mx-auto lg:p-8">
      <h2 className="text-2xl mb-4 ">Your Order</h2>
      <div className="w-full border p-7 flex flex-col gap-5 bg-[#f0e0ff]">
        <p className=" flex justify-between border-b border-gray-400  py-5">
          Total products <span>{totalProducts}</span>{" "}
        </p>
        <p className=" flex justify-between border-b border-gray-400  py-5">
          Shipping <span>Free Shipping</span>
        </p>
        <hr />
        <p className="font-semibold text-lg flex justify-between   py-5">
          Total Amount <span className="text-[#a749ff]">${grandTotal}</span>
        </p>
      </div>
      <button
        className="border w-full p-3 my-10  rounded-full bg-[#a749ff] text-white hover:bg-gray-800 "
        onMouseDown={handlePlaceOrder}
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default CheckoutSummary;
