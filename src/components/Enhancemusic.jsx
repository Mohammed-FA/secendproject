import React from "react";
import music from "../assets/music.png";
import bg from "../assets/Ellipse 23.png";
import Button from "./comment/Button";

const Enhancemusic = () => {
  const TimeUnit = ({ value, label }) => (
    <div className="bg-[#FFFFFF]  flex justify-center pb-2 items-center flex-col text-center md:scale-100 scale-75 h-16 w-16  text-black  rounded-full leading-0 ">
      <span className=" text-base   font-bold  ">
        {value.toString().padStart(2, "0")}
      </span>
      <span className=" text-[11px] uppercase font-medium tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="my-10 bg-black">
      <div className="relative flex justify-between overflow-hidden toptablet:w-[90%] mx-auto w-full">
        <div className="relative z-20 flex toptablet:w-2/5 w-full   flex-col toptablet:justify-between toptablet:text-left toptablet:items-start text-center items-center  gap-4 py-10">
          <div className="text-secendy text-sm font-medium tracking-wider uppercase ">
            Categories
          </div>

          <h1 className="font-bold tracking-widest text-[48px] text-white">
            Enhance Your
            <br />
            <span>Music Experience</span>
          </h1>

          <div className="flex flex-wrap md:gap-4 ">
            <TimeUnit value={23} label="Hours" />
            <TimeUnit value={5} label="Days" />
            <TimeUnit value={6} label="Minutes" />
            <TimeUnit value={35} label="Seconds" />
          </div>

          <div>
            <Button
              variant="scandary"
              className="text-xs font-normal"
              size="lg"
            >
              Buy Now!
            </Button>
          </div>
        </div>
        <div className=" w-full flex toptablet:py-10  h-full toptablet:opacity-100 opacity-75 absolute top-0 left-0 z-10  toptablet:flex toptablet:w-3/5  justify-center toptablet:relative items-center ">
          <img src={bg} className="w-full h-full z-10 absolute top-0 left-0" />
          <img
            src={music}
            className="relative xxs:w-2/3 toptablet:w-full w-full h-full z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Enhancemusic;
