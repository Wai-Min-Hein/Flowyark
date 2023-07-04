import React from "react";
import laptop from "../../img/laptop.png";

const LandingPage = () => {
  return (
    <section className=" pt-[8rem] relative z-50">
      <div className="absolute top-0 w-full h-full  bg-home-gradient z-[-10]"></div>
      <div className="text-center">
        <h1 className="font-head text-header-text text-[5.75rem] font-[600] tracking-tight text-center leading-[6.25rem]">
          Design + Webflow <br /> for
          <span className="text-transparent bg-home-text-gradient bg-clip-text text-[5.9rem]">
            Tech Startups
          </span>
          {/* <span className="b bg-home-t">
            Tech Startups
          </span> */}
        </h1>
        <p className="text-2xl mt-4">
          Work with a team of designers and certified Webflow <br /> developers
          who know how to help startups succeed.
        </p>
        <button className="bg-primary px-7 py-3 inline-block text-white font-[600] font-head text-2xl rounded-full mt-8 btn">
          <div className="flex flex-col">
            <div className="btn1">Work with us</div>
            <div className="btn2">Get in touch</div>
          </div>
        </button>
      </div>
      <img src={laptop} className="w-[65%] mx-auto mt-[4rem]" alt="" />
    </section>
  );
};

export default LandingPage;
