import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Toaster, toast } from "react-hot-toast";
import ReactLogo from "../../../components/reactlogo/ReactLogo";
import Navbar from "../../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register2 = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [userData, setUserData] = useState({
    full_name: "",
    username: "",
    gmail: "",
    password: "",
    ulangi_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/save", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Registrasi berhasil!", {
          duration: 3000,
          position: "top-center",
        });
        navigate("/mhs-dashboard", { replace: true });
      } else {
        toast.error(response.data.message || "Terjadi kesalahan saat registrasi.", {
          duration: 3000,
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Terjadi kesalahan saat registrasi.", {
          duration: 3000,
          position: "top-right",
        });
      } else {
        toast.error("Terjadi kesalahan saat menghubungi server.", {
          duration: 3000,
          position: "top-right",
        });
      }
    }
  };

  return (
    <div className="font-poppins ">
      <Toaster />
      <Navbar />
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-8 shadow-lg">
          <div className="md:flex md:justify-center md:items-center md:gap-3 mb-6">
            <div className="flex justify-center">
              <ReactLogo width={"75"} height={"75"} color={"#1172B4"} />
            </div>
            <a href="#" className="flex items-center text-center text-4xl font-bold text-biru1">
              FE Open Course
            </a>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-biru1 md:text-2xl">Register</h1>
              <hr className="border-biru1 border-1" />
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* nama lengkap */}
                <InputField label="Nama Lengkap" type="text" id="full_name" name="full_name" placeholder="ahmad aziz fauzi" value={userData.full_name} onChange={handleChange} />

                {/* username */}
                <InputField label="Username" type="text" id="username" name="username" placeholder="username123" value={userData.username} onChange={handleChange} />

                {/* gmail */}
                <InputField label="gmail" type="gmail" id="gmail" name="gmail" placeholder="name@company.com" value={userData.gmail} onChange={handleChange} />

                {/* password */}
                <div className="relative">
                  <InputField label="Password" type={showPassword ? "text" : "password"} id="password" name="password" placeholder="••••••••" value={userData.password} onChange={handleChange} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 mt-5 px-3 text-black focus:outline-none ">
                    {showPassword ? <IoMdEyeOff size={24} /> : <IoMdEye size={24} />}
                  </button>
                </div>

                {/* retipe password */}
                <div className="relative">
                  <InputField label="Ulangi password" type={showPassword2 ? "text" : "password"} id="ulangi_password" name="ulangi_password" placeholder="••••••••" value={userData.ulangi_password} onChange={handleChange} />
                  <button type="button" onClick={() => setShowPassword2(!showPassword2)} className="absolute inset-y-0 right-0 mt-5 px-3 text-black focus:outline-none">
                    {showPassword2 ? <IoMdEyeOff size={24} /> : <IoMdEye size={24} />}
                  </button>
                </div>

                {/* sudah punya akun */}
                <div className="flex items-center justify-between">
                  <a href="#" className="text-sm font-medium text-biru3 hover:underline">
                    Sudah punya akun?
                  </a>
                  <a href="#" className="text-sm font-medium text-biru3 hover:underline">
                    Lupa password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-biru1 transition-all duration-200 hover:bg-opacity-80"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const InputField = ({ label, type, id, name, placeholder, value, onChange }) => (
  <div className="relative">
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
      <h1 className="text-biru1">{label}</h1>
    </label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:border-transparent block w-full p-2.5"
      required
    />
  </div>
);

export default Register2;
