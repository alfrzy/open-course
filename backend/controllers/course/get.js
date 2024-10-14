const { Router } = require("express");
const CourseService = require("../../services/courseService");
const { success, error } = require("../../cores/response");

const get = Router();

get.get("/", async (req, res) => {
  try {
    const courses = await CourseService.findAll();

    return success(res, "Kursus berhasil diambil", courses);
  } catch (err) {
    return error(
      res,
      "Terjadi kesalahan saat mengambil kursus: " + err.message
    );
  }
});

// Endpoint untuk mengambil kursus berdasarkan ID
get.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await CourseService.getCourseById(id); 

    if (!course) {
      return error(res, "Kursus tidak ditemukan");
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
