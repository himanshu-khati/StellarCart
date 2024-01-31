import React, { useEffect } from "react";

const CollectionShimmer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex-col items-center lg:flex-row flex flex-wrap    px-4 py:5  lg:px-0  justify-center lg:py-10 ">
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
      <div className="w-[200px] h-[250px] lg:w-[200px] my-4 border-b lg:border-none bg-[#f0e0ff] animate-pulse border-4 border-white  mx-2"></div>
    </div>
  );
};

export default CollectionShimmer;
