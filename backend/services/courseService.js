const CourseRepository = require("../repository/courseRepository");

const courseRepo = new CourseRepository();

exports.findAll = async ({ instructor_id }) => { 
  return await courseRepo.findAll({ instructor_id });
};
exports.findById = async (id) => {
  const course = await courseRepo.findById(id);
  if (!course) {
    return null;
  }
  return course;
};

