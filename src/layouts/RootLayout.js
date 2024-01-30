import React from "react";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const RootLayout = () => {
  return (
    <main className="flex min-h-screen flex-col border border-green-700">
      <div className="container mx-auto px-4 sm:px-12 ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default RootLayout;
