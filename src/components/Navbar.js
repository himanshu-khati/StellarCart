import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full mx-auto h-14 border border-red-600 px-5">
      <div className="flex justify-between items-center">
        <div>Ecommerce</div>
        <div>Cart</div>
      </div>
    </nav>
  );
};

export default NavBar;
