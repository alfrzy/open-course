const QuestionRepository = require("../repository/questionRepository");
const questionRepo = new QuestionRepository();

exports.findAllByCourse = async (courseId) => {
  return await questionRepo.findAllByCourse(courseId);
};

exports.create = async (data) => {
  return await questionRepo.create(data);
};

exports.update = async (id, data) => {
  return await questionRepo.update(id, data);
};

exports.delete = async (id) => {
  return await questionRepo.delete(id);
};