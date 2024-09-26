import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 md:ml-64">
          {/* content disini */}
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Kelas Terpublikasi</h2>
              <p className="mt-2 text-3xl">3</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Banyak Siswa</h2>
              <p className="mt-2 text-3xl">225</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Siswa Lulus</h2>
              <p className="mt-2 text-3xl">148</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
