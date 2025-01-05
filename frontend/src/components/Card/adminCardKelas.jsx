import React from "react";
import { useFetchCourseRegistrantCount } from "../../Data/dataUserCourse";

const AdminCardKelas = ({ course }) => {
    const {
        registrantCount,
      } = useFetchCourseRegistrantCount(course.id);


  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      {course.thumbnail ? (
        <img
          src={course.thumbnail}
          alt={course.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" className="w-full h-full"/>
          
        </div>
      )}

      {/* ----------- title -------------- */}
      <div className="">
        <h1 className="font-bold text-xl">{course.name}</h1>
      </div>

      {/* ----------- garis -------------- */}
      <div className="h-[1px] bg-gray-500 w-full my-2"></div>

      {/* ----------- garis -------------- */}
      <div className="">
        <h1 className="text-center">Jumlah Pembelian </h1>
        <h1 className="text-center">{registrantCount}</h1>
      </div>

    </div>
  );
};

export default AdminCardKelas;
