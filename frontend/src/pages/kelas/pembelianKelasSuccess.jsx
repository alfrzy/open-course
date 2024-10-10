import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ComponentButton from '../../components/Button/ComponentButton';
import Navbar from '../../components/Navbar/Navbar';

const kelasData = [
  {
    id: 'kelas1',
    nama: 'Manajemen Keuangan Pribadi',
    deskripsi: 'Belajar mengelola keuangan pribadi dengan bijak.',
    harga: 235000,
  },
  {
    id: 'kelas2',
    nama: 'Pemrograman Web Dasar',
    deskripsi: 'Belajar dasar-dasar pemrograman web.',
    harga: 300000,
  },
];

const generateInvoiceNumber = () => {
  const prefix = 'FEOC';
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}${randomNumber}`;
};

const InvoicePage = () => {
  const { id } = useParams();
  

  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [uniqueCode, setUniqueCode] = useState(Math.floor(100 + Math.random() * 900));

  const kelas = kelasData.find((item) => item.id === id);
  
  if (!kelas) {
    return <div>Kelas tidak ditemukan</div>;
  }

  const totalHarga = kelas.harga + uniqueCode;

  useEffect(() => {
    const generatedInvoiceNumber = generateInvoiceNumber();
    setInvoiceNumber(generatedInvoiceNumber);
  }, []);


  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <Navbar />
      <div className="container mx-auto py-10">
        {/* Lebar kotak diperbesar */}
        <div className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-4">Checkout</h1>
          <p>Anda berhasil melakukan Pemesanan Kelas</p>
          <p className="font-semibold">{kelas.nama}</p>
          <p className="text-gray-700">Seharga Rp.{totalHarga.toLocaleString()}</p>

          <div className="my-6">
            <p className="text-gray-600">No Invoice</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">#{invoiceNumber}</h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <ComponentButton text={"Lihat Invoice"} color={"bg-gray-500"} onClick={() => alert('Fungsi Lihat Invoice belum diimplementasikan')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
