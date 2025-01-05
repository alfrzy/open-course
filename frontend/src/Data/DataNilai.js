import axios from 'axios';

// const dataNilaiApiUrl = `${import.meta.env.VITE_API_BASE_URL}/v1/question`;

export const fetchQuestions = async (courseId) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/question/${courseId}`);
    console.log("API Response:", response.data.data); 
    return response.data.data; // Sesuaikan dengan struktur respons API Anda
  } catch (err) {
    console.error("Failed to fetch questions:", err);
    throw err;
  }
};