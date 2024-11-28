import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import KontenKanan from "./componentKontenKanan";
import KontenKiri from "./componentKontenKiri";
import Swal from "sweetalert2";
import ModalTambahBab from "./componentModalTambahBab";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AddKelas = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const languages = ["Indonesia", "English", "Spanish", "French"];

  const [courseName, setCoursename] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [learningList, setLearningList] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [addedInstructors, setAddedInstructors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [addedCategory, setAddedCategory] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [sections, setSections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [jamPerminggu, setJamPerminggu] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSaveClass = async () => {
    const classData = {
      name: courseName,
      description: courseDescription,
      // tags: selectedTags,
      // learningTopics,
      course_category_id: selectedTags,
      instructor_id: selectedInstructor,
      price: parseFloat(price),
      jam_perminggu: parseInt(jamPerminggu),
      duration: parseInt(duration),
      language: selectedLanguage,
      sections,
      learningList,
      // tag: selectedTags.map((tag) => tag),
    };
    console.log("Data yang dikirim ke server:", classData);

    try {
      const url = id ? `http://localhost:3000/api/v1/kelas/addKelas/${id}` : "http://localhost:3000/api/v1/kelas/addKelas";
      const response = await axios.post(url, classData);

      Swal.fire({
        title: "Sukses!",
        text: id ? "Kelas berhasil diperbarui!" : "Kelas berhasil ditambahkan!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => navigate("/dosen-addkelas"));
    } catch (error) {
      if (error.response) {
        console.error("Error response server:", error.response.data);
      } else if (error.request) {
        console.error("No response dari server:", error.request);
      } else {
        console.error("Error dalam setup request:", error.message);
      }
      Swal.fire({
        title: "Error!",
        text: "Gagal menyimpan kelas!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleAddLearningTopic = () => {
    if (newTopic.trim() !== "") {
      setLearningList((prev) => [...prev, { name: newTopic }]);
      setNewTopic("");
    }
    // setSections((prev) => [...prev, { name: newTopic}]);
  };

  const handleSaveSection = (section) => {
    setSections((prev) => [...prev, section]);
  };

  const handleAddInstructor = (instructor) => {
    setAddedInstructors((prev) => [...prev, instructor]);
    setSelectedInstructor(instructor.id);
  };
  const handleCategorySelect = (categoryId) => {
    setAddedCategory((prev) => [...prev, categoryId]);
    setSelectedCategory(categoryId.id);
  };

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 md:ml-64">
          <div className="flex justify-between">
            <h1 className="font-bold mb-2 text-lg">{id ? "Edit Kelas" : "Tambah Kelas"}</h1>
            <div className="flex justify-between gap-3">
              <button onClick={handleSaveClass} className="text-blue-500 px-2 border-[1px] border-solid border-blue-500 hover:bg-blue-700 py-2 transition-all duration-300 hover:text-white">
                <h1>Simpan Kelas</h1>
              </button>
            </div>
          </div>

          <hr className="border-0.5 border-solid border-black my-3" />

          <section className="flex justify-between py-10">
            <KontenKiri
              learningList={learningList}
              newTopic={newTopic}
              setNewTopic={setNewTopic}
              handleAddTopic={handleAddLearningTopic}
              courseName={courseName}
              setCourseName={setCoursename}
              courseDescription={courseDescription}
              setCourseDescription={setCourseDescription}
              addedInstructors={addedInstructors}
              handleAddInstructor={handleAddInstructor}
              toggleModal={toggleModal}
              sections={sections}
            />
            <KontenKanan
              languages={languages}
              Tags={selectedTags}
              handleTagClick={setSelectedTags}
              addedCategory={addedCategory}
              setPrice={setPrice}
              setJamPerminggu={setJamPerminggu}
              setDuration={setDuration}
              setLanguage={setSelectedLanguage}
            />
          </section>

          <ModalTambahBab isOpen={isModalOpen} onClose={toggleModal} onSaveSection={handleSaveSection} setPrice={setPrice} setJamPerminggu={setJamPerminggu} setDuration={setDuration} />
        </div>
      </div>
    </div>
  );
};

export default AddKelas;
