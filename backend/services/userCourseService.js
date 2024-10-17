const UserCourseRepository = require("../repository/userCourseRepository");
const userCourseRepo = new UserCourseRepository();

exports.findAll = async ({ user_id }) => {
  try {
    return await userCourseRepo.findAll({ user_id });
  } catch (error) {
    console.error("Error fetching user courses:", error);
    throw new Error("Failed to fetch user courses");
  }
};
