import React from "react";
import helpIcon from "../../img/helpIcon.png";
import svg from "../../img/why1.svg";
import svg2 from "../../img/why2.svg";
import svg3 from "../../img/why3.svg";
import svg4 from "../../img/why4.svg";

const Why = () => {
  return (
    <div className="container mx-auto grid grid-cols-8 grid-rows-16 w-full h-[155vh] pb-16">
      <div className="row-start-1 row-end-6 col-start-2 col-end-5 w-full">
        <p className="text-[11px] tracking-wide font-[600] uppercase">
          <span className=" opacity-50 pr-1">02 </span> .Why web flow
        </p>
        <div className="mt-[2rem] flex gap-7 justify-start items-start">
          <div className="">
            <div className="mt-0 bg-blue w-[3.5rem] h-[3.5rem] rounded-full grid place-items-center border-[3px] border-[#7f89ec] help-icon">
              <img src={helpIcon} className="w-[1.75rem]" alt="" />
            </div>
          </div>
          <div className="">
            <h1 className="font-head text-[2.25rem] font-[700] tracking-tight w-[45rem] leading-[2.75rem]">
              Trust the <br /> power of no- <br /> code.
            </h1>
            <p className="font-para mt-3 w-[35rem] text-[1.35rem]">
              Launch new campaigns faster, <br /> optimize your website on the
              fly, and <br />
              connect it to your key tools with the <br /> best no-code solution
              for marketing <br /> and conversion-based websites.
            </p>
          </div>
        </div>
      </div>
      <div className="col-start-6 col-span-3 row-start-4 row-end-[8] flex i items-start gap-4 g-border border-acc-bg px-6 rounded-lg">
        <div className=" w-[12rem] h-[10rem] relative rounded-lg">
          <span className="bg-acc-bg w-8 h-8 absolute rounded-full top-[-.5rem] left-[-.8rem] grid place-items-center">
            1
          </span>
          <img src={svg} className="w-[12rem]" alt="" />
        </div>
        <div className="rounded-lg">
          <h1>Scale</h1>

          <p className="w-24">Easy to maintain, update, and grow...</p>
        </div>
      </div>

      <div className="row-start-[7] row-end-[13] col-start-2 col-end-5 relative  flex i items-center justify-center gap-4 ">
        <span className=" bg-transparent absolute bottom-[20%] left-[-10%] w-[10rem] h-[10rem] border-2 border-[#171e25] rounded-full grid place-items-center">
          <span className=" bg-transparent w-[6rem] h-[6rem] border-2 border-[#222d3b] rounded-full">
            &nbsp;
          </span>
        </span>

        <div className="w-[17rem] h-[10rem] relative rounded-lg">
          <span className="bg-acc-bg w-8 h-8 absolute rounded-full top-[-.5rem] left-[-.8rem] grid place-items-center">
            2
          </span>
          <img src={svg2} className="rounded-md" alt="" />
        </div>
        <div className="rounded-lg">
          <h1>Hosting</h1>
          <p className="w-32">
            ...fast, affordable, with enterprise-grade security...
          </p>
        </div>
      </div>
      <div className="row-start-[10] row-end-[13] col-start-6 col-end-9 flex justify-center items-center gap-4">

      <div className=" w-[14rem] h-[8rem] relative rounded-lg">
          <span className="bg-acc-bg w-8 h-8 absolute rounded-full top-[-.5rem] left-[-.8rem] grid place-items-center">
            3
          </span>
          <img src={svg3} className=" bg-acc-bg rounded-lg" alt="" />
        </div>
        <div className="rounded-lg">
          <h1 className="text-header-text font-medium">Ranking</h1>
          <p className="w-28">
          ...with fine-tuned SEO controls, and flexible content management tools....
          </p>
        </div>


      </div>
      <div className="row-start-[14] row-end-[17] col-start-4 col-end-7 flex items-center justify-center gap-4 ">

      <div className=" w-[16rem] h-[10rem] relative rounded-lg">
          <span className="bg-acc-bg w-8 h-8 absolute rounded-full top-[-.5rem] left-[-.8rem] grid place-items-center">
            3
          </span>
          <img src={svg4} className=" bg-acc-bg rounded-lg" alt="" />
        </div>
        <div className="rounded-lg">
          <h1 className="text-header-text font-medium">Integration</h1>
          <p className="w-40">
          ...access all the tools you love and powerful automation with Webflow logic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
