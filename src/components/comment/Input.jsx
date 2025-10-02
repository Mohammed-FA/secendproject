import React from "react";

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
  iconsize,
  iconPosition = "left",
  inputstyle = "border" | "background",
  className,
  iconClassName,
}) {
  const border = ` border  border-gray-300    `;
  const bg = `bg-bg-gray`;
  return (
    <div className="flex flex-col w-full">
      <div className="relative">
        {Icon && iconPosition === "left" && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Icon size={18} />
          </span>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${
            inputstyle == "border" ? border : bg
          } ${className} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded w-full px-4 py-2 transition
                     ${
                       Icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : ""
                     }`}
        />

        {Icon && iconPosition === "right" && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-black">
            <Icon className={iconClassName} size={iconsize || 25} />
          </span>
        )}
      </div>
    </div>
  );
}

export default Input;
