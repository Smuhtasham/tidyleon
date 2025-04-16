import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#fffce6] relative">
      <div className="w-[90%] mx-auto flex py-16">
        <div className="relative flex flex-col text-black">
          <div className="flex flex-col gap-1 pt-6">
            <h2 className="text-[28px] md:text-[56px] font-bold md:w-[695px]">
              Cleaning Made Effortless,
            </h2>
            <h2 className="text-[28px] md:text-[56px] ml-[160px] md:ml-[260px] font-bold md:w-[695px]">
              for Home & Business.
            </h2>
          </div>
          <p className=" md:w-[742px] text-[20px] font-medium pt-2 text-center">
            We specialize in transforming homes and businesses with professional
            cleaning tailored to your needs. Whether it's maintaining a spotless
            home or ensuring a pristine office, our team delivers exceptional
            results every time.
          </p>
          <div className="flex gap-4 items-center pt-8">
                <button className="cursor-pointer w-[212px] h-[56px] bg-[#FE824F] rounded-[12px] text-[20px] font-semibold text-white">Contact Us</button>
                <button className="cursor-pointer w-[212px] h-[56px] bg-transparent border-[2px] border-[#FE824F] rounded-[12px] text-[20px] font-semibold text-black">Get a Free Quote</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-[742px] pt-22 ">
            <img src="/img1.svg" alt="" className="w-full h-full md:w-[236px] md:h-[180px] object-cover" />
            <img src="/img2.svg" alt="" className="w-full h-full md:w-[236px] md:h-[180px] object-cover" />
            <img src="/img3.svg" alt="" className="w-full h-full md:w-[236px] md:h-[180px] object-cover" />
          </div>
        </div>
      </div>
      <img src="/herobg.svg" alt="img" className="hidden md:flex w-[900px] h-[800px] absolute left-120 -bottom-[10px]" />
      <img src="/s1.svg" alt="img" className="hidden md:flex absolute top-48 left-45" />
      <img src="/s1.svg" alt="img" className="hidden md:flex absolute top-5 right-15" />
      <img src="/s2.svg" alt="img" className="hidden md:flex absolute top-35 left-220" />
      <img src="/s3.svg" alt="img" className="hidden md:flex absolute top-85 left-200" />
      <img src="/s4.svg" alt="img" className="hidden md:flex absolute top-125 right-30" />

    </div>
  );
};

export default HeroSection;
