import React from "react";
import { IoMdClose } from "react-icons/io";
function Sheet({ className, side = "right", children, isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed h-screen w-screen  toptablet:w-fit toptablet:h-fit  toptablet:relative top-0 left-0 inset-0 toptablet:bg-transparent bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 toptablet:opacity-100 invisible"
        }`}
        onClick={onClose}
      />

      <div
        className={`${className} fixed toptablet:translate-x-0 ${
          side === "right"
            ? "rounded-l-xl rounded-bl-xl"
            : "rounded-r-xl rounded-br-xl"
        } toptablet:relative top-0 h-full toptablet:w-full xxs:w-72 w-full bg-white  z-50  transform transition-transform duration-300 ${
          side === "right"
            ? isOpen
              ? "translate-x-0 right-0"
              : "translate-x-full right-0"
            : isOpen
            ? "translate-x-0 left-0"
            : " -translate-x-full left-0"
        }`}
      >
        <button
          onClick={onClose}
          className={`toptablet:hidden ${
            side === "right"
              ? " absolute top-3 left-5 text-primary"
              : "absolute top-3 right-5 text-primary"
          }`}
        >
          <IoMdClose size={28} />
        </button>
        {children}
      </div>
    </>
  );
}

export default Sheet;
