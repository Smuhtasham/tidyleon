import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-[#fbea92] relative">
        <div className="w-[90%] mx-auto py-16 flex flex-col justify-center">
          <h2 className="text-[48px] font-bold text-center">
            Services We Offer
          </h2>
          <div className="flex justify-center">
            <p className="w-[1000px] pt-4 text-[20px] text-center">
              Whether it's your home, office, or commercial space, our cleaning
              solutions are designed to deliver lasting freshness, comfort, and
              peace of mind. Explore our range of services tailored to fit your
              needs.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10 pt-20">
            <div className="text-[20px] flex flex-col gap-3 items-center justify-center bg-[#FFFCE6] rounded-[12px] md:w-[620px] py-10">
              <img src="/home.svg" className="w-[64px] h-[64px]" alt="" />
              <h3 className="text-[40px] font-bold">Residential Cleaning</h3>
              <p>Routine Home Cleaning</p>
              <p>Deep Cleaning</p>
              <p>Move-In / Move-Out Cleaning</p>
              <p>Post-Renovation Cleaning</p>
              <p>Kitchen & Bathroom Detailing</p>
            </div>
            <div className="text-[20px] flex flex-col gap-3 items-center justify-center bg-[#FFFCE6] rounded-[12px] md:w-[620px] py-10">
              <img src="/commercial.svg" className="" alt="" />
              <h3 className="text-[40px] font-bold">Residential Cleaning</h3>
              <p>Office & Workspace Cleaning</p>
              <p>Retail & Showroom Cleaning</p>
              <p>Restaurant & Cafe Cleaning</p>
              <p>Post-Construction Cleaning</p>
              <p>Property Maintenance Support</p>
            </div>
          </div>
        </div>
        <img src="/s1.svg" alt="img" className="absolute top-75 md:top-55 right-68" />
        <img src="/s2.svg" alt="img" className="absolute top-10 left-100" />
      </div>
    </>
  );
};

export default Services;
