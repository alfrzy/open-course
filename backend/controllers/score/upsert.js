const ScoreService = require("../../services/scoreService");
const { success, error } = require("../../cores/response");
const { Router } = require("express");

const upsert = Router();

upsert.post("/upsert", async (req, res) => {
  const { user_id, course_id, score, total_questions, correct_answers } = req.body;

  try {
    // Simpan nilai ke database dengan data yang baru
    const newScore = await ScoreService.upsert({
      user_id,
      course_id,
      score,
      total_questions,  // Menyimpan jumlah soal
      correct_answers,  // Menyimpan jumlah soal yang benar
    });

    return success(res, "Nilai berhasil disimpan", newScore);
  } catch (err) {
    console.error("Terjadi kesalahan saat menyimpan nilai:", err);
    return error(res, "Terjadi kesalahan saat menyimpan nilai: " + err.message);
  }
});

module.exports = upsert;