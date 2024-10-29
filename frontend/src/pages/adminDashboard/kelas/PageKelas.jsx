import React from "react";
import DashboardNavbar from "../../../components/Navbar/DashboardNavbar";
import Sidebar from "../../../components/Sidebar/Sidebar";

const PageKelas = () => {
  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 md:ml-64">
          {/* content disini */}
          <h1 className="text-2xl font-bold">Kelas</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <h1>Page Kelas</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageKelas;
