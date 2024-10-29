const association = require("../models/association");
const Course = require("../models/course");
const User = require("../models/user");

class CourseRepository {
  async findAll({ instructor_id } = {}) {
    const whereClause = {
      deleted_at: null,
    };

    if (instructor_id) {
      whereClause.instructor_id = instructor_id;
    }

    const courses = await Course.findAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: "Instructor", 
          attributes: ["full_name"],
        },
      ],
     
    });

    return courses.map((course) => course.toJSON());
  }
}

module.exports = CourseRepository;
