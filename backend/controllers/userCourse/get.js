const { Router } = require("express");
const UserCourseService = require("../../services/userCourseService");
const { success, error } = require("../../cores/response");

const get = Router();

// Tambahkan endpoint dengan parameter user_id
get.get("/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params; // Ambil user_id dari params
    const userCourses = await UserCourseService.findAll({ user_id });

    return success(res, "User courses retrieved successfully", userCourses);
  } catch (err) {
    return error(
      res,
      "An error occurred while fetching user courses: " + err.message
    );
  }
});

module.exports = get;
