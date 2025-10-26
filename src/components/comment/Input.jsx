import React from "react";

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  Icon,
  iconsize,
  iconPosition = "left",
  inputstyle = "border", // "border" | "background" | "borderBottom"
  className,
  iconClassName,
  name,
}) {
  const border = `border border-gray-300 rounded  px-4`;
  const bg = `bg-bg-gray rounded  px-4`;
  const borderBottom = `border-b border-gray-300 rounded-none`;

  // const [icontoggle, setIconToggel] = useState(true);
  const getInputStyle = () => {
    switch (inputstyle) {
      case "border":
        return border;
      case "background":
        return bg;
      case "borderBottom":
        return borderBottom;
      default:
        return border;
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative">
        {Icon && iconPosition === "left" && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Icon size={iconsize || 18} />
          </span>
        )}

        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${getInputStyle()} ${className} focus:outline-none focus:border-primary focus:ring-0 w-full py-2 transition ${
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
