const LearningList = require("../models/learningList");

class LearningListRepository {
  async createList(data, options) {
    try {
      const learningList = await LearningList.create(data, options);
      return learningList.toJSON();
    } catch (error) {
      console.error("Error creating learning List:", error);
      throw new Error("Failed to create learning List");
    }
  }

  async getListById(id) {
    try {
      const learningList = await LearningList.findByPk(id);
      return learningList ? learningList.toJSON() : null;
    } catch (error) {
      console.error("Error fetching learningList by ID:", error);
      throw new Error("Failed to fetch learningList");
    }
  }

  async updateList(id, data, options) {
    try {
      const learningList = await LearningList.findByPk(id);
      if (!learningList) return null;
      await learningList.update(data, options);
      return learningList.toJSON();
    } catch (error) {
      console.error("Error updating learningList:", error);
      throw new Error("Failed to update learningList");
    }
  }

  async getAllListByCourseId(course_id) {
    try {
      const learningLists = await LearningList.findAll({ where: { course_id } });
      return learningLists.map((learningList) => learningList.toJSON());
    } catch (error) {
      console.error("Error fetching learningLists for course:", error);
      throw new Error("Failed to fetch learningLists");
    }
  }
}

module.exports = LearningListRepository;
