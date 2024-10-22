import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import ComponentButton from "../../components/Button/ComponentButton";
import useFetchCourses from "../../Data/DataCourse";
import { useSelector } from "react-redux";

const DosenKelas = () => {
  const loggedInUserId = useSelector((state) => state.auth.user?.id);
  const role = useSelector((state) => state.auth.user?.role); 
  const { dataCourse, loading, error } = useFetchCourses(loggedInUserId, role);
  const [filter, setFilter] = useState("Semua");

  // Filter data berdasarkan is_publish
  const filteredClasses = dataCourse.filter((kelas) => {
    if (filter === "Publik") {
      return kelas.is_publish === true;
    } else if (filter === "Draft") {
      return kelas.is_publish === false;
    } else {
      return true;
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 md:ml-64">
          {/* CONTENT */}
          <h1 className="font-bold text-xl mb-10">Kelas</h1>

          {/* button tambah kelas */}
          <div className="block md:hidden my-3">
            <a href="/dosen-addkelas">
              <ComponentButton color={"bg-blue-700"} text={"Tambah Kelas"} />
            </a>
          </div>

          <section className="flex justify-between">
            {/* Filter text */}
            <div className="flex justify-start space-x-4 mb-4">
              <FilterText filter={filter} setFilter={setFilter} label="Semua" />
              <FilterText filter={filter} setFilter={setFilter} label="Publik" />
              <FilterText filter={filter} setFilter={setFilter} label="Draft" />
            </div>
            <ComponentButton
              color={"bg-blue-600"}
              link={"/dosen-addkelas"}
              text={"Tambah kelas"}
            />
          </section>

          {/* List Card */}
          <section className="md:flex md:flex-wrap md:justify-start">
            {filteredClasses.map((kelas) => (
              <Link
                key={kelas.id}
                to={`/dosen-kelas/${kelas.id}`}
                className="w-full h-40 mt-6 md:w-[23%] relative md:mr-4"
              >
                <div
                  className={`bg-red-500 hover:bg-opacity-50 transition-all duration-300 h-[85%] ${
                    kelas.is_publish === false ? "relative" : ""
                  }`}
                >
                  {/* Teks "Draft" ditampilkan di pojok kanan atas jika kursus belum dipublish */}
                  {kelas.is_publish === false && (
                    <span className="absolute top-0 right-0 bg-white text-red-500 text-xs font-bold px-2">
                      Draft
                    </span>
                  )}
                </div>
                <section className="h-[15%]">
                  <h1 className="font-bold">{kelas.name}</h1>
                </section>
              </Link>
            ))}
          </section>
          {/* CONTENT END */}
        </div>
      </div>
    </div>
  );
};

const FilterText = ({ filter, setFilter, label }) => {
  const isActive = filter === label;

  return (
    <span
      onClick={() => setFilter(label)}
      className={`cursor-pointer text-sm font-medium ${
        isActive ? "underline text-blue-700" : "text-black"
      } hover:text-blue-700`}
    >
      <h1 className="font-bold text-[16px]">{label}</h1>
    </span>
  );
};

export default DosenKelas;
