import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import CRUDDosen from "./CRUDDosen";

const Dosen = () => {
  return (
    <div className="min-h-screen font-poppins bg-gray-200 overflow-hidden overflow-x-scroll">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 md:ml-64">
          {/* content disini */}
          <CRUDDosen />
        </div>
      </div>
    </div>
  );
};

export default Dosen;
