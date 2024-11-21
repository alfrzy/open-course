import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const ModalTambahBab = ({ isOpen, onClose, onSaveSection }) => {
  const [sectionName, setSectionName] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (sectionName.trim()) {
      onSaveSection({ title: sectionName });
      setSectionName("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-white p-5 rounded-lg w-[80%] h-[90%] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Tambah BAB</h2>

        <hr className="border-[1px] border-solid border-gray-600 mb-8 " />
        <div>
          <label className="font-bold" htmlFor="nama_bab">
            Nama Bab
          </label>
          <input id="nama_bab" type="text" placeholder="Judul BAB" value={sectionName} onChange={(e) => setSectionName(e.target.value)} className="w-full p-2.5 border border-gray-300 rounded-lg mb-4" />
        </div>

        <div className="flex justify-end gap-3">
          <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400" onClick={onClose}>
            Tutup
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleSave}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTambahBab;
