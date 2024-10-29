const association = require("../models/association");
const LearningList = require("../models/learningList");

class LearningListRepository {
  async findAll({  } = {}) {
    const whereClause = {
      deleted_at: null,
    };

    const learningLists = await LearningList.findAll({
      where: whereClause,
    });

    return learningLists.map((learningList) => learningList.toJSON());
  }
}

module.exports = LearningListRepository;
