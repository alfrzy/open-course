import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const dataUserCourseApiUrl = `${
  import.meta.env.VITE_API_BASE_URL
}/v1/usercourse/`;

// get
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

//  jumlah pendaftar berdasarkan course_id
const useFetchCourseRegistrantCount = (course_id) => {
  const [registrantCount, setRegistrantCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegistrantCount = async () => {
      try {
        const response = await axios.get(dataUserCourseApiUrl);

        if (response.data.error) {
          throw new Error(response.data.error);
        }

        // Filter data berdasarkan course_id dan hitung jumlah pendaftar
        const filteredCourses = response.data.data.filter(
          (item) => item.course_id === course_id
        );
        setRegistrantCount(filteredCourses.length);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrantCount();
  }, [course_id]);

  return { registrantCount, loading, error };
};

// save UserCourses
const saveUserCourse = async ({ course_id, user_id, is_finish = false, enrollment_date, due_date }) => {
  try {
    const response = await axios.post(`${dataUserCourseApiUrl}save`, {
      course_id,
      user_id,
      is_finish,
      enrollment_date,
      due_date,
    });

    if (response.status === 201) {
      console.log("User course saved successfully:", response.data);
      return response.data;
    } else {
      throw new Error("Failed to save user course.");
    }
  } catch (error) {
    console.error("Error saving user course:", error);
    throw new Error(error.message);
  }
};

export { useFetchUserCourses, useFetchCourseRegistrantCount, saveUserCourse };

