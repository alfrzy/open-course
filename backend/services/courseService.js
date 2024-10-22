const CourseRepository = require("../repository/courseRepository");

const courseRepo = new CourseRepository();

exports.findAll = async ({ user_id }) => {
  return await courseRepo.findAll({ user_id });
};