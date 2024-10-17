import React from "react";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import useFetchUserCourses from "../../Data/dataUserCourse";
import { useSelector } from "react-redux";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const MahasiswaKelas = () => {
  const loggedInUserId = useSelector((state) => state.auth.user?.id);
  const { dataUserCourses, loading, error } = useFetchUserCourses(loggedInUserId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
      <DashboardNavbar />
      <section className="bg-orange-200 p-10">
        <h1 className="text-2xl font-bold mb-14">
          Selamat Datang kembali, name
        </h1>
        <div className="flex justify-between mb-4">
          <h1>Kelas Kamu</h1>
          <h1>Progress</h1>
          <h1>Selesai</h1>
        </div>

        <section className="md:flex md:justify-between">
          {dataUserCourses.map((kelas) => (
            <section key={kelas.id} className="mb-4 md:w-[30%]">
              <div className="bg-orange-300 w-full h-28 mb-0 p-4"></div>
              <h1 className="font-bold text-lg">
                {kelas.Courses?.name}
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                culpa aperiam sunt fuga.
              </p>
              <div className="mt-2">
                <div className="flex gap-3 items-center">
                  <FaChalkboardTeacher className="font-bold w-4 h-4 my-1" />
                  <h1 className="text-sm">Instruktur: {kelas.Courses?.Users?.name}</h1>
                </div>
                <div className="flex gap-3 items-center">
                  <MdClass className="font-bold w-4 h-4 my-1" />
                  <h1 className="text-sm">Kelas satuan</h1>
                </div>
                <div className="flex gap-3 items-center">
                  <FaClock className="font-bold w-4 h-4 my-1" />
                  <h1 className="text-sm">Durasi: {kelas.duration}</h1>
                </div>
              </div>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default MahasiswaKelas;
