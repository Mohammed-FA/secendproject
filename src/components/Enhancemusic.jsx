import React from "react";
import music from "../assets/music.png";
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
    <div className="my-10">
      <div className="relative flex justify-between toptablet:p-10   bg-black">
        <div className="relative z-10 flex  flex-col toptablet:justify-between toptablet:text-left toptablet:items-start text-center items-center w-full gap-4 py-10">
          <div className="text-secendy text-sm font-medium tracking-wider uppercase ">
            Categories
          </div>

          <h1 className="font-bold text-white">
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
        <div className=" hidden toptablet:block ">
          <img src={music} />
        </div>
      </div>
    </div>
  );
};

export default Enhancemusic;
