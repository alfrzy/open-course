import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import InstrukturCard from '../../components/DetailKelas/instrukturCard';
import LandingFooter from '../../components/Footer/LandingFooter';
import ComponentButton from '../../components/Button/ComponentButton';

const kelasData = [
  {
    id: 'kelas1',
    nama: 'Manajemen Keuangan Pribadi',
    deskripsi: 'Belajar mengelola keuangan pribadi dengan bijak.',
    urlfoto:"https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20154131/626e2322c1b6ca1cf2a84104_Cara20mengelola20keuangan20pribadi20dengan20gaji20kecil.jpg",
    tentangKelas: 'Kelas ini akan mengajarkan cara mengelola keuangan pribadi dengan bijak dan efektif.',
    lamaKelas: '4 Minggu',
    upaya: '2-3 jam per minggu',
    harga: 'GRATIS',
    bahasa: 'Indonesia',
    apaYangAkanDipelajari: [
      '✔ Mengatur keuangan harian',
      '✔ Menyusun anggaran bulanan',
      '✔ Tips menabung secara efektif',
    ]
  },
  {
    id: 'kelas2',
    nama: 'Pemrograman Web Dasar',
    deskripsi: 'Belajar dasar-dasar pemrograman web.',
    urlfoto:"https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20154131/626e2322c1b6ca1cf2a84104_Cara20mengelola20keuangan20pribadi20dengan20gaji20kecil.jpg",
    tentangKelas: 'Kelas ini akan memberikan pengenalan tentang HTML, CSS, dan JavaScript.',
    lamaKelas: '6 Minggu',
    upaya: '3-4 jam per minggu',
    harga: 'GRATIS',
    bahasa: 'Indonesia',
    apaYangAkanDipelajari: [
      '✔ Pengenalan HTML',
      '✔ CSS untuk layout dan desain',
      '✔ JavaScript dasar untuk interaktivitas',
    ]
  }
];


const instrukturList = [
  {
      id: 'instruktur1',
      name: 'Mentor A',
      description: 'Expert dalam keuangan.',
      fotoUrl: 'https://via.placeholder.com/80'
  },
  {
      id: 'instruktur2',
      name: 'Mentor B',
      description: 'Expert dalam pemrograman web.',
      fotoUrl: 'https://via.placeholder.com/80'
  },
  {
      id: 'instruktur3',
      name: 'Mentor C',
      description: 'Expert dalam manajemen waktu.',
      fotoUrl: 'https://via.placeholder.com/80'
  }
];



const Detail = () => {
  // Mengambil ID dari URL menggunakan useParams
  const { id } = useParams();
  const navigate = useNavigate();

  // Mencari data kelas berdasarkan ID dari URL
  const kelas = kelasData.find((item) => item.id === id);

  if (!kelas) {
      return <div>Kelas tidak ditemukan</div>;
  };

  const handleDaftar = () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      navigate('/login');
    } else {
      navigate(`/checkout-kelas/${id}`);
    }
  };

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <Navbar />
      {/* Header Section */}
      <div className="bg-gray-100 p-4 sm:p-6 lg:p-10 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
              <h1 className="text-2xl sm:text-3xl text-blue-500 font-bold">{kelas.nama}</h1>
              <p className="mt-2 text-sm sm:text-base">{kelas.deskripsi}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-4">
                <button onClick={handleDaftar}>
                <ComponentButton text={"Daftar Sekarang"} color={"bg-blue-600"}  />
                </button>
                <p className="mt-2 sm:mt-0 sm:ml-4 text-gray-700 text-sm">814 telah mendaftar</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src= {kelas.urlfoto}
                alt="Manajemen Keuangan"
                className="max-w-xs w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tentang Kelas Section */}
      <div className="p-4 sm:p-6 lg:p-10 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h2 className="text-xl sm:text-2xl text-blue-500 font-bold">Tentang Kelas Ini</h2>
              <p className="text-gray-600 text-sm">1.201 Dilihat</p>
              <p className="mt-4 text-gray-700 text-sm sm:text-base">
                {kelas.tentangKelas}
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md w-full lg:w-auto lg:min-w-[250px]">
              <ul className="list-inside text-sm">
                <li className="border-b py-2"><strong>Lama:</strong> {kelas.lamaKelas}</li>
                <li className="border-b py-2"><strong>Upaya:</strong> {kelas.upaya}</li>
                <li className="border-b py-2"><strong>Harga:</strong> {kelas.harga}</li>
                <li className="border-b py-2"><strong>Bahasa:</strong> {kelas.bahasa}</li>
                <li className="py-2"><strong>Transkrip Video:</strong> {kelas.bahasa}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Apa yang Akan Dipelajari Section */}
      <div className="bg-gray-100 p-4 sm:p-6 lg:p-10 border-b">
        <div className="container mx-auto">
          <h3 className="text-lg sm:text-xl text-blue-500 font-bold">Apa yang akan Kamu pelajari:</h3>
          <ul className="mt-4 list-inside list-disc text-sm sm:text-base">
            {kelas.apaYangAkanDipelajari.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Instruktur Section */}
      <div className="border-b">
        <InstrukturCard instrukturList={instrukturList} />
      </div>

      <LandingFooter />
    </div>
  );
}

export default Detail;
