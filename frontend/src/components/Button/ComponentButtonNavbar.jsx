import React from "react";

const ComponentButtonNavbar = ({ color, text, link }) => {
  return (
    <section className="font-poppins">
      <a href={link}>
        <button className={`${color} py-[4px] px-[20px] text-white font-bold rounded `}>{text}</button>
      </a>
    </section>
  );
};

export default ComponentButtonNavbar;
