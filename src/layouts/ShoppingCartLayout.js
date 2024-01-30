import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrashIcon } from "@heroicons/react/24/solid";
import { clearCart, removeItem } from "../utils/cartSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
const ShoppingCartLayout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const [totals, setTotals] = useState({ totalProducts: 0, grandTotal: 0 });
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { totals } });
  };

  useEffect(() => {
    const totalProducts = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const grandTotal = cartItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    setTotals({ totalProducts, grandTotal });
  }, [cartItems]);

  if (cartItems.length === 0) return null;
  return (
    <div className=" p-2 lg:p-5 w-full">
      <h1 className="font-poppins text-xl  my-5">Your Cart Items</h1>
      <div className="flex justify-center  items-center flex-col">
        <table className="w-full font-poppins border  ">
          <thead className="bg-[#f0e0ff]  ">
            <tr className="table-row tab ">
              <th className="lg:py-5 lg:px-4  text-center text-xs lg:text-base  font-normal ">
                IMAGE
              </th>
              <th className="lg:py-5 lg:px-4  text-center text-xs lg:text-base  font-normal">
                PRODUCT NAME
              </th>
              <th className="hidden lg:table-cell lg:py-5 lg:px-4 text-xs lg:text-base  text-center  font-normal">
                UNIT PRICE
              </th>
              <th className="lg:py-5 lg:px-4 text-xs lg:text-base  text-center  font-normal">
                QTY
              </th>
              <th className="lg:py-5 lg:px-4 text-xs lg:text-base  text-center font-normal">
                SUBTOTAL
              </th>
              <th className="lg:py-5 lg:px-4 text-xs lg:text-base  text-center font-normal">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr key={uuidv4()}>
                  <td className="lg:py-2 lg:px-4 border-b  flex items-center justify-center">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[70px] h-[70px] lg:w-[170px] lg:h-[170px] p-5 "
                    />
                  </td>
                  <td className="lg:py-2 lg:px-4 border-b text-xs lg:text-base text-center">
                    <p>{item.title.substr(0, 20)}</p>
                  </td>
                  <td className="hidden lg:table-cell text-xs lg:text-base lg:py-2 lg:px-4 border-b text-center">
                    ${item.price}
                  </td>
                  <td className="lg:py-2 lg:px-4 text-xs lg:text-base border-b text-center">
                    {item.quantity}
                  </td>
                  <td className="lg:py-2 lg:px-4 text-xs lg:text-base border-b text-center">
                    ${item.price * item.quantity}
                  </td>
                  <td className="lg:py-2 lg:px-4 border-b  ">
                    <div className="flex  justify-center items-center">
                      <TrashIcon
                        className=" w-5 h-5 lg:w-6 lg:h-6  text-red-600 cursor-pointer "
                        onMouseDown={() => handleRemoveItem(item)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full flex justify-between my-4 lg:my-0  lg:p-7">
          <button
            className="border w-6/12 text-sm lg:text-base  p-2 lg:w-72 lg:p-4 bg-[#f0e0ff] rounded-full hover:bg-[#a749ff] hover:text-white "
            onMouseDown={handleContinueShopping}
          >
            CONTINUE SHOPPING
          </button>
          <button
            className="border w-6/12 text-sm lg:text-base p-2 lg:w-72 lg:p-4 bg-[#f0e0ff] rounded-full hover:bg-[#a749ff] hover:text-white "
            onMouseDown={handleClearCart}
          >
            CLEAR CART
          </button>
        </div>
        <div className="w-full  flex gap-2 lg:justify-end my-4">
          <div
            className=" w-full lg:w-6/12 p-7  font-poppins flex
      flex-col    justify-center border  "
          >
            <p className="text-lg font-semibold">Cart Total</p>
            <hr className="mt-0 mb-2" />
            <p className=" items-center my-2 ">
              Total Products:
              <span className="font-semibold ms-4 text-lg">
                {totals.totalProducts}
              </span>
            </p>
            <p className=" items-center font-semibold text-lg my-2 text-[#a749ff] ">
              Grand Total:
              <span className="ms-4">
                ${Math.round(totals.grandTotal * 100) / 100}
              </span>
            </p>
            <div className="w-full  flex justify-end mt-2">
              <button
                className="border w-72 p-4  rounded-full bg-[#a749ff] text-white hover:bg-gray-800 "
                onMouseDown={handleCheckout}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartLayout;
