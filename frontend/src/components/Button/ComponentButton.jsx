import React from "react";

const ComponentButton = ({ color, text, link }) => {
  return (
    <section className="font-poppins">
      <a href={link}>
        <button className={`${color} py-[4px] px-[20px] text-white font-bold rounded hover:bg-opacity-50 transition-all duration-150`}>{text}</button>
      </a>
    </section>
  );
};

export default ComponentButton;
