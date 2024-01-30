import React from "react";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RootLayout = () => {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="container mx-auto px-4 sm:px-12 relative ">
        <Navbar />
        <ToastContainer position="top-center" autoClose={3000} />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default RootLayout;
