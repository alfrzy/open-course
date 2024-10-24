const UserCourseRepository = require("../repository/userCourseRepository");
const userCourseRepo = new UserCourseRepository();

exports.findAll = async ({ user_id }) => {
  return await userCourseRepo.findAll({ user_id });
};