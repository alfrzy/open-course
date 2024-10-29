import React from "react";
import { useParams } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa6";
import { useFetchCourses } from "../../Data/DataCourse";
import { MdCategory } from "react-icons/md";
import {  useFetchCourseRegistrantCount } from "../../Data/dataUserCourse";

const DetailInformasiKelas = () => {
  const { id } = useParams();
  const { dataCourse, loading: courseLoading, error: courseError } = useFetchCourses(null, null, id);
  const { registrantCount, loading: registrantLoading, error: registrantError } = useFetchCourseRegistrantCount(parseInt(id));

  const course = dataCourse[0];

  if (courseLoading || registrantLoading) return <p>Loading...</p>;
  if (courseError) return <p>Error: {courseError}</p>;
  if (registrantError) return <p>Error: {registrantError}</p>;
  if (!course) return <p>Data tidak tersedia</p>;

  return (
    <>
      <section className="p-5 md:p-14">
        <section className="md:flex md:flex-row-reverse md:justify-between">
          {/* gambar */}
          <section className="w-full h-36 md:h-56  md:w-[45%] md:rounded-xl md:overflow-hidden">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="lorem photos"
              className="w-full h-full"
            />
          </section>

          <section className="md:w-[45%]">
            <section className="mt-5 md:w-[75%]">
              <h1 className="font-bold text-2xl md:text-4xl">{course.name}</h1>
            </section>

            <section className="md:w-[90%] md:mt-4">
              <p className="text-sm text-justify">{course.description}</p>
            </section>

            {/* Daftar sekarang && jumlah pendaftar */}
            <section className="mt-3 md:mt-10  md:flex md:justify-start  md:w-full">
              <button className="py-1 md:py-2 px-4 bg-blue-700 hover:bg-blue-500 transition-all duration-300 text-white rounded-sm w-full md:w-[40%]">
                <h1 className="font-bold">Daftar Sekarang</h1>
              </button>
              <h1 className="text-center mt-1 text-gray-500 md:ml-20 font-bold">
                {registrantCount} pendaftar
              </h1>
            </section>
          </section>
        </section>

        {/* line */}
        <section className="h-[2px] bg-gray-700 w-full mt-3 md:mt-10"></section>

        {/* tentang kelas ini */}
        <section className="mt-5">
          <h1 className="font-bold text-xl md:text-2xl">Tentang Kelas ini</h1>
          <h1 className="text-sm">100 dilihat</h1>
        </section>

        {/* deskripsi dan tabel */}
        <section className=" md:flex md:justify-between">
          {/* deskripsi */}
          <section className="mt-3 md:w-[70%] md:mt-5">
            <p className="text-sm  text-justify md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              quo sed nulla fugit quos expedita sit, neque ducimus reprehenderit
              reiciendis illo. Impedit ea facilis illo perferendis quisquam
              praesentium temporibus accusantium!
            </p>
            <br />
            <p className="text-sm  text-justify md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              quo sed nulla fugit quos expedita sit, neque ducimus reprehenderit
              reiciendis illo. Impedit ea facilis illo perferendis quisquam
              praesentium temporibus accusantium!
            </p>
            <br />
            <p className="text-sm  text-justify md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              quo sed nulla fugit quos expedita sit, neque ducimus reprehenderit
              reiciendis illo. Impedit ea facilis illo perferendis quisquam
              praesentium temporibus accusantium!
            </p>
          </section>

          {/* tabel */}
          <section className="w-full border-2 border-solid border-gray-400 py-3 px-3 mt-5 md:w-[25%]">
            <IsiTabel
              title="Lamanya"
              value={` ${course.duration} jam`}
              Icon={FaRegClock}
            />
            <div className="h-[1px] bg-gray-600 w-full my-2"></div>
            <IsiTabel
              title="Upaya"
              value="null mas"
              Icon={GiAnticlockwiseRotation}
            />
            <div className="h-[1px] bg-gray-600 w-full my-2"></div>
            <IsiTabel
              title="Harga"
              value={` ${course.price}$ `}
              Icon={IoIosPricetags}
            />
            <div className="h-[1px] bg-gray-600 w-full my-2"></div>
            <IsiTabel
              title="Bahasa"
              value={` ${course.language} `}
              Icon={MdOutlineLanguage}
            />
            <div className="h-[1px] bg-gray-600 w-full my-2"></div>
            <IsiTabel title="Transkrip" value="Tersedia" Icon={FaFileVideo} />
            <div className="h-[1px] bg-gray-600 w-full my-2"></div>
            <IsiTabel
              title="Kategori"
              value={course.Category.name || "Kategori tidak tersedia"}
              Icon={MdCategory}
            />
          </section>
        </section>

        {/* line */}
        <section className="h-[2px] bg-gray-700 w-full mt-5 md:mt-10"></section>

        {/* apa yang kamu pelajari */}
        <section className="mt-5">
          <h1 className="font-bold text-xl md:text-2xl mb-2">Learning list</h1>
          {course.LearningLists && course.LearningLists.length > 0 ? (
            course.LearningLists.map((item, index) => (
              <div key={index} className="px-4 flex items-center">
                <div className="rounded-full h-2 w-2 mr-2 bg-gray-500"></div>
                <h1 className="text-sm md:text-[16px]">{item.name}</h1>
              </div>
            ))
          ) : (
            <p className="px-4 text-sm md:text-[16px] text-gray-500">
              Tidak ada materi dalam daftar belajar.
            </p>
          )}
        </section>

        {/* line */}
        <section className="h-[2px] bg-gray-700 w-full mt-3 md:mt-10"></section>

        {/* temui instruktur anda */}
        <section className="mt-5 ">
          <h1 className="font-bold text-xl md:text-2xl">
            Temui instruktur Anda
          </h1>
          <section className="mb-4 mt-4 flex justify-center md:justify-start px-10">
            <div className="md:flex gap-2 mb-2 items-center ">
              <div className="flex justify-center">
                <img
                  className="w-24 h-24 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={"https://picsum.photos/seed/picsum/200/300"}
                  alt={"nama"}
                />
              </div>

              <div>
                <h1 className="font-bold text-lg text-center">
                  {course.Instructor.full_name}
                </h1>
                <h1 className="text-sm text-center">
                  {course.Instructor.gmail}
                </h1>
                <h1 className="text-sm text-center">
                  {course.Instructor.phone}
                </h1>
              </div>
            </div>
          </section>
        </section>

        {/* line */}
        <section className="h-[2px] bg-gray-700 w-full mt-3 md:mt-10"></section>

        {/* gambar && mulai belajar hari ini */}
        <section className="md:flex md:flex-row-reverse md:justify-between md:pr-20 ">
          {/* gambar */}
          <section className="w-full h-56  mt-8 md:w-[30%]">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="lorem"
              className="w-full h-full"
            />
          </section>

          {/* mulai belajar hari ini */}
          <section className="mt-5 md:w-[45%] pt-5  ">
            <h1 className="font-bold text-xl md:text-2xl">
              Mulai Belajar Hari Ini
            </h1>
            <p className="text-sm text-justify md:mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              eius, quam sunt atque eveniet quod et accusantium totam porro quis
              neque dignissimos iste maxime repudiandae, sed, minus voluptas
              libero eum.
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default DetailInformasiKelas;

const IsiTabel = ({ title, value, Icon }) => {
  return (
    <div className="flex justify-between my-2">
      <div className="flex items-center">
        <Icon className="w-4 h-4" />
        <h2 className="text-sm ml-2">{title}</h2>
      </div>
      <div>
        <h2 className="text-sm">{value}</h2>
      </div>
    </div>
  );
};
