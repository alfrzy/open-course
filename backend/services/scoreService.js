const ScoreRepository = require("../repository/scoreRepository");
const scoreRepo = new ScoreRepository();

exports.findAllByUser = async (userId) => {
  return await scoreRepo.findAllByUser(userId);
};

exports.upsert = async (data) => {
  return await scoreRepo.upsert(data);
};