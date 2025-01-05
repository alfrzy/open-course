import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
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

  const leftSlide = () => {
    setCurrentIndex((leftIndex) => (leftIndex === 0 ? images.length - 1 : leftIndex - 1));
  };

  const rightSlide = () => {
    setCurrentIndex((leftIndex) => (leftIndex === images.length - 1 ? 0 : leftIndex + 1));
  };

  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 font-poppins">
        <div className="container mx-auto py-10 px-5">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-bold text-3xl md:text-5xl md:mt-5">Bangun Keterampilan Anda</h1>
            <p className="text-gray-600 text-sm md:text-base py-5">
                Belajar kapan saja, di mana saja, <br />
                dengan materi berkualitas yang dirancang untuk kesuksesan Anda.
            </p>
          </div>
          <hr className="border-1 border-black my-8" />

          {/* Why FE Open Course */}
          <div className="flex flex-col md:flex-row items-center gap-10 py-8">
            <div className="flex flex-col text-center md:text-left md:w-1/3">
              <h2 className="font-bold text-xl md:text-2xl">KENAPA HARUS FE OPEN COURSE?</h2>
              <p className="mt-3 text-sm md:text-base text-gray-600">
              Akses mudah ke kursus berkualitas dengan harga terjangkau, kapan saja dan di mana saja.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {courses.slice(0, 6).map((course) => (
                <Link
                  to={`/detail-informasi-kelas/${course.id}`}
                  key={course.id}
                  className="max-w-xs flex flex-col items-center justify-center p-5 bg-blue-100 border rounded shadow hover:bg-blue-300 transition duration-300 ease-in-out"
                >
                  <img 
                  src={course.thumbnail}
                  alt={course.name}
                  />
                </Link>
              ))}
            </div>
          </div>
          <hr className="border-1 border-black my-8" />

          {/* All Classes */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-bold text-xl md:text-2xl">Semua Kelas</h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {courses.slice(0, visibleCards).map((course) => (
                  <CardKelas
                    key={course.id}
                    id={course.id || "data kosong"}
                    title={course.name || "data kosong"}
                    image={course.thumbnail || "https://via.placeholder.com/200"}
                    deskripsi={course.description || "data kosong"}
                    dosen={course.instructor || "username dosen tidak ada"}
                    kelas={"Satuan"}
                    waktu={course.duration ? `${course.duration} hours` : "data kosong"}
                    harga={course.price ? `$${course.price}` : "data kosong"}
                  />
                ))}
              </div>
            )}
            {visibleCards < courses.length && (
              <button
                onClick={loadMoreCards}
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Selengkapnya
              </button>
            )}
          </div>
          <hr className="border-1 border-black my-8" />

          {/* Partnership */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6">
            <button onClick={leftSlide} className="text-3xl">
              &#9664;
            </button>
            <div className="bg-yellow-100 p-6 rounded-md flex items-center justify-center">
              <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-24 h-24 object-contain" />
            </div>
            <button onClick={rightSlide} className="text-3xl">
              &#9654;
            </button>
            <div className="text-center md:text-right">
              <h2 className="text-xl font-semibold">Kerja Sama Kami</h2>
              <p className="mt-2 text-gray-600">
                Et omnia in potestate nostra esse natura liber, libera, libere valeant; sed illis non est in nostra.
              </p>
            </div>
          </div>
          <hr className="border-1 border-black my-8" />

          {/* Subscribe */}
          <div className="bg-blue-200 p-6 rounded-lg flex flex-col items-center">
            <label
              htmlFor="email"
              className="block mb-4 text-lg font-semibold text-center"
            >
              Tulis Email Anda untuk Mendapat Informasi Kelas Terbaru dari Kami
            </label>
            <div className="flex items-center max-w-xl space-x-2">
              <input
                type="email"
                id="email"
                className="bg-white border border-gray-400 text-gray-900 text-sm rounded-l-lg focus:ring-gray-500 focus:border-gray-500 w-full p-3"
                placeholder="Tuliskan email Anda"
                required
              />
              <button className="bg-green-500 text-white font-semibold p-3 px-6 rounded-r-lg hover:bg-green-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <LandingFooter />
    </div>
  );
};

export default MainLanding;
