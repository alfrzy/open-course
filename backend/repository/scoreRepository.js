const Score = require("../models/score");

class ScoreRepository {
  async findAllByUser(userId) {
    return await Score.findAll({ where: { user_id: userId } });
  }

  async upsert(data) {
    return await Score.upsert(data);
  }

  async findById(id) {
    return await Score.findByPk(id);
  }
}

module.exports = ScoreRepository;