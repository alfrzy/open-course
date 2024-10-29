const { Router } = require("express");
const CourseService = require("../../services/courseService");
const { success, error } = require("../../cores/response");

const get = Router();

get.get("/", async (req, res) => {
  try {
    const { instructor_id } = req.query;
    const courses = await CourseService.findAll({ instructor_id });

    return success(res, "Kursus berhasil diambil", courses);
  } catch (err) {
    return error(
      res,
      "Terjadi kesalahan saat mengambil kursus: " + err.message
    );
  }
});

// GET a course by ID
get.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const course = await CourseService.findById(id); 

    if (!course) {
      return error(res, "Kursus tidak ditemukan", 404);
    }

    return success(res, "Kursus berhasil diambil", course);
  } catch (err) {
    return error(
      res,
      "Terjadi kesalahan saat mengambil kursus: " + err.message
    );
  }
});

module.exports = get;
