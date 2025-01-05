import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchCourses } from "../../Data/DataCourse";
import { useFetchCourseRegistrantCount } from "../../Data/dataUserCourse";
import { FaRegClock } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineLanguage, MdCategory } from "react-icons/md";
import LandingFooter from "../../components/Footer/LandingFooter";
import Navbar from "../../components/Navbar/Navbar";

const DetailInformasiKelas = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { dataCourse, loading: courseLoading, error: courseError } = useFetchCourses(id);
  const { registrantCount, loading: registrantLoading, error: registrantError } = useFetchCourseRegistrantCount(parseInt(id));

  const course = dataCourse[0];

  const handlePayment = () => {
    navigate(`/checkout-kelas/${id}`);
  };

  if (courseLoading || registrantLoading) return <p>Loading...</p>;
  if (courseError) return <p>Error: {courseError}</p>;
  if (registrantError) return <p>Error: {registrantError}</p>;
  if (!course) return <p>Data tidak tersedia</p>;

  return (
    <>
      <Navbar />
      <section className="p-5 md:p-14">
        {/* Bagian Gambar dan Informasi Utama */}
        <section className="md:flex md:flex-row-reverse md:justify-between mb-8 pb-8 border-b border-gray-300">
          <section className="w-full h-36 md:h-56 md:w-[45%] md:rounded-xl md:overflow-hidden shadow-lg">
            <img src={course.thumbnail || "https://via.placeholder.com/150"} alt={course.name} className="w-full h-full object-cover" />
          </section>

          <section className="md:w-[45%]">
            <h1 className="font-bold text-2xl md:text-4xl text-gray-800">{course.name}</h1>

            <section className="mt-3 md:mt-10 flex justify-between items-center">
              <button onClick={handlePayment} className="py-2 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Daftar Sekarang
              </button>
              <h1 className="mt-2 text-gray-500 font-semibold">{registrantCount} pendaftar</h1>
            </section>
          </section>
        </section>

        {/* Tentang Kelas */}
        <section className="mb-8 pb-8 border-b border-gray-300">
          <h1 className="font-bold text-2xl text-gray-800">Tentang Kelas ini</h1>
          <section className="md:flex md:justify-between mt-5">
            <section className="md:w-[70%]">
              <p className="text-sm text-gray-600">{course.description || "Deskripsi tidak tersedia."}</p>
            </section>
            <section className="md:w-[25%] border-2 border-gray-400 rounded-lg p-5 shadow-sm">
              <IsiTabel title="Lamanya" value={`${course.duration} jam`} Icon={FaRegClock} />
              <IsiTabel title="Harga" value={`Rp. ${course.price}`} Icon={IoIosPricetags} />
              <IsiTabel title="Bahasa" value={course.language} Icon={MdOutlineLanguage} />
              <IsiTabel title="Kategori" value={course.category_name || "Kategori tidak tersedia"} Icon={MdCategory} />
            </section>
          </section>
        </section>

        {/* Learning List */}
        <section className="mb-8 pb-8 border-b border-gray-300">
          <h1 className="font-bold text-2xl text-gray-800">Learning List</h1>
          {course.learningList?.length > 0 ? (
            course.learningList.map((item, index) => (
              <div key={index} className="flex items-center mt-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                <p className="text-sm text-gray-600">{item.name || "Nama tidak tersedia"}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Tidak ada materi dalam daftar belajar.</p>
          )}
        </section>

        {/* Instruktur */}
        <section className="mb-8 pb-8 border-b border-gray-300">
          <h1 className="font-bold text-2xl text-gray-800">Temui Dosen Anda</h1>
          <div className="flex items-center mt-5">
            <img src={course.instructor?.image_url || "https://via.placeholder.com/100"} alt={course.instructor?.full_name} className="w-24 h-24 rounded-full mr-5 border-2 border-gray-300" />
            <div>
              <h2 className="font-bold text-lg text-gray-800">{course.instructor?.name || "Nama dosen tidak tersedia"}</h2>
              <p className="text-sm text-gray-600">{course.instructor?.email || "Email tidak tersedia"}</p>
            </div>
          </div>
        </section>
      </section>
      <LandingFooter />
    </>
  );
};

const IsiTabel = ({ title, value, Icon }) => (
  <div className="flex justify-between my-4">
    <div className="flex items-center text-gray-600">
      <Icon className="w-5 h-5 text-blue-500 mr-2" />
      <h2 className="font-medium">{title}</h2>
    </div>
    <h2 className="font-semibold">{value}</h2>
  </div>
);

export default DetailInformasiKelas;
