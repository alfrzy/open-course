  import React from "react";
  import { FaPlus } from "react-icons/fa";

  const ModalTambahBab = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
        <div className="bg-white p-5 rounded-lg w-[80%] h-[90%] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4" id="namabab">
            Tambah BAB
          </h2>

          <hr className="border-[1px] border-solid border-gray-600 mb-8 " />
          <div>
            <label className="font-bold" htmlFor="nama_bab">
              Nama Bab
            </label>
            <input id="nama_bab" type="text" placeholder="Judul BAB" className="w-full p-2.5 border border-gray-300 rounded-lg mb-4" />
          </div>

          <label className="font-bold" htmlFor="tambah_template">
            Nama Bab
          </label>
          <section className="w-[90%] mx-auto my-4 flex justify-between flex-wrap">
            <KotakTambah title={"Blank"} />
            <KotakTambah title={"Tugas"} />
            <KotakTambah title={"ya"} />
            <KotakTambah title={"ya"} />
            <KotakTambah title={"ya"} />
          </section>

          {/* button */}
          <div className="flex justify-end gap-3">
            <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400" onClick={onClose}>
              Tutup
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2" onClick={onClose}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default ModalTambahBab;

  const KotakTambah = ({ title }) => {
    return (
      <>
        <div className="relative w-[30%] mb-3">
          <div className="border-[2px] border-solid border-gray-300 h-40 flex items-center justify-center group transition-colors duration-200 hover:bg-gray-200 hover:cursor-pointer">
            {/* Ikon + akan muncul saat div di-hover */}
            <FaPlus className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
          <h1 className="text-center">{title}</h1>
        </div>
      </>
    );
  };
