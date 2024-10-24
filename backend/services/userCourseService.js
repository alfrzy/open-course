const UserCourseRepository = require("../repository/userCourseRepository");
const userCourseRepo = new UserCourseRepository();

exports.findAll = async (filter = {}) => {
  return await userCourseRepo.findAll(filter);
};
