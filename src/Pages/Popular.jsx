import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import {MdMenuBook} from 'react-icons/md'
import popular1 from '../../img/popular1.png'
import popular2 from '../../img/popular2.png'
import popular3 from '../../img/popular3.png'

const Popular = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });


  const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "-15px"]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);
  const translateX11 = useTransform(scrollYProgress, [0, 1], ["0px", "-10px"]);
  const scaleX = useTransform(scrollYProgress, [0, 1], ["100%", "94%"]);

  const translateY2 = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);
  const translateX2 = useTransform(scrollYProgress, [0, 1], ["0px", "20px"]);
  const translateX12 = useTransform(scrollYProgress, [0, 1], ["0px", "-20px"]);
  const scaleX2 = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);

  const translateY3 = useTransform(scrollYProgress, [0, 1], ["0px", "-45px"]);
  const translateX3 = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);
  const translateX13 = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);
  const scaleX3 = useTransform(scrollYProgress, [0, 1], ["100%", "86%"]);

  const translateY4 = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const translateX4 = useTransform(scrollYProgress, [0, 1], ["0px", "45px"]);
  const translateX14 = useTransform(scrollYProgress, [0, 1], ["0px", "-45px"]);
  const scaleX4 = useTransform(scrollYProgress, [0, 1], ["100%", "82%"]);

  return (
    <motion.div className="relative sect z-40">
      <div className=" bg-popular absolute  w-full xl:w-full h-[72rem] z-[-100]  "></div>
      <div className="xl:container xl:mx-auto pt-24  z-40">
        <div className="text-center">
          <p className="text-[11px] tracking-wide font-[600] uppercase">
            <span className=" opacity-50 pr-1">07 </span> .NOT READY YET?
          </p>
          <h1 className="font-head text-[2.5rem] font-[700] tracking-tight leading-[3.75rem] mx-auto mt-10 mb-16">
            Browse our most popular templates
          </h1>
        </div>

        <div
          ref={ref}
          className="cards flex items-stretch flex-col md:flex-row justify-between gap-10 w-[90%] mx-auto mt-[10rem] z-50"
        >
          <div className="card bg-acc-bg basis-1/3 rounded-md relative  ">
            <motion.span
              style={{ translateY, translateX }}
              className="absolute hidden md:inline-block z-[-1] w-full h-full bg-[rgba(20,161,255,0.6)] opacity-60 top-0 left-0 rounded-md "
            ></motion.span>
            <motion.span
              style={{ translateY: translateY2, translateX: translateX2 }}
              className="absolute hidden md:inline-block z-[-2] w-full h-full bg-[rgba(20,161,255,0.5)] opacity-50 top-0 left-0 rounded-md "
            ></motion.span>
            <motion.span
              style={{ translateY: translateY3, translateX: translateX3 }}
              className="absolute hidden md:inline-block z-[-3] w-full h-full bg-[rgba(20,161,255,0.4)] opacity-40 top-0 left-0 rounded-md "
            ></motion.span>
            <motion.span
              style={{ translateY: translateY4, translateX: translateX4 }}
              className="absolute hidden md:inline-block z-[-4] w-full h-full bg-[rgba(20,161,255,0.3)] opacity-30 top-0 left-0 rounded-md "
            ></motion.span>

            <div className="image">
                <img src={popular1} className="w-full block rounded-t-md" alt="" />
            </div>
            <div className="p-6">
              <div className="">
                <h1 className="text-xl font-bold font-head text-white">Asterisk - 35+ Pages</h1>
                <p className="text-sm font-semibold font-para opacity-60">published june 2022</p>
              </div>
              <div className="flex items-center gap-2 mt-5 text-white">
                  <MdMenuBook className="text-xl"/>
                  Sass
              </div>
            </div>
          </div>
          <div className="card bg-acc-bg basis-1/3 rounded-md  relative">
            
               <motion.span
                  style={{ translateY, scaleX }}
                  className="absolute hidden md:inline-block z-[-1] w-full h-full bg-[rgba(20,161,255,0.6)]  opacity-60 top-0 left-0 rounded-md"
                ></motion.span>
                <motion.span
                  style={{ translateY: translateY2, scaleX: scaleX2 }}
                  className="absolute hidden md:inline-block z-[-2] w-full h-full bg-[rgba(20,161,255,0.5)] opacity-50 top-0 left-0 rounded-md"
                ></motion.span>
                <motion.span
                  style={{ translateY: translateY3, scaleX: scaleX3 }}
                  className="absolute hidden md:inline-block z-[-3] w-full h-full bg-[rgba(20,161,255,0.4)]  opacity-40 top-0 left-0 rounded-md"
                ></motion.span>
                <motion.span
                  style={{ translateY: translateY4, scaleX: scaleX4 }}
                  className="absolute hidden md:inline-block z-[-4] w-full h-full bg-[rgba(20,161,255,0.3)] opacity-30 top-0 left-0 rounded-md"
                ></motion.span>
              
              <div className="image">
                <img src={popular2} className="w-full block  rounded-t-md" alt="" />
            </div>
            <div className="p-6">
              <div className="">
                <h1 className="text-xl font-bold font-head text-white">Asterisk - 35+ Pages</h1>
                <p className="text-sm font-semibold font-para opacity-60">published june 2022</p>
              </div>
              <div className="flex items-center gap-2 mt-5 text-white">
                  <MdMenuBook className="text-xl"/>
                  Agency
              </div>
            </div>
          </div>
          <div className="card bg-acc-bg basis-1/3 rounded-md  relative">
            <motion.span
              style={{ translateY, translateX: translateX11 }}
              className="absolute hidden md:inline-block z-[-1] w-full h-full bg-[rgba(20,161,255,0.6)] opacity-60 top-0 left-0 rounded-md "
            ></motion.span>
            <motion.span
              style={{ translateY: translateY2, translateX: translateX12 }}
              className="absolute hidden md:inline-block z-[-2] w-full h-full bg-[rgba(20,161,255,0.5)] opacity-50 top-0 left-0 rounded-md "
            ></motion.span>
            <motion.span
              style={{ translateY: translateY3, translateX: translateX13 }}
              className="absolute hidden md:inline-block z-[-3] w-full h-full bg-[rgba(20,161,255,0.4)] opacity-40  top-0 left-0 rounded-md "
            ></motion.span>
            <motion.span
              style={{ translateY: translateY4, translateX: translateX14 }}
              className="absolute hidden md:inline-block z-[-4] w-full h-full bg-[rgba(20,161,255,0.3)] opacity-30 top-0 left-0 rounded-md "
            ></motion.span>
            <div className="image">
                <img src={popular3} className="w-full block rounded-t-md" alt="" />
            </div>
            <div className="p-6">
              <div className="">
                <h1 className="text-xl font-bold font-head text-white">Asterisk - 35+ Pages</h1>
                <p className="text-sm font-semibold font-para opacity-60">published june 2022</p>
              </div>
              <div className="flex items-center gap-2 mt-5 text-white">
                  <MdMenuBook className="text-xl"/>
                  Sass
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Popular;
