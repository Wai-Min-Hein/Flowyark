import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import {motion, useMotionValue, useMotionValueEvent, useScroll,useSpring } from 'framer-motion'

const Pricing = () => {
  

  
  return (
    <div className="container mx-auto !bg-transparent z-[60]">
      <div className="text-center">
        <p className="text-[11px] tracking-wide font-[600] uppercase">
          <span className=" opacity-50 pr-1">06 </span> .Our Pricing
        </p>
        <h1 className="font-head text-[3.75rem] font-[700] tracking-tight w-1/2 leading-[3.75rem] mx-auto mt-10 mb-16">
          Ready to launch your new{" "}
          <span className="bg-blue-gradient bg-clip-text text-transparent">
            website?
          </span>
        </h1>
      </div>

      <div className="cards flex items-stretch justify-between gap-5 w-[80%] mx-auto">
        <div className="card bg-acc-bg basis-1/3 rounded-md px-6 py-4 relative">

          <div className="header">
          <div className="relative flex">
              <span className="text-sm  opacity-50">01</span>
              <h4 className=" pt-3 text-2xl text-header-text font-head font-bold">
              Advanced  <span className="text-sm bg-green text-[#0d1117] px-2  rounded font-medium">Only Web Flow</span>
              </h4>
            </div>
            <div className="flex items-center justify-start gap-5 my-3">
              <h1 className="text-4xl text-header-text font-head font-bold">$500</h1>
              <span className="text-lg">page</span>
            </div>
            <p className="text-[1.1rem] leading-[1.5rem]">
              We take your design and turn it into a functional Webflow website.
            </p>
          </div>
          <div className="body my-8 flex flex-col gap-3 text-md">
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>From design to Webflow</span>
            </div>
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>Responsive development</span>
            </div>
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>CMS implementation</span>
            </div>
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>On-page SEO settings</span>
            </div>
            <div className="flex gap-1 items-center">
              <RxCross2 className="text-red-500" />
              <span>Bespoke website design</span>
            </div>
            <div className="flex gap-1 items-center">
              <RxCross2 className="text-red-500" />
              <span>Custom made graphics</span>
            </div>
          </div>
          <div className="footer">
            <button className="bg-primary px-7 py-3  text-white font-[600] font-head text-xl rounded-full mt-8 btn w-full grid place-items-center">
              <div className="flex flex-col">
                <div className="btn1">Work with us</div>
                <div className="btn2">Get in touch</div>
              </div>
            </button>
          </div>
        </div>
        <div className="card bg-acc-bg basis-1/3 rounded-md px-6 py-4">
          <div className="header">
          <div className="relative flex">
              <span className="text-sm  opacity-50">02</span>
              <h4 className="pt-3 text-2xl text-header-text font-head font-bold">
              Premiun  <span className="text-sm bg-green text-[#0d1117] px-2  rounded font-medium">Bespoke design</span>
              </h4>
            </div>
            <div className="flex items-center justify-start gap-5 my-3">
              <h1 className="text-4xl text-header-text font-head font-bold">$500</h1>
              <span className="text-lg">page</span>
            </div>
            <p className="text-[1.1rem] leading-[1.5rem]">
              We take your design and turn it into a functional Webflow website.
            </p>
          </div>
          <div className="body my-8 flex flex-col gap-3 text-md">
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>From design to Webflow</span>
            </div>
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>Responsive development</span>
            </div>
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>CMS implementation</span>
            </div>
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>On-page SEO settings</span>
            </div>
            <div className="flex gap-1 items-center">
            <FcCheckmark />
              <span>Bespoke website design</span>
            </div>
            <div className="flex gap-1 items-center">
              <RxCross2 className="text-red-500" />
              <span>Custom made graphics</span>
            </div>
          </div>
          <div className="footer">
            <button className="bg-primary px-7 py-3  text-white font-[600] font-head text-xl rounded-full mt-8 btn w-full grid place-items-center">
              <div className="flex flex-col">
                <div className="btn1">Work with us</div>
                <div className="btn2">Get in touch</div>
              </div>
            </button>
          </div>
        </div>
        <div className="card bg-acc-bg basis-1/3 rounded-md px-6 py-4">
          <div className="header">
            <div className="relative flex">
              <span className="text-sm  opacity-50">03</span>
              <h4 className="px-1 pt-3 text-2xl text-header-text font-head font-bold">
              Complete  <span className="text-sm bg-green text-[#0d1117] px-2  rounded font-medium">Custom graphics</span>
              </h4>
            </div>
            <div className="flex items-center justify-start gap-5 my-3">
              <h1 className="text-4xl text-header-text font-head font-bold">$500</h1>
              <span className="text-lg">page</span>
            </div>
            <p className="text-[1.1rem] leading-[1.5rem]">
              We take your design and turn it into a functional Webflow website.
            </p>
          </div>
          <div className="body my-8 flex flex-col gap-3 text-md">
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>From design to Webflow</span>
            </div>
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>Responsive development</span>
            </div>
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>CMS implementation</span>
            </div>
            <div className="flex gap-1 items-center">
              <FcCheckmark />
              <span>On-page SEO settings</span>
            </div>
            <div className="flex gap-1 items-center">
            <FcCheckmark />
              <span>Bespoke website design</span>
            </div>
            <div className="flex gap-1 items-center">
            <FcCheckmark />
              <span>Custom made graphics</span>
            </div>
          </div>
          <div className="footer">
            <button className="bg-primary px-7 py-3  text-white font-[600] font-head text-xl rounded-full mt-8 btn w-full grid place-items-center">
              <div className="flex flex-col">
                <div className="btn1">Work with us</div>
                <div className="btn2">Get in touch</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
