import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCourses = (id = null) => {
  const [dataCourse, setDataCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = id ? `${import.meta.env.VITE_API_BASE_URL}/v1/kelas/detailKelas/${id}` : `${import.meta.env.VITE_API_BASE_URL}/v1/kelas/getAllKelas`;
        const response = await axios.get(url);
        setDataCourse(id ? [response.data.data] : response.data.data || []);
      } catch (err) {
        setError(err.message || "Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { dataCourse, loading, error };
};
