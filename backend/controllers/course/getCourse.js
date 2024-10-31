const { Router } = require("express");
const {success, error, notFound} = require("../../cores/response");
const CourseService = require("../../services/courseService");
const { verifyToken }  = require("../../cores/authMiddleware")


const getCourse = Router();

getCourse.get("/:id/dashboard", verifyToken, async (req, res) => {
  try {
    const id = req.params.id;
    const course = await CourseService.findById(id);

    if (!course) {
      return notFound(res, "Course not found");
    }

    return success(res, "Course found", course);
  } catch (err) {
    console.error(err);
    return error(res, "Error fetching course");
  }
});

module.exports = getCourse;
