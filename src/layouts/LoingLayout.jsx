import React from "react";
import { Outlet } from "react-router-dom";
import loginbg from "../assets/loginbg.jpg";

export default function LoingLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-[80vh] flex md:mt-7  lg:mt-14 md:mb-10 lg:mb-20">
      <div className="hidden md:flex w-1/2 bg-bluecolor justify-center items-center ">
        <img
          src={loginbg}
          alt="Shopping cart with phone"
          className="max-w-full h-auto  object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center  container ">
        <div className="md:max-w-lg w-full mx-auto md:text-left text-center">
          <h2 className="md:text-3xl text-xl md:tracking-widest font-semibold md:mb-5 mb-2 ">
            {title}
          </h2>
          <p className="text-gray-500 mb-8 md:text-base text-sm">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
