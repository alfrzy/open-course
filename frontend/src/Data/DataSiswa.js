import { useEffect, useState } from "react";
import Swal from "sweetalert2"; 

const dataSiswaApiUrl = `${import.meta.env.VITE_API_BASE_URL}/v1/user/`;

// Fungsi untuk fetch data siswa
const useFetchData = () => {
  const [dataSiswa, setDataSiswa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataSiswaApiUrl);
        const result = await response.json();

        if (!result.error) {
          const filteredData = result.data.filter((user) => user.role === 0);
          setDataSiswa(filteredData);
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

  return { dataSiswa, loading, error, refetchData: () => fetchData() };
};

// Fungsi untuk delete siswa
export const deleteSiswa = async (id, refetchData, toast) => {
  Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Data siswa ini akan dihapus secara permanen!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`${dataSiswaApiUrl}delete/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Akun Siswa berhasil dihapus!",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload(); 
            }
          });
        } else {
          toast.error("Gagal menghapus siswa. Coba lagi.");
        }
      } catch (error) {
        toast.error("Terjadi kesalahan dalam penghapusan.");
      }
    }
  });
};

// // Fungsi untuk menambahkan siswa
export const addSiswa = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/user/save", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', // Menambahkan header ini
      },
      body: data, // data seharusnya sudah dalam format JSON string
    });

    // Tambahan: Cek jika response tidak ok
    if (!response.ok) {
      const errorText = await response.text(); // Dapatkan body dari response
      console.error("Response error:", errorText);
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding siswa:", error);
    throw error;
  }
};


// Fungsi untuk update siswa
export const updateSiswa = async (id, formData, toast) => {
  try {
    const response = await fetch(`${dataSiswaApiUrl}update/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text(); // Dapatkan body dari response
      console.error("Response error:", errorText);
      throw new Error("Network response was not ok");
    }

    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Akun siswa berhasil diperbarui!",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload(); 
      }
    });
  } catch (error) {
    console.error("Error:", error);
    toast.error("Gagal memperbarui akun siswa.");
  }
};

// Fungsi untuk block siswa dengan konfirmasi
export const blockSiswa = async (id) => {
  Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Mahasiswa ini akan diblokir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, blokir!",
    cancelButtonText: "Batal",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`${dataSiswaApiUrl}update/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: false }),
        });

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Pengguna berhasil diblokir!",
            confirmButtonText: "OK",
          }).then(() => {
            window.location.reload();
          });
        } else {
          throw new Error("Gagal memblokir pengguna.");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
    }
  });
};

// Fungsi untuk activate siswa dengan konfirmasi
export const activateSiswa = async (id) => {
  Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Mahasiswa ini akan diaktifkan kembali!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, aktifkan!",
    cancelButtonText: "Batal",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`${dataSiswaApiUrl}update/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: true }),
        });

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Pengguna berhasil diaktifkan!",
            confirmButtonText: "OK",
          }).then(() => {
            window.location.reload();
          });
        } else {
          throw new Error("Gagal mengaktifkan pengguna.");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
    }
  });
};



export default useFetchData;
