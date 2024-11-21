import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchCourses } from "../../Data/DataCourse";
import { useFetchCourseRegistrantCount } from "../../Data/dataUserCourse";
import { FaRegClock } from "react-icons/fa";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineLanguage, MdCategory } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa6";

const DetailInformasiKelas = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { dataCourse, loading: courseLoading, error: courseError } = useFetchCourses(id);
  const { registrantCount, loading: registrantLoading, error: registrantError } = useFetchCourseRegistrantCount(parseInt(id));
  console.log(dataCourse);
  console.log(registrantCount);

  const course = dataCourse[0];

  const handlePayment = () => {
    navigate(`/checkout-kelas/${id}`);
  };

  if (courseLoading || registrantLoading) return <p>Loading...</p>;
  if (courseError) return <p>Error: {courseError}</p>;
  if (registrantError) return <p>Error: {registrantError}</p>;
  if (!course) return <p>Data tidak tersedia</p>;

  return (
    <section className="p-5 md:p-14">
      {/* Bagian Gambar dan Informasi Utama */}
      <section className="md:flex md:flex-row-reverse md:justify-between">
        <section className="w-full h-36 md:h-56 md:w-[45%] md:rounded-xl md:overflow-hidden">
          <img src={course.image_url || "https://via.placeholder.com/150"} alt={course.name} className="w-full h-full" />
        </section>

        <section className="md:w-[45%]">
          <h1 className="font-bold text-2xl md:text-4xl">{course.name}</h1>
          <p className="text-sm text-justify mt-3 md:mt-4">{course.description}</p>

          <section className="mt-3 md:mt-5 flex justify-between">
            <button onClick={handlePayment} className="py-2 px-4 bg-blue-700 hover:bg-blue-500 text-white rounded-sm w-[40%] transition-all duration-300">
              Daftar Sekarang
            </button>
            <h1 className="mt-2 text-gray-500 font-bold">{registrantCount} pendaftar</h1>
          </section>
        </section>
      </section>

      {/* Tentang Kelas */}
      <section className="mt-10">
        <h1 className="font-bold text-2xl">Tentang Kelas ini</h1>
        <section className="md:flex md:justify-between mt-5">
          <section className="md:w-[70%]">
            <p className="text-sm">{course.long_description || "Deskripsi tidak tersedia."}</p>
          </section>
          <section className="md:w-[25%] border-2 border-gray-400 p-3">
            <IsiTabel title="Lamanya" value={`${course.duration} jam`} Icon={FaRegClock} />
            <IsiTabel title="Harga" value={`${course.price}$`} Icon={IoIosPricetags} />
            <IsiTabel title="Bahasa" value={course.language} Icon={MdOutlineLanguage} />
            <IsiTabel title="Kategori" value={course.category_name || "Kategori tidak tersedia"} Icon={MdCategory} />
          </section>
        </section>
      </section>

      {/* Learning List */}
      <section className="mt-10">
        <h1 className="font-bold text-2xl">Learning List</h1>
        {course.learningList?.length > 0 ? (
          course.learningList.map((item, index) => (
            <div key={index} className="flex items-center mt-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
              <p className="text-sm">{item.name || "Nama tidak tersedia"}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Tidak ada materi dalam daftar belajar.</p>
        )}
      </section>

      {/* Instruktur */}
      <section className="mt-10">
        <h1 className="font-bold text-2xl">Temui Dosen Anda</h1>
        <div className="flex items-center mt-5">
          <img src={course.instructor?.image_url || "https://via.placeholder.com/100"} alt={course.instructor?.full_name} className="w-24 h-24 rounded-full mr-5" />
          <div>
            <h2 className="font-bold text-lg">{course.instructor?.name || "Nama dosen tidak tersedia"}</h2>
            <p className="text-sm">{course.instructor?.email || "Email tidak tersedia"}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DetailInformasiKelas;

const IsiTabel = ({ title, value, Icon }) => (
  <div className="flex justify-between my-2">
    <div className="flex items-center">
      <Icon className="w-4 h-4 mr-2" />
      <h2>{title}</h2>
    </div>
    <h2>{value}</h2>
  </div>
);
