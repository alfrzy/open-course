import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; 
import { updateSiswa } from "../../Data/DataSiswa";


const ComponentEditSiswa = ({ siswaData, toggleModal }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    username: "", // Tambahkan username
    gmail: "",
    jumlah_kelas:"",
    status:"", // Pastikan ini sesuai dengan nama kolom di DB
  });

  useEffect(() => {
    if (siswaData) {
      setFormData({
        full_name: siswaData.full_name || "",
        username: siswaData.username || "", // Pastikan ini sesuai dengan nama kolom di DB
        gmail: siswaData.gmail || "", // Pastikan ini sesuai dengan nama kolom di DB
      });
    }
  }, [siswaData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const id = siswaData?.id;
    console.log("ID siswa:", id); // Tambahkan log ini
    
    if (!id) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "ID siswa tidak ditemukan.",
      });
      return;
    }
  
    const dataToSend = { ...formData, role: 0 };
    const formDataToSend = new FormData(); 
    Object.keys(dataToSend).forEach((key) => {
      formDataToSend.append(key, dataToSend[key]);
    });
    
    try {
      await updateSiswa(id, formDataToSend);
  
      // Langsung reload setelah submit berhasil
      Swal.fire({
        icon: 'success',
        title: 'Data siswa berhasil diperbarui.',
        showConfirmButton: true,  // Menampilkan tombol OK
      }).then(() => {
        window.location.reload(); // Reload halaman setelah SweetAlert ditutup
      });
  
      toggleModal(); // Menutup modal setelah berhasil
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat memperbarui data siswa.",
      });
    }
  };
  

  return (
    <>
      <div className="w-[80%] mx-auto mb-10">
        <h1 className="text-center text-2xl font-bold mb-2">Form Edit Siswa</h1>
        <hr className="border-1 border-solid border-black" />
      </div>
      <form className="w-[80%] mx-auto" onSubmit={handleSubmit}>
  <div className="flex flex-col space-y-4 mb-3">
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
      placeholder="username123"
      showPasswordToggle={false}
      name="username"
      value={formData.username}
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
    <InputField
      id="jml_kelas"
      label="Jumlah_kelas"
      type="select"
      placeholder="5"
      showPasswordToggle={false}
      name="jumlah_kelas"
      value={formData.jumlah_kelas}
      onChange={handleChange}
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
      Perbarui
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

export default ComponentEditSiswa;
