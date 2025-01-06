import React, { useState, useEffect } from "react";
import { fetchQuestions } from "../../Data/DataNilai"; // Pastikan ini mengarah ke lokasi yang benar
import { useParams, useNavigate } from "react-router-dom"; // Untuk mendapatkan courseId dari URL dan navigasi
import Swal from "sweetalert2";

const Quiz = () => {
  const { courseId } = useParams(); // Mengambil courseId dari URL
  const navigate = useNavigate(); // Untuk navigasi setelah selesai
  const [questions, setQuestions] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      if (!courseId) {
        setError("ID Kursus tidak ditemukan. Silakan pilih kursus terlebih dahulu.");
        return;
      }

      try {
        const data = await fetchQuestions(courseId);
        if (Array.isArray(data) && data.length > 0) {
          setQuestions(data);
          setCourseName(data[0]?.Course?.name || "");
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

    // Bandingkan pilihan siswa dengan jawaban benar
    if (selectedOption === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    // Lanjutkan ke pertanyaan berikutnya atau akhiri kuis
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Tampilkan SweetAlert ketika selesai
      Swal.fire({
        title: "Selamat!",
        text: `Anda telah menyelesaikan kuis ini. Skor Anda adalah ${score + 1} dari ${questions.length}.`,
        icon: "success",
        confirmButtonText: "Kembali ke halaman kelas",
      }).then(() => {
        navigate(`/mahasiswa-detail-kelas/${courseId}/dashboard`); // Navigasi ke halaman detail kelas
      });
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

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-2xl p-5 bg-white shadow-md rounded-lg">
        {/* Nama kursus */}
        {courseName && (
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Kursus: {courseName}
          </h2>
        )}
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
