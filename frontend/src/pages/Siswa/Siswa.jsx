import React, { useState } from "react";
import TableSiswa from "../../components/Table/TableSiswa";
import SearchInput from "../../components/Search/SearchInput";
import ComponentAddSiswa from "../../components/Form/ComponentAddSiswa";
import ComponentEditSiswa from "../../components/Form/ComponentEditSiswa";

const Siswa = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const [selectedSiswa, setSelectedSiswa] = useState(null); 

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

  const handleEdit = (siswa) => {
    console.log("Siswa yang dipilih untuk diedit:", siswa); // Tambahkan log ini
    setSelectedSiswa(siswa); // Set siswa yang akan diedit
    setIsEditModalOpen(true); // Buka modal edit
  };
  

  return (
    <section>
      {/* Tambah Siswa */}
      <section className="my-5 md:w-[90%] md:flex md:justify-between md:mx-auto  ">
        <h1 className="text-center text-3xl font-bold mb-2">SISWA</h1>
        <div className="flex justify-center">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={toggleModal} 
          >
            + Tambah Siswa
          </button>
        </div>
      </section>

      {/* Search */}
      <section className="flex justify-end md:w-[90%] md:mx-auto md:items-center ">
        <SearchInput onSearch={handleSearch} />
      </section>

      {/* Table */}
      <section className="flex justify-center">
        <TableSiswa 
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
            <ComponentAddSiswa toggleModal={toggleModal}/>
          </div>
        </div>
      )}

      {/* Modal Edit Siswa */}
      {isEditModalOpen && selectedSiswa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-[80%] h-[90%] overflow-y-auto">

            <ComponentEditSiswa siswaData={selectedSiswa} toggleModal={toggleEditModal} />

          </div>
        </div>
      )}
    </section>
  );
};

export default Siswa;
