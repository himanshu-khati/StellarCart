import React from "react";
import HeroImg from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="w-full flex   bg-[#f0e0ff]  ">
      <div
        className="w-8/12 flex flex-col justify-center p-14 
      "
      >
        <p className="text-2xl">Smart Products</p>
        <h1 className="text-7xl leading-[97px]">
          Winter Offer <br />
          2024 Collection
        </h1>
        <button className="border border-[#333] inline-block p-4 w-3/12 mt-4 hover:bg-[#a749ff] hover:text-white hover:border-[#a749ff] ">
          SHOP NOW
        </button>
      </div>
      <div className="w-4/12 border flex justify-center ">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
