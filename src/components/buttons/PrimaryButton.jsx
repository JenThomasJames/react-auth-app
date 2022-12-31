import React from "react";

const PrimaryButton = ({ children, onClick, type }) => {
  return (
    <button
      type={type}
      className="text-slate-50 bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 text-base py-2 px-5 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
