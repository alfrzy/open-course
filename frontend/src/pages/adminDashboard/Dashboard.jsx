import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import { useFetchCourses } from "../../Data/DataCourse";
import useFetchDataDosen from "../../Data/DataDosen";
import useFetchData from "../../Data/DataSiswa";
import { useState } from "react";
import AdminCardKelas from "../../components/Card/adminCardKelas";
import { FaBookOpen } from "react-icons/fa";
import InfoBox from "../../components/boxInfo/boxInfo";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";

const Dashboard = () => {
  // ---------------------------- JUMLAH KELAS ----------------------------------
  const { dataCourse, loading, error } = useFetchCourses();
  const totalCourses = dataCourse?.filter((course) => course.is_publish).length || 0;


  // ---------------------------- BANYAK SISWA ----------------------------------
  const { dataSiswa } = useFetchData();
  const totalSiswa = dataSiswa?.length || 0;

  // ---------------------------- BANYAK DOSEN ----------------------------------
  const { dataDosen } = useFetchDataDosen();
  const totalDosen = dataDosen?.length || 0;

  // ---------------------------- LIST KELAS -----------------------------------
  const [visibleCards, setVisibleCards] = useState(6);

  const loadMoreCards = () => {
    setVisibleCards((prevVisible) => prevVisible + 6);
  };

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 md:ml-64">
          {/* content disini */}
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>

          {/* -------------------- INFO BOX ------------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <InfoBox
              icon={FaBookOpen}
              title="Kelas Terpublikasi"
              count={totalCourses}
            />
            <InfoBox
              icon={PiStudentBold}
              title="Jumlah Siswa"
              count={totalSiswa}
            />
            <InfoBox icon={GiTeacher} title="Jumlah Dosen" count={totalDosen} />
          </div>

          {/* -------------------------- DAFTAR KELAS -------------------- */}
          <section className="mt-16">
            <div className="flex items-center w-full mb-5">
              <h1 className="font-bold text-2xl">Daftar Kelas</h1>
              <div className="flex-1 h-[3px] bg-gray-400 ml-4"></div>
            </div>
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {dataCourse.slice(0, visibleCards).map((course) => (
                    <AdminCardKelas
                      key={course.id}
                      course={course} 
                    />
                  ))}
                </div>
              )}

              <div className="flex justify-center">
                {/* Conditional rendering  */}
                {visibleCards < dataCourse.length && (
                  <button
                    onClick={loadMoreCards}
                    className="mt-5 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Selengkapnya
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
