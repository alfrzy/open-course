import React from "react";
import { deleteDosen } from "../../Data/DataDosen";
import { toast } from "react-hot-toast";
import useFetchData from "../../Data/DataDosen";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

const Table = ({ searchTerm, currentPage, setCurrentPage, onEdit }) => {
  const { dataDosen, refetchData } = useFetchData();

  const totalPages = Math.ceil(dataDosen.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  // --------------------- MODAL -----------------------
  const [selectedDosen, setSelectedDosen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (dosen) => {
    console.log("Data dosen yang diklik:", dosen);
    setSelectedDosen(dosen);
    setIsModalOpen(true);
  };

  // Filter data berdasarkan pencarian (NIDN atau Nama Dosen)
  const filteredData = dataDosen.filter(
    (dosen) =>
      dosen.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dosen.nidn?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (id) => {
    await deleteDosen(id, refetchData, toast);
  };

  return (
    <>
      <section className="md:flex md:justify-center w-full md:w-[90%] mb-5">
        <div className="overflow-x-auto md:w-full ">
          <table className="text-sm text-left  text-gray-500  border border-gray-300 w-full">
            <thead className="text-xs text-white uppercase bg-biru3 ">
              <tr>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  No
                </th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  Foto
                </th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  Nama Dosen
                </th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  NIDN
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center border-b border-gray-300"
                >
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((dosen, index) => (
                <tr
                  key={dosen.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-blue-400 transition-all duration-300"
                  onClick={() => handleRowClick(dosen)}
                >
                  <td className="px-6 py-4 border-b border-gray-300">
                    {index + 1 + indexOfFirstItem}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    <img
                      src={
                        dosen.profile_picture
                          ? `http://localhost:3000/${dosen.profile_picture}`
                          : "https://picsum.photos/seed/picsum/200/300"
                      }
                      alt={dosen.full_name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-b border-gray-300 cursor-pointer "
                  >
                    {dosen.full_name}
                  </th>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {dosen.nidn || "N/A"}
                  </td>
                  <td className="px-6  py-4 text-right border-b border-gray-300">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          onEdit(dosen);
                        }} 
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(event) =>  {
                          event.stopPropagation();
                          handleDelete(dosen.id)}
                        }
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginasi */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-4 py-2 rounded hover:bg-biru2 hover:text-white transition-all duration-150 ${
                  currentPage === index + 1
                    ? "bg-biru1 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- MODAL ------------------- */}
      {isModalOpen && selectedDosen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4  bg-red-700 hover:bg-red-600 px-2 py-1 text-white text-2xl transition-all duration-300"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Profil Dosen
            </h2>
            <hr className="mb-4 border-gray-300" />
            <div className="flex items-center w-full mb-4">
              <div className="w-24 h-20 rounded-full bg-orange-200 overflow-hidden">
                <img
                  // src={
                  //   selectedDosen.profile_picture
                  //     ? selectedDosen.profile_picture
                  //     : "https://picsum.photos/seed/picsum/200/300"
                  // }
                  src={"https://picsum.photos/seed/picsum/200/300"}
                  alt={selectedDosen.full_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-gray-700 w-full ml-4">
                <div className="flex mb-2">
                  <p className="font-semibold w-24 text-right pr-2">Nama:</p>
                  <p>{selectedDosen.full_name}</p>
                </div>
                <div className="flex mb-2">
                  <p className="font-semibold w-24 text-right pr-2">NIDN:</p>
                  <p>{selectedDosen.nidn || "N/A"}</p>
                </div>
                <div className="flex mb-2">
                  <p className="font-semibold w-24 text-right pr-2">Jabatan:</p>
                  <p>{selectedDosen.position || "N/A"}</p>
                </div>
                <div className="flex mb-2">
                  <p className="font-semibold w-24 text-right pr-2">E-mail:</p>
                  <p>{selectedDosen.gmail || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
