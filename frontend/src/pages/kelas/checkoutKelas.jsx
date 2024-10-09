import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ComponentButton from '../../components/Button/ComponentButton';

const kelasData = [
  {
    id: 'kelas1',
    nama: 'Manajemen Keuangan Pribadi',
    deskripsi: 'Belajar mengelola keuangan pribadi dengan bijak.',
    urlfoto: "https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20154131/626e2322c1b6ca1cf2a84104_Cara20mengelola20keuangan20pribadi20dengan20gaji20kecil.jpg",
    tentangKelas: 'Kelas ini akan mengajarkan cara mengelola keuangan pribadi dengan bijak dan efektif.',
    lamaKelas: '4 Minggu',
    upaya: '2-3 jam per minggu',
    harga: 235000,
    bahasa: 'Indonesia',
  },
  {
    id: 'kelas2',
    nama: 'Pemrograman Web',
    deskripsi: 'Belajar mengelola keuangan pribadi dengan bijak.',
    urlfoto: "https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20154131/626e2322c1b6ca1cf2a84104_Cara20mengelola20keuangan20pribadi20dengan20gaji20kecil.jpg",
    tentangKelas: 'Kelas ini akan mengajarkan cara mengelola keuangan pribadi dengan bijak dan efektif.',
    lamaKelas: '4 Minggu',
    upaya: '2-3 jam per minggu',
    harga: 235000,
    bahasa: 'Indonesia',
  },
];

const generateUniqueCode = () => {
  return Math.floor(100 + Math.random() * 900); // Menghasilkan angka antara 100-999
};

const Checkout = () => {
  const { id } = useParams();
  const kelas = kelasData.find((item) => item.id === id);
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [uniqueCode, setUniqueCode] = useState(generateUniqueCode); // Menyimpan kode unik di state
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal
  const [invoiceNumber, setInvoiceNumber] = useState(`INV-${Date.now()}`); // Invoice number

  useEffect(() => {
    setUniqueCode(generateUniqueCode()); // Mengenerate kode unik saat component pertama kali dirender
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();
    // Tampilkan modal setelah checkout
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/'); // Setelah modal ditutup, arahkan ke halaman utama
  };

  if (!kelas) {
    return <div>Kelas tidak ditemukan</div>;
  }

  const totalHarga = kelas.harga + uniqueCode;

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <Navbar />
      {/* Main Container */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Keranjang Section */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl sm:text-2xl text-blue-500 font-bold">Keranjang Kamu</h2>
            <div className="mt-4">
              <div className="flex items-center">
                <img src={kelas.urlfoto} alt={kelas.nama} className="w-20 h-20 object-cover rounded mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{kelas.nama}</h3>
                  <p className="text-gray-600">Rp.{kelas.harga.toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Kode Kupon (optional)</label>
                <div className="flex mt-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Kode Kupon"
                    className="block w-full p-2 border rounded mr-2"
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Terapkan</button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Ringkasan</h3>
              <div className="mt-2">
                <div className="flex justify-between">
                  <p>{kelas.nama}</p>
                  <p>Rp.{kelas.harga.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                  <p>Kode Unik</p>
                  <p>{uniqueCode}</p>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <p>Total</p>
                  <p>Rp.{totalHarga.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <form onSubmit={handleCheckout}>
                <ComponentButton text={"Beli Sekarang"} color={"bg-blue-600"} type="submit" />
              </form>
            </div>
          </div>

          {/* Metode Pembayaran Section */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl sm:text-2xl text-blue-500 font-bold">Bank Transfer</h2>
            <div className="mt-4 space-y-4">
              {[
                { bank: 'BCA', account: '01270721021', name: 'FE Open Course' },
                { bank: 'BANK BRI', account: '01270721021', name: 'FE Open Course' },
                { bank: 'Mandiri', account: '01270721021', name: 'FE Open Course' },
                { bank: 'Jenius', account: '01270721021', name: 'FE Open Course' },
              ].map((payment, index) => (
                <div key={index} className="p-4 border rounded flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={`https://upload.wikimedia.org/wikipedia/commons/thumb/${
                        payment.bank === 'BCA' ? '6/68/BCA_logo.svg/100px-BCA_logo.svg.png' : 
                        payment.bank === 'BANK BRI' ? '5/55/BRI_logo.svg/100px-BRI_logo.svg.png' : 
                        payment.bank === 'Mandiri' ? '5/5f/Bank_Mandiri_logo.svg/100px-Bank_Mandiri_logo.svg.png' : '2/29/Logo_Jenius.svg/100px-Logo_Jenius.svg.png'}`}
                      alt={payment.bank}
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <p className="font-semibold">{payment.bank}</p>
                      <p>{payment.account}</p>
                      <p className="text-gray-500 text-sm">a.n. {payment.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Invoice */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Invoice Pembayaran</h2>
            <p className="mb-2">Terima kasih telah melakukan pembelian!</p>
            <p className="mb-2">Nomor Invoice: <strong>{invoiceNumber}</strong></p>
            <p className="mb-2">Total Pembayaran: <strong>Rp.{totalHarga.toLocaleString()}</strong></p>
            <p className="mb-4">Silakan transfer ke rekening yang tersedia.</p>
            <button
              onClick={handleCloseModal}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
