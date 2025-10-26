import React from "react";

function CenterElement({ children, className }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
}

export default CenterElement;
