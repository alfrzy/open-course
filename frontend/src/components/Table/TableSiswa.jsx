import React from "react"; 
import { deleteSiswa } from "../../Data/dataSiswa";
import { toast } from "react-hot-toast";
import useFetchData from "../../Data/dataSiswa";


const ITEMS_PER_PAGE = 10;

const TableSiswa = ({ searchTerm, currentPage, setCurrentPage, onEdit }) => {
  const { dataSiswa, refetchData } = useFetchData();

  const totalPages = Math.ceil(dataSiswa.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const filteredData = dataSiswa.filter(
    (siswa) =>
      siswa.full_name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (id) => {
    await deleteSiswa(id, refetchData, toast);
  };

  return (
    <>
      <section className="md:flex md:justify-center w-full md:w-[60%] mb-5">
        <div className="overflow-x-auto md:w-full">
          <table className="text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-300 w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  No
                </th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  Jumlah Kelas
                </th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 border-b border-gray-300">
                  Action
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
              {currentItems.map((siswa, index) => (
                <tr
                  key={siswa.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 border-b border-gray-300">
                    {index + 1 + indexOfFirstItem}
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-b border-gray-300"
                  >
                    {siswa.full_name}
                  </th>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {siswa.gmail || "N/A"} 
                  </td>
                  <td className="px-6 py-4 text-right border-b border-gray-300">
                    <button
                      onClick={() => onEdit(siswa)} // Memanggil fungsi onEdit
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right border-b border-gray-300">
                    <button
                      onClick={() => handleDelete(siswa.id)}
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

export default TableSiswa;
