import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; 
import { updateDosen } from "../../Data/DataDosen";

const ComponentEditDosen = ({ dosenData, toggleModal }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    nidn: "",
    position: "",
    phone: "",
    gmail: "",
  });
  const [profilePicture, setProfilePicture] = useState(null); 
  const [previewPicture, setPreviewPicture] = useState(null); 

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
      setProfilePicture(dosenData.profile_picture || null);
      setPreviewPicture(dosenData.profile_picture || null); 
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
        setProfilePicture(file); 
        setPreviewPicture(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = dosenData?.id;

    if (!id) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "ID dosen tidak ditemukan.",
      });
      return;
    }

    const dataToSend = { ...formData, role: 1 };
    const formDataToSend = new FormData(); 
    Object.keys(dataToSend).forEach((key) => {
      formDataToSend.append(key, dataToSend[key]);
    });
    if (profilePicture) {
      formDataToSend.append("profile_picture", profilePicture); 
    }

    // Memanggil fungsi updateDosen
    await updateDosen(id, formDataToSend);
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
          )}
        </div>
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
            Perbarui
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

const InputField = ({ id, label, type, placeholder, showPasswordToggle, name, value, onChange }) => {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
    </div>
  );
};

export default ComponentEditDosen;
