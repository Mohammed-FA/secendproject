import { FaArrowRight } from "react-icons/fa";
import iphon from "../assets/iphon.jpg";
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Slider from "./comment/Slider";

export default function HeroBanner() {
  const [sidebar, setSideBar] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={sidebar} onClose={() => setSideBar(false)} />
      <div className="relative toptablet:w-[75%] w-full bg-black text-white lg:ml-10 toptablet:ml-5  mt-3">
        <button
          className="toptablet:hidden absolute sm:top-5 sm:left-5 left-2 top-2 block sm:text-4xl text-2xl z-10 cursor-pointer "
          onClick={() => setSideBar(true)}
        >
          <IoMenuOutline />
        </button>
        <Slider type="banner" slidesPerView={1} className="sm:py-0! py-7! ">
          <div className="grid sm:grid-cols-2 items-center gap-6">
            <div className="flex items-center sm:justify-start justify-center h-full">
              <div className="toptablet:ml-8 sm:ml-5 ml-2  flex flex-col gap-1 sm:text-left text-center ">
                <div className="flex gap-2 items-center justify-center sm:justify-start">
                  <img
                    src={logo}
                    className="toptablet:w-12 toptablet:h-12 h-8 w-8 "
                  />
                  <span className="text-graytext toptablet:text-base text-sm mt-0.5">
                    iPhone 14 Series
                  </span>
                </div>
                <h2 className="text-2xl lg:text-[45px] md:text-3xl max-w-72 lg:leading-14 font-medium">
                  Up to 10% off Voucher
                </h2>
                <a className="flex gap-3 mt-2 items-center justify-center sm:justify-start text-white">
                  <span className="  after:contain-content after:w-full after:h-[1px] after:bg-white after:left-0 after:absolute relative md:after:-bottom-1.5 after:-bottom-0">
                    Shop Now
                  </span>
                  <FaArrowRight className="mt-0.5" />
                </a>
                <a link="/"></a>
              </div>
            </div>

            <div className="hidden sm:flex justify-center">
              <img
                src={iphon}
                alt="iPhone"
                className="w-full max-w-xs md:max-w-md mt-0.5"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 items-center gap-6">
            <div className="flex items-center sm:justify-start justify-center h-full">
              <div className="toptablet:ml-8 sm:ml-5 ml-2  flex flex-col gap-1 sm:text-left text-center ">
                <div className="flex gap-2 items-center justify-center sm:justify-start">
                  <img
                    src={logo}
                    className="toptablet:w-12 toptablet:h-12 h-8 w-8 "
                  />
                  <span className="text-graytext toptablet:text-base text-sm mt-0.5">
                    iPhone 14 Series
                  </span>
                </div>
                <h2 className="text-2xl lg:text-[45px] md:text-3xl max-w-72 lg:leading-14 font-medium">
                  Up to 10% off Voucher
                </h2>
                <a className="flex gap-3 mt-2 items-center justify-center sm:justify-start text-white">
                  <span className="  after:contain-content after:w-full after:h-[1px] after:bg-white after:left-0 after:absolute relative md:after:-bottom-1.5 after:-bottom-0">
                    Shop Now
                  </span>
                  <FaArrowRight className="mt-0.5" />
                </a>
                <a link="/"></a>
              </div>
            </div>

            <div className="hidden sm:flex justify-center">
              <img
                src={iphon}
                alt="iPhone"
                className="w-full max-w-xs md:max-w-md mt-0.5"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
