import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ComponentButton from "../Button/ComponentButton";
import { FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import ReactLogo from "../reactlogo/ReactLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="h-[60px] bg-blue-700 px-[32px] flex items-center justify-between font-poppins">
      {/* Left section */}
      <section className="flex items-center justify-between w-full md:w-auto gap-3">
        <ReactLogo color={"white"} height={"50"} width={"50"} />
        <div className="mr-[25px]">
          <h1 className="font-bold text-[18px] md:text-[24px] text-white">Fe Open Courses</h1>
        </div>

        {/* Menu links for desktop */}
        <div className="hidden md:flex gap-3">
          <NavLink to="/kelas" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
            Kelas
          </NavLink>
          <NavLink to="/sertifikat" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
            Sertifikat Terprogram
          </NavLink>
          <NavLink to="/tentang" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
            Tentang
          </NavLink>
        </div>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={24} /> : <FiMenu size={24} />}
        </button>
      </section>

      {/* Right section */}
      <section className="hidden md:flex gap-3 items-center">
        {/* Search */}
        <div className="relative">
          <input type="text" className="bg-white pr-8 pl-4 py-2 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:border-transparent" placeholder="Search..." />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch />
          </span>
        </div>

        <ComponentButton text={"Daftar"} color={"bg-blue-500"} link={"register"} />
        <ComponentButton text={"Masuk"} color={"bg-blue-800"} link={"login"} />
      </section>

      {/* Mobile menu */}
      {isMenuOpen && (
        <section className="md:hidden absolute top-[60px] left-0 w-full bg-blue-500 flex flex-col items-center py-4 space-y-3">
          <NavLink to="/kelas" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
            Kelas
          </NavLink>
          <NavLink to="/sertifikat" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
            Sertifikat Terprogram
          </NavLink>
          <NavLink to="/tentang" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
            Tentang
          </NavLink>

          {/* Search input */}
          <div className="relative w-4/5">
            <input type="text" className="bg-white pr-8 pl-4 py-2 border border-gray-300 rounded-md shadow-xl w-full focus:outline-none focus:border-transparent" placeholder="Search..." />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FiSearch />
            </span>
          </div>

          <ComponentButton text={"Daftar"} color={"bg-blue-500"} link={"register"} />
          <ComponentButton text={"Masuk"} color={"bg-blue-800"} link={"login"} />
        </section>
      )}
    </section>
  );
};

export default Navbar;
