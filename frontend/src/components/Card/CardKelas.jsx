import React from "react";
import { FaUser, FaClock } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CardKelas = ({ title, image, deskripsi, dosen, kelas, waktu, harga, id }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail-informasi-kelas/${id}`);
  };

  const handleDaftarClass = () => {
    navigate(`/checkout-kelas/${id}`);
  };

  return (
    <div
      className="max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col justify-between cursor-pointer"
      onClick={handleDetailClick}
    >
      <img
        src={image}
        alt={title || "Gambar Kelas"}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
      />
      <div className="flex flex-col p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{deskripsi}</p>
        <div className="flex items-center mb-2 text-sm text-gray-700">
          <FaUser className="mr-2" />
          {dosen}
        </div>
        <div className="flex items-center mb-2 text-sm text-gray-700">
          <MdClass className="mr-2" />
          Kelas {kelas}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
          <span>
            <FaClock className="inline-block mr-2" />
            {waktu}
          </span>
          <span className="font-semibold text-gray-800">{harga}</span>
        </div>
        <div className="mt-auto">
          {/* Prevent Card Click overriding the button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDaftarClass();
            }}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
          >
            Daftar Kelas
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardKelas;
