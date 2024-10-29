const { Router } = require("express");
const UserCourseService = require("../../services/userCourseService");
const { success, error } = require("../../cores/response");

const get = Router();

// get berdasar id
get.get("/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const userCourses = await UserCourseService.findAll({ user_id });

    return success(res, "User courses retrieved successfully", userCourses);
  } catch (err) {
    return error(
      res,
      "An error occurred while fetching user courses: " + err.message
    );
  }
});

// get all
get.get("/", async (req, res) => {
  try {
    const allCourses = await UserCourseService.findAll(); // Panggil service untuk ambil semua kursus

    return success(res, "All user courses retrieved successfully", allCourses);
  } catch (err) {
    return error(
      res,
      "An error occurred while fetching all user courses: " + err.message
    );
  }
});

module.exports = get;
