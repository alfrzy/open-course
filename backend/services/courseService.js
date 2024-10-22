const CourseRepository = require("../repository/courseRepository");

const courseRepo = new CourseRepository();

exports.findAll = async ({ user_id }) => {
  try {
    return await courseRepo.findAll({ user_id });
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }
};
