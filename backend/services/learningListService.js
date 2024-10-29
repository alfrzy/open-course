const learningListRepository = require("../repository/learningListRepository");
const learningListRepo = new learningListRepository();

exports.findAll = async (filter = {}) => {
  return await learningListRepo.findAll(filter);
};
