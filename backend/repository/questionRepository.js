const Question = require("../models/question");

class QuestionRepository {
  async findAllByCourse(courseId) {
    return await Question.findAll({ where: { course_id: courseId } });
  }

  async create(data) {
    return await Question.create(data);
  }

  async findById(id) {
    return await Question.findByPk(id);
  }

  async update(id, data) {
    const question = await Question.findByPk(id);
    if (!question) return null;

    await question.update(data);
    return question.toJSON();
  }

  async delete(id) {
    const question = await Question.findByPk(id);
    if (!question) return null;

    await question.destroy();
    return question.toJSON();
  }
}

module.exports = QuestionRepository;