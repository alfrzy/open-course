import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Navbar from "../../../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ReactLogo from "../../../components/reactlogo/ReactLogo";
import { login, setRole } from "../../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        {
          gmail: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = response.data;

      if (response.status === 200) {
        toast.success("Login successful!");
        dispatch(login(data.data.token));
        dispatch(setRole(data.data.user.role));
        if (data.data.user && data.data.user.role === 2) {
          navigate("/admin-dashboard", { replace: true });
        } else if (data.data.user && data.data.user.role === 1) {
          navigate("/dosen-dashboard", { replace: true });
        } else if (data.data.user && data.data.user.role === 0) {
          navigate("/mahasiswa-dashboard", { replace: true });
        }
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        const errorMsg = typeof error.response.data === "object" ? error.response.data.msg : error.response.data;
        toast.error(errorMsg || "An error occurred");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 font-poppins">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 shadow-lg">
          <div className="flex md:flex-row gap-6 flex-col">
            <div className="mx-auto">
              <ReactLogo color={"#1172B4"} height={"75"} width={"75"} />
            </div>
            <a href="#" className="flex items-center  text-4xl font-bold text-blue-600">
              FE Open Course
            </a>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Masuk</h1>
              <hr className=" border-gray-900 border-1" />
              <form className="space-y-4 md:space-y-6" onSubmit={Auth}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="relative">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 mt-5 px-3 text-black focus:outline-none">
                    {showPassword ? <IoMdEyeOff size={24} /> : <IoMdEye size={24} />}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">
                    Lupa password?
                  </a>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">
                    Lupa password?
                  </a>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  Masuk
                </button>
              </form>
              {msg && <div className="text-red-500">{msg}</div>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
