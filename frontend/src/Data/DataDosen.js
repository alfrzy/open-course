import { useEffect, useState } from "react";
import Swal from "sweetalert2"; 

const dataDosenApiUrl = `${import.meta.env.VITE_API_BASE_URL}/v1/user/`;

// Fungsi untuk fetch data dosen
const useFetchDataDosen = () => {
  const [dataDosen, setDataDosen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataDosenApiUrl);
        const result = await response.json();

        if (!result.error) {
          const filteredData = result.data.filter((user) => user.role === 1);
          setDataDosen(filteredData);
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { dataDosen, loading, error, refetchData: () => fetchData() };
};

// Fungsi untuk delete dosen 
export const deleteDosen = async (id, refetchData, toast) => {
  Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Data dosen ini akan dihapus secara permanen!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`${dataDosenApiUrl}delete/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Akun Dosen berhasil dihapus!",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload(); 
            }
          });
        } else {
          toast.error("Gagal menghapus dosen. Coba lagi.");
        }
      } catch (error) {
        toast.error("Terjadi kesalahan dalam penghapusan.");
      }
    }
  });
};

// Fungsi untuk menambahkan dosen
export const addDosen = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/user/save", {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding dosen:", error);
    throw error;
  }
};

// Fungsi untuk update dosen 
export const updateDosen = async (id, formData, toast) => {
  try {
    const response = await fetch(`${dataDosenApiUrl}update/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Akun Dosen berhasil diperbarui!",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload(); 
      }
    });
  } catch (error) {
    console.error("Error:", error);
    toast.error("Gagal memperbarui akun dosen.");
  }
};

export default useFetchDataDosen;
