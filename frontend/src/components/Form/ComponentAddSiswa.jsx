import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { addSiswa } from "../../Data/DataSiswa";
import Swal from "sweetalert2";

const ComponentAddSiswa = ({ toggleModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    gmail: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data sebelum dikirim:", formData); // Log untuk cek form

    // Siapkan data yang akan dikirim
    const dataToSend = {
        full_name: formData.full_name,
        gmail: formData.gmail,
        password: formData.password,
        username: formData.username,
        role: 0, // Tambahkan role jika perlu
    };

    console.log("Data yang akan dikirim:", dataToSend); // Log untuk cek data yang akan dikirim

    try {
        // Kirim data sebagai JSON string
        const response = await addSiswa(JSON.stringify(dataToSend)); 
        console.log("Response dari server:", response); // Log response dari server

        // Reset form setelah berhasil menambahkan siswa
        setFormData({
            full_name: "",
            gmail: "",
            password: "",
            username: "",
        });

        Swal.fire({
            icon: "success",
            title: "Akun Siswa berhasil ditambahkan!",
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Gagal menambahkan akun siswa",
            text: "Terjadi kesalahan saat menambahkan akun siswa.",
            confirmButtonText: "OK",
        });
    }
};

  return (
    <>
      <div className="w-[80%] mx-auto mb-10">
        <h1 className="text-center text-2xl font-bold mb-2">
          Form Tambah siswa
        </h1>
        <hr className="border-1 border-solid border-black" />
      </div>
      <form className="w-[80%] mx-auto" onSubmit={handleSubmit}>
  <div className="flex flex-col mb-3">
    <InputField
      id="full_name"
      label="Full Name"
      type="text"
      placeholder="Ahmad Aziz Fauzi"
      showPasswordToggle={false}
      name="full_name"
      value={formData.full_name}
      onChange={handleChange}
    />
  </div>
  <div className="flex flex-col mb-3">
    <InputField
      id="gmail"
      label="Gmail"
      type="email" 
      placeholder="oratu@gmail.com"
      showPasswordToggle={false}
      name="gmail"
      value={formData.gmail}
      onChange={handleChange}
    />
  </div>
  <div className="flex flex-col mb-3">
    <InputField
      id="username"
      label="Username"
      type="text"
      placeholder="username"
      showPasswordToggle={false}
      name="username"
      value={formData.username}
      onChange={handleChange}
    />
  </div>
  <div className="flex flex-col mb-3">
    <InputField
      id="password"
      label="Password"
      type="password"
      placeholder=""
      showPasswordToggle={true}
      showPassword={showPassword}
      onTogglePassword={() => setShowPassword(!showPassword)}
      name="password"
      value={formData.password}
      onChange={handleChange}
    />
  </div>
  <div className="flex flex-col mb-3">
    <InputField
      id="retype_password"
      label="Ulangi Password"
      type="password"
      placeholder=""
      showPasswordToggle={true}
      showPassword={showRetypePassword}
      onTogglePassword={() => setShowRetypePassword(!showRetypePassword)}
    />
  </div>
  <div className="flex justify-between">
    <button
      className="mt-0 text-red-700 font-bold hover:opacity-50"
      onClick={toggleModal}
    >
      Tutup
    </button>
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Tambah Siswa
    </button>
  </div>
</form>
    </>
  );
};

const InputField = ({
  id,
  label,
  type,
  placeholder,
  showPasswordToggle,
  showPassword,
  onTogglePassword,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 w-full"
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={onTogglePassword}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        )}
      </div>
    </div>
  );
};

export default ComponentAddSiswa;
