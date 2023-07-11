import React, { useRef, useState } from "react";
import "flowbite";
import helpIcon from "../../img/helpIcon.png";
import { MdOutlinePhonelink } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

// import {AiOutlinePlus} from 'react-icons/ai'
import { AiOutlineMinus } from "react-icons/ai";

import home1 from "../../img/help1.webp";
import home2 from "../../img/help2.webp";
import home3 from "../../img/help3.webp";

import human from "../../img/help-human.jpeg";

import { AiOutlinePlus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Help = () => {
  const [accActive, setAccActive] = useState(true);
  const activeHandler = () => {
    setAccActive(true), setAccActive2(false), setAccActive3(false);
  };

  const [accActive2, setAccActive2] = useState(false);
  const activeHandler2 = () => {
    setAccActive2(true), setAccActive(false), setAccActive3(false);
  };

  const [accActive3, setAccActive3] = useState(false);
  const activeHandler3 = () => {
    setAccActive3(true), setAccActive2(false), setAccActive(false);
  };

  const img =
    (accActive && home1) || (accActive2 && home2) || (accActive3 && home3);

  const bg =
    (accActive && "bg-help1") ||
    (accActive2 && "bg-help2") ||
    (accActive3 && "bg-help3");

  return (
    <section className="xl:mx-auto xl:container mt-[10rem] pb-[5rem]">
      <div className="px-[1rem] xl:px-[9rem] mb-10">
        <p className="text-[11px] tracking-wide font-[600] uppercase">
          <span className=" opacity-50 pr-1">01 </span> .How we help
        </p>
        <div className="mt-[2rem] flex flex-col sm:flex-row gap-7 justify-start items-start">
          <div className="">
            <div className="mt-0 bg-blue w-[3.5rem] h-[3.5rem] rounded-full grid place-items-center border-[3px] border-[#7f89ec] help-icon">
              <img src={helpIcon} className="w-[1.75rem]" alt="" />
            </div>
          </div>
          <div className="">
            <h1 className="font-head text-[1.8rem] sm:text-[2.5rem] xl:text-[3.25rem] font-[700] tracking-tight  sm:w-4/5 xl:w-full leading-[2.75rem] xl:leading-[3.75rem] ">
              We{" "}
              <span className="bg-blue-gradient bg-clip-text text-transparent">
                take on the stress
              </span>{" "}
              of designing, building, and managing your website
            </h1>
            <p className="font-para mt-3 w-[22rem] sm:w-[26rem] md:w-[30rem] xl:w-[35rem] text-[1.2rem] xl:text-[1.35rem]">
              So you can spend more time building your product and working on
              your main business goals.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-24 mt-[6rem] px-[1rem] lg:px-0 justify-center flex-wrap lg:flex-nowrap">
        <div className="basis-full lg:basis-[40%] xl:basis-[30%]">
          <div className="bg-acc-bg rounded-md px-6 py-9">
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={activeHandler}
            >
              <div className="flex items-start basis-[90%] gap-4">
                <button
                  className={` ${
                    accActive ? "bg-acc-at-bg px-2 py-3 rounded-md" : ""
                  }`}
                >
                  <MdOutlinePhonelink className="text-2xl" />
                </button>
                <div className="">
                  <h2 className="text-md font-head font-[700] text-white">
                    Top Webflow development
                  </h2>

                  <AnimatePresence>
                    {accActive && (
                      <motion.div
                        initial={{  height: 0 }}
                        animate={{  height: "auto" }}
                        exit={{  height: 0 }}
                        transition={{ duration: 0.4 }}
                        
                      >
                        <p className="mt-3 text-md font-[500] pr-0 xl:pr-5">
                          We are certified Webflow template developers with over
                          4,000 happy customers.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <span>
                {accActive? <BiChevronDown/>:<BiChevronRight className="text-lg"/>}
              </span>
            </div>
          </div>

          <div className="bg-acc-bg rounded-md my-4 px-6 py-9">
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={activeHandler2}
            >
              <div className="flex items-start  basis-[90%] gap-4">
                <button
                  className={` ${
                    accActive2 ? "bg-acc-at-bg px-2 py-3 rounded-md" : ""
                  }`}
                >
                  <FaHandHoldingHeart className="text-2xl" />
                </button>
                <div className="">
                  <h2 className="text-md font-head font-[700] text-white">
                    Bespoke website design
                  </h2>
                  <AnimatePresence>
                    {accActive2 && (
                      <motion.div
                        initial={{  height: 0 }}
                        animate={{  height: "auto" }}
                        exit={{  height: 0 }}
                        transition={{ duration: 0.4 }}
                        
                      >
                        <p className="mt-3 text-md font-[500] pr-5">
                          We are certified Webflow template developers with over
                          4,000 happy customers.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <span>
                {accActive2? <BiChevronDown/>:<BiChevronRight className="text-lg"/>}
              </span>
            </div>
          </div>

          <div className="bg-acc-bg rounded-md px-6 py-9">
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={activeHandler3}
            >
              <div className="flex items-start basis-[90%] gap-4">
                <button
                  className={` ${
                    accActive3 ? "bg-acc-at-bg px-2 py-3 rounded-md" : ""
                  }`}
                >
                  <MdOutlinePhoneIphone className="text-2xl" />
                </button>
                <div className="">
                  <h2 className="text-md font-head font-[700] text-white">
                    Custom made assets
                  </h2>
                  <AnimatePresence>
                    {accActive3 && (
                      <motion.div
                        initial={{  height: 0 }}
                        animate={{  height: "auto" }}
                        exit={{  height: 0 }}
                        transition={{ duration: 0.4 }}
                        
                      >
                        <p className="mt-3 text-md font-[500] pr-5">
                          We are certified Webflow template developers with over
                          4,000 happy customers.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <span>
                {accActive3? <BiChevronDown/>:<BiChevronRight className="text-lg"/>}
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={`${bg} absolute top-0 left-0 w-full h-full z-[-1] rotate-[6deg] rounded-xl`}
          ></div>
          <img src={img} className="w-[22rem] md:w-[28rem] xl:w-[40rem]" alt="" />
        </div>
      </div>

      <div className="h-[80vh] w-full bg-line-gradient mt-28 relative z-50 grid place-items-center px-[1rem] md:px-0">
        <div className="bg-overlay absolute top-0 left-0 w-full h-full z-[-1]"></div>
        <div className="md:w-[90%] lg:w-[80%] xl:w-[65%] bg-help py-14 px-12 flex flex-col md:flex-row justify-between items-start gap-6 rounded-lg">
          <div className="w-[7rem] h-[7rem] basis-[30%]">
            <img
              src={human}
              className="w-full rounded-full border-4 border-white"
              alt=""
            />
          </div>
          <div className="text-white">
            <h1 className="text-[1.4rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-head font-[700] tracking-tighter leading-10">
              “We really wanted a CMS that was the least developer dependent,
              and with Webflow, we’ve completely removed a step from our
              workflows and cut time-to-launch in half.”
            </h1>
            <div className="mt-10">
              <h6 className="text-xl font-head font-[700]">Giulio Sotgiu</h6>
              <p className=" opacity-70 text-lg">
                Senior designer & website owner, bunq
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
