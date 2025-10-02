import { useState } from "react";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import Sheet from "./comment/Sheet";
import Input from "./comment/Input";

const navbaritems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Contact",
    link: "/Contact",
  },
  {
    text: "About",
    link: "/About",
  },
  {
    text: "Sign Up",
    link: "/SignUp",
  },
];
export default function Navbar() {
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");
  const [openLeft, setOpenLeft] = useState(false);

  return (
    <header className="bg-white relative pb-3 md:pt-7 pt-3 border-b border-gray-300">
      <nav className=" container mx-auto  flex justify-between items-center">
        <div className="text-xl lg:w-1/4 w-1/5 sm:text-3xl font-bold flex gap-2 items-center">
          <button
            className="toptablet:hidden block cursor-pointer "
            onClick={() => setOpenLeft(true)}
          >
            <HiMenuAlt2 />
          </button>
          <h1 className="lg:text-3xl!">Exclusive</h1>
        </div>

        <div className="mr-auto flex justify-center items-center">
          <Sheet
            side="left"
            isOpen={openLeft}
            onClose={() => setOpenLeft(false)}
          >
            <div className="absolute top-16 w-full md:hidden block xxsm:px-8 px-5">
              <Input
                type="text"
                inputstyle="bg"
                placeholder="What are you looking for?"
                value={search}
                className="xxs:text-sm text-xs"
                onChange={(e) => setSearch(e.target.value)}
                icon={IoIosSearch}
                iconPosition="right"
              />
            </div>

            <ul className="  flex gap-6  toptablet:flex-row flex-col justify-center items-center h-full text-black font-normal ">
              {navbaritems.map((item, index) => {
                return item.link == pathname ? (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-primary after:contain-content after:w-full after:h-[1.5px] after:bg-gray-400 after:left-0 after:absolute relative after:-bottom-1"
                  >
                    <a href={item.link}>{item.text}</a>
                  </li>
                ) : (
                  <li
                    key={index}
                    className="cursor-pointer after:contain-content after:w-0 after:duration-500 hover:text-primary hover:after:w-full after:h-[1.5px] after:bg-primary after:left-0 after:absolute relative after:-bottom-1"
                  >
                    <a href={item.link}>{item.text}</a>
                  </li>
                );
              })}
            </ul>
          </Sheet>
        </div>

        <div className="flex md:w-1/3 w-full  justify-end items-center gap-3">
          <div className="md:flex hidden items-center  w-full rounded px-2 py-1">
            <Input
              type="text"
              inputstyle="bg"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={IoIosSearch}
              iconPosition="right"
            />
          </div>

          <div className="flex gap-2 ">
            <IoIosHeartEmpty size={25} className="" />
            <BsCart3 size={25} className="" />
          </div>
        </div>
      </nav>
    </header>
  );
}
