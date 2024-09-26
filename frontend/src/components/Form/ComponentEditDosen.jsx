import React, { useState, useEffect } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Swal from "sweetalert2"; // Import SweetAlert2

const ComponentEditDosen = ({ dosenData }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    nidn: "",
    position: "",
    phone: "",
    gmail: "",
  });
  const [profilePicture, setProfilePicture] = useState(null); // State untuk gambar
  const [previewPicture, setPreviewPicture] = useState(null); // State untuk preview gambar

  useEffect(() => {
    if (dosenData) {
      setFormData({
        full_name: dosenData.full_name || "",
        username: dosenData.username || "",
        nidn: dosenData.nidn || "",
        position: dosenData.position || "",
        phone: dosenData.phone || "",
        gmail: dosenData.gmail || "",
      });
      setProfilePicture(dosenData.profile_picture || null); // Menyimpan gambar dari data dosen
      setPreviewPicture(dosenData.profile_picture || null); // Menyimpan preview gambar dari data dosen
    }
  }, [dosenData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(file); // Menyimpan file gambar yang diupload
        setPreviewPicture(reader.result); // Menyimpan URL gambar yang diupload untuk preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = { ...formData, role: 1 };
    const id = dosenData?.id;

    if (!id) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "ID dosen tidak ditemukan.",
      });
      return;
    }

    try {
      const formDataToSend = new FormData(); // Menggunakan FormData untuk mengirim data
      Object.keys(dataToSend).forEach((key) => {
        formDataToSend.append(key, dataToSend[key]);
      });
      if (profilePicture) {
        formDataToSend.append("profile_picture", profilePicture); // Menambahkan gambar ke FormData
      }

      const response = await fetch(
        `http://localhost:3000/api/v1/user/update/${id}`,
        {
          method: "PUT",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Reset form setelah sukses
      setFormData({
        full_name: "",
        username: "",
        nidn: "",
        position: "",
        phone: "",
        gmail: "",
      });
      setProfilePicture(null); // Reset gambar
      setPreviewPicture(null); // Reset preview gambar

      // SweetAlert setelah sukses
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Akun Dosen berhasil diperbarui!",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload(); // Reload halaman saat tombol OK diklik
        }
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Gagal memperbarui akun dosen.",
      });
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto mb-10">
        <h1 className="text-center text-2xl font-bold mb-2">Form Edit Dosen</h1>
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
            placeholder="Rektor"
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

        {/* Input untuk upload gambar */}
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload Gambar
          </label>
          <input
            name="profile_picture"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
          {previewPicture && (
            <img
              src={previewPicture}
              alt="Preview"
              className="mt-2 w-72 object-cover"
            />
          )} {/* Preview gambar */}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4"
        >
          Perbarui Akun Dosen
        </button>
      </form>
    </>
  );
};

// Komponen InputField
const InputField = ({
  id,
  label,
  type,
  placeholder,
  showPasswordToggle,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex-1 mb-3">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
    </div>
  );
};

export default ComponentEditDosen;
