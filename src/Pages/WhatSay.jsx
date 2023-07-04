import React from "react";
import helpIcon from "../../img/helpIcon.png";

import whatSay from "../../img/whatSay.jpeg";

const WhatSay = () => {
  return (
    <div className=" container mx-auto my-24">
      <div className="bg-acc-at-bg h-[90vh] w-[90%] mx-auto flex justify-between items-center rounded-lg">
        
        <div className="h-full w-full basis-[50%] overflow-hidden">
          <img src={whatSay} className="contain w-full" alt="" />
        </div>

        <div className=" basis-[45%] px-10">
          <p className="text-[11px] tracking-wide font-[600] uppercase">
            <span className=" opacity-50 pr-1">05 </span> .WHAT PEOPLE SAY
          </p>
          <div className="mt-[2rem] flex gap-7 justify-start items-start">
            <div className="">
              <div className="mt-0 bg-blue w-[3.5rem] h-[3.5rem] rounded-full grid place-items-center border-[3px] border-[#7f89ec] help-icon">
                <img src={helpIcon} className="w-[1.75rem]" alt="" />
              </div>
            </div>
            <div className="">
              <h1 className="font-head text-[3.25rem] font-[700] tracking-tight leading-[3.75rem]">
              The word on <span className="bg-blue-gradient bg-clip-text text-transparent">Flowyak</span> .
              </h1>
              <p className="font-para mt-3 text-[1.2rem]">
              "Flowyak show a deep understanding of what pleases the eye in the design process as well as an unusual attention to details in Webflow development".
              </p>
            </div>
          </div>


          <div className="flex items-center justify-between mt-10 gap-8">
            <div className="">
                <h1 className="font-head text-[2.25rem] font-[700]">50+</h1>
                <p className="font-para  text-[1.1rem]">successful websites launched using Webflow</p>
            </div>
            <div className="">
                <h1 className="font-head text-[2.25rem] font-[700]">4,00+</h1>
                <p className="font-para  text-[1.1rem]">Webflow templates sold in a little over two years
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSay;
