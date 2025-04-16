import React from "react";

const Header = () => {
  return (
    <nav className="bg-[#fffce6]">
      <div className="w-[90%] mx-auto pt-6 pb-2 flex items-center justify-between">
        <div className="text-[28px] font-bold text-[#D56F2F]">Tidy Lion Clean</div>
        <ul className="hidden  md:flex items-center gap-[40px] text-[#000]">
          <li>
            <a href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              Our Services
            </a>
          </li>
          <li>
            <a href="#services">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#contact">
              Testimonials
            </a>
          </li>
        </ul>
        <button  className="h-[48px] w-[179px] cursor-pointer bg-[#FE824F] flex justify-center items-center rounded-[12px] text-[16px] text-[#fff] font-semibold">
          Get a Free Quote
        </button>
      </div>
    </nav>
  );
};

export default Header;
