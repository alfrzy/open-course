import React from 'react';

const instrukturData = [
  {
          id: 'instruktur1',
          name: 'Mentor A',
          deskripsi: 'Expert dalam keuangan.',
      },
];

const InstrukturCard = () => {
  const instruktur = instrukturData[0];
  return (
   <section>
    <div className="p-4 sm:p-6 lg:p-10 border-b">
        <div className="container mx-auto">
          <h3 className="text-lg sm:text-xl text-blue-500 font-bold mb-4">Temui Instruktur Anda</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white shadow p-5 flex items-center rounded">
              <img
                src="https://via.placeholder.com/80"
                alt="Foto Prof. Dr. Khong Guan"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex flex-col">
                {instruktur.name}
                {instruktur.deskripsi}
                {/* <p className="font-bold text-sm sm:text-base">Prof. Dr. Khong Guan, S.E., M.E.</p>
                <p className="text-left text-gray-600 text-xs sm:text-sm">Director, Greater Good Science Center</p> */}
              </div>
            </div>
            <div className="bg-white shadow p-4 flex items-center rounded">
              <img
                src="https://via.placeholder.com/80"
                alt="Foto Prof. Dr. Khong Guan"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex flex-col">
                {instruktur.name}
                {instruktur.deskripsi}
                {/* <p className="font-bold text-sm sm:text-base">Prof. Dr. Khong Guan, S.E., M.E.</p>
                <p className="text-left text-gray-600 text-xs sm:text-sm">Director, Greater Good Science Center</p> */}
         </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
};

export default InstrukturCard;