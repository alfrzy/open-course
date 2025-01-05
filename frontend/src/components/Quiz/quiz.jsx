import React, { useState, useEffect } from "react";
import { fetchQuestions } from "../../Data/DataNilai"; // Pastikan ini mengarah ke lokasi yang benar
import { useParams } from "react-router-dom"; // Untuk mendapatkan courseId dari URL

const Quiz = () => {
  const { courseId } = useParams(); // Mengambil courseId dari URL
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      if (!courseId) {
        setError("ID Kursus tidak ditemukan. Silakan pilih kursus terlebih dahulu.");
        return;
      }

      try {
        const data = await fetchQuestions(courseId);
        console.log("Data Questions:", data); 
        if (Array.isArray(data) && data.length > 0) {
          setQuestions(data);
        } else {
          throw new Error("Invalid data format: Expected an array of questions.");
        }
      } catch (err) {
        console.error("Error loading questions", err);
        setError("Gagal memuat soal. Silakan coba lagi.");
      }
    };

    loadQuestions();
  }, [courseId]);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    console.log("Selected Option:", selectedOption);
    console.log("Correct Answer:", currentQuestion.correct_answer);

    // Bandingkan pilihan siswa dengan jawaban benar
    if (selectedOption === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    // Lanjutkan ke pertanyaan berikutnya atau akhiri kuis
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600">Memuat soal...</p>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">
          Skor Anda: {score}/{questions.length}
        </h2>
        <button
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          onClick={() => {
            setScore(0);
            setCurrentQuestionIndex(0);
            setIsFinished(false);
          }}
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-2xl p-5 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
        </h3>
        <p className="text-lg text-gray-700 mb-6">{currentQuestion.question_text}</p>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(currentQuestion.choices).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;