const Course = require("../models/course");

class CourseRepository {
  // Ambil semua kursus yang belum dihapus
  async findAll({ user_id }) {
    const whereClause = {
      deleted_at: null, 
    };

    if (user_id) {
      whereClause.user_id = user_id; 
    }

    const courses = await Course.findAll({
      where: whereClause,
    });

    return courses.map((course) => course.toJSON());
  }
}

module.exports = CourseRepository;
