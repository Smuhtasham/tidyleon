import { log } from "console";
import React from "react";
const data=[
    {   logo:"/g11.svg",
        img:"/g1.svg",
        heading:"Trusted Professionals",
        text:"Fully trained and background-checked cleaners committed to delivering consistent, high-quality results."
    },
    {   logo:"/g12.svg",
        img:"/g2.svg",
        heading:"Eco-Friendly Approach",
        text:"We use non-toxic, environmentally safe products that are tough on dirt but gentle on your space."
    },
    {   logo:"/g13.svg",
        img:"/g3.svg",
        heading:"Tailored to Your Needs",
        text:"We create flexible cleaning plans that match your space, schedule, and specific requirements."
    },
    {   logo:"/g14.svg",
        img:"/g4.svg",
        heading:"Satisfaction Guaranteed",
        text:"Not satisfied? We’ll return and make it right — because your peace of mind truly matters to us."
    },
]

const WhyUs = () => {
  return (
    <>
      <div className="bg-[#fff] relative">
        <div className="w-[90%] mx-auto py-20 flex flex-col gap-8">
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-[48px] font-bold">Why Chose Us</h2>
            <p className="text-[20px]">
              We’re more than just a cleaning service — we’re your reliable
              partner in creating cleaner, healthier spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
           {
            data.map((val,index)=>{
                return  <div key={index} className={`flex ${index>1?"flex-col md:flex-row-reverse":"flex-col md:flex-row"}  gap-10  justify-between`}>
                <div className="flex flex-col gap-4 text-[20px]">
                  <img src={val.logo} className="h-[64px] w-[64px]" alt="" />
                  <h2 className="font-bold">{val.heading}</h2>
                  <p>
                   {val.text}
                  </p>
                </div>
                <img src={val.img} className="object-cover" alt="" />
              </div>
            })
           }
          </div>
        </div>
        <img src="/s3.svg" alt="img" className="hidden md:flex absolute top-40 left-25" />
        <img src="/s1.svg" alt="img" className="hidden md:flex absolute top-20 left-80" />
        <img src="/s2.svg" alt="img" className="hidden md:flex absolute top-5 right-30" />
      </div>
    </>
  );
};

export default WhyUs;
