import React from "react";

function Title({ label }) {
  return (
    <div className="flex gap-2 items-center font-medium text-primary mt-[8%] mb-3">
      <div className="rounded-md bg-primary xxs:h-10 xxs:w-6 w-4 h-7 "></div>
      <h2 className="xxs:text-base text-xs">{label}</h2>
    </div>
  );
}

export default Title;
