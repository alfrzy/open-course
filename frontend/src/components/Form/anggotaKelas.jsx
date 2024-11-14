import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseMembersModal = ({ course_id, isOpen, onClose }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const fetchMembers = async () => {
      try {
        // Memanggil API untuk mengambil anggota kelas
        const token = localStorage.getItem("token");
        const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/v1/course/${course_id}/dashboard`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        setMembers(response.data.data.Members); // Asumsikan anggota berada di data.Members
        setLoading(false);
      } catch (error) {
        console.error("Error fetching members:", error);
        setError("Gagal memuat anggota kelas.");
        setLoading(false);
      }
    };

    fetchMembers();
  }, [course_id, isOpen]);

  if (!isOpen) return null; // Jangan render modal jika tidak terbuka

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-1/3 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Daftar Anggota Kelas</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="overflow-y-auto max-h-64">
          {members.map((member) => (
            <div key={member.id} className="flex items-center mb-2 p-2 border rounded-md">
              <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-gray-500">👤</span>
              </div>
              <div>
                <p className="font-medium">{member.full_name}</p>
                <p className="text-gray-500 text-sm">{member.gmail}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default CourseMembersModal;
