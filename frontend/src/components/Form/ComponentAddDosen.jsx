import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Swal from "sweetalert2"; 

const ComponentAddDosen = () => {
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
  const [preview, setPreview] = useState(null); // State untuk pratayang gambar

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const file = e.target.files[0];
      setFormData({ ...formData, profile_picture: file });
      setPreview(URL.createObjectURL(file)); // Membuat URL untuk pratayang
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      dataToSend.append(key, formData[key]);
    });
    dataToSend.append('role', 1);

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/save", {
        method: "POST",
        body: dataToSend,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Reset form data
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
      setPreview(null); // Reset pratayang gambar

      Swal.fire({
        icon: 'success',
        title: 'Akun Dosen berhasil ditambahkan!',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal menambahkan akun dosen',
        text: 'Terjadi kesalahan saat menambahkan akun dosen.',
        confirmButtonText: 'OK',
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
        <div className="flex flex-col md:flex-row md:space-x-4 mb-3">
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
        <div className="flex flex-col md:flex-row md:space-x-4 mb-3">
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
            placeholder="rektor"
            showPasswordToggle={false}
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-3">
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
        <div className="flex flex-col md:flex-row md:space-x-4 mb-3">
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

        {/* Tambahkan kolom upload gambar */}
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload Gambar
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="profile_picture"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* Tampilkan pratayang gambar jika ada */}
        {preview && (
          <div className="mb-3 w-72">
            <img src={preview} alt="Preview" className="w-full h-auto rounded" />
          </div>
        )}

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4"
        >
          Tambah Akun Dosen
        </button>
      </form>
    </>
  );
};

// Komponen InputField
const InputField = (props) => {
  const { id, label, type, placeholder, showPasswordToggle, showPassword, onTogglePassword, name, value, onChange } = props;

  return (
    <div className="mb-3 relative flex-1">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={showPasswordToggle && showPassword ? "text" : type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
      {showPasswordToggle && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={onTogglePassword}
        >
          <div className="relative top-3">
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </div>
        </button>
      )}
    </div>
  );
};

export default ComponentAddDosen;
