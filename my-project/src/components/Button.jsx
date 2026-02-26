import React from "react";

const Button = ({ title, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 font-bold hover:bg-white hover:text-blue-500 
                  text-white rounded-2xl font-bold 
                  transition duration-300
                  ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;