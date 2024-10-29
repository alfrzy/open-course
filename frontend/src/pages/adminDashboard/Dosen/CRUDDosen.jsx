import React, { useState } from "react";
import Table from "../../../components/Table/Table";
import Search from "../../../components/Search/Search";
import ComponentAddDosen from "../../../components/Form/ComponentAddDosen";
import ComponentEditDosen from "../../../components/Form/ComponentEditDosen";

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
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleEdit = (dosen) => {
    setSelectedDosen(dosen);
    setIsEditModalOpen(true);
  };

  return (
    <section className="w-[100%] ">
      {/* Tambah Dosen */}
      <section className="my-5 md:w-[90%] md:flex md:justify-between md:mx-auto  ">
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
      <section className="flex justify-end md:w-[90%] md:mx-auto md:items-center ">
        <Search onSearch={handleSearch} />
      </section>

      {/* Table with Scroll */}
      <section className="flex justify-center overflow-x-auto">
        <Table
          searchTerm={searchTerm}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onEdit={handleEdit}
        />
      </section>

      {/* Modal Tambah Dosen */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-white p-5 rounded-lg w-[80%] h-[90%] overflow-y-auto">
            <ComponentAddDosen toggleModal={toggleModal} />
          </div>
        </div>
      )}

      {/* Modal Edit Dosen */}
      {isEditModalOpen && selectedDosen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-white p-5 rounded-lg w-[80%] h-[90%] overflow-y-auto">
            <ComponentEditDosen
              dosenData={selectedDosen}
              toggleModal={toggleEditModal}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CRUDDosen;
