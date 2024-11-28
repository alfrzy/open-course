import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import ComponentButton from "../../components/Button/ComponentButton";

const ModuleDetail = () => {
  const { id, moduleId } = useParams();
  const [Module, setModule] = useState(null);
  const [Section, setSection] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const role = useSelector((state) => state.auth.user?.role ?? null); // Mengambil role dari Redux store

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/course/${id}/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const courseData = response.data.data;

        setCourseName(courseData.name); // Set nama kelas dari API

        let selectedModule = null;
        let selectedSection = null;

        courseData.Sections.forEach((Section) => {
          const foundModule = Section.Modules.find((Module) => Module.id === parseInt(moduleId));
          if (foundModule) {
            selectedModule = foundModule;
            selectedSection = Section;
          }
        });

        if (selectedModule) {
          setModule(selectedModule);
          setSection(selectedSection);
        } else {
          setError("Module not found.");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch module details.");
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id, moduleId]);

  if (loading) {
    return <p>Loading module details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!Module) {
    return <p>No module data available.</p>;
  }

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Konten utama */}
        <div className="flex-1 flex flex-col max-w-6xl mx-auto p-6 md:ml-64">
          {/* Navigasi */}
          <nav className="mb-4 text-sm text-gray-500">
            <ul className="flex space-x-2">
              <li>
                <Link
                  to={
                    role === 0
                      ? `/mahasiswa-detail-kelas/${id}/dashboard` // URL untuk siswa
                      : role === 1
                      ? `/dosen-detail-kelas/${id}/dashboard` // URL untuk dosen
                      : `/admin-detail-kelas/${id}/dashboard` // URL untuk admin
                  }
                  className="text-black"
                >
                  {courseName}
                </Link>
              </li>
              <li>/</li>
              {Section && (
                <li>
                  <span className="text-black">{Section.title}</span>
                </li>
              )}
              <li>/</li>
              <li>
                <span className="font-bold text-gray-900">{Module.title}</span>
              </li>
            </ul>
          </nav>

          {/* Konten detail module */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Materi Lengkap</h3>
            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: Module.description }} />
          </div>
          {role === 0 && (
            <div className="mt-6 text-right">
              <ComponentButton text={"Tandai Sudah Selesai"} color={"bg-green-600"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
