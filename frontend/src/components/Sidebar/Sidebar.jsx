import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineDown, AiOutlineUser } from "react-icons/ai"; // Import ikon panah dan user profile
import { useAuth } from "../../redux/auth/authSlice";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserManagementOpen, setUserManagementOpen] = useState(false); // Untuk dropdown "Manajemen User"

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserManagement = () => {
    setUserManagementOpen(!isUserManagementOpen);
  };

  const { role } = useAuth();

  return (
    <div className="flex font-poppins">
      {/* mobile menu toggle */}
      <button className="md:hidden p-4 focus:outline-none" onClick={toggleSidebar}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* content sidebar */}
      <div className={`fixed z-20 inset-y-0 left-0 w-64  bg-white text-black transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="bg-white p-4">
          <h1 className="text-xl text-center font-bold text-blue-700">FE Open Course</h1>
          <hr className="my-5 border-2 border-blue-700" />
        </div>
        <nav className="mt-10 ">
          {/* role dosen */}
          {role === "1" ? (
            <>
              <a href="/dosen-dashboard" className="flex items-center py-2.5 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">
                <MdDashboard className="mr-2" />
                Dashboard
              </a>
            </>
          ) : // role admin
          role === "2" ? (
            <>
              <a href="/admin-dashboard" className="flex items-center py-2.5 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">
                <MdDashboard className="mr-2" />
                Dashboard
              </a>
              <a href="/kelas" className="flex items-center py-2.5 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">
                <IoBookSharp className="mr-2" />
                Kelas
              </a>

              {/* Manajemen User dengan dropdown */}
              <div className="relative">
                <button
                  onClick={toggleUserManagement}
                  className="flex items-center w-full py-2.5 px-4 transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  <FaPeopleGroup className="mr-2" />
                  Manajemen User
                  <AiOutlineDown className="ml-auto" />
                </button>

                {/* Dropdown content untuk Manajemen User */}
                {isUserManagementOpen && (
                  <div className="ml-6 bg-white">
                    <a href="/manajemen/dosen" className="flex items-center py-2.5 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">
                      <AiOutlineUser className="mr-2" />
                      Dosen
                    </a>
                    <a href="/manajemen/mahasiswa" className="flex items-center py-2.5 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">
                      <AiOutlineUser className="mr-2" />
                      Mahasiswa
                    </a>
                  </div>
                )}
              </div>
            </>
          ) : (
            // role mahasiswa
            <>
              <a href="/mahasiswa-dashboard" className="flex items-center py-2.5 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">
                <MdDashboard className="mr-2" />
                Dashboard
              </a>
            </>
          )}
        </nav>
      </div>

      {/* mobile toggle */}
      {isSidebarOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 md:hidden"></div>}
    </div>
  );
};

export default Sidebar;
