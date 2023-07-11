import React from "react";
import { MdDevices } from "react-icons/md";
import { MdVolunteerActivism } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

import { MdStyle } from "react-icons/md";
import { Accordion } from "@mantine/core";

import bgShape from '../../img/bg-shape.png'


const FAQ = () => {
  return (
    <div className="relative z-50 py-28 mt-16 overflow-hidden">
      <div className="text-center ">
        <p className="text-[11px] tracking-wide font-[600] uppercase">
          <span className=" opacity-50 pr-1">07 </span> .NOT READY YET?
        </p>
        <h1 className="font-head text-[2.8rem] md:text-[3.2rem] xl:text-[3.75rem] font-[700] tracking-tight leading-[3.75rem] mx-auto mt-10 mb-5">
          Your questions answered
        </h1>
        <p className="text-xl xl:text-2xl w-full md:w-[3/5] xl:w-2/5 mx-auto">
          We're here to help with any questions you have. If you want to know
          more, just get in touch.
        </p>
      </div>

      <div className="bg-acc-bg pt-36 pb-36">
        <div className="xl:container xl:mx-auto xl:px-[14rem] px-[1rem] ">
          <div className="flex items-center justify-start">
            <div className="mt-0 bg-blue w-[3.5rem] h-[3.5rem] rounded-full grid place-items-center border-[3px] border-[#7f89ec] help-icon">
              <MdDevices />
            </div>
            <h1 className="text-blue text-3xl font-bold ml-4">
              Webflow development
            </h1>
          </div>
          <Accordion
          transitionDuration={600}
            chevron={<AiOutlinePlus size="1.4rem" className="opacity-70" />}
            styles={{
              chevron: {
                "&[data-rotate]": {
                  transform: "rotate(45deg)",
                },
              },
            }}
            defaultValue="need"
            className="ml-[4rem] mt-10  border-b border-[rgba(255,255,255,0.05)] pb-10"
          >
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>


        <div className="xl:container xl:mx-auto xl:px-[14rem] px-[1rem] mt-10">
          <div className="flex items-center justify-start ">
            <div className="mt-0 bg-blue w-[3.5rem] h-[3.5rem] rounded-full grid place-items-center border-[3px] border-[#7f89ec] help-icon">
              <MdDevices />
            </div>
            <h1 className="text-red text-3xl font-bold ml-4">
            Bespoke web design
            </h1>
          </div>
          <Accordion
          transitionDuration={600}
            chevron={<AiOutlinePlus size="1.4rem" className="opacity-70" />}
            styles={{
              chevron: {
                "&[data-rotate]": {
                  transform: "rotate(45deg)",
                },
              },
            }}
            defaultValue="need"
            className="ml-[4rem] mt-10"
          >
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            
          </Accordion>
        </div>

        <div className="xl:container xl:mx-auto xl:px-[14rem] px-[1rem]">
          <div className="flex items-center justify-start ">
            <div className="mt-0 bg-blue w-[3.5rem] h-[3.5rem] rounded-full grid place-items-center border-[3px] border-[#7f89ec] help-icon">
              <MdDevices />
            </div>
            <h1 className="text-red text-3xl font-bold ml-4">
            Bespoke web design
            </h1>
          </div>
          <Accordion
          transitionDuration={600}
            chevron={<AiOutlinePlus size="1.4rem" className="opacity-70" />}
            styles={{
              chevron: {
                "&[data-rotate]": {
                  transform: "rotate(45deg)",
                },
              },
            }}
            defaultValue="need"
            className="ml-[4rem] mt-10"
          >
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className="border-none mt-5" value="need">
              <Accordion.Control className="hover:opacity-80 duration-300 hover:bg-acc-bg text-header-text font-head font-bold text-xl mb-3">
                What do you need to get started?
              </Accordion.Control>
              <Accordion.Panel className="text-para-text opacity-80 text-[1.1rem] leading-tight tracking-wide border-t border-t-[rgba(255,255,255,0.1)] pt-4">
                Just your designs, either via link (Adobe XD, Figma, Sketch,
                etc.) or through a file (PDF, PSD, video, any extension you can
                think of).
              </Accordion.Panel>
            </Accordion.Item>
            
          </Accordion>
        </div>

      </div>

      <div
      className={`bg-primary xl:container xl:mx-auto w-full lg:w-2/3 rounded-2xl text-center px-[1rem] lg:px-[3rem] xl:px-[10rem] py-[2rem] xl:py-[4rem] relative translate-y-[-80px]`}>
        <div className="">
          <img src={bgShape} className="absolute top-0 left-0 w-full h-full h- object-cover z-[-1]" alt="" />
        </div>
        <h1 className="text-xl lg:text-5xl  font-head font-semibold text-white tracking-tighter">Move even faster with <span className="px-4 py-2 rounded-full bg-bg text-white text-lg xl:text-2xl font-bold  leading-[2.5] h-full">flowyak</span> and a new Webflow website.</h1>
        <button className="bg-[#1335a7] xl:px-8 xl:py-4 px-6 py-3 inline-block text-white font-[600] font-head text-xl xl:text-2xl rounded-full mt-10 btn">
          <div className="flex flex-col">
            <div className="btn1">Work with us</div>
            <div className="btn2">Get in touch</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
