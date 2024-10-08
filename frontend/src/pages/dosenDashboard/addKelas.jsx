import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import KontenKanan from "./componentKontenKanan";
import KontenKiri from "./componentKontenKiri";
import Swal from "sweetalert2";

const AddKelas = () => {
  const languages = ["Indonesia", "Inggris", "Jawa", "Spanyol"];
  const Tags = ["Akuntansi", "Filosofi", "Fikih", "Manajemen", "Sejarah"];
  const [selectedTags, setSelectedTags] = useState([]);

  const [instructors, setInstructors] = useState([
    {
      name: "Muhammad insan sanjaya gege",
      title: "Dosen Senior",
      matkul: "Matematika",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      name: "Dosen B",
      title: "Dosen Junior",
      matkul: "Matematika",
      imageUrl: "https://picsum.photos/201/301",
    },
    {
      name: "Dosen C",
      title: "Dosen Pembimbing",
      matkul: "Matematika",
      imageUrl: "https://picsum.photos/202/302",
    },
  ]);

  const [addedInstructors, setAddedInstructors] = useState([]);
  const [learningTopics, setLearningTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBabMenuOpen, setIsBabMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // input
  const [courseName, setCoursename] = useState(""); // State untuk nama kelas
  const [courseDescription, setCourseDescription] = useState(""); // State untuk deskripsi kelas

  const handleAddInstructor = (instructor) => {
    setAddedInstructors((prev) => [...prev, instructor]);
    setInstructors((prev) =>
      prev.filter((ins) => ins.name !== instructor.name)
    );
  };

  const handleAddTopic = () => {
    if (newTopic) {
      // diset ke learning topic sblme
      setLearningTopics((prev) => [...prev, newTopic]);
      setNewTopic("");
    }
  };

  // titik tiga
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // 
  const toggleBabMenu = () => {
    setIsBabMenuOpen((prev) => !prev);
  };

  // Tutup menu kalau ngeklik yang lain
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Handle perubahan tag
  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Fungsi untuk menyimpan kelas ke database
  const handleSaveClass = async () => {
    const classData = {
      name: courseName,
      description: courseDescription,
    };

    try {
      await addCourse(classData); // Simpan ke database
      // Tampilkan SweetAlert2
      await Swal.fire({
        title: "Sukses!",
        text: "Kelas berhasil disimpan!",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/dosen-kelas"; // Arahkan ke /dosen-kelas
        }
      });
      setCoursename("");
      setCourseDescription("");
    } catch (error) {
      console.error("Error saving class:", error);
      // Tampilkan SweetAlert2 untuk error
      Swal.fire({
        title: "Error!",
        text: "Gagal menyimpan kelas!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 md:ml-64">
          <div className="flex justify-between">
            <h1 className="font-bold mb-2 text-lg">Tambah Kelas</h1>
            <div className="flex justify-between gap-3">
              <button className="px-2 border-2 hover:bg-red-700 py-2 transition-all duration-300 text-red-600 hover:text-white">
                <h1 className="">Hapus Kelas</h1>
              </button>

              <button
                onClick={handleSaveClass}
                className="text-blue-500 px-2 border-[1px] border-solid border-blue-500 hover:bg-blue-700 py-2 transition-all duration-300 hover:text-white"
              >
                <h1 className="">Simpan Kelas</h1>
              </button>

              <button className="px-2 bg-blue-700 text-white hover:bg-opacity-30 hover:bg-blue-700 py-2 transition-all duration-300">
                <h1 className="hover:text-white text-white">Publikasikan</h1>
              </button>
            </div>
          </div>

          <hr className="border-0.5 border-solid border-black my-3" />

          <section className="flex justify-between py-10">
            <KontenKiri
              learningTopics={learningTopics}
              newTopic={newTopic}
              handleAddTopic={handleAddTopic}
              instructors={instructors}
              addedInstructors={addedInstructors}
              handleAddInstructor={handleAddInstructor}
              isBabMenuOpen={isBabMenuOpen}
              toggleBabMenu={toggleBabMenu}
              menuRef={menuRef}
              toggleMenu={toggleMenu}
              isMenuOpen={isMenuOpen}
              setNewTopic={setNewTopic}
              courseName={courseName}
              setCourseName={setCoursename}
              courseDescription={courseDescription}
              setCourseDescription={setCourseDescription}
            />

            <KontenKanan
              languages={languages}
              Tags={Tags}
              handleTagClick={handleTagClick}
              selectedTags={selectedTags}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddKelas;
