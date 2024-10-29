import { useState, useEffect } from "react";
import axios from "axios";

const dataLearningListApiUrl = `${import.meta.env.VITE_API_BASE_URL}/v1/learninglist/`;

const useFetchLearningList = (user_id = null) => {
  const [dataLearningList, setDataLearningList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = dataLearningListApiUrl;
    
        const response = await axios.get(url);
        console.log("API Response:", response.data);

        if (response.data.error) {
          throw new Error(response.data.error);
        }

        setDataLearningList(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user_id]);

  return { dataLearningList, loading, error };
};

export default useFetchLearningList;
