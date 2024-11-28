import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import { useFetchUserCourses } from "../../Data/dataUserCourse";
import { useSelector } from "react-redux";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const MahasiswaKelas = () => {
  const loggedInUserId = useSelector((state) => state.auth.user?.id);
  const userName = useSelector((state) => state.auth.user?.full_name);
  const { dataUserCourses, loading, error } =
    useFetchUserCourses(loggedInUserId);

  const [activeTab, setActiveTab] = useState("kelas"); 
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // filter is_finish
  const finishedCourses = dataUserCourses.filter((kelas) => kelas.is_finish);
  const ongoingCourses = dataUserCourses.filter((kelas) => !kelas.is_finish);

  return (
    <section>
      <DashboardNavbar />
      <section className="bg-gray-200 p-5 md:p-10">
        <h1 className="text-2xl font-bold mb-5 md:mb-14">
          Selamat Datang kembali, {userName}
        </h1>

        {/* Navbar untuk navigasi */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setActiveTab("kelas")}
            className={`px-4 py-2 rounded border-b-2 ${
              activeTab === "kelas"
                ? "border-blue-500 border-b-[5px] text-blue-500 font-bold"
                : "border-transparent"
            }`}
          >
            Kelas Kamu
          </button>
          <button
            onClick={() => setActiveTab("progress")}
            className={`px-4 py-2 rounded border-b-2 ${
              activeTab === "progress"
                ? "border-blue-500 border-b-[5px] text-blue-500 font-bold"
                : "border-transparent"
            }`}
          >
            Progress
          </button>
          <button
            onClick={() => setActiveTab("selesai")}
            className={`px-4 py-2 rounded border-b-2 ${
              activeTab === "selesai"
                ? "border-blue-500 border-b-[5px] text-blue-500 font-bold"
                : "border-transparent"
            }`}
          >
            Selesai
          </button>
        </div>

        {/* Konten berdasarkan tab aktif */}
        {activeTab === "kelas" && (
          <section className="md:flex md:justify-start md:flex-wrap">
            {dataUserCourses.map((kelas) => (
              <Link
              key={kelas.course_id}
              to={`/mahasiswa-detail-kelas/${kelas.course_id}/dashboard`} // Link ke halaman detail
              className="mb-4 md:w-[30%] md:mr-10"
            >
              <section key={kelas.course_id}>
                <div className="bg-red-500 w-full h-36 mb-0 p-4"></div>
                <h1 className="font-bold text-lg">{kelas.CourseRelation.name}</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis culpa aperiam sunt fuga.
                </p>
                <div className="mt-2">
                  <div className="flex gap-3 items-center">
                    <FaChalkboardTeacher className="font-bold w-4 h-4 my-1" />
                    <h1 className="text-sm">
                      Instruktur:{" "}
                      {kelas.CourseRelation?.Instructor?.full_name ||
                        "data masih null"}
                    </h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <MdClass className="font-bold w-4 h-4 my-1" />
                    <h1 className="text-sm">Kelas satuan</h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FaClock className="font-bold w-4 h-4 my-1" />
                    <h1 className="text-sm">Durasi: {kelas.CourseRelation?.duration} jam</h1>
                  </div>
                </div>
              </section>
              </Link>
            ))}
          </section>
        )}

        {activeTab === "progress" && (
          <section className="md:flex md:justify-start md:flex-wrap">
            {ongoingCourses.map((kelas) => (
              <Link
              key={kelas.course_id}
              to={`/mahasiswa-detail-kelas/${kelas.course_id}/dashboard`} // Link ke halaman detail
              className="mb-4 md:w-[30%] md:mr-10"
            >
              <section key={kelas.course_id}>
                <div className="bg-red-500 w-full h-36 mb-0 p-4"></div>
                <h1 className="font-bold text-lg">{kelas.CourseRelation?.name}</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis culpa aperiam sunt fuga.
                </p>
                <div className="mt-2">
                  <div className="flex gap-3 items-center">
                    <FaChalkboardTeacher className="font-bold w-4 h-4 my-1" />
                    <h1 className="text-sm">
                      Instruktur:{" "}
                      {kelas.CourseRelation?.Instructor?.full_name ||
                        "data masih null"}
                    </h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <MdClass className="font-bold w-4 h-4 my-1" />
                    <h1 className="text-sm">Kelas satuan</h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FaClock className="font-bold w-4 h-4 my-1" />
                    <h1 className="text-sm">Durasi: {kelas.CourseRelation?.duration} jam</h1>
                  </div>
                </div>
              </section>
              </Link>
            ))}
          </section>
        )}

        {activeTab === "selesai" && (
          <section className="md:flex md:justify-start md:flex-wrap">
            {finishedCourses.map((kelas) => (
              <Link
              key={kelas.course_id}
              to={`/mahasiswa-detail-kelas/${kelas.course_id}/dashboard`} // Link ke halaman detail
              className="mb-4 md:w-[30%] md:mr-10"
            >
              <section key={kelas.course_id}>
                <div className="bg-red-500 w-full h-36 mb-0 p-4"></div>
                <h1 className="font-bold text-lg">{kelas.CourseRelation?.name}</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis culpa aperiam sunt fuga.
                </p>
                <div className="mt-2">
                  <div className="flex gap-3 items-center">
                    <FaChalkboardTeacher className="font-bold w-4 h-4 my-1" />
                    <h1 className="text-sm">
                      Instruktur:{" "}
                      {kelas.CourseRelation?.Instructor?.full_name ||
                        "data masih null"}
                    </h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <MdClass className="font-bold w-4 h-4 my-1" />
                    <h1 className="text-sm">Kelas satuan</h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FaClock className="font-bold w-4 h-4 my-1" />
                    <h1 className="text-sm">Durasi: {kelas.CourseRelation?.duration} jam</h1>
                  </div>
                </div>
              </section>
              </Link>
            ))}
          </section>
        )}
      </section>
    </section>
  );
};

export default MahasiswaKelas;
