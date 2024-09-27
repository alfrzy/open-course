import React, { useState } from "react";
import Table from "../Table/Table";
import Search from "../Search/Search";
import ComponentAddDosen from "../Form/ComponentAddDosen";
import ComponentEditDosen from "../Form/ComponentEditDosen";

const CRUDDosen = () => {
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
      <section className="my-5 md:w-[60%] md:flex md:justify-between md:mx-auto  ">
        <h1 className="text-center text-3xl font-bold mb-2">DOSEN</h1>
        <div className="flex justify-center">
          <button
            className="bg-biru1 text-white px-4 py-1 rounded hover:bg-biru2 transition-all duration-200"
            onClick={toggleModal} 
          >
            + Tambah Dosen
          </button>
        </div>
      </section>

      {/* Search */}
      <section className="flex justify-end md:w-[60%] md:mx-auto md:items-center ">
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
            <ComponentAddDosen toggleModal={toggleModal}/>
          </div>
        </div>
      )}

      {/* Modal Edit Dosen */}
      {isEditModalOpen && selectedDosen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-[80%] h-[90%] overflow-y-auto">
            <ComponentEditDosen dosenData={selectedDosen} toggleModal={toggleEditModal} /> 
          </div>
        </div>
      )}
    </section>
  );
};

export default CRUDDosen;
