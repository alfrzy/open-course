const Course = require("../models/course");

class CourseRepository {
  // Ambil kursus berdasarkan ID
  async getCourse(id) {
    const course = await Course.findByPk(id);
    return course ? course.toJSON() : null;
  }

  // Ambil semua kursus
  async findAll() {
    const courses = await Course.findAll();
    return courses.map((course) => course.toJSON());
  }
}

module.exports = CourseRepository;
