import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import { useFetchCourses, useFetchCoursesByInstructor } from "../../Data/DataCourse";
import { useSelector } from "react-redux";
import useFetchTotalSiswaInCourses from "../../Data/dataDosenAndSiswa";
import DosenCardKelas from "../../components/Card/dosenCardKelas";
import { FaBookOpen } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import InfoBox from "../../components/boxInfo/boxInfo";

const DosenDashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const loggedInUserId = user?.id;
  const role = user?.role ?? null;
  const instructorId = loggedInUserId;

  // ---------------------------- JUMLAH SISWA ----------------------------------
  const { totalSiswa } = useFetchTotalSiswaInCourses(instructorId);

  // ---------------------------- LIST KELAS ----------------------------------
  const {
    dataCourse,
    loading: coursesLoading,
    error: error,
  } = useFetchCoursesByInstructor(instructorId);
  const totalCourses = dataCourse?.length || 0;

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 md:ml-64">
          {/* content disini */}
          <h1 className="text-2xl font-bold">Dosen Dashboard</h1>
          {/* -------------------- INFO BOX ------------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <InfoBox
              icon={FaBookOpen}
              title="Kelas Terpublikasi"
              count={totalCourses}
            />
            <InfoBox
              icon={PiStudentBold}
              title="Banyak Siswa"
              count={totalSiswa}
            />
          </div>

          {/* -------------------------- DAFTAR KELAS -------------------- */}
          <section className="mt-16">
            <div className="flex items-center w-full mb-5">
              <h1 className="font-bold text-2xl">Daftar Kelas</h1>
              <div className="flex-1 h-[3px] bg-gray-400 ml-4"></div>
            </div>
            {coursesLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dataCourse.map((course) => (
                  <DosenCardKelas key={course.id} course={course} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default DosenDashboard;
