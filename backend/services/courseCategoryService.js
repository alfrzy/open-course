const CourseCategoryRepository = require("../repository/courseCategoryRepository");
const courseCategoryRepo = new CourseCategoryRepository();

exports.findAll = async () => {
  return await courseCategoryRepo.findAll();
};
