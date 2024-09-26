import React, { useState } from "react";
import Search from "../components/Search/Search";
import Table from "../components/Table/Table";
import ComponentAddDosen from "../components/Form/ComponentAddDosen";
import ComponentEditDosen from "../components/Form/ComponentEditDosen"; // Import komponen modal edit

const Testing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const [selectedDosen, setSelectedDosen] = useState(null); 

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // Perbarui term pencarian
    setCurrentPage(1); // Reset ke halaman pertama saat mencari
  };

  const handleEdit = (dosen) => {
    setSelectedDosen(dosen); // Set dosen yang akan diedit
    setIsEditModalOpen(true); // Buka modal edit
  };

  return (
    <section>
      {/* Tambah Dosen */}
      <section className="my-5 md:w-[60%] md:flex md:justify-between md:mx-auto">
        <h1 className="text-center text-3xl font-bold mb-2">DOSEN</h1>
        <div className="flex justify-center">
          <button
            className="bg-biru1 text-white px-4 py-2 rounded"
            onClick={toggleModal} // Klik untuk membuka modal tambah
          >
            + Tambah Dosen
          </button>
        </div>
      </section>

      {/* Search */}
      <section className="flex justify-center">
        <Search onSearch={handleSearch} />
      </section>

      {/* Table */}
      <section className="flex justify-center">
        <Table 
          searchTerm={searchTerm} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          onEdit={handleEdit} // Pass fungsi edit ke tabel
        />
      </section>

      {/* Modal Tambah Dosen */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-[80%] h-[90%] overflow-y-auto">
            <ComponentAddDosen />
            <button
              className="mt-4 text-red-700 font-bold hover:opacity-50"
              onClick={toggleModal}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Modal Edit Dosen */}
      {isEditModalOpen && selectedDosen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-[80%] h-[90%] overflow-y-auto">
            <ComponentEditDosen dosenData={selectedDosen} /> {/* Pass data dosen yang dipilih */}
            <button
              className="mt-4 text-red-700 font-bold hover:opacity-50"
              onClick={toggleEditModal} // Pastikan ini memanggil fungsi yang tepat
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testing;
