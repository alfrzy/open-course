import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/v1`;

const useFetchTotalSiswaInCourses = (instructorId) => {
  const [totalSiswa, setTotalSiswa] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTotalSiswa = async () => {
      try {
        setLoading(true);
        // Ambil daftar course berdasarkan instructor_id
        const coursesResponse = await axios.get(`${API_BASE_URL}/course`, {
          params: { instructor_id: instructorId },
        });
        const courses = coursesResponse.data.data;

        // Ambil jumlah siswa dari setiap course_id
        let total = 0;
        for (const course of courses) {
          const userCoursesResponse = await axios.get(
            `${API_BASE_URL}/usercourse`,
            {
              params: { course_id: course.id },
            }
          );
          const students = userCoursesResponse.data.data;

          total += students.length; 
        }

        setTotalSiswa(total); 
      } catch (error) {
        console.error("Error fetching total students:", error); 
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalSiswa();
  }, [instructorId]);

  return { totalSiswa, loading, error };
};

export default useFetchTotalSiswaInCourses;
