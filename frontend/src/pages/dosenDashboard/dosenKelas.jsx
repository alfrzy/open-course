import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import ComponentButton from "../../components/Button/ComponentButton";

const DosenKelas = () => {
  // Data kelas
  const allClasses = [
    { id: 1, name: "Manejemen Keuangan Pribadi", type: "Publik" },
    { id: 2, name: "Analisis Data", type: "Publik" },
    { id: 3, name: "Pemrograman Web", type: "Publik" },
    { id: 4, name: "Kecerdasan Buatan", type: "Pending" },
    { id: 5, name: "Statistika Lanjut", type: "Publik" },
    { id: 6, name: "Machine Learning", type: "Publik" },
    { id: 7, name: "Sistem Informasi", type: "Draft" },
    { id: 8, name: "Pengembangan Perangkat Lunak", type: "Pending" },
    { id: 9, name: "Keamanan Jaringan", type: "Publik" },
    { id: 10, name: "Desain Grafis", type: "Publik" },
  ];

  const [filter, setFilter] = useState("Semua");
  const filteredClasses = allClasses.filter((kelas) => {
    return filter === "Semua" || kelas.type === filter;
  });

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
          <section className="md:flex md:flex-wrap md:justify-between">
            {filteredClasses.map((kelas) => (
              <section key={kelas.id} className="w-full h-40 mt-6 md:w-[23%] relative">
                <div className={`bg-red-500 h-[85%] ${kelas.type === "Draft" ? "relative" : ""}`}>
                  {/* Teks "Draft" ditampilkan di pojok kanan atas  */}
                  {kelas.type === "Draft" && (
                    <span className="absolute top-0 right-0 bg-white text-red-500 text-xs font-bold px-2">
                      Draft
                    </span>
                  )}
                </div>
                <section className="h-[15%]">
                  <h1 className="font-bold">{kelas.name}</h1>
                </section>
              </section>
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
