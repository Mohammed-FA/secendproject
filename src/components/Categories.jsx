import React from "react";

import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";
import Title from "./comment/Title";
import Slider from "./comment/Slider";

const categories = [
  {
    id: 1,
    icon: IoPhonePortraitOutline,
    title: "Phones",
  },
  {
    id: 2,
    icon: RiComputerLine,
    title: "Computers",
  },
  {
    id: 3,
    icon: BsSmartwatch,
    title: "SmartWatch",
  },
  {
    id: 4,
    icon: CiCamera,
    title: "Camera",
  },
  {
    id: 5,
    icon: CiHeadphones,
    title: "HeadPhones",
  },

  {
    id: 6,
    icon: TbDeviceGamepad,
    title: "Gaming",
  },
  {
    id: 7,
    icon: TbDeviceGamepad,
    title: "Gaming",
  },
];
function Categories() {
  return (
    <>
      <div className="mt-[8%] ">
        <Title label="Categories" />
      </div>
      <Slider
        spaceBetween={25}
        breakpoints={{
          0: { slidesPerView: 1 },
          300: { slidesPerView: 2 },
          500: { slidesPerView: 3 },
          700: { slidesPerView: 4 },
          850: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="md:mt-10 mt-3 "
        type="product"
        titlecontaint={
          <div className=" w-full flex justify-between items-center md:items-end">
            <h1 className="font-semibold">Browse By Category</h1>
          </div>
        }
        slidesPerView={6}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center text-black hover:text-white hover:bg-primary duration-300 justify-center p-4 bg-white rounded-sm shadow-sm border border-black/30   cursor-pointer"
          >
            <div className="w-14 h-14 flex items-center justify-center  rounded-full mb-2">
              <category.icon className="sm:text-3xl  lg:text-4xl text-2xl " />
            </div>
            <span className="text-sm font-medium  text-center">
              {category.title}
            </span>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Categories;
