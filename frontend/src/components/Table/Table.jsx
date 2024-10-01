import React from "react";
import { deleteDosen } from "../../Data/DataDosen"; 
import { toast } from "react-hot-toast";
import useFetchData from "../../Data/DataDosen";

const ITEMS_PER_PAGE = 10;

const Table = ({ searchTerm, currentPage, setCurrentPage, onEdit }) => {
  const { dataDosen, refetchData } = useFetchData();

  const totalPages = Math.ceil(dataDosen.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

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
        <div className="overflow-x-auto md:w-full">
          <table className="text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-300 w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  <span className="sr-only">Hapus</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((dosen, index) => (
                <tr
                  key={dosen.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
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
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-b border-gray-300"
                  >
                    {dosen.full_name}
                  </th>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {dosen.nidn || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-right border-b border-gray-300">
                    <button
                      onClick={() => onEdit(dosen)} // Memanggil fungsi onEdit
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right border-b border-gray-300">
                    <button
                      onClick={() => handleDelete(dosen.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Hapus
                    </button>
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
    </>
  );
};

export default Table;
