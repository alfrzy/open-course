import { useEffect, useState } from "react";
import axios from "axios";

const dataCourseApiUrl = "http://localhost:3000/api/v1/course/";

// Fungsi untuk fetch data kursus
const useFetchCourses = (user_id, role) => {
  const [dataCourse, setDataCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = role === 1 ? { user_id } : {};

        const response = await axios.get(dataCourseApiUrl, { params });
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        setDataCourse(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user_id, role]);

  return { dataCourse, loading, error };
};

export default useFetchCourses;
