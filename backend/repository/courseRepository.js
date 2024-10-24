const Course = require("../models/course");

class CourseRepository {
  async findAll({ instructor_id }) { 
    const whereClause = {
      deleted_at: null, 
    };

    if (instructor_id) {
      whereClause.instructor_id = instructor_id; 
    }

    const courses = await Course.findAll({
      where: whereClause,
    });

    return courses.map((course) => course.toJSON());
  }
}

module.exports = CourseRepository;
