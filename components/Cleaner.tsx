import React from "react";

const Cleaner = () => {
  return (
    <>
      <div className="bg-[url('/cleanerbg.svg')] bg-cover bg-center h-[807px] w-full flex flex-col items-center">
        <div className="flex flex-col justify-center items-center pt-28 gap-6">
          <h2 className="text-[48px] font-bold text-center">Ready for a Cleaner Space?</h2>
          <p className="text-[20px] font-medium  md:w-[705px] text-center">
            Whether it's your home or business, we’re here to make it shine.
            Let’s create a custom cleaning plan that fits your schedule and your
            space.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center pt-8">
          <button className="w-[212px] h-[56px] bg-[#FE824F] rounded-[12px] text-[20px] font-semibold text-white">
            Contact Us
          </button>
          <button className="w-[212px] h-[56px] bg-white border-[2px] border-[#FE824F] rounded-[12px] text-[20px] font-semibold text-black">
            Get a Free Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Cleaner;
