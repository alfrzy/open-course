const { Router } = require("express");
const CourseService = require("../../services/courseService");
const { success, error } = require("../../cores/response");

const get = Router();

get.get("/", async (req, res) => {
  try {
    const { user_id } = req.query;
    const courses = await CourseService.findAll({ user_id });

    return success(res, "Kursus berhasil diambil", courses);
  } catch (err) {
    return error(
      res,
      "Terjadi kesalahan saat mengambil kursus: " + err.message
    );
  }
});

module.exports = get;
