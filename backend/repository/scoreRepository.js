const Score = require("../models/score");
const Course = require("../models/course")

class ScoreRepository {
  async findAllByUser(userId) {
    return await Score.findAll({
      where: { user_id: userId },
      include: [{
        model: Course, // Menyertakan data Course terkait
        as: 'Course',  // Alias untuk relasi, pastikan sesuai dengan relasi yang sudah didefinisikan
        attributes: ['name'] // Mengambil hanya nama kursus
      }]
    });
  }

  async upsert(data) {
    return await Score.upsert(data);
  }

  async findById(id) {
    return await Score.findByPk(id);
  }
}

module.exports = ScoreRepository;