const CourseRepository = require("../repository/courseRepository");

const courseRepo = new CourseRepository();

exports.findAll = async ({ instructor_id }) => { 
  return await courseRepo.findAll({ instructor_id });
};
