import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { clearCart, removeItem } from "../utils/cartSlice";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
const ShoppingCartLayout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [totals, setTotals] = useState({ totalProducts: 0, grandTotal: 0 });
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
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
    <div>
      <h1 className="font-poppins text-xl  my-5">Your Cart Items</h1>
      <div className="flex justify-center  items-center flex-col">
        <table className="w-full font-poppins border ">
          <thead className="bg-[#f0e0ff]  ">
            <tr className="table-row tab ">
              <th className="py-5 px-4  text-center font-normal ">IMAGE</th>
              <th className="py-5 px-4  text-center  font-normal">
                PRODUCT NAME
              </th>
              <th className="py-5 px-4  text-center  font-normal">
                UNIT PRICE
              </th>
              <th className="py-5 px-4  text-center  font-normal">QTY</th>
              <th className="py-5 px-4  text-center font-normal">SUBTOTAL</th>
              <th className="py-5 px-4  text-center font-normal">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr key={uuidv4()}>
                  <td className="py-2 px-4 border-b  flex items-center justify-center">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[170px] h-[170px] p-5 "
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <p>{item.title.substr(0, 20)}</p>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    ${item.price}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.quantity}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    ${item.price * item.quantity}
                  </td>
                  <td className="py-2 px-4 border-b  ">
                    <div className="flex justify-center items-center">
                      <XMarkIcon
                        className="w-6 h-6 text-red-600 cursor-pointer "
                        onMouseDown={() => handleRemoveItem(item)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full flex justify-between  p-7">
          <button className="border w-72 p-4 bg-[#f0e0ff] rounded-full hover:bg-[#a749ff] hover:text-white ">
            <Link to="/">CONTINUE SHOPPING</Link>
          </button>
          <button
            className="border w-72 p-4 bg-[#f0e0ff] rounded-full hover:bg-[#a749ff] hover:text-white "
            onMouseDown={handleClearCart}
          >
            CLEAR SHOPPING CART
          </button>
        </div>
        <div className="w-full  flex gap-2 justify-end my-4">
          <div
            className="w-6/12 p-7  font-poppins flex
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
              <span className="ms-4">${totals.grandTotal}</span>
            </p>
            <div className="w-full  flex justify-end mt-2">
              <button className="border w-72 p-4  rounded-full bg-[#a749ff] text-white hover:bg-gray-800 ">
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
