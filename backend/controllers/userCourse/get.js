const { Router } = require("express");
const UserCourseService = require("../../services/userCourseService");
const { success, error } = require("../../cores/response");

const get = Router();

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

module.exports = get;
