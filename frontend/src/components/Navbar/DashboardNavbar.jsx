import React, { useState } from "react";


const DashboardNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-700 shadow px-4 py-3 flex justify-between items-center font-poppins">
      <div className="text-xl font-bold text-white">FE Open Course</div>

      <div className="relative">
        <button className="flex items-center space-x-2 focus:outline-none" onClick={toggleDropdown}>
          <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
              Dashboard
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
              Profile
            </a>
            <hr className="h-px border-1 md:border-2 mx-2 bg-gray-500" />
            <a href="#" className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
              <button type="submit">Logout</button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
