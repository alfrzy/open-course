import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import axios from "axios";

const ScorePage = () => {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/score/${user.id}`);
        if (response.data.error) {
          setError(response.data.message);
        } else {
          setScores(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching scores", err);
        setError("Gagal memuat data nilai.");
      }
    };

    fetchScores();
  }, [user.id]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  if (scores.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600">Belum ada nilai untuk kursus ini.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
    <DashboardNavbar />

    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-2xl p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hasil Nilai Anda</h2>
        {scores.map((score) => (
          <div key={score.id} className="mb-4 p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">{score.Course.name}</h3>
            <p className="text-lg text-gray-700">Skor: {score.score}</p>
            <p className="text-lg text-gray-700">Total Soal: {score.total_questions}</p>
            <p className="text-lg text-gray-700">Jawaban Benar: {score.correct_answers}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ScorePage;
