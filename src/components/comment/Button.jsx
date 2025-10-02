import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  style,

  className,
  ...props
}) {
  const baseStyles =
    "font-semibold transition-colors !flex cursor-pointer duration-300  flex items-center justify-center";

  const variantStyles = {
    primary: "bg-primary text-white  hover:bg-primary/95",
    outline:
      "border border-primary text-primary hover:text-white hover:bg-primary/95",
    circular: " rounded-full ",
    black: "bg-black text-white hover:bg-white hover:text-black",
    scandary:
      "bg-secendy text-white border-secendy  hover:border-2 hover:text-secendy hover:bg-white",
  };

  const sizeStyles = {
    sm: "h-5 w-5 text-xs",
    md: "px-4 py-2 text-base",
    lg: "md:px-10 md:py-4 py-2 px-5 text-base  rounded-md",
    cicle: "xxsm:h-10 xxsm:w-10 w-8 h-8 xxsm:text-lg text-sm",
  };

  return (
    <button
      style={{
        ...style,
      }}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
