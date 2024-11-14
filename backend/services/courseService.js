const CourseRepository = require("../repository/courseRepository");

const courseRepo = new CourseRepository();

// all
exports.findAll = async ({ instructor_id }) => { 
  return await courseRepo.findAll({ instructor_id });
};

// by id
exports.findById = async (id) => {
  return await courseRepo.findById(id);
};

exports.addMember = async (courseId, userId) => {
  return await courseRepo.addMember(courseId, userId);
};