import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchCourses from "../../Data/DataCourse";

const DetailKelas = () => {
  const { id } = useParams(); 
  const { dataCourse, loading, error } = useFetchCourses(); 
  const [kelasDetail, setKelasDetail] = useState(null);

  useEffect(() => {
    // Mencari kelas berdasarkan ID
    if (dataCourse) {
      const foundKelas = dataCourse.find((kelas) => kelas.id === parseInt(id));
      setKelasDetail(foundKelas);
    }
  }, [dataCourse, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!kelasDetail) {
    return <div>Kelas tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen font-poppins bg-gray-200 p-6">
      <h1 className="font-bold text-2xl mb-4">{kelasDetail.name}</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold text-lg">Deskripsi:</h2>
        <p>{kelasDetail.description}</p>
        <h2 className="font-bold text-lg mt-4">Durasi:</h2>
        <p>{kelasDetail.duration} jam</p>
        <h2 className="font-bold text-lg mt-4">Harga:</h2>
        <p>Rp {kelasDetail.price.toLocaleString()}</p>
        <h2 className="font-bold text-lg mt-4">Bahasa:</h2>
        <p>{kelasDetail.language}</p>
        <h2 className="font-bold text-lg mt-4">Status:</h2>
        <p>{kelasDetail.is_publish ? "Publik" : "Draft"}</p>
      </div>
    </div>
  );
};

export default DetailKelas;
