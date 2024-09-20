import React from "react";
import ReactLogo from "../../../components/reactlogo/ReactLogo";

const Register = () => {
  return (
    <section className="flex mx-auto justify-center items-center font-poppins ">
      <section className=" w-[80%] lg:w-[40%] pb-20">
        {/* GAMBAR && FE OPEN COURSE */}
        <section className="md:flex items-center gap-5 pt-[50px] pb-[0px] mb-[10px]">
          {/* GAMBAR */}
          <div className="flex justify-center">
            <div className="w-20 h-20 items-center flex">
              <ReactLogo width={"75"} height={"75"} color={"#1172B4"} />
            </div>
          </div>

          {/* FE OPEN COURSE */}
          <h1 className="text-[35px] text-biru1 font-bold text-center">
            FE OPEN COURSES
          </h1>
        </section>

        {/* KOTAK */}
        <section className="bg-white  p-[24px] rounded-xl shadow-xl">
          {/* daftar */}
          <h1 className="text-[32px] text-biru1">Daftar</h1>

          {/* line */}
          <div className="h-1 bg-biru1 mb-[24px]"></div>

          {/* Input Fields */}
          <InputField
            label="Nama Lengkap"
            id="nama_lengkap"
            placeholder="Nama Lengkap"
          />
          <InputField label="Email" id="email" placeholder="Email" />
          <InputField
            label="Password"
            id="password"
            placeholder="Password"
            type="password"
          />
          <InputField
            label="Ulangi Password"
            id="password_ulang"
            placeholder="Ulangi Password"
            type="password"
          />

          {/* Saya sudah punya akun */}
          <section className="flex justify-between text-[12px] mb-[40px] text-biru1">
            <h1>Sudah punya akun?</h1>
            <a href="forgot">
              <h1 className="hover:opacity-50  hover:font-bold">
                Lupa password
              </h1>
            </a>
          </section>

          {/* Tombol Daftar */}
          <Button text="Daftar" />

          {/* Login Google */}
        </section>
      </section>
    </section>
  );
};

// Komponen InputField
const InputField = ({ label, id, placeholder, type = "text" }) => {
  return (
    <section className="mb-[24px]">
      <label htmlFor={id}>
        <h1 className="text-[12px] font-bold">{label}</h1>
      </label>
      <input
        id={id}
        type={type}
        className="p-3 border-gray-700 w-full rounded-xl"
        placeholder={placeholder}
      />
    </section>
  );
};

// Komponen Button
const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-biru1 py-[8px] w-full hover:bg-biru2 transition-all duration-800"
      onClick={onClick}
    >
      <h1 className="font-bold text-[16px] text-white">{text}</h1>
    </button>
  );
};

export default Register;
