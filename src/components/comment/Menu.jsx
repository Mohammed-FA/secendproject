import React, { useState } from "react";

function Menu({ label, icon: Icon, items = [], iconPosition = "left" }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="w-full ">
      <button
        onClick={() => setOpen(!open)}
        className={`${
          open ? "text-black/70" : "text-black/80"
        } flex items-center cursor-pointer  justify-between w-full sm:pr-3`}
      >
        <span
          className={`flex items-center gap-2 w-full ${
            iconPosition === "right" ? "flex-row-reverse justify-between" : ""
          }`}
        >
          {Icon && (
            <Icon
              className={` ${open ? "rotate-90" : "rotate-0"} duration-300`}
              size={18}
            />
          )}
          <span className="font-medium duration-300 ">{label}</span>
        </span>
      </button>

      <ul
        className={`mt-2 ml-2 space-y-1 h-full duration-300 overflow-hidden  ${
          open ? "max-h-36" : "max-h-0"
        }`}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="flex justify-between items-center  pl-1  font-medium cursor-pointer hover:bg-gray-100 rounded"
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Menu;
