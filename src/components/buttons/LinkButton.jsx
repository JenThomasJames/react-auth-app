import React from "react";

const LinkButton = ({ children, onClick, type }) => {
  return (
    <button
      type={type}
      className="text-blue-500 hover:text-blue-600 bg-transparent text-base"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LinkButton;
