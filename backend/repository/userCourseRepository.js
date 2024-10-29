const association = require("../models/association");
const UserCourses = require("../models/userCourse");
const Course = require("../models/course");
const User = require("../models/user");

class UserCourseRepository {
  async findAll({ user_id } = {}) {  
    const whereClause = {
      deleted_at: null,
    };

    // Jika user_id disediakan kasih /id
    if (user_id) {
      whereClause.user_id = user_id;
    }

    const userCourses = await UserCourses.findAll({
      where: whereClause,  
      include: [
        {
          model: Course,
          as: "Courses",
          attributes: ["name", "instructor_id", "duration"],
          include: [
            {
              model: User,
              as: "Instructor", 
              attributes: ["full_name"],
            },
          ],
        },
      ],
    });

    return userCourses.map((userCourse) => userCourse.toJSON());
  }
}

module.exports = UserCourseRepository;
