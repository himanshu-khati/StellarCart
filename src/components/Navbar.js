import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full mx-auto h-14 border border-red-600 px-5">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">Ecommerce</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
