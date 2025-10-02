import React, { useState } from "react";

function Menu({
  className,
  childClass,
  label,
  icon: Icon,
  items = [],
  iconPosition = "left",
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${className} ${
        open ? "text-black/70" : "text-black/80"
      } w-full `}
    >
      <button
        onClick={() => setOpen(!open)}
        className={` flex items-center cursor-pointer  justify-between w-full sm:pr-3`}
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
        className={`mt-2  space-y-1 h-full duration-300 overflow-hidden  ${
          open ? "max-h-36" : "max-h-0"
        }`}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex justify-between items-center ml-2 font-medium cursor-pointer hover:opacity-95  rounded ${childClass}`}
          >
            {item.link ? <a href={item.link}>{item.label} </a> : item.label}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
