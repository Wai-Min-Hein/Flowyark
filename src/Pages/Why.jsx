import React from "react";
import helpIcon from "../../img/helpIcon.png";
import svg from "../../img/why1.svg";
import svg2 from "../../img/why2.svg";
import svg3 from "../../img/why3.svg";
import svg4 from "../../img/why4.svg";

const Why = () => {
  return (
    <div className="xl:container xl:mx-auto grid md:grid-cols-8 md:grid-rows-16 xsm:grid-cols-2 xsm:grid-row-3 grid-col-1 grid-row-5 min-h-[155vh] pb-16 pl-[1rem] md:pl-[3rem] xl:pl-0 mt-[7rem] xsm:mt-0  gap-x-6">
      <div className="md:row-start-1 md:row-end-6 md:col-start-1 xl:col-start-2 md:col-span-3 xsm:row-start-1 xsm:row-end-2 xsm:col-start-1 xsm:col-span-full w-full">
        <p className="text-[11px] tracking-wide font-[600] uppercase">
          <span className=" opacity-50 pr-1">02 </span> .Why web flow
        </p>
        <div className="mt-[2rem] flex flex-col xsm:flex-row gap-7 justify-start items-start">
          <div className="">
            <div className="mt-0 bg-blue md:w-[3.5rem] md:h-[3.5rem] rounded-full grid place-items-center border-[3px] border-[#7f89ec] help-icon">
              <img src={helpIcon} className="w-[1.75rem]" alt="" />
            </div>
          </div>
          <div className="basis-full">
            <h1 className="font-head text-[2.2rem] xsm:text-[2.5rem] xl:text-[3.25rem] font-[700] tracking-tight w-full lg:w-3/5 leading-[2.75rem] xl:leading-[3.75rem]">
              Trust the  power of no- code.
            </h1>
            <p className="font-para mt-3 w-[28rem] lg:w-[35rem] text-[1.35rem]">
              Launch new campaigns faster, <br /> optimize your website on the
              fly, and <br />
              connect it to your key tools with the <br /> best no-code solution
              for marketing <br /> and conversion-based websites.
            </p>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-3 md:row-start-4 md:row-end-[8]  xsm:row-start-2 xsm:row-end-3 xsm:col-start-1 xsm:col-end-2 flex flex-col md:flex-row md:items-center md:justify-center justify-start items-start  gap-4 b md:border-l-2 md:border-b-2 md:rounded-bl-[4rem] border-acc-bg px-6">
        <div className="  md:basis-1/2  relative rounded-lg">
          <span className="bg-acc-bg w-8 h-8 absolute rounded-full top-[-.5rem] left-[-.8rem] grid place-items-center">
            1
          </span>
          <img src={svg} className="" alt="" />
        </div>
        <div className=" md:basis-1/2 rounded-lg">
          <h1>Scale</h1>

          <p className="lg:w-[50%] md:w-[75%] xsm:w-full">Easy to maintain, update, and grow...</p>
        </div>
      </div>

      <div className="md:row-start-[7] md:row-end-[13] md:col-start-2 md:col-end-5  xsm:row-start-2 xsm:row-end-3 xsm:col-start-2 xsm:col-end-3 relative  flex  flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-4 ">
        <span className=" bg-transparent absolute bottom-[20%] left-[-10%] w-[10rem] h-[10rem] border-2 border-[#171e25] rounded-full  place-items-center  hidden md:grid">
          <span className=" bg-transparent w-[6rem] h-[6rem] border-2 border-[#222d3b] rounded-full ">
            &nbsp;
          </span>
        </span>

        <div className=" md:basis-1/2  relative rounded-lg">
          <span className="bg-acc-bg w-8 h-8 absolute rounded-full top-[-.5rem] left-[-.8rem] grid place-items-center">
            2
          </span>
          <img src={svg2} className="rounded-md" alt="" />
        </div>
        <div className=" md:basis-1/2 rounded-lg">
          <h1>Hosting</h1>
          <p className="w-[50%] xsm:w-full">
            ...fast, affordable, with enterprise-grade security...
          </p>
        </div>
      </div>
      <div className="md:row-start-[10] md:row-end-[13] md:col-start-6 md:col-end-9  xsm:row-start-3 xsm:row-end-4 xsm:col-start-1 xsm:col-end-2 flex  flex-col md:flex-row justify-center items-start md:items-center gap-4">

      <div className=" md:basis-1/2 relative rounded-lg">
          <span className="bg-acc-bg w-8 h-8 absolute rounded-full top-[-.5rem] left-[-.8rem] grid place-items-center">
            3
          </span>
          <img src={svg3} className=" bg-acc-bg rounded-lg" alt="" />
        </div>
        <div className=" md:basis-1/2 rounded-lg">
          <h1 className="text-header-text font-medium">Ranking</h1>
          <p className="lg:w-[50%] md:w-[75%] xsm:w-full">
          ...with fine-tuned SEO controls, and flexible content management tools....
          </p>
        </div>


      </div>
      <div className="md:row-start-[14] md:row-end-[17] md:col-start-4 md:col-end-7  xsm:row-start-3 xsm:row-end-4 xsm:col-start-2 xsm:col-end-3 flex  flex-col md:flex-row items-start md:items-center justify-center gap-4 ">

      <div className="md:basis-1/2    relative rounded-lg">
          <span className="bg-acc-bg w-8 h-8 absolute rounded-full top-[-.5rem] left-[-.8rem] grid place-items-center">
            3
          </span>
          <img src={svg4} className=" bg-acc-bg rounded-lg " alt="" />
        </div>
        <div className="md:basis-1/2 rounded-lg">
          <h1 className="text-header-text font-medium">Integration</h1>
          <p className="lg:w-[50%] md:w-[75%] xsm:w-full">
          ...access all the tools you love and powerful automation with Webflow logic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
