import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ComponentButton from "../Button/ComponentButton";
import { FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import ReactLogo from "../reactlogo/ReactLogo";
import { useDispatch, useSelector } from "react-redux";
import { useAuth, checkAuth, logout } from "../../redux/auth/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user?.id);
  const { isAuth, role } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    Navigate("/");
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
          <NavLink to="/" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
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
        {!isAuth ? (
          <>
            <div className="relative">
              <input type="text" className="bg-white pr-8 pl-4 py-2 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:border-transparent" placeholder="Search..." />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FiSearch />
              </span>
            </div>
            <ComponentButton text={"Daftar"} color={"bg-blue-500"} link={"/register"} />
            <ComponentButton text={"Masuk"} color={"bg-blue-800"} link={"/login"} />
          </>
        ) : (
          <>
            {role === 0 && (
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none" onClick={toggleDropdown}>
                  <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
                    <a href="/mahasiswa-kelas" className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
                      Dashboard
                    </a>
                    <a href={`/profil/${userId}`} className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
                      Profile
                    </a>
                    <a href="/pembelian" className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
                      Pembelian
                    </a>
                    <button className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
            {role === 1 && (
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none" onClick={toggleDropdown}>
                  <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
                    <a href="/dosen-dashboard" className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
                      Dashboard
                    </a>
                    <a href={`/profil/${userId}`} className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
                      Profile
                    </a>
                    <button className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
            {role === 2 && (
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none" onClick={toggleDropdown}>
                  <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
                    <a href="/admin-dashboard" className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
                      Dashboard
                    </a>
                    <a href={`/profil/${userId}`} className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200">
                      Profile
                    </a>
                    <button className="block px-4 py-2 text-gray-700 hover:font-semibold hover:text-blue-500 hover:bg-gray-100 hover:border-l-4 hover:border-blue-700 transition duration-200" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <button onClick={handleLogout} className="text-white text-[16px] hover:underline">
              Logout
            </button>
          </>
        )}
      </section>

      {/* Mobile menu */}
      {isMenuOpen && (
        <section className="md:hidden absolute top-[60px] left-0 w-full bg-blue-700 flex flex-col items-center py-4 space-y-3">
          <NavLink to="/" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
            Kelas
          </NavLink>
          <NavLink to="/sertifikat" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
            Sertifikat Terprogram
          </NavLink>
          <NavLink to="/tentang" className={({ isActive }) => `text-white text-[16px] ${isActive ? "underline font-bold" : ""} hover:underline hover:text-black`}>
            Tentang
          </NavLink>

          {!isAuth ? (
            <>
              <div className="relative w-4/5">
                <input type="text" className="bg-white pr-8 pl-4 py-2 border border-gray-300 rounded-md shadow-xl w-full focus:outline-none focus:border-transparent" placeholder="Search..." />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <FiSearch />
                </span>
              </div>
              <ComponentButton text={"Daftar"} color={"bg-blue-500"} link={"/register"} />
              <ComponentButton text={"Masuk"} color={"bg-blue-800"} link={"/login"} />
            </>
          ) : (
            <>
              {role === 0 && (
                <NavLink to="/dashboard" className="text-white text-[16px] hover:underline">
                  Dashboard (Siswa)
                </NavLink>
              )}
              {role === 1 && (
                <NavLink to="/dashboard-dosen" className="text-white text-[16px] hover:underline">
                  Dashboard (Dosen)
                </NavLink>
              )}
              {role === 2 && (
                <NavLink to="/dashboard-admin" className="text-white text-[16px] hover:underline">
                  Dashboard (Admin)
                </NavLink>
              )}
              <button onClick={handleLogout} className="text-white text-[16px] hover:underline">
                Logout
              </button>
            </>
          )}
        </section>
      )}
    </section>
  );
};

export default Navbar;
