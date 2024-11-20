const { Router } = require("express");
const UserCourseService = require("../../services/userCourseService");
const { success, error } = require("../../cores/response");

const get = Router();

get.get("/", async (req, res) => {
  try {
    const { user_id, course_id } = req.query;
    const filter = {};

    // Tambahkan user_id ke filter jika ada
    if (user_id) {
      filter.user_id = user_id;
    }
    
    // Tambahkan course_id ke filter jika ada
    if (course_id) {
      filter.course_id = course_id;
    }

    // Panggil service dengan filter dinamis
    const userCourses = await UserCourseService.findAll(filter);

    return success(res, "User courses retrieved successfully", userCourses);
  } catch (err) {
    return error(
      res,
      "An error occurred while fetching user courses: " + err.message
    );
  }
});

module.exports = get;
