const { Router } = require("express");
const QuestionService = require("../../services/questionService");
const { success, error } = require("../../cores/response");

const post = Router();

post.post("/post", async (req, res) => {
    const { course_id, question_text, choices, correct_answer } = req.body;

    try {
      // Pastikan ada data yang diperlukan
      if (!course_id || !question_text || !choices || !correct_answer) {
        return error(res, "Semua data harus diisi");
      }
  
      // Panggil service untuk membuat pertanyaan
      const newQuestion = await QuestionService.create({
        course_id,
        question_text,
        choices,
        correct_answer,
      });
  
      return success(res, "Pertanyaan berhasil dibuat", newQuestion);
    } catch (err) {
      console.error(err);
      return error(res, "Terjadi kesalahan saat membuat pertanyaan: " + err.message);
    }
  });

  module.exports = post;