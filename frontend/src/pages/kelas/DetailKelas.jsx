import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import InstrukturCard from '../../components/DetailKelas/InstrukturCard';
import LandingFooter from '../../components/Footer/LandingFooter';
import ComponentButton from '../../components/Button/ComponentButton';



const Detail = () => {
  return (
  <div className="min-h-screen font-poppins bg-gray-200">
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-4">
      <div className="w-full">
      {/* Header Section */}
      <Navbar/>
      <div className="bg-gray-100 p-4 sm:p-6 lg:p-10 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Teks Header */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
              <h1 className="text-2xl sm:text-3xl text-blue-500 font-bold">Manajemen Keuangan Pribadi</h1>
              <p className="mt-2 text-sm sm:text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-4">
              <ComponentButton text={"Daftar Sekarang"} color={"bg-blue-600"} link={"/"} />
                <p className="mt-2 sm:mt-0 sm:ml-4 text-gray-700 text-sm">814 telah mendaftar</p>
              </div>
            </div>

            {/* Gambar */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20154131/626e2322c1b6ca1cf2a84104_Cara20mengelola20keuangan20pribadi20dengan20gaji20kecil.jpg"
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
            {/* Bagian Teks */}
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h2 className="text-xl sm:text-2xl text-blue-500 font-bold">Tentang Kelas Ini</h2>
              <p className="text-gray-600 text-sm">1.201 Dilihat</p>
              <p className="mt-4 text-gray-700 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="mt-4 text-gray-700 text-sm sm:text-base">
                Suspendisse iaculis, dolor ac tempus iaculis, erat mauris...
              </p>
            </div>

            {/* Box */}
            <div className="bg-gray-100 p-4 rounded-md w-full lg:w-auto lg:min-w-[250px]">
              <ul className="list-inside text-sm">
                <li className="border-b py-2"><strong>Lama:</strong> 4 Minggu</li>
                <li className="border-b py-2"><strong>Upaya:</strong> 2-3 jam per minggu</li>
                <li className="border-b py-2"><strong>Harga:</strong> GRATIS</li>
                <li className="border-b py-2"><strong>Bahasa:</strong> Indonesia</li>
                <li className="py-2"><strong>Transkrip Video:</strong> Indonesia</li>
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
            <li>✔ Duis ultricies porttitor commodo.</li>
            <li>✔ Suspendisse iaculis, dolor ac tempus iaculis...</li>
            <li>✔ Suspendisse iaculis, dolor ac tempus iaculis...</li>
          </ul>
        </div>
      </div>
      <div className='border-b'>
          <InstrukturCard />
          </div>
    </div>
  </div>
      <LandingFooter/>
    </div>
  );
}

export default Detail;
