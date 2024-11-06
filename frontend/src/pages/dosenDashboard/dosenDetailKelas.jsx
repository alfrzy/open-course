import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClassDetail from "../../components/DetailKelas/dropdownDetailKelas";
import ComponentButton from "../../components/Button/ComponentButton";
import { useSelector } from "react-redux";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const user = useSelector((state) => state.auth.user);
  const loggedInUserId = user?.id;
  const role = user?.role ?? null;
  

  // Menampilkan user id yang sudah login
  useEffect(() => {
    if (loggedInUserId) {
      console.log("User ID:", loggedInUserId);
    }
  }, [loggedInUserId]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log ("Token", token);
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/v1/course/${id}/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
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
        <Link  
                  to={
                    role === 0 
                      ? `/mahasiswa-kelas/` // URL untuk siswa
                      : role === 1
                      ? `/dosen-kelas` // URL untuk dosen
                      : `/admin-kelas` // URL untuk admin
                  }
                  className="text-black"
                >
                  Kelas 
                </Link>
          <span className="mx-2"> &gt; </span>
          <span className="font-medium">{course.name}</span>
        </nav>

        {(role === 1 || role === 2) && (
          <Link to={`/edit-kelas/${id}`}>
            <ComponentButton text={"Edit Kelas"} color={"bg-blue-600"} />
          </Link>
        )}
      </div>

      <div className="flex">
        {/* Sidebar di mobile bisa toggle, di desktop tetap tampil */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Konten utama yang responsif terhadap sidebar */}
        <div
          className={`flex-1 flex flex-col md:flex-row max-w-6xl mx-auto p-6 transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-0" : "md:ml-64"}`}
        >
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
            <ClassDetail Sections={course.Sections} announcement={course.announcement} />
          </div>

          {/* Kotak Jumlah Siswa */}
          {role !== 0 && (
          <div className="md:w-1/3 md:ml-6 md:mt-10">
            <div className="bg-white text-blue-800 p-4 border-2 border-blue-600 rounded-lg shadow-md max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center border-b border-blue-700">
                Jumlah Siswa
              </h3>
              <p className="text-4xl font-bold text-center">{course.userCount} Siswa</p>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
