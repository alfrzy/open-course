const Course = require("../models/course");

class CourseRepository {
  // Ambil semua kursus yang belum dihapus
  async findAll({ user_id }) {
    const whereClause = {
      deleted_at: null, // Filter soft delete berdasarkan deleted_at
    };

    if (user_id) {
      whereClause.user_id = user_id; // Filter berdasarkan user_id
    }

    const courses = await Course.findAll({
      where: whereClause,
    });

    return courses.map((course) => course.toJSON());
  }
}

module.exports = CourseRepository;


  // // Ambil semua kursus
  // async findAll() {
  //   const courses = await Course.findAll();
  //   return courses.map((course) => course.toJSON());
  // }

// // Ambil kursus berdasarkan ID
// async getCourse(id) {
//   const course = await Course.findByPk(id);
//   return course ? course.toJSON() : null;
// }
