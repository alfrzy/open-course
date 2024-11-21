import React from "react";
import ComponentDropdownInstructor from "./componentDropdownInstrctor";

const KontenKiri = ({ learningList, newTopic, setNewTopic, handleAddTopic, courseName, setCourseName, courseDescription, setCourseDescription, addedInstructors, handleAddInstructor, toggleModal, sections }) => {
  return (
    <>
      <section className="w-full lg:w-4/5">
        <div className="mb-4">
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan nama kelas" />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            <h1 className="font-bold">Tentang Kelas ini</h1>
          </label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Deskripsi tentang kelas ini"
            rows={10}
          />
        </div>

        {/* Section untuk Learning Topics */}
        <section className="my-4">
          <h1 className="font-bold">Apa yang akan dipelajari</h1>
          <input type="text" value={newTopic} onChange={(e) => setNewTopic(e.target.value)} className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Tambah topik pembelajaran" />
          <button onClick={handleAddTopic} className="border-2 border-solid border-gray-400 rounded-md hover:bg-blue-700 hover:text-white font-bold transition-all duration-700 p-2 w-full mt-2">
            <h1>+ Tambahkan Topik</h1>
          </button>

          {/* Display Learning List */}
          <div className="mt-4">
            {learningList.map((topic, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <h1 className="text-md">{topic.name}</h1>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-md mb-4">
          <h1 className="font-bold mb-4">Anggota Instruktur / Dosen Pengajar</h1>
          <ComponentDropdownInstructor onAddInstructor={handleAddInstructor} />
          <div className="mt-2">
            {addedInstructors.map((instructor, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <img className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300" src={instructor.imageUrl} alt={instructor.name} />
                <div>
                  <h1 className="font-bold">{instructor.name}</h1>
                  <h1>{instructor.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Button untuk membuka ModalTambahBab */}
        <section className="my-4">
          <h1 className="font-bold">Section (BAB)</h1>
          <button onClick={toggleModal} className="border-2 border-solid border-blue-500 rounded-md hover:bg-blue-700 hover:text-white font-bold transition-all duration-700 p-2 w-full mt-2">
            + Tambah Bab
          </button>
        </section>

        {/* Menampilkan Daftar Section */}
        <section className="mt-4">
          <h2 className="font-bold mb-2">Daftar Section (Bab)</h2>
          {sections.map((section, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <h1 className="text-md">{section.title}</h1>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default KontenKiri;
