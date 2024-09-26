import { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const dataDosenApiUrl = "http://localhost:3000/api/v1/user/";

// Fungsi untuk fetch data dosen
const useFetchData = () => {
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

// Fungsi untuk delete dosen dengan SweetAlert2
export const deleteDosen = async (id, refetchData, toast) => {
  // Menggunakan SweetAlert untuk konfirmasi
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
      // Jika konfirmasi "Ya"
      try {
        const response = await fetch(`${dataDosenApiUrl}delete/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Tampilkan popup sukses dengan tombol "Oke"
          Swal.fire({
            icon: "success",
            title: "Akun Dosen berhasil dihapus!",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload(); // Refresh halaman
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

export default useFetchData;
