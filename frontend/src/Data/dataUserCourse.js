import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const dataUserCourseApiUrl = "http://localhost:3000/api/v1/usercourse/";

// Fungsi untuk fetch data user courses berdasarkan user_id
const useFetchUserCourses = (user_id) => {
  const [dataUserCourses, setDataUserCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${dataUserCourseApiUrl}${user_id}`);
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
