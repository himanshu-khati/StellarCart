import React from "react";
import HeroImg from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="w-full flex   bg-[#f0e0ff] flex-col lg:flex-row  ">
      <div
        className="w-full  lg:w-8/12 flex flex-col items-center lg:items-start  justify-center p-5 lg:p-14 
      "
      >
        <p className=" text-base tracking-wider   lg:my-0 lg:text-2xl">
          Smart Products
        </p>
        <h1 className=" text-3xl tracking-wide lg:tracking-normal leading-[50px] text-center lg:text-left   lg:text-7xl lg:leading-[97px]">
          Winter Offer <br />
          2024 Collection
        </h1>
        <button className="border border-[#333] inline-block p-4 lg:w-3/12 mt-4 hover:bg-[#a749ff] hover:text-white hover:border-[#a749ff] ">
          SHOP NOW
        </button>
      </div>
      <div className="w-full  lg:w-4/12 border flex justify-center ">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
