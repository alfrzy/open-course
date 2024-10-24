import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData, {
  activateSiswa,
  blockSiswa,
} from "../../../Data/dataSiswa";
import DashboardNavbar from "../../../components/Navbar/DashboardNavbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons";
import useFetchUserCourses from "../../../Data/dataUserCourse";

const SiswaDetail = () => {
  const { id } = useParams();
  const { dataSiswa } = useFetchData();
  const { dataUserCourses } = useFetchUserCourses(id);

  const siswa = dataSiswa.find((s) => String(s.id) === String(id));

  const handleBlockUser = () => {
    blockSiswa(siswa.id);
  };

  const handleActivateUser = () => {
    activateSiswa(siswa.id);
  };

  if (!siswa) {
    return <p>Siswa tidak ditemukan!</p>;
  }

  return (
    <>
      <div className="min-h-screen font-poppins bg-gray-200">
        <DashboardNavbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6 md:ml-64">
            {/* content disini */}
            <section>
              {/* siswa and navigation */}
              <div className="flex ">
                <h1 className="font-bold text-lg">Siswa</h1>
                <nav className="text-gray-600 ml-[30%]">
                  <Link to="/" className="hover:text-blue-600">
                    Section
                  </Link>
                  <span className="mx-2"> &gt; </span>
                  <span className="font-medium"> {siswa.full_name}</span>
                </nav>
              </div>

              {/* kembali and block/activate user */}
              <div className="mt-5 flex justify-between">
                <a href="/siswa">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <h1 className="font-bold text-white text-md">
                      <span className="mr-3">&lt;</span> Kembali
                    </h1>
                  </button>
                </a>

                {siswa.status ? (
                  <button
                    onClick={handleBlockUser}
                    className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center"
                  >
                    <FontAwesomeIcon icon={faBan} className="mr-2" />
                    <h1 className="font-bold text-white text-md">Block User</h1>
                  </button>
                ) : (
                  <button
                    onClick={handleActivateUser}
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-800 flex items-center"
                  >
                    <FontAwesomeIcon icon={faCheck} className="mr-2" />
                    <h1 className="font-bold text-white text-md">
                      Aktifkan User
                    </h1>
                  </button>
                )}
              </div>

              <section className="pl-10">
                {/* profil and line */}
                <div className="mt-5 flex items-center ">
                  <h1 className="font-bold text-gray-800 text-xl mr-5">
                    Profil
                  </h1>
                  <div className="bg-gray-800 h-[3px] w-full"></div>
                </div>

                {/* poto profile and data */}
                <div className="mt-5 flex">
                  <div className="bg-orange-400 w-20 h-20 rounded-full mr-5 overflow-hidden">
                    <img
                      src="https://picsum.photos/seed/picsum/200/300"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">{siswa.full_name}</h1>
                    <p className="text-sm">{siswa.gmail}</p>
                    <p className="text-sm">Mahasiswa</p>
                  </div>
                </div>

                {/* kelas and line */}
                <div className="mt-8 flex items-center ">
                  <h1 className="font-bold text-gray-800 text-xl mr-5">
                    Kelas
                  </h1>
                  <div className="bg-gray-800 h-[3px] w-full"></div>
                </div>

                <section className="pl-5 mt-3">
                  {/* kelas yang diikuti && sertifikat */}

                  {/* kelas yang diikuti */}
                  <div>
                    <h1 className="font-bold">Kelas Yang Diikuti</h1>
                    <section className="pl-5 mt-3">
                      {/* Render daftar kelas */}
                      <div>
                        <ul className="list-disc pl-5">
                          {dataUserCourses.map((course) => (
                            <li key={course.id} className="flex items-center">
                              <span
                                className={`${
                                  course.is_finish
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                } rounded-full h-3 w-3 mr-2`}
                              ></span>
                              <h1 className="text-sm my-1">
                                {course.Courses.name}
                              </h1>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  </div>

                  {/* sertifikat */}
                </section>
              </section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiswaDetail;
