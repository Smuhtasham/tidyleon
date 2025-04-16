import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#fffce6] flex flex-col pt-12 relative">
      <div className="w-[90%] mx-auto relative">
        <h2 className="text-center text-[48px] font-bold">
          Client Testimonials
        </h2>
        <div className="flex justify-end">
          <div className="relative bg-white py-10 px-8 flex flex-col gap-4 w-[680px] rounded-[12px] mt-22">
            <div className="flex gap-2 items-center">
                <img src="/star.svg" className="w-[24px] h-[24px]" alt="" />
                <img src="/star.svg" className="w-[24px] h-[24px]" alt="" />
                <img src="/star.svg" className="w-[24px] h-[24px]" alt="" />
                <img src="/star.svg" className="w-[24px] h-[24px]" alt="" />
                <img src="/star.svg" className="w-[24px] h-[24px]" alt="" />
                <p className="text-[20px] font-bold">5.0</p>
            </div>
            <p className="text-[20px] font-medium">
              Absolutely impressed with the level of service! The team was
              punctual, professional, and left our office spotless. It's rare to
              find a cleaning service that truly pays attention to the little
              details — highly recommended!
            </p>
            <p className="text-[20px] font-bold">Sarah M., Office Manager</p>
            <img src="/quote.svg" className="absolute right-8 bottom-6 w-[100px] h-[80px]" alt="quote" />
          </div>
        </div>
        
        <img src="/testimonials.svg" className="hidden md:flex absolute -bottom-80 -left-20" alt="" />
      </div>
      <div className="mt-[118px] py-12 md:py-0 md:h-[202px] bg-[#FE824F] flex items-center">
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col md:flex-row justify-end items-center gap-14">
                    <div className="flex flex-col text-white">
                        <h2 className="text-[56px] font-bold">1,200+</h2>
                        <p className="text-[20px] font-medium">Spaces Cleaned</p>
                    </div>
                    <div className="flex flex-col text-white">
                        <h2 className="text-[56px] font-bold">98%</h2>
                        <p className="text-[20px] font-medium">Client Satisfaction</p>
                    </div>
                    <div className="flex flex-col text-white">
                        <h2 className="text-[56px] font-bold">7+</h2>
                        <p className="text-[20px] font-medium">Years of Experience</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="/s1.svg" alt="img" className="hidden md:flex absolute top-70 left-120" />
        <img src="/s2.svg" alt="img" className="hidden md:flex absolute top-40 left-25" />
        <img src="/s3.svg" alt="img" className="hidden md:flex absolute top-10 left-65" />
        <img src="/s4.svg" alt="img" className="hidden md:flex absolute top-35 right-120" />
    </div>
  );
};

export default Testimonials;
