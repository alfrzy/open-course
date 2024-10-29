import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const dataUserCourseApiUrl = `${
  import.meta.env.VITE_API_BASE_URL
}/v1/usercourse/`;

const useFetchUserCourses = (user_id = null) => {
  const [dataUserCourses, setDataUserCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = dataUserCourseApiUrl;
        if (user_id) {
          url += user_id; // Jika user_id ada, tambah ke url
        }

        const response = await axios.get(url);
        console.log("API Response:", response.data);

        if (response.data.error) {
          throw new Error(response.data.error);
        }

        setDataUserCourses(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user_id]);

  return { dataUserCourses, loading, error };
};

export default useFetchUserCourses;
