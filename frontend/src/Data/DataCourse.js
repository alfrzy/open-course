import { useEffect, useState } from "react";
import axios from "axios";

const dataCourseApiUrl = `${import.meta.env.VITE_API_BASE_URL}/v1/course/`;
// batasan role dan instructor_id
const useFetchCourses = (instructor_id, role, id) => {
  const [dataCourse, setDataCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = id ? `${dataCourseApiUrl}${id}` : dataCourseApiUrl;
        const params = role === 1 ? { instructor_id } : {};

        const response = await axios.get(url, { params });
        if (response.data.error) {
          throw new Error(response.data.error);
        }

        setDataCourse(id ? [response.data.data] : response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [instructor_id, role, id]);

  return { dataCourse, loading, error };
};

export { useFetchCourses };
