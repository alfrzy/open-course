import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Mengambil role dari Redux

const ClassDetail = ({ Sections = [] }) => {
  const { id } = useParams();
  const [openSectionIndex, setOpenSectionIndex] = useState(null);
  
  const role = useSelector((state) => state.auth.user?.role ?? null); // Ambil role dari Redux

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  return (
    <div className="w-full mb-4 mt-10 px-4">
      {/* Sections */}
      {Sections.length > 0 ? (
        Sections.map((Section, index) => (
          <div key={Section.id} className="w-full mb-4">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left p-4 font-medium text-lg bg-white hover:bg-gray-100 border-2 border-blue-500 rounded-md flex items-center"
            >
              <span className="mr-2">
                {openSectionIndex === index ? '▼' : '►'}
              </span>
              {/* Jika title adalah 'Pengumuman', tampilkan tanpa BAB */}
              {Section.title === "Pengumuman" ? (
                Section.title
              ) : (
                `BAB ${index + 1}: ${Section.title}`
              )}
            </button>
            
            {openSectionIndex === index && (
              <div className="p-4 bg-gray-100 border border-gray-300 rounded-md mt-2">
                {Section.title === "Pengumuman" && Section.announcement && (
                  <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded-md">
                    <h3 className="font-bold text-lg">Pengumuman</h3>
                    <p className="mt-2">{Section.announcement}</p>
                  </div>
                )}
                
                {Section.Modules.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {Section.Modules.map((Module) => (
                      <li key={Module.id} className="mt-2">
                        {/* Tentukan URL navigasi berdasarkan role */}
                        <Link 
                          to={
                            role === 0 
                              ? `/mahasiswa-detail-kelas/${id}/dashboard/module/${Module.id}` // URL untuk siswa
                              : role === 1
                              ? `/dosen-detail-kelas/${id}/dashboard/module/${Module.id}` // URL untuk dosen
                              : `/admin-detail-kelas/${id}/dashboard/module/${Module.id}` // URL untuk admin
                          } 
                          className="text-black"
                        >
                          {Module.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Tidak ada modul tersedia</p>
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Tidak ada sections tersedia.</p>
      )}
    </div>
  );
};

export default ClassDetail;
