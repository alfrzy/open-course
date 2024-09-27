import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { addDosen } from "../../Data/DataDosen";
import Swal from "sweetalert2";

const ComponentAddDosen = ({ toggleModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    nidn: "",
    position: "",
    phone: "",
    gmail: "",
    password: "",
    profile_picture: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      setFormData({ ...formData, profile_picture: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      dataToSend.append(key, formData[key]);
    });
    dataToSend.append("role", 1);

    try {
      await addDosen(dataToSend);

      setFormData({
        full_name: "",
        username: "",
        nidn: "",
        position: "",
        phone: "",
        gmail: "",
        password: "",
        profile_picture: null,
      });
      setPreview(null);

      Swal.fire({
        icon: "success",
        title: "Akun Dosen berhasil ditambahkan!",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal menambahkan akun dosen",
        text: "Terjadi kesalahan saat menambahkan akun dosen.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto mb-10">
        <h1 className="text-center text-2xl font-bold mb-2">
          Form Tambah Dosen
        </h1>
        <hr className="border-1 border-solid border-black" />
      </div>
      <form className="w-[80%] mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-4 md:mb-3">
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
          <InputField
            id="username"
            label="Username"
            type="text"
            placeholder="Raturu"
            showPasswordToggle={false}
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 md:mb-3">
          <InputField
            id="nidn"
            label="NIDN"
            type="text"
            placeholder="101010"
            showPasswordToggle={false}
            name="nidn"
            value={formData.nidn}
            onChange={handleChange}
          />
          <InputField
            id="position"
            label="Position"
            type="text"
            placeholder="Rektor"
            showPasswordToggle={false}
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 md:mb-3">
          <InputField
            id="phone"
            label="Telepon"
            type="tel"
            placeholder="08123456"
            showPasswordToggle={false}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            id="gmail"
            label="Email"
            type="email"
            placeholder="oratu@gmail.com"
            showPasswordToggle={false}
            name="gmail"
            value={formData.gmail}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 md:mb-3">
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

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Profile Picture
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChange}
            className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        {preview && (
          <div className="mb-3">
            <img src={preview} alt="Preview" className="w-24 h-24 rounded-md" />
          </div>
        )}
        
        {/* button bawah */}
        <div className="md:flex md:justify-between">
          {/* desktop */}
          <button
            className="mt-0 text-red-700 font-bold hover:opacity-50 hidden md:block"
            onClick={toggleModal}
          >
            Tutup
          </button>
          <button
            type="submit"
            className="w-full md:w-[30%] bg-biru1 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Tambah Dosen
          </button>
          {/* mobile */}
          <button
            className="mt-0 text-red-700 font-bold hover:opacity-50 block md:hidden"
            onClick={toggleModal}
          >
            Tutup
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
          required
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

export default ComponentAddDosen;
