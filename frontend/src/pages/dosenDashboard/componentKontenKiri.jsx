import React, { useState } from "react";
import ComponentDropdownInstructor from "./componentDropdownInstrctor";
import ModalTambahBab from "./componentModalTambahBab";
import { BiSolidSquareRounded, BiDotsVerticalRounded, BiChevronDown, BiChevronRight } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const KontenKiri = ({
  learningTopics,
  newTopic,
  handleAddTopic,
  instructors,
  addedInstructors,
  handleAddInstructor,
  isBabMenuOpen,
  toggleBabMenu,
  menuRef,
  toggleMenu,
  isMenuOpen,
  setNewTopic,
  // kursus name
  courseName,
  setCourseName,
  courseDescription,
  setCourseDescription,
}) => {
  // State untuk mengontrol modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBabClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

        <section className="mt-2">
          {learningTopics.map((topic, index) => (
            <div key={index} className="flex items-center">
              <BiSolidSquareRounded className="text-[10px] mr-2" />
              <h1 className="text-md">{topic}</h1>
            </div>
          ))}
        </section>

        <div className="my-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            <h1 className="font-bold">Apa yang akan dipelajari</h1>
          </label>
          <input type="text" value={newTopic} onChange={(e) => setNewTopic(e.target.value)} className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Hal yang dipelajari" />
          <button onClick={handleAddTopic} className="border-2 border-solid border-gray-400 rounded-md hover:bg-blue-700 hover:text-white font-bold transition-all duration-700 p-2 w-full">
            <h1 className="">+ Tambahkan Topik</h1>
          </button>
        </div>

        <section className="rounded-md mb-4">
          <h1 className="font-bold mb-4">Anggota Instruktur / Dosen Pengajar</h1>
          <ComponentDropdownInstructor instructors={instructors.filter((instructor) => !addedInstructors.some((addedInstructor) => addedInstructor.name === instructor.name))} onAddInstructor={handleAddInstructor} />
        </section>

        <section className="mb-4">
          {addedInstructors.map((instructor, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <img className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={instructor.imageUrl} alt={instructor.name} />
              <div>
                <h1 className="font-bold">{instructor.full_name}</h1>
                <h1>{instructor.username}</h1>
              </div>
            </div>
          ))}
        </section>

        {/* Section(BAB) */}
        <section>
          <h1 className="font-bold">Section(BAB)</h1>
          <div className={`border-2 border-blue-500 rounded-md p-3 mt-2 ${isBabMenuOpen ? "pb-4" : ""}`}>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <GiHamburgerMenu className="text-lg mr-2" />
                <button onClick={toggleBabMenu}>{isBabMenuOpen ? <BiChevronDown className="text-lg mr-2" /> : <BiChevronRight className="text-lg mr-2" />}</button>
                <h1>Pengumuman</h1>
              </div>
              <div className="relative" ref={menuRef}>
                <BiDotsVerticalRounded className="text-xl cursor-pointer" onClick={toggleMenu} />
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <ul className="py-1 text-sm text-gray-700">
                      <li className="hover:bg-gray-100 cursor-pointer p-2">Tambah Quiz</li>
                      <li className="hover:bg-gray-100 cursor-pointer p-2">Tambah Materi</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {isBabMenuOpen && (
              <div className="pl-8 mt-2">
                <div className="border-[1px] border-dashed mb-2 border-gray-500 "></div>
                <div className="flex items-center">
                  <GiHamburgerMenu className="text-lg mr-2" />
                  <h1>Pengantar Ekonomi Islam</h1>
                </div>
                <div className="flex items-center">
                  <GiHamburgerMenu className="text-lg mr-2" />
                  <h1>Quiz Pengenalan Keuangan</h1>
                </div>
                <div className="flex items-center">
                  <GiHamburgerMenu className="text-lg mr-2" />
                  <h1>Forum Diskusi</h1>
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="my-3">
          <button className=" py-[6px] px-[20px] text-white font-bold rounded hover:bg-opacity-50 transition-all duration-150 bg-blue-500" onClick={handleAddBabClick}>
            Tambah bab
          </button>
        </div>
      </section>

      {/* Modal Tambah BAB */}
      <ModalTambahBab isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default KontenKiri;
