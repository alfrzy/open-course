import React from 'react';

const DetailKelas = () => {
  return (
    <div className='bg-gray-100 px-5'>
      {/* Header Section */}
      <div className="p-6 text-black">
        {/* Gunakan flexbox dengan row default */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Teks Header di Kiri */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl font-bold">Manajemen Keuangan Pribadi</h1>
            <p className="mt-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim molliAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.t non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="flex items-center mt-4">
                <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded">
                 Daftar Sekarang
                </button>
                    <p className="ml-4 text-gray-700">814 telah mendaftar</p>
            </div>
          </div>

          {/* Gambar di Kanan */}
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="Manajemen Keuangan"
              className="h-auto max-w-lg ms-auto"
            />
          </div>
        </div>
      </div>

      {/* Tentang Kelas Section */}
        <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-2/3">
            <h2 className="text-2xl font-bold">Tentang Kelas Ini</h2>
            <p className="text-gray-600">1.201 Dilihat</p>
            <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim molliAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.t non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <p className="mt-4 text-gray-700">
                Suspendisse iaculis, dolor ac tempus iaculis, erat mauris...
            </p>
            </div>

    {/* Box di Kanan */}
    <div className="bg-gray-100 p-4 mt-4 md:mt-0 md:ml-6 max-w-xs rounded-md">
      <ul className="list-none">
        <li><strong>Lama:</strong> 4 Minggu</li>
        <li><strong>Upaya:</strong> 2-3 jam per minggu</li>
        <li><strong>Harga:</strong> GRATIS</li>
        <li><strong>Bahasa:</strong> Indonesia</li>
        <li><strong>Transkrip Video:</strong> Indonesia</li>
      </ul>
    </div>
  </div>
</div>


      {/* Apa yang Akan Dipelajari Section */}
      <div className="p-6 bg-gray-100">
        <h3 className="text-xl font-bold">Apa yang akan Kamu pelajari:</h3>
        <ul className="mt-4">
          <li>✔ Duis ultricies porttitor commodo.</li>
          <li>✔ Suspendisse iaculis, dolor ac tempus iaculis...</li>
        </ul>
      </div>

      {/* Instruktur Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold">Temui Instruktur Anda</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white shadow p-4">
            <p className="font-bold">Prof. Dr. Khong Guan, S.E., M.E.</p>
            <p>Director, Greater Good Science Center</p>
          </div>
          <div className="bg-white shadow p-4">
            <p className="font-bold">Prof. Dr. Khong Guan, S.E., M.E.</p>
            <p>Director, Greater Good Science Center</p>
          {/* Tambah instruktur lainnya di sini jika diperlukan */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKelas;
