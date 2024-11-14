import React from "react";

const InfoBox = ({ icon: Icon, title, count }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
      {/* Icon di sisi kiri */}
      <div className="bg-blue-500 p-2 rounded-full mr-4 text-white">
        <Icon className="text-2xl" />
      </div>
      {/* Konten */}
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-3xl">{count}</p>
      </div>
    </div>
  );
};

export default InfoBox;
