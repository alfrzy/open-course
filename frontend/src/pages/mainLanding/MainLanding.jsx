import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaGoogle } from "react-icons/fa";
import LandingFooter from "../../components/Footer/LandingFooter";
import CardKelas from "../../components/Card/CardKelas";
import { useFetchCourses } from "../../Data/DataCourse";

const MainLanding = () => {
  const [visibleCards, setVisibleCards] = useState(6);

  const { dataCourse: courses, loading, error } = useFetchCourses();

  const loadMoreCards = () => {
    setVisibleCards((prevVisible) => prevVisible + 6);
  };

  const images = [
    {
      id: 1,
      src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      alt: "GitHub",
    },
    {
      id: 2,
      src: "https://cdn-icons-png.flaticon.com/512/174/174861.png",
      alt: "PayPal",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // kiri
  const leftSlide = () => {
    setCurrentIndex((leftIndex) =>
      leftIndex === 0 ? images.length - 1 : leftIndex - 1
    );
  };

  // kanan
  const rightSlide = () => {
    setCurrentIndex((leftIndex) =>
      leftIndex === images.length - 1 ? 0 : leftIndex + 1
    );
  };

  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 font-poppins">
        <div className="container py-5 px-5 md:px-10">
          <div className="flex flex-col items-center ">
            <h1 className="font-bold text-xl md:text-5xl md:mt-5 md:text-center">
              Bangun Keterampilan Anda
            </h1>
            <p className="text-center text-sm md:text-base py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              eligendi!, <br /> Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Voluptates, praesentium!
            </p>
          </div>
          <hr className="border-1 border-black" />
          <div className="flex flex-col md:flex-row justify-center gap-10 py-8">
            <div className="flex flex-col text-center md:text-left md:w-1/3 md:mt-10">
              <h2 className="font-bold text-xl md:text-2xl">
                KENAPA HARUS FE OPEN COURSE?
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Et omnia in potestate nostra esse natura liber, libera, libere
                valeant; sed illis non est in nostra.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <a
                  href="#"
                  key={idx}
                  className="flex flex-col items-center justify-center p-5 bg-amber-100 border rounded shadow hover:bg-amber-300 transition duration-300 ease-in-out"
                >
                  <FaGoogle size={48} className="text-gray-600" />
                  <p className="font-normal text-sm text-gray-700 mt-2 text-center">
                    Et omnia in potestate
                  </p>
                </a>
              ))}
            </div>
          </div>
          <hr className="border-1 border-black" />

          <div className="flex flex-col items-center gap-10 py-5">
            <div className="flex flex-col text-center md:w-1/3 md:mt-10">
              <h2 className="font-bold text-xl md:text-2xl">Semua Kelas</h2>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Et omnia in potestate nostra esse natura liber, libera, libere
                valeant; sed illis non est in nostra.
              </p>
            </div>

            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.slice(0, visibleCards).map((course) => (
                  <CardKelas
                    key={course.id}
                    title={course.name}
                    image={course.thumbnail}
                    deskripsi={course.description}
                    dosen={course.Instructor.full_name}
                    kelas={"Satuan"}
                    waktu={`${course.duration} hours`}
                    harga={`$${course.price}`}
                  />
                ))}
              </div>
            )}

            {/* Conditional rendering  */}
            {visibleCards < courses.length && (
              <button
                onClick={loadMoreCards}
                className="mt-5 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Selengkapnya
              </button>
            )}
          </div>
          <hr className="border-1 border-black" />
          {/*  */}
          <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-4">
            <div className="flex items-center justify-center space-x-4">
              <button onClick={leftSlide} className="text-3xl">
                &#9664;
              </button>

              <div className="bg-yellow-100 p-6 rounded-md flex items-center justify-center">
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-24 h-24 object-contain"
                />
              </div>

              <button onClick={rightSlide} className="text-3xl">
                &#9654;
              </button>
            </div>

            <div className="mt-4 text-center md:text-right">
              <h2 className="text-xl font-semibold ">Kerja Sama Kami</h2>
              <p className="mt-2 ">
                Et omnia in potestate nostra esse natura liber, libera, libere
                valeant; sed illis non est in nostra.
              </p>
            </div>
          </div>
          <hr className="border-1 border-black mb-5" />
          {/*  */}
          <div className="bg-blue-200 p-6 flex justify-center md:justify-start">
            <div className="flex flex-col w-full ">
              <label
                htmlFor="email"
                className="block mb-4 text-lg font-semibold text-center md:text-left"
              >
                Tulis Email Anda untuk Mendapat Informasi Kelas Terbaru dari
                Kami
              </label>
              <div className="flex items-center max-w-xl space-x-2">
                <input
                  type="email"
                  id="email"
                  className="bg-white border border-gray-400 text-gray-900 text-sm rounded-l-lg focus:ring-gray-500 focus:border-gray-500 w-full p-3"
                  placeholder="Tuliskan email Anda"
                  required
                />
                <button
                  className="bg-green-500 text-white font-semibold p-3 px-6 rounded-r-lg hover:bg-green-600 transition"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LandingFooter />
    </div>
  );
};

export default MainLanding;
