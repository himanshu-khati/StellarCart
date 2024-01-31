import React from "react";

const ProductLayoutShimmer = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row py-20 items-center gap-2 ">
      <div className="lg:w-6/12 w-full justify-center flex items-center">
        <div className="bg-[#f0e0ff] animate-pulse w-[300px] lg:w-[238px] lg:h-[288px] mx-20 h-[300px]"></div>
      </div>
      <div className="lg:w-6/12 h-[288px] w-full flex-col bg-[#f0e0ff] animate-pulse  gap-2 flex items-center"></div>
    </div>
  );
};

export default ProductLayoutShimmer;
