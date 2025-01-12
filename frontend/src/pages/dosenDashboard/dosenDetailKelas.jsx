import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClassDetail from "../../components/DetailKelas/dropdownDetailKelas";
import ComponentButton from "../../components/Button/ComponentButton";
import { useSelector } from "react-redux";
import AddMemberModal from "../../components/Form/tambahAnggota";
import CourseMembersModal from "../../components/Form/anggotaKelas";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMembersModalOpen, setIsMembersModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  
  const user = useSelector((state) => state.auth.user);
  const loggedInUserId = user?.id;
  const role = user?.role ?? null;

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openMembersModal = () => setIsMembersModalOpen(true);
  const closeMembersModal = () => setIsMembersModalOpen(false);
  const openAddMemberModal = () => setIsAddMemberModalOpen(true);
  const closeAddMemberModal = () => setIsAddMemberModalOpen(false);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/course/${id}/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourse(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch course details.");
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!course) {
    return <p>No course data available.</p>;
  }

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />

      <div className="flex justify-between items-center max-w-6xl mx-auto p-6 md:ml-64">
        <nav className="text-gray-600">
          <Link to={role === 0 ? `/mahasiswa-kelas/` : role === 1 ? `/dosen-kelas` : `/admin-kelas`} className="text-black">
            Kelas
          </Link>
          <span className="mx-2"> &gt; </span>
          <span className="font-medium">{course.name}</span>
        </nav>

        {/* {(role === 1 || role === 2) && (
          <Link to={`/edit-kelas/${id}`}>
            <ComponentButton text={"Edit Kelas"} color={"bg-blue-600"} />
          </Link>
        )} */}
      </div>

      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div
          className={`flex-1 flex flex-col md:flex-row max-w-6xl mx-auto p-6 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-0" : "md:ml-64"
          }`}
        >
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
            <ClassDetail Sections={course.Sections} announcement={course.announcement} />
          </div>
          {role === 0 && (
              <div className="md:w-1/3 md:ml-6 md:mt-10">
                <div className="bg-white text-blue-800 p-4 border-2 border-blue-600 rounded-lg shadow-md max-w-md mx-auto">
                  <h3 className="text-xl font-semibold mb-4 text-center border-b border-blue-700">
                    Kerjakan Quiz
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Selesaikan soal untuk meningkatkan pemahaman Anda.
                  </p>
                  <Link to={`/quiz/${id}`}>
                    <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700">
                      Kerjakan Quiz
                    </button>
                  </Link>
                </div>
              </div>
            )}

          {/* {role === 1 && (
            <div className="md:w-1/3 md:ml-6 md:mt-10">
              <div className="bg-white text-blue-800 p-4 border-2 border-blue-600 rounded-lg shadow-md max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-4 text-center border-b border-blue-700">Jumlah Siswa</h3>
                <p className="text-4xl font-bold text-center">{course.userCount} Siswa</p>
              </div>
            </div>
          )} */}

          {(role === 1 || role === 2) && (
            <div className="bg-yellow-100 text-gray-800 p-4 border-2 border-yellow-500 rounded-lg shadow-md max-w-md mx-auto md:w-1/3 md:ml-6 md:mt-10">
              <h3 className="text-lg font-semibold mb-4 text-center border-b border-yellow-700">Anggota Kelas</h3>
              <div className="space-y-2">
                {course.Members.slice(0, 3).map((students, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center mr-2">
                      <i className="fas fa-user text-gray-600"></i>
                    </div>
                    <div>
                      <p className="font-semibold">{students.full_name}</p>
                      <p className="text-sm text-gray-600">{students.gmail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {course.Members.length > 3 && (
                <button onClick={openMembersModal} className="px-4 py-2 bg-green-500 text-white flex justify-center rounded-md hover:bg-green-600">
                  Lihat Selengkapnya
                </button>
              )}
              <button
                onClick={openAddMemberModal}
                className="mt-4 w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600"
              >
                Tambah Anggota
              </button>
            </div>
          )}
        </div>
      </div>

      {isAddMemberModalOpen && <AddMemberModal closeModal={closeAddMemberModal} courseId={id} />}
      {isMembersModalOpen && <CourseMembersModal course_id={id} isOpen={isMembersModalOpen} onClose={closeMembersModal} />}
    </div>
  );
};

export default CourseDetail;