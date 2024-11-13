import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../Data/DataSiswa";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import { FaPen } from "react-icons/fa";
import { useFetchUserCourses } from "../../Data/dataUserCourse";
import { updateSiswa } from "../../Data/DataSiswa";
import Swal from "sweetalert2";


const MahasiswaProfil = () => {
  const { id } = useParams();
  const { dataSiswa } = useFetchData();
  const { dataUserCourses } = useFetchUserCourses(id);

  const siswa = dataSiswa ? dataSiswa.find((s) => String(s.id) === String(id)) : null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    full_name: siswa ? siswa.full_name : "",
    email: siswa ? siswa.gmail : "",
  });

  const handleEditClick = () => {
    if (siswa) {
      setFormData({ full_name: siswa.full_name, email: siswa.gmail });
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("full_name", formData.full_name);
    formDataToSend.append("gmail", formData.email);

    // Call updateSiswa with id, formDataToSend, and a toast callback
    await updateSiswa(id, formDataToSend, Swal);

    // Close the modal after update attempt
    setIsModalOpen(false);
  };

  if (!siswa) {
    return <p>Siswa tidak ditemukan!</p>;
  }

  return (
    <>
      <div className="min-h-screen font-poppins bg-gray-200">
        <DashboardNavbar />
        <section className="pt-8 md:px-56 md:pb-5">
          <div className="md:flex md:items-center">
            <h1 className="font-bold text-xl text-center md:mr-5 md:text-2xl">
              Profil Saya
            </h1>
            <div className="bg-gray-800 h-[2px] w-[80%] md:w-[80%] mx-auto my-2"></div>
          </div>

          <section className="">
            <div className="mt-5 flex justify-center">
              <div className="w-20 h-20 md:w-40 md:h-40 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" className="w-full h-full" />
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <h1 className="font-bold text-xl text-center">
                  {siswa.full_name}
                </h1>
                <p className="text-sm text-center">{siswa.gmail}</p>
                <p className="text-sm text-center">Mahasiswa</p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleEditClick}
                className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 flex items-center gap-3"
              >
                <FaPen className="text-white" />
                <h1 className="text-white font-bold">Edit</h1>
              </button>
            </div>

            <div className="mt-8 md:flex md:items-center">
              <h1 className="font-bold text-xl md:text-2xl mr-5 text-center">
                Kelas
              </h1>
              <div className="bg-gray-800 h-[2px] w-[80%] md:w-full mx-auto my-2"></div>
            </div>

            <section className="pl-5 mt-3">
              <div>
                <h1 className="font-bold">Kelas Yang Diikuti</h1>
                <section className="pl-5 md:mt-3">
                  <div>
                    <ul className="list-disc pl-5">
                      {dataUserCourses.map((course) => (
                        <li key={course.id} className="flex items-center">
                          <span
                            className={`${
                              course.is_finish ? "bg-green-500" : "bg-red-500"
                            } rounded-full h-3 w-3 mr-2`}
                          ></span>
                          <h1 className="text-sm my-1">{course.Courses.name}</h1>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </section>
          </section>
        </section>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white rounded-lg p-6 md:w-96 w-[70%]">
            <h2 className="text-xl font-bold mb-4">Edit Profil</h2>
            <label className="block mb-2">
              <span className="text-gray-700">Nama Lengkap</span>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Nama Lengkap"
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Email"
              />
            </label>
            <div className="md:flex md:justify-end mt-4">
              <button
                className="mr-2 px-4 py-2 bg-gray-200 rounded-lg mb-3 md:mb-0 w-full active:bg-gray-500 hover:bg-opacity-50"
                onClick={handleCloseModal}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full active:bg-blue-700 hover:bg-opacity-50"
                onClick={handleUpdate}
              >
                Perbarui Profil
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MahasiswaProfil;
