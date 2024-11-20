import React from "react";

const ComponentButton = ({ color, text, link, onClick  }) => {
  return (
    <button className="font-poppins" onClick={onClick}>
      <a href={link}>
        <button className={`${color} py-[4px] px-[20px] text-white font-bold rounded hover:bg-opacity-50 transition-all duration-150`}>{text}</button>
      </a>
    </button>
  );
};

export default ComponentButton;
