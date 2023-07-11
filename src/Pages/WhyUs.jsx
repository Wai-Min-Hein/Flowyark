import React from "react";
import helpIcon from "../../img/helpIcon.png";
import whyus1 from "../../img/whyus.webp";

const WhyUs = () => {
  return (
    <div className="xl:container xl:mx-auto mt-28">
      <div className="min-h-[120vh] w-full bg-line-gradient relative z-50">
        <div className="bg-overlay absolute top-0 left-0 w-full h-full z-[-1]"></div>

        <div className="xl:px-[9rem] px-[2rem] mb-10">
          <p className="text-[11px] tracking-wide font-[600] uppercase">
            <span className=" opacity-50 pr-1">04 </span> .Why us
          </p>
          <div className="mt-[2rem] flex flex-col lg:flex-row  gap-7 justify-start items-start">
            <div className="">
              <div className="mt-0 bg-blue w-[3.5rem] h-[3.5rem] rounded-full grid place-items-center border-[3px] border-[#7f89ec] help-icon">
                <img src={helpIcon} className="w-[1.75rem]" alt="" />
              </div>
            </div>
            <div className="">
              <h1 className="font-head text-[2.4rem] md:text-[2.8rem] xl:text-[3.25rem] font-[700] tracking-tight w-full lg:w-[38rem] xl:w-[45rem] leading-[3.75rem]">
                We’re a team of
                <span className="bg-whyus bg-clip-text text-transparent">
                  highly-skilled
                </span>
                designers and Webflow developers.
              </h1>
              <p className="font-para mt-3 w-[25rem] xl:w-[35rem] text-[1.35rem]">
                We offer all our clients 24/7 availability, transparent, fixed
                pricing and the guarantee to launch in less than 14 days.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="lg:basis-[67%]">
              <img src={whyus1} className="left-0 block" alt="" />
            </div>
            <div className="lg:basis-[33%]">
              <div className="">
                <h1 className="text-xl font-bold text-header-text">
                  Design with real content
                </h1>
                <p className="text-md font-semibold text-para-text">
                  Design is a tool to communicate your message and present your
                  product in the best possible way. That's why we alway start
                  from your content.
                </p>
              </div>
              <div className="my-8">
                <h1 className="text-xl font-bold text-header-text">
                  Keep your projects organised
                </h1>
                <p className="text-md font-semibold text-para-text">
                  We follow Webflow development best practices to build websites
                  that are easy to manage and grow.
                </p>
              </div>
              <div className="">
                <h1 className="text-xl font-bold text-header-text">
                  Create reusable symbols
                </h1>
                <p className="text-md font-semibold text-para-text">
                  We build components and sections that you can re-use
                  throughout your website to create new pages without hiring an
                  expensive developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
