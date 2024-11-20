const { Router } = require("express");
const CourseService = require("../../services/courseService");
const { success, error } = require("../../cores/response");

const get = Router();

// GET a course by ID (for main landing)
get.get("/:id/landing", async (req, res) => {
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