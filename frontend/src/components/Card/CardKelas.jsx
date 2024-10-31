import React from "react";
import { FaUser, FaClock } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const CardKelas = ({ title, image, deskripsi, dosen, kelas, waktu, harga, link, id }) => {
  const navigate = useNavigate();

  const handleDaftarClick = () => {
    navigate(`/detail-informasi-kelas/${id}`);
  };

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 9h18M9 15h6"></path>
          </svg>
        </div>
      )}

      <div className="flex flex-col  p-4">
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
          <span className="font-semibold text-gray-800">Rp{harga}</span>
        </div>

        <div className="mt-auto">
        <button
            onClick={handleDaftarClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
          >
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardKelas;
