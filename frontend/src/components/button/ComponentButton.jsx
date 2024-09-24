import React from "react";

const ComponentButton = ({style, text}) => {
  return (
    <section className="font-poppins">
      <button className={`bg-biru1  py-[8px] px-[20px] text-white font-bold`}>{text}</button>
    </section>
  );
};

export default ComponentButton;
