import React from "react";
import brand1 from "../../img/brand1.svg";
import brand2 from "../../img/brand2.svg";
import brand3 from "../../img/brand3.svg";
import brand4 from "../../img/brand4.svg";
import brand5 from "../../img/brand5.svg";
import brand6 from "../../img/brand6.svg";
import brand7 from "../../img/brand7.svg";
import brand8 from "../../img/brand8.svg";
import brand9 from "../../img/brand9.svg";
import brand10 from "../../img/brand10.svg";
import brand11 from "../../img/brand11.svg";

const Brands = () => {
  return (
    <div className="grid place-items-center mb-10 mt-[4rem] md:mt-0">
      <h1 className="te text-header-text text-2xl font-bold mb-10">The world's best companies trust Webflow</h1>
      <div className="flex flex-wrap justify-center items-center gap-5 gap-y-10">
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand1} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand2} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand3} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand4} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand5} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand6} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand7} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand8} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand9} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand10} className="w-[5rem]" alt="" />
        </div>
        <div className="basis-[28%] sm:basis-[19%] md:basis-[13.33%]">
          <img src={brand11} className="w-[5rem]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
