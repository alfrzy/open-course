import React from 'react';

const InstrukturCard = ({ instrukturList }) => {
  return (
   <section>
    <div className="p-4 sm:p-6 lg:p-10 border-b">
        <div className="container mx-auto">
          <h3 className="text-lg sm:text-xl text-blue-500 font-bold mb-4">Temui Instruktur Anda</h3>
          
          {/* Looping melalui instrukturList */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {instrukturList.map((instruktur) => (
              <div key={instruktur.id} className="bg-white shadow p-5 flex items-center rounded">
                <img
                  src={instruktur.fotoUrl}
                  alt={`Foto ${instruktur.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex-col">
                  <h3 className="text-lg font-bold">{instruktur.name}</h3>
                  <p className="text-gray-600">{instruktur.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstrukturCard;
