import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [noOfItems, setNoOfItems] = useState(0);
  useEffect(() => {
    let items = cartItems.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
    setNoOfItems(items);
  }, [cartItems]);
  return (
    <nav className="w-full mx-auto shadow-b p-4 lg:p-5  sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center">
        <div className=" text-xl font-semibold lg:text-3xl lg:font-bold tracking-wider text-[#a749ff] ">
          <Link to="/">STELLARCART</Link>
        </div>
        <div className="flex">
          <Link to="/cart">
            <ShoppingBagIcon className=" h-7 w-7 lg:h-8 lg:w-8 text-[#a749ff]" />
          </Link>
          <sup className="font-semibold text-red-600 text-sm">{noOfItems}</sup>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
