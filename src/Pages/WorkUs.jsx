import React from 'react'

const WorkUs = () => {
  return (
    <div className='container mx-auto text-center mt-[12rem] relative z-50'>
        <div className="bg-why-bg absolute top-0 left-0 w-full h-full z-[-1]"></div>
        <p className="text-[11px] tracking-wide font-[600] uppercase">
          <span className=" opacity-50 pr-1">03 </span> . WORK WITH OUR TEAM
        </p>
      <div className="text-center mt-10">
        <h1 className="font-head text-header-text text-[5.75rem] font-[600] tracking-tight text-center leading-[6.25rem] mb-8">
        <span className="text-transparent bg-why bg-clip-text text-[5.9rem]">
            Founder
          </span>, meet <br /> your
          <span className="text-transparent bg-why2 bg-clip-text text-[5.9rem]">
            Partner
          </span>
          
        </h1>
        <p className="text-2xl w-[50%] mx-auto px-8">
        With 42 successful launches and 4,000+ templates sold, our team has a track record you can count on.
        </p>
        <button className="bg-primary px-7 py-3 inline-block text-white font-[600] font-head text-2xl rounded-full mt-8 btn">
          <div className="flex flex-col">
            <div className="btn1">Work with us</div>
            <div className="btn2">Get in touch</div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default WorkUs
