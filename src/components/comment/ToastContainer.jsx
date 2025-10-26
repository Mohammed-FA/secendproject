import React, { memo, useContext } from "react";
import ReactDOM from "react-dom";
import { AuthContext } from "../../Context/AuthContext";

export default memo(function ToastContainer() {
  const { removeToast, toasts } = useContext(AuthContext);

  return ReactDOM.createPortal(
    <div className="fixed top-13 w-full    mx-auto   z-[9999]">
      <div className="flex justify-end container w-full mx-auto">
        <div className="flex flex-col gap-3">
          {toasts.map((toast) => (
            <Toaster
              key={toast.id}
              message={toast.message}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
});

export function Toaster({ message, onClose }) {
  return (
    <div
      onClick={onClose}
      className="bg-black w-fit cursor-pointer sm:text-base text-sm text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 animate-fadeIn"
    >
      {message}
    </div>
  );
}
