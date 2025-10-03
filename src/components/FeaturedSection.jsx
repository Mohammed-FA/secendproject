import React from "react";
import img1 from "../assets/pls.png";
import img2 from "../assets/womman.png";
import img3 from "../assets/speaker.png";
import img4 from "../assets/perfume.png";
import img5 from "../assets/bg.png";
import Title from "./comment/Title";

function ItemsContent({ title, description }) {
  return (
    <div className="absolute top-0  left-0 w-full h-full flex justify-start lg:p-8 xxsm:p-4 p-2 items-end  ">
      <div className="flex flex-col lg:gap-1">
        <h2 className="text-white  lg:text-2xl xxsm:text-xl text-lg lg:font-bold font-medium">
          {title}
        </h2>
        <p className="text-white/90 md:text-sm text-xs  max-w-56">
          {description}
        </p>
        <div>
          <a className="text-white cursor-pointer font-medium md:text-base text-sm after:contain-content after:w-full after:h-[1px] after:bg-white/50 after:left-0 after:absolute relative after:-bottom-0  inline-block ">
            Show Now
          </a>
        </div>
      </div>
    </div>
  );
}

const FeaturedSection = () => {
  const featuredItems = [
    {
      title: "PlayStation 5",
      description: "Black and white versions of the PS6 coming out on scale.",
      img: img1,
    },
    {
      title: "Women's Collections",
      description: "Featured women collections that give you another vibe.",
      img: img2,
    },
    {
      title: "Speakers",
      description: "Amazon wireless speakers!",
      img: img3,
    },
    {
      title: "Perfume",
      description: "GUCCI VITEME 2 in EDF",
      img: img4,
    },
  ];

  return (
    <div>
      <Title label="Featured" />
      <h1 className="lg:mb-10 md:mb-5 mb-3 mt-3">New Arrival</h1>
      <div className="grid xxsm:grid-cols-2  sm:grid-cols-4 xxs:grid-cols-2 grid-cols-1  lg:gap-7 sm:gap-5 gap-2">
        <div className="bg-black xxs:row-span-2  xxs:col-span-2   rounded-sm relative  items-end flex justify-end ">
          <div className="relative  w-full items-end flex justify-center ">
            <img src={featuredItems[0].img} className=" w-full h-full  " />
          </div>

          <ItemsContent
            title={featuredItems[0].title}
            description={featuredItems[0].description}
          />
        </div>
        <div className="xxs:col-span-2 bg-[#0D0D0D]  rounded-sm">
          <div className="flex w-full justify-end  relative">
            <img
              src={featuredItems[1].img}
              className="object-cover w-[432px] h-[286px]   relative  "
            />
            <ItemsContent
              title={featuredItems[1].title}
              description={featuredItems[1].description}
            />
          </div>
        </div>
        <div className="col-span-1  bg-black flex md:p-8 p-5  relative  rounded-sm justify-center items-center">
          <img
            src={img5}
            className="object-contain w-full h-fw-full  absolute top-0 left-0  "
          />
          <img
            src={featuredItems[2].img}
            className="object-contain w-full h-fw-full   rounded-sm relative top-2.5 "
          />
          <ItemsContent
            title={featuredItems[2].title}
            description={featuredItems[2].description}
          />
        </div>
        <div className="col-span-1 bg-black flex justify-center p-8  rounded-sm items-center relative">
          <img
            src={img5}
            className="object-contain w-full h-fw-full  absolute top-0 left-0  "
          />
          <img
            src={featuredItems[3].img}
            className="object-contain w-full h-fuw-full relative top-2.5 "
          />
          <ItemsContent
            title={featuredItems[3].title}
            description={featuredItems[3].description}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
