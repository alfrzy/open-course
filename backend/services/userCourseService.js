const UserCourseRepository = require("../repository/userCourseRepository");
const userCourseRepo = new UserCourseRepository();

exports.findAll = async (filter = {}) => {
  return await userCourseRepo.findAll(filter);
};

exports.createUserCourse = async ({ course_id, user_id, is_finish, enrollment_date, due_date }) => {
  return await userCourseRepo.create({ course_id, user_id, is_finish, enrollment_date, due_date });
};