import React, { useState } from "react";
import SearchUserComponent from "../Search/searchUser";
import axios from "axios";
import Swal from "sweetalert2";

const AddMemberModal = ({ closeModal, courseId }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleAddMember = async () => {
    if (!courseId) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Course ID tidak valid',
      });
      return;
    }

    if (selectedUser) {
      try {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/v1/course/${courseId}/add-member`, {
          userId: selectedUser.id,
        });
        Swal.fire({
            icon: 'success',
            title: 'Anggota Berhasil Ditambahkan',
            text: `${selectedUser.full_name} telah ditambahkan ke kelas`,
          }).then(() => {
            closeModal(); // Tutup modal setelah anggota ditambahkan
    
            // Reload halaman setelah pengguna menekan "OK" di Swal
            window.location.reload();
          });
      } catch (error) {
        console.error("Error adding member:", error);
        Swal.fire({
          icon: 'error',
          title: 'Gagal Menambahkan Anggota',
          text: 'Terjadi kesalahan saat menambahkan anggota.',
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Peringatan',
        text: 'Pilih anggota terlebih dahulu',
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Tambah Anggota Kelas</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Nama / Email
        </label>
        <SearchUserComponent onSelectUser={handleSelectUser} />
        
        {selectedUser && (
          <div className="mt-4 p-2 border rounded bg-gray-100">
            <p className="font-semibold">{selectedUser.full_name}</p>
            <p className="text-sm text-gray-600">{selectedUser.gmail}</p>
          </div>
        )}

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Batal
          </button>
          <button
            onClick={handleAddMember}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Tambahkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
