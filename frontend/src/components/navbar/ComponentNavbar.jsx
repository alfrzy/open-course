import React from "react";
import { NavLink } from "react-router-dom";
import ReactLogo from "../reactlogo/ReactLogo";
import ComponentButtonNavbar from "../button/ComponentButtonNavbar";
import { FiSearch } from "react-icons/fi";

const ComponentNavbar = () => {
  return (
    <section className="h-[60px] bg-biru2 font-poppins px-[32px] flex items-center justify-between">
      {/* LOGO, FE OPEN COURSE, NAVIGASI */}
      <section className="flex items-center justify-between">
        {/* logo */}
        <div className="mr-[8px]">
          <ReactLogo width={"50"} height={"50"} color={"white"} />
        </div>

        {/* FE OPEN COURSE */}
        <div className="mr-[25px]">
          <h1 className="font-bold text-[24px] text-white">Fe Open Courses</h1>
        </div>

        {/* Navigasi */}
        <div className="flex gap-3">
          <NavLink
            to="/kelas"
            className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""}`}
          >
            Kelas
          </NavLink>
          <NavLink
            to="/sertifikat"
            className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""}`}
          >
            Sertifikat Terprogram
          </NavLink>
          <NavLink
            to="/tentang"
            className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""}`}
          >
            Tentang
          </NavLink>
        </div>
      </section>

      {/* SEARCH, DAFTAR, MASUK */}
      <section className="flex gap-3 items-center">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            className="bg-white pr-8 pl-4 py-2 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:border-transparent"
            placeholder="Search..."
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch />
          </span>
        </div>

        {/* Daftar */}
        <ComponentButtonNavbar text={"Daftar"} style={"bg-kosong"} link={"register"} />

        {/* Masuk */}
        <ComponentButtonNavbar text={"Masuk"} style={"bg-red"} link={"login"} />
      </section>
    </section>
  );
};

export default ComponentNavbar;
