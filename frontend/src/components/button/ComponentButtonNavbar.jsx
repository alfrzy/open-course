import React from "react";

const ComponentButtonNavbar = ({ style, text, link }) => {
  const bgColorClass = style.includes("bg-red")
    ? "bg-red-500"
    : style.includes("bg-kosong")
    ? "border-2 border-solid border-white"
    : "bg-biru1";

  return (
    <section className="font-poppins">
      <a href={link}>
        <button
          className={`${bgColorClass} py-[4px] px-[20px] text-white font-bold rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-90`}
        >
          {text}
        </button>
      </a>
    </section>
  );
};

export default ComponentButtonNavbar;
